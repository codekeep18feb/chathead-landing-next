"use client";
import Head from "next/head";
import BannerSection from "../../BannerSection";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
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

export default function LiveStatus() {
  const liveStatus = {
    "Presence Indicators": {
      ref: useRef(null),
      subheading: "Show who’s online, busy, or offline in real time",
      className: "presence-indicators",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Monitor live presence and availability of users across your platform with real-time status indicators.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Show online/offline/busy statuses next to usernames in chats and directories.",
            "Enable users to know when others are available before starting a conversation.",
            "Presence is synced instantly across all user sessions and devices.",
          ],
        },
      ],
    },
  
    "Availability Awareness": {
      ref: useRef(null),
      subheading: "Help users connect at the right moment",
      className: "availability-awareness",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Let users time their outreach more effectively by knowing if the recipient is available in the moment.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Boosts responsiveness by reducing missed or delayed replies.",
            "Great for support chats, internal messaging, and community apps.",
            "Improves user satisfaction and engagement through better timing.",
          ],
        },
      ],
    },
  
    "Real-Time Sync & Scale": {
      ref: useRef(null),
      subheading: "Scalable infrastructure for always-accurate status",
      className: "real-time-sync-status",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Built for real-time sync across devices and platforms, even during high activity periods.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Presence is updated instantly with low latency.",
            "Reliable across mobile, web, and desktop environments.",
            "Integrates smoothly into your existing messaging system without added complexity.",
          ],
        },
      ],
    },
  };
  

  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label="Live Status"
        heading="Connect buyers and sellers seamlessly without the risk of platform leakage"
        description="Magic Chat helps you to provide the best communication experience for your buyers and sellers, all while increasing conversions and eliminating leakages in your marketplace."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/reaction1.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="MagicChat for Marketplaces"
        description="Less friction, Better communication, No platform leakage"
        sections={liveStatus}
      />
    </>
  );
}
