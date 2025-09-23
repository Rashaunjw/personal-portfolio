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
    
    // Navigate immediately and let main page handle the full animation
    setTimeout(() => {
      sessionStorage.setItem('shouldContinueSqueeze', 'true');
      window.location.href = '/';
    }, 100); // Very short delay just to start the squeeze
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
        <div className="mt-6 pb-32">
        <div className="text-left pl-25 pr-8">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          <br />
          <br />
          <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Completed: 
          </div>
          <br />
          <a href="https://www.rjwpomodoro.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Pomodoro Timer</a>,  November 2024 - January 2025
          <br />
          To-Do App,  February 2025 - Present
          <br />
          Text Adventure Game,  
          <br />
          GPA Calculator,  
          <br />
          Guide Robot
          <br />
          <br />
          <br />
          <br />

          <div className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Under Construction:
          </div>
          <br />
          AI Scheduler
          <br />
          WordGuesser
          <br />
          Snake
          <br />
          Game of Life
          <br />
          Pac-Man Game
          <br />
          </div>
        </div>
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