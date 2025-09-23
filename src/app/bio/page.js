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
    
    // Navigate at 50% of animation (when content disappears)
    setTimeout(() => {
      sessionStorage.setItem('shouldContinueSqueeze', 'true');
      window.location.href = '/';
    }, 1500); // 1.5 seconds = 50% of 3 second animation
  };

  return (
    <div className={`min-h-screen bg-[#FF3D00] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl mb-30 font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          bio
        </h2>      
      </div>
      
      {/* About me section - moved down */}
      <div className={`mt-8 flex gap-8 px-8 transition-all duration-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="flex-1 flex">
          <div className="bg-[#F4E9E1] rounded-lg p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full flex flex-col">
            <div className="text-4xl font-bold text-center text-black mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              About Me
            </div>
            <div className="text-2xl font-semi-bold text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-2xl">👨‍💻</span>
                  <span>My name is Rashaun Jamal Williams, I&apos;m an aspiring software engineer that enjoys full-stack web and mobile development.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-2xl">🏠</span>
                  <span>I grew up in Warner Robins, Georgia and currently reside in Tennessee where I am studying computer science and philosophy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-2xl">🎯</span>
                  <span>If I&apos;m not coding, I&apos;m reading, watching anime, or working out.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-2xl">🏂</span>
                  <span>My favorite extracurricular activities include snowboarding, playing basketball, and running.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 text-2xl">✈️</span>
                  <span>I love to travel, experience new places, learn new things, and watch tons of movies.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="bg-[#F4E9E1] rounded-lg p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] w-full flex flex-col">
            <div className="text-4xl font-bold text-center text-black mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              Info
            </div>
            <div className="text-3xl font-semi-bold text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <div className="flex justify-between items-center mb-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <span className="flex items-center">
                  <span className="text-green-500 mr-3 text-2xl">📍</span>
                  <span>Current Location:</span>
                </span>
                <span className="text-3xl font-normal">Sewanee, TN</span>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <span className="flex items-center">
                  <span className="text-green-500 mr-3 text-2xl">🎓</span>
                  <span>University:</span>
                </span>
                <span className="text-3xl font-normal">University of the South</span>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <span className="flex items-center">
                  <span className="text-green-500 mr-3 text-2xl">💻</span>
                  <span>Major:</span>
                </span>
                <span className="text-3xl font-normal">Computer Science</span>
              </div>
              <div className="flex justify-between items-center mb-4 p-3 bg-white bg-opacity-20 rounded-lg">
                <span className="flex items-center">
                  <span className="text-green-500 mr-3 text-2xl">📚</span>
                  <span>Minor:</span>
                </span>
                <span className="text-3xl font-normal">Philosophy</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white bg-opacity-20 rounded-lg">
                <span className="flex items-center">
                  <span className="text-green-500 mr-3 text-2xl">🎯</span>
                  <span>Expected Grad:</span>
                </span>
                <span className="text-3xl font-normal">May 2026</span>
              </div>
            </div>
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

