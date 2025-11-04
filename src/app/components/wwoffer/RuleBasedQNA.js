import React from "react";
import styles from "./WhatWeOffer.module.css";

const RuleBasedQNA = () => {
  return (
    <section className={styles.featureBlock}>
      <h3 className={styles.featureTitle}>Rule-Based Q&A</h3>
      <div className={styles.featureContent}>
        <p>
          Create dynamic, no-code question-answer flows that guide users instantly to the right
          information.
        </p>
        <ul>
          <li>Fully customizable rule-based Q&A setup</li>
          <li>Instant UI updates for all users — no reloads or downtime</li>
          <li>Perfect for onboarding, product education, or quick troubleshooting</li>
          <li>Supports instant form actions and conditional paths</li>
          <li>Can blend seamlessly with your live chat or AI chatbot</li>
        </ul>
      </div>
    </section>
  );
};

export default RuleBasedQNA;
