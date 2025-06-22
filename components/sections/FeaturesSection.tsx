'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useTransform } from 'framer-motion'
import { featureCards, timeTagColors, statusStyles } from '@/data/features'

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
      className={`cursor-pointer will-change-transform ${className}`}
    >      <motion.div 
        style={{ 
          transform: 'translateZ(60px)',
          transformStyle: 'preserve-3d',
        }} 
        className="relative bg-white rounded-3xl shadow-lg overflow-hidden backdrop-blur-sm h-[526px]"
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
    <section className="w-full section-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 text-sm font-medium mb-2 tracking-wide uppercase">
            Meet BlaBlo, your on-the-go English buddy
          </p>          <h2 className="font-bricolage text-4xl lg:text-5xl text-black mb-4">
            <span className="font-light">BlaBlo is for </span>
            <span className="font-bold">Your busy life</span>
          </h2>
          <p className="font-bricolage text-xl text-black max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>     
           {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto" style={{ perspective: '1200px' }}>
          {featureCards.map((card, index) => (
            <div key={card.id} className="w-full">
              <EnhancedTiltCard index={index}>           
                   
                     <div className="w-full h-[526px] rounded-3xl px-[16px] py-[24px] flex flex-col">
                  {/* Time Tag */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${timeTagColors[card.timeTagColor]}`}>
                      {card.timeTag}
                    </div>
                  </div>

                  {/* Feature Icon/Image - Larger for 526px height */}
                  <div className="flex justify-center mb-8 flex-grow">
                    <div className="relative w-24 h-24 lg:w-48 lg:h-48">
                      {card.imageSrc ? (
                        <Image
                          src={card.imageSrc}
                          alt={card.imageAlt || card.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      ) : (
                        <Image
                          src={card.icon}
                          alt={card.iconAlt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 192px, 224px"
                        />
                      )}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-auto text-[48px] font-light text-black leading-tight -translate-y-4">
                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="font-bricolage  ">
                        {card.title}
                      </h3>
                      <h4 className="font-bricolage">
                        {card.subtitle}
                      </h4>
                    </div>

                    {/* Duration and Status */}
                    <div className="flex items-center mb-4 text-sm gap-1">
                      <span className="font-medium text-black">
                        {card.duration}
                      </span>
                      <span className={`font-medium ${statusStyles[card.status]}`}>
                        • {card.status === 'available' ? 'Now available' : 'Launching soon'}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-bricolage text-sm leading-relaxed ">
                      {card.description}
                    </p>
                  </div>
                </div>
              </EnhancedTiltCard>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  )
}

export default FeaturesSection
