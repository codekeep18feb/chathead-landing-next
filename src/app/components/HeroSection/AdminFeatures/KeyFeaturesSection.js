"use client";

import React, { useState } from "react";
import styles from "./AdminFeatures.module.css";
import {
  FaBrain,
  FaProjectDiagram,
  FaRobot,
  FaWaveSquare,
  FaPaintBrush,
  FaComments,
  FaCog,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaPlayCircle,
} from "react-icons/fa";

// Import the sub-components
import PaginatedFeatureList from "./PaginatedFeatureList";
import FeatureScreenshot from "./FeatureScreenshot";

const KeyFeaturesSection = ({
  featurePages,
  setFeaturePages,
  imagePages,
  setImagePages,
  openVideoModal,
}) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (id) => {
    setExpandedFeature((prev) => (prev === id ? null : id));
  };

  return (
    <section id="key-features" className={styles.featuresSection}>
      <div className={styles.sectionContainer}>
        {/* ========================================================
            FEATURES GRID
            ======================================================== */}

        <div className={styles.featuresGrid}>
          {/* ======================================================
              FEATURE 1
              GENERATIVE AI FORMS
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "gen-forms" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("gen-forms")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#4BCF9E20",
                  color: "#4BCF9E",
                }}
              >
                <FaBrain />
              </div>

              <div className={styles.featureTitle}>
                <h3>Generative AI Forms</h3>

                <p>
                  Intelligent forms that pre-fill what users already told you
                </p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "gen-forms" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "gen-forms" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>How It Works</h4>

                  <PaginatedFeatureList
                    featureId="gen-forms"
                    items={[
                      'User sends: "Book a room for 2 guests on Dec 25"',
                      "AI detects BOOKING intent",
                      `Extracts: { guests: 2, check_in: "2025-12-25" }`,
                      "Generates form with pre-filled values",
                      "User only adds missing info (guest_name, payment)",
                      "Complete data → Trigger API → Get results",
                    ]}
                    benefit="70% faster form completion"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="gen-forms"
                  images={[
                    "/AdminImg/Generative-AI-Forms/bookingForm.png",
                    "/AdminImg/Generative-AI-Forms/afterBookingMsg.png",
                    "/AdminImg/Generative-AI-Forms/genAiForm.png",
                    "/AdminImg/Generative-AI-Forms/afterbooking.png",
                  ]}
                  title="Form Generation Demo"
                  videoId="form-generation"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 2
              API CHAINING
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "api-chaining" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("api-chaining")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#667EEA20",
                  color: "#667EEA",
                }}
              >
                <FaProjectDiagram />
              </div>

              <div className={styles.featureTitle}>
                <h3>Visual API Chaining</h3>

                <p>
                  Complex workflows built without writing a single line of
                  code
                </p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "api-chaining" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "api-chaining" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Chain Everything</h4>

                  <PaginatedFeatureList
                    featureId="api-chaining"
                    items={[
                      "Conditional logic: If/Else/Else If",
                      "Multiple API calls in sequence",
                      "Error handling and retry logic",
                      "Data transformation between steps",
                      "Parallel execution support",
                    ]}
                    benefit="Replace 1000+ lines of code"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="api-chaining"
                  images={[
                    "/AdminImg/Visual-API-Chaining/beforeChain.png",
                    "/AdminImg/Visual-API-Chaining/chains.png",
                    "/AdminImg/Visual-API-Chaining/afterChain.png",
                  ]}
                  title="API Chaining Workflow"
                  videoId="api-chaining"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 3
              RAG ENGINE
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "rag" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("rag")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#F59E0B20",
                  color: "#F59E0B",
                }}
              >
                <FaRobot />
              </div>

              <div className={styles.featureTitle}>
                <h3>Built-in RAG Engine</h3>

                <p>Context-aware AI without paying per-query to OpenAI</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "rag" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "rag" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>RAG Capabilities</h4>

                  <PaginatedFeatureList
                    featureId="rag"
                    items={[
                      "Ingest websites, PDFs, documents",
                      "Semantic search across your knowledge base",
                      "Context-aware responses",
                      "No token costs — fixed pricing",
                      "Perfect session memory",
                    ]}
                    benefit="Unlimited queries, fixed cost"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="rag"
                  images={[
                    "/AdminImg/Built-in-RAG-Engine/rag-1.png",
                    "/AdminImg/Built-in-RAG-Engine/rag-2.png",
                    "/AdminImg/Built-in-RAG-Engine/rag-3.png",
                  ]}
                  title="RAG Engine Demo"
                  videoId="rag-demo"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 4
              TRUE ASYNC WEBHOOKS
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "async-webhooks"
                ? styles.featureExpanded
                : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("async-webhooks")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#EC489A20",
                  color: "#EC489A",
                }}
              >
                <FaWaveSquare />
              </div>

              <div className={styles.featureTitle}>
                <h3>True Async Webhooks</h3>

                <p>No 30-second timeout — wait as long as needed</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "async-webhooks" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "async-webhooks" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Process Anything</h4>

                  <PaginatedFeatureList
                    featureId="async-webhooks"
                    items={[
                      "No hard timeout (30s, 60s, etc.)",
                      "WebSocket callback for results",
                      "Dynamic UI updates on completion",
                      "Process can take seconds, minutes, hours, or days",
                      "Automatic retry and error handling",
                    ]}
                    benefit="Handle any process, no matter how long"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="async-webhooks"
                  images={[
                    "/AdminImg/True-Async-Webhooks/withoutWebhook.png",
                    "/AdminImg/True-Async-Webhooks/withWebhook.png",
                  ]}
                  title="Async Webhook Flow"
                  videoId="webhook-async"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 5
              DYNAMIC SCREEN GENERATION
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "screen-gen" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("screen-gen")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#8B5CF620",
                  color: "#8B5CF6",
                }}
              >
                <FaPaintBrush />
              </div>

              <div className={styles.featureTitle}>
                <h3>Dynamic Screen Generation</h3>

                <p>Multiple screens from a single API response</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "screen-gen" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "screen-gen" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Screen Capabilities</h4>

                  <PaginatedFeatureList
                    featureId="screen-gen"
                    items={[
                      "Template-based rendering (Nunjucks)",
                      "Style transformations (bold, highlight, buttons)",
                      "Structural transformations (tables, cards, lists)",
                      "Media transformations (images, PDFs)",
                      "Multiple screens from array data",
                    ]}
                    benefit="No hardcoded UI — adapts to your data"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="screen-gen"
                  images={[
                    "/AdminImg/Dynamic-Screen-Generation/editer.png",
                    "/AdminImg/Dynamic-Screen-Generation/response.png",
                    "/AdminImg/Dynamic-Screen-Generation/preview.png",
                  ]}
                  title="Dynamic Screen Demo"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 6
              LIVE CHAT + MULTI ADMIN
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "live-chat" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("live-chat")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#0EA5E920",
                  color: "#0EA5E9",
                }}
              >
                <FaComments />
              </div>

              <div className={styles.featureTitle}>
                <h3>Live Chat + Multi-Admin</h3>

                <p>Real-time agent collaboration with RBAC</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "live-chat" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "live-chat" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Chat Capabilities</h4>

                  <PaginatedFeatureList
                    featureId="live-chat"
                    items={[
                      "Multi-admin support with role-based access",
                      "Unified inbox across all websites",
                      "Smart agent routing and handover",
                      "Real-time typing indicators",
                      "File sharing and rich media",
                    ]}
                    benefit="Enterprise-grade customer support"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="live-chat"
                  images={[
                    "/AdminImg/Live-Chat-Multi-Admin/liveuser1.png",
                    "/AdminImg/Live-Chat-Multi-Admin/liveuser2.png",
                    "/AdminImg/Live-Chat-Multi-Admin/liveuser3.png",
                    "/AdminImg/Live-Chat-Multi-Admin/beforeEnableMuliAdmin.png",
                    "/AdminImg/Live-Chat-Multi-Admin/afterEnableMuliAdmin.png",
                    "/AdminImg/Live-Chat-Multi-Admin/muliAdminChat1.png",
                    "/AdminImg/Live-Chat-Multi-Admin/muliAdminChat2.png",
                    "/AdminImg/Live-Chat-Multi-Admin/inviteSupport.png",
                  ]}
                  title="Live Chat Interface"
                  videoId="live-chat"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 7
              ADMIN PANEL
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "admin-panel" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("admin-panel")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#F9731620",
                  color: "#F97316",
                }}
              >
                <FaCog />
              </div>

              <div className={styles.featureTitle}>
                <h3>Comprehensive Admin Panel</h3>

                <p>Complete control without touching code</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "admin-panel" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "admin-panel" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Admin Capabilities</h4>

                  <PaginatedFeatureList
                    featureId="admin-panel"
                    items={[
                      "Visual workflow builder",
                      "Intent configuration",
                      "API integration setup",
                      "UI customization",
                      "Analytics and monitoring",
                    ]}
                    benefit="Business users take control"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="admin-panel"
                  images={[
                    "/AdminImg/Comprehensive-Admin-Panel/IntentConf1.png",
                    "/AdminImg/Comprehensive-Admin-Panel/IntentConf2.png",
                    "/AdminImg/Comprehensive-Admin-Panel/IntentConf3.png",
                    "/AdminImg/Comprehensive-Admin-Panel/IntentConf4.png",
                    "/AdminImg/Comprehensive-Admin-Panel/apiConf1.png",
                    "/AdminImg/Comprehensive-Admin-Panel/apiConf2.png",
                    "/AdminImg/Comprehensive-Admin-Panel/apiConf3.png",
                  ]}
                  title="Admin Panel Interface"
                  videoId="admin-panel"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>

          {/* ======================================================
              FEATURE 8
              SECURITY
              ====================================================== */}

          <div
            className={`${styles.featureCard} ${
              expandedFeature === "security" ? styles.featureExpanded : ""
            }`}
          >
            <div
              className={styles.featureHeader}
              onClick={() => toggleFeature("security")}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: "#10B98120",
                  color: "#10B981",
                }}
              >
                <FaLock />
              </div>

              <div className={styles.featureTitle}>
                <h3>Enterprise-Grade Security</h3>

                <p>No XSS attacks, no stored scripts, complete safety</p>
              </div>

              <div className={styles.featureToggle}>
                {expandedFeature === "security" ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </div>
            </div>

            {expandedFeature === "security" && (
              <div className={styles.featureContent}>
                <div className={styles.featureDescription}>
                  <h4>Security Features</h4>

                  <PaginatedFeatureList
                    featureId="security"
                    items={[
                      "No HTML/JS stored in database",
                      "Template + transformations applied client-side",
                      "Primary + Secondary authentication",
                      "Role-Based Access Control (RBAC)",
                      "Secure API key management",
                    ]}
                    benefit="Safe, secure, compliant"
                    featurePages={featurePages}
                    setFeaturePages={setFeaturePages}
                  />
                </div>

                <FeatureScreenshot
                  featureId="security"
                  images={[
                    "/AdminImg/Enterprise-Grade-Security/security-1.png",
                    "/AdminImg/Enterprise-Grade-Security/security-2.png",
                    "/AdminImg/Enterprise-Grade-Security/security-3.png",
                  ]}
                  title="Security Architecture"
                  imagePages={imagePages}
                  setImagePages={setImagePages}
                  openVideoModal={openVideoModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;