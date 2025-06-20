

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
      <div className="flex justify-center gap-6">
        {/* Google Play Store */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/app_button_google.png"
            alt="Get it on Google Play"
            width={196}
            height={58}
            priority
            className="translate-y-[54px]"
          />
          <div className="w-[170px] h-[177px] bg-[#FFF] flex items-center justify-center  rounded-[8px] shadow-lg border">
            <Image
              src="/images/qr-google-play.svg"
              alt="QR code to download Google Play app"
              width={80}
              height={80}
              className="translate-y-[24px]"
            />
          </div>
        </div>

        {/* Apple App Store */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/app_button_apple.png"
            alt="Download on the App Store"
            width={196}
            height={58}
            priority
            className="translate-y-[54px]"
          />
          <div className="w-[170px] h-[177px] bg-[#FFF] flex items-center justify-center  rounded-[8px] shadow-lg border">
            <Image
              src="/images/qr-app-store.svg"
              alt="QR code to download App Store app"
              width={80}
              height={80}
              className="translate-y-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
