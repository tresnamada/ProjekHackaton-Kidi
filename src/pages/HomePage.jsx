import React from "react";
import HeroSection from "../components/HeroSection";
import GalleryHighlight from "../components/GalleryHighlight";
import CTA from "../components/CTA";
import TestimonialSection from "../components/TestimonialSection";
import StatisticsSection from "../components/StatisticsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <GalleryHighlight />
      <TestimonialSection />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
