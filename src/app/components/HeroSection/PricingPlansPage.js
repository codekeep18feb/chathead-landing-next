"use client"
import React, { useState } from "react";
import styles from "./PricingPlansPage.module.css";
import FinalValuePage from "./FinalValuePage";

const PricingPlansPage = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className={styles.section}>
      {/* Vintage paper texture background from V1 */}
      <div className={styles.paperTexture} />
      <div className={styles.staples}>
        <div className={styles.staple} />
        <div className={styles.staple} />
        <div className={styles.staple} />
        <div className={styles.staple} />
      </div>

      {/* Terminal header from V2 */}
      <div className={styles.header}>
        <div className={styles.terminalHeader}>
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
        </div>
        <h2>Pricing That<span className={styles.cursor}>_</span>Grows With You!</h2>
        {/* <p className={styles.terminalSub}>$ ./select-plan --transparent</p> */}
        <p>Start free, scale as you grow. MagicChat pays for itself by increasing conversions and reducing support costs.</p>
      </div>

      {/* Card Table from V2 with original text */}
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
                  <strong>Launch</strong>
                </div>
              </td>
              <td className={styles.bestForCell}>Individuals & MVPs</td>
              <td className={styles.priceTerminal}>
                <span className={styles.currencySymbol}>₹</span>
                <span className={styles.priceNumber}>0</span>
                <span className={styles.priceSlash}>/</span>
                <span className={styles.pricePeriod}>forever</span>
              </td>
              <td className={styles.highlightCell}>
                Basic AI Bot, Lead Capture, 2 Agents, Unlimited Websites
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ '--btn-color': "#9CA3AF" }}>
                  <span>Select</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>

            <tr 
              className={`${styles.cardRow} ${styles.popularRow}`}
              onMouseEnter={() => setHoveredRow(1)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className={styles.planCell}>
                <div className={styles.cardIconWrapper} style={{ background: "#ECFDF5" }}>
                  <span className={styles.cardIcon}>🌟</span>
                </div>
                <div className={styles.cardName}>
                  <strong>Starter</strong>
                  <span className={styles.cardChip}>💳</span>
                </div>
              </td>
              <td className={styles.bestForCell}>Small Teams</td>
              <td className={styles.priceTerminal}>
                <span className={styles.currencySymbol}>₹</span>
                <span className={styles.priceNumber}>999</span>
                <span className={styles.priceSlash}>/</span>
                <span className={styles.pricePeriod}>month</span>
              </td>
              <td className={styles.highlightCell}>
                Enhanced AI Bot, 4 Agents, 500 Users, Basic Analytics
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ '--btn-color': "#4BCF9E" }}>
                  <span>Select</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>

            <tr 
              className={styles.cardRow}
              onMouseEnter={() => setHoveredRow(2)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <td className={styles.planCell}>
                <div className={styles.cardIconWrapper} style={{ background: "#EEF2FF" }}>
                  <span className={styles.cardIcon}>🌱</span>
                </div>
                <div className={styles.cardName}>
                  <strong>Growth</strong>
                </div>
              </td>
              <td className={styles.bestForCell}>Startups & Agencies</td>
              <td className={styles.priceTerminal}>
                <span className={styles.currencySymbol}>₹</span>
                <span className={styles.priceNumber}>2499</span>
                <span className={styles.priceSlash}>/</span>
                <span className={styles.pricePeriod}>month</span>
              </td>
              <td className={styles.highlightCell}>
                Advanced AI + RAG Engine, 20 Agents, 1K+ Users, API Access, Branding Removal
              </td>
              <td className={styles.actionCell}>
                <button className={styles.swipeBtn} style={{ '--btn-color': "#6366F1" }}>
                  <span>Select</span>
                  <span className={styles.swipeArrow}>→</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.cardFooterStrip}>
          <div className={styles.visaLines}>
            <span></span><span></span><span></span>
          </div>
          <div className={styles.securityBadge}>
            <span>🔒</span> PCI Compliant • 256-bit SSL
          </div>
        </div>
      </div>

      {/* Annual Note from original */}
      <div className={styles.annualTerminal}>
        <div className={styles.annualCard}>
          <span className={styles.annualEmoji}>📅</span>
          <div>
            <strong>Annual Plans</strong> include 2 months free + priority support.
          </div>
          <span className={styles.annualChip}>SAVE 17%</span>
        </div>
      </div>

      <FinalValuePage />
    </section>
  );
};

export default PricingPlansPage;