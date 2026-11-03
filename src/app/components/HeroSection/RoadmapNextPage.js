// src/app/components/HeroSection/RoadmapNextPage.jsx
import React from "react";
import styles from "./RoadmapNextPage.module.css";

export default function RoadmapNextPage() {
  const roadmapItems = [
    {
      icon: "🎙️",
      title: "Voice-Enabled AI Chat",
      description: "Speak directly to the AI agent. Native voice input and real-time audio synthesis for a hands-free restaurant operator experience.",
      status: "in-progress",
    },
    {
      icon: "📞",
      title: "PBX / SIP AI Agents",
      description: "Direct SIP trunk integration. The AI agent answers the restaurant phone line, handles reservations, and routes calls deterministically.",
      status: "upcoming",
    },
    {
      icon: "🔌",
      title: "Expanded Connector Library",
      description: "Slack, WhatsApp Business, Stripe, HubSpot, Twilio, and custom REST endpoints. Every new connector ships automatically without any UI rebuild.",
      status: "in-progress",
    },
    {
      icon: "🔍",
      title: "Semantic API Discovery",
      description: "Point the AI agent at your API docs and let it auto-generate intent mappings and sample payloads with a single click.",
      status: "planned",
    },
  ];

  return (
    <div className={styles.section}>
      {/* Light decorative background elements */}
      <div className={styles.lightBg}>
        <div className={styles.softBlob1} />
        <div className={styles.softBlob2} />
        <div className={styles.dotsPattern} />
      </div>

      <div className={styles.header}>
        <span className={styles.badge}>🚀 ROADMAP</span>
        <h2 className={styles.mainTitle}>What's next for Sageion?</h2>
        <p className={styles.subtitle}>
          Pushing the boundaries of what an AI agent layer can do for restaurant operations
        </p>
      </div>

      <div className={styles.timeline}>
        {/* Central vertical line */}
        <div className={styles.timelineLine}>
          <div className={styles.lineProgress} />
        </div>

        {roadmapItems.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.timelineNode} ${styles[item.status]}`}
          >
            {/* Animated connector line between nodes */}
            {idx > 0 && (
              <div className={styles.connectorLine}>
                <div
                  className={styles.connectorProgress}
                  style={{ "--delay": `${idx * 0.3}s` }}
                />
              </div>
            )}

            <div className={styles.nodeMarker}>
              <div className={styles.markerRing}>
                <span className={styles.nodeIcon}>{item.icon}</span>
              </div>
              <div className={styles.nodePulse} />
              <div className={styles.markerGlow} />
            </div>

            <div className={styles.nodeContent}>
              <div className={styles.nodeHeader}>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <div className={styles.nodeStatus}>
                <span
                  className={`${styles.statusBadge} ${styles[item.status]}`}
                >
                  {item.status === "upcoming"
                    ? "🔜 Upcoming"
                    : item.status === "in-progress"
                      ? "⚡ In Progress"
                      : "📋 Planned"}
                </span>
              </div>
              <div className={styles.cardAccent} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerNote}>
        <div className={styles.noteIcon}>💡</div>
        <p>
          Our roadmap is shaped by user feedback and emerging AI innovation — ensuring
          Sageion evolves with your restaurant operations.
        </p>
      </div>
    </div>
  );
}