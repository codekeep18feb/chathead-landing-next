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
      title: "Form Generation Demo",
    },
    {
      id: "api-chaining",
      icon: FaProjectDiagram,
      iconColor: "#667EEA",
      iconBg: "#667EEA20",
      title: "Visual API Chaining",
      subtitle: "Complex workflows built without writing a single line of code",
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
      title: "API Chaining Workflow",
    },
    {
      id: "rag",
      icon: FaRobot,
      iconColor: "#F59E0B",
      iconBg: "#F59E0B20",
      title: "Built-in RAG Engine",
      subtitle: "Context-aware AI without paying per-query to OpenAI",
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
      title: "RAG Engine Demo",
    },
    {
      id: "async-webhooks",
      icon: FaWaveSquare,
      iconColor: "#EC489A",
      iconBg: "#EC489A20",
      title: "True Async Webhooks",
      subtitle: "No 30-second timeout — wait as long as needed",
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
      title: "Async Webhook Flow",
    },
    {
      id: "screen-gen",
      icon: FaPaintBrush,
      iconColor: "#8B5CF6",
      iconBg: "#8B5CF620",
      title: "Dynamic Screen Generation",
      subtitle: "Multiple screens from a single API response",
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
      title: "Dynamic Screen Demo",
    },
    {
      id: "live-chat",
      icon: FaComments,
      iconColor: "#0EA5E9",
      iconBg: "#0EA5E920",
      title: "Live Chat + Multi-Admin",
      subtitle: "Real-time agent collaboration with RBAC",
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
      title: "Live Chat Interface",
    },
    {
      id: "admin-panel",
      icon: FaCog,
      iconColor: "#F97316",
      iconBg: "#F9731620",
      title: "Comprehensive Admin Panel",
      subtitle: "Complete control without touching code",
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
      title: "Admin Panel Interface",
    },
    {
      id: "security",
      icon: FaLock,
      iconColor: "#10B981",
      iconBg: "#10B98120",
      title: "Enterprise-Grade Security",
      subtitle: "No XSS attacks, no stored scripts, complete safety",
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
      title: "Security Architecture",
    },
  ];

  return (
    <section id="key-features" className={styles.featuresSection}>
      <div className={styles.sectionContainer}>
        {/* FEATURES CARD GRID */}
        <div className={styles.cardFeaturesGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Even index (0, 2, 4, 6) = text left, image right
            // Odd index (1, 3, 5, 7) = text right, image left
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={feature.id} 
                className={`${styles.cardFeatureItem} ${
                  isEven ? styles.cardFeatureEven : styles.cardFeatureOdd
                }`}
              >
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

                  <div className={styles.cardFeatureBody}>
                    <h4>How It Works</h4>
                    <PaginatedFeatureList
                      featureId={feature.id}
                      items={feature.items}
                      benefit={feature.benefit}
                      featurePages={featurePages}
                      setFeaturePages={setFeaturePages}
                    />
                  </div>
                </div>

                {/* Images */}
                <div className={styles.cardFeatureVisual}>
                  <FeatureScreenshot
                    featureId={feature.id}
                    images={feature.images}
                    title={feature.title}
                    videoId={feature.videoId}
                    imagePages={imagePages}
                    setImagePages={setImagePages}
                    openVideoModal={openVideoModal}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesCardview;