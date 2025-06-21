"use client";
import Head from "next/head";
import { useRef } from "react";
import AccordionSection from "../ondemand/AccordionSection";
import BuildShipManageCards from "../ondemand/buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import ProtectBusiness from "../ondemand/ProtectBusiness";
import FeatureSectionWrapper from "../ondemand/FeatureSectionWrapper";
import BannerSection from "../ondemand/BannerSection";
import Carousel from "../ondemand/Carousel";
import FeaturesIntegrations from "../ondemand/FeaturesIntegrations";

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
    subheading: "Webhooks",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Automate tasks, personalize user experiences, and gain valuable insights to drive growth by subscribing to webhooks.",
      },
    ],
  },
  {
    subheading: "Security",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "End-to-end encryption with advanced security. Fully compliant with HIPAA, GDPR, SOC 2",
      },
    ],
  },
  {
    subheading: "Bots",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Create a more engaging experience by implementing bots that can be connected to any GEN AI engine or learn from user activity occurring on your platform.",
      },
    ],
  },
  {
    subheading: "Scalability",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Scale effortlessly to meet the demands of your expanding user base. A robust infrastructure that can support 1 Million+ concurrency.",
      },
    ],
  },
  {
    subheading: "Data retention",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Need to access past conversations for audits, dispute resolution, or customer inquiries? Magic Chat automatically stores and retains all your chat data, ensuring you never lose a conversation.",
      },
    ],
  },
];

const items = [
  {
    title: "Insights",
    subheading:
      "Understand your buyer funnel, identify areas of drop-offs, and frequently asked questions",
    content:
      "Default analytics dashboard for monitoring chat usage, active users, total messages exchanged, and calls made. AI-powered insights to get deeper context into user and funnel activity.",
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

const features = [
  {
    subheading: "Communication",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "1 to 1 chat",
          "Group chat",
          "Voice & video calling",
          "Secure file transfer",
          "Chat search & history",
          
        ],
      },
    ],
  },
  {
    subheading: "Moderation",
    // image: `${basePath}/Asset/secureIc.png`,
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Sentiment Analysis",
          "Image moderation",
          "Profanity Filter",
          "Data Masking",
          "Report User & Message",
          
        ],
      },
    ],
  },
  {
    subheading: "Engagement",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Push Notifications",
          "Email Replies",
          "Message reminders",
          "Typing indicators",
          "Message translation",
        ],
      },
    ],
  },
  {
    subheading: "Admin",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Dashboard & Analytics",
          "Bots interface",
          "Customer support integration",
          "Call Recording",
          "Webhooks",
        ],
      },
    ],
  },
];

const testimonialSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Wedding 1",
    text: "“Our existing chat system struggled with the growing user base, leading to performance hiccups. We had to shift, and with MagicChat, we improved our matching algorithm, increasing match rates by 20%.”",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcfko4VAZJJGM4OHDMC4AciePcXTTLGoy6w&s",
    author: "Reetu Singh",
    designation: "Product Manager",
  },
  {
    image:
      "https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/Best-wedding-photographers-India-Top-5-destination-wedding-photographers-Indian-weddings-2.jpg",
    alt: "Wedding 2",
    text: "“A seamless integration with MagicChat allowed us to boost user engagement by 30%, creating meaningful connections.”",
    logo: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230224091946.jpg",
    author: "Arjun Mehra",
    designation: "CTO, Matrimony App",
  },
  {
    image:
      "https://cdn0.weddingwire.in/vendor/9778/3_2/960/jpg/wedding-photographers-shaadigram-art-couple-shot-3_15_449778-168613815393146.jpeg",
    alt: "Wedding 3",
    text: "“MagicChat’s real-time chat improved our platform significantly. Users now connect effortlessly, and our retention rates have skyrocketed.”",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7OFdEEZduebRh58MO-Up4qkbFzsBPdNrtA&s",
    author: "Priya Sharma",
    designation: "Head of Product",
  },
];

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

export default function Marketplace() {
  const sections = {
    "Messaging experience": {
      ref: useRef(null),
      subheading: "Whatsapp-style interface with all features out of the box",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,

      content: [
        {
          type: "p",
          text: "Build a relatable and modern messaging experience. More familiar the UX feels, the higher the user engagement.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "AI powered smart messaging with conversation prompts",
            "Voice notes with real time translation for users speaking different languages.",
            "Allow users to send and receive product information through images and videos.",
          ],
        },
      ],
    },
    "Centralized Inbox": {
      ref: useRef(null),
      subheading: "Streamline product enquiries for sellers",
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,

      content: [
        {
          type: "p",
          text: "Allow sellers to manage multiple conversations with a personalized inbox view.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Keep all conversations organized in one place.",
            "Gain a complete picture of buyer engagement for each product.",
            "Switch between seeing recent conversations for a specific listing or filter by buyer.",
          ],
        },
      ],
    },
    "Chat Moderation": {
      ref: useRef(null),
      subheading: "Prevent platform leakage",
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "p",
          text: "Retain users and keep all transactions within your platform.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Data masking to prevent attempts of contact and payment information sharing.",
            "Prevent users from bypassing platform rules with proactive AI content moderation.",
            "Integrate payment flow within chat for easy and secure transactions.",
          ],
        },
      ],
    },
    "Messaging Operations": {
      ref: useRef(null),
      subheading: "Utilize messaging as a robust operations hub.",
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "p",
          text: "Go beyond basic user-to-user messaging. Interactive messages empowers marketplace admins to utilize chat as an operations hub.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Streamline lead generation and product qualification through forms.",
            "Simplify payment processing and order placement through cards.",
            "Create unique and customized interactive messages to meet any advanced requirements that are not natively supported.",
          ],
        },
      ],
    },
  };
  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label="Marketplace"
        heading="Connect buyers and sellers seamlessly without the risk of platform leakage"
        description="Magic Chat helps you to provide the best communication experience for your buyers and sellers, all while increasing conversions and eliminating leakages in your marketplace."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/matrimony_banner.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="MagicChat for Marketplaces"
        description="Less friction, Better communication, No platform leakage"
        sections={sections}
      />

      <FeaturesIntegrations
        title="Features and integrations that make for great interactions"
        description="Communication platform built for growth"
        sections={features}
      />
      <BuildShipManageCards
        title="Build, ship and manage chat at scale"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        sections={sectionsData}
      />

      <AccordionSection
        heading="Admin tools for chat management, moderation and Insights"
        description="Seamless connections, safer interactions, smarter matches"
        items={items}
        defaultOpenIndex={0}
        showImage={true}
      />

      <Carousel
        slides={testimonialSlides}
        title="10 years and 50,000+ customer stories"
        description="Customer Stories"
      />
    </>
  );
}
