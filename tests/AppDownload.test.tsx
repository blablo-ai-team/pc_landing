import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppDownload from '@/components/common/AppDownload';

// Mock useMediaQuery
jest.mock('react-responsive', () => ({
  useMediaQuery: () => true,
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('AppDownload Component', () => {
  it('renders both app store buttons', () => {
    render(<AppDownload />);
    
    // Check for Google Play button
    const googlePlayImage = screen.getByAltText('Get it on Google Play');
    expect(googlePlayImage).toBeInTheDocument();
    
    // Check for App Store button
    const appStoreImage = screen.getByAltText('Download on the App Store');
    expect(appStoreImage).toBeInTheDocument();
  });
  it('renders buttons with fixed width of 196px', () => {
    render(<AppDownload />);
    
    // Check if fixed width of 196px is applied
    const googlePlayImage = screen.getByAltText('Get it on Google Play');
    expect(googlePlayImage).toHaveAttribute('width', '196');
  });
  
  it('applies custom QR code size', () => {
    render(<AppDownload qrCodeSize={200} />);
    
    // Check if custom QR size is applied
    const googleQrCode = screen.getByAltText('Scan to download from Google Play');
    expect(googleQrCode).toHaveStyle('width: 200px');
  });
});
