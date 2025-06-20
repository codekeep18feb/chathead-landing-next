"use client";
import Head from "next/head";
import BuildShipManageCards from "./buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import BannerSection from "./BannerSection";
import AccordionSection from "./AccordionSection";

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

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    </div>
  );
}
