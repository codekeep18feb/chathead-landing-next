"use client";

import Script from "next/script";
import SolveSection from "../app/components/SolveSection";
import HowSection from "../app/components/HowSection";
import EngagementSection from "../app/components/EngagementSection";
import WhatWeOfferSection from "./components/wwoffer/WhatWeOffer";
import MagicChatOverview from "@/app/components/magicchatOverview/MagicChatOverview";

export default function Home() {
  const handleMagicChatInit = async () => {
    await window.magicchat_io.setUp(
      "magicchat", // app_name
      "TWFnaWNDaGF0IFN1cHBvcnQgVGVhbV9fU0VQUkFUT1JfX21hZ2ljY2hhdA==", // api_key
      false // header_req (true by default)
    );

    await window.magicchat_io.initialize({ app_version: "V4" });
  };

  return (
    <>
      {/* Load Socket.io */}
      <Script
        src="https://cdn.socket.io/4.1.2/socket.io.min.js"
        strategy="beforeInteractive"
      />
      {/* Load Magicchat bundle */}
      <Script
        src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"
        strategy="afterInteractive"
        onLoad={handleMagicChatInit}
      />

      <SolveSection />
      <WhatWeOfferSection/>
      <MagicChatOverview />
      <HowSection />
      <EngagementSection />
    </>
  );
}
