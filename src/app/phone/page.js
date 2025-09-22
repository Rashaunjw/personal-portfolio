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
    <div className="min-h-screen bg-[#F4E9E1] font-gucina">
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h1 className="text-6xl font-bold text-center pt-8 pb-4">PHONE</h1>
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-4xl mx-auto px-8 py-12">
            <div className="flex justify-center">
              <a 
                href="tel:+1234567890"
                className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                +1 (234) 567-890
              </a>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="fixed bottom-8 left-8">
        <Link 
          href="/"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          RJW
        </Link>
      </div>
    </div>
  );
}