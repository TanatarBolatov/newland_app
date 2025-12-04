
import React from 'react';
import { Star, Zap, Users, Smile, MessageCircle, Cpu, Briefcase } from '../Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, sectionId?: string) => void;
  currentPage: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, currentPage }) => {
  const menuItems = [
    { label: "ПОЧЕМУ МЫ", id: "comparison", icon: Star, page: 'home' },
    { label: "ВОЗМОЖНОСТИ", id: "features", icon: Zap, page: 'home' },
    { label: "ПАРТНЕРЫ", id: "partners", icon: Users, page: 'home' },
    { label: "ТАРИФЫ АКТЕРОВ", id: "pricing", icon: Smile, page: 'home' },
    { label: "FAQ", id: "faq", icon: MessageCircle, page: 'home' },
    { label: "ФУНКЦИИ", id: "key-features", icon: Cpu, page: 'business' },
    { label: "БИЗНЕС ТАРИФЫ", id: "business-pricing", icon: Briefcase, page: 'business' },
  ];

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />

      <aside className={`custom-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="sidebar-link"
              onClick={() => onNavigate(item.page, item.id)}
            >
              <item.icon className="menu-icon" size={20} color="#35DF86" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
