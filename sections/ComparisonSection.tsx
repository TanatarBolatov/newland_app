
import React from 'react';
import { ComparisonCard } from '../components/shared/ComparisonCard';

export const ComparisonSection = () => {
  const comparisonData = [
    { title: "", desc: "", video: "/videos/video_one.webm", poster: "/logo/casterlogo.jpg" },
    { title: "", desc: "", video: "/videos/video_4.mp4", poster: "/logo/casterlogo.jpg" },
    { title: "", desc: "", video: "/videos/video_3.mp4", poster: "/logo/casterlogo.jpg" },
    { title: "", desc: "", video: "/videos/video_77.mp4", poster: "/logo/casterlogo.jpg" },
    { title: "", desc: "", video: "/videos/video 5.mp4", poster: "/logo/casterlogo.jpg" },
    { title: "Не сидят в 20-ти разных WA/TG чатах — только в одном месте", desc: "", video: "/videos/tawa.mp4", poster: "/logo/casterlogo.jpg" }
  ];

  return (
    <section id="comparison" className="section-container comparison-section">
      <div className="universal-black-box">
        <div className="new-comp-grid">
          <div className="bento-header-card">
            <h2 className="section-title" style={{ margin: 0, lineHeight: 1.1, display: 'flex', alignItems: 'baseline', gap: '30px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: 'white' }}>ПОЧЕМУ ВЫБИРАЮТ</span>
              <span style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", fontFamily: "'AlroCustom', sans-serif", textTransform: "none", fontWeight: "400", background: "linear-gradient(90deg, #4ade80 0%, #60a5fa 50%, #35DF86 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>caster ai</span>
            </h2>
          </div>
          {comparisonData.map((item, index) => <ComparisonCard key={index} item={item} />)}
        </div>
      </div>
    </section>
  );
};
