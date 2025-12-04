
import React from 'react';
import { ClapperButton } from '../components/ui/ClapperButton';
import { VIDEO_PATH, POSTER_IMAGE } from '../constants';

interface HeroSectionProps {
  onBusinessClick: () => void;
  onActorsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBusinessClick, onActorsClick }) => {

  const glossySubtitleStyle: React.CSSProperties = {
    fontFamily: "'AlroCustom', sans-serif",
    fontWeight: "400",
    textTransform: "none",
    lineHeight: "1.1",
    color: "transparent",
    background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
    filter: "drop-shadow(0 0 15px rgba(53, 223, 134, 0.2)) drop-shadow(0 0 5px rgba(255,255,255,0.3))",
    cursor: "default",
    letterSpacing: "1px",
    whiteSpace: "normal", // Changed from nowrap to normal to allow wrapping
    textAlign: "center"
  };

  const aiStyle: React.CSSProperties = {
    fontFamily: "'AlroCustom', sans-serif",
    background: "linear-gradient(90deg, #35DF86, #5277C1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    WebkitTextStroke: "0px",
    textShadow: "0 0 20px rgba(53, 223, 134, 0.5)"
  };

  return (
    <div id="hero" className="hero-container" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <video src={VIDEO_PATH} poster={POSTER_IMAGE} autoPlay muted loop={true} playsInline style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} onEnded={(e) => (e.target as HTMLVideoElement).play()} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))", zIndex: 1 }} />
      <div className="hero-content" style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0px", textAlign: "center" }}>
        <div className="content-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "100%", padding: "0 20px" }}>
          {/* Adjusted clamp values: lowered min size from 2.5rem to 1.8rem */}
          <h2 className="hero-subtitle" style={{ fontSize: "clamp(1.8rem, 10vw, 9rem)", margin: 0, marginTop: "0px", maxWidth: "95vw", ...glossySubtitleStyle }}>
            All castings in one with <span style={aiStyle}>AI</span>
          </h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", width: "100%" }}>
            <ClapperButton text="Business" color="#ffffff" onClick={onBusinessClick} />
            <ClapperButton text="Actors" color="#ffffff" onClick={onActorsClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
