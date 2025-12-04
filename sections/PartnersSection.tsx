
import React, { useRef, useEffect } from 'react';
import { ScrambleText } from '../components/ui/ScrambleText';

export const PartnersSection = () => {
  const partners = [
    { src: "/partners/kazakfilm.png", link: "https://kazakhfilm.kz/main", alt: "Kazakhfilm" },
    { src: "/partners/kinopoisk.png", link: "https://hd.kinopoisk.ru/ru-kz", alt: "Kinopoisk" },
    { src: "/partners/netflix.png", link: "https://www.netflix.com/kz-ru/", alt: "Netflix" },
    { src: "/partners/okko.png", link: "https://okko.tv/", alt: "Okko" },
    { src: "/partners/salem.png", link: "https://salementertainment.kz/", alt: "Salem Social Media" },
    { src: "/partners/start.png", link: "https://start.ru/", alt: "START" },
    { src: "/partners/tiger.png", link: "https://www.instagram.com/tiger_films_kz/", alt: "Tiger Films" },
    { src: "/partners/unico.png", link: "https://unicoplay.com/ru", alt: "Unico Play" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const autoRotateSpeed = 0.5;

  // Animation Loop
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Auto-rotate if not dragging
      if (!isDragging.current) {
        rotationRef.current -= autoRotateSpeed; // Rotate continuously
      }

      // Apply rotation
      if (sliderRef.current) {
        sliderRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // -- Touch Events (Mobile) --
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    lastX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    const delta = currentX - lastX.current;

    // Sensitivity factor (adjust as needed)
    rotationRef.current += delta * 0.5;

    lastX.current = currentX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // -- Mouse Events (Desktop) --
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - lastX.current;
    rotationRef.current += delta * 0.5;
    lastX.current = e.clientX;
  };

  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseLeave = () => { isDragging.current = false; };

  return (
    <section id="partners" className="partners-section-wrapper">
      <div className="partners-container-box">
        <ScrambleText defaultText="НАШИ ПАРТНЕРЫ" hoverText="ЛИДЕРЫ РЫНКА" className="scramble-text" />
        <div
          className="partners-slider-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="partners-fade-overlay" />
          <div className="partners-slider" ref={sliderRef}>
            {partners.map((partner, i) => (
              <span key={i} style={{ '--i': i + 1 } as React.CSSProperties}>
                <a href={partner.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }} draggable={false}>
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    draggable={false}
                    onError={(e) => { const target = e.target as HTMLImageElement; target.style.display = 'none'; if (target.parentNode) { (target.parentNode as HTMLElement).style.border = '1px solid #555'; (target.parentNode as HTMLElement).innerText = partner.alt; } }}
                  />
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
