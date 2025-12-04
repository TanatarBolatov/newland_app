
import React from 'react';
import { AppleCarousel } from '../components/shared/AppleCarousel';

export const FeaturesSection = () => {
  const features = [
    { src: '/videos/film.webm', title: "Заявка в 1 клик" },
    { src: '/videos/film.webm', title: "Все кастинги в одном месте" },
    { src: '/videos/film.webm', title: "Читает текст с фото" },
    { src: '/videos/film.webm', title: "Идеальный порядок" },
    { src: '/videos/film.webm', title: "Персональный фильтр" },
    { src: '/videos/film.webm', title: "Без мусора" }
  ];

  return (
    <section id="features" className="section-container" style={{ paddingBottom: '0' }}>
      <div className="universal-black-box" style={{ padding: '60px 20px', overflow: 'hidden' }}>
        <div style={{ width: '100%', marginBottom: '40px', paddingLeft: '20px', textAlign: 'left' }}>
          <h2 className="section-title" style={{ margin: 0, lineHeight: 1.1, display: 'flex', alignItems: 'baseline', gap: '30px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: 'white' }}>ВОЗМОЖНОСТИ</span>
            <span style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", fontFamily: "'AlroCustom', sans-serif", textTransform: "none", fontWeight: "400", background: "linear-gradient(90deg, #4ade80 0%, #60a5fa 50%, #35DF86 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>caster ai</span>
          </h2>
        </div>
        <AppleCarousel items={features} />
      </div>
    </section>
  );
};
