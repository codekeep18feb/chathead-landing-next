"use client";

import React from "react";
import MyUiShowcase from "../components/MyUiShowcase/MyUiShowcase";
import Banner from "../components/MyUiShowcase/Banner";
import CardBanner from "../components/MyUiShowcase/CardBanner";
import CSSAnimatedBanner from "../components/MyUiShowcase/CSSAnimatedBanner";
import AnimatedCSSBanner from "../components/MyUiShowcase/AnimatedCSSBanner";
import InfoCard from "../components/MyUiShowcase/InfoCard";
import AnimatedCardWrapper from "../components/MyUiShowcase/AnimatedCardWrapper";
import BannerLayout from "../components/MyUiShowcase/BannerLayout";

export default function page() {
  return (
    <>
      <div>
        <AnimatedCSSBanner />
        {/* <MyUiShowcase/> */}

        {/* <Banner/> */}

        {/* <CardBanner/> */}

        {/* <CSSAnimatedBanner/> */}
      </div>

      <AnimatedCardWrapper>
        <InfoCard
          imageSrc="/Asset/magicChatImg/p2aImage.png"
          heading="Card 1"
          subheading="Built with Next.js"
          bulletPoints={["Clean UI", "Fast", "Reusable"]}
          buttonText="Explore"
        />
        <InfoCard
          imageSrc="/Asset/magicChatImg/p2aImage.png"
          heading="Card 2"
          subheading="Powered by CSS Modules"
          bulletPoints={["Modular", "Scoped", "Easy to Style"]}
          buttonText="Get Started"
        />
        <InfoCard
          imageSrc="/Asset/magicChatImg/p2aImage.png"
          heading="Card 3"
          subheading="Tilt Group Effect"
          bulletPoints={["All cards", "tilt together", "like 3D block"]}
          buttonText="Try Now"
        />
      </AnimatedCardWrapper>
      


      <BannerLayout/>
    </>
  );
}
