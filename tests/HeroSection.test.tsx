import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from '@/components/sections/HeroSection'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('HeroSection', () => {
  const mockOnGetBlabloClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders hero section with all elements', () => {
    render(
      <HeroSection 
        onGetBlabloClick={mockOnGetBlabloClick}
      />
    )

    // Check if main headline is present
    expect(screen.getByText('Turn Dead Time into')).toBeInTheDocument()
    expect(screen.getByText("'Fluent English'")).toBeInTheDocument()
    
    // Check sub-text
    expect(screen.getByText(/Use your commute, dish-washing/)).toBeInTheDocument()
    
    // Check Get BlaBló button
    expect(screen.getByText('Get BlaBló')).toBeInTheDocument()
    
    // Check download buttons
    expect(screen.getByText('Google Play')).toBeInTheDocument()
    expect(screen.getByText('App Store')).toBeInTheDocument()
  })

  it('calls onGetBlabloClick when button is clicked', () => {
    render(
      <HeroSection 
        onGetBlabloClick={mockOnGetBlabloClick}
      />
    )

    const getBlabloButton = screen.getByText('Get BlaBló')
    fireEvent.click(getBlabloButton)
    
    expect(mockOnGetBlabloClick).toHaveBeenCalledTimes(1)
  })

  it('renders with custom props', () => {
    const customProps = {
      logoAlt: 'Custom Logo',
      googlePlayUrl: 'https://custom-play-store.com',
      appStoreUrl: 'https://custom-app-store.com',
    }

    render(<HeroSection {...customProps} />)
    
    const logo = screen.getByAltText('Custom Logo')
    expect(logo).toBeInTheDocument()
  })

  it('has correct link URLs', () => {
    render(
      <HeroSection 
        googlePlayUrl="https://play.google.com/test"
        appStoreUrl="https://apps.apple.com/test"
      />
    )

    const googlePlayLink = screen.getByText('Google Play').closest('a')
    const appStoreLink = screen.getByText('App Store').closest('a')
    
    expect(googlePlayLink).toHaveAttribute('href', 'https://play.google.com/test')
    expect(appStoreLink).toHaveAttribute('href', 'https://apps.apple.com/test')
  })
})
