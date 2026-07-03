import React from "react";
import sharedStyles from "./SharedFeatureCard.module.css";
import tabContents from "./TabContent.module.css";
import {
  FaCogs,
  FaBolt,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaRobot,
} from "react-icons/fa";

const RuleBasedQNA = () => {
  const features = [
    {
      icon: <FaCogs />,
      title: "Customizable Rule Engine",
      description:
        "Define flexible Q&A rules and branching logic with a simple, no-code setup.",
    },
    {
      icon: <FaBolt />,
      title: "Instant UI Updates",
      description:
        "All users get real-time interface updates — no page reloads or downtime required.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Perfect for Education & Onboarding",
      description:
        "Ideal for user onboarding, product education, and guided troubleshooting experiences.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Conditional Path Support",
      description:
        "Set up conditional flows to dynamically guide users based on their answers.",
    },
    {
      icon: <FaRobot />,
      title: "Seamless Chatbot Integration",
      description:
        "Integrates effortlessly with your live or AI-powered chat for hybrid automation.",
    },
  ];

  return (
    <section className={tabContents.tabContentsWarp}>
      <header className={tabContents.header}>
        <h2 className={tabContents.title}>
          Rule-Based Q&A — Intelligent Guided Flows
        </h2>
        <p className={tabContents.subtitle}>
          Build interactive, decision-based question flows that deliver the
          right information — instantly and intelligently.
        </p>
      </header>

      <div className={sharedStyles.gridContainer}>
        {features.map((feature, index) => (
          <div key={index} className={sharedStyles.card}>
            <div className={sharedStyles.glassOverlay}></div>
            <div className={sharedStyles.shine}></div>
            <div className={sharedStyles.cornerAccent}></div>

            <div className={sharedStyles.iconWrapper}>
              <div className={sharedStyles.icon}>{feature.icon}</div>
            </div>
            <h3 className={tabContents.cardTitle}>{feature.title}</h3>
            <p className={tabContents.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RuleBasedQNA;
