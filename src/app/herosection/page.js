import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Hero from "../components/HeroSection/HeroSection2";
import HowDiffrentMagicChat from "../components/HeroSection/HowDiffrentMagicChat";
import ProblemsSolved from "../components/HeroSection/ProblemsSolved";
import PlatformFeaturesTimeline from "../components/HeroSection/PlatformFeaturesPage";
import HowToGetStartedPage from "../components/HeroSection/HowToGetStartedPage";
import TargetAudiencePage from "../components/HeroSection/TargetAudiencePage";
import WhatWeOffer from "../components/HeroSection/whatWeOffer/WhatWeOffer";
import OverviewIntro from "../components/magicchatOverview/OverviewIntro";
import HowItWorksPage from "../components/HeroSection/HowItWorksPage";
import ExpectedResultsPage from "../components/HeroSection/ExpectedResultsPage";
import PricingPlansPage from "../components/HeroSection/PricingPlansPage";
import RoadmapNextPage from "../components/HeroSection/RoadmapNextPage";
import WhyChooseNowPage from "../components/HeroSection/WhyChooseNowPage";

export const metadata = {
  title: "Hero Section | Magicchat",
  description: "What do we solve",
};

const HeroSectionPage = () => {
  return (
    <>
      <HeroSection />
      <div
        style={{
          boxShadow:
            "rgba(75, 207, 158, 0.4) 0px 5px, rgba(75, 207, 158, 0.3) 0px 10px, rgba(75, 207, 158, 0.2) 0px 15px, rgba(75, 207, 158, 0.1) 0px 20px, rgba(75, 207, 158, 0.05) 0px 25px",
          borderRadius: "0px 0px 80px 80px",
        }}
      >
        <WhatWeOffer />
        <HowToGetStartedPage />
        <OverviewIntro />
      </div>
      <PlatformFeaturesTimeline />
      <ProblemsSolved />
      <HowDiffrentMagicChat />
      <TargetAudiencePage />
      <HowItWorksPage />
      <ExpectedResultsPage />
      <PricingPlansPage />
      <RoadmapNextPage />
      {/* <Hero /> */}
      <br />
      <br />
      <br />
      <br />
      <WhyChooseNowPage />

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      {/* <HowToGetStartedPage /> */}
    </>
  );
};

export default HeroSectionPage;
