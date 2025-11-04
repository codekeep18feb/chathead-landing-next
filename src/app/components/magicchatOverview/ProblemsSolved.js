import React from "react";
import styles from "./ProblemsSolved.module.css";

export default function ProblemsSolved() {
  return (
    <div className={styles.section}>
      <h2>What problems do we solve — and how?</h2>

      <h3>Without MagicChat</h3>
      <ul className={styles.bullets}>
        <li>Repetitive customer queries drain team time.</li>
        <li>Support isn’t always available — and leads drop off.</li>
        <li>Data and conversations stay scattered across tools.</li>
      </ul>

      <h3>With MagicChat</h3>
      <ul className={styles.bullets}>
        <li>AI handles 60%+ of repetitive questions instantly.</li>
        <li>Always-on, AI-powered chat keeps visitors engaged 24/7.</li>
        <li>Unified inbox + integrations ensure no lead goes missing.</li>
        <li>Teams save hours weekly, focusing on real customer impact.</li>
      </ul>
    </div>
  );
}
