'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroContent } from '@/data/hero'
import AppDownload from '@/components/common/AppDownload'


export default  function HeroSection () {
  return (
    <section className="w-full bg-neutral-50 py-20 2xl:py-32">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        
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
              <div className="text-gray-900  mb-2 2xl:mb-4  text-[36px] sm:text-[80px]">
                {heroContent.headline.mainText}
              </div>             
               <div className="relative inline-block">              
                  {/* Star icon - top left */}
                <Image
                  src={heroContent.headline.decorativeIcons.pinkStarTopLeft}
                  alt=""
                  width={48}
                  height={51}
                  className="absolute -top-0.5 -left-4 sm:-top-1 sm:-left-6 lg:-top-1 lg:-left-8 xl:-top-3 xl:-left-8 w-6 h-7 sm:w-8 sm:h-9 lg:w-10 lg:h-11 xl:w-12 xl:h-13"
                />
                  {/* Star icon - bottom left */}
                <Image
                  src={heroContent.headline.decorativeIcons.pinkStarBottomLeft}
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
                  {heroContent.headline.highlightText}
                </span>
                
                {/* Star icon - right */}
                <Image
                  src={heroContent.headline.decorativeIcons.blueStarRight}
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
            {heroContent.subtext}
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
              {heroContent.callToAction.boostText}
            </p>
          </motion.div>
          <AppDownload/>
       
        </div>
      </div>
    </section>
  )
}

