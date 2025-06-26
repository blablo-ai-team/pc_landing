'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppDownload from '@/components/common/AppDownload';

export default function FreeAppSection() {
  return (
    <section className="pt-[160px] pb-[100px] section-bg">
      <div className="max-w-4xl mx-auto px-4 text-center ">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" "
        >          <h2 className="text-2xl leading-none  md:text-3xl text-black font-bold ">
            And it&apos;s
          </h2>
          <h1 className="text-[148px] leading-none sm:text-[150] md:text-[158px] font-bold text-black ">
            Free
          </h1>
          <p className="text-gray-600 font-inter  max-w-lg  mx-auto text-2xl">
            Boost your speaking for free.
            <br className='hidden sm:block'/>
            Enjoy free daily scenarios to level up your
            <br className='hidden sm:block'/>
            confident. No credit card required.
          </p>
        </motion.div>

        {/* App Download Component */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
           <AppDownload 
                   className="mt-10"
                   qrCodeSize={80}
                   qrContainerWidth={200}
                   qrContainerHeight={177}
                   variant="light" 

                 />
        </motion.div>
      </div>
    </section>
  );
}
