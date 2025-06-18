import React from 'react'

interface IconWrapperProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger'
  className?: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  size = 'md',
  variant = 'default',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5',
    xl: 'w-16 h-16 p-3',
  }

  const variantClasses = {
    default: 'bg-gray-light text-primary',
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
    success: 'bg-green text-primary',
    warning: 'bg-orange text-white',
    danger: 'bg-red text-white',
  }

  const classes = [
    'inline-flex items-center justify-center rounded-lg',
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

export default IconWrapper
