"use client";
import { useRef } from "react";
import BannerSection from "../../BannerSection";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import { MdOutlineSecurity } from "react-icons/md";
import BuildShipManageCards from "../../buildShipManageCards";
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

export default function RealEstate() {
  const realEstateSection = {
    "Experienced Team": {
      ref: useRef(null),
      subheading: "Industry experts delivering smart real estate solutions",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Our team consists of seasoned professionals with deep expertise in real estate software development. We bring industry knowledge, technical excellence, and a problem-solving mindset to every project.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Expertise in residential, commercial, and rental property platforms.",
            "Decades of combined experience in real estate technology.",
            "Collaborative approach with agile project delivery.",
          ],
        },
      ],
    },
    "Client Data Security": {
      ref: useRef(null),
      subheading: "Safeguarding sensitive information with advanced security",
      className: "voice-video",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We prioritize client and user data protection through robust encryption, secure infrastructure, and best practices in cybersecurity—ensuring full confidentiality across all digital channels.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Implement end-to-end encryption for user data and transactions.",
            "Ensure GDPR compliance and data privacy policies.",
            "Role-based access controls and multi-layer authentication.",
          ],
        },
      ],
    },
    "On Time Delivery": {
      ref: useRef(null),
      subheading: "Reliable timelines with no compromise on quality",
      className: "scale-millions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Timely delivery is core to our development approach. We follow agile workflows and strict project management standards to meet your deadlines and ensure successful product launches.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Clear project milestones and delivery schedules.",
            "Real-time tracking and communication at every stage.",
            "Dedicated teams committed to your timeline goals.",
          ],
        },
      ],
    },
    "Impeccable Experience": {
      ref: useRef(null),
      subheading: "Delivering seamless digital journeys for buyers and sellers",
      className: "moderation-control",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We create feature-rich, user-focused real estate platforms that enhance engagement and simplify complex property transactions. Every touchpoint is designed to elevate the digital experience.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Design intuitive interfaces for property search and management.",
            "Integrate 3D tours, maps, and smart filters for better discovery.",
            "Enable seamless communication between buyers, sellers, and agents.",
          ],
        },
      ],
    },
  };

  const sectionsData = [
    {
      subheading: "Real Estate App Consultation",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Expert guidance on transforming your real estate business into a digital solution. From app concept ideation to feasibility analysis, receive detailed insights on market trends, user needs, and technology recommendations.",
        },
      ],
    },
    {
      subheading: "Custom Real Estate App Development",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Tailored app solutions designed to fit unique business models. Build a custom app with features such as property listings, search filters, virtual tours, and booking integrations that resonate with your brand and audience.",
        },
      ],
    },
    {
      subheading: "Property Listing & Management Solutions",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Develop a seamless system for adding, updating, and managing property listings. Empower realtors, agencies, or property managers to update listings with images, descriptions, amenities, and pricing effortlessly.",
        },
      ],
    },
    {
      subheading: "Real-Time Chat & Communication Tools",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Integrated messaging features to facilitate instant communication between buyers, sellers, and agents. Includes chat, voice calls, and video calls, allowing for smooth, efficient interaction within the app.",
        },
      ],
    },
    {
      subheading: "App Maintenance & Support",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Continuous app monitoring, updates, and technical support to ensure seamless performance. Maintenance services include bug fixes, feature enhancements, and OS compatibility updates.",
        },
      ],
    },
    {
      subheading: "Augmented Reality (AR) & Virtual Tours",
      icon: <MdOutlineSecurity />,
      content: [
        {
          type: "p",
          text: "Provide immersive property tours through AR and virtual reality, allowing users to explore properties remotely. This solution supports 3D tours, panoramic views, and virtual staging to showcase properties effectively.",
        },
      ],
    },
  ];

  return (
    <>
      <h1>Real-estate</h1>
      <BannerSection
        icon={HeartIcon}
        label="Real Estate"
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
        title="Reasons Why Magic Chat is the Perfect Real Estate Technology Partner for You."
        description="At Magic Chat Technologies, we empower real estate businesses with cutting-edge software solutions that optimize operations, enhance client experiences, and streamline property management through scalable, secure, and innovative technologies."
        sections={realEstateSection}
      />

      <BuildShipManageCards
        title="Real estate Website and Application Development Solutions That Create Impact."
        subtitle="We specialize in creating tailored Real estate applications and Website equipped with a variety of features designed to facilitate a seamless Real estate experience."
        sections={sectionsData}
      />

      <TimeTestedComp />
    </>
  );
}
