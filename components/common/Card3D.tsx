'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useSpring, useTransform } from 'framer-motion'

interface Card3DProps {
  imageUrl?: string
  alt?: string
  backgroundColor?: string
  width?: number
  height?: number
  className?: string
  isActive?: boolean
  position?: number
  onClick?: () => void
  children?: React.ReactNode
  enableTilt?: boolean
  maxTilt?: number
  scale?: number
  perspective?: number
}

const Card3D: React.FC<Card3DProps> = ({
  imageUrl,
  alt,
  backgroundColor = '#D1D1D6',
  width = 280,
  height = 420,
  className = '',
  isActive = false,
  position = 0,
  onClick
}) => {
  const scale = isActive ? 1 : 0.8 - Math.abs(position) * 0.1
  const opacity = isActive ? 1 : 0.6 - Math.abs(position) * 0.1
  const rotateY = position * 15
  const translateX = position * 200
  const translateZ = isActive ? 0 : -Math.abs(position) * 100

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        perspective: '1000px'
      }}
      initial={{ 
        x: translateX + 200,
        rotateY: rotateY + 45,
        scale: scale - 0.2,
        opacity: 0
      }}
      animate={{
        x: translateX,
        rotateY: rotateY,
        scale: scale,
        opacity: opacity,
        z: translateZ
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={isActive ? {
        scale: 1.05,
        rotateY: 0,
        transition: { duration: 0.3 }
      } : {}}
      onClick={onClick}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
        style={{
          backgroundColor,
          transform: 'preserve-3d'
        }}
      >
        {/* Background Card */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{ backgroundColor }}
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-cover"
            style={{
              transform: 'scale(1.2)',
              transformOrigin: 'center center'
            }}
            priority={isActive}
            sizes={`${width}px`}
          />
        </div>
        
        {/* Gradient Overlay for depth */}
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: isActive 
              ? 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
              : 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
          }}
        />
        
        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>
    </motion.div>
  )
}

export default Card3D
