
import React from 'react';

export const MenuToggle = ({ onToggle, isOpen }: { onToggle: () => void; isOpen: boolean }) => {
  return (
    <button className="menu-toggle-btn" onClick={onToggle}>
      <div className={`hamburger-wrapper ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </button>
  );
};
