import React from "react";
import styles from "./Scalability.module.css";

export default function Scalability() {
  return (
    <div className={styles.section}>
      <h2>What makes MagicChat scalable?</h2>
      <ul className={styles.bullets}>
        <li>Cloud-native architecture with auto-scaling and redundancy.</li>
        <li>Handles thousands of simultaneous conversations smoothly.</li>
        <li>Built-in role and access management for distributed teams.</li>
        <li>Easily adaptable for both startups and enterprise deployments.</li>
      </ul>
    </div>
  );
}
