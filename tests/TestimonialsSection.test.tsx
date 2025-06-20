import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialsSection from '../components/sections/TestimonialsSection';

// Mock RegionData to avoid issues with Image in tests
jest.mock('../data/category', () => ({
  RegionData: [
    {
      id: 1,
      name: 'Yuki',
      subname: 'Finance Officer',
      image: {
        src: '/images/category/🇯🇵.svg',
        alt: 'description of image',
      },
      content: 'Test testimonial content',
    },
  ],
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props} />,
    h2: (props: any) => <h2 {...props} />,
  },
}));

describe('TestimonialsSection', () => {
  it('renders the section title correctly', () => {
    render(<TestimonialsSection />);
    
    expect(screen.getByText('Success Stories from Blablo Users')).toBeInTheDocument();
  });

  it('renders the featured testimonial quote', () => {
    render(<TestimonialsSection />);
    
    expect(screen.getByText("BlaBlo knew exactly why I'm learning! Every lesson tailored made just for me.")).toBeInTheDocument();
  });

  it('renders testimonial cards from RegionData', () => {
    render(<TestimonialsSection />);
    
    // Check for the user's name from our mocked data
    expect(screen.getByText('Yuki')).toBeInTheDocument();
    expect(screen.getByText('Finance Officer')).toBeInTheDocument();
    expect(screen.getByText('Test testimonial content')).toBeInTheDocument();
  });
});
