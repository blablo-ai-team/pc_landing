'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useTransform } from 'framer-motion'
import { featureCards, timeTagColors } from '@/data/features'

interface FeaturesSectionProps {
  title?: string
  subtitle?: string
}

// Enhanced Tilt Card Component với hiệu ứng 3D mượt mà
const EnhancedTiltCard: React.FC<{
  children: React.ReactNode
  index: number
  className?: string
}> = ({ children, index, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null)

  // Spring values với cấu hình tối ưu cho smooth animation
  const x = useSpring(0, { stiffness: 150, damping: 25 })
  const y = useSpring(0, { stiffness: 150, damping: 25 })
  const scaleSpring = useSpring(1, { stiffness: 200, damping: 20 })

  // Transform values cho tilt effect với góc nghiêng vừa phải
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    // Normalize mouse position to -0.5 to 0.5
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseEnter = () => {
    scaleSpring.set(1.03)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scaleSpring.set(1)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      style={{
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` will-change-transform ${className}`}
    >
      <motion.div
        style={{
          transform: 'translateZ(60px)',
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-white  max-h-[526px] rounded-3xl   "
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  subtitle = "Built to fit your busy mornings and tired nights."
}) => {
  return (
    <section className="w-full section-bg py-16 lg:py-[120px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pb-[24px]"
        >

          <h2 className="font-bricolage text-[40px] lg:text-[48px] text-black pb-10">
            <span className="font-light">BlaBlo is for </span>
            <span className="font-bold">Your busy life</span>
          </h2>
          <p className="font-inter text-base text-black max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid - Responsive container */}
        <div className='bg-[#F2F2F7]  max-w-[1176px] max-h-[717px]  mx-auto py-4 sm:px-8 md:px-4 rounded-3xl'>
          <div
            className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 "
            style={{ perspective: '1200px' }}
          >
            {featureCards.map((card, index) => (
              <div key={card.id} className="w-full">
                <EnhancedTiltCard index={index}>
                  <div className="w-full   rounded-3xl px-4 py-6 flex flex-col items-stretch" >
                    {/* Time Tag */}
                    <div className="">
                      <div className={`inline-flex mb-6 items-center px-4 py-2 rounded-full text-[12px] font-semibold ${timeTagColors[card.timeTagColor]}`}>
                        {card.timeTag}
                      </div>
                    </div>

                    {/* Feature Icon/Image - Centered and responsive */}
                    <div className="flex justify-center items-center mb-8  flex-1">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20  lg:w-40 lg:h-40">
                        {card.imageSrc ? (
                          <Image
                            src={card.imageSrc}
                            alt={card.imageAlt || card.title}
                            width={232}
                            height={232}
                            className="scale-125"
                          // sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                          />
                        ) : (
                          <Image
                            src={card.icon}
                            alt={card.iconAlt}
                            fill
                            className="object-contain"
                          // sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                          />
                        )}
                      </div>
                    </div>

                    {/* Bottom Content - Auto-positioned at bottom */}
                    <div className="text-black flex flex-col justify-center">
                      {/* Title */}
                      <div className="mb-4  min-h-[96px] ">
                        <h3 className="font-bricolage  text-[48px] font-light leading-none ">
                          {card.title}
                        </h3>
                        <h4 className="font-bricolage text-[48px] font-light leading-none ">
                          {card.subtitle}
                        </h4>
                      </div>

                      {/* Duration and Status */}
                      <div className="flex items-center mb-4 text-[10px] gap-[2px] font-light leading-none">
                        <span className="font-medium text-black">
                          {card.duration}
                        </span>
                        <span className={`font-medium ${card.status === 'available' ? 'text-black' : 'text-[#8E8E93]'}  `}>
                          • {card.status === 'available' ? 'Now available' : 'Launching soon'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-bricolage text-sm leading-relaxed text-[#797979] ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </EnhancedTiltCard>
              </div>
            ))}
          </div>
          <div className=' mt-[60px] flex items-start gap-x-[24px] border-t-[1px] pt-[20px] border-[#E5E5EA] '>
            <Image
              src={"/images/features/cambi.png"}
              alt='hello'
              width={168}
              height={35}
              className='object-contain'
            />
            <p className='max-w-[648px] -translate-y-1 font-inter text-[14px] font-normal text-[#8E8E93] leading-[150%]'>Research from the University of Cambridge shows that cycling quickly through three micro-steps Learn, Practice, Apply locks a new language skill faster and with less stress than long classes. BlaBlo builds that same loop into your day.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection