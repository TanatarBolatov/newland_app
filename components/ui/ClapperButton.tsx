
import React, { useState } from 'react';

interface ClapperButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.FC<any>;
  color?: string;
}

export const ClapperButton: React.FC<ClapperButtonProps> = ({ text, onClick, icon: Icon, color = "white" }) => {
  const [isClapping, setIsClapping] = useState(false);
  const handleClick = () => {
    if (isClapping) return;
    setIsClapping(true);
    if (onClick) onClick();
    setTimeout(() => { setIsClapping(false); }, 250);
  };

  return (
    <button
      onClick={handleClick}
      className={`clapper-btn-wrapper ${isClapping ? "is-clapping" : ""}`}
      aria-label={text}
    >
      <div className="clapper-container">
        <div
          className="clapper-top glass-clapper-style"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 12px, transparent 12px, transparent 24px)`
          }}
        />
        <div className="clapper-bottom glass-clapper-style">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: color, fontFamily: "var(--font-head)", fontSize: "24px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1.5px", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            {Icon && <Icon size={24} />} {text}
          </div>
        </div>
      </div>
    </button>
  );
};
