'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BioPage() {
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
        <h1 className="text-6xl font-bold text-center pt-8 pb-4">BIO</h1>
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">About Rashaun Jamal Williams</h2>
            <p className="text-lg leading-relaxed mb-6">
              I am a passionate developer and designer with a love for creating beautiful, 
              functional web experiences. My journey in technology began with curiosity 
              and has evolved into a deep understanding of modern web development practices.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in React, Next.js, and modern JavaScript frameworks, with a 
              keen eye for design and user experience. When I'm not coding, you can find 
              me exploring new technologies, contributing to open source projects, or 
              sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">React</span>
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">Next.js</span>
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">CSS</span>
              <span className="bg-[#F4E9E1] px-4 py-2 rounded-full text-sm font-medium">Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="fixed bottom-8 left-18">
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
