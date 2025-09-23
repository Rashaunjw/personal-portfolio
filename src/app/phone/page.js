'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PhonePage() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start animation on mount, then show content
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#39FF14]">
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
          phone
        </h2>      
        <div className="absolute top-18 left-40 text-3xl font-semi-bold text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
          06
        </div>
      </div>
      
      {/* Phone number centered */}
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-6xl font-semi-bold text-center text-black" style={{ fontFamily: 'Gucina, sans-serif' }}>
          478-538-0634
        </h2>     
      </div>


      {/* Back button */}
      <div className="fixed bottom-8 left-8">
        <Link 
          href="/"
          className="bg-[#F4E9E1] text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ fontFamily: 'Gucina, sans-serif', fontSize: '1.5rem', fontWeight: '500' }}
        >
          R J W
        </Link>
      </div>
    </div>
  );
}