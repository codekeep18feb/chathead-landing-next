// HowItWorksPage.jsx - Versi
import React from "react";
import styles from "./HowItWorksPage.module.css";

const steps = [
  { text: "Train your chatbot — add your website or upload documents.", icon: "🤖" },
  { text: "Customize the widget with your logo, colors, and tone.", icon: "🎨" },
  { text: "Collaborate with teammates in the unified dashboard.", icon: "👥" },
  { text: "Analyze metrics, refine answers, and continuously improve.", icon: "📊" },
  { text: "Setup takes less than 5 minutes — and no coding required.", icon: "⚡" },
];

export default function HowItWorksPage() {
  return (
    <div className={styles.section}>
      <div className={styles.stickyNote}>
        <h2 className={styles.mainTitle}>How does it work?</h2>
        <p>Five steps to your own AI chatbot</p>
      </div>

      <div className={styles.zigzagContainer}>
        {steps.map((step, i) => (
          <div key={i} className={`${styles.zigzagItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.visualBlock}>
              <div className={styles.iconCircle}>
                <span className={styles.icon}>{step.icon}</span>
              </div>
              <div className={styles.lineConnector} />
            </div>
            <div className={styles.contentBlock}>
              <div className={styles.stepBadge}>Step {i + 1}</div>
              <p className={styles.stepText}>{step.text}</p>
              <div className={styles.arrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}