import React from "react";
import styles from "./ProblemsSolved.module.css";
import { FaRegTimesCircle, FaMagic } from "react-icons/fa";

export default function ProblemsSolved() {
  return (
    <div className={styles.section}>
      <h2>What problems do we solve — and how?</h2>

      <div className={styles.sectionContent}>
        <div className={`${styles.card} ${styles.leftCard}`}>
          <div className={styles.cardHeader}>
            <FaRegTimesCircle className={styles.cardIcon} />
            <h3>Without MagicChat</h3>
          </div>
          <ul className={styles.bullets}>
            <li>Repetitive customer queries drain team time.</li>
            <li>Support isn’t always available — and leads drop off.</li>
            <li>Data and conversations stay scattered across tools.</li>
          </ul>
        </div>

        <div className={styles.divider}></div>

        <div className={`${styles.card} ${styles.rightCard}`}>
          <div className={styles.cardHeader}>
            <FaMagic className={styles.cardIcon} />
            <h3>With MagicChat</h3>
          </div>
          <ul className={styles.bullets}>
            <li>AI handles 60%+ of repetitive questions instantly.</li>
            <li>Always-on, AI-powered chat keeps visitors engaged 24/7.</li>
            <li>Unified inbox + integrations ensure no lead goes missing.</li>
            <li>Teams save hours weekly, focusing on real customer impact.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
