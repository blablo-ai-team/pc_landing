'use client'

import SpeakingChart from '../common/SpeakingChart';
import Image from 'next/image';

export default function SpeakingProgressSection() {
  return (
    <section className="py-16 px-4  bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-bricolage text-4xl font-light text-gray-900 mb-4">
            BlaBlo is for <span className="font-bold ">Speaking</span>
          </h2>
          <p className="font-bricolage text-lg text-black max-w-2xl mx-auto">
            Just “blablo” it!
          </p>
        </div>      
          <div className="flex flex-col lg:flex-row lg:gap-[26px] gap-6 lg:justify-start">
          {/* Left Content */}
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg h-auto lg:h-[551px] lg:w-[358px] flex flex-col lg:flex-shrink-0">
            <h3 className="font-bricolage text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Our only goal: Help you <span className="text-pink-500 font-bold">say what you want</span>, in english.
            </h3>
            <p className="font-inter text-black font-bold mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed">

So we’ll get you talking early, often, anywhere. Skip perfect accents, making your point is what matters!            </p>               
             <div className="flex justify-center items-end flex-1 lg:pb-0 -mb-6 lg:-mb-2 lg:-translate-y-1">
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
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-lg h-auto lg:h-[551px] lg:w-[744px] flex flex-col lg:flex-shrink-0">
            <div className="text-center mb-6 lg:mb-8 text-black">
              <h3 className="font-inter text-xl lg:text-2xl  mb-2 leading-tight">
               Our learners speak over{' '}
                <span className="text-pink-500 font-bold">1 hour 48 minutes</span>
              </h3>
              <p className="font-inter  text-xl lg:text-2xl leading-tight">
                just in the first week
              </p>
            </div>
            
            <div className="flex justify-center items-center flex-1 overflow-hidden">
              <div className="w-full max-w-full">
                <SpeakingChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
