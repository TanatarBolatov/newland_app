
import React from 'react';
import { ComparisonCard } from '../components/shared/ComparisonCard';

export const KeyFeaturesSection = () => {
  const featuresData = [
    { title: "Общайся внутри платформы с актерами не засоряя ватсап и телеграм", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "Загружай выборку сразу в объявление", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "Смотри пробы как в тиндере", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "Сохраняй в любимчиков", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "Отправляй кастинг в 1 клик", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "2000+ актеров в базе", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "Персональная рекомендация актеров с помощью ИИ", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" },
    { title: "KYA - know your actor. Просматривайте данные, опыт и отзывы о актере", video: "/videos/video_test.webm", poster: "/logo/casterlogo.jpg" }
  ];

  return (
    <section id="key-features" className="section-container comparison-section">
      <div className="universal-black-box">
        <div className="new-comp-grid">
          <div className="bento-header-card">
            <h2 className="section-title" style={{ margin: 0, lineHeight: 1.1, display: 'flex', alignItems: 'baseline', gap: '30px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: 'white' }}>КЛЮЧЕВЫЕ ФУНКЦИИ</span>
              <span style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", fontFamily: "'AlroCustom', sans-serif", textTransform: "none", fontWeight: "400", background: "linear-gradient(90deg, #4ade80 0%, #60a5fa 50%, #35DF86 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display: "block" }}>caster ai</span>
            </h2>
          </div>
          {featuresData.map((item, index) => <ComparisonCard key={index} item={item} />)}
        </div>
      </div>
    </section>
  );
};
