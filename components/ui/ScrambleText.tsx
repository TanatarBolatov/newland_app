
import React, { useRef, useEffect } from 'react';
import { TextScramble } from '../../utils/TextScramble';

interface ScrambleTextProps {
  defaultText: string;
  hoverText: string;
  className: string;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ defaultText, hoverText, className }) => {
  const textRef = useRef<HTMLHeadingElement>(null); 
  const scramblerRef = useRef<TextScramble | null>(null);
  
  useEffect(() => { 
    if (textRef.current) scramblerRef.current = new TextScramble(textRef.current); 
  }, []);
  
  const handleMouseEnter = () => { if (scramblerRef.current) scramblerRef.current.setText(hoverText); };
  const handleMouseLeave = () => { if (scramblerRef.current) scramblerRef.current.setText(defaultText); };
  
  return (
    <div style={{ marginBottom: '60px', textAlign: 'center' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2 className={className} ref={textRef}>{defaultText}</h2>
    </div>
  );
};
