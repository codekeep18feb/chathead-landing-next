// RoadmapNextPage.jsx - Light Background Version
import React from "react";
import styles from "./RoadmapNextPage.module.css";

export default function RoadmapNextPage() {
  const roadmapItems = [
    { icon: "🎙️", title: "Voice-Enabled AI Chat", description: "Natural conversations with voice input", status: "upcoming" },
    { icon: "🔁", title: "Workflow Automations", description: "Connect apps and automate tasks", status: "in-progress" },
    { icon: "🧾", title: "CRM + Email Sync", description: "Seamless integration with your stack", status: "planned" },
    { icon: "❤️", title: "Sentiment Analysis", description: "Smart insights from conversations", status: "planned" },
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
        <h2>What's next for <span className={styles.gradient}>MagicChat?</span></h2>
        <p className={styles.subtitle}>Our journey to revolutionize AI customer support</p>
      </div>

      <div className={styles.timeline}>
        {/* Central vertical line */}
        <div className={styles.timelineLine}>
          <div className={styles.lineProgress} />
        </div>
        
        {roadmapItems.map((item, idx) => (
          <div key={idx} className={`${styles.timelineNode} ${styles[item.status]}`}>
            {/* Animated connector line between nodes */}
            {idx > 0 && (
              <div className={styles.connectorLine}>
                <div className={styles.connectorProgress} style={{ '--delay': `${idx * 0.3}s` }} />
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
                <span className={`${styles.statusBadge} ${styles[item.status]}`}>
                  {item.status === "upcoming" ? "🔜 Upcoming" : item.status === "in-progress" ? "⚡ In Progress" : "📋 Planned"}
                </span>
              </div>
              <div className={styles.cardAccent} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footerNote}>
        <div className={styles.noteIcon}>💡</div>
        <p>Our roadmap is shaped by user feedback and emerging AI innovation — ensuring MagicChat evolves with your business needs.</p>
      </div>
    </div>
  );
}