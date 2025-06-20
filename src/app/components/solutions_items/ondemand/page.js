"use client";
import Head from "next/head";
import { useRef } from "react";
import BuildShipManageCards from "./buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import BannerSection from "./BannerSection";
import AccordionSection from "./AccordionSection";
import FeatureSectionWrapper from "./FeatureSectionWrapper";


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const sectionsData = [
  {
    subheading: "UI kits",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Quickly implement chat functionality with UI Kits that include built-in business logic and a customizable user interface.",
      },
    ],
  },
  {
    subheading: "Data retention",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Retain chat histories securely for compliance and user satisfaction, allowing users to revisit and cherish their meaningful conversations. ",
      },
    ],
  },
  {
    subheading: "Security",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Enhance user interactions with intelligent suggestions and responses, making conversations smoother and more engaging.",
      },
    ],
  },
  {
    subheading: "Bots",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Automate routine tasks and provide instant support with chatbots to reduce operational workload.",
      },
    ],
  },
  {
    subheading: "Rich media sharing",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Allow users to share photos, videos, and voice messages, enriching their interactions and making connections more personal.",
      },
    ],
  },
  {
    subheading: "Tinder-style interface with all features out of the box",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Smooth and user-friendly chat interface for seamless real-time communication.",
      },
    ],
  },
];

const items = [
  {
    title: "Insights",
    subheading: "Deep insights with powerful chat analytics",
    content:
      "Analyze chat usage to understand how users interact. Create detailed user profiles based on chat history and sentiment analysis. Develop user funnels to track and optimize user journeys.",
    image: `${basePath}/Asset/ai_power.png`,
  },
  {
    title: "Notifications  ",
    subheading: "Reliable push, email and SMS notifications",
    content:
      "Keep conversations flowing smoothly by sending instant push notifications whenever a user receives a new message.",
    image: `${basePath}/Asset/notification_img.png`,
  },
  {
    title: "Moderation Control",
    subheading: "Monitor users, report malicious texts",
    content:
      "Centralized view of all flagged messages, reported users, and violations. Admins can quickly assess potential issues and identify trends that may require further attention.",
    image: `${basePath}/Asset/webhooks_img.png`,
  },
];



export default function OnDemand() {

  const sections = {
    "Messaging experience": {
      ref: useRef(null),
      subheading: "Tinder-style interface with all features out of the box",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      

      content: [
        {
          type: "p",
          text: "Smooth and user-friendly chat interface for seamless real-time communication.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Let users express themselves with emojis, stickers, and creative avatars",
            "Suggest conversation starters based on shared interests, personalities, and messaging history.",
            "Leverage interactive message formats to show polls, quizzes, and chat-based games to create an engaging experience.",
          ],
        },
      ],
    },
    "Voice and video calling": {
      ref: useRef(null),
      subheading: "Tinder-style interface with all features out of the box",
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,

      content: [
        {
          type: "p",
          text: "Provide a more immersive and interactive way for users to get to know each other and build relationships.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Video calling helps users to verify identity and makes it harder for catfishers to operate.",
            "Alleviate pre-date nerves by providing a face-time like experience within your app interface.",
            "Low latency and HD quality videos for a better user experience and retention.",
          ],
        },
      ],
    },
    "Scale for millions": {
      ref: useRef(null),
      subheading: "Always available, always reliable",
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "p",
          text: "Scalable and reliable infrastructure that can handle large user bases and high traffic.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
    "Moderation control": {
      ref: useRef(null),
      subheading: "Advanced content moderation",
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        { type: "p", text: "Our AI mimics human-like conversation patterns." },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
    "Monetize chat": {
      ref: useRef(null),
      subheading: "Maximize revenue with chat",
      className: "monetize-chat",
      image: `${basePath}/Asset/monetize_chat.png`,
      content: [
        {
          type: "p",
          text: "MagicChat Bots help automate repetitive tasks efficiently.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Uninterrupted service even in peak usage hours. Our system can support up to a million concurrent users.",
            "Globally distributed network of servers, ensures low latency and lightning-fast message delivery.",
            "Eliminate the need for expensive in-house DevOps teams and server management.",
          ],
        },
      ],
    },
  };
  
  return (
    <div>
      <BannerSection
        icon={<FaHeart />}
        label="Dating"
        heading="Reduce order cancellations and facilitate a smooth order fulfillment."
        description="By leveraging MagicChat's in-app chat and calling features, you can effortlessly connect customers with service providers, ensuring a smooth and efficient order-to-delivery experience."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/matrimony_banner.png`}
        altText="Chat Solution"
      />

      <BuildShipManageCards
        title="Build, ship and manage marketplace chat at scale"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        sections={sectionsData}
      />


      <AccordionSection
      heading="MagicChat for Matrimonial"
      description="Seamless connections, safer interactions, smarter matches"
      items={items}
      defaultOpenIndex={0}
      showImage={true}
      />

      <FeatureSectionWrapper
      title="MagicChat for matrimonial"
      description="Seamless connections, safer interactions, smarter matches"
      sections={sections}
      />
    </div>
  );
}
