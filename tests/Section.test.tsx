import { render, screen } from '@testing-library/react'
import Section from '@/components/common/Section'

describe('Section Component', () => {
  it('renders with section-bg class', () => {
    render(
      <Section data-testid="test-section">
        <p>Test content</p>
      </Section>
    )
    
    const section = screen.getByTestId('test-section')
    expect(section).toHaveClass('section-bg')
    expect(section.tagName).toBe('SECTION')
  })

  it('applies custom className with cn utility', () => {
    render(
      <Section className="py-8 px-4" data-testid="test-section">
        <p>Test content</p>
      </Section>
    )
    
    const section = screen.getByTestId('test-section')
    expect(section).toHaveClass('section-bg', 'py-8', 'px-4')
  })

  it('renders as different HTML elements', () => {
    render(
      <Section as="main" data-testid="test-main">
        <p>Main content</p>
      </Section>
    )
    
    const main = screen.getByTestId('test-main')
    expect(main.tagName).toBe('MAIN')
    expect(main).toHaveClass('section-bg')
  })

  it('applies ARIA label correctly', () => {
    render(
      <Section aria-label="Hero section" data-testid="test-section">
        <p>Content</p>
      </Section>
    )
    
    const section = screen.getByTestId('test-section')
    expect(section).toHaveAttribute('aria-label', 'Hero section')
  })
})