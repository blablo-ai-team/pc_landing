'use client';

import { blabloForYouData } from '@/data/blabloForYou';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlabloForYouSection() {
  return (
    <section className="py-20 px-4 section-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className='text-[16px] max-w-[419px] mx-auto text-[#8E8E93] mb-[20px]'>Meet BlaBlo, your on-the-go English buddy</p>
          <h2 className="font-bricolage text-4xl md:text-5xl  text-gray-900 mb-6">
            {blabloForYouData.title}<span className='font-bold'>You</span>
          </h2>
          <p className="font-inter text-[16px] max-w-[419px] text-[#000]  mx-auto leading-relaxed">
            {blabloForYouData.subtitle} <br /><span className='font-bold '>designed just for you.</span>
          </p>
        </div>
        {/* Main Content Grid */}
        <div className='bg-[#F2F2F7] max-w-[1176px] max-h-[1091px] mx-auto py-6 px-6 rounded-3xl flex flex-col '>
          <div className="grid lg:grid-cols-2 gap-2  items-center">
            {/* Left Side - Hiro Chat Conversation */}
            <div className="relative min-h-[551px] w-full max-w-[552px]  rounded-[32px] bg-[#FEFAF4] shadow-lg overflow-hidden">
              {/* Character Image */}
              <div className="absolute  bottom-0">
                <Image
                  src="/images/learning/hiro_work.png"
                  alt="Hiro character"
                  width={512}
                  height={512}
                  className="w-auto h-[512px] "
                  priority
                />
              </div>

              {/* Chat Bubbles Container */}
              <div className="absolute top-8 right-6 flex flex-col space-y-2 max-w-[359px]">
                {blabloForYouData.hiromsg.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex px-6 py-4 justify-center items-center rounded-[100px] bg-[#2249D1] self-end"
                  >
                    <p className={`font-inter text-white text-[14px] font-medium leading-[150%] text-nowrap`}>{message.msg}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Right Side - AI Chat and Phone Screenshots */}
            <div className="relative min-h-[551px] w-full max-w-[552px] rounded-[32px] bg-white px-6 pt-6 shadow-lg overflow-hidden">
              {/* AI Icon and Response Bubbles */}
              <div className="flex flex-col space-y-2 pt-4">
                {/* AI Icon and First Message */}
                <div className="flex items-start space-x-4">              
                    {/* Rainbow AI Icon */}
                  <div className="relative w-[40px]  ">

                    <div className="absolute inset-[3px]  rounded-full flex items-center justify-center bg-white">
                      <Image
                        src="/icons/chat_ai.svg"
                        alt="AI Assistant"
                        width={94}
                        height={94}
                        className="max-h-[94px]  scale-200"
                      />
                    </div>
                  </div>
                  {/* First Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex max-w-[378px] px-6 py-4 justify-center items-center rounded-[100px] bg-[#F2F2F7] "
                  >                  <p className="font-inter text-black text-[14px]  leading-[150%]">
                      Hi Hiro! By the end of this week, you&apos;ll <span className="font-bold text-[#2249D1]">handle guest complaints smoothly</span>
                    </p>
                  </motion.div>
                </div>            
                  {/* Second Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex px-6 py-4 justify-center items-center gap-1 rounded-[100px] bg-[#F2F2F7] ml-16 max-w-[330px]"
                >
                  <p className="font-inter text-black text-[14px]  leading-[150%]">First quest: &apos;Apologising Professionally&apos;</p>
                </motion.div>

                {/* Third Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}
                  className="inline-flex text-nowrap max-w-[124px] px-6 py-4 justify-center items-center gap-1 rounded-[100px] bg-[#F2F2F7] ml-16"
                >
                  <p className="font-inter text-black text-[14px] leading-[150%]">Let&apos;s begin!</p>
                </motion.div>
              </div>

              {/* Phone Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-6 "
              >              {/* First Phone */}
                <div className=" max-w-[170px] translate-y-10 object-cover shadow-xl">
                  <Image
                    src="/images/learning/phone1.png"
                    alt="App screenshot - Learning Quest"
                    width={210}
                    height={220}
                    className="inset-0  w-full h-full  "
                  />
                </div>

                {/* Second Phone */}
                <div className=" max-w-[170px] translate-y-10 object-cover">
                  <Image
                    src="/images/learning/phone2.png"
                    alt="App screenshot - Learning Activity"
                  width={210}
                    height={220}
                    className=" inset-0 w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>        {/* Job Titles Marquee - Below the two cards */}
          <div className="mt-4  overflow-hidden bg-white rounded-3xl">
            <div className="text-start mb-6 ">
              <h3 className="font-bricolage text-[14px] md:text-[16px] pt-10 pl-20 font-bold text-gray-900">
                Whatever your job, BlaBlo has you covered.
              </h3>
            </div>
            {/* Alternate direction marquees - 4 rows */}
            <div className="flex flex-col gap-6 py-5">            {/* Row 1 - Right to Left */}
              <div className="marquee-container overflow-hidden">
                <div className="marquee-row marquee-row-rtl ">
                  {/* Triple content for seamless infinite loop */}
                  {[...Array(3)].map((_, dupIndex) => (
                    <div key={`rtl-1-${dupIndex}`} className="flex whitespace-nowrap">
                      {blabloForYouData.arrayrandom.slice(0, 1).map((group, groupIndex) => (
                        <div key={`rtl-1-${dupIndex}-${groupIndex}`} className="flex items-center">
                          {group.msg.map((job, index) => (
                            <span key={`rtl-1-${dupIndex}-${groupIndex}-${index}`} className="flex items-center">
                              <span className="text-[#2249D1] font-medium text-2xl md:text-4xl whitespace-nowrap">{job}</span>
                              <span className="mx-3 text-gray-300 text-2xl md:text-4xl">•</span>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Row 2 - Left to Right */}
              <div className="marquee-container overflow-hidden">
                <div className="marquee-row marquee-row-ltr">
                  {[...Array(4)].map((_, dupIndex) => (
                    <div key={`ltr-2-${dupIndex}`} className="flex whitespace-nowrap">
                      {blabloForYouData.arrayrandom.slice(1, 2).map((group, groupIndex) => (
                        <div key={`ltr-2-${dupIndex}-${groupIndex}`} className="flex items-center">
                          {group.msg.map((job, index) => (
                            <span key={`ltr-2-${dupIndex}-${groupIndex}-${index}`} className="flex items-center">
                              <span className="text-[#2249D1] font-medium text-2xl md:text-4xl whitespace-nowrap">{job}</span>
                              <span className="mx-3 text-gray-300 text-2xl md:text-4xl">•</span>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Row 3 - Right to Left */}
              <div className="marquee-container overflow-hidden">
                <div className="marquee-row marquee-row-rtl" >
                  {[...Array(3)].map((_, dupIndex) => (
                    <div key={`rtl-3-${dupIndex}`} className="flex whitespace-nowrap">
                      {blabloForYouData.arrayrandom.slice(2, 3).map((group, groupIndex) => (
                        <div key={`rtl-3-${dupIndex}-${groupIndex}`} className="flex items-center">
                          {group.msg.map((job, index) => (
                            <span key={`rtl-3-${dupIndex}-${groupIndex}-${index}`} className="flex items-center">
                              <span className="text-[#2249D1] font-medium text-2xl md:text-4xl whitespace-nowrap">{job}</span>
                              <span className="mx-3 text-gray-300 text-2xl md:text-4xl">•</span>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/* Row 4 - Left to Right */}
              <div className="marquee-container overflow-hidden">
                <div className="marquee-row marquee-row-ltr" >
                  {[...Array(3)].map((_, dupIndex) => (
                    <div key={`ltr-4-${dupIndex}`} className="flex whitespace-nowrap">
                      {blabloForYouData.arrayrandom.slice(3, 4).map((group, groupIndex) => (
                        <div key={`ltr-4-${dupIndex}-${groupIndex}`} className="flex items-center">
                          {group.msg.map((job, index) => (
                            <span key={`ltr-4-${dupIndex}-${groupIndex}-${index}`} className="flex items-center">
                              <span className="text-[#2249D1] font-medium text-2xl md:text-4xl whitespace-nowrap">{job}</span>
                              <span className="mx-3 text-gray-300 text-2xl md:text-4xl">•</span>
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
        
        .marquee-row {
          display: flex;
          width: fit-content;
          will-change: transform;
        }
          .marquee-row-ltr {
          animation: scroll-left-to-right 100s linear infinite;
        }
        
        .marquee-row-rtl {
          animation: scroll-right-to-left 100s linear infinite;
        }
        
        @keyframes scroll-left-to-right {
          0% { transform: translateX(-66.666%); }
          100% { transform: translateX(0%); }
        }
        
        @keyframes scroll-right-to-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-66.666%); }
        }
        
        /* Pause animation on hover for better UX */
        .marquee-container:hover .marquee-row {
          animation-play-state: paused;
        }
        
        /* Smooth transitions */
        .marquee-row span {
          transition: all 0.2s ease;
        }
        
        /* Add subtle hover effect */
        .marquee-container:hover span {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}
