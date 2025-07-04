"use client";

import BannerSection from "@/app/components/solutions_items/ondemand/BannerSection";
import FeatureSectionWrapper from "@/app/components/solutions_items/ondemand/FeatureSectionWrapper";
import { useRef } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const HeartIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0C21.7323 0 28 6.26773 28 14C28 21.7323 21.7323 28 14 28C6.26773 28 0 21.7323 0 14C0 6.26773 6.26773 0 14 0ZM11.5402 12.612C15.5433 11.2328 14.1285 6.69977 14.5338 6.83484C17.1549 8.11617 20.1015 10.9118 20.1015 15.1052C20.1015 18.3198 17.6088 21.1619 13.9863 21.1619C10.7723 21.3079 8.04945 18.8218 7.90344 15.6084C7.7525 12.2763 10.8648 9.84594 10.8648 10.4459C10.8921 10.7871 11.1825 12.612 11.5402 12.612Z"
      fill="#2C2424"
    />
  </svg>
);

export default function ExampleUsageContent() {
  const sections = {
    "Client-server or monolithic architectures": {
      ref: useRef(null),
      // subheading: "Whatsapp-style interface with all features out of the box",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,

      content: [
        {
          type: "p",
          // text: "Build a relatable and modern messaging experience. More familiar the UX feels, the higher the user engagement.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for client-server or monolithic architectures with built-in (or planned) authentication.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "Chat call centers": {
      ref: useRef(null),
      // subheading: "Streamline product enquiries for sellers",
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,

      content: [
        {
          type: "p",
          // text: "Allow sellers to manage multiple conversations with a personalized inbox view.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Great for service providers, support-focused businesses, and mid to large-scale chat call centers.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "modern architectures": {
      ref: useRef(null),
      // subheading: "Prevent platform leakage",
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "p",
          // text: "Retain users and keep all transactions within your platform.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Perfect for modern architectures — works seamlessly with any authentication system (authentication-agnostic).",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
  };

  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label="Example Usage"
        heading="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/matrimony_banner.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="MagicChat for ......."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        sections={sections}
      />
    </>
  );
}
