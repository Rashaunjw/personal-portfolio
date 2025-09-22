'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EmailPage() {
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
        <h1 className="text-6xl font-bold text-center pt-8 pb-4">EMAIL</h1>
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg mb-6">Ready to collaborate or just want to say hello?</p>
                <a 
                  href="mailto:rashaun@example.com"
                  className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  rashaun@example.com
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Business Inquiries</h3>
                  <p className="text-gray-600">
                    For project collaborations, speaking opportunities, 
                    and business partnerships.
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">General Contact</h3>
                  <p className="text-gray-600">
                    Questions, feedback, or just want to connect 
                    and share ideas.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  I typically respond within 24 hours
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
