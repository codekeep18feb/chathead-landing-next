// src/app/roadmap/page.js
import React from "react";
// ⭐ Point this import to wherever your existing RoadmapNextPage component actually lives.
// Based on your initial file dump, it was under components/HeroSection/RoadmapNextPage
import RoadmapNextPage from "../components/HeroSection/RoadmapNextPage";

export const metadata = {
  title: "Roadmap | Sageion",
  description: "See what we're building next at Sageion.",
};

export default function RoadmapPage() {
  return (
    <main>
      <RoadmapNextPage />
    </main>
  );
}