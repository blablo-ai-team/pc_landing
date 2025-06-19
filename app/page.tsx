'use client'

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Card3DSection from "@/components/sections/Card3DSection";
import SpeakingProgressSection from "@/components/sections/SpeakingProgressSection";
import BlabloForYouSection from "@/components/sections/BlabloForYouSection";
import KazienSection from "@/components/sections/KazienSection";

export default function Home() {
  const handleGetBlabloClick = () => {
    console.log("Get BlaBló clicked!");
    // Add your logic here (e.g., navigation, tracking, etc.)
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        onGetBlabloClick={handleGetBlabloClick}
      />

      {/* 3D Cards Section */}
      <Card3DSection />
       
       {/* Features Section */}
      <FeaturesSection />

      {/* Speaking Progress Section */}
      <SpeakingProgressSection />

      {/* BlaBló is for You Section */}
      <BlabloForYouSection />

      {/*KazienSection level  */}
      <KazienSection/>
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
