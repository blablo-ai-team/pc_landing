import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  as?: 'section' | 'main' | 'div' | 'article'
  id?: string
  'aria-label'?: string
}

export const Section = ({ 
  children, 
  className,
  as: Component = 'section',
  id,
  'aria-label': ariaLabel,
  ...props 
}: SectionProps) => {
  return (
    <Component 
      id={id}
      aria-label={ariaLabel}
      className={cn('section-bg', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Section