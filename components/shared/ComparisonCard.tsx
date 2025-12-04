
import React from 'react';

interface ComparisonCardProps {
  item: {
    title: string;
    desc?: string;
    video: string;
    poster: string;
    src?: string;
  }
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({ item }) => {
  return (
    <div className="new-comp-card">
      <div className="comp-video-container">
        <video className="comp-video" autoPlay muted loop={true} playsInline poster={item.poster} onEnded={(e) => (e.target as HTMLVideoElement).play()}>
          <source src={item.video || item.src} type="video/webm" />
        </video>
      </div>
      <h3 className="comp-card-title">{item.title}</h3>
      <div className="comp-text-block"></div>
    </div>
  );
};
