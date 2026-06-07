"use client"
// PlatformFeaturesTimeline.jsx

import React from "react";
import styles from "./PlatformFeaturesTimeline.module.css";
import {
  FaBrain, FaComments, FaInbox, FaPalette, FaChartLine,
  FaCogs, FaGlobe, FaUserFriends, FaPlug, FaUserShield,
} from "react-icons/fa";

export default function PlatformFeaturesTimeline() {
  const allFeatures = [
    { id: 1, icon: <FaBrain />, title: "AI Chatbot", desc: "Trained on your content for 24/7 support", tier: "core", popular: true },
    { id: 2, icon: <FaComments />, title: "Live Chat", desc: "Real-time team collaboration", tier: "core", popular: false },
    { id: 3, icon: <FaInbox />, title: "Unified Inbox", desc: "All websites, one place", tier: "core", popular: true },
    { id: 4, icon: <FaPalette />, title: "Custom Themes", desc: "No-code visual customization", tier: "core", popular: false },
    { id: 5, icon: <FaChartLine />, title: "Lead Generation", desc: "Capture & convert visitors", tier: "core", popular: false },
    { id: 6, icon: <FaCogs />, title: "RAG Engine", desc: "Context-aware AI responses", tier: "advanced", popular: true, badge: "NEW" },
    { id: 7, icon: <FaGlobe />, title: "Team Workflows", desc: "Collaborative customer management", tier: "advanced", popular: false },
    { id: 8, icon: <FaUserFriends />, title: "Smart Handover", desc: "AI → human routing", tier: "advanced", popular: true },
    { id: 9, icon: <FaPlug />, title: "CDN Integration", desc: "Instant updates, no redeploys", tier: "advanced", popular: false },
    { id: 10, icon: <FaUserShield />, title: "RBAC", desc: "Granular permission control", tier: "advanced", popular: false },
  ];

  return (
    <section className={styles.section}>
      {/* Animated Circles Background */}
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className={styles.circle4}></div>
      <div className={styles.circle5}></div>
      <div className={styles.dotPattern}></div>

      <div className={styles.header}>
        <span className={styles.badge}>Features</span>
        <h2>Everything you need to<br />scale customer support</h2>
        <div className={styles.tierLabels}>
          <span className={styles.coreLabel}>⚡ Core Platform</span>
          <span className={styles.advancedLabel}>🚀 Advanced Capabilities</span>
        </div>
      </div>

      <div className={styles.masonryGrid}>
        {allFeatures.map((feature) => (
          <div 
            key={feature.id}
            className={`${styles.featureTile} ${styles[feature.tier]} ${feature.popular ? styles.popular : ''}`}
            style={{ animationDelay: `${(feature.id - 1) * 0.05}s` }}
          >
            {feature.badge && <span className={styles.newBadge}>{feature.badge}</span>}
            {feature.popular && <span className={styles.popularBadge}>⭐ Most Popular</span>}
            <div className={styles.tileIcon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <div className={styles.tierFlag}>{feature.tier === 'core' ? 'Core' : 'Advanced'}</div>
          </div>
        ))}
      </div>
    </section>
  );
}