"use client";

import React, { useState } from "react";
import styles from "./KeyFeaturesCardview.module.css";
import {
  FaBrain,
  FaProjectDiagram,
  FaRobot,
  FaWaveSquare,
  FaPaintBrush,
  FaComments,
  FaCog,
  FaLock,
  FaPlayCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

// Import the sub-components
import PaginatedFeatureList from "./PaginatedFeatureList";
import FeatureScreenshot from "./FeatureScreenshot";

const KeyFeaturesCardview = ({
  featurePages,
  setFeaturePages,
  imagePages,
  setImagePages,
  openVideoModal,
}) => {
  // Define all feature data in an array for easier mapping
  const features = [
    {
      id: "gen-forms",
      icon: FaBrain,
      iconColor: "#4BCF9E",
      iconBg: "#4BCF9E20",
      title: "Generative AI Forms",
      subtitle: "Intelligent forms that pre-fill what users already told you",
      description:
        "Transform user conversations into structured data with AI-powered form generation.",
      items: [
        'User sends: "Book a room for 2 guests on Dec 25"',
        "AI detects BOOKING intent",
        'Extracts: { guests: 2, check_in: "2025-12-25" }',
        "Generates form with pre-filled values",
        "User only adds missing info (guest_name, payment)",
        "Complete data → Trigger API → Get results",
      ],
      benefit: "70% faster form completion",
      images: [
        "/AdminImg/Generative-AI-Forms/bookingForm.png",
        "/AdminImg/Generative-AI-Forms/afterBookingMsg.png",
        "/AdminImg/Generative-AI-Forms/genAiForm.png",
        "/AdminImg/Generative-AI-Forms/afterbooking.png",
      ],
      videoId: "form-generation",
      // title: "Generative AI Forms",
      tags: ["AI", "Automation", "Forms"],
    },
    {
      id: "api-chaining",
      icon: FaProjectDiagram,
      iconColor: "#667EEA",
      iconBg: "#667EEA20",
      title: "Visual API Chaining",
      subtitle: "Complex workflows built without writing a single line of code",
      description:
        "Connect multiple APIs with conditional logic and error handling in a visual interface.",
      items: [
        "Conditional logic: If/Else/Else If",
        "Multiple API calls in sequence",
        "Error handling and retry logic",
        "Data transformation between steps",
        "Parallel execution support",
      ],
      benefit: "Replace 1000+ lines of code",
      images: [
        "/AdminImg/Visual-API-Chaining/beforeChain.png",
        "/AdminImg/Visual-API-Chaining/chains.png",
        "/AdminImg/Visual-API-Chaining/afterChain.png",
      ],
      videoId: "api-chaining",
      // title: "Visual API Chaining",
      tags: ["Integration", "Workflow", "No-Code"],
    },
    {
      id: "rag",
      icon: FaRobot,
      iconColor: "#F59E0B",
      iconBg: "#F59E0B20",
      title: "Built-in RAG Engine",
      subtitle: "Context-aware AI without paying per-query to OpenAI",
      description:
        "Ingest your knowledge base and get intelligent responses without token costs.",
      items: [
        "Ingest websites, PDFs, documents",
        "Semantic search across your knowledge base",
        "Context-aware responses",
        "No token costs — fixed pricing",
        "Perfect session memory",
      ],
      benefit: "Unlimited queries, fixed cost",
      images: [
        "/AdminImg/Built-in-RAG-Engine/rag-1.png",
        "/AdminImg/Built-in-RAG-Engine/rag-2.png",
        "/AdminImg/Built-in-RAG-Engine/rag-3.png",
      ],
      videoId: "rag-demo",
      // title: "Built-in RAG Engine",
      tags: ["AI", "Knowledge Base", "Cost-Effective"],
    },
    {
      id: "async-webhooks",
      icon: FaWaveSquare,
      iconColor: "#EC489A",
      iconBg: "#EC489A20",
      title: "True Async Webhooks",
      subtitle: "No 30-second timeout — wait as long as needed",
      description:
        "Handle long-running processes with WebSocket callbacks and real-time updates.",
      items: [
        "No hard timeout (30s, 60s, etc.)",
        "WebSocket callback for results",
        "Dynamic UI updates on completion",
        "Process can take seconds, minutes, hours, or days",
        "Automatic retry and error handling",
      ],
      benefit: "Handle any process, no matter how long",
      images: [
        "/AdminImg/True-Async-Webhooks/withoutWebhook.png",
        "/AdminImg/True-Async-Webhooks/withWebhook.png",
      ],
      videoId: "webhook-async",
      tags: ["Real-Time", "Scalable", "Reliable"],
    },
    {
      id: "screen-gen",
      icon: FaPaintBrush,
      iconColor: "#8B5CF6",
      iconBg: "#8B5CF620",
      title: "Dynamic Screen Generation",
      subtitle: "Multiple screens from a single API response",
      description:
        "Create dynamic UIs with template-based rendering and transformations.",
      items: [
        "Template-based rendering (Nunjucks)",
        "Style transformations (bold, highlight, buttons)",
        "Structural transformations (tables, cards, lists)",
        "Media transformations (images, PDFs)",
        "Multiple screens from array data",
      ],
      benefit: "No hardcoded UI — adapts to your data",
      images: [
        "/AdminImg/Dynamic-Screen-Generation/editer.png",
        "/AdminImg/Dynamic-Screen-Generation/response.png",
        "/AdminImg/Dynamic-Screen-Generation/preview.png",
      ],
      videoId: "",
      // title: "Dynamic Screen Demo",
      tags: ["UI/UX", "Dynamic", "Flexible"],
    },
    {
      id: "live-chat",
      icon: FaComments,
      iconColor: "#0EA5E9",
      iconBg: "#0EA5E920",
      title: "Live Chat + Multi-Admin",
      subtitle: "Real-time agent collaboration with RBAC",
      description:
        "Enterprise-grade chat with role-based access and smart agent routing.",
      items: [
        "Multi-admin support with role-based access",
        "Unified inbox across all websites",
        "Smart agent routing and handover",
        "Real-time typing indicators",
        "File sharing and rich media",
      ],
      benefit: "Enterprise-grade customer support",
      images: [
        "/AdminImg/Live-Chat-Multi-Admin/liveuser1.png",
        "/AdminImg/Live-Chat-Multi-Admin/liveuser2.png",
        "/AdminImg/Live-Chat-Multi-Admin/liveuser3.png",
        "/AdminImg/Live-Chat-Multi-Admin/beforeEnableMuliAdmin.png",
        "/AdminImg/Live-Chat-Multi-Admin/afterEnableMuliAdmin.png",
        "/AdminImg/Live-Chat-Multi-Admin/muliAdminChat1.png",
        "/AdminImg/Live-Chat-Multi-Admin/muliAdminChat2.png",
        "/AdminImg/Live-Chat-Multi-Admin/inviteSupport.png",
      ],
      videoId: "live-chat",
      // title: "Live Chat Interface",
      tags: ["Chat", "Support", "Real-Time"],
    },
    {
      id: "admin-panel",
      icon: FaCog,
      iconColor: "#F97316",
      iconBg: "#F9731620",
      title: "Comprehensive Admin Panel",
      subtitle: "Complete control without touching code",
      description:
        "Manage everything from workflows to analytics in one powerful dashboard.",
      items: [
        "Visual workflow builder",
        "Intent configuration",
        "API integration setup",
        "UI customization",
        "Analytics and monitoring",
      ],
      benefit: "Business users take control",
      images: [
        "/AdminImg/Comprehensive-Admin-Panel/IntentConf1.png",
        "/AdminImg/Comprehensive-Admin-Panel/IntentConf2.png",
        "/AdminImg/Comprehensive-Admin-Panel/IntentConf3.png",
        "/AdminImg/Comprehensive-Admin-Panel/IntentConf4.png",
        "/AdminImg/Comprehensive-Admin-Panel/apiConf1.png",
        "/AdminImg/Comprehensive-Admin-Panel/apiConf2.png",
        "/AdminImg/Comprehensive-Admin-Panel/apiConf3.png",
      ],
      videoId: "admin-panel",
      // title: "Admin Panel Interface",
      tags: ["Management", "Analytics", "Control"],
    },
    {
      id: "security",
      icon: FaLock,
      iconColor: "#10B981",
      iconBg: "#10B98120",
      title: "Enterprise-Grade Security",
      subtitle: "No XSS attacks, no stored scripts, complete safety",
      description:
        "Built-in security measures to protect your data and users from threats.",
      items: [
        "No HTML/JS stored in database",
        "Template + transformations applied client-side",
        "Primary + Secondary authentication",
        "Role-Based Access Control (RBAC)",
        "Secure API key management",
      ],
      benefit: "Safe, secure, compliant",
      images: [
        "/AdminImg/Enterprise-Grade-Security/security-1.png",
        "/AdminImg/Enterprise-Grade-Security/security-2.png",
        "/AdminImg/Enterprise-Grade-Security/security-3.png",
      ],
      videoId: "",
      // title: "Security Architecture",
      tags: ["Security", "Compliance", "RBAC"],
      showImages: false,
    },
  ];

  return (
    <div className={styles.cardFeaturesGrid}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const isEven = index % 2 === 0;

        return (
          <div
            key={feature.id}
            className={`${styles.cardFeatureItem} ${
              isEven ? styles.cardFeatureEven : styles.cardFeatureOdd
            } ${feature.showImages === false ? styles.noImages : ""}`}
          >
            {/* Card Number Badge */}
            <div className={styles.cardNumberBadge}>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            {/* Text Content */}
            <div className={styles.cardFeatureText}>
              <div className={styles.cardFeatureHeader}>
                <div
                  className={styles.cardFeatureIcon}
                  style={{
                    background: feature.iconBg,
                    color: feature.iconColor,
                  }}
                >
                  <Icon />
                </div>
                <div className={styles.cardFeatureTitle}>
                  <h3>{feature.title}</h3>
                  <p>{feature.subtitle}</p>
                </div>
              </div>

              <div className={styles.cardFeatureDescription}>
                <p>{feature.description}</p>
              </div>

              <div className={styles.cardFeatureBody}>
                <h4>
                  {/* <FaStar className={styles.sectionIcon} /> */}
                  How It Works
                </h4>
                <PaginatedFeatureList
                  featureId={feature.id}
                  items={feature.items}
                  benefit={feature.benefit}
                  featurePages={featurePages}
                  setFeaturePages={setFeaturePages}
                />
              </div>

              {/* Tags */}
              {feature.tags && (
                <div className={styles.cardFeatureTags}>
                  {feature.tags.map((tag, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Images */}
            {feature.showImages !== false && (
              <div className={styles.cardFeatureVisual}>
                <div className={styles.visualWrapper}>
                  <FeatureScreenshot
                    featureId={feature.id}
                    images={feature.images}
                    title={feature.title}
                    videoId={feature.videoId}
                    imagePages={imagePages}
                    setImagePages={setImagePages}
                    openVideoModal={openVideoModal}
                  />

                  {/* Gradient Overlay */}
                  <div className={styles.visualOverlay} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default KeyFeaturesCardview;
