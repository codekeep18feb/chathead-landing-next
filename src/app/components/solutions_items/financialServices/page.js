"use client";
import AccordionSection from "../../AccordionSection";
import BannerSection from "../../BannerSection";
import FeaturesIntegrations from "../../FeaturesIntegrations";
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

const financeItems = [
  {
    title: "Compliance Insights",
    subheading: "Track and maintain regulatory compliance with ease",
    content:
      "Monitor and analyze user activity, transaction patterns, and policy updates to ensure your platform stays aligned with evolving financial regulations and standards.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Smart Notifications",
    subheading: "Timely alerts for payments, renewals & claims",
    content:
      "Send automated SMS, push, and email notifications to remind users about policy renewals, payment deadlines, claim updates, and important account changes.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Risk Monitoring",
    subheading: "Detect fraud and manage user risk proactively",
    content:
      "Get a centralized view of suspicious activity, flagged transactions, and compliance risks. Take immediate action with detailed logs and alerts that support quick resolution.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
];

const financeCardsData = [
  {
    number: "01",
    heading: "Needs Analysis & Compliance Research",
    description:
      "We begin by understanding your business model, financial products, and regulatory requirements. This helps us craft a solution that meets both user needs and strict industry compliance standards.",
  },
  {
    number: "02",
    heading: "User Experience Strategy & Wireframes",
    description:
      "Our team creates user-friendly designs tailored for financial tools, insurance plans, claims, and customer dashboards—ensuring accessibility, clarity, and trust in every interaction.",
  },
  {
    number: "03",
    heading: "Secure Architecture & Tech Stack Planning",
    description:
      "We plan the technical foundation with data security, scalability, and performance in mind. We select technologies that support encrypted transactions and sensitive data handling.",
  },
  {
    number: "04",
    heading: "Core Development & API Integrations",
    description:
      "We build reliable features like policy management, loan calculators, digital KYC, claims tracking, and more. We also integrate third-party APIs for payments, analytics, identity verification, and compliance tools.",
  },
  {
    number: "05",
    heading: "QA & Security Checks",
    description:
      "Every module is tested thoroughly for performance, security, and regulatory adherence. We perform penetration testing and validate data privacy protocols before launch.",
  },
  {
    number: "06",
    heading: "Deployment & Post-Launch Support",
    description:
      "Once deployed, we provide ongoing maintenance, monitor system performance, address updates, and roll out improvements based on customer feedback and evolving regulations.",
  },
];

const financeObj = [
  {
    subheading: "Robust & Compliant Infrastructure",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "We build secure, scalable platforms tailored for financial and insurance service providers—ensuring compliance with industry regulations and future-ready architecture.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Modular systems for policy management, claims, loans, and payments",
          "Scalable backend built for high-traffic and multi-region deployment",
          "Responsive and intuitive UI/UX for web and mobile platforms",
          "Integrated role-based access and audit trails for secure usage",
          "Support for multi-tenant environments and enterprise-grade SLAs",
        ],
      },
    ],
  },
  {
    subheading: "Secure Transactions & Regulatory Compliance",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "We ensure that your digital financial operations follow best-in-class security protocols while complying with regional and global regulations like PCI-DSS, HIPAA, or IRDAI.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "End-to-end encryption and secure data storage (AES-256, HTTPS)",
          "KYC, AML, and e-signature integrations for onboarding and compliance",
          "Integration with trusted payment gateways and core banking APIs",
          "Automated reporting systems for audits and internal review",
          "Fraud detection algorithms and secure claims or transaction workflows",
        ],
      },
    ],
  },
];

const financeFeatures = [
  {
    subheading: "Customer Management",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Client onboarding with KYC/AML",
          "User profile and account management",
          "Policy or account linking",
          "Secure document upload & verification",
          "Customer activity history",
        ],
      },
    ],
  },
  {
    subheading: "Security & Compliance",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "End-to-end encryption",
          "Multi-factor authentication",
          "Regulatory reporting (IRDAI, PCI, HIPAA)",
          "Fraud detection & alerts",
          "Access control and audit logs",
        ],
      },
    ],
  },
  {
    subheading: "Policy & Claims Management",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Policy creation and management",
          "Claim submission and tracking",
          "Document checklist automation",
          "Underwriting integration",
          "Renewal reminders and alerts",
        ],
      },
    ],
  },
  {
    subheading: "Payments & Transactions",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Premium collection & auto-debit setup",
          "Payouts for claims & reimbursements",
          "Invoice generation and tracking",
          "Integration with payment gateways & banks",
          "Multi-currency support",
        ],
      },
    ],
  },
];

export default function FinancialServices() {
  return (
    <>
      <h1>Financial-services</h1>
      <BannerSection
        icon={HeartIcon}
        label="Financial-services"
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
      <ProtectBusiness
        title="Financial & Insurance Apps for Security, Compliance, and Scale"
        description="We develop end-to-end financial and insurance service applications that meet strict regulatory standards while ensuring performance, flexibility, and trust—empowering providers to serve customers efficiently and securely."
        sections={financeObj}
      />
      <TimeTestedComp
        title="Smart Insurance Software Development"
        subtitle="Built for efficiency, regulatory compliance, and an exceptional user experience."
        cardsData={financeCardsData}
      />

      <FeaturesIntegrations
        title="Finance & Insurance Apps for Modern, Secure Service Delivery"
        description="We build robust financial and insurance mobile app solutions designed to simplify operations, ensure regulatory compliance, and deliver seamless, secure experiences across customer, claims, and transaction management."
        sections={financeFeatures}
      />

      <AccordionSection
        heading="Admin tools for compliance, customer insights, and risk control"
        description="Smarter operations, secure transactions, and better decision-making"
        items={financeItems}
        defaultOpenIndex={0}
        showImage={true}
      />
    </>
  );
}
