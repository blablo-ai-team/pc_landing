'use client'

import { useState } from 'react';
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SpeakingProgressSection from "@/components/sections/SpeakingProgressSection";
import BlabloForYouSection from "@/components/sections/BlabloForYouSection";
import KazienSection from "@/components/sections/KazienSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FreeAppSection from "@/components/sections/FreeAppSection";
import GameModeCarousel from "@/components/sections/GameModeSection";
import FooterSection from "@/components/sections/FooterSection";
import AppDownloadModal from "@/components/common/AppDownloadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetBlabloClick = () => {
    console.log("Get BlaBló clicked!");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Sticky Header */}
      <Header onGetBlabloClick={handleGetBlabloClick} />
      <main className="min-h-screen ">


        <HeroSection  />

        {/* 3D Cards Section */}
        {/* <Card3DSection /> */}

        {/* Features Section */}
        <FeaturesSection />

        {/* Speaking Progress Section */}
        <SpeakingProgressSection />

        {/* BlaBló is for You Section */}
        <BlabloForYouSection />

        {/*KazienSection level  */}
        <KazienSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Free App Section */}
        <FreeAppSection />

        <GameModeCarousel />
        {/* < TestSection/> */}
        {/* Footer Section */}
        <FooterSection />

        {/* Download App Section with our new component */}
        {/* <DownloadAppSection /> */}

      </main>

      {/* App Download Modal */}
      <AppDownloadModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>

  );
}
