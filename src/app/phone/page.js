'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PhonePage() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSqueezing, setIsSqueezing] = useState(false);

  useEffect(() => {
    // Start animation on mount, then show content
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSqueezeAnimation = () => {
    setIsSqueezing(true);
    
    // Navigate immediately and let main page handle the full animation
    setTimeout(() => {
      sessionStorage.setItem('shouldContinueSqueeze', 'true');
      window.location.href = '/';
    }, 100); // Very short delay just to start the squeeze
  };

  return (
    <div className={`min-h-screen bg-[#39FF14] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
          phone
        </h2>      
        </div>
        <div className="flex justify-center items-center min-h-[80vh]">
        <h2 className="text-4xl font-semi-bold text-center text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
          478-538-0634
        </h2>     
        </div>


      <div className="absolute top-8 left-8">
        <h1 
          onClick={handleSqueezeAnimation}
          className="text-5xl font-medium text-black transition-transform cursor-pointer hover:scale-110 hover:opacity-80" 
          style={{ fontFamily: 'Gucina, sans-serif' }}
        >
          R J W
        </h1>
      </div>
    </div>
  );
}