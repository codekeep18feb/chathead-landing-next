"use client";
import BannerSection from "../../BannerSection";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import { useRef } from "react";
import ProtectBusiness from "../../ProtectBusiness";
import TimeTestedComp from "../../TimeTestedComp";

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

const whyChooseMagicChat = [
  {
    subheading: "Deep Real Estate Expertise",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our team understands the real estate domain—buyers, sellers, agents, and investors. We help you engage them better, faster, and with clarity through powerful chat flows.",
      },
    ],
  },
  {
    subheading: "Modern & Conversion-Driven UI/UX",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We deliver beautiful, intuitive experiences that drive engagement—whether users are browsing listings or booking property visits.",
      },
    ],
  },
  {
    subheading: "Transparent & Responsive Communication",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "From kickoff to scale-up, we’re in sync with your team—ensuring our technology supports your roadmap, vision, and go-to-market strategy.",
      },
    ],
  },
  {
    subheading: "Quick, Scalable & Cost-Efficient",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "With plug-and-play architecture, you launch fast and scale without overhead. No bloated dev costs—just real results and ROI.",
      },
    ],
  },
  {
    subheading: "Ongoing Support & Upgrades",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Post-launch, we stay with you—optimizing bots, releasing new features, and ensuring the platform evolves with your real estate business.",
      },
    ],
  },
];

const productHighlights = [
  {
    subheading: "High-Impact Chat Experience",
    image: `${basePath}/Asset/messaging_experience.png`,
    content: [
      {
        type: "p",
        text: "Capture leads, answer queries, and engage clients—all via real-time, AI-powered chat experiences tailored for real estate platforms.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Live Chat for agent-user interaction",
          "AI assistant handles off-hours & FAQs",
          "Lead-gen bots with smart forms and CRM sync",
        ],
      },
    ],
  },
  {
    subheading: "Lightweight Integration. Powerful Results.",
    image: `${basePath}/Asset/messaging_experience.png`,
    content: [
      {
        type: "p",
        text: "Embed Magic Chat with just a few lines of JavaScript. Works seamlessly across your stack—React, Vue, Angular, or plain HTML.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Works anywhere JavaScript runs",
          "Auth-agnostic: plug into any login system or none",
          "Minimal setup, instant deployment",
        ],
      },
    ],
  },
];

const buildSteps = [
  {
    number: "01",
    heading: "Discovery & Requirement Mapping",
    description:
      "We align with your real estate workflows, buyer personas, and KPIs to design chatbot strategies that serve both user intent and business goals.",
  },
  {
    number: "02",
    heading: "Chat UI/UX Design",
    description:
      "We craft elegant, branded interfaces that feel native to your platform—delighting users and maximizing engagement.",
  },
  {
    number: "03",
    heading: "Tech Stack Integration",
    description:
      "Just drop a few lines of JavaScript into your platform—React, Vue, Angular, Next.js, Nuxt, or plain HTML. We guide you on where to place the code to load the chatbot at the right entry points. Clear documentation and support provided.",
  },
];

