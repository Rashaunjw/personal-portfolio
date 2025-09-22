
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
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg mb-6">Prefer to talk? Give me a call!</p>
                <a 
                  href="tel:+1234567890"
                  className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Best Times to Call</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Morning: 9:00 AM - 12:00 PM</p>
                    <p>Afternoon: 2:00 PM - 5:00 PM</p>
                    <p>For urgent matters: Anytime</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-gray-500">
                  If I don't answer, please leave a voicemail and I'll get back to you within 2 hours
                </p>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold mb-4">Alternative Contact Methods</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="mailto:rashaun@example.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Email
                  </a>
                  <a 
                    href="https://linkedin.com/in/rashaunwilliams"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Rashaunjw"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
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
