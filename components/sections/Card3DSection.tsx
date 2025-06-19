'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { galleryCards } from '@/data/features'

const Card3DSection: React.FC = () => {

  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section className="w-full bg-white pt-2 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Cards Container - Elliptical/Curved Layout */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-end gap-1 sm:gap-2 relative py-12"
          style={{
            transform: 'perspective(1000px)',
          }}
        >            {galleryCards.map((card, index) => {
            const total = galleryCards.length
            const middle = Math.floor(total / 2)
            
            // Calculate position in the arc
            // Adjust scale for first and last cards to make them more prominent
            let scale = 1.0
            let zIndex = 10
            let opacity = 1
            let translateY = 0
            
            // First card and last card should be visible and prominent
            if (index === 0 || index === total - 1) {
              scale = 1.1  // Make first and last cards larger
              zIndex = 20  // Ensure they appear above other cards
              opacity = 1
            } else if (index === 1 || index === total - 2) {
              scale = 0.95
              zIndex = 15
            } else {
              // Middle cards
              scale = 0.9
              zIndex = 10
              // Cards closer to the center are higher up
              const distanceFromMiddle = Math.abs(index - middle)
              if (distanceFromMiddle < 2) {
                translateY = -10
              }
            }
            
            // Calculate rotations for the curved effect
            const rotationY = (index - middle) * 10 // Horizontal rotation
            const rotationZ = (index - middle) * 2  // Slight Z rotation for more depth
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: opacity, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                className="flex-shrink-0 relative"
                style={{
                  transform: `perspective(1200px) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(${scale}) translateY(${translateY}px)`,
                  transformOrigin: 'center bottom',
                  zIndex: zIndex
                }}
              >                <div
                  className="relative overflow-hidden rounded-2xl shadow-lg"
                  style={{
                    width: `${(card.width || 276) * 0.9}px`, // Slightly reduce base size for better spacing
                    height: `${(card.height || 400) * 0.9}px`,
                  }}
                >
                  <Image
                    src={card.imageSrc || ''}
                    alt={card.imageAlt || card.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 300px"
                    priority={index === 0 || index === total - 1} // Prioritize loading of important cards
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Card3DSection
