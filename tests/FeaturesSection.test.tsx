import React from 'react'
import { render, screen } from '@testing-library/react'
import FeaturesSection from '@/components/sections/FeaturesSection'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}))

describe('FeaturesSection', () => {
  beforeEach(() => {
    render(<FeaturesSection />)
  })

  it('renders the section title and subtitle', () => {
    expect(screen.getByText('BlaBlo is for Your busy life')).toBeInTheDocument()
    expect(screen.getByText('Built to fit your busy mornings and tired nights.')).toBeInTheDocument()
  })

  it('renders all four feature cards', () => {
    expect(screen.getByText('Listen')).toBeInTheDocument()
    expect(screen.getByText('& Repeat')).toBeInTheDocument()
    
    expect(screen.getByText('Flash')).toBeInTheDocument()
    expect(screen.getByText('Cards')).toBeInTheDocument()
    
    expect(screen.getByText('Joyful')).toBeInTheDocument()
    expect(screen.getByText('Role play')).toBeInTheDocument()
    
    expect(screen.getByText('Speed')).toBeInTheDocument()
    expect(screen.getByText('Challenge')).toBeInTheDocument()
  })

  it('renders time tags with correct content', () => {
    expect(screen.getByText('Morning commute')).toBeInTheDocument()
    expect(screen.getByText('Mid-day break')).toBeInTheDocument()
    expect(screen.getByText('Before bedtime')).toBeInTheDocument()
    expect(screen.getByText('Later days')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    expect(screen.getByText('Explore new vocab, train your mouth and brain on the go.')).toBeInTheDocument()
    expect(screen.getByText('Tap, swipe, and store new words fast.')).toBeInTheDocument()
    expect(screen.getByText('Act out a scenario, sleep on it and wake up sounding natural.')).toBeInTheDocument()
    expect(screen.getByText('Beat the timer, train instant recall and smoother speech.')).toBeInTheDocument()
  })

  it('renders duration information', () => {
    expect(screen.getByText('10 mins activity')).toBeInTheDocument()
    expect(screen.getByText('3 mins')).toBeInTheDocument()
    expect(screen.getByText('8 mins')).toBeInTheDocument()
    expect(screen.getByText('5 mins')).toBeInTheDocument()
  })

  it('renders status information', () => {
    expect(screen.getByText('Now available')).toBeInTheDocument()
    expect(screen.getAllByText('Launching soon')).toHaveLength(3)
  })

  it('renders the CTA section', () => {
    expect(screen.getByText('Ready to transform your dead time into fluent English?')).toBeInTheDocument()
    expect(screen.getByText('Get BlaBlo Now')).toBeInTheDocument()
  })

  it('renders the section tagline', () => {
    expect(screen.getByText('Meet BlaBlo, your on-the-go English buddy')).toBeInTheDocument()
  })

  it('renders with custom title and subtitle', () => {
    const customTitle = 'Custom Title'
    const customSubtitle = 'Custom Subtitle'
    
    render(<FeaturesSection title={customTitle} subtitle={customSubtitle} />)
    
    expect(screen.getByText(customTitle)).toBeInTheDocument()
    expect(screen.getByText(customSubtitle)).toBeInTheDocument()
  })
})
