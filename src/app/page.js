"use client";

import Script from "next/script";
import SolveSection from "../app/components/SolveSection";
import HowSection from "../app/components/HowSection";
import EngagementSection from "../app/components/EngagementSection";

export default function Home() {
  const handleMagicChatInit = async () => {
    await window.magicchat_io.setUp(
      "magicchat_support_app", // app_name
      "bWFnaWNjaGF0U3VwcG9ydF9fU0VQUkFUT1JfX21hZ2ljY2hhdF9zdXBwb3J0X2FwcA==", // api_key
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
        src="https://cdn.jsdelivr.net/gh/magicchat-core/prod-ssc-client-cdns@v0.3.0/bundle.js"
        strategy="afterInteractive"
        onLoad={handleMagicChatInit}
      />

      <SolveSection />
      <HowSection />
      <EngagementSection />
    </>
  );
}
