

import Image from 'next/image';

interface AppDownloadProps {
  className?: string;
  variant?: 'light' | 'dark';
  defaultTab?: 'google' | 'apple';
  qrContainerWidth?: number; // Default: 170px
  qrContainerHeight?: number; // Default: 177px
  qrCodeSize?: number; // Default: 80px
}

/**
 * Reusable app download component with responsive behavior
 * - Desktop: Shows QR codes with download buttons (QR code container fixed at 170x177px, QR image at 80x80px)
 * - Mobile: Shows only download buttons
 */
export default function AppDownload({
  className = '',

}: AppDownloadProps) {  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col md:flex-row justify-center gap-2">
        {/* Google Play Store */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/app_button_google.png"
            alt="Get it on Google Play"
            width={140}
            height={58}
            priority
            className="translate-y-[40px]"
          />
          <div className="w-[120px] h-[160px] hidden md:flex  bg-[#FFF]  items-center justify-center  rounded-[8px] shadow-lg border">
            <Image
              src="/images/qr-google-play.svg"
              alt="QR code to download Google Play app"
              width={65}
              height={65}
           className="translate-y-[20px]"
            />
          </div>
        </div>

        {/* Apple App Store */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/app_button_apple.png"
            alt="Download on the App Store"
            width={140}
            height={58}
            priority
            className="translate-y-[40px]"
          />
          <div className="w-[120px] h-[160px] bg-[#FFF] hidden md:flex items-center justify-center  rounded-[8px] shadow-lg border">
            <Image
              src="/images/qr-app-store.svg"
              alt="QR code to download App Store app"
                width={65}
              height={65}
              className="translate-y-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
