"use client";

import { useRouter } from "next/navigation";
import styles from "./CommonDropdown.module.css";

// The unique capabilities of the Sageion AI Agent Layer
const PLATFORM_FEATURES = [
  {
    id: "ai-agent-config",
    title: "AI Agent Configuration",
    description: "Map intents to your existing backend APIs. Deterministic execution with zero hallucinations.",
    icon: "🤖",
    path: "/ai-agent-configuration",
  },
  {
    id: "auto-ui",
    title: "Auto-UI Generation",
    description: "Turn API responses into custom UX screens (forms, tables, approval cards) instantly.",
    icon: "🎨",
    path: "/auto-ui", // Update this path when the page is built
  },
  {
    id: "attachments",
    title: "Opt-In Attachments",
    description: "Golden tenant configs that can be explicitly attached by custom apps. Enterprise RBAC.",
    icon: "🧩",
    path: "/attachment-model", // Update this path when the page is built
  },
  {
    id: "async-hitl",
    title: "Async & Human-in-the-Loop",
    description: "Pause workflows for manager approvals. Wait for webhooks with no 30-second timeouts.",
    icon: "⏳",
    path: "/async-workflows", // Update this path when the page is built
  }
];

const Platform = ({ onCloseMenu }) => {
  const router = useRouter();

  const handleCardClick = (path) => {
    // Close the mobile menu first
    if (onCloseMenu) {
      onCloseMenu();
    }
    // Navigate to the target path
    router.push(path);
  };

  return (
    <div className={styles.platformContainer}>
      {/* Left Side - Image */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/platform.png"
            alt="Platform Illustration"
            className={styles.platformImage}
          />
          <div className={styles.imageOverlay}>
            <h3>The AI Layer</h3>
            <p>Built for your existing APIs</p>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className={styles.contentSection}>
        <div className={styles.platformSections}>
          
          {/* Core AI Agent Features Section */}
          <div className={styles.platformSection}>
            <h2 className={styles.sectionTitle}>AI AGENT CAPABILITIES</h2>
            <div className={styles.cardList}>
              {PLATFORM_FEATURES.map((item) => (
                <div
                  className={styles.card}
                  key={item.id}
                  onClick={() => handleCardClick(item.path)}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <span className={styles.cardIcon} style={{ fontSize: '20px' }}>
                        {item.icon}
                      </span>
                    </div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Platform;