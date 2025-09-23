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
    setTimeout(() => {
      sessionStorage.setItem('shouldContinueSqueeze', 'true');
      window.location.href = '/';
    }, 100);
  };

  return (
    <div className={`min-h-screen bg-[#5900CC] ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
      {/* Header */}
      <div className={`transition-all duration-1000 pt-16 relative ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-6xl font-semi-bold text-center text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
          career
        </h2>
      </div>

      {/* Technical Experience */}
      <div className="mt-6 pb-8">
        <div className="text-left pl-25 pr-8">
          <div className="text-3xl font-semi-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
            <br />
            <br />
            <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Gucina, sans-serif' }}>
              Technical Experience:
            </div>
            <br />
            <div className="text-2xl font-bold text-center text-white mb-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
              Junior Full-Stack Software Developer at{' '}
              <a href="https://www.relai.us/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
                Relai
              </a>{' '}
              (Pittsburgh, PA), May 2024 - Present
            </div>
            <ul className="text-2xl text-white mb-8 ml-4" style={{ fontFamily: 'Gucina, sans-serif' }}>
              <li>• Technologies Learned: Figma, XCode, Apple Connect, React, React-Native, TypeScript, Node.js, PostgreSQL, Docker, YAML, Stripe, Firebase, Go</li>
              <li>• What I Did: Developed full-stack web applications, implemented user authentication, designed responsive UIs, and collaborated with cross-functional teams</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="pb-32">
        <div className="text-4xl font-bold text-white text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Technical Skills:
        </div>
        <br />

        <div className="text-2xl font-bold text-center text-white mb-1" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Data:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 justify-center">
          <img alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" className="rounded-full scale-130" />
          <img alt="Excel" src="https://img.shields.io/badge/-Excel-217346?style=flat-square&logo=microsoft&logoColor=white" className="rounded-full scale-130" />
          <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" className="rounded-full scale-130" />
          <img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" className="rounded-full scale-130" />
          <img alt="MySQL" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Design/Frontend:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 justify-center">
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

        <div className="text-2xl font-bold text-white mb-1 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Backend:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 justify-center">
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

        <div className="text-2xl font-bold text-white mb-1 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Management:
        </div>
        <p className="flex flex-wrap gap-7 mb-4 justify-center">
          <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" className="rounded-full scale-130" />
          <img alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white" className="rounded-full scale-130" />
          <img alt="Slack" src="https://img.shields.io/badge/-Slack-4A154B?style=flat-square&logo=slack&logoColor=white" className="rounded-full scale-130" />
        </p>

        <div className="text-2xl font-bold text-white mb-1 text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Deployment/Testing:
        </div>
        <p className="flex flex-wrap gap-7 justify-center">
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

        <br />
        <br />

        <div className="text-4xl font-bold text-white text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Education:
        </div>
        <br />
        <div className="text-white text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          The University of the South | B.S. | Computer Science | Sewanee, TN | 05/2026
          <br />
          Central GA Technical College | Pre-Baccalaureate | Dual Enrollment | Warner Robins, GA | 05/2022
        </div>

        <br />
        <div className="text-4xl font-bold text-white text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Professional Experience:
        </div>
        <br />
        <div className="text-white text-center" style={{ fontFamily: 'Gucina, sans-serif' }}>
          Member Services Representative at Crunch Fitness (Warner Robins, GA), June 2023 - August 2023
          <br />
          Team Member at Urban Air Trampoline Park (Warner Robins, GA), June 2023 - August 2023
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
