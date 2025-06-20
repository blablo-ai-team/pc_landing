'use client'

import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Card3DSection from "@/components/sections/Card3DSection";
import SpeakingProgressSection from "@/components/sections/SpeakingProgressSection";
import BlabloForYouSection from "@/components/sections/BlabloForYouSection";
import KazienSection from "@/components/sections/KazienSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FreeAppSection from "@/components/sections/FreeAppSection";
import GameModeCarousel from "@/components/sections/GameModeSection";
import FooterSection from "@/components/sections/FooterSection";

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
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Free App Section */}
      <FreeAppSection />
      
      <GameModeCarousel/>
      
      {/* Footer Section */}
      <FooterSection />
      
      {/* Download App Section with our new component */}
      {/* <DownloadAppSection /> */}
      
  
    </div>
  );
}
