"use client";
import React, { useState } from "react";
import styles from "./PricingPlansPage.module.css";

const PricingPlansPage = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.paperTexture} />
      <div className={styles.staples}>
        <div className={styles.staple} />
        <div className={styles.staple} />
        <div className={styles.staple} />
        <div className={styles.staple} />
      </div>

      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          Runtime Pricing<span className={styles.cursor}></span>That Scales
        </h2>
        <p>
          Frameworks give you building blocks. We give you a runtime that's already wired,
          already async, and already multi-tenant. Charge for scale, not for features.
        </p>
      </div>

      <div className={styles.annualTerminal}>
        <div className={styles.annualCard}>
          <span className={styles.annualEmoji}>📅</span>
          <div>
            <strong>Annual Plans</strong> include 30% off + priority support.
          </div>
          <span className={styles.annualChip}>SAVE 30%</span>
        </div>
      </div>

      <div className={styles.annualTerminal} style={{ marginTop: "-10px", marginBottom: "30px" }}>
        <div className={styles.annualCard} style={{ background: "#ecfdf5", borderColor: "#10b981" }}>
          <span className={styles.annualEmoji}>🤝</span>
          <div style={{ color: "#065f46" }}>
            <strong>72-Hour Free Hand:</strong> No hard quotas for 72 hours after registration. Just don't abuse the platform — soft caps apply.
          </div>
          <span className={styles.annualChip} style={{ background: "#10b981", color: "white" }}>ACTIVE</span>
        </div>
      </div>

      <div className={styles.cardTableWrapper}>
        <div className={styles.magneticStripOverlay} />
        <table className={styles.terminalTable}>
          <thead>
            <tr>
              <th>PLAN</th>
              <th>BEST FOR</th>
              <th>MONTHLY PRICE</th>
              <th>KEY HIGHLIGHTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* FREE */}
            <tr
              className={styles.cardRow}
              onMouseEnter={() => setHoveredRow(0)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className={styles.planCell}>
                <div className={styles.cardIconWrapper} style={{ background: "#F3F4F6" }}>
                  <span className={styles.cardIcon}>🚀</span>
                </div>
                <div className={styles.cardName}>
                  <strong>Runtime Free</strong>
                </div>
              </td>
              <td className={styles.bestForCell}>Building the Pilot</td>
              <td className={styles.priceTerminal}>
                <span className={styles.currencySymbol}>₹</span>
                <span className={styles.priceNumber}>0</span>
                <span className={styles.priceSlash}>/</span>
                <span className={styles.pricePeriod}>forever</span>
              </td>
              <td className={styles.highlightCell}>
                1 App · Sync only (30s) · ~500 executions/day · Throttles at limit (never blocks) · Zero-data
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ "--btn-color": "#9CA3AF" }}>
                  <span>Start Building</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>

            {/* RUNTIME */}
            <tr
              className={`${styles.cardRow} ${styles.popularRow}`}
              onMouseEnter={() => setHoveredRow(1)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className={styles.planCell}>
                <div className={styles.cardIconWrapper} style={{ background: "#ECFDF5" }}>
                  <span className={styles.cardIcon}>🌱</span>
                </div>
                <div className={styles.cardName}>
                  <strong>Runtime</strong>
                  <span className={styles.cardChip}>🔥</span>
                </div>
              </td>
              <td className={styles.bestForCell}>Shipping to Customers</td>
              <td className={styles.priceTerminal}>
                <span className={styles.currencySymbol}>₹</span>
                <span className={styles.priceNumber}>16,999</span>
                <span className={styles.priceSlash}>/</span>
                <span className={styles.pricePeriod}>month</span>
              </td>
              <td className={styles.highlightCell}>
                50 Apps incl. (+$99 → 200 · +$399 → 500) · 500K executions incl. · $0.08/1K overage · 30-min async (upgrades +$50/+$150/+$400) · 30d retention (+$30/+$100) · Multi-Admin
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ "--btn-color": "#4BCF9E" }}>
                  <span>Start Shipping</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>

            {/* ENTERPRISE */}
            <tr
              className={styles.cardRow}
              onMouseEnter={() => setHoveredRow(2)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className={styles.planCell}>
                <div className={styles.cardIconWrapper} style={{ background: "#EEF2FF" }}>
                  <span className={styles.cardIcon}>🏢</span>
                </div>
                <div className={styles.cardName}>
                  <strong>Enterprise Runtime</strong>
                </div>
              </td>
              <td className={styles.bestForCell}>Platform Scale (e.g. Petpooja)</td>
              <td className={styles.priceTerminal}>
                <span className={styles.priceNumber} style={{ fontSize: "16px" }}>
                  From $1,500/mo
                </span>
                <span style={{ fontSize: "11px", display: "block", color: "#6b7280", marginTop: "4px" }}>
                  + $15,000 activation
                </span>
              </td>
              <td className={styles.highlightCell}>
                Unlimited Apps & Executions · Unlimited async · BYO storage · 3-month minimum · $15K activation (workshops + onboarding) · Dedicated SLA · 24/7 support
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ "--btn-color": "#6366F1" }}>
                  <span>Contact Sales</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.cardFooterStrip}>
          <div className={styles.visaLines}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.securityBadge}>
            <span>🔒</span> Zero-Data Default · 256-bit SSL · Published Overage Rates
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlansPage;