
import React from 'react';
import { MenuToggle } from '../ui/MenuToggle';

interface TopBarProps {
  onOpenMenu: () => void;
  onLogoClick: () => void;
  isOpen: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMenu, onLogoClick, isOpen }) => {
  const containerStyle: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    padding: "20px clamp(20px, 5vw, 40px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2001,
    backgroundColor: "black",
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: "'AlroCustom', sans-serif",
    fontWeight: "400",
    color: "transparent",
    background: "linear-gradient(90deg, #35DF86, #5277C1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontSize: "clamp(1.5rem, 4vw, 3rem)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    pointerEvents: "auto",
    cursor: "pointer"
  };

  // Added %20 to handle the space in "logo white.svg" safely
  const logoImageStyle: React.CSSProperties = {
    height: "1.2em",
    width: "1.5em",
    marginTop: "-5px",
    background: "linear-gradient(90deg, #35DF86, #5277C1)",
    WebkitMask: "url('/logo/logo%20white.svg') no-repeat center / contain",
    mask: "url('/logo/logo%20white.svg') no-repeat center / contain",
  };

  return (
    <header style={containerStyle}>
      <div className="logo-interactive" style={logoTextStyle} onClick={onLogoClick}>
        <div style={logoImageStyle} />
        caster
      </div>
      <MenuToggle onToggle={onOpenMenu} isOpen={isOpen} />
    </header>
  );
};
