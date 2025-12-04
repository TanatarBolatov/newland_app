
import React, { useState, useRef, useCallback, useEffect } from 'react';

interface AppleCarouselProps {
  items: {
    src: string;
    title: string;
  }[]
}

export const AppleCarousel: React.FC<AppleCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => { setActiveIndex((prev) => (prev + 1) % items.length); }, 5000);
  }, [items.length]);

  useEffect(() => { startTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [startTimer]);
  const handleManualChange = (index: number) => { setActiveIndex(index); startTimer(); };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) { const playPromise = video.play(); if (playPromise !== undefined) playPromise.catch(() => { }); }
      else video.pause();
    });
  }, [activeIndex]);

  return (
    <div className="apple-slider-container">
      <div className="apple-slider-track">
        {items.map((item, index) => {
          let circularDistance = (index - activeIndex + items.length) % items.length;
          if (circularDistance > items.length / 2) circularDistance -= items.length;
          let style: React.CSSProperties = { transform: `translateX(${circularDistance * 55}%) scale(0.7)`, zIndex: 1, opacity: 0.2, pointerEvents: 'none', filter: 'brightness(0.3)', transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)' };
          if (circularDistance === 0) style = { transform: 'translateX(0) scale(1)', zIndex: 10, opacity: 1, pointerEvents: 'auto', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)', filter: 'brightness(1)', transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)' };
          else if (circularDistance === 1 || circularDistance === -1) style = { transform: `translateX(${circularDistance * 65}%) scale(0.85)`, zIndex: 5, opacity: 0.5, pointerEvents: 'auto', filter: 'brightness(0.5)', transition: 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)' };
          else if (Math.abs(circularDistance) >= 2) style.opacity = 0;

          return (
            <div key={index} className={`apple-slide-item ${index === activeIndex ? 'active' : ''}`} style={style} onClick={() => handleManualChange(index)}>
              <video ref={el => { videoRefs.current[index] = el; }} src={item.src} className="apple-slide-media" muted autoPlay loop={true} playsInline onEnded={(e) => (e.target as HTMLVideoElement).play()} />
              <div className="apple-slide-content">
                <h3 className="apple-slide-title">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="nav-dots-wrapper">
        {items.map((_, i) => <div key={i} className={`nav-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => handleManualChange(i)} />)}
      </div>
    </div>
  );
};