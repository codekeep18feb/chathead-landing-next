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

const whyChooesyou = [
  {
    subheading: "Expertise",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our team brings years of domain-specific expertise, ensuring your travel tech solution is built on solid industry knowledge, best practices, and cutting-edge technology.",
      },
    ],
  },
  {
    subheading: "Contemporary UI/UX",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We prioritize modern, user-friendly interfaces that enhance the user journey—from discovery to booking and beyond—resulting in higher engagement and satisfaction.",
      },
    ],
  },
  {
    subheading: "Effective Communication",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "With clear and consistent communication, we keep you informed at every stage of development. We value your input and ensure alignment with your business goals.",
      },
    ],
  },
  {
    subheading: "Cost-effective and timely solutions",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We offer competitive pricing without compromising on quality. Our agile workflows ensure timely delivery to help you launch faster and maximize ROI.",
      },
    ],
  },
  {
    subheading: "Protection",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Security is at the core of every product we build. From secure payment integrations to data protection, we implement robust measures to safeguard users and businesses.",
      },
    ],
  },
  {
    subheading: "Future maintenance and support",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We don't just deliver and walk away. We provide ongoing maintenance, updates, and support to keep your app running smoothly as your business evolves.",
      },
    ],
  },
];

const ecommerceObj = [
  {
    subheading: "Scalable Storefront Architecture",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "We build modular and scalable eCommerce applications that adapt to your business size and growth stage—from emerging startups to enterprise-level marketplaces.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Custom storefront designs optimized for conversions and speed",
          "Support for unlimited SKUs, categories, and variants",
          "Mobile-first architecture with responsive, PWA-ready UI",
          "Multi-language and multi-currency capabilities for global reach",
          "Headless commerce support for seamless frontend/backend separation",
        ],
      },
    ],
  },
  {
    subheading: "Secure & Flexible Transactions",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "Our platforms ensure secure, compliant, and flexible payment processing for businesses of all sizes. Whether you're local or global, you get smooth, protected checkout flows.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Integration with all major global and regional payment gateways",
          "PCI-DSS compliant infrastructure and tokenized transactions",
          "Support for wallets, UPI, BNPL (Buy Now Pay Later), and subscriptions",
          "Real-time fraud detection and chargeback prevention mechanisms",
          "Seamless handling of refunds, partial payments, and invoices",
        ],
      },
    ],
  },
];

const ecommerceCardsData = [
  {
    number: "01",
    heading: "Discovery & Market Research",
    description:
      "As a leading eCommerce app development company, we start by understanding your business goals, target audience, and competitors. Our team conducts in-depth market research to define the best strategy and feature set tailored to your niche.",
  },
  {
    number: "02",
    heading: "UI/UX Design & Prototyping",
    description:
      "We craft intuitive and visually appealing designs focused on seamless navigation and customer retention. Wireframes and prototypes are shared to visualize user flows and refine experiences before development begins.",
  },
  {
    number: "03",
    heading: "Tech Stack Selection & Architecture Planning",
    description:
      "We identify the best technologies and frameworks for your eCommerce app—ensuring scalability, security, and high performance. We also define the app’s architecture and data flow for a solid foundation.",
  },
  {
    number: "04",
    heading: "Custom Development & Integrations",
    description:
      "Our developers build robust front-end and back-end modules, integrate third-party tools like payment gateways, inventory systems, and CRM platforms—ensuring a seamless eCommerce experience for users and admins.",
  },
  {
    number: "05",
    heading: "Testing & Quality Assurance",
    description:
      "We rigorously test the app for usability, performance, and security. Manual and automated testing ensures bug-free functionality across devices and platforms, delivering a flawless shopping experience.",
  },
  {
    number: "06",
    heading: "Launch & Ongoing Support",
    description:
      "We handle app deployment to app stores or web servers and provide post-launch support. Based on analytics and user feedback, we continuously improve the app with new features and optimizations.",
  },
];

