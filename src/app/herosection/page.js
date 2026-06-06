import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Hero from "../components/HeroSection/HeroSection2";

export const metadata = {
  title: "Hero Section | Magicchat",
  description: "What do we solve",
};

const HeroSectionPage = () => {
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <br />
      <br />
      <Hero />
    </>
  );
};

export default HeroSectionPage;
