'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
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
    
    // Navigate at 50% of animation (when content disappears)
    setTimeout(() => {
      sessionStorage.setItem('shouldContinueSqueeze', 'true');
      window.location.href = '/';
    }, 1500); // 1.5 seconds = 50% of 3 second animation
  };

  return (
    <div className={`min-h-screen bg-[#0036D8] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          projects
        </h2>      
        </div>
        <div className="absolute top-18 left-40 text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          04
        </div>


      {/* Back button */}
      <div className="fixed bottom-8 left-28">
        <button 
          onClick={handleSqueezeAnimation}
          className="bg-[#F4E9E1] text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          style={{ fontFamily: 'Gucina, sans-serif', fontSize: '1.5rem', fontWeight: '500' }}
        >
          R J W
        </button>
      </div>
    </div>
  );
}