"use client";
import React, { useRef } from "react";
import BannerSection from "./BannerSection";
import FeatureSectionWrapper from "./FeatureSectionWrapper";
import BuildShipManageCards from "./buildShipManageCards";
import ProtectBusiness from "./ProtectBusiness";
import TimeTestedComp from "./TimeTestedComp";
import { MdOutlineSecurity } from "react-icons/md";

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

export default function IndustryPageTemplate({
  industry_name,
  industry_reason,
}) {
  const whyChooseMagicChat = [
    {
      subheading: `Deep ${industry_name} Expertise`,
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: `Our team understands the ${industry_name.toLowerCase()} domain—buyers, sellers, agents, and investors. We help you engage them better, faster, and with clarity through powerful chat flows.`,
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
          text: `Post-launch, we stay with you—optimizing bots, releasing new features, and ensuring the platform evolves with your ${industry_name.toLowerCase()} business.`,
        },
      ],
    },
  ];

  const buildSteps = [
    {
      number: "01",
      heading: "Discovery & Requirement Mapping",
      description: `We align with your ${industry_name.toLowerCase()} workflows, buyer personas, and KPIs to design chatbot strategies that serve both user intent and business goals.`,
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

  const productHighlights = [
    {
      subheading: "Real-Time Chat. Easy to Embed. Instant Impact.",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Capture leads, answer queries, and engage clients in real time with AI-powered chat—seamlessly embedded into your site using just a few lines of JavaScript.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Live Chat for agent-user interaction",
            "AI assistant handles off-hours & FAQs",
            "Lead-gen bots with smart forms and CRM sync",
            "Works across React, Vue, Angular, or plain HTML",
            "Auth-agnostic: plug into any login system or none",
            "Minimal setup, instant deployment",
          ],
        },
      ],
    },
    {
      subheading: "Covers All Chat Scenarios",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Magic Chat gives you a complete suite of chat options to cover every stage of the customer journey—whether your team is online, offline, or you're just capturing leads.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "🧲 Lead Generation Chatbot – Lightweight, form-driven lead capture.",
            "🤖 AI Chatbot – Always-on smart assistant for FAQs and offline hours.",
            "💬 Live Agent Chat – Real-time chat with agents when online.",
          ],
        },
      ],
    },
    {
      subheading: "Insightful, Scalable, Centralized",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Track performance, manage multiple sites, and keep improving—all from one powerful dashboard.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "📊 Insight Dashboard – Know what’s working and where to improve",
            "🌐 Multi-site Support – Deploy chatbots across multiple sites",
            "🛠 Central Admin – Control all bots from one place",
            "⚙️ Optimize flows post-launch with live data",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <BannerSection
        icon={HeartIcon}
        label={industry_name}
        heading="Bring AI-Powered Chat to Your Property Platform"
        description={`Magic Chat is the fastest way to launch live chat, AI support, and lead-generation bots for ${industry_name}. Easy to integrate. Scales with you. Built for speed, engagement, and growth.`}
        buttonText="Get a Demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText={`${industry_name} Chat`}
      />

      <FeatureSectionWrapper
        title={`Why Magic Chat Is Built for ${industry_name}`}
        description={industry_reason}
        sections={{
          "Variety of Chat Options": {
            subheading: "Flexible Communication Modes",
            className: "chat-modes",
            images: [
              {
                src: `${basePath}/Asset/magicChatImg/p2aImage.png`,
                heading: "Peer to Peer (P2P)",
              },
              {
                src: `${basePath}/Asset/magicChatImg/p2pImage.png`,
                heading: "User to Admin (P2A)",
              },
            ],
            content: [
              {
                type: "p",
                text: "Choose P2A (Peer-to-Admin) or P2P (Peer-to-Peer) communication depending on your user journey—Magic Chat supports both effortlessly.",
              },
              {
                type: "group",
                className: "normal-text",
                texts: [
                  "Live Chat (P2A, P2P)",
                  "AI for after-hours support",
                  "Lead bots...",
                ],
              },
            ],
          },
          "No Coding / Plug and Play Setup": {
            ref: useRef(null),
            subheading: "Get Started in Minutes",
            className: "easy-setup",
            images: [
              {
                src: `${basePath}/Asset/codegif.gif`,
                heading: "Zero Code Setup Demo",
              },
            ],
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
            images: [
              {
                src: `${basePath}/Asset/magicChatImg/AffordablePricing.png`,
                heading: "Heading..........",
              },
              {
                src: `${basePath}/Asset/magicChatImg/AffordablePricing2.png`,
                heading: "Heading..........",
              },
            ],
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
          "Auth Agnostic": {
            ref: useRef(null),
            subheading: "Plug into Any Login System—or None",
            className: "auth",
            images: [
              {
                src: `${basePath}/Asset/magicChatImg/nologin_noproble.png`,
                heading: "Heading..........",
              },
              {
                src: `${basePath}/Asset/magicChatImg/nologin_noproble2.png`,
                heading: "Heading..........",
              },
            ],
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
            images: [
              {
                src: `${basePath}/Asset/magicChatImg/Framework.png`,
                heading: "Heading..........",
              },
              {
                src: `${basePath}/Asset/magicChatImg/Framework2.png`,
                heading: "Heading..........",
              },
            ],
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
        title={`Why choose Magic Chat for your ${industry_name} platform?`}
        subtitle="We combine smart technology with industry understanding to help you chat better, faster, and more effectively."
        sections={whyChooseMagicChat}
      />

      <ProtectBusiness
        title="Modern Messaging. Massive Impact."
        description={`Magic Chat delivers lightweight, secure, and scalable chat for ${industry_name.toLowerCase()} platforms of all sizes—from local listings to global marketplaces.`}
        sections={productHighlights}
      />

      <TimeTestedComp
        title="Our Chat Implementation Process"
        subtitle="From discovery to live support, our streamlined process ensures you go live fast—and grow without limits."
        cardsData={buildSteps}
      />
    </>
  );
}
