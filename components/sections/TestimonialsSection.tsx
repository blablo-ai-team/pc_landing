'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RegionData } from '@/data/category';

export default function TestimonialsSection() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = RegionData.length;
const [cardWidth, setCardWidth] = useState(360);

  // Auto-slide functionality (optional)
  useEffect(() => {
    
    if (!isDragging) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4500); // Auto slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isDragging, totalSlides]);
useEffect(() => {
  const updateCardWidth = () => {
    const width = window.innerWidth;
    setCardWidth(width < 400 ? width - 32 : 360); // 32px for padding
  };
  
  updateCardWidth();
  window.addEventListener('resize', updateCardWidth);
  return () => window.removeEventListener('resize', updateCardWidth);
}, []);
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number; y: number } }) => {
    const threshold = 50;
    
    if (info.offset.x > threshold && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (info.offset.x < -threshold && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    
    setIsDragging(false);
  };
  return (   
     <section className="py-32  section-bg relative overflow-hidden">
      {/* Decorative trees (laurels) */}
      <div className='relative px-4 sm:mb-[179px] '>
   <div 
  className="absolute 
          hidden sm:block 
          left-4 sm:left-8 md:left-40 lg:left-50 xl:left-60 2xl:left-[250px] 
          top-1/2 -translate-y-1/2 z-0">
        <Image 
          src="/images/tree_1.svg" 
          alt="Decorative left laurel" 
          width={140} 
          height={183}
          priority
          className="w-[120px] h-auto md:w-[140px]"
        />
      </div>
      <div className="absolute 
          hidden sm:block 
          right-4 sm:right-8 md:right-40 lg:right-50 xl:right-60 2xl:right-[250px] 
          top-1/2 -translate-y-1/2 z-0">
        <Image 
          src="/images/tree_2.svg" 
          alt="Decorative right laurel" 
          width={140} 
          height={183}
          priority
          className="w-[120px] h-auto md:w-[140px]"
        />
      </div>

      {/* content (laurels) */}
      <div className="max-w-4xl mx-auto relative z-10 ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">        
                <p className=" text-3xl md:text-4xl font-bold text-green-500 mb-8">
              BlaBlo knew exactly why I&apos;m learning!
              <br />
              Every lesson tailored made just for me.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image 
                  src="/images/avartar_job.svg"
                  alt="Keiko"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="ml-3 text-left">
                <p className="text-black font-bold">Keiko - <span className='font-light'>Customer Support Lead</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>       
       {/* Testimonial Cards Grid */}
          {/* Mobile Touch Carousel */}
        <div className="block md:hidden  ">
          <div className="relative overflow-hidden" ref={containerRef}>
            <motion.div 
              drag="x"
           dragConstraints={{
  left: -(totalSlides - 1) * cardWidth,
  right: 0
}}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{
                x: -currentSlide * cardWidth 
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="flex cursor-grab active:cursor-grabbing"
              // style={{ width: `${totalSlides * 100}%` }}
            >
              {RegionData.map((testimonial, index) => (
                <div 
                  key={testimonial.id.toString()}
                   className="flex-shrink-0"
          style={{ 
            width: `${cardWidth}px`,
            paddingLeft: index === 0 ? '16px' : '8px',
            paddingRight: '8px'
          }}
                >
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-md mx-auto max-w-sm min-h-[236px] flex flex-col"
                  >
                    {/* User profile */}
                    <header className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-none overflow-hidden flex-shrink-0">
                        <Image 
                          src={testimonial.image.src}
                          alt={`${testimonial.name} profile`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-black text-lg leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {testimonial.subname}
                        </p>
                      </div>
                    </header>

                    {/* Testimonial content */}
                    <blockquote className="flex-1">
                      <p className="text-gray-800 leading-relaxed text-base">
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </motion.article>
                </div>
              ))}
            </motion.div>

            {/* Touch indicator hint */}
            {/* <div className="flex justify-center mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4-4m-4 4H3m18 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Swipe to see more
              </span>
            </div> */}

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {RegionData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

 {/* Destops Touch Carousel */}
      <div className="max-w-[1660px] max-h-[406px] hidden md:block mx-auto px-4 md:px-6">       
         {/* First row - exactly 4 cards */}
        <div className="mb-6">
          <div className="flex justify-center gap-6 max-w-[1512px] max-h-[236px] ">
            {RegionData.slice(0, 4).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id.toString()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}             
                   className="bg-white border-[1px] border-[#C7C7CC] rounded-2xl max-w-[360px] max-h-[236px] p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow w-[360px] h-[236px] flex flex-col"
              >
                <div className="flex items-center mb-5">
                  <div className="h-10 w-10 rounded-none overflow-hidden mr-3 flex-shrink-0">
                    <Image 
                      src={testimonial.image.src}
                      alt={testimonial.image.alt}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.subname}</p>
                  </div>
                </div>
                <p className="text-gray-800 leading-6">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>          {/* Second row - exactly 3 cards */}
        <div>
          <div className="flex flex-wrap justify-center gap-6">{RegionData.slice(4, 7).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id.toString()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
                viewport={{ once: true }}             
                
                className="bg-white rounded-2xl border-[1px] border-[#C7C7CC] p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow w-[360px] h-[236px] flex flex-col"
              >                <div className="flex items-center mb-5">
                  <div className="h-10 w-10 rounded-none overflow-hidden mr-3 flex-shrink-0">
                    <Image 
                      src={testimonial.image.src}
                      alt={testimonial.image.alt}
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.subname}</p>
                  </div>
                </div>
                <p className="text-gray-800 leading-6">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
