'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CareerPage() {
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
        <h1 className="text-6xl font-bold text-center pt-8 pb-4">CAREER</h1>
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Professional Journey</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-semibold mb-2">Senior Frontend Developer</h3>
                <p className="text-gray-600 mb-2">Tech Company • 2022 - Present</p>
                <p className="text-gray-700">
                  Leading frontend development initiatives, mentoring junior developers, 
                  and architecting scalable React applications for enterprise clients.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p className="text-gray-600 mb-2">Digital Agency • 2020 - 2022</p>
                <p className="text-gray-700">
                  Developed responsive web applications using React, Next.js, and modern 
                  CSS frameworks. Collaborated with design teams to implement pixel-perfect UIs.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h3 className="text-xl font-semibold mb-2">Junior Developer</h3>
                <p className="text-gray-600 mb-2">Startup • 2019 - 2020</p>
                <p className="text-gray-700">
                  Started my professional journey building web applications and learning 
                  modern development practices in a fast-paced startup environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <div className="fixed bottom-8 left-8">
        <Link 
          href="/"
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
