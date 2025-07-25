"use client";
import BannerSection from "../../BannerSection";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import { useRef } from "react";
import ProtectBusiness from "../../ProtectBusiness";
import TimeTestedComp from "../../TimeTestedComp";
import IndustryPageTemplate from "../../IndustryPageTemplate";

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
    "Product Management": {
      ref: useRef(null),
      subheading: "Efficient catalog creation and product lifecycle control",
      className: "product-management",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Simplify and centralize your product catalog management. From SKUs to variants and dynamic attributes, we help eCommerce platforms organize, update, and launch products at scale.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Manage product listings, descriptions, and media in one place.",
            "Control stock levels, categories, and pricing in real time.",
            "Handle multiple product variants and regional catalogs easily.",
          ],
        },
      ],
    },
    "Order & Fulfillment": {
      ref: useRef(null),
      subheading: "Streamlined processing from checkout to delivery",
      className: "order-fulfillment",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Deliver a seamless post-purchase experience by optimizing order processing, shipping logistics, and delivery tracking. Our systems reduce errors and improve customer satisfaction.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Automate order status updates and inventory synchronization.",
            "Integrate with courier APIs for real-time shipment tracking.",
            "Enable split shipments and smart routing based on location.",
          ],
        },
      ],
    },
    "Customer Engagement": {
      ref: useRef(null),
      subheading: "Boost retention with personalized shopping experiences",
      className: "customer-engagement",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Engage customers across their journey with behavior-driven personalization, loyalty programs, and smart communication strategies built to convert and retain.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Create targeted campaigns using customer behavior and purchase history.",
            "Offer personalized product recommendations and discounts.",
            "Incorporate loyalty programs, reviews, and referral systems.",
          ],
        },
      ],
    },
    "Payments & Analytics": {
      ref: useRef(null),
      subheading: "Secure transactions with actionable business intelligence",
      className: "payments-analytics",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Enable safe, fast payments while tracking business performance. From multi-currency support to advanced sales insights, we help you scale smartly and securely.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Integrate multiple payment gateways with fraud detection.",
            "Generate real-time dashboards for revenue, traffic, and conversion.",
            "Track refunds, taxes, and operational costs in one place.",
          ],
        },
      ],
    },
  };

  return (
    <>
      <h1>E-commerce</h1>
      <IndustryPageTemplate
        industry_name={"E-commerce"}
        industry_reason={
          "Turn Shoppers into Buyers—Faster\
Magic Chat adds live chat, AI support, and conversion-focused automation across your e-commerce funnel. From product discovery to cart recovery, we help you answer questions instantly, reduce bounce, and boost checkout rates—with zero developer dependency."
        }
      />
    </>
  );
}
