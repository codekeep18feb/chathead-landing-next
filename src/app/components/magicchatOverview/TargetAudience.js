import React from "react";
import styles from "./TargetAudience.module.css";

export default function TargetAudience() {
  return (
    <div className={styles.section}>
      <h2>Who is MagicChat for?</h2>
      <ul className={styles.bullets}>
        <li>🚀 <b>Startups</b> — Automate support and lead capture without extra hiring.</li>
        <li>💻 <b>SaaS Companies</b> — Onboard, retain, and educate users contextually.</li>
        <li>🏢 <b>Agencies</b> — Manage multiple client bots, fully white-labeled.</li>
        <li>🛒 <b>E-Commerce</b> — Offer instant product answers and reduce cart abandonment.</li>
        <li>🧩 <b>Enterprise Teams</b> — Scale support securely with RBAC and analytics.</li>
      </ul>
    </div>
  );
}
