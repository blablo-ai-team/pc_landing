'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

interface HeroSectionProps {
  logoSrc?: string
  logoAlt?: string
  onGetBlabloClick?: () => void
  googlePlayUrl?: string
  appStoreUrl?: string
  googlePlayQrSrc?: string
  appStoreQrSrc?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  logoSrc = '/images/blablo-logo.svg',
  logoAlt = 'BlaBló',
  onGetBlabloClick,
  googlePlayUrl = '#',
  appStoreUrl = '#',  googlePlayQrSrc = '/images/qr-google-play.svg',
  appStoreQrSrc = '/images/qr-app-store.svg',
}) => {
  return (    <section className="w-full bg-gray-50 py-20 2xl:py-32">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
        {/* Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          {/* Logo */}
          <div className="mb-4 sm:mb-0">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>          {/* Get BlaBlo Button */}
          <button
            onClick={onGetBlabloClick}
            className="inline-flex cursor-pointer items-center justify-center gap-1 px-8 py-3 bg-white border border-[#C7C7CC] rounded-3xl shadow-[0px_4px_0px_0px_#DFDFDF] transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0px_2px_0px_0px_#DFDFDF] active:translate-y-1 active:shadow-none"
          >
            <Image
              src="/icons/app_shortcut.svg"
              alt="App shortcut"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-[#EE33DF] text-center font-bricolage text-base font-bold leading-[100%]">
              Get BlaBlo
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center">
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >            
          <h1 className="font-bricolage text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
              <div className="text-gray-900  mb-2 2xl:mb-4 text-[80px]">
                Turn Dead Time into
              </div>             
               <div className="relative inline-block">              
                  {/* Star icon - top left */}
                <Image
                  src="/icons/soft_star_pink.svg"
                  alt=""
                  width={48}
                  height={51}
                  className="absolute -top-0.5 -left-4 sm:-top-1 sm:-left-6 lg:-top-1 lg:-left-8 xl:-top-3 xl:-left-8 w-6 h-7 sm:w-8 sm:h-9 lg:w-10 lg:h-11 xl:w-12 xl:h-13"
                />
                  {/* Star icon - bottom left */}
                <Image
                  src="/icons/soft_star_pink.svg"
                  alt=""
                  width={24}
                  height={25}
                  className="absolute -bottom-4 left-16 sm:-bottom-5 sm:left-20 lg:-bottom-6 lg:left-24 xl:-bottom-0 xl:left-28 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
                
                {/* Main text with gradient */}
                <span style={{
                  background: 'linear-gradient(90deg, #FF4BA0 0%, #CE6CFF 45%, #3260FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize:80,
                }}>
                  Fluent English
                </span>
                
                {/* Star icon - right */}
                <Image
                  src="/icons/Soft_star_blue.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="absolute top-1 -right-8 sm:top-0 sm:-right-10 lg:top-1 lg:-right-5 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                />
              </div>
            </h1>
          </motion.div>          {/* Sub-text */}          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage text-black text-center font-normal mx-auto mb-12 2xl:mb-16"
            style={{
              width: '440px',
              fontSize: '20px',
              lineHeight: '150%'
            }}
          >
            Use your commute, dish-washing, or any spare minute to practice real speaking
          </motion.p>   {/* Boost your speaking NOW text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 mb-8"
          >
            <p 
              className="font-bricolage text-black text-center font-semibold"
              style={{
                fontSize: '18px',
                fontWeight: '600',
                lineHeight: '150%'
              }}
            >
              Boost your speaking NOW
            </p>
          </motion.div>
          {/* CTA Buttons with QR Codes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
              {/* Google Play */}
            <div className="flex flex-col items-center">
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 mb-4"
              >
                <Image
                  src="/images/app_button_google.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-auto w-[176px]"
                />
              </a>
                {/* Google Play QR Code */}
              <div 
                className="bg-white border-gray-300 flex items-center justify-center p-4"
                style={{
                  width: '176px',
                  height: '104px',
                  flexShrink: 0,
                  borderRadius: '8px',
                  border: '1px solid #D1D1D6',
                  background: '#FFF'
                }}
              >
                <Image
                  src={googlePlayQrSrc}
                  alt="Google Play QR Code"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>

            {/* App Store */}
            <div className="flex flex-col items-center">
                
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 mb-4"
              >
                <Image
                  src="/images/app_button_apple.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-auto w-[176px]"
                />
              </a>
              
              {/* App Store QR Code */}
              <div className="bg-white border-gray-300 flex items-center justify-center p-4"
                style={{
                  width: '176px',
                  height: '104px',
                  flexShrink: 0,
                  borderRadius: '8px',
                  border: '1px solid #D1D1D6',
                  background: '#FFF'
                }}>
                <Image
                  src={appStoreQrSrc}
                  alt="App Store QR Code"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

       
        </div>
      </div>
    </section>
  )
}

export default HeroSection
