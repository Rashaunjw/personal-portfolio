'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BioPage() {
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
    <div className={`min-h-screen bg-[#FF3D00] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          bio
        </h2>      
        <div className="absolute top-18 left-40 text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          01
        </div>
      </div>
      
      {/* About me section - moved down */}
      <div className="mt-10 flex">
        <div className="text-left pl-25 pr-8 flex-1">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          <br />
          <br />
          My name is Rashaun Jamal Williams, an aspiring software engineer that enjoys full-stack web and mobile development. I grew up in Warner Robins, Georgia and currently reside in Tennessee where I am studying computer science and philosophy.
          <br />
          <br />
          If I&apos;m not coding, I&apos;m reading, watching anime, or working out. My favorite extracurricular activities include snowboarding, playing basketball, and running. I love to travel, experience new places, learn new things, and watch tons of movies.
          <br />
          </div>
        </div>
        <div className="text-right pl-8 pr-8 flex-1">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          <br />
          <br />
          <div className="flex justify-end items-center mb-1">
            <span className="mr-50">Current Location:</span>
            <span className="text-3xl font-normal pr-20">Sewanee, TN</span>
          </div>
          <br />
          <div className="flex justify-end items-center mb-4">
            <span className="mr-41">University:</span>
            <span className="text-3xl font-normal pr-20">University of the South</span>
          </div>
          <br />
          <div className="flex justify-end items-center mb-4">
            <span className="mr-68">Major:</span>
            <span className="text-3xl font-normal pr-20">Computer Science</span>
          </div>
          <br />
          <div className="flex justify-end items-center mb-4">
            <span className="mr-95">Minor:</span>
            <span className="text-3xl font-normal pr-20">Philosophy</span>
          </div>
          <br />
          <div className="flex justify-end items-center mb-4">
            <span className="mr-64">Expected Grad:</span>
            <span className="text-3xl font-normal pr-20">May 2026</span>
          </div>
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
