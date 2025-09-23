'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CareerPage() {
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
    <div className={`min-h-screen bg-[#5900CC] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          career
        </h2>      
        </div>
        <div className="absolute top-18 left-40 text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          02
        </div>
        <div className="mt-6 pb-32">
        <div className="text-left pl-25 pr-8">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          <br />
          <br />
          <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Technical Experience: 
          </div>
          <br />
          Junior Full-Stack Software Developer at <a href="https://www.relai.us/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300 transition-colors">Relai</a> (Pittsburgh, PA), May 2024 - Present
          <br />
          <br />
          <div className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Technical Skills:
          </div>
          <br />
          Data – Excel, Python, MongoDB, PostgreSQL, MySQL     
          <br />   
          Design/Frontend – Figma, JavaScript, TypeScript, React, React Native, Next.js, Tailwind, HTML, CSS, PHP, Ruby
          <br />
          Backend – Node, Go, Postman, Firebase, Stripe, Java, YAML, ROS 2, C
          <br />
          Management – Git, GitHub, Slack
          <br />
          Deployment/Testing – Xcode, Vercel, Apple Connect, Expo, JUnit, Rspec, Cucumber
          <br />
          <br />
          <br />
          <div className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Education: 
          </div>
          <br />
          University of the South (Sewanee, TN), May 2022 - May 2026
          <br />
          <br />
          <br />

          <div className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Professional Experience:          
          </div>
          <br />
          Member Services Representative at Crunch Fitness (Warner Robins, GA), June 2023 - August 2023
          <br />
          Team Member at Urban Air Trampoline Park (Warner Robins, GA), June 2023 - August 2023
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