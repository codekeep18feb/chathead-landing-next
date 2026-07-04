import React from "react";
import ScrollCards from "../components/ScrollCards/ScrollCards";

const cardsData = [
  {
    title: "AI-Powered Platform",
    description:
      "Revolutionary AI platform that transforms raw data into actionable insights with 99.9% accuracy.",
    image: "/images/ai-platform.jpg",
    color: "#ffffff",
  },
  {
    title: "Sustainable Design",
    description:
      "Eco-friendly product design system that reduces carbon footprint while maximizing user experience.",
    image: "/images/sustainable-design.jpg",
    color: "#f8fafc",
  },
  {
    title: "Digital Ecosystem",
    description:
      "Complete digital ecosystem connecting millions of users across multiple platforms seamlessly.",
    image: "/images/digital-ecosystem.jpg",
    color: "#ffffff",
  },
  {
    title: "Smart Analytics",
    description:
      "Advanced analytics dashboard with real-time data visualization and predictive modeling.",
    image: "/images/smart-analytics.jpg",
    color: "#f1f5f9",
  },
  {
    title: "Future Technologies",
    description:
      "Cutting-edge technology solutions pushing the boundaries of what's possible in the digital age.",
    image: "/images/future-tech.jpg",
    color: "#ffffff",
  },
];

const CardAnimation = () => {
  return (
    <div>
      <ScrollCards cards={cardsData} />
    </div>
  );
};

export default CardAnimation;
