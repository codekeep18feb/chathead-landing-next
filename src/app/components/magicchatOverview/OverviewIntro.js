import React from "react";
import styles from "./OverviewIntro.module.css";

export default function OverviewIntro() {
  return (
    <div className={`${styles.section} ${styles.intro}`}>
      <h2>What is MagicChat?</h2>
      <p>
        MagicChat is your all-in-one AI chat platform that helps businesses deliver instant,
        intelligent, and on-brand customer conversations — across the web, chat widgets, and
        messaging channels. It learns directly from your data — your website, documents, and FAQs —
        so every reply feels natural, relevant, and deeply aligned with your brand’s voice.
      </p>
    </div>
  );
}
