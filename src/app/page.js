'use client';
import React, {
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Static Box Layout Component - replaces scrolling carousel
const StaticBoxLayout = ({ items, className = "" }) => {
  // Generate random heights for each box while maintaining order
  const getRandomHeight = (index) => {
    // Use index as seed for consistent random heights
    const heights = [20, -20, 40, -30, 10, -40, 20]; // Random heights in pixels
    return heights[index % heights.length];
  };

  return (
    <div className={`flex flex-row items-start justify-center gap-8 ${className}`}>
      {items.map((item, index) => (
        <div 
          key={item.key}
          className="flex-shrink-0"
          style={{
            transform: `translateY(${getRandomHeight(index)}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

// Mobile Single Box Carousel Component
  const MobileSingleBoxCarousel = forwardRef(function MobileSingleBoxCarousel({ items }, ref) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useImperativeHandle(ref, () => ({
      nextBox() {
        setCurrentIndex(prev => (prev + 1) % items.length);
      },
      prevBox() {
        setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
      }
    }));

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }
    if (isRightSwipe) {
      setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="w-full">
      <div 
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center px-4">
              {item.content}
            </div>
          ))}
        </div>
      </div>
      
              {/* Navigation buttons */}
              <div className="flex justify-center gap-24 mt-14">
                <button 
                  onClick={() => {
                    setCurrentIndex(prev => (prev - 1 + items.length) % items.length);
                  }}
                  className="bg-black text-white px-8 py-2 rounded text-2xl cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  Prev
                </button>
                <button 
                  onClick={() => {
                    setCurrentIndex(prev => (prev + 1) % items.length);
                  }}
                  className="bg-black text-white px-8 py-2 rounded text-2xl cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  Next
                </button>
              </div>
    </div>
  );
});

export default function Home() {
  const [lineExpanded, setLineExpanded] = useState(false);
  const [contentRevealed, setContentRevealed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [targetHref, setTargetHref] = useState('');
  const [radialExpanded, setRadialExpanded] = useState(false);
  const [radialColor, setRadialColor] = useState('#F4E9E1');
  const [isSqueezing, setIsSqueezing] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  // Narrow screen detection
  useEffect(() => {
    const checkNarrowScreen = () => {
      const isNarrow = window.innerWidth < 768;
      setIsNarrowScreen(isNarrow);
    };
    
    checkNarrowScreen();
    window.addEventListener('resize', checkNarrowScreen);
    
    return () => window.removeEventListener('resize', checkNarrowScreen);
  }, []);

  useEffect(() => {
    // Only start curtain animation if not squeezing
    if (!isSqueezing) {
      // Start line expansion from center
      const lineTimer = setTimeout(() => {
        setLineExpanded(true);
      }, 100);
      
      // Reveal content after line expansion
      const contentTimer = setTimeout(() => {
        setContentRevealed(true);
      }, 1500);
      
      return () => {
        clearTimeout(lineTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [isSqueezing]);


  const getBoxOriginalColor = (href) => {
    const colorMap = {
      '/bio': '#FF3D00',      // Original bio box color
      '/career': '#5900CC',   // Original career box color  
      '/email': '#FF0000',    // Original email box color
      '/projects': '#000000', // Projects box color (red)
      '/phone': '#39FF14'     // Original phone box color
    };
    return colorMap[href] || '#F4E9E1';
  };

  const handleBoxClick = (event, href) => {
    event.preventDefault();
    
    // Get click position
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Get the original box color
    const boxColor = getBoxOriginalColor(href);
    
    setClickPosition({ x, y });
    setTargetHref(href);
    setRadialColor(boxColor);
    setIsTransitioning(true);
    
    // Start radial expansion after a short delay
    setTimeout(() => {
      setRadialExpanded(true);
    }, 50);
    
    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = href;
    }, 800);
  };

  const handleSqueezeAnimation = () => {
    // Reset curtain states first
    setLineExpanded(false);
    setContentRevealed(false);
    
    // Start squeeze animation
    setIsSqueezing(true);
    
    // After squeeze animation completes, start curtain animation
    setTimeout(() => {
      setIsSqueezing(false);
      
      // Start curtain animation after squeeze completes
      setTimeout(() => {
        setLineExpanded(true);
      }, 100);
      
      setTimeout(() => {
        setContentRevealed(true);
      }, 1500);
    }, 3200);
  };


  // Build your 7 boxes with navigation and animations
  const allBoxes = [
    {
      key: 'bio',
      content: (
        <Link 
          href="/bio" 
          className="relative max-w-xs sm:max-w-sm md:max-w-md bio-box block"
          onClick={(e) => handleBoxClick(e, '/bio')}
        >
          <img src="/images/boxes/bio.png" alt="Bio" className="w-full h-auto" />
          <div className="absolute top-2 left-2 box-number">01</div>
          <div className="absolute bottom-2 left-2 box-label">bio</div>
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl">👤</div>
        </Link>
      ),
    },
    {
      key: 'career',
      content: (
        <Link 
          href="/career" 
          className="relative max-w-xs sm:max-w-sm md:max-w-md career-box block"
          onClick={(e) => handleBoxClick(e, '/career')}
        >
          <img src="/images/boxes/career.png" alt="Career" className="w-full h-auto" />
          <div className="absolute top-2 left-2 box-number">02</div>
          <div className="absolute bottom-2 left-2 box-label">career</div>
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl">💼</div>
        </Link>
      ),
    },
    {
      key: 'email',
      content: (
        <Link 
          href="/email" 
          className="relative max-w-xs sm:max-w-sm md:max-w-md email-box block"
          onClick={(e) => handleBoxClick(e, '/email')}
        >
          <img src="/images/boxes/linkedin.png" alt="Email" className="w-full h-auto" />
          <div className="absolute top-2 left-2 box-number">03</div>
          <div className="absolute bottom-2 left-2 box-label">email</div>
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl">📧</div>
        </Link>
      ),
    },
    {
      key: 'projects',
      content: (
        <Link 
          href="/projects" 
          className="relative max-w-xs sm:max-w-sm md:max-w-md projects-box block"
          onClick={(e) => handleBoxClick(e, '/projects')}
        >
          <img src="/images/boxes/email.png" alt="Projects" className="w-full h-auto" />
          <div className="absolute top-2 left-2 box-number">04</div>
          <div className="absolute bottom-2 left-2 box-label">projects</div>
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl">💻</div>
        </Link>
      ),
    },
    {
      key: 'linkedin',
      content: (
        <a
          href="https://www.linkedin.com/in/rashaunwilliams"
          target="_blank"
          rel="noopener noreferrer"
          className="relative max-w-xs sm:max-w-sm md:max-w-md linkedin-box block"
        >
          <img src="/images/boxes/projects.png" alt="LinkedIn" className="w-full h-auto" />
          <div className="absolute top-2 left-2 box-number">05</div>
          <div className="absolute bottom-2 left-2 box-label">LinkedIn</div>
          <div className="absolute top-2 right-2 w-8 h-8">
            <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </a>
      ),
    },
    {
      key: 'phone',
      content: (
        <Link 
          href="/phone" 
          className="relative max-w-xs sm:max-w-sm md:max-w-md phone-box block"
          onClick={(e) => handleBoxClick(e, '/phone')}
        >
          <img src="/images/boxes/phone.png" alt="Phone" className="w-full h-auto" />
          <div className="absolute top-2 left-2 phone-number">06</div>
          <div className="absolute bottom-2 left-2 phone-label">phone</div>
          <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-2xl">📱</div>
        </Link>
      ),
    },
    {
      key: 'github',
      content: (
        <a
          href="https://github.com/Rashaunjw"
          target="_blank"
          rel="noopener noreferrer"
          className="relative max-w-xs sm:max-w-sm md:max-w-md github-box block"
        >
          <img src="/images/boxes/github.png" alt="Github" className="w-full h-auto" />
          <div className="absolute top-2 left-2 github-number">07</div>
          <div className="absolute bottom-2 left-2 github-label">Github</div>
          <div className="absolute top-2 right-2 w-8 h-8">
            <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </div>
        </a>
      ),
    },
  ];

  // Split boxes into top 4 and bottom 3
  const topBoxes = allBoxes.slice(0, 4); // First 4 boxes
  const bottomBoxes = allBoxes.slice(4); // Remaining 3 boxes

  // Refs for mobile carousel
  const mobileCarouselRef = useRef(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full page border connecting corners */}
      {/* Top border */}
      <div className="fixed top-4 left-12 right-12 h-0.5 bg-black z-40"></div>
      
      {/* Bottom border */}
      <div className="fixed bottom-4 left-12 right-12 h-0.5 bg-black z-40"></div>
      
      {/* Left border */}
      <div className="fixed top-12 bottom-12 left-4 w-0.5 bg-black z-40"></div>
      
      {/* Right border */}
      <div className="fixed top-12 bottom-12 right-4 w-0.5 bg-black z-40"></div>
      
      {/* Corner decorations - rounded */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-black z-40 rounded-tl-lg"></div>
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-black z-40 rounded-tr-lg"></div>
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-black z-40 rounded-bl-lg"></div>
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-black z-40 rounded-br-lg"></div>

      {/* Radial transition overlay */}
      {isTransitioning && (
        <div 
          className="fixed inset-0 z-[60] pointer-events-none"
          style={{
            background: radialColor,
            clipPath: radialExpanded 
              ? `circle(150% at ${clickPosition.x}px ${clickPosition.y}px)` 
              : `circle(0% at ${clickPosition.x}px ${clickPosition.y}px)`,
            transition: 'clip-path 0.8s ease-out'
          }}
        />
      )}
      
      {/* Top curtain that opens upward */}
      <div className={`fixed top-0 left-0 bg-[#F4E9E1] z-50 transition-all duration-1200 ease-out ${lineExpanded ? '-translate-y-full' : 'translate-y-0'} w-full h-1/2`}>
      </div>
      
      {/* Bottom curtain that opens downward */}
      <div className={`fixed bottom-0 left-0 bg-[#F4E9E1] z-50 transition-all duration-1200 ease-out ${lineExpanded ? 'translate-y-full' : 'translate-y-0'} w-full h-1/2`}>
      </div>

      {/* Main page content - revealed as curtain pulls away */}
      <div className={`min-h-screen relative ${isSqueezing ? 'animate-page-squeeze' : ''}`}>
        {/* Initials in top left corner */}
        <div className="initials-container absolute top-4 left-4 sm:top-8 sm:left-8 transition-opacity duration-300">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-medium pl-3" 
            style={{ fontFamily: 'Gucina, sans-serif' }}

          >
            R J W
          </h1>
        </div>

        {isNarrowScreen ? (
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {/* Mobile: Single box carousel */}
            {/* NAME IN CENTER */}
            <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-semi-bold my-name text-center px-4 mb-16" style={{ fontFamily: 'Gucina, sans-serif' }}>
              Rashaun J Williams
            </h2>
            
            {/* Mobile single box carousel */}
            <MobileSingleBoxCarousel ref={mobileCarouselRef} items={allBoxes} />
          </div>
        ) : (
          <div className="flex flex-col items-start justify-center min-h-screen px-8">
            {/* TOP ROW: First 3 boxes above the title */}
            <div className="mb-8">
              <StaticBoxLayout items={topBoxes.slice(0, 3)} />
            </div>

            {/* CENTER: Name and Box 4 on same horizontal line */}
            <div className="flex flex-row items-center gap-10 my-3">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-semi-bold my-name whitespace-nowrap px-4 py-2" style={{ fontFamily: 'Gucina, sans-serif' }}>
                Rashaun J Williams
              </h2>
            <div className="mb-8">

              <StaticBoxLayout items={topBoxes.slice(3, 4)} />
              </div>

            </div>

            {/* BOTTOM ROW: Remaining boxes */}
            <div>
              <StaticBoxLayout items={bottomBoxes.slice().reverse()} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
