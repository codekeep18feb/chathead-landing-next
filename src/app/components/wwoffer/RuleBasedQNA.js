import React from "react";
import styles from "./RuleBasedQNA.module.css";
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
    <section className={styles.qnaSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Rule-Based Q&A — Intelligent Guided Flows</h2>
        <p className={styles.subtitle}>
          Build interactive, decision-based question flows that deliver the
          right information — instantly and intelligently.
        </p>
      </header>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RuleBasedQNA;
