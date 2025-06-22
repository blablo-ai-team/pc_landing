import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Mock hero content for testing
const mockHeroContent = {
  branding: {
    logoSrc: '/images/blablo-logo.svg',
    logoAlt: 'BlaBló Logo',
    ctaButton: {
      text: 'Get BlaBló',
      iconSrc: '/icons/arrow_forward.svg',
      iconSticky: '/icons/arrow_forward_pink.svg',
      iconAlt: 'Arrow forward'
    }
  }
};

interface TestHeaderProps {
  onGetBlabloClick?: () => void;
  testMode?: 'basic' | 'advanced' | 'fixed' | 'ios-fix' | 'problematic';
}

const TestHeader: React.FC<TestHeaderProps> = ({ 
  onGetBlabloClick, 
  testMode = 'basic' 
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSticky(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsSticky(currentScrollY > 50);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Different header styles based on test mode
  const getHeaderClasses = () => {
    const baseClasses = "w-full border-b border-gray-300 transition-all duration-300";
    
    switch (testMode) {
      case 'basic':
        return `${baseClasses} sticky top-0 z-50`;
      case 'advanced':
        return `${baseClasses} sticky top-0 z-50 backdrop-blur-md`;
      case 'fixed':
        return `${baseClasses} fixed top-0 z-50`;
      case 'ios-fix':
        return `${baseClasses} sticky top-0 z-50`;
      case 'problematic':
        return `${baseClasses} sticky top-0 z-50`;
      default:
        return `${baseClasses} sticky top-0 z-50`;
    }
  };

  const getHeaderStyles = () => {
    const baseStyles = {
      backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
    };

    switch (testMode) {
      case 'advanced':
        return {
          ...baseStyles,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        };
      case 'ios-fix':
        return {
          ...baseStyles,
          position: '-webkit-sticky' as any,
          willChange: 'transform',
          transform: 'translateZ(0)',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <header
      ref={headerRef}
      className={getHeaderClasses()}
      style={getHeaderStyles()}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Debug info */}
          <div className="hidden md:block text-xs text-gray-500">
            Mode: {testMode} | Scroll: {scrollY}px | Sticky: {isSticky ? 'Yes' : 'No'}
          </div>

          {/* Logo */}
          <button 
            onClick={handleReset}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Back to top"
          >
            <div className="w-24 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white font-bold text-sm">
              LOGO
            </div>
          </button>

          {/* Get BlaBlo Button */}
          <button
            onClick={onGetBlabloClick}
            className={`inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              isSticky
                ? 'bg-purple-600 text-white shadow-lg hover:bg-purple-700'
                : 'bg-white text-purple-600 border-2 border-purple-600 shadow-md hover:bg-purple-50'
            }`}
          >
            <span className="font-bold text-sm">
              {mockHeroContent.branding.ctaButton.text}
            </span>
            <div className="w-4 h-4 bg-current rounded-full flex items-center justify-center">
              →
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

// Test page component
const StickyHeaderTestPage = () => {
  const [currentTest, setCurrentTest] = useState<'basic' | 'advanced' | 'fixed' | 'ios-fix' | 'problematic'>('basic');
  const [containerMode, setContainerMode] = useState<'normal' | 'problematic'>('normal');

  const handleGetBlabloClick = () => {
    console.log('Get BlaBló clicked!');
    alert('Button clicked!');
  };

  const testModes = [
    { key: 'basic', label: 'Basic Sticky', description: 'Simple position: sticky' },
    { key: 'advanced', label: 'Advanced Sticky', description: 'Sticky with backdrop filter' },
    { key: 'fixed', label: 'Fixed Fallback', description: 'position: fixed as fallback' },
    { key: 'ios-fix', label: 'iOS Fix', description: 'iOS Safari specific fixes' },
    { key: 'problematic', label: 'Problematic Container', description: 'Test with problematic parent container' },
  ] as const;

  const containerClass = containerMode === 'problematic' 
    ? 'min-h-screen overflow-hidden relative'
    : 'relative';

  return (
    <div className="min-h-screen bg-gray-50">
      <TestHeader 
        onGetBlabloClick={handleGetBlabloClick}
        testMode={currentTest}
      />

      {/* Test Controls */}
      <div className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Sticky Header Test Controls</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-4">
            {testModes.map((mode) => (
              <button
                key={mode.key}
                onClick={() => {
                  setCurrentTest(mode.key);
                  if (mode.key === 'problematic') {
                    setContainerMode('problematic');
                  } else {
                    setContainerMode('normal');
                  }
                }}
                className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                  currentTest === mode.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="font-bold">{mode.label}</div>
                <div className="text-xs opacity-75">{mode.description}</div>
              </button>
            ))}
          </div>

          <div className="flex gap-4 text-sm">
            <div>
              <strong>Current Test:</strong> {testModes.find(m => m.key === currentTest)?.label}
            </div>
            <div>
              <strong>Container:</strong> {containerMode}
            </div>
            <div>
              <strong>User Agent:</strong> {typeof window !== 'undefined' ? (
                /iPad|iPhone|iPod/.test(navigator.userAgent) ? 'iOS' :
                /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) ? 'Safari' :
                'Other'
              ) : 'Unknown'}
            </div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className={containerClass}>
        <section className="h-screen bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-800 mb-4">Section 1</h2>
            <p className="text-red-600">Scroll down to test sticky behavior</p>
          </div>
        </section>

        <section className="h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Section 2</h2>
            <p className="text-green-600">Header should be sticky at the top</p>
          </div>
        </section>

        <section className="h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">Section 3</h2>
            <p className="text-blue-600">Keep scrolling to test</p>
          </div>
        </section>

        <section className="h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-yellow-800 mb-4">Section 4</h2>
            <p className="text-yellow-600">Is the sticky header working?</p>
          </div>
        </section>

        <section className="h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Section 5</h2>
            <p className="text-purple-600">Final test section</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StickyHeaderTestPage;
