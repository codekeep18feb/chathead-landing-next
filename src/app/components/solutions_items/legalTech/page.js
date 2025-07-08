"use client";
import { useRef } from "react";
import AccordionSection from "../../AccordionSection";
import BannerSection from "../../BannerSection";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import ProtectBusiness from "../../ProtectBusiness";

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

const legalItems = [
  {
    title: "Contract Intelligence",
    subheading: "AI-powered contract review and analysis",
    content:
      "Streamline legal workflows by automatically analyzing contracts for key clauses, risks, and compliance issues. Accelerate review processes with intelligent clause extraction and red-flag detection.",
    image: `${basePath}/Asset/ai_power.png`,
  },
  {
    title: "Case Management",
    subheading: "Organize, track, and manage legal cases efficiently",
    content:
      "Centralize all case-related data, documents, and timelines in one platform. Automate routine tasks, set reminders, and collaborate securely across legal teams.",
    image: `${basePath}/Asset/notification_img.png`,
  },
  {
    title: "Regulatory Compliance",
    subheading: "Stay updated and compliant with changing laws",
    content:
      "Monitor regulatory updates in real time and ensure your legal operations align with current frameworks. Receive automated alerts, generate compliance reports, and mitigate legal risk.",
    image: `${basePath}/Asset/webhooks_img.png`,
  },
];

const legalObj = [
  {
    subheading: "AI-Powered Contract Analysis",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "Leverage artificial intelligence to review and analyze contracts faster and more accurately. Our systems detect key clauses, highlight risks, and ensure compliance with legal standards.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Automatically extract and classify clauses in seconds",
          "Identify red flags, missing terms, and risk factors",
          "Compare contracts against industry standards and templates",
          "Track version history and collaborative edits",
          "Accelerate review cycles with smart recommendations",
        ],
      },
    ],
  },
  {
    subheading: "Regulatory Compliance & Risk Management",
    image: `${basePath}/Asset/interoperability.png`,
    content: [
      {
        type: "p",
        text: "Stay aligned with evolving laws using built-in compliance tools and risk dashboards. Our legal tech solutions help prevent violations and streamline regulatory reporting.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Monitor changing regulations in real-time across regions",
          "Automated alerts for compliance deadlines and updates",
          "Built-in reporting tools for audits and legal reviews",
          "Role-based controls to enforce compliance workflows",
          "Comprehensive risk logs and documentation history",
        ],
      },
    ],
  },
];

export default function LegalTech() {
  const legalSection = {
    "Document Management": {
      ref: useRef(null),
      subheading: "Centralized control over legal files and contracts",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Organize, store, and access case files, contracts, and legal documents in one secure platform. Our solution helps reduce paperwork, improve retrieval time, and ensure version control.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Centralized storage with advanced search and tagging features.",
            "Version control to track document edits and changes.",
            "Role-based access for sensitive legal documents.",
          ],
        },
      ],
    },
    "Case Workflow Automation": {
      ref: useRef(null),
      subheading: "Streamlining legal processes from intake to closure",
      className: "voice-video",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Automate and manage legal workflows such as client intake, case tracking, hearing schedules, and communication logs. Improve efficiency and reduce human error across your operations.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Automated reminders for deadlines, hearings, and filings.",
            "Drag-and-drop interface for setting up custom workflows.",
            "Case lifecycle tracking with real-time updates.",
          ],
        },
      ],
    },
    "Compliance & Risk Monitoring": {
      ref: useRef(null),
      subheading: "Stay ahead of legal regulations and reduce exposure",
      className: "scale-millions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Ensure your firm stays compliant with evolving regulations and industry standards. Our solution helps monitor risk, track policy changes, and provide real-time alerts for legal updates.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Automated compliance alerts and audit trails.",
            "Real-time regulatory updates across jurisdictions.",
            "Risk dashboards to monitor case-related vulnerabilities.",
          ],
        },
      ],
    },
    "Billing & Time Tracking": {
      ref: useRef(null),
      subheading: "Accurate billing and transparent time logs",
      className: "moderation-control",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Track billable hours, generate invoices, and manage retainers effortlessly. Our tools ensure lawyers and firms are compensated accurately while maintaining client trust.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Track time entries linked to cases and tasks.",
            "Generate itemized invoices and monitor payments.",
            "Manage retainers, expenses, and client billing cycles.",
          ],
        },
      ],
    },
  };
  
  return (
    <>
      <h1>Legal Tech</h1>
      <BannerSection
        icon={HeartIcon}
        label="Dating"
        heading="Create a safe, secure and positive messaging environment for your
              users"
        description="Messaging experience that seamlessly scales from thousands to
              millions of users. Leverage AI-powered moderation to prevent and
              manage inappropriate user behaviors."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/matrimony_banner.png`}
        altText="Chat Solution"
      />

    <FeatureSectionWrapper
        title="Reasons Why Magic Chat is the Ideal Travel Technology Partner for You."
        description="At Magic Chat Technologies, we help travel businesses thrive with innovative digital solutions that simplify trip planning, enhance customer engagement, and streamline operations through secure, scalable, and user-centric platforms."
        sections={legalSection}
      />

      <ProtectBusiness
        title="Smart Legal Tech Solutions for Compliance and Efficiency"
        description="Enhance legal operations with AI-driven tools for contract analysis, risk management, and regulatory compliance—built for speed, accuracy, and peace of mind."
        sections={legalObj}
      />
      <AccordionSection
        heading="Empowering Legal Teams with Smart Tech Solutions"
        description="Streamline legal operations and boost compliance with smart tech solutions like AI contract analysis, case management, and real-time regulatory tracking."
        items={legalItems}
        defaultOpenIndex={0}
        showImage={true}
      />
    </>
  );
}
