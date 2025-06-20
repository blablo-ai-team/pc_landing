'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AppDownloadProps {
  className?: string;
  variant?: 'light' | 'dark';
  defaultTab?: 'google' | 'apple';
  qrContainerWidth?: number; // Default: 170px
  qrContainerHeight?: number; // Default: 177px
  qrCodeSize?: number; // Default: 80px
}

/**
 * Reusable app download component with responsive behavior
 * - Desktop: Shows QR codes with download buttons (QR code container fixed at 170x177px, QR image at 80x80px)
 * - Mobile: Shows only download buttons
 */
export default function AppDownload({ 
  className = '',
  variant = 'light',
  defaultTab = 'google',
  qrContainerWidth = 200, // Increased from 170 to 200
  qrContainerHeight = 177,
  qrCodeSize = 80
}: AppDownloadProps) {
  const [activeTab, setActiveTab] = useState<'google' | 'apple'>(defaultTab);
  // Fixed button dimensions - always 196px width
  const buttonDimensions = {
    width: 196,
    height: 58 // Appropriate height to maintain aspect ratio
  };
    // Variant styles
  const variantStyles = {
    activeBackground: variant === 'light' ? 'bg-white/10' : 'bg-black/10',
    qrBackground: variant === 'light' ? 'bg-white' : 'bg-gray-100'
  };    // QR code container styles
  const qrContainerStyles = {
    width: "90%",
    height: `${qrContainerHeight}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    marginLeft: "auto",
    marginRight: "auto"
  };
  
  // QR code image styles
  const qrCodeStyles = {
    width: `${qrCodeSize}px`,
    height: `${qrCodeSize}px`
  };
  
  return (
    <div className={`w-full ${className}`}>      {/* Main container for app download options */}
      <div className="flex justify-center gap-6 lg:gap-10">{/* Google Play Store */}
        
          <motion.div   
               className={`relative flex flex-col shadow-lg rounded-2xl transition-all duration-300 overflow-hidden ${
            activeTab === 'google' ? variantStyles.activeBackground : ''
          }`}
          style={{ width: `${qrContainerWidth}px` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveTab('google')}
        >          {/* Download Button at top - Full width of parent */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.blablo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block  flex-none w-full"
          >
            <Image
              src="/images/app_button_google.png"
              alt="Get it on Google Play"
              width={buttonDimensions.width}
              height={buttonDimensions.height}
              className="h-auto w-full object-contain"
              priority
            />
          </a>
            {/* QR Code in the middle - Only shown on desktop */}
          <div className="hidden md:flex md:items-center md:justify-center" style={qrContainerStyles}>
            <Image
              src="/images/qr-google-play.svg"
              alt="Scan to download from Google Play"
              width={qrCodeSize}
              height={qrCodeSize}
              style={qrCodeStyles}
              className="mx-auto"
              priority
            />
          </div></motion.div>     
        
        {/* Apple App Store */}        <motion.div
          className={`relative flex flex-col shadow-lg rounded-2xl transition-all duration-300 overflow-hidden ${
            activeTab === 'apple' ? variantStyles.activeBackground : ''
          }`}
          style={{ width: `${qrContainerWidth}px` }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setActiveTab('apple')}
        >          {/* Download Button at top - Full width of parent */}
          <a 
            href="https://apps.apple.com/app/blablo/id1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block  w-full"
          >
            <Image
              src="/images/app_button_apple.png"
              alt="Download on the App Store"
              width={buttonDimensions.width}
              height={buttonDimensions.height}
              className="h-auto w-full object-contain"
              priority
            />
          </a>
            {/* QR Code in the middle - Only shown on desktop */}
          <div className="hidden md:flex md:items-center md:justify-center" style={qrContainerStyles}>
            <Image
              src="/images/qr-app-store.svg"
              alt="Scan to download from App Store"
              width={qrCodeSize}
              height={qrCodeSize}
              style={qrCodeStyles}
              className="mx-auto"
              priority
            />
          </div>
      
        </motion.div>
      </div>
    </div>
  );
}
