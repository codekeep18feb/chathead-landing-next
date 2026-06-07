"use client";
import { FiDollarSign, FiTrendingUp, FiSettings } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

import styles from "./HowDiffrentMagicChat.module.css";
import { useEffect, useState } from "react";

export default function HowDiffrentMagicChat() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const differentiators = [
    {
      icon: <AiOutlineFieldTime size={24} color="#4bcf9e" />,
      title: "Saves You Time",
      points: [
        "One-Time Integration: Add a simple drag-and-drop snippet once — no recurring setup or maintenance.",
        "Instant Updates: Any admin change (chat UI, flow, text, or rules) goes live instantly — no redeploys or user re-logins.",
        "Real-Time Admin Control: Modify, preview, and apply updates without waiting on developer cycles.",
      ],
    },
    {
      icon: <FiDollarSign size={24} color="#4bcf9e" />,
      title: "Reduces Cost",
      points: [
        "In-Built RAG Chatbot: Get a robust, AI-powered chatbot without paying per-query fees to external LLMs like OpenAI or DeepSeek.",
        "Low-Cost Infrastructure: No hidden AI or API costs; your RAG engine runs within MagicChat's optimized framework.",
        "Free Tier With Everything: Build, test, and deploy with full features. Pay only when you scale.",
      ],
    },
    {
      icon: <FiTrendingUp size={24} color="#4bcf9e" />,
      title: "Scales Effortlessly",
      points: [
        "Built for All Sizes: Start small, grow big — MagicChat adapts from solo startups to enterprise-scale setups.",
        "One-Click Multi-Tenant Mode: Manage multiple clients, projects, or products in one dashboard.",
        "Enterprise Features: Team collaboration, secure chat routing, offline notifications, and easy data migration.",
      ],
    },
    {
      icon: <FiSettings size={24} color="#4bcf9e" />,
      title: "Gives You Total Control",
      points: [
        "Deep Customization Without Code: Control tone, design, chatbot behavior, triggers, and logic — all from the admin dashboard.",
        "Instant Client Sync: Admin changes are broadcast to all live clients automatically.",
        "Flexible Architecture: Every configuration, from colors to logic, can be adjusted visually.",
      ],
    },
    {
      icon: <MdOutlineIntegrationInstructions size={24} color="#4bcf9e" />,
      title: "Simplifies Integration & Auth",
      points: [
        "Auth-Agnostic Design: Works with or without your product's authentication.",
        "Inbuilt Auto-Scaling Auth System: Plug-and-play login flow available if needed.",
        "CMS Plugins: Ready for WordPress; more platforms (Shopify, Webflow, etc.) coming soon.",
        "No Code Dependency: Developers integrate once, then business users take over.",
      ],
    },
  ];

  const activeDifferentiator = differentiators[activeTab];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % differentiators.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, differentiators.length]);

  return (
    <section className={styles.section}>
      <div style={{ maxWidth: "1200px" }}>
        <h2 className={styles.heading}>How are we different from others?</h2>

        <div className={styles.tabContainer}>
          {/* Sidebar Tabs */}
          <div className={styles.sidebar}>
            {differentiators.map((item, index) => (
              <button
                key={index}
                className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => {
                  setActiveTab(index);
                  setAutoPlay(false);
                }}
              >
                <span className={styles.tabIcon}>{item.icon}</span>
                <span className={styles.tabTitle}>{item.title}</span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className={styles.contentPanel} key={activeTab}>
            <div className={styles.panelHeader}>
              <div className={styles.panelIcon}>
                {activeDifferentiator.icon}
              </div>
              <h3 className={styles.panelTitle}>
                {activeDifferentiator.title}
              </h3>
            </div>
            <ul className={styles.pointsList}>
              {activeDifferentiator.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
