'use client';

import { motion } from 'framer-motion';
import AppDownload from '@/components/common/AppDownload';

export default function DownloadAppSection() {
  return (
    <section className="bg-[#5B4BE9] py-16 md:py-24 px-4 text-white">
      <div className="max-w-[1176px] mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-bold mb-4">
            Download BlaBló Today
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Start your journey to speaking confident English with our app, available for iOS and Android.
          </p>        </motion.div>    
              {/* Our reusable AppDownload component */}  
             
        <motion.div 
          className="text-center mt-12 text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>Join thousands of learners already improving their English skills</p>
        </motion.div>                
         <AppDownload 
          className="mt-12"
          qrCodeSize={80}
          qrContainerWidth={200}
          qrContainerHeight={177}
          variant="light" 
        />
        
      </div>
    </section>
  );
}
