// src/app/components/Footer.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Column 1: Brand & Description */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>✨</span>
              <span className={styles.logoText}>Sageion</span>
            </Link>
            <p className={styles.description}>
              The deterministic AI Agent runtime for Restaurant CRMs. 
              Turn existing APIs into enterprise-grade workflows with 
              auto-generated UI, async webhooks, and zero data storage.
            </p>
            <Link href="/pricing" className={styles.ctaButton}>
              Start Free Trial →
            </Link>
          </div>

          {/* Column 2: Platform */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Platform</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/ai-agent-configuration">AI Agent Builder</Link>
              </li>
              <li>
                <Link href="/platform/connectors">Connector Framework</Link>
              </li>
              <li>
                <Link href="/restaurant-operations">Restaurant Operations</Link>
              </li>
              <li>
                <Link href="/security">Security & Compliance</Link>
              </li>
              <li>
                <Link href="/identity">Identity Ownership</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Solutions</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/solutions/restaurant-crms">Restaurant OS / CRMs</Link>
              </li>
              <li>
                <Link href="/solutions/franchise-management">Franchise Management</Link>
              </li>
              <li>
                <Link href="/solutions/pos-order-workflows">POS & Order Workflows</Link>
              </li>
              <li>
                <Link href="/solutions/enterprise-chains">Enterprise Chains</Link>
              </li>
              <li>
                <Link href="/solutions/startup-saas">Startup SaaS</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Developers */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Developers</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/documentation">API Reference</Link>
              </li>
              <li>
                <Link href="/documentation">Auth Integration</Link>
              </li>
              <li>
                <Link href="/documentation">Chain Builder</Link>
              </li>
              <li>
                <Link href="/changelog">Changelog</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Learn / Resources */}
          <div className={styles.linkColumn}>
            <h4 className={styles.heading}>Learn</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/why-runtime">Runtime vs Framework</Link>
              </li>
              <li>
                <Link href="/WhyWeAreSpecial">Why Sageion</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/roadmap">Roadmap</Link>
              </li>
              <li>
                <Link href="/contact_us">Book a Demo</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} Sageion — All rights reserved.
          </div>
          <div className={styles.trustSignals}>
            <span>🔒 You own your users & auth</span>
            <span>⚡ No LLM token costs</span>
            <span>🛡️ Zero-data by default</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;