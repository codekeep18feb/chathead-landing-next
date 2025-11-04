import React from "react";
import styles from "./RoadmapNext.module.css";

export default function RoadmapNext() {
  return (
    <div className={styles.section}>
      <h2>What’s next for MagicChat?</h2>
      <ul className={styles.bullets}>
        <li>🎙️ Voice-Enabled AI Chat</li>
        <li>🔁 Workflow Automations</li>
        <li>🧾 CRM + Email Sync</li>
        <li>❤️ Sentiment Analysis & Smart Insights</li>
      </ul>
      <p>
        Our roadmap is shaped by user feedback and emerging AI innovation — ensuring MagicChat evolves with your business needs.
      </p>
    </div>
  );
}
