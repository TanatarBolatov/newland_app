
import React, { useRef, useEffect, useState } from "react";
import { GRID_SIZE } from "../../constants";

export const GridBackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cellsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastIndexRef = useRef(-1);
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(width / GRID_SIZE);
      const rows = Math.ceil(height / GRID_SIZE);
      setGridDimensions({ rows, cols });
    };
    calculateGrid();
    window.addEventListener('resize', calculateGrid);
    return () => window.removeEventListener('resize', calculateGrid);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.floor(x / GRID_SIZE);
    const row = Math.floor(y / GRID_SIZE);
    if (col < 0 || col >= gridDimensions.cols || row < 0 || row >= gridDimensions.rows) return;
    const index = row * gridDimensions.cols + col;
    const cell = cellsRef.current[index];
    if (index !== lastIndexRef.current) {
      if (lastIndexRef.current !== -1 && cellsRef.current[lastIndexRef.current]) {
        const prevCell = cellsRef.current[lastIndexRef.current];
        if (prevCell) {
          prevCell.style.opacity = '0';
          prevCell.classList.remove('active');
        }
      }
      if (cell) {
        cell.style.opacity = '1';
        cell.classList.add('active');
      }
      lastIndexRef.current = index;
    }
  };

  const handleMouseLeave = () => {
    if (lastIndexRef.current !== -1 && cellsRef.current[lastIndexRef.current]) {
      const prevCell = cellsRef.current[lastIndexRef.current];
      if (prevCell) {
        prevCell.style.opacity = '0';
        prevCell.classList.remove('active');
      }
      lastIndexRef.current = -1;
    }
  };

  const cells = Array.from({ length: gridDimensions.rows * gridDimensions.cols });

  return (
    <div ref={containerRef} className="grid-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="grid-lines" />
      <div className="grid-cells-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${gridDimensions.cols}, ${GRID_SIZE}px)` }}>
        {cells.map((_, i) => <div key={i} ref={el => { cellsRef.current[i] = el; }} className="grid-cell" />)}
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
};
