"use client";
import { useRef } from "react";
import BannerSection from "../../BannerSection";
import FeatureSectionWrapper from "../../FeatureSectionWrapper";
import BuildShipManageCards from "../../buildShipManageCards";
import { MdOutlineSecurity } from "react-icons/md";
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

const whyChoose = [
  {
    subheading: "Agile Development",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We follow agile development practices to ensure rapid iterations, continuous improvements, and adaptive planning. This approach enables us to respond quickly to evolving project requirements and client feedback.",
      },
    ],
  },
  {
    subheading: "On-Time Delivery",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our proven project management methodology ensures that we meet deadlines without compromising on quality. We set realistic timelines and milestones to keep your software development on track and within budget.",
      },
    ],
  },
  {
    subheading: "Dedicated In-House Team",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "Our in-house team of developers, designers, QA specialists, and project managers work collaboratively to deliver cohesive and efficient solutions. You get direct access to talent committed exclusively to your project’s success.",
      },
    ],
  },
  {
    subheading: "Continuous Support",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We offer ongoing maintenance, updates, and technical support to ensure your software stays secure, up-to-date, and optimized for performance. Our support extends beyond delivery to foster long-term success.",
      },
    ],
  },
  {
    subheading: "Cost-Effective Solutions",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We deliver value-driven solutions that align with your budget and business goals. Our efficient workflows, scalable architecture, and reusable components help reduce costs without sacrificing quality.",
      },
    ],
  },
  {
    subheading: "Transparent Process",
    icon: <MdOutlineSecurity />,
    content: [
      {
        type: "p",
        text: "We maintain full transparency throughout the development cycle, providing regular updates, clear documentation, and open communication. This builds trust and ensures alignment at every stage of the project.",
      },
    ],
  },
];

const eLearning = [
  {
    subheading: "Admin Panel",
    image: `${basePath}/Asset/userInterface.png`,
    content: [
      {
        type: "p",
        text: "A powerful and intuitive admin panel to manage courses, users, payments, and platform settings with full control and visibility.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Add, edit, or remove courses and manage course categories",
          "Monitor student progress and tutor activity in real time",
          "Manage users, roles, and access permissions effortlessly",
          "Track revenue, subscriptions, and payment history",
          "Send announcements and updates via in-app notifications or emails",
        ],
      },
    ],
  },
  {
    subheading: "Tutor Dashboard",
    image: `${basePath}/Asset/interoperability.png`,
    content: [
      {
        type: "p",
        text: "An intuitive dashboard for tutors to manage their content, track student performance, and communicate effectively with learners.",
      },
      {
        type: "group",
        className: "normal-text",
        texts: [
          "Upload and organize course materials (videos, PDFs, quizzes)",
          "Track student attendance, progress, and engagement",
          "Respond to student questions and feedback via chat or discussion boards",
          "View performance analytics and course ratings",
          "Schedule live sessions and automate assessments",
        ],
      },
    ],
  },
];


export default function OnlineEducation() {
  const educationSection = {
    "Online Training Apps": {
      ref: useRef(null),
      subheading: "Interactive learning experiences anytime, anywhere",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We build robust online training applications that empower learners and educators with flexible, engaging, and scalable e-learning solutions. Our platforms support multimedia content, assessments, and real-time collaboration.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Create responsive platforms for mobile, tablet, and desktop.",
            "Include video lectures, quizzes, assignments, and certifications.",
            "Enable live sessions, chat support, and performance tracking.",
          ],
        },
      ],
    },
    "School App Development": {
      ref: useRef(null),
      subheading: "Simplify school operations with custom mobile solutions",
      className: "voice-video",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "We design school apps that streamline administration, communication, and classroom engagement. From attendance tracking to parent-teacher messaging, we provide comprehensive tools to improve school management.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Develop portals for students, teachers, parents, and admins.",
            "Automate attendance, timetable, homework, and grading systems.",
            "Enable push notifications, fee management, and event calendars.",
          ],
        },
      ],
    },
    "E2C E-Learning App Development": {
      ref: useRef(null),
      subheading: "Deliver personalized learning paths at scale",
      className: "scale-millions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Our end-to-consumer (E2C) e-learning apps are designed to help educators and companies directly reach learners with high-quality, on-demand content. We focus on intuitive design, gamification, and robust analytics.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Monetize courses through subscriptions, bundles, or in-app purchases.",
            "Add gamified elements like leaderboards, badges, and points.",
            "Track user behavior, engagement, and learning outcomes with analytics.",
          ],
        },
      ],
    },
    "Platform-Specific App Development": {
      ref: useRef(null),
      subheading: "Optimize learning solutions for your preferred platform",
      className: "moderation-control",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "p",
          text: "Whether it's iOS, Android, or web, we build high-performance education apps tailored to the platform of your choice. Our apps maintain consistent functionality and design while leveraging native capabilities.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Leverage native features like notifications, camera, and storage.",
            "Ensure seamless performance across devices and screen sizes.",
            "Implement offline learning modes and secure content storage.",
          ],
        },
      ],
    },
  };

  return (
    <>
      <h1>Online-education-edtech</h1>
      <BannerSection
        icon={HeartIcon}
        label="Education"
        heading="Education App Development Company"
        description="Magic Chat, a top education app development provider, transforms learning for millions with innovative and user-friendly applications, empowering students and trainers through personalized experiences and effective progress tracking."
        buttonText="Schedule a demo"
        buttonAction={() => alert("Demo scheduled!")}
        imageSrc={`${basePath}/Asset/matrimony_banner.png`}
        altText="Chat Solution"
      />

      <FeatureSectionWrapper
        title="Our Comprehensive Education App Development Services"
        description="Magic Chat offers a comprehensive suite of eLearning app development services that elevate knowledge delivery and management. This integrated approach establishes us as a global leader in education app development."
        sections={educationSection}
      />

      <BuildShipManageCards
        title="Our e-learning solution enables learners to access content anytime, anywhere"
        subtitle="Our educational mobile app development solutions bring unmatched convenience and ease, packed with world-class features and functionalities. We empower your learning business to grow into a global leader."
        sections={whyChoose}
      />

      <ProtectBusiness
        title="Key Features of Our Healthcare Software Solutions"
        description="Turn raw data into actionable insights with our end-to-end analytics solutions—optimize operations, make smarter decisions, and stay competitive."
        sections={eLearning}
      />
    </>
  );
}
