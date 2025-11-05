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

      {/* --- New Pricing Overview Content --- */}
      <div className={styles.pricingSummary}>
        <h3>How much does it cost?</h3>
        <p>We grow as you grow — with simple, transparent pricing.</p>

        <div className={styles.pricingTable}>
          <div className={styles.pricingRowHeader}>
            <span>Plan</span>
            <span>Best For</span>
            <span>Monthly Price</span>
            <span>Key Highlights</span>
          </div>

          <div className={styles.pricingRow}>
            <span>🚀 Launch</span>
            <span>Individuals & MVPs</span>
            <span>Free Forever</span>
            <span>
              Basic AI Bot, Lead Capture, 2 Agents, Unlimited Websites
            </span>
          </div>

          <div className={styles.pricingRow}>
            <span>🌟 Starter</span>
            <span>Small Teams</span>
            <span>₹999/month</span>
            <span>Enhanced AI Bot, 4 Agents, 500 Users, Basic Analytics</span>
          </div>

          <div className={styles.pricingRow}>
            <span>🌱 Growth</span>
            <span>Startups & Agencies</span>
            <span>₹2499/month</span>
            <span>
              Advanced AI + RAG Engine, 20 Agents, 1K+ Users, API Access,
              Branding Removal
            </span>
          </div>
        </div>

        <p className={styles.annualNote}>
          👉 <strong>Annual Plans</strong> include 2 months free + priority
          support.
        </p>
      </div>

      {/* --- Existing Card-based Visual Overview --- */}

      <FinalValue/>
    </section>
  );
};

export default PricingPlans;
