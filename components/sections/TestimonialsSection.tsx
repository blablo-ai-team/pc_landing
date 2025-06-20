'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RegionData } from '@/data/category';

export default function TestimonialsSection() {
  return (    <section className="py-24  bg-slate-50 relative overflow-hidden">
      {/* Decorative trees (laurels) */}
      <div className='relative px-4 mb-[179px] '>
   <div className="absolute left-[250px] top-1/2 -translate-y-1/2 z-0 ">
        <Image 
          src="/images/tree_1.svg" 
          alt="Decorative left laurel" 
          width={140} 
          height={183}
          priority
          className="w-[120px] h-auto md:w-[140px]"
        />
      </div>
      <div className="absolute right-[250px] top-1/2 -translate-y-1/2 z-0 ">
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
      <div className="max-w-4xl mx-auto relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">            <p className=" text-3xl md:text-4xl font-bold text-green-500 mb-8">
              BlaBlo knew exactly why I&apos;m learning!
              <br />
              Every lesson tailored made just for me.
            </p>
            
            <div className="flex items-center justify-center">
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
      </div>        {/* Testimonial Cards Grid */}
      <div className="max-w-[1660px] mx-auto px-4 md:px-6">       
         {/* First row - exactly 4 cards */}
        <div className="mb-6">
          <div className="flex justify-center gap-6">
            {RegionData.slice(0, 4).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id.toString()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}                className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow w-[360px] h-[236px] flex flex-col"
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
                viewport={{ once: true }}                className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow w-[360px] h-[236px] flex flex-col"
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
