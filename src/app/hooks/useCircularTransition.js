'use client';

import { useState, useEffect, useRef } from 'react';

export const useCircularTransition = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const overlayRef = useRef(null);

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    setClickPosition({ x, y });
    setIsRevealed(true);
  };

  const startInitialTransition = () => {
    // Start transition from center of screen
    setClickPosition({ 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    });
    setIsRevealed(true);
  };

  return {
    isRevealed,
    clickPosition,
    overlayRef,
    handleClick,
    startInitialTransition
  };
};