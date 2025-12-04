
import React, { useState } from 'react';

interface ActionBtnProps {
  initialText: string;
  className: string;
  changeText?: boolean;
}

export const ActionBtn: React.FC<ActionBtnProps> = ({ initialText, className, changeText = false }) => {
  const [text, setText] = useState(initialText); 
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => { 
    setIsAnimating(true); 
    if (changeText) setText("ACTION!"); 
    setTimeout(() => setIsAnimating(false), 200); 
  };
  
  return <button className={`${className} ${isAnimating ? "click-anim" : ""}`} onClick={handleClick}>{text}</button>;
};
