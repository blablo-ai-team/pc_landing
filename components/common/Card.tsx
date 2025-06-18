'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
}) => {
  const baseClasses = 'bg-white rounded-xl transition-all duration-200'

  const variantClasses = {
    default: 'shadow-sm border border-gray-light/20',
    elevated: 'shadow-lg border border-gray-light/10',
    outlined: 'border-2 border-gray-light/30',
  }

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const classes = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    className,
  ]
    .filter(Boolean)
    .join(' ')
  if (hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ 
          y: -4,
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={classes}>{children}</div>
}

export default Card
