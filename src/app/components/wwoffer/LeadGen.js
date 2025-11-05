import React from "react";
import styles from "./LeadGen.module.css";
import tabContents from "./TabContent.module.css"
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
    <section className={tabContents.tabContentsWarp}>
      <header className={tabContents.header}>
        <h2 className={tabContents.title}>Lead Generation — Convert Conversations to Customers</h2>
        <p className={tabContents.subtitle}>
          Capture, qualify, and route leads instantly inside your chat — removing the
          friction of traditional forms.
        </p>
      </header>

      <div className={tabContents.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={tabContents.icon}>{feature.icon}</div>
            <h3 className={tabContents.cardTitle}>{feature.title}</h3>
            <p className={tabContents.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadGen;
