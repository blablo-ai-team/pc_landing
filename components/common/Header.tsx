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
      window.scrollTo(0, 0);
      setIsSticky(false);
    };
  useEffect(() => {
    const handleScroll = () => {
      // Consider sticky when scrolled more than 100px
      setIsSticky(window.scrollY > 100);
    };
   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF] backdrop-blur-md border-b border-[#C7C7CC]">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
          onClick={handleReset}
          >
            <Image
            
              src={heroContent.branding.logoSrc}
              alt={heroContent.branding.logoAlt}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Get BlaBlo Button - Changes style based on sticky state */}
          <button
            onClick={onGetBlabloClick}
            className={`inline-flex cursor-pointer items-center justify-center gap-1 px-8 py-3 rounded-3xl transition-all duration-300 ${
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
              src={  isSticky ? heroContent.branding.ctaButton.iconSrc : heroContent.branding.ctaButton.iconSticky}
              alt={heroContent.branding.ctaButton.iconAlt}
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
