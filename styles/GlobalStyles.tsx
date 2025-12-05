
import React from 'react';
import { GRID_SIZE } from '../constants';

const styles = `
  /* --- FONTS --- */
  @font-face { font-family: 'MontCustom'; src: url('/fonts/mont_heavy.ttf') format('truetype'); font-weight: normal; font-style: normal; font-display: swap; }
  @font-face { font-family: 'AlroCustom'; src: url('/fonts/alro-regular.otf') format('opentype'); font-weight: 400; font-style: normal; font-display: swap; }
  @font-face { font-family: 'AlroCustom'; src: url('/fonts/alro-regular.otf') format('opentype'); font-weight: 700; font-style: normal; font-display: swap; }

  * { box-sizing: border-box; }
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-stopped { overflow: hidden; }
  .lenis.lenis-scrolling iframe { pointer-events: none; }

  :root {
    --electric-border-color: #35DF86;
    --electric-light-color: rgba(53, 223, 134, 0.8);
    --gradient-color: rgba(53, 223, 134, 0.4);
    --star-border-color: #5277C1;
    --star-light-color: rgba(82, 119, 193, 0.5);
    --star-gradient-color: rgba(82, 119, 193, 0.3);
    --color-neutral-900: #050507;
    --font-head: 'MontCustom', sans-serif;
    --font-body: 'MontCustom', sans-serif;
  }

  body {
    background-color: black;
    margin: 0;
    font-family: var(--font-body);
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Prevent horizontal scroll on mobile */
  }

  button, input, textarea { font-family: var(--font-body); }

  /* --- SIDEBAR STYLES --- */
  .custom-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 320px; 
    z-index: 2000;
    background: conic-gradient(from 180deg at 50% 50%, #1B4F47, #5277C1, #5C9FC5, #35DF86, #1B4F47);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    box-shadow: -10px 0 40px rgba(0,0,0,0.6);
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* Mobile Sidebar: Full Width */
  @media (max-width: 480px) {
    .custom-sidebar {
      width: 100%;
      padding: 20px;
    }
  }

  .custom-sidebar.closed { transform: translateX(100%); }
  .custom-sidebar.open { transform: translateX(0); }

  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
    z-index: 1999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s ease;
  }
  
  .sidebar-overlay.visible { opacity: 1; pointer-events: auto; }

  .sidebar-menu { display: flex; flex-direction: column; gap: 12px; }

  .sidebar-link {
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: var(--font-head);
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    background: transparent;
    border: 1px solid transparent;
    text-align: left;
    padding: 16px 24px;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
  }

  .sidebar-link:hover {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transform: translateX(-5px);
  }

  .menu-icon { opacity: 0.9; }

  /* --- MENU TOGGLE --- */
  .menu-toggle-btn {
    z-index: 1500;
    background: transparent;
    border: none;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 480px) {
    .menu-toggle-btn {
      width: 60px;
      height: 60px;
    }
  }

  .menu-toggle-btn:hover { transform: scale(1.1); }

  .hamburger-wrapper {
    width: 60px;
    height: 45px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    .hamburger-wrapper {
      width: 40px;
      height: 30px;
    }
    .hamburger-line {
      height: 4px !important;
    }
    .hamburger-line:nth-child(2), .hamburger-line:nth-child(3) { top: 13px !important; }
    .hamburger-line:nth-child(4) { top: 26px !important; }
    
    .hamburger-wrapper.open .hamburger-line:nth-child(1) { top: 13px !important; }
    .hamburger-wrapper.open .hamburger-line:nth-child(4) { top: 13px !important; }
  }

  .hamburger-line {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: linear-gradient(90deg, #35DF86, #5277C1);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  
  .hamburger-line:nth-child(1) { top: 0px; }
  .hamburger-line:nth-child(2), .hamburger-line:nth-child(3) { top: 18px; }
  .hamburger-line:nth-child(4) { top: 36px; }

  .hamburger-wrapper.open .hamburger-line:nth-child(1) { top: 18px; width: 0%; left: 50%; }
  .hamburger-wrapper.open .hamburger-line:nth-child(2) { transform: rotate(45deg); }
  .hamburger-wrapper.open .hamburger-line:nth-child(3) { transform: rotate(-45deg); }
  .hamburger-wrapper.open .hamburger-line:nth-child(4) { top: 18px; width: 0%; left: 50%; }

  /* --- LOGO --- */
  .logo-interactive {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .logo-interactive:hover { transform: translateY(3px); }
  .logo-interactive:active { opacity: 0.5; }

  /* --- GENERAL LAYOUT --- */
  .hero-container { padding: 20px; gap: 30px; background: #000; }
  .content-wrapper { gap: 80px; width: 100%; max-width: 800px; }

  /* --- CLAPPER BUTTON --- */
  .clapper-btn-wrapper { background: transparent; border: none; cursor: pointer; outline: none; padding: 10px; transition: transform 0.2s ease; }
  .clapper-btn-wrapper:active { transform: scale(0.95); }
  .clapper-container { width: 240px; display: flex; flex-direction: column; gap: 6px; }
  
  /* Mobile Clapper */
  @media (max-width: 480px) {
    .clapper-container { width: 100%; min-width: 200px; }
    .clapper-btn-wrapper { width: 100%; }
  }

  .glass-clapper-style {
    background: rgba(255, 255, 255, 0.08); backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 8px 4px rgba(255, 255, 255, 0.1);
    position: relative; overflow: hidden;
  }
  .glass-clapper-style::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); pointer-events: none; }
  .glass-clapper-style::after { content: ''; position: absolute; top: 0; left: 0; width: 1px; height: 100%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3)); pointer-events: none; }
  .clapper-top { height: 50px; width: 100%; border-radius: 16px; transform-origin: 10px 40px; transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .clapper-bottom { height: 100px; width: 100%; border-radius: 20px; display: flex; align-items: center; justify-content: center; }
  @media (hover: hover) { .clapper-btn-wrapper:hover .clapper-top { transform: rotate(-15deg); } }
  .clapper-btn-wrapper.is-clapping .clapper-top { animation: clap-html-effect 0.25s forwards; }
  @keyframes clap-html-effect { 0% { transform: rotate(-20deg); } 40% { transform: rotate(0deg); } 60% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }

  /* --- GRID --- */
  .grid-wrapper { position: relative; width: 100%; background-color: #020202; overflow: hidden; }
  .grid-lines { position: absolute; inset: 0; z-index: 1; background-size: ${GRID_SIZE}px ${GRID_SIZE}px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px); pointer-events: none; }
  .grid-cells-container { position: absolute; top: 0; left: 0; z-index: 0; pointer-events: none; }
  .grid-cell { width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; background-color: rgba(53, 223, 134, 0.15); opacity: 0; transition: opacity 1s ease; }
  .grid-cell.active { opacity: 1; transition: opacity 0s; background-color: rgba(53, 223, 134, 0.3); box-shadow: 0 0 10px rgba(53, 223, 134, 0.2); }

  .section-container { position: relative; z-index: 2; padding: 100px 20px; display: flex; flex-direction: column; align-items: center; background-color: transparent; }
  
  @media (max-width: 768px) {
    .section-container { padding: 60px 15px; }
  }

  .section-title { font-family: var(--font-head); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; text-transform: uppercase; text-align: center; margin-bottom: 15px; line-height: 1.2; }
  .section-subtitle { font-size: clamp(1rem, 2vw, 1.2rem); color: #9ca3af; text-align: center; margin-bottom: 60px; max-width: 600px; line-height: 1.5; font-weight: 300; }

  /* --- UNIVERSAL BOX --- */
  .universal-black-box {
    width: 100%; max-width: 1600px; background-color: #000000; border-radius: 32px; padding: 60px;
    display: flex; flex-direction: column; align-items: center; margin: 0 auto; box-sizing: border-box;
    position: relative; overflow: hidden;
  }
  
  @media (max-width: 768px) {
    .universal-black-box { 
      padding: 30px 20px; 
      border-radius: 20px;
    }
  }

  .new-comp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; width: 100%; }
  
  .bento-header-card {
    grid-column: span 2; background-color: #000000; border-radius: 32px; padding: 40px 40px;
    display: flex; flex-direction: row; align-items: center; justify-content: flex-start; text-align: left;
    min-height: 150px; position: relative; overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.3); 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 2px 1px rgba(255, 255, 255, 0.1);
  }
  .bento-header-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); pointer-events: none; }
  .bento-header-card::after { content: ''; position: absolute; top: 0; left: 0; width: 1px; height: 100%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3)); pointer-events: none; }

  @media (max-width: 768px) {
     .bento-header-card { flex-direction: column; align-items: flex-start; padding: 30px; border-radius: 20px; }
     .bento-header-card h2 { flex-direction: column; align-items: flex-start !important; }
  }

  .new-comp-card { 
    border-radius: 32px; overflow: hidden; background-color: #000000;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.1), inset 0 0 2px 1px rgba(255, 255, 255, 0.1);
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); 
    display: flex; flex-direction: column; height: 600px; position: relative; cursor: pointer; 
  }
  .new-comp-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); pointer-events: none; z-index: 3; }
  .new-comp-card::after { content: ''; position: absolute; top: 0; left: 0; width: 1px; height: 100%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3)); pointer-events: none; z-index: 3; }

  .new-comp-card:hover { transform: scale(1.02); }
  
  /* UPDATED: Ensure video container covers everything */
  .comp-video-container { 
    width: 100%; height: 100%; 
    background-color: #1a1a1a; 
    overflow: hidden; 
    position: absolute; 
    inset: 0; /* Strict positioning */
    z-index: 0; 
  }
  
  /* UPDATED: Ensure video stretches/covers */
  .comp-video { 
    width: 100%; height: 100%; 
    object-fit: cover; 
    display: block; 
    transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); 
  }
  .new-comp-card:hover .comp-video { transform: scale(1.05); }
  
  .comp-text-block { padding: 40px; display: flex; flex-direction: column; gap: 10px; flex-grow: 1; position: relative; z-index: 2; justify-content: flex-end; pointer-events: none; }
  
  /* UPDATED: Removed matte glass effect */
  .comp-card-title { 
    padding: 0; /* Remove padding */
    font-family: var(--font-head); 
    font-size: clamp(1.8rem, 2.5vw, 2.5rem); 
    font-weight: 700; 
    color: white; 
    line-height: 1.1; 
    
    /* Removed Glass Effect */
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-radius: 0;

    /* Added Text Shadow for readability */
    text-shadow: 0 4px 20px rgba(0,0,0,0.8);
    
    width: fit-content; 
    margin: 30px; /* Kept margin for positioning */
    position: relative; 
    z-index: 2; 
    pointer-events: none; 
  }

  /* Mobile Optimizations for Cards */
  @media (max-width: 768px) {
    .new-comp-card {
      justify-content: center; /* Center content vertically */
      align-items: center; /* Center content horizontally */
    }
    
    .comp-card-title {
      font-size: 1.4rem; /* Smaller font on mobile */
      margin: 0; /* Remove top/left fixed margin */
      margin-bottom: 50px; /* Push slightly higher than dead center visually */
      text-align: center;
      width: 90%; /* Ensure it doesn't touch edges */
    }
  }

  /* --- CAROUSEL --- */
  .apple-slider-container { width: 100%; max-width: 100%; height: 600px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin: 0 auto; padding: 20px 0; }
  
  @media (max-width: 768px) {
    .apple-slider-container { height: 450px; }
  }

  .apple-slider-track { position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; perspective: 1000px; }
  .apple-slide-item { position: absolute; width: 65%; height: 90%; border-radius: 20px; overflow: hidden; background-color: #111; transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1); cursor: pointer; box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
  
  @media (max-width: 480px) {
    .apple-slide-item { width: 85%; }
  }

  .apple-slide-media { width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
  .apple-slide-content { position: absolute; bottom: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; opacity: 0; transition: opacity 0.4s ease 0.2s; }
  .apple-slide-item.active .apple-slide-content { opacity: 1; }
  .apple-slide-title { font-family: var(--font-head); font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 700; text-transform: uppercase; color: white; margin-bottom: 10px; }
  .apple-slide-desc { font-family: var(--font-body); font-size: clamp(1rem, 1.2vw, 1.2rem); color: #ccc; line-height: 1.5; max-width: 80%; }
  .nav-dots-wrapper { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 20; }
  .nav-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; transition: all 0.3s; }
  .nav-dot.active { background: #35DF86; transform: scale(1.2); }

  .scramble-text { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; color: white; cursor: default; font-size: clamp(1.8rem, 6vw, 4rem); letter-spacing: 1px; }
  .dud { color: #555; opacity: 0.7; }

  /* --- PARTNERS --- */
  .partners-section-wrapper { width: 100%; display: flex; justify-content: center; padding: 100px 20px; position: relative; z-index: 2; }
  .partners-container-box { width: 100%; max-width: 1600px; background-color: #000000; border: none; border-radius: 32px; padding: 60px 20px; display: flex; flex-direction: column; align-items: center; box-shadow: none; position: relative; overflow: hidden; }
  
  @media (max-width: 768px) {
    .partners-section-wrapper { padding: 50px 15px; }
    .partners-container-box { padding: 40px 15px; }
  }

  .partners-slider-container { 
    display: flex; justify-content: center; align-items: center; 
    height: 500px; overflow: visible; width: 100%; 
    perspective: 1000px; margin-top: 40px; 
    cursor: grab; /* Indicate it is draggable */
    touch-action: none; /* Prevent scrolling while swiping */
  }
  .partners-slider-container:active { cursor: grabbing; }

  @media (max-width: 480px) {
    .partners-slider-container { height: 350px; perspective: 600px; margin-top: 20px; }
  }

  /* Updated: Removed CSS animation to allow JS control */
  .partners-slider { 
    position: relative; width: 140px; height: 140px; 
    transform-style: preserve-3d; 
    /* Animation removed */
  }
  
  .partners-slider span { position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform-origin: center; transform-style: preserve-3d; transform: rotateY(calc(var(--i)*45deg)) translateZ(350px); -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004); }
  .partners-slider span img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px; object-fit: contain; transition: 0.5s; background: transparent; border: none; filter: drop-shadow(0 15px 15px rgba(0,0,0,0.5)); }
  .partners-slider span:hover img { transform: translateY(-10px) scale(1.1); filter: drop-shadow(0 25px 25px rgba(0,0,0,0.7)); }
  @media screen and (max-width: 600px) {
    .partners-slider { width: 100px; height: 100px; }
    .partners-slider span { transform: rotateY(calc(var(--i)*45deg)) translateZ(160px); }
  }
  .partners-fade-overlay { position: absolute; top: 0; bottom: 0; left: 0; right: 0; pointer-events: none; background: linear-gradient(to right, #050507 0%, transparent 15%, transparent 85%, #050507 100%); z-index: 5; }

  /* --- PRICING --- */
  .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1600px; width: 100%; margin-top: 20px; align-items: stretch; }
  @media (max-width: 1024px) { .pricing-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 768px) { .pricing-grid { grid-template-columns: 1fr; } }
  
  .pricing-card { background-color: #000000; border-radius: 30px; overflow: hidden; display: flex; flex-direction: column; position: relative; border: none; box-shadow: none; transition: transform 0.3s ease; padding: 40px 30px; height: 100%; }
  .pricing-card:hover { transform: translateY(-8px); }
  .pricing-card.free { background: radial-gradient(circle at top center, rgba(92, 159, 197, 0.15) 0%, rgba(5, 5, 7, 0) 60%), #000000; }
  .pricing-card.electric { background: transparent; border: none; box-shadow: none; padding: 2px; border-radius: 24px; overflow: visible; height: 100%; background: linear-gradient(-30deg, var(--gradient-color), transparent, var(--gradient-color)), linear-gradient(to bottom, var(--color-neutral-900), var(--color-neutral-900)); }
  .electric-content { background-color: var(--color-neutral-900); border-radius: 24px; height: 100%; display: flex; flex-direction: column; padding: 40px 30px; position: relative; z-index: 2; border: 2px solid var(--electric-border-color); }
  .glow-layer-1 { position: absolute; inset: 0; border-radius: 24px; border: 2px solid rgba(53, 223, 134, 0.6); filter: blur(1px); z-index: 1; pointer-events: none; }
  .glow-layer-2 { position: absolute; inset: 0; border-radius: 24px; border: 2px solid var(--electric-light-color); filter: blur(4px); z-index: 1; pointer-events: none; }
  .background-glow { position: absolute; inset: 0; border-radius: 24px; background: linear-gradient(-30deg, var(--electric-light-color), transparent, var(--electric-border-color)); filter: blur(32px); opacity: 0.3; transform: scale(1.1); z-index: 0; pointer-events: none; }
  .overlay-1 { position: absolute; inset: 0; border-radius: 24px; background: linear-gradient(-30deg, white, transparent 30%, transparent 70%, white); mix-blend-mode: overlay; opacity: 1; filter: blur(16px); z-index: 3; pointer-events: none; }
  .pricing-card.standard-electric { background: transparent; border: none; box-shadow: none; padding: 2px; border-radius: 24px; overflow: visible; height: 100%; background: linear-gradient(-30deg, var(--star-gradient-color), transparent, var(--star-gradient-color)), linear-gradient(to bottom, var(--color-neutral-900), var(--color-neutral-900)); }
  .standard-electric-content { background-color: var(--color-neutral-900); border-radius: 24px; height: 100%; display: flex; flex-direction: column; padding: 40px 30px; position: relative; z-index: 2; border: 1.5px solid var(--star-border-color); }
  .star-glow-bg { position: absolute; inset: 0; border-radius: 24px; background: linear-gradient(-30deg, var(--star-light-color), transparent, var(--star-border-color)); filter: blur(24px); opacity: 0.15; transform: scale(1.05); z-index: 0; pointer-events: none; }
  .badge-electric { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--electric-border-color); color: black; padding: 6px 16px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; z-index: 10; box-shadow: 0 0 15px var(--electric-light-color); }
  .pricing-header { display: flex; flex-direction: column; align-items: flex-start; gap: 20px; margin-bottom: 30px; }
  .plan-icon { width: 48px; height: 48px; }
  .plan-name { font-family: var(--font-head); font-size: clamp(1.5rem, 2.2vw, 2.5rem); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: white; line-height: 1.1; word-break: break-word; }
  .pricing-card.free .plan-name { color: #5C9FC5; }
  .standard-electric-content .plan-name { color: #5277C1; text-shadow: 0 0 8px rgba(82, 119, 193, 0.4); }
  .electric-content .plan-name { color: #35DF86; text-shadow: 0 0 10px rgba(53, 223, 134, 0.5); }
  .price-block { margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.05); width: 100%; }
  .price-value { font-family: var(--font-head); font-size: 3.5rem; font-weight: 700; color: white; display: flex; align-items: baseline; gap: 5px; }
  .currency { font-size: 1.5rem; font-family: var(--font-head); font-weight: 600; color: #9ca3af; }
  .features-list { list-style: none; padding: 0; margin: 0 0 40px 0; display: flex; flex-direction: column; gap: 16px; flex-grow: 1; }
  .feature-item { display: flex; align-items: flex-start; gap: 12px; font-size: 1.1rem; line-height: 1.4; color: #e5e7eb; }
  .feature-item.disabled { color: #4b5563; text-decoration: line-through; opacity: 0.6; }
  .pricing-btn { width: 100%; padding: 20px; border-radius: 12px; font-weight: 700; font-size: 1.1rem; cursor: pointer; border: none; transition: all 0.2s; text-transform: uppercase; letter-spacing: 1px; margin-top: auto; font-family: var(--font-head); }
  .pricing-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
  .pricing-btn:active, .pricing-btn.click-anim { transform: scale(0.95); }
  .pricing-btn.dark { background-color: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.1); }
  .pricing-btn.dark:hover { background-color: white; color: black; }
  .pricing-btn.star-btn { background: var(--star-border-color); color: black; box-shadow: 0 0 10px var(--star-light-color); }
  .pricing-btn.star-btn:hover { background: #52CBC4; box-shadow: 0 0 20px var(--star-light-color); }
  .pricing-btn.electric-btn { background: var(--electric-border-color); color: black; box-shadow: 0 0 15px var(--electric-light-color); }
  .pricing-btn.electric-btn:hover { background: #52CBC4; box-shadow: 0 0 25px var(--electric-light-color); }

  @media (max-width: 1024px) {
    .pricing-card.electric { grid-column: span 2; }
    .new-comp-grid { grid-template-columns: repeat(2, 1fr); }
    .bento-header-card { grid-column: span 2; }
    .apple-carousel-wrapper { height: 500px; }
    .carousel-card-item { width: 75%; }
  }

  @media (max-width: 768px) {
    .content-wrapper { gap: 40px !important; }
    .hero-title { font-size: clamp(3rem, 13vw, 6rem) !important; }
    .hero-subtitle { font-size: clamp(2rem, 8vw, 4rem) !important; padding: 0 10px; }
    .comp-grid { grid-template-columns: 1fr; }
    .new-comp-grid { grid-template-columns: 1fr; }
    .bento-header-card { grid-column: span 1; }
    .new-comp-card { height: 500px; } 
    .features-grid { grid-template-columns: 1fr; }
    .pricing-grid { grid-template-columns: 1fr; }
    .pricing-card.electric { grid-column: span 1; }
    .scramble-text { font-size: clamp(1.5rem, 8vw, 2rem); }
    .apple-carousel-wrapper { height: 400px; }
    .carousel-card-item { width: 85%; }
  }

  .faq-container-box { width: 100%; max-width: 1600px; background-color: #000000; border: none; border-radius: 32px; padding: 60px 20px; display: flex; flex-direction: column; align-items: center; position: relative; overflow: hidden; margin: 0 auto; }
  @media (max-width: 768px) {
     .faq-container-box { padding: 40px 15px; border-radius: 20px; }
  }
  .faq-container-box::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent); pointer-events: none; }
  .faq-container-box::after { content: ''; position: absolute; top: 0; left: 0; width: 1px; height: 100%; background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3)); pointer-events: none; }
`;

export const GlobalStyles = () => <style>{styles}</style>;
