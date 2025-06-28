'use client';

import React from 'react';
import Image from 'next/image';
import { flashcard } from '../../data/flashcard';
import { motion } from 'framer-motion';


export default function GameModeSection() {
  const animationOrder = [3, 2, 4, 1, 5];
  const flashcardWithOrder = flashcard.map((item) => ({
  ...item,
  animationIndex: animationOrder.indexOf(item.id),
}));  
  return (
    <section className="py-[120px] lg:py-[100px]   section-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center">
        <p
        className='w-[380px] lg:w-[635px] mb-12 text-center font-inter text-[18px] lg:text-[24px]  px-[20px] lg:px-0 font-medium leading-[150%] text-[#8E8E93] lg:text-[color:var(--Grays-Gray-2,#AEAEB2)]'
        >Role play, Flashcards, Speedchallenge & more fun features roll out shortly. <br className='sm:hidden '></br>  <br className='sm:hidden '></br>Join early and grow with us!</p>
        
     
<div className='flex max-w-[747px] max-h-[320px] items-center gap-5'> 
  {flashcardWithOrder.map((item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: item.animationIndex * 0.2,
        ease: 'easeOut'
      }}
      viewport={{ once: true }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
      />
    </motion.div>
  ))}
</div>
        
         {/* <Image
                            src={"/images/1.png"}
                 alt="Game mode"
  width={747}
  height={320} // hoặc dùng height phù hợp với tỉ lệ thật
  quality={100}
  priority
  unoptimized={true}
                            className=" "
                          /> */}
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Game Modes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose your learning style with our interactive game modes
          </p>
        </div>       
        <div className="flex justify-center items-center gap-2 md:gap-4  py-12 perspective-1000">
          {cards.map((card, index) => {
            // Center card is index 2 (Role play - pink) for 5 cards
            const isCenter = index === 2;
            const distance = Math.abs(index - 2);
            return (              <div
                key={index}
                className={`transition-all duration-700 ease-out cursor-pointer ${
                  isCenter 
                    ? 'scale-110 z-20' 
                    : distance === 1
                      ? 'scale-100 z-10'
                      : 'scale-90 z-0'
                }`}style={{
                  transform: `
                    scale(${isCenter ? 1.1 : distance === 1 ? 1 : 0.9})
                    rotateY(${
                      index === 0 ? '-25deg'      // Card 0: rotate left (negative)
                      : index === 1 ? '-15deg'    // Card 1: rotate slightly left  
                      : index === 2 ? '0deg'      // Card 2: no rotation
                      : index === 3 ? '15deg'     // Card 3: rotate slightly right
                      : '25deg'                   // Card 4: rotate right (positive)
                    })
                    translateZ(${isCenter ? '10px' : '0px'})
                  `,
                  transformStyle: 'preserve-3d',
                }}
              >                <div
                  className={`rounded-[2rem] ${card.color} relative shadow-2xl transition-all duration-500`}
                  style={{
                    width: `${card.width}px`,
                    height: `${card.height}px`,
                  }}
                >
                  {card.icon && (
                    <div className="absolute top-4 md:top-6 left-4 md:left-6">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {card.icon.startsWith('/') ? (
                          <Image
                            src={card.icon}
                            alt={card.title?.replace('\n', ' ') || 'Game mode'}
                            width={20}
                            height={20}
                            className="object-contain md:w-6 md:h-6"
                          />
                        ) : (
                          <span className="text-xl md:text-2xl">{card.icon}</span>
                        )}
                      </div>
                    </div>
                  )}

                  {card.title && (
                    <div className="absolute bottom-6 md:bottom-8 left-4 md:left-6 right-4 md:right-6">
                      <h3 className="text-white text-2xl md:text-4xl font-bold whitespace-pre-line leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  )}

                  {isCenter && (
                    <div className="absolute inset-0 rounded-[2rem] ring-2 md:ring-4 ring-white/20"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div> */}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
