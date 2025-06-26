

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
    <div className={`w-full ${className} `}>
      <div className="flex flex-col md:flex-row justify-center gap-2 z-50">
        {/* Google Play Store */}
        <div className="h-[185px] max-w-[164px] flex flex-col ">
          <div className=''>
     <Image
            src="/images/app_button_google.png"
            alt="Get it on Google Play"
            width={175}
            height={52}
            priority
            className=" "
          />
          </div>
     
          <div className="max-w-[164px]  max-h-[185px] h-full hidden mx-2 md:flex  bg-[#FFF]  items-center justify-center  rounded-b-[8px]  border">
            <Image
              src="/images/qr-google-play.svg"
              alt="QR code to download Google Play app"
              width={65}
              height={65}
           className=""
            />
          </div>
        </div>
             <div className="h-[185px] max-w-[164px] flex flex-col ">
          <div className=''>
     <Image
            src="/images/app_button_apple.png"
            alt="Get it on Google Play"
            width={175}
            height={52}
            priority
            className=" "
          />
          </div>
     
          <div className="max-w-[164px]  max-h-[185px] h-full hidden mx-2 md:flex  bg-[#FFF]  items-center justify-center  rounded-b-[8px] shadow-lg border">
            <Image
              src="/images/qr-app-store.svg"
              alt="QR code to download Google Play app"
              width={65}
              height={65}
           className=""
            />
          </div>
        </div>


        {/* Apple App Store */}
        {/* <div className="max-h-[185px] max-w-[164px] flex flex-col bg-red">
          <Image
            src="/images/app_button_apple.png"
            alt="Download on the App Store"
            width={175}
            height={52}
            priority
            className=""
          />
          <div className="max-w-[164px]  max-h-[185px]  bg-[#FFF] hidden md:flex items-center justify-center  rounded-[8px] shadow-lg border">
            <Image
              src="/images/qr-app-store.svg"
              alt="QR code to download App Store app"
                width={65}
              height={65}
              className=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
