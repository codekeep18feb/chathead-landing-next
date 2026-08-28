import React from "react";
import styles from "./ExpectedResults.module.css";

export default function ExpectedResults() {
  const results = [
    { emoji: "⚡", value: "60%", text: "Faster response times" },
    { emoji: "🧩", value: "40%", text: "Fewer repetitive tickets" },
    { emoji: "💰", value: "2×", text: "Higher conversion rates" },
    { emoji: "⏱️", value: "10+", text: "Hours saved per week" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What results can I expect?</h2>
      <div className={styles.metrics}>
        {results.map((item, index) => (
          <div key={index} className={styles.metric}>
            <span className={styles.emoji}>{item.emoji}</span>
            <span className={styles.value}>{item.value}</span>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        Sageion pays for itself — usually within the first month.
      </p>
    </section>
  );
}
