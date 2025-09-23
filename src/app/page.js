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

/**
 * Smooth, seamless infinite scroll with duplicated content for seamless looping.
 */
  const BoxRow = forwardRef(function BoxRow(
    { items, directionMultiplier = 1, gapPx = 32, initialOffsetMultiplier = 1 },
    ref
  ) {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [targetSpeed, setTargetSpeed] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Helper function to create items with separators using FOR LOOP
  const createItemsWithSeparators = (items) => {
    const itemsWithSeparators = [];
    
    // FOR LOOP: Process each box and add separator
    for (let i = 0; i < items.length; i++) {
      // Add the box
      itemsWithSeparators.push(items[i]);
      
      // Add separator after each box (including between 7 and 1)
      itemsWithSeparators.push({
        key: `separator-${i}`,
        content: (
          <div className="separator w-2 h-16 bg-black flex-shrink-0"></div>
        ),
      });
    }
    
    return itemsWithSeparators;
  };

  // Set initial position to show boxes in consistent position every time
  useEffect(() => {
    if (itemWidth && items.length > 0 && !isInitialized) {
      const itemsWithSeparators = createItemsWithSeparators(items);
      const setWidth = itemWidth * itemsWithSeparators.length;
      
      // Always start at the same position - center the first set of boxes
      const initialOffset = setWidth; // Start exactly one set width to the left
      setTranslate(-initialOffset);
      setIsInitialized(true);
    }
  }, [itemWidth, items, isInitialized]);

  // Measure item width including gap
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      const cards = el.querySelectorAll('.box-item');
      if (cards.length > 0) {
        // Measure the actual width including gap
        const cardWidth = cards[0].offsetWidth;
        const totalWidth = cardWidth + gapPx;
        console.log('Box width:', cardWidth, 'Gap:', gapPx, 'Total width:', totalWidth);
        setItemWidth(totalWidth);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [gapPx]);

  // Smooth animation loop with deceleration
  useEffect(() => {
    if (!itemWidth) return;

    let animationId = null;

    const animate = () => {
      // Safety check - prevent infinite loops
      if (!itemWidth) {
        if (animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        return;
      }
      
      // Smooth deceleration: gradually reduce speed towards target
      setScrollSpeed(prevSpeed => {
        const deceleration = 0.92; // How fast it slows down (0.92 = 8% reduction per frame)
        const newSpeed = prevSpeed * deceleration + targetSpeed * (1 - deceleration);
        
        // Stop when speed is very close to target
        if (Math.abs(newSpeed - targetSpeed) < 0.3) {
          return targetSpeed;
        }
        
        return newSpeed;
      });
      
      setTranslate(prev => {
        // FOR LOOP: Process all boxes and separators
        const itemsWithSeparators = createItemsWithSeparators(items);
        const setWidth = itemWidth * itemsWithSeparators.length;
        
        // Calculate new position with current speed
        let newTranslate = prev - (scrollSpeed * directionMultiplier * 0.3);
        
        // SEAMLESS RESET: When we scroll past 2 complete sets, reset to maintain infinite loop
        if (Math.abs(newTranslate) >= setWidth * 2) {
          // Reset to the same position in the next set for seamless carousel
          newTranslate = newTranslate - (setWidth * Math.sign(newTranslate));
          console.log('Reset triggered:', { newTranslate, setWidth, directionMultiplier });
        }
        
        return newTranslate;
      });
      
      // Continue animation loop smoothly
      animationId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationId = requestAnimationFrame(animate);
    
    // Cleanup function to prevent memory leaks
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };
  }, [scrollSpeed, targetSpeed, directionMultiplier, itemWidth, items]);

  // FOR LOOP: Process all carousel items when user swipes
  const processCarouselItems = () => {
    const itemsWithSeparators = createItemsWithSeparators(items);
    const processedItems = [];
    
    // FOR LOOP: Go through each item and separator
    for (let i = 0; i < itemsWithSeparators.length; i++) {
      const item = itemsWithSeparators[i];
      
      // Process each item (box or separator)
      if (item.key && item.key.startsWith('separator-')) {
        // This is a separator
        processedItems.push({
          ...item,
          processed: true,
          type: 'separator'
        });
      } else {
        // This is a box
        processedItems.push({
          ...item,
          processed: true,
          type: 'box'
        });
      }
    }
    
    return processedItems;
  };

  // Imperative control - Infinite carousel scrolling with FOR/WHILE loops
  useImperativeHandle(ref, () => ({
    startScroll(direction) {
      if (isScrolling) return;
      
      // FOR LOOP: Process all items when starting scroll
      const processedItems = processCarouselItems();
      console.log(`Processing ${processedItems.length} items (${processedItems.filter(item => item.type === 'box').length} boxes, ${processedItems.filter(item => item.type === 'separator').length} separators)`);
      
      setIsScrolling(true);
      setTargetSpeed(direction * 60); // Set target speed for slower movement
    },
    stopScroll() {
      setIsScrolling(false);
      setTargetSpeed(0); // Gradually decelerate to 0
    },
    // Auto-scroll methods removed - user-controlled only
  }));

  // Create infinite loop with 5 copies for truly seamless appearance
  const itemsWithSeparators = createItemsWithSeparators(items);
  // Use for loop to create multiple copies for seamless infinite appearance
  const duplicatedItems = [];
  const numberOfCopies = 100; // Adjust this number to control how many copies
  
  for (let i = 0; i < numberOfCopies; i++) {
    duplicatedItems.push(...itemsWithSeparators);
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={trackRef}
        className="flex flex-row items-center"
        style={{
          transform: `translate3d(${translate}px, 0, 0)`,
          gap: `${gapPx}px`,
          willChange: 'transform',
        }}
      >
        {duplicatedItems.map((node, i) => (
          <div key={`${node.key}-${i}`} className="box-item flex-shrink-0">
            {node.content}
          </div>
        ))}
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
  const [isContinuingSqueeze, setIsContinuingSqueeze] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Check if we should continue squeeze animation from 50%
    const shouldContinueSqueeze = sessionStorage.getItem('shouldContinueSqueeze');
    if (shouldContinueSqueeze === 'true') {
      sessionStorage.removeItem('shouldContinueSqueeze');
      
      // Add a small delay to ensure sub-page animation is complete
      setTimeout(() => {
        setIsContinuingSqueeze(true);
        
        // After animation completes, show content
        setTimeout(() => {
          setIsContinuingSqueeze(false);
          setIsContentVisible(true);
          setLineExpanded(true);
          setContentRevealed(true);
        }, 3000); // 3 seconds for the continue animation
      }, 100); // Small delay to ensure smooth transition
    } else {
      // Start normal opening animation
      setIsOpening(true);
      
      // After animation completes, show content
      setTimeout(() => {
        setIsOpening(false);
        setIsContentVisible(true);
        setLineExpanded(true);
        setContentRevealed(true);
      }, 1500); // 1.5 seconds for the opening animation
    }
  }, []);

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
          className="relative max-w-md bio-box block"
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
          className="relative max-w-md career-box block"
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
          className="relative max-w-md email-box block"
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
          className="relative max-w-md projects-box block"
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
          className="relative max-w-md linkedin-box block"
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
          className="relative max-w-md phone-box block"
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
          className="relative max-w-md github-box block"
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

  // Create offset arrays to ensure top and bottom never show same boxes
  const topBoxes = allBoxes;
  const bottomBoxes = [...allBoxes.slice(3), ...allBoxes.slice(0, 3)].reverse(); // Offset by 3 positions for better separation, then reversed

  // Refs to control each row
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Auto-scroll removed - user-controlled only

  // Global wheel/touch → continuous scrolling like Lorenzo Dal Dosso
  useEffect(() => {
    let startY = 0;
    let startX = 0;
    let dy = 0;
    let dx = 0;
    let isScrolling = false;

    const startScroll = (dir) => {
      if (isScrolling) return;
      isScrolling = true;
      
      // dir: +1 (user swipes up / scrolls down) → both rows scroll left
      // dir: -1 (user swipes down / scrolls up) → both rows scroll right
      topRowRef.current?.startScroll(dir);         // top: directionMultiplier=+1 → left on +1
      bottomRowRef.current?.startScroll(dir);      // bottom: directionMultiplier=-1 → right on +1 (opposite of top)
    };

    const stopScroll = () => {
      if (!isScrolling) return;
      isScrolling = false;
      topRowRef.current?.stopScroll();
      bottomRowRef.current?.stopScroll();
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      
      const direction = e.deltaY > 0 ? +1 : -1; // scroll down = +1
      startScroll(direction);
      
      // Stop scrolling after a delay
      setTimeout(stopScroll, 500);
    };

    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      dy = 0;
      dx = 0;
    };
    
    const onTouchMove = (e) => {
      const y = e.touches[0].clientY;
      const x = e.touches[0].clientX;
      dy = startY - y;
      dx = startX - x;
    };
    
    const onTouchEnd = () => {
      const THRESH = 20; // Balanced threshold
      const absDy = Math.abs(dy);
      const absDx = Math.abs(dx);
      
      console.log('Touch end - absDy:', absDy, 'absDx:', absDx, 'THRESH:', THRESH);
      
      if (absDy > THRESH || absDx > THRESH) {
        let direction;
        
        if (absDy > absDx) {
          // Vertical swipe
          direction = dy > 0 ? +1 : -1; // swipe up = +1
          console.log('Vertical swipe detected, direction:', direction);
        } else {
          // Horizontal swipe
          direction = dx > 0 ? +1 : -1; // swipe left = +1
          console.log('Horizontal swipe detected, direction:', direction);
        }
        
        console.log('Calling startScroll with direction:', direction);
        startScroll(direction);
        
        // Stop scrolling after a delay
        setTimeout(stopScroll, 500);
      } else {
        console.log('Swipe not detected - below threshold');
      }
    };

    document.addEventListener('wheel', onWheel, { passive: false });
    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('wheel', onWheel);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
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
      
      {/* Main page content - revealed with squeeze-style opening */}
      <div className={`min-h-screen relative ${
        isContinuingSqueeze ? 'animate-page-squeeze-continue' : 
        isOpening ? 'animate-page-open' : 
        isSqueezing ? 'animate-page-squeeze' : ''
      } ${!isContentVisible ? 'opacity-0' : 'opacity-100'}`}>
        {/* Initials in top left corner */}
        <div className="absolute top-8 left-8">
          <h1 
            className="text-5xl font-medium transition-transform" 
            style={{ fontFamily: 'Gucina, sans-serif' }}
          >
            R J W
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          {/* TOP: positive steps = LEFT */}
          <BoxRow ref={topRowRef} items={topBoxes} directionMultiplier={1.5} initialOffsetMultiplier={40} />

          {/* NAME IN CENTER */}
          <h2 className="text-[10rem] font-semi-bold my-name" style={{ fontFamily: 'Gucina, sans-serif' }}>
            Rashaun J Williams
          </h2>

          {/* BOTTOM: positive steps = RIGHT */}
          <BoxRow ref={bottomRowRef} items={bottomBoxes} directionMultiplier={-1.5} />
        </div>
      </div>
    </div>
  );
}
