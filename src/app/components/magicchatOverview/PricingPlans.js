import React from "react";
import styles from "./PricingPlans.module.css";
import FinalValue from "./FinalValue";

const PricingPlans = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.pricingHeader}>
        <h2>Runtime Pricing That Scales With You</h2>
        <p>
          Start free to build your pilot. Scale to Enterprise when you're ready to ship 
          to hundreds of restaurant CRMs. No per-token LLM costs. Zero data storage by default.
        </p>
      </div>

      {/* --- Pricing Table Section --- */}
      <div className={styles.pricingSummary}>
        <h3>How much does it cost?</h3>
        <p>Simple, transparent tiers. We charge for scale, async quality, and trust — not for features.</p>

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
                <td>🚀 Runtime Free</td>
                <td>Building the Pilot</td>
                <td>Free Forever</td>
                <td>1 App, Sync only (30s max), Zero-data, Full feature access</td>
              </tr>
              <tr className={styles.highlightRow}>
                <td>🌱 Runtime</td>
                <td>Shipping to Customers</td>
                <td>₹16,999/month</td>
                <td>50 Apps, Async up to 30 mins, Session history, 500K executions</td>
              </tr>
              <tr>
                <td>🏢 Enterprise Runtime</td>
                <td>Platform Scale (e.g. Petpooja)</td>
                <td>Custom</td>
                <td>
                  Unlimited Apps, Unlimited async windows, BYO storage, Dedicated SLA
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{
          background: '#ecfdf5',
          border: '1px solid #10b981',
          padding: '16px',
          borderRadius: '8px',
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '24px' }}>🤝</span>
          <div>
            <strong style={{ color: '#065f46', display: 'block', marginBottom: '4px' }}>
              72-Hour Free Hand
            </strong>
            <span style={{ color: '#047857', fontSize: '14px' }}>
              Register today and we won't enforce hard quotas for 72 hours. Build your first workflow without limits. Just don't abuse the platform — soft caps apply.
            </span>
          </div>
        </div>

        <p className={styles.annualNote}>
          👉 <strong>Annual Plans</strong> include 30% off + priority support.
        </p>
      </div>

      <FinalValue />
    </section>
  );
};

export default PricingPlans;