import React from "react";
import styles from "./LeadGen.module.css";
import {
  FaEnvelopeOpenText,
  FaDatabase,
  FaCogs,
  FaChartLine,
  FaPlug,
} from "react-icons/fa";

const LeadGen = () => {
  const features = [
    {
      icon: <FaEnvelopeOpenText />,
      title: "Conversational Lead Capture",
      description:
        "Embed lead generation flows directly within your chatbot for seamless user engagement.",
    },
    {
      icon: <FaDatabase />,
      title: "Centralized Lead Data",
      description:
        "Automatically collect and organize lead information into a unified dashboard or CRM.",
    },
    {
      icon: <FaCogs />,
      title: "Smart Workflow Automation",
      description:
        "Trigger automated actions and integrations as soon as leads are qualified or submitted.",
    },
    {
      icon: <FaChartLine />,
      title: "Campaign-Level Customization",
      description:
        "Tailor your forms and messaging to specific campaigns or chatbot contexts.",
    },
    {
      icon: <FaPlug />,
      title: "Plug-and-Play Integrations",
      description:
        "Seamlessly connect to your CRM, email marketing, or analytics tools with minimal setup.",
    },
  ];

  return (
    <section className={styles.leadGenSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Lead Generation — Convert Conversations to Customers</h2>
        <p className={styles.subtitle}>
          Capture, qualify, and route leads instantly inside your chat — removing the
          friction of traditional forms.
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

export default LeadGen;
