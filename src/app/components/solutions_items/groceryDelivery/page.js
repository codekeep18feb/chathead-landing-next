"use client";
import { useRef } from "react";
import BannerSection from "../../BannerSection";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import TimeTestedComp from "../../TimeTestedComp";
import FeaturesIntegrations from "../../FeaturesIntegrations";
import AccordionSection from "../../AccordionSection";

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
const whyChooseYouGrocery = [
  {
    subheading: "Grocery Domain Expertise",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our team understands the unique challenges of grocery delivery—such as perishable inventory, real-time stock updates, and fast fulfillment—to deliver optimal solutions.",
      },
    ],
  },
  {
    subheading: "Intuitive Shopper Experience",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We design smooth, clutter-free interfaces that allow users to quickly browse, add to cart, and checkout—making shopping effortless across devices.",
      },
    ],
  },
  {
    subheading: "Smart Delivery Management",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our systems include intelligent delivery slot selection, route optimization, and real-time tracking—ensuring groceries arrive fresh and on time.",
      },
    ],
  },
  {
    subheading: "Inventory & Order Accuracy",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We integrate advanced inventory management tools that sync product availability, automate substitutions, and reduce out-of-stock frustrations.",
      },
    ],
  },
  {
    subheading: "Secure Payments & Compliance",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "All transactions are encrypted and compliant with PCI-DSS standards. We offer seamless integrations with major gateways and wallets.",
      },
    ],
  },
  {
    subheading: "Post-launch Support & Scaling",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We provide continuous support, app updates, and scaling strategies to accommodate growing demand and evolving market trends.",
      },
    ],
  },
];

const groceryCardsData = [
  {
    number: "01",
    heading: "Requirement Analysis & Market Fit",
    description:
      "We begin by understanding your business model—whether hyperlocal or nationwide. We research competitor apps, delivery models, and customer behavior to ensure your app fits the market and meets user expectations.",
  },
  {
    number: "02",
    heading: "User-centric Design & Prototyping",
    description:
      "Our design team creates intuitive, clutter-free interfaces that simplify the entire shopping experience—from browsing to checkout. Prototypes help you visualize the full flow before development.",
  },
  {
    number: "03",
    heading: "Robust Tech Stack & System Architecture",
    description:
      "We choose the best tech stack for real-time order management, scalable delivery logistics, and secure payments. A strong back-end ensures performance even during peak hours.",
  },
  {
    number: "04",
    heading: "Custom Development & Module Integration",
    description:
      "We build custom features like scheduled delivery, live tracking, smart carts, and loyalty systems. We also integrate with ERPs, payment gateways, and third-party logistics for seamless operations.",
  },
  {
    number: "05",
    heading: "End-to-End Testing & Optimization",
    description:
      "Your app undergoes thorough functional, UI, and performance testing across devices. We ensure a glitch-free experience with optimized loading speed, data accuracy, and compliance.",
  },
  {
    number: "06",
    heading: "Deployment & Continuous Support",
    description:
      "We manage deployment to app stores or your servers and offer continuous support for feature upgrades, bug fixes, and performance improvements as your business grows.",
  },
];

const groceryFeatures = [
  {
    subheading: "User Management",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Quick signup with phone or email",
          "Profile and address book management",
          "Order history and reordering options",
          "Wishlist and recently viewed products",
          "In-app support chat or help center",
        ],
      },
    ],
  },
  {
    subheading: "Product & Inventory",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Categorized product listing",
          "Real-time stock updates",
          "Search with filters (brand, price, dietary tags)",
          "Pricing, discounts, and offers",
          "Out-of-stock alerts and smart substitutions",
        ],
      },
    ],
  },
  {
    subheading: "Cart & Checkout Experience",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Multi-item cart with quantity controls",
          "Apply coupons, promo codes, or loyalty points",
          "Multiple address and delivery slot selection",
          "Billing summary with tax & delivery fee breakdown",
          "Instant or scheduled delivery options",
        ],
      },
    ],
  },
  {
    subheading: "Delivery & Order Tracking",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Real-time order tracking",
          "Live location of delivery agent",
          "Delivery OTP and proof capture",
          "Route optimization for agents",
          "Push/SMS/email status updates",
        ],
      },
    ],
  },
  {
    subheading: "Payments & Invoicing",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Integration with major payment gateways",
          "Support for UPI, cards, wallets, COD",
          "Instant refund processing",
          "Invoice auto-generation",
          "Multi-currency and tax calculation",
        ],
      },
    ],
  },
  {
    subheading: "Admin Dashboard",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Real-time order & revenue overview",
          "User and delivery agent management",
          "Product/category editing tools",
          "Discount & promo configuration",
          "Performance metrics and analytics",
        ],
      },
    ],
  },
  {
    subheading: "Ratings, Feedback & Retention",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Rate products and delivery experience",
          "Review moderation panel",
          "Loyalty and referral programs",
          "Personalized offers via behavior tracking",
          "Push notification campaigns",
        ],
      },
    ],
  },
];

