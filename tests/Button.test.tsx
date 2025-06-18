import { render, screen } from '@testing-library/react'
import Button from '@/components/common/Button'

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<Button loading>Loading button</Button>)
    expect(screen.getByText('Loading button')).toBeInTheDocument()
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    render(<Button variant="accent">Accent button</Button>)
    const button = screen.getByText('Accent button')
    expect(button).toHaveClass('bg-accent')
  })
})
