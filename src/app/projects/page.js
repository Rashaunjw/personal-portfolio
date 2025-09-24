'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSqueezing, setIsSqueezing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 100);
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
    <div className={`min-h-screen bg-[#000000] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header with animated text */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center mb-16 text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          projects
        </h2>      
      </div>
      <div className={`mt-6 pb-32 transition-all duration-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-left px-25">
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
            <a href="https://www.rjwpomodoro.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Pomodoro Timer</a>: November 2024 - January 2025
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> React, JavaScript, CSS, HTML</li>
              <li>• <span className="font-bold">Description:</span> A productivity app that helps users focus using the Pomodoro Technique with customizable work/break intervals</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic timer logic, struggled with state management across components, learned to use useEffect for cleanup. Biggest challenge was preventing memory leaks when timers were cleared.</li>
              <li>• <span className="font-bold">What I learned:</span> State management, timer functionality, responsive design, component lifecycle management</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-indigo-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Personal Portfolio Website: September 2025 
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> React, Vercel, JavaScript, CSS</li>
              <li>• <span className="font-bold">Description:</span> A modern, interactive portfolio website showcasing my projects and skills with smooth transitions and mobile-responsive design</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Built with Next.js App Router, struggled with infinite carousel implementation, had issues with curtain animations covering content. Learned to conditionally render transition elements and implement seamless scrolling.</li>
              <li>• <span className="font-bold">What I learned:</span> Next.js framework, responsive design, smooth animations, infinite carousel implementation, performance optimization</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-green-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            To-Do App: April 2025 - May 2025
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> React Native, JavaScript, Firebase</li>
              <li>• <span className="font-bold">Description:</span> A mobile task management app with real-time synchronization and user accounts</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with Expo CLI, struggled with Firebase authentication setup, had issues with real-time data synchronization. Learned to handle async operations and implement proper error handling for network requests.</li>
              <li>• <span className="font-bold">What I learned:</span> Mobile development, database integration, user authentication, real-time data management, CRUD operations</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-orange-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Text Adventure Game: January 2024 - April 2024
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Java, JUnit</li>
              <li>• <span className="font-bold">Description:</span> An interactive text-based adventure game with branching storylines and character progression</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with simple if-else statements, struggled with complex branching logic, learned to use JSON for story data. Biggest challenge was managing state across different story paths without creating spaghetti code.</li>
              <li>• <span className="font-bold">What I learned:</span> Game logic, file I/O, object-oriented programming, data structure design</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-red-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            GPA Calculator: June 2024 - July 2024
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Java, Swing</li>
              <li>• <span className="font-bold">Description:</span> A desktop application that calculates and tracks academic performance with grade point averages</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic Swing components, struggled with layout management, had issues with decimal precision in calculations. Learned to use BigDecimal for accurate GPA calculations and proper form validation.</li>
              <li>• <span className="font-bold">What I learned:</span> GUI development, mathematical calculations, data validation, event handling</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Guide Robot: January 2025 - March 2025
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> C++, ROS 2, Python</li>
              <li>• <span className="font-bold">Description:</span> An autonomous robot that provides guided tours using computer vision and path planning</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic ROS 2 nodes, struggled with sensor calibration and coordinate transformations, had issues with path planning algorithms. Learned to debug complex robotic systems and implement robust error handling.</li>
              <li>• <span className="font-bold">What I learned:</span> Robotics programming, sensor integration, navigation algorithms, system integration</li>
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
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Python, Machine Learning libraries, React</li>
              <li>• <span className="font-bold">Description:</span> An intelligent scheduling system that optimizes time management using artificial intelligence</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic ML models, struggling with data preprocessing and feature engineering, having issues with model accuracy. Learning to implement proper training pipelines and handle edge cases in scheduling algorithms.</li>
              <li>• <span className="font-bold">What I&apos;m learning:</span> AI/ML integration, optimization algorithms, web APIs, data preprocessing</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-teal-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            WordGuesser
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Ruby, Cucumber, RSpec, Sinatra</li>
              <li>• <span className="font-bold">Description:</span> A web-based word guessing game similar to Wordle with custom difficulty levels</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic DOM manipulation, struggling with game state management and word validation logic, having issues with responsive design. Learning to implement proper game mechanics and user feedback systems.</li>
              <li>• <span className="font-bold">What I&apos;m learning:</span> Game mechanics, word processing, user interaction design, state management</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-pink-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Snake Game
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Python, Pygame</li>
              <li>• <span className="font-bold">Description:</span> A classic Snake game implementation with modern graphics and smooth gameplay</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic Pygame setup, struggling with collision detection and game loop optimization, having issues with score tracking and game state management. Learning to implement proper game architecture and performance optimization.</li>
              <li>• <span className="font-bold">What I&apos;m learning:</span> Game development, collision detection, score systems, performance optimization</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-cyan-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Conway&apos;s Game of Life (Cellular Automata) August 2025 - Present
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Python, Canvas API</li>
              <li>• <span className="font-bold">Description:</span> Conway&apos;s Game of Life simulation with interactive controls and pattern generation. This is a project that I am working on for my senior oral presentation.</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic Canvas drawing, struggling with algorithm optimization for large grids, having issues with pattern generation and user interaction. Learning to implement efficient cellular automata algorithms and interactive controls.</li>
              <li>• <span className="font-bold">What I&apos;m learning:</span> Cellular automata, algorithm visualization, performance optimization, interactive design</li>
            </ul>
          </div>
          
          <div className="bg-[#F4E9E1] rounded-lg p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 border-l-4 border-yellow-500">
            <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Pac-Man Game 
            </div>
            <ul className="text-xl text-black mb-2 ml-4 space-y-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• <span className="font-bold">Technologies:</span> Java, JUnit</li>
              <li>• <span className="font-bold">Description:</span> A recreation of the classic Pac-Man arcade game with modern game mechanics</li>
              <li>• <span className="font-bold">Process & Pitfalls:</span> Started with basic sprite rendering, struggling with AI pathfinding for ghosts, having issues with collision detection and game physics. Learning to implement proper game loops and AI behavior patterns.</li>
              <li>• <span className="font-bold">What I&apos;m learning:</span> Game physics, AI pathfinding, sprite animation, game loop optimization</li>
            </ul>
          </div>
        </div>
        </div>
      {/* Clickable monogram */}
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