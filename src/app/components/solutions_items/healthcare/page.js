"use client";
import BannerSection from "../../BannerSection";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import { useRef } from "react";
import AccordionSection from "../../AccordionSection";
import ProtectBusiness from "../../ProtectBusiness";
import FeaturesIntegrations from "../../FeaturesIntegrations";

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

const sectionsData = [
  {
    subheading: "HIPAA-Compliant Software Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We specialize in developing HIPAA-compliant healthcare software that meets the strict privacy and security standards required by the healthcare industry. Our experienced developers ensure full adherence to HIPAA regulations, safeguarding patient data.",
      },
    ],
  },
  {
    subheading: "HIPAA-Compliant Software Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our development process is transparent and agile, allowing clients to track progress at each stage and provide feedback in real-time. Using DevOps and agile methodologies, we ensure efficient, flexible development cycles that quickly adapt to changing needs.",
      },
    ],
  },
  {
    subheading: "Innovative Solutions",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We leverage the latest technologies to build innovative healthcare software solutions that enhance patient care and simplify health management. By selecting the most appropriate tech stack, we create custom solutions that are functional and future-proof.",
      },
    ],
  },
  {
    subheading: "Logically Designed Architecture",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We prioritize well-planned, secure software architecture tailored to your business needs. Whether opting for monolithic or microservice architectures, our focus is on ensuring security, performance, and time efficiency for end users.",
      },
    ],
  },
  {
    subheading: "Superior Code Quality",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We focus on delivering high-quality code that ensures performance, security, and minimal maintenance. Our commitment to superior coding practices results in stable software that reduces the need for patches and enhances user satisfaction.",
      },
    ],
  },
  {
    subheading: "Flexible Engagement Models",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We offer customizable engagement models to suit the unique needs of our clients. Whether you need end-to-end development or specific services, our flexible approach ensures the best outcomes for your healthcare software solutions.",
      },
    ],
  },
];

const items = [
  {
    title: "Startups",
    subheading: "Digital Health Startups",
    content:
      "Partner with us for telehealth systems, wellness tech like Femtech and Baby Tech, and software for diagnostic and assistive devices.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Providers",
    subheading: "Healthcare Providers",
    content:
      "We deliver tailored solutions such as EMR/EHR systems, practice and lab management tools, hospital asset tracking, RPM platforms, POC applications, and PHM systems.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Manufacturers",
    subheading: "Medical Device Manufacturers",
    content:
      "We develop embedded systems, cloud/mobile solutions, and AI-powered analytics to enhance hospital-grade and consumer medical devices.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
  {
    title: "Pharma & Biotech",
    subheading: "Software Solutions for Life Sciences",
    content:
      "We provide custom software for clinical trials, drug development, production, and distribution, including ERP, data visualization, and integrated systems.",
    image: `${basePath}/Asset/banner_placeholder.png`,
  },
];

const business = [
  {
    subheading: "User-Friendly Interface",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "Our UI/UX experts design intuitive interfaces, ensuring ease of use for both healthcare providers and patients.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Intuitive navigation for faster adoption by clinicians and patients",
          "Responsive and accessible design across all devices",
          "Minimal learning curve with clean, user-friendly layouts",
          "Role-based interfaces tailored for doctors, nurses, admins, and patients",
          "Clear feedback and error handling to reduce user mistakes",
        ],
      },
    ],
  },
  {
    subheading: "Interoperability",
    image: `${basePath}/Asset/interoperability.png`,
    content: [
      {
        type: "p",
        text: "Our solutions integrate smoothly with existing systems, enabling efficient data exchange across applications and devices.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Seamless integration with EHR, EMR, and HIS systems",
          "Support for HL7, FHIR, and other healthcare data standards",
          "Real-time data exchange between devices and platforms",
          "API-driven architecture for flexible system connectivity",
          "Improved care coordination through unified patient records",
        ],
      },
    ],
  },
];

const features = [
  {
    subheading: "End-to-End Development",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Ideation to implementation",
          "User-centric UI/UX design",
          "Agile software development",
          "Rigorous testing & QA",
          "Deployment and ongoing support"
        ],
      },
    ],
  },
  {
    subheading: "Flexible Engagement Models",
    // image: `${basePath}/Asset/secureIc.png`,
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Fixed-price project delivery",
          "Dedicated development teams",
          "Time and material contracts",
          "Scalable resource allocation",
          "Custom engagement structures"
        ],
      },
    ],
  },
  {
    subheading: "Quality Assurance and Support",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Comprehensive QA testing",
          "Bug-free software delivery",
          "Security and performance checks",
          "Ongoing support and maintenance",
          "Regular updates and monitoring"
        ],
      },
    ],
  },
  {
    subheading: "Rapid Time-to-Market",
    content: [
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Agile development approach",
          "Accelerated project delivery",
          "Experienced healthcare experts",
          "Streamlined deployment process",
          "Faster launch, competitive edge"
        ],
      },
    ],
  },
];

export default function HealthcareTelehealth() {
  const healthSection = {
    "Software Consulting": {
      ref: useRef(null),
      subheading: "Intuitive and user friendly chat experience",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We provide expert consulting to navigate the complexities of healthcare software development. Our strategic insights help leverage advanced technologies to improve operational efficiency and patient outcomes.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Evaluate current systems and workflows to identify areas of digital improvement.",
            "Get strategic guidance on compliance with HIPAA and other healthcare regulations.",
            "Define a scalable technology roadmap that aligns with your business goals.",
          ],
        },
      ],
    },
    "Custom Healthcare Software Development": {
      ref: useRef(null),
      subheading: "Native calling for seamless communication",
      className: "voice-video",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We deliver tailored software solutions that enhance patient care and ensure better medical outcomes. With extensive experience, we create intuitive, high-quality systems to meet the unique needs of the healthcare industry.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Develop EHR, EMR, telemedicine, and patient management platforms.",
            "Ensure user-centric UI/UX design for clinical and patient-facing apps.",
            "Implement secure and scalable architectures for long-term growth.",
          ],
        },
      ],
    },
    "Software Integration": {
      ref: useRef(null),
      subheading: "Send location cards to minimize back and forth",
      className: "scale-millions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We ensure seamless integration of healthcare systems to enhance interoperability and streamline data exchange. Our solutions reduce silos, improve functionality, and create a cohesive healthcare ecosystem.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Integrate with EHRs, billing systems, labs, and third-party APIs.",
            "Use HL7, FHIR, and other standards to ensure data compatibility.",
            "Enable real-time communication between internal and external systems.",
          ],
        },
      ],
    },
    "Software Product Development": {
      ref: useRef(null),
      subheading: "Manage delivery operations",
      className: "moderation-control",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We offer end-to-end software product development, from concept to deployment. Our solutions are scalable, secure, and innovative, meeting industry needs while driving better healthcare outcomes.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Transform healthcare ideas into market-ready SaaS products.",
            "Build MVPs to validate use cases before full-scale development.",
            "Ensure compliance, scalability, and cloud-native infrastructure.",
          ],
        },
      ],
    },
    "Data Analytics Solutions": {
      ref: useRef(null),
      subheading: "Centralize all customer touch points",
      className: "monetize-chat",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Unlock actionable insights with healthcare data analytics. Our experts build scalable data warehouses, integrate OLAP analytics, and leverage AI-driven tools to analyze diagnostic, operational, and sales data—helping you make data-driven decisions efficiently.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Monitor patient trends and clinical performance in real time.",
            "Use predictive analytics to forecast outcomes and resource needs.",
            "Integrate dashboards for unified reporting across departments.",
          ],
        },
      ],
    },
  };

  return (
    <>
      <h1>Healthcare & Telehealth</h1>
      <BannerSection
        icon={HeartIcon}
        label="Healthcare & Telehealth"
        heading="Healthcare App Development Services"
        description="Enhance health outcomes, empower patient education, and streamline workflows with Magic chat's healthcare software development services, designed to align with industry-specific data and security standards."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/banner_placeholder.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="Healthcare Software Development Services"
        description="At Magic chat Technologies, we deliver custom healthcare software solutions that enhance patient care, streamline workflows, and improve operational efficiency with advanced, scalable, and secure technologies."
        sections={healthSection}
      />

      <BuildShipManageCards
        title="Your Trusted Partner for Healthcare Software Development Services"
        subtitle="At Magic chat Technologies, we provide end-to-end custom healthcare software development services, from prototyping to design, development, and deployment. We integrate user-centric design principles at every stage, creating intuitive interfaces for both medical professionals and patients."
        sections={sectionsData}
      />

      <AccordionSection
        heading="Healthcare Software Development for Every Need"
        description="End-to-end healthcare software solutions for providers, pharma, medtech, and digital health—secure, interoperable, and user-centric."
        items={items}
        defaultOpenIndex={0}
        showImage={true}
      />

      <ProtectBusiness
        title="Key Features of Our Healthcare Software Solutions"
        description="Turn raw data into actionable insights with our end-to-end analytics solutions—optimize operations, make smarter decisions, and stay competitive."
        sections={business}
      />

      <FeaturesIntegrations
        title="Why Healthcare Organizations Choose Magic Chat"
        description="A flexible, cost-effective platform built for car rental businesses—manage regional operations, supplier networks, and customer service with ease, whether you're a startup or a large aggregator."
        sections={features}
      />
    </>
  );
}