export default function Ecommerce() {
  const ecommerceSection = {
    "All Chat Modes": {
      ref: useRef(null),
      subheading: "Live, Offline and Lead-generating chats in one platform",
      className: "product-management",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Magic Chat supports real-time interaction between users and admins, smart AI-driven responses during off-hours, and lead-generating chat flows with pre-set forms.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Live User-Admin Interaction",
            "Offline AI-powered chatbot for 24x7 support",
            "Lead-generating chatbots with pre-set questions and lead forms",
          ],
        },
      ],
    },
    "No Coding / Plug and Play Setup": {
      ref: useRef(null),
      subheading: "Fast setup and customization without writing a line of code",
      className: "order-fulfillment",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Easily integrate and manage chat features from the admin panel. Instantly update behavior, UI, and rules without redeploying or logging out users.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Customize chat appearance and logic from the admin dashboard",
            "Apply changes instantly—no need to re-login",
            "Truly plug-and-play: integrate in minutes",
          ],
        },
      ],
    },
    "Affordable Pricing": {
      ref: useRef(null),
      subheading: "Start for free, scale when needed",
      className: "customer-engagement",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Test and build your app without worrying about cost. Our free plan supports up to 100 users and includes all core features to help you get started quickly.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Free tier suitable for early-stage testing and launch",
            "Upgrade only when you exceed 100 users",
            "Get full feature access even on free plans",
          ],
        },
      ],
    },
    "Varity of Chat Options": {
      ref: useRef(null),
      subheading: "Choose P2A or P2P as per your platform needs",
      className: "chat-options",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We support both Peer-to-Admin and Peer-to-Peer messaging. Select the mode that suits your platform's communication model.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "P2A - Peer to Admin chat",
            "P2P - Peer to Peer chat",
            "Flexible switching based on use-case",
          ],
        },
      ],
    },
    "Auth Agnostic": {
      ref: useRef(null),
      subheading: "Integrate easily with any auth or even without it",
      className: "auth-agnostic",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Whether your product uses social logins, custom tokens, or no authentication at all, Magic Chat integrates with minimal configuration.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Works with or without user authentication",
            "Easily configurable with any auth system",
            "Great for MVPs or full-fledged platforms alike",
          ],
        },
      ],
    },
    "Works Anywhere JavaScript Runs": {
      ref: useRef(null),
      subheading: "Use it on any JavaScript-based frontend",
      className: "js-compatibility",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Magic Chat integrates effortlessly with any platform that supports JavaScript. Whether you're using React, Vue, Angular, Next.js, Nuxt, or plain HTML — you're covered.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Works seamlessly in any JavaScript environment",
            "Supports React, Vue, Angular, Next.js, Nuxt, and more",
            "Ideal for modern SPAs or traditional websites alike",
          ],
        },
      ],
    },
  };

  return (
    <>
      <h1>E-commerce</h1>
      <BannerSection
        icon={HeartIcon}
        label="E-commerce"
        heading="Provide a safe, secure and positive messaging environment for your
              users"
        description="Messaging experience that seamlessly scales from thousands to
              millions of users. Leverage AI-powered chatbot to answer question even if Admin is Offline. Provides robust Live Intraction experience between admin and User. No Coding required , Easy to setup (Just Plug & Play), Premium Simple UI"
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="Why Magic Chat is the Perfect Technology Partner for Your eCommerce Growth."
        description="At Magic Chat Technologies, we build high-performance eCommerce platforms that drive conversions, streamline inventory and fulfillment, and deliver seamless shopping experiences across web and mobile. From storefront to checkout, we help you scale faster and smarter."
        sections={ecommerceSection}
      />

      <BuildShipManageCards
        title="Why choose Magic chat to develop Ecommerce apps?"
        subtitle="At Magic chat, we have talented ecommerce app developers with a wealth of experience building customized Ecommerce app solutions out of the box."
        sections={whyChooesyou}
      />

      <ProtectBusiness
        title="E-commerce apps for businesses of all sizes and types"
        description="We build complete eCommerce mobile app solutions tailored to businesses of all sizes—helping you attract customers, boost retention, and strengthen your brand presence."
        sections={ecommerceObj}
      />

      <TimeTestedComp
        title="Our eCommerce Development Process"
        subtitle="Tailored to build scalable, secure, and high-converting shopping experiences."
        cardsData={ecommerceCardsData}
      />
    </>
  );
}
