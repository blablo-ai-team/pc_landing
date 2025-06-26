'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { heroContent } from '@/data/hero';

interface HeaderProps {
  onGetBlabloClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetBlabloClick }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSticky(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 50);
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

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      {isSticky && <div style={{ height: '88px' }} />}
      
      <header
   
        className={`w-full px-[250px]  transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 right-0' : 'relative'
        }`}
        style={{
          backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 1)',
          backdropFilter: isSticky ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isSticky ? 'blur(10px)' : 'none',
          zIndex: isSticky ? 999 : 1,
        }}
      >
      <div className="max-w-5xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={handleReset}
            className="focus:outline-none focus:ring-2 focus:ring-[#EE33DF] rounded-lg"
            aria-label="Back to top"
          >
            <Image
              src={heroContent.branding.logoSrc}
              alt={heroContent.branding.logoAlt}
              width={149}
              height={49}
              className=" "
              priority
            />
          </button>

          {/* Get BlaBlo Button */}
          <button
            onClick={onGetBlabloClick}
            className={`inline-flex cursor-pointer items-center justify-center gap-1  px-4 sm:px-8 py-3 rounded-3xl transition-all duration-300 ${
              isSticky
                ? 'bg-[#EE33DF] border border-[#EE33DF] shadow-[0px_4px_0px_0px_#C91CC7] hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#C91CC7] active:translate-y-1 active:shadow-none'
                : 'bg-white border border-[#C7C7CC] shadow-[0px_4px_0px_0px_#DFDFDF] hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#DFDFDF] active:translate-y-1 active:shadow-none'
            }`}
          >
            <span className={`text-center font-bricolage text-base font-bold leading-[100%] transition-colors duration-300 ${
              isSticky ? 'text-white' : 'text-[#EE33DF]'
            }`}>
              {heroContent.branding.ctaButton.text}
            </span>
            <Image
              src={isSticky ? heroContent.branding.ctaButton.iconSrc : heroContent.branding.ctaButton.iconSticky}
              alt={heroContent.branding.ctaButton.iconAlt}
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
