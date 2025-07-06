"use client";
import Head from "next/head";
import BannerSection from "../../solutions_items/ondemand/BannerSection";
import FeatureSectionWrapper from "../../solutions_items/ondemand/FeatureSectionWrapper";
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

export default function DeliveryReports() {
  const deliveryReports = {
    "Message Status Indicators": {
      ref: useRef(null),
      subheading: "Keep users informed with clear message states",
      className: "delivery-reports",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Show real-time status for each message sent, delivered, and seen—making communication transparent.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Use clear visual indicators like checkmarks for sent, delivered, and read statuses.",
            "Minimize user confusion with accurate delivery feedback.",
            "Helps users track message journey at a glance.",
          ],
        },
      ],
    },
  
    "Read Receipts": {
      ref: useRef(null),
      subheading: "Give users confidence their message has been read",
      className: "read-receipts",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Instantly notify users when their message is seen with read receipts that update in real time.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Reinforces responsiveness by confirming message visibility.",
            "Helps users gauge urgency based on read status.",
            "Supports transparency in both 1:1 and group conversations.",
          ],
        },
      ],
    },
  
    "Reliable Real-Time Sync": {
      ref: useRef(null),
      subheading: "Built for accuracy and scale across devices",
      className: "real-time-sync",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Ensure delivery reports are accurate and fast, syncing consistently across all platforms and devices.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Real-time sync for delivery/read events across web, mobile, and desktop.",
            "Built on lightweight infrastructure to support high throughput messaging.",
            "Integrates seamlessly with existing messaging and notification layers.",
          ],
        },
      ],
    },
  };
  
  

  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label="Delivery Reports"
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
        sections={deliveryReports}
      />
    </>
  );
}
