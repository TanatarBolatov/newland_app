
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const linkStyle = {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontFamily: "inherit"
  };

  return (
    <footer style={{ backgroundColor: "black", padding: "80px 20px 40px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px" }}>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => onNavigate('offer')}
            style={linkStyle}
            className="hover:text-white"
          >
            Публичная оферта
          </button>
          <span style={{ color: "#333" }}>•</span>
          <button
            onClick={() => onNavigate('privacy')}
            style={linkStyle}
            className="hover:text-white"
          >
            Политика конфиденциальности
          </button>
          <span style={{ color: "#333" }}>•</span>
          <a href="mailto:telmanov.darkhan@gmail.com" style={linkStyle} className="hover:text-white">
            Поддержка
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "#6b7280", fontSize: "0.85rem" }}>
          <div>ИП Телманов Дархан — ИИН 041124500027</div>
          <div>Казахстан, г. Астана, ул. 117, 41</div>
        </div>
        <div style={{ color: "#4b5563", fontSize: "0.8rem" }}>© 2024 Caster AI. Все права защищены.</div>
      </div>
    </footer>
  )
}