export default function RealEstate() {
  return (
    <>
      <h1>Real Estate Chat Solutions</h1>
      <BannerSection
        icon={HeartIcon}
        label="Real Estate"
        heading="Bring AI-Powered Chat to Your Property Platform"
        description="Magic Chat is the fastest way to launch live chat, AI support, and lead-generation bots for real estate. Easy to integrate. Scales with you. Built for speed, engagement, and growth."
        buttonText="Get a Demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText="Real Estate Chat"
      />

      <FeatureSectionWrapper
        title="Why Magic Chat Is Built for Real Estate"
        description="Whether you run a listings marketplace, property portal, or brokerage platform—Magic Chat brings you a communication layer that’s fast, reliable, and conversion-optimized."
        sections={{
          "All Chat Modes": {
            ref: useRef(null),
            subheading: "Live, AI & Lead Bots—All in One",
            className: "chat-modes",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Magic Chat lets you handle real-time inquiries, automate off-hours, and capture leads effortlessly with one integration.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Live Chat (P2A, P2P)",
                  "AI for after-hours support",
                  "Lead bots with form validation & CRM sync",
                ],
              },
            ],
          },
          "No Coding / Plug and Play Setup": {
            ref: useRef(null),
            subheading: "Get Started in Minutes",
            className: "easy-setup",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Deploy Magic Chat without changing your backend or frontend structure. It’s as easy as dropping a script into your app.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "No backend integration required",
                  "Launch instantly",
                  "Manage from a clean, intuitive dashboard",
                ],
              },
            ],
          },
          "Affordable Pricing": {
            ref: useRef(null),
            subheading: "Built for Startups and Scaling Teams",
            className: "pricing",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "With transparent pricing and a generous free tier, Magic Chat delivers full functionality without surprise costs.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Startup-friendly pricing plans",
                  "No paywalls on essential features",
                  "Pay as you grow",
                ],
              },
            ],
          },
          "Varity of Chat Options": {
            ref: useRef(null),
            subheading: "Flexible Communication Modes",
            className: "chat-options",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Choose P2A (Peer-to-Admin) or P2P (Peer-to-Peer) communication depending on your user journey—Magic Chat supports both effortlessly.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "P2A for agent/broker chats",
                  "P2P for buyer-seller or tenant-owner interactions",
                  "Switch modes per page or user type",
                ],
              },
            ],
          },
          "Auth Agnostic": {
            ref: useRef(null),
            subheading: "Plug into Any Login System—or None",
            className: "auth",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Magic Chat works regardless of how your users authenticate. No login? No problem.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Works with OAuth, JWT, cookies or session-based auth",
                  "Anonymous user support built-in",
                  "Easy user mapping via token passthrough",
                ],
              },
            ],
          },
          "Works Anywhere JavaScript Runs": {
            ref: useRef(null),
            subheading: "Framework Agnostic. Future Proof.",
            className: "frameworks",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Whether you use React, Vue, Angular, Next.js, or plain HTML—Magic Chat just works.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Works with all JS frameworks",
                  "SPA, MPA, SSR compatible",
                  "Perfect for hybrid and micro-frontend architectures",
                ],
              },
            ],
          },
        }}
      />

      <BuildShipManageCards
        title="Why choose Magic Chat for your Real Estate platform?"
        subtitle="We combine smart technology with industry understanding to help you chat better, faster, and more effectively."
        sections={whyChooseMagicChat}
      />

      <ProtectBusiness
        title="Modern Messaging. Massive Impact."
        description="Magic Chat delivers lightweight, secure, and scalable chat for property platforms of all sizes—from local listings to global marketplaces."
        sections={productHighlights}
      />

      <TimeTestedComp
        title="Our Chat Implementation Process"
        subtitle="From discovery to live support, our streamlined process ensures you go live fast—and grow without limits."
        cardsData={buildSteps}
      />

      <FeatureSectionWrapper
        title="Smarter Control. Better Decisions."
        description="Track what matters and manage across multiple domains—all from one unified dashboard."
        sections={{
          "Insights Dashboard": {
            ref: useRef(null),
            subheading: "Know What to Improve",
            className: "insights",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "See real-time chat metrics, conversion trends, drop-off points, and lead quality. Pinpoint exactly where user engagement can be improved.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Track lead volume, response rate, chat duration",
                  "Export analytics to CSV or dashboard",
                  "Make informed improvements to flow or messaging",
                ],
              },
            ],
          },
          "Multi-Site Management": {
            ref: useRef(null),
            subheading: "One Admin. Many Domains.",
            className: "multi-site",
            image: `${basePath}/Asset/messaging_experience.png`,
            content: [
              {
                type: "p",
                text: "Create and control multiple chatbots across different domains or products—all from a single Admin dashboard.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Separate bots per brand, location, or language",
                  "One login to manage all chatbot instances",
                  "Custom flows and styles per site",
                ],
              },
            ],
          },
        }}
      />
    </>
  );
}
