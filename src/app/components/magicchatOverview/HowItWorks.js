import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  "Train your chatbot — add your website or upload documents.",
  "Customize the widget with your logo, colors, and tone.",
  "Connect your preferred chat channels (Web, WhatsApp, etc.).",
  "Collaborate with teammates in the unified dashboard.",
  "Analyze metrics, refine answers, and continuously improve.",
  "Setup takes less than 5 minutes — and no coding required.",
];

export default function HowItWorks() {
  return (
    <div className={`${styles.section} ${styles.cardsSection}`}>
      <h2>How does it work?</h2>
      <div className={styles.cardsGrid}>
        {steps.map((step, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
