'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
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
    <div className={`min-h-screen bg-[#000000] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center mb-16 text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          projects
        </h2>      
      </div>
      <div className={`mt-6 pb-32 transition-all duration-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-left pl-25 pr-8">
          <div className="text-2xl font-regular text-white mb-6 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          A collection of personal and academic projects showcasing my journey in software development, from web applications to mobile apps and games.
          </div>
          <br />
          <br />
          <div className="text-5xl font-bold text-white mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Completed: 
          </div>
          <br />
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            <a href="https://www.rjwpomodoro.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Pomodoro Timer</a> - November 2024 - January 2025
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: React, JavaScript, CSS, HTML</li>
              <li>• What I learned: State management, timer functionality, responsive design</li>
              <li>• Description: A productivity app that helps users focus using the Pomodoro Technique with customizable work/break intervals</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-green-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            To-Do App - February 2025 - Present
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: React Native, JavaScript, Firebase</li>
              <li>• What I learned: Mobile development, database integration, user authentication</li>
              <li>• Description: A mobile task management app with real-time synchronization and user accounts</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-orange-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Text Adventure Game
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: Python, JSON</li>
              <li>• What I learned: Game logic, file I/O, object-oriented programming</li>
              <li>• Description: An interactive text-based adventure game with branching storylines and character progression</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-red-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            GPA Calculator
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: Java, Swing</li>
              <li>• What I learned: GUI development, mathematical calculations, data validation</li>
              <li>• Description: A desktop application that calculates and tracks academic performance with grade point averages</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Guide Robot
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: C++, ROS 2, Python</li>
              <li>• What I learned: Robotics programming, sensor integration, navigation algorithms</li>
              <li>• Description: An autonomous robot that provides guided tours using computer vision and path planning</li>
            </ul>
          </div>
          <br />
          <br />

          <div className="text-5xl font-bold text-white mb-1 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Under Construction:
          </div>
          <br />
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-indigo-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            AI Scheduler
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: Python, Machine Learning libraries, React</li>
              <li>• What I&apos;m learning: AI/ML integration, optimization algorithms, web APIs</li>
              <li>• Description: An intelligent scheduling system that optimizes time management using artificial intelligence</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            WordGuesser
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: JavaScript, HTML, CSS</li>
              <li>• What I&apos;m learning: Game mechanics, word processing, user interaction design</li>
              <li>• Description: A web-based word guessing game similar to Wordle with custom difficulty levels</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-pink-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Snake
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: Python, Pygame</li>
              <li>• What I&apos;m learning: Game development, collision detection, score systems</li>
              <li>• Description: A classic Snake game implementation with modern graphics and smooth gameplay</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-cyan-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Game of Life
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: JavaScript, Canvas API</li>
              <li>• What I&apos;m learning: Cellular automata, algorithm visualization, performance optimization</li>
              <li>• Description: Conway&apos;s Game of Life simulation with interactive controls and pattern generation</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-yellow-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Pac-Man Game
            </div>
            <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Languages: JavaScript, HTML5 Canvas</li>
              <li>• What I&apos;m learning: Game physics, AI pathfinding, sprite animation</li>
              <li>• Description: A recreation of the classic Pac-Man arcade game with modern web technologies</li>
            </ul>
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