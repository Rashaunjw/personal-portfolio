'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
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
        <h1 className="text-6xl font-bold text-center pt-8 pb-4">PROJECTS</h1>
      </div>

      {/* Content */}
      <div className={`transition-all duration-1000 delay-500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                A full-stack e-commerce solution built with React, Next.js, and Stripe integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Stripe</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">
                A responsive portfolio website with smooth animations and modern design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Tailwind</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Framer Motion</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
              <p className="text-gray-600 mb-4">
                A collaborative task management application with real-time updates.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Socket.io</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
              <p className="text-gray-600 mb-4">
                A beautiful weather dashboard with location-based forecasts and charts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Chart.js</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">API</span>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media App</h3>
              <p className="text-gray-600 mb-4">
                A modern social media platform with real-time messaging and media sharing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Firebase</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">WebRTC</span>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600 mb-4">
                Interactive data visualization tools for complex datasets and analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">D3.js</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-[#F4E9E1] px-3 py-1 rounded-full text-sm">Python</span>
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
