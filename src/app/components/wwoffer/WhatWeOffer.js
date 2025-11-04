import React, { useState } from "react";
import styles from "./WhatWeOffer.module.css";

import LiveUserChat from "./LiveUserChat";
import RuleBasedQNA from "./RuleBasedQNA";
import LeadGen from "./LeadGen";
import RagChatbotFeatures from "./RagChatbotFeatures";

const WhatWeOffer = () => {
  const [activeTab, setActiveTab] = useState("Live User Chat");

  const tabs = [
    { name: "Live User Chat", label: "💬 Live User Chat" },
    { name: "Rule-Based Q&A", label: "⚙️ Rule-Based Q&A" },
    { name: "Lead Generation", label: "🎯 Lead Generation" },
    { name: "RAG Chatbot", label: "🤖 RAG Chatbot" },
  ];

  const renderComponent = () => {
    switch (activeTab) {
      case "Live User Chat":
        return <LiveUserChat />;
      case "Rule-Based Q&A":
        return <RuleBasedQNA />;
      case "Lead Generation":
        return <LeadGen />;
      case "RAG Chatbot":
        return <RagChatbotFeatures />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.offerSection}>
      <h2 className={styles.mainTitle}>What We Offer</h2>

      <div className={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`${styles.tabButton} ${
              activeTab === tab.name ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{renderComponent()}</div>
    </section>
  );
};

export default WhatWeOffer;
