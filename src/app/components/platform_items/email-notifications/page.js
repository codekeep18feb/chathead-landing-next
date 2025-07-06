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

export default function EmailNotifications() {
  const emailNotifications = {
    "Instant Alerts": {
      ref: useRef(null),
      subheading: "Trigger email alerts for real-time awareness",
      className: "instant-alerts",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Receive instant email alerts for important events, ensuring users never miss out on critical updates or activities.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Automatically notify users when they receive new messages or activity.",
            "Useful for missed chats, order updates, account events, and more.",
            "Ensure high visibility for time-sensitive events, even when users are offline.",
          ],
        },
      ],
    },
  
    "User Re-engagement": {
      ref: useRef(null),
      subheading: "Bring users back with timely updates",
      className: "user-engagement",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Email notifications act as a gentle nudge to keep users coming back to your platform when activity is happening.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Increase retention by notifying users about unread messages and mentions.",
            "Personalized email templates help create a stronger connection.",
            "Great for reactivating dormant or less frequent users.",
          ],
        },
      ],
    },
  
    "Configurable & Scalable": {
      ref: useRef(null),
      subheading: "Flexible control with delivery at scale",
      className: "configurable-email",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Customize notification rules and templates for different user segments or events.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Enable users to opt in/out of specific types of email alerts.",
            "Support for transactional and marketing email types.",
            "Built to scale with reliable delivery infrastructure.",
          ],
        },
      ],
    },
  };
  

  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label="Email Notifications"
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
        sections={emailNotifications}
      />
    </>
  );
}
