"use client";
import { useRef } from "react";
import BannerSection from "../../BannerSection";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import ProtectBusiness from "../../ProtectBusiness";
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

const travelData = [
  {
    subheading: "Travel Planning App Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We build intuitive travel planning apps that allow users to research destinations, create personalized itineraries, and manage trip details all in one place. Features include smart recommendations, collaborative trip planning, and offline accessibility.",
      },
    ],
  },
  {
    subheading: "Travel Booking App Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Develop seamless booking platforms for flights, hotels, car rentals, and more. Our solutions support secure payments, dynamic pricing, booking history, and real-time availability to deliver a smooth user experience.",
      },
    ],
  },
  {
    subheading: "Travel CRM Software Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Custom CRM solutions tailored for travel agencies and tour operators. Manage leads, customer profiles, preferences, communication, and bookings efficiently to build stronger relationships and boost repeat business.",
      },
    ],
  },
  {
    subheading: "Travel Agent Management Systems",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Empower your agency with robust tools to manage agents, commissions, bookings, and performance tracking. Our platform supports multi-agent workflows and role-based dashboards to streamline operations and accountability.",
      },
    ],
  },
  {
    subheading: "Travel Check-in and Boarding Software Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Streamline passenger check-in and boarding with digital solutions. Enable self-service kiosks, mobile boarding passes, real-time notifications, and integration with airline and transportation systems for faster processing and better travel experiences.",
      },
    ],
  },
  {
    subheading: "AR-Powered Destination Previews",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Use augmented reality to offer immersive previews of travel destinations. From virtual walking tours to interactive landmarks, AR enhances user engagement and helps travelers explore places before booking.",
      },
    ],
  },
];

export default function Travel() {
  const travleSection = {
    "Production Planning": {
      ref: useRef(null),
      subheading: "Optimizing tour package creation and service coordination",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We help travel businesses plan and schedule offerings with precision. Whether you're organizing multi-leg trips, seasonal packages, or group tours, our tools streamline coordination across departments and vendors.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Plan and manage seasonal and promotional travel packages.",
            "Coordinate vendor timelines, bookings, and service delivery.",
            "Forecast demand for better resource and staff allocation.",
          ],
        },
      ],
    },
    "Inventory Management": {
      ref: useRef(null),
      subheading: "Track and manage travel resources in real time",
      className: "voice-video",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We provide inventory management solutions tailored for the travel industry. Track available flights, hotel rooms, rental vehicles, or tour slots in real time and avoid overbooking or underselling.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Centralized dashboard to manage all inventory sources.",
            "Real-time availability updates across all sales channels.",
            "Dynamic pricing and allocation based on demand and seasonality.",
          ],
        },
      ],
    },
    "Supply Chain Management": {
      ref: useRef(null),
      subheading: "Seamless coordination across your travel ecosystem",
      className: "scale-millions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We simplify the complexity of managing multiple suppliers, agents, and vendors. Our SCM solutions enable you to streamline procurement, logistics, and partner integrations for smoother travel operations.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Integrate with third-party hotel, transport, and activity providers.",
            "Track partner performance, fulfillment, and delivery quality.",
            "Automate invoicing, confirmations, and documentation flows.",
          ],
        },
      ],
    },
    "Finance Management": {
      ref: useRef(null),
      subheading: "Gain complete visibility into your financial operations",
      className: "moderation-control",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We offer tailored financial tools to manage travel agency cash flow, bookings, refunds, and commissions. Our solutions give you control over your revenue streams and operational costs.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Track revenue from bookings, add-ons, and upsells.",
            "Manage customer payments, agent commissions, and vendor payouts.",
            "Generate financial reports, forecasts, and budget planning dashboards.",
          ],
        },
      ],
    },
  };

  const toolsItems = [
    {
      title: "User Management",
      subheading: "Full control over users and access levels",
      content:
        "Admins can view, manage, suspend, or delete users. Set roles and permissions to ensure secure and streamlined access control across the chat system.",
      image: `${basePath}/Asset/ai_power.png`,
    },
    {
      title: "Message Moderation",
      subheading: "Detect and handle inappropriate behavior",
      content:
        "Real-time monitoring of messages with keyword filters, reporting systems, and auto-flagging. Enable proactive moderation with full admin visibility into flagged content.",
      image: `${basePath}/Asset/notification_img.png`,
    },
    {
      title: "Analytics & Reporting",
      subheading: "Actionable data on chat activity",
      content:
        "Track key metrics like engagement, response time, and sentiment. Generate custom reports to optimize user experience and identify opportunities for improvement.",
      image: `${basePath}/Asset/webhooks_img.png`,
    },
  ];

  const travelObj = [
    {
      subheading: "Secure Booking Infrastructure",
      image: `${basePath}/Asset/userInterface.png`,
      content: [
        {
          type: "p",
          text: "We build secure, PCI-compliant booking systems that protect customer data and payment transactions at every step. Our infrastructure is designed for performance and peace of mind.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "End-to-end encryption of customer and transaction data",
            "Integration with trusted payment gateways and fraud protection",
            "Compliance with PCI-DSS and data protection laws (e.g., GDPR)",
            "Protection against double bookings and data inconsistency",
            "Regular audits and updates to maintain system security",
          ],
        },
      ],
    },
    {
      subheading: "Risk & Compliance Management",
      image: `${basePath}/Asset/interoperability.png`,
      content: [
        {
          type: "p",
          text: "Our travel platforms include tools to ensure regulatory compliance and operational safety, helping you stay protected against legal, financial, and reputational risks.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Automated compliance with visa, insurance, and travel policies",
            "Real-time updates on global travel restrictions and advisories",
            "Integrated legal documentation for tours, bookings, and cancellations",
            "Custom user roles to control access and responsibility",
            "Audit trails and logs for all key platform interactions",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <h1>Travel</h1>
      <BannerSection
        icon={HeartIcon}
        label="Travel"
        heading="Travel AppDevelopment Services"
        description="Enhance the user experience for your clients by collaborating with us to develop high-performing, scalable, and secure travel software applications."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="Reasons Why Magic Chat is the Ideal Travel Technology Partner for You."
        description="At Magic Chat Technologies, we help travel businesses thrive with innovative digital solutions that simplify trip planning, enhance customer engagement, and streamline operations through secure, scalable, and user-centric platforms."
        sections={travleSection}
      />

      <BuildShipManageCards
        title="Travel Software and Application Development Solutions That Create Impact."
        subtitle="We specialize in creating tailored travel applications and software equipped with a variety of features designed to facilitate a seamless travel experience."
        sections={travelData}
      />

      <ProtectBusiness
        title="Protect Your Travel Business with Secure and Intelligent Solutions"
        description="Magic Chat Technologies provides secure, compliant, and future-ready solutions for the travel industry—ensuring safe operations while you focus on delivering great travel experiences."
        sections={travelObj}
      />

      <AccordionSection
        heading="Powerful Admin Tools for Chat Oversight and Optimization"
        description="Easily manage your chat platform with powerful admin tools for user control, real-time moderation, and actionable insights—all in one place."
        items={toolsItems}
        defaultOpenIndex={0}
        showImage={true}
      />
    </>
  );
}
