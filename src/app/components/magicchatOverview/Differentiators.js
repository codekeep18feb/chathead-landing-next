import React from "react";
import styles from "./Differentiators.module.css";

export default function Differentiators() {
  return (
    <div className={`${styles.section} ${styles.split}`}>
      <div>
        <h2>How are we different from others?</h2>
        <ul className={styles.bullets}>
          <li>👨‍👩‍👧 <b>Built for Teams</b> — Multi-admin collaboration with live routing and permissions.</li>
          <li>🤖 <b>True AI, Real Data</b> — Trained from your actual content, not pre-filled templates.</li>
          <li>🔒 <b>Your Data Stays Yours</b> — Private by design, never shared or used for external training.</li>
          <li>⚡ <b>Set Up in Minutes</b> — Connect your site, upload docs, and go live — no developers needed.</li>
          <li>🪶 <b>Lightweight and Fast</b> — Optimized for performance, even on low-bandwidth websites.</li>
        </ul>
      </div>
    </div>
  );
}
