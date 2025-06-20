'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppDownload from '@/components/common/AppDownload';

export default function FreeAppSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FFF]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >          <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
            And it&apos;s
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
            Free
          </h1>
          <p className="text-gray-600 max-w-lg  mx-auto text-2xl">
            Boost your speaking for free.
            <br />
            Enjoy free daily scenarios to level up your
            <br />
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
                   className="mt-12"
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
