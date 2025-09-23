'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CareerPage() {
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
    <div className={`min-h-screen bg-[#5900CC] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center mb-16 text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          career
        </h2>
      </div>


      {/* Technical Experience */}
      <div className={`mt-6 transition-all duration-1500 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-left pl-25 pr-8">
        <div className="text-2xl font-regular text-white mb-10 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          A comprehensive overview of my professional journey, technical expertise, and educational background in software development and computer science.
        </div>
            <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
                Technical Experience:
              </div>
              <div className="w-95 h-0.5 bg-white mb-4"></div>
              <div className="bg-[#F4E9E1] rounded-lg p-4 mb-4 border-l-4 border-green-500">
              <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
                Junior Full-Stack Software Developer at{' '}
                <a href="https://www.relai.us/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
                  Relai
                </a>{' '}
                (Pittsburgh, PA), May 2024 - Present
              </div>
              <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
                <li>• Technologies Learned: Figma, XCode, Apple Connect, React, React-Native, TypeScript, Node.js, PostgreSQL, Docker, YAML, Stripe, Firebase, Go</li>
                <li>• What I Did: Developed full-stack web applications, implemented user authentication, designed responsive UIs, and collaborated with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <br />

        <div className={`pb-8 transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-4xl font-bold text-white pl-25" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Technical Skills:
          <div className="w-69 h-0.5 bg-white"></div>
        </div>
        <br />

        <div className="text-2xl font-bold pl-25 text-white mb-1" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Data:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 pl-25">
          <img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" className="rounded-full scale-130" />
          <img alt="Excel" src="https://img.shields.io/badge/-Excel-217346?style=flat-square&logo=microsoft&logoColor=white" className="rounded-full scale-130" />
          <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" className="rounded-full scale-130" />
          <img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" className="rounded-full scale-130" />
          <img alt="MySQL" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 pl-25" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Design/Frontend:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 pl-25">
          <img alt="Figma" src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" className="rounded-full scale-130" />
          <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white" className="rounded-full scale-130" />
          <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" className="rounded-full scale-130" />
          <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" className="rounded-full scale-130" />
          <img alt="React Native" src="https://img.shields.io/badge/-React_Native-61DAFB?style=flat-square&logo=react&logoColor=white" className="rounded-full scale-130" />
          <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white" className="rounded-full scale-130" />
          <img alt="tailwind css" src="https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" className="rounded-full scale-130" />
          <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" className="rounded-full scale-130" />
          <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square" className="rounded-full scale-130" />
          <img alt="PHP" src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white" className="rounded-full scale-130" />
          <img alt="Ruby" src="https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=ruby&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 pl-25" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Backend:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 pl-25">
          <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" className="rounded-full scale-130" />
          <img alt="Go" src="https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white" className="rounded-full scale-130" />
          <img alt="Postman" src="https://img.shields.io/badge/-Postman-FF6C37?style=flat-square&logo=postman&logoColor=white" className="rounded-full scale-130" />
          <img alt="Firebase" src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white" className="rounded-full scale-130" />
          <img alt="Stripe" src="https://img.shields.io/badge/-Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" className="rounded-full scale-130" />
          <img alt="Java" src="https://img.shields.io/badge/-Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" className="rounded-full scale-130" />
          <img alt="YAML" src="https://img.shields.io/badge/-YAML-000000?style=flat-square&logo=yaml&logoColor=white" className="rounded-full scale-130" />
          <img alt="ROS 2" src="https://img.shields.io/badge/-ROS2-22314E?style=flat-square&logo=ros&logoColor=white" className="rounded-full scale-130" />
          <img alt="C" src="https://img.shields.io/badge/-C-00599C?style=flat-square&logo=c&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 pl-25" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Management:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 pl-25">
          <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" className="rounded-full scale-130" />
          <img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" className="rounded-full scale-130" />
          <img alt="Slack" src="https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=slack&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 pl-25" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Deployment/Testing:
        </div>
        <p className="flex flex-wrap gap-7 pl-25 mb-14">
          <img alt="Xcode" src="https://img.shields.io/badge/-Xcode-147EFB?style=flat-square&logo=xcode&logoColor=white" className="rounded-full scale-130" />
          <img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" className="rounded-full scale-130" />
          <img alt="Apple Connect" src="https://img.shields.io/badge/-Apple_Connect-000000?style=flat-square&logo=apple&logoColor=white" className="rounded-full scale-130" />
          <img alt="Expo" src="https://img.shields.io/badge/-Expo-000020?style=flat-square&logo=expo&logoColor=white" className="rounded-full scale-130" />
          <img alt="JUnit" src="https://img.shields.io/badge/-JUnit-25A162?style=flat-square&logo=junit5&logoColor=white" className="rounded-full scale-130" />
          <img alt="RSpec" src="https://img.shields.io/badge/-RSpec-FF0000?style=flat-square&logo=ruby&logoColor=white" className="rounded-full scale-130" />
          <img alt="docker" src="https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white" className="rounded-full scale-130" />
          <img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" className="rounded-full scale-130" />
          <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" className="rounded-full scale-130" />
        </p>
        <div className="text-4xl pl-25 font-bold text-white text-left mt-8" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Education:
          <div className="w-47 h-0.5 bg-white"></div>
        </div>
        <br />
         <div className="text-2xl pl-25 text-white text-left" style={{ fontFamily: 'Gucina, sans-serif' }}>
           <div className="bg-[#F4E9E1] rounded-lg p-4 mb-4 border-l-4 border-yellow-500">
             <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
               The University of the South | B.S. | Computer Science | Sewanee, TN | 05/2026
             </div>
             <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
               <li>• Relevant Coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Computer Networks, Operating Systems, Machine Learning</li>
               <li>• Philosophy Minor: Critical thinking, ethics in technology, logic and reasoning</li>
             </ul>
           </div>
           
           <div className="bg-[#F4E9E1] rounded-lg p-4 mb-4 border-l-4 border-red-500">
             <div className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
               Central GA Technical College | Pre-Baccalaureate | Dual Enrollment | Warner Robins, GA | 05/2022
             </div>
             <ul className="text-xl text-black mb-2 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
               <li>• Dual enrollment program while in high school</li>
               <li>• Completed foundational coursework in mathematics and sciences</li>
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
