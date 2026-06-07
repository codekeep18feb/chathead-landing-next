import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Hero from "../components/HeroSection/HeroSection2";
import HowDiffrentMagicChat from "../components/HeroSection/HowDiffrentMagicChat";
import ProblemsSolved from "../components/HeroSection/ProblemsSolved";
import PlatformFeaturesTimeline from "../components/HeroSection/PlatformFeaturesPage";
import HowToGetStartedPage from "../components/HeroSection/HowToGetStartedPage";
import TargetAudiencePage from "../components/HeroSection/TargetAudiencePage";

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
      <br />
      <br />
      <br />
      <br />

      <HowDiffrentMagicChat />

      <br />
      <br />
      <br />
      <br />

      <ProblemsSolved />

      <br />
      <br />
      <br />
      <br />

      <PlatformFeaturesTimeline />
      <br />
      <br />
      <br />
      <br />

      {/* <HowToGetStartedPage /> */}

      <TargetAudiencePage />
    </>
  );
};

export default HeroSectionPage;