const groceryItems = [
  {
    title: "Real-Time Inventory Sync",
    subheading: "Stay updated with live stock visibility",
    content:
      "Ensure product availability is always accurate with real-time inventory updates across stores. Minimize cart abandonment due to out-of-stock items and improve operational efficiency.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Smart Delivery Scheduling",
    subheading: "Flexible delivery slots that fit user convenience",
    content:
      "Allow users to choose preferred delivery slots based on location and availability. Enable dynamic slot management to optimize fleet routes and reduce missed deliveries.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Personalized Shopping Experience",
    subheading: "Drive retention with tailored product suggestions",
    content:
      "Use customer behavior data to suggest frequently bought items, offer smart reordering, and show personalized deals—making shopping faster and more relevant.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
];

export default function GroceryDelivery() {
  const grocerySection = {
    "Inventory Management": {
      ref: useRef(null),
      subheading: "Real-time stock visibility and perishables tracking",
      className: "inventory-management",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Manage perishable goods efficiently with dynamic inventory updates and shelf-life monitoring. We help you reduce waste and ensure product availability for high-demand items.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Track expiry dates and batch-level stock in real-time.",
            "Enable alerts for low stock and reorder thresholds.",
            "Support multiple units (weight, quantity, packs) with flexible pricing.",
          ],
        },
      ],
    },
    "Order & Delivery Optimization": {
      ref: useRef(null),
      subheading: "Fast, accurate delivery tailored for local logistics",
      className: "order-delivery",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Optimize order routing, delivery slots, and driver dispatch for hyperlocal grocery delivery. Ensure freshness and accuracy in every order, every time.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Real-time delivery tracking with ETA updates and OTP verification.",
            "Support for time-slot based and same-day delivery.",
            "Dynamic routing for multiple orders, zones, and warehouses.",
          ],
        },
      ],
    },
    "Customer Experience": {
      ref: useRef(null),
      subheading: "Frictionless shopping with reordering and personalization",
      className: "customer-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Make grocery shopping easier with features that keep customers coming back. From personalized deals to quick reorders, improve satisfaction and convenience.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Smart reordering from previous purchase history.",
            "Personalized offers, deals, and product bundles.",
            "Rating system for products and delivery experience.",
          ],
        },
      ],
    },
    "Payments & Insights": {
      ref: useRef(null),
      subheading: "Secure checkouts and actionable grocery trends",
      className: "payments-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Enable secure, quick payments and gain insights into shopping habits, order patterns, and delivery performance for continuous optimization.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Multi-mode payments: UPI, COD, cards, and wallets.",
            "Customer and order analytics across categories and regions.",
            "Refunds, discounts, and invoice management made easy.",
          ],
        },
      ],
    },
  };

  return (
    <>
      <h1>Grocery-Delivery</h1>
      <BannerSection
        icon={HeartIcon}
        label="Grocery-Delivery"
        heading="Create a safe, secure and positive messaging environment for your
              users"
        description="Messaging experience that seamlessly scales from thousands to
              millions of users. Leverage AI-powered moderation to prevent and
              manage inappropriate user behaviors."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="Smart Grocery Delivery Solutions for Fast, Fresh & Reliable Service"
        description="We build end-to-end grocery delivery platforms that manage inventory, optimize deliveries, and create delightful shopping experiences—designed for modern consumers and local businesses alike."
        sections={grocerySection}
      />

      <BuildShipManageCards
        title="Why choose Magic Chat to build your Grocery Delivery app?"
        subtitle="At Magic Chat, we specialize in developing fast, user-friendly, and scalable grocery delivery solutions that keep your customers coming back."
        sections={whyChooseYouGrocery}
      />

      <TimeTestedComp
        title="Our eCommerce Development Process"
        subtitle="Tailored to build scalable, secure, and high-converting shopping experiences."
        cardsData={groceryCardsData}
      />

      <FeaturesIntegrations
        title="Grocery Delivery App Features for Seamless Shopping & Fulfillment"
        description="We craft feature-rich grocery delivery applications that streamline shopping, inventory, payments, and delivery operations—ensuring a fast, fresh, and reliable experience for users and admins alike."
        sections={groceryFeatures}
      />

      <AccordionSection
        heading="Smarter tools for inventory, delivery, and user personalization"
        description="Enhance efficiency, boost customer satisfaction, and grow your grocery business with intelligent features"
        items={groceryItems}
        defaultOpenIndex={0}
        showImage={true}
      />
    </>
  );
}
