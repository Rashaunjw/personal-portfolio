'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EmailPage() {
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
    <div className={`min-h-screen bg-[#FF0000] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>    
        <h2 className="text-6xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          email
        </h2>      
        </div>    
        <div className={`flex justify-center items-center min-h-[80vh] transition-all duration-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-4xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          rashaunjwilliams@gmail.com <br />
          <br />
          or <br />
          <br />
          willirj0@sewanee.edu
        </h2>     
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