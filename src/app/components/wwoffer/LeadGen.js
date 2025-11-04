import React from "react";
import styles from "./WhatWeOffer.module.css";

const LeadGen = () => {
  return (
    <section className={styles.featureBlock}>
      <h3 className={styles.featureTitle}>Lead Generation</h3>
      <div className={styles.featureContent}>
        <p>
          Capture, qualify, and route leads directly from chat — no forms, no friction.
        </p>
        <ul>
          <li>Instantly create and embed lead-gen forms inside your chatbot</li>
          <li>Automatically collect and centralize lead data</li>
          <li>Trigger workflows or CRM updates via post-data pipelines</li>
          <li>Seamless integration with Q&A or AI chat experiences</li>
          <li>Fully customizable — choose the bot or campaign context</li>
        </ul>
      </div>
    </section>
  );
};

export default LeadGen;
