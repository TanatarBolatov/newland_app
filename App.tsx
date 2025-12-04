
import React, { useState, useLayoutEffect } from "react";
import { useLenis } from "./hooks/useLenis";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { Footer } from "./components/layout/Footer";
import { HomeView } from "./views/HomeView";
import { BusinessView } from "./views/BusinessView";
import { OfferView } from "./views/OfferView";
import { PrivacyView } from "./views/PrivacyView";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  // State to track if we need to scroll to a specific section after page load
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useLenis();

  // NUCLEAR OPTION: Force scroll to top on ANY page change
  useLayoutEffect(() => {
    // 1. Disable browser's automatic scroll restoration to prevent fighting
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = (window as any).lenis;

    // 2. Kill any momentum from previous scroll
    if (lenis) lenis.stop();

    // 3. Force native browser scroll to 0,0 immediately
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // 4. Force Lenis internal state to 0 and restart
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true, lock: true });

      // Small timeout to allow the DOM to repaint the new view height
      setTimeout(() => {
        lenis.start();
      }, 10);
    }
  }, [currentPage]);

  // Unified navigation handler
  const handleNavigation = (page: string, sectionId?: string) => {
    if (page === currentPage && sectionId) {
      // If we are already on the page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(element);
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // If changing page, set the pending section (if any) and change page
      if (sectionId) {
        setPendingSection(sectionId);
      }
      setCurrentPage(page);
    }
    // Close sidebar on navigation
    setIsSidebarOpen(false);
  };

  const renderView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            setPage={(page) => handleNavigation(page)}
            pendingSection={pendingSection}
            onScrollComplete={() => setPendingSection(null)}
          />
        );
      case 'business': return <BusinessView />;
      case 'offer': return <OfferView />;
      case 'privacy': return <PrivacyView />;
      default:
        return (
          <HomeView
            setPage={(page) => handleNavigation(page)}
            pendingSection={pendingSection}
            onScrollComplete={() => setPendingSection(null)}
          />
        );
    }
  };

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="turbulent-displace" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>
      <GlobalStyles />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onNavigate={handleNavigation}
          currentPage={currentPage}
        />

        <TopBar
          isOpen={isSidebarOpen}
          onOpenMenu={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogoClick={() => {
            handleNavigation('home');
            // Force manual scroll logic to trigger again if we are already on home but scrolled down
            if (currentPage === 'home') {
              window.scrollTo(0, 0);
              if ((window as any).lenis) (window as any).lenis.scrollTo(0, { immediate: true, force: true });
            }
          }}
        />

        {renderView()}

        <Footer onNavigate={(page) => handleNavigation(page)} />
      </div>
    </>
  );
}
