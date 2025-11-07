import React from "react";
import styles from "./PricingPlans.module.css";
import FinalValue from "./FinalValue";

const PricingPlans = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingHeader}>
        <h2>Pricing That Grows With You</h2>
        <p>
          Start free, scale as you grow. MagicChat pays for itself by increasing
          conversions and reducing support costs.
        </p>
      </div>

      {/* --- Pricing Table Section --- */}
      <div className={styles.pricingSummary}>
        <h3>How much does it cost?</h3>
        <p>We grow as you grow — with simple, transparent pricing.</p>

        <div className={styles.tableWrapper}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Best For</th>
                <th>Monthly Price</th>
                <th>Key Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🚀 Launch</td>
                <td>Individuals & MVPs</td>
                <td>Free Forever</td>
                <td>Basic AI Bot, Lead Capture, 2 Agents, Unlimited Websites</td>
              </tr>
              <tr className={styles.highlightRow}>
                <td>🌟 Starter</td>
                <td>Small Teams</td>
                <td>₹999/month</td>
                <td>Enhanced AI Bot, 4 Agents, 500 Users, Basic Analytics</td>
              </tr>
              <tr >
                <td>🌱 Growth</td>
                <td>Startups & Agencies</td>
                <td>₹2499/month</td>
                <td>
                  Advanced AI + RAG Engine, 20 Agents, 1K+ Users, API Access,
                  Branding Removal
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={styles.annualNote}>
          👉 <strong>Annual Plans</strong> include 2 months free + priority
          support.
        </p>
      </div>

      <FinalValue />
    </section>
  );
};

export default PricingPlans;
