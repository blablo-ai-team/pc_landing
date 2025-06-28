'use client'

import SpeakingChart from '../common/SpeakingChart';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SpeakingProgressSection() {
  return (
    <section className="py-16 px-4 section-bg overflow-visible " style={{ overflow: 'visible' }}>
      <div className=" overflow-visible" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <h2 className="font-bricolage text-5xl font-light text-gray-900 mb-4">
            BlaBlo is for <span className="font-bold ">Speaking</span>
          </h2>
          <p className="font-bricolage text-base  text-black max-w-2xl mx-auto">
            Just “blablo” it!
          </p>
        </motion.div>
        {/* Chart content  */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:gap-4 gap-6 bg-[#F2F2F7] w-full max-w-[1176px] max-h-[599px] mx-auto py-4 px-4 sm:px-8 md:px-4 rounded-3xl">
            {/* Left Content */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg h-auto max-h-[551px] w-full max-w-[358px] flex flex-col lg:flex-shrink-0 mx-auto lg:mx-0">
              <h3 className="font-inter lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                Our only goal: Help you <span className="text-[#EE33DF] font-bold">say what you want</span>, in english.
              </h3>
              <p className="font-inter text-black font-bold mb-6 lg:mb-8 text-base lg:text-xl  leading-relaxed">
                So we&apos;ll get you talking early, often, anywhere. Skip perfect accents, making your point is what matters!
              </p>
              <div className="flex justify-center items-end flex-1 lg:pb-0 -mb-6 lg:-mb-9 lg:-translate-y-1">
                <div className="relative">
                  <Image
                    src="/images/speaking/hiro_speaking.png"
                    alt="Hiro - Smart learning companion with headphones"
                    width={280}
                    height={280}
                    className="w-[180px] lg:w-[260px] h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Chart */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg w-full max-w-[774px] max-h-[551px] mx-auto lg:mx-0">
              <div className="text-center mb-6 lg:mb-8 font-semibold max-w-[573px mx-auto text-black">
                <h3 className="font-inter text-xl lg:text-2xl mb-2 leading-tight">
                  Our learners speak over{' '}
                  <span className="text-[#EE33DF] font-bold">1 hour 48 minutes</span>
                </h3>
                <p className="font-inter text-xl lg:text-2xl leading-tight">
                  just in the first week
                </p>
              </div>

              <div className="flex justify-center items-center flex-1 overflow-hidden">
                <div className="w-full max-w-full">
                  <SpeakingChart />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
