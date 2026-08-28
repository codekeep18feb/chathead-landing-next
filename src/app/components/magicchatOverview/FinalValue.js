import React from "react";
import styles from "./FinalValue.module.css";

export default function FinalValue() {
  return (
    <div className={styles.final}>
      <div className={styles.gradientBg}></div>

      {/* SVG Illustration */}
      <h3>Value That Scales With You</h3>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <div className={styles.iconCircle}>💸</div>
          <p><strong>ROI in 30 days</strong></p>
        </div>
        <div className={styles.metric}>
          <div className={styles.iconCircle}>🚀</div>
          <p><strong>40% more lead conversions</strong></p>
        </div>
        <div className={styles.metric}>
          <div className={styles.iconCircle}>⏱</div>
          <p><strong>Save 10+ hrs weekly</strong></p>
        </div>
      </div>

      <a
        href="https://sageion.com/pricing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={styles.subscribeBtn}>See Full Pricing →</button>
      </a>
    </div>
  );
}
