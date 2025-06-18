'use client'

import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  const handleGetBlabloClick = () => {
    console.log("Get BlaBló clicked!");
    // Add your logic here (e.g., navigation, tracking, etc.)
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        logoSrc="/images/blablo-logo.svg"
        logoAlt="BlaBló"
        onGetBlabloClick={handleGetBlabloClick}
        googlePlayUrl="https://play.google.com/store/apps"
        appStoreUrl="https://apps.apple.com"
        googlePlayQrSrc="/images/qr-google-play.svg"
        appStoreQrSrc="/images/qr-app-store.svg"
      />

      {/* Additional sections can be added here */}
      <div className="py-16 px-4 text-center bg-white">
        <h2 className="font-bricolage text-2xl font-bold text-gray-900 mb-4">
          Ready to boost your English?
        </h2>
        <p className="font-bricolage text-gray-600 max-w-2xl mx-auto">
          Join thousands of learners who are transforming their dead time into
          productive English practice sessions.
        </p>
      </div>
    </div>
  );
}
