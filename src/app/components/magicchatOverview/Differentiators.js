import React from "react";
import { FiDollarSign, FiTrendingUp, FiSettings } from "react-icons/fi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";

import styles from "./Differentiators.module.css";

export default function Differentiators() {
  const differentiators = [
    {
      icon: <AiOutlineFieldTime size={36} color="#fff" />,
      title: "Saves You Time",
      points: [
        "One-Time Integration: Add a simple drag-and-drop snippet once — no recurring setup or maintenance.",
        "Instant Updates: Any admin change (chat UI, flow, text, or rules) goes live instantly — no redeploys or user re-logins.",
        "Real-Time Admin Control: Modify, preview, and apply updates without waiting on developer cycles.",
      ],
    },
    {
      icon: <FiDollarSign size={36} color="#fff" />,
      title: "Reduces Cost",
      points: [
        "In-Built RAG Chatbot: Get a robust, AI-powered chatbot without paying per-query fees to external LLMs like OpenAI or DeepSeek.",
        "Low-Cost Infrastructure: No hidden AI or API costs; your RAG engine runs within MagicChat’s optimized framework.",
        "Free Tier With Everything: Build, test, and deploy with full features. Pay only when you scale.",
      ],
    },
    {
      icon: <FiTrendingUp size={36} color="#fff" />,
      title: "Scales Effortlessly",
      points: [
        "Built for All Sizes: Start small, grow big — MagicChat adapts from solo startups to enterprise-scale setups.",
        "One-Click Multi-Tenant Mode: Manage multiple clients, projects, or products in one dashboard.",
        "Enterprise Features: Team collaboration, secure chat routing, offline notifications, and easy data migration.",
      ],
    },
    {
      icon: <FiSettings size={36} color="#fff" />,
      title: "Gives You Total Control",
      points: [
        "Deep Customization Without Code: Control tone, design, chatbot behavior, triggers, and logic — all from the admin dashboard.",
        "Instant Client Sync: Admin changes are broadcast to all live clients automatically.",
        "Flexible Architecture: Every configuration, from colors to logic, can be adjusted visually.",
      ],
    },
    {
      icon: <MdOutlineIntegrationInstructions size={36} color="#fff" />,
      title: "Simplifies Integration & Auth",
      points: [
        "Auth-Agnostic Design: Works with or without your product’s authentication.",
        "Inbuilt Auto-Scaling Auth System: Plug-and-play login flow available if needed.",
        "CMS Plugins: Ready for WordPress; more platforms (Shopify, Webflow, etc.) coming soon.",
        "No Code Dependency: Developers integrate once, then business users take over.",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How are we different from others?</h2>

      <div className={styles.timeline}>
        {differentiators.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
