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
      </div>
      
      {/* About me section - moved down */}
      <div className="mt-10 flex">
        <div className="text-left pl-25 pr-8 flex-1">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          <br />
          <br />
          My name is Rashaun Jamal Williams, I&apos;m an aspiring software engineer that enjoys full-stack web and mobile development. I grew up in Warner Robins, Georgia and currently reside in Tennessee where I am studying computer science and philosophy.
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

       <div className="absolute top-8 left-8">
 <h1 
   onClick={handleSqueezeAnimation}
   className="text-5xl font-medium text-white transition-transform cursor-pointer hover:scale-110 hover:opacity-80" 
   style={{ fontFamily: 'Gucina, sans-serif' }}
 >
   R J W
 </h1>
 </div>
    </div>
  );
}

