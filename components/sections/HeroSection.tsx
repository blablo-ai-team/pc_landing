'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroContent } from '@/data/hero'
import AppDownload from '@/components/common/AppDownload'


export default  function HeroSection () {
  return (   
     <section className="w-full leading-none block  pt-[160px]">
      {/* <div className="max-w-6xl bg-amber-700 2xl:max-w-8xl mx-auto px-4 sm:px-12 lg:px-8 2xl:px-12"> */}
        <div className="max-w-6xl  2xl:max-w-8xl "> 
        {/* Main Content */}
        <div className="text-center ">
            {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[330px] 2xl:px-20"
          >            
            <h1 className="font-bricolage  ">
              <div className="text-gray-900 max-w-[1024px] max-h-[86px] text-nowrap mx-auto    mb-2 2xl:mb-3 text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[72px]  2xl:text-[70px] font-medium p-0">
                {heroContent.headline.mainText}
              </div>
               <div className="relative inline-block mb-[46px]">              
                  {/* Star icon - top left */}           
                       <Image
                  src={heroContent.headline.decorativeIcons.pinkStarTopLeft}
                  alt=""
                  width={48}
                  height={51}
                //   className="absolute   -top-0.5 -left-4 sm:-top-1 sm:-left-6 md:-top-2 md:-left-10 lg:-top-2 lg:-left-12 xl:-top-3 xl:-left-14 2xl:-top-4 2xl:-left-16 w-4  h-6 sm:w-8 sm:h-9 md:w-10 md:h-11 lg:w-12 lg:h-13 xl:w-14 xl:h-15"
                // />
                    className="absolute -top-4  h-9 -left-7
                    @[200px]:-left-4 @[200px]:w-5 @[200px]:h-10
                       @[300px]:-left-6 @[300px]:w-6 @[300px]:h-6
                    @[400px]:-left-8 @[400px]:w-8 @[400px]:h-8
                    @[500px]:-left-10 @[500px]:w-10 @[500px]:h-10
                    @[600px]:-left-12 @[600px]:w-12 @[600px]:h-12
                 "
                />
                  {/* Star icon - bottom left */}         
                         <Image
                  src={heroContent.headline.decorativeIcons.pinkStarBottomLeft}
                  alt=""
                  width={24}
                  height={25}
                //   className="absolute -bottom-4 left-16 sm:-bottom-5 sm:left-20 md:-bottom-6 md:left-28 lg:-bottom-7 lg:left-32 xl:-bottom-8 xl:left-36 2xl:-bottom-9 2xl:left-40 w-2 h-2 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                // />
                    className="absolute -bottom-2 left-20 w-5 h-5
                    @[200px]:left-10 @[200px]:w-3 @[200px]:h-3
                    @[300px]:left-14 @[300px]:w-4 @[300px]:h-4
                    @[400px]:left-18 @[400px]:w-5 @[400px]:h-5
                    @[500px]:left-24 @[500px]:w-6 @[500px]:h-6
                    @[600px]:left-28 @[600px]:w-7 @[600px]:h-7"
                />
                  {/* Main text with gradient */}
                <span className="text-[36px] sm:text-[48px] md:text-[64px]  lg:text-[72px] xl:text-[72px] 2xl:text-[86px] font-medium" style={{
                  background: 'linear-gradient(90deg, #FF4BA0 0%, #CE6CFF 45%, #3260FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {heroContent.headline.highlightText}
                </span>
                
                {/* Star icon - right */}               
                 <Image
                  src={heroContent.headline.decorativeIcons.blueStarRight}
                  alt=""
                  width={28}
                  height={28}
                //   className="absolute top-1 -right-8 sm:top-0 sm:-right-10 md:top-1 md:-right-12 lg:top-1 lg:-right-14 xl:top-2 xl:-right-16 2xl:top-3 2xl:-right-18 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                // />
                    className="absolute top-0 -right-4 w-5 h-5
                    @[200px]:-right-5 @[200px]:w-5 @[200px]:h-5
                    @[300px]:-right-6 @[300px]:w-6 @[300px]:h-6
                    @[400px]:-right-8 @[400px]:w-7 @[400px]:h-7
                    @[500px]:-right-10 @[500px]:w-8 @[500px]:h-8
                    @[600px]:-right-12 @[600px]:w-9 @[600px]:h-9"
                />
              </div>
            </h1>
          </motion.div>        
            {/* Sub-text */}       
               <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bricolage
            mx-auto text-black text-center font-medium   mb-11 max-h-[72px]  max-w-[480px] text-[14px] sm:text-[20px] lg:text-[24px] leading-[150%]"
          >
            {heroContent.subtext}
          </motion.p>
          {/* Boost your speaking NOW text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-[25px] "
          >            <p 
              className="font-bricolage  text-black text-center font-semibold text-[16px] sm:text-[17px] lg:text-[16px] leading-[100%]"
            >
              {heroContent.callToAction.boostText}
            </p>
            
          </motion.div>

               <div className="relative z-20 mb-8">
            <AppDownload />
          </div>
     
        </div>
      </div>
          <div className="relative z-10   lg:-top-20 xl:-top-10 ">
        <Image
          src="/images/card3d.png"
          alt="3D card preview"
          width={1986}
          height={510}
          className="w-full h-auto max-h-[551px] -translate-y-20"
          priority={true}
        />
      </div>
    </section>
  )
}

