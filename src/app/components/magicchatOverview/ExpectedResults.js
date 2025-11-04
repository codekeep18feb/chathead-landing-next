import React from "react";
import styles from "./ExpectedResults.module.css";

export default function ExpectedResults() {
  return (
    <div className={styles.section}>
      <h2>What results can I expect?</h2>
      <ul className={styles.bullets}>
        <li>⚡ 60% faster response times</li>
        <li>🧩 40% fewer repetitive tickets</li>
        <li>💰 2× higher conversion rates from chat-driven leads</li>
        <li>⏱️ 10+ hours saved per week per support team</li>
      </ul>
      <p>MagicChat pays for itself — usually within the first month.</p>
    </div>
  );
}
