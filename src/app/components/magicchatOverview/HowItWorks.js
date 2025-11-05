import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  "Train your chatbot — add your website or upload documents.",
  "Customize the widget with your logo, colors, and tone.",
  "Collaborate with teammates in the unified dashboard.",
  "Analyze metrics, refine answers, and continuously improve.",
  "Setup takes less than 5 minutes — and no coding required.",
];

export default function HowItWorks() {
  return (
    <div className={styles.section}>
      <h2>How does it work?</h2>

      <div className={styles.cardsContainer}>
        {steps.map((step, i) => (
          <div
            key={i}
            className={`${styles.card} ${
              i === 0
                ? styles.cardWide
                : i === 1
                ? styles.cardMedium
                : i === 2
                ? styles.cardNarrow
                : styles.cardEven
            }`}
          >
            <span className={styles.stepNumber}>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
