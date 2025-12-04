
import React, { useEffect } from 'react';
import { HeroSection } from '../sections/HeroSection';
import { GridBackgroundWrapper } from '../components/shared/GridBackgroundWrapper';
import { ComparisonSection } from '../sections/ComparisonSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { PartnersSection } from '../sections/PartnersSection';
import { PricingSection } from '../sections/PricingSection';
import { FAQSection } from '../sections/FAQSection';

interface HomeViewProps {
  setPage: (page: string) => void;
  pendingSection?: string | null;
  onScrollComplete?: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setPage, pendingSection, onScrollComplete }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).lenis) (window as any).lenis.scrollTo(element);
      else element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle pending scroll target when coming from another page
  useEffect(() => {
    if (pendingSection) {
      // Use a small timeout to ensure the DOM is fully rendered and App.tsx's scroll-to-top has finished
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingSection);
        if (element) {
          if ((window as any).lenis) {
            // Use immediate: false for a smooth scroll arrival to the section
            (window as any).lenis.scrollTo(element, { offset: -50 });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        if (onScrollComplete) onScrollComplete();
      }, 100); // 100ms delay is usually enough to let the layout settle

      return () => clearTimeout(timer);
    }
  }, [pendingSection, onScrollComplete]);

  return (
    <>
      <HeroSection
        onBusinessClick={() => setPage('business')}
        onActorsClick={() => handleScrollTo('comparison')}
      />
      <GridBackgroundWrapper>
        <ComparisonSection />
        <FeaturesSection />
        <PartnersSection />
        <PricingSection id="pricing" />
        <FAQSection />
      </GridBackgroundWrapper>
    </>
  );
};
