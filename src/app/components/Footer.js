import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        {/* Brand */}
        <div className={styles.column}>
          <h3 className={styles.brand}>MagicChat</h3>
          <p className={styles.tagline}>
            AI-powered chat for instant support, lead capture, and team collaboration.
          </p>

          <a href="https://magicchat.io" target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaBtn}>Try MagicChat Free →</button>
          </a>


        </div>

        {/* Product */}
        <div className={styles.column}>
          <h4>Platform</h4>
          <ul>
            <li>AI Chatbot</li>
            <li>Live Chat</li>
            <li>Unified Inbox</li>
            <li>Lead Generation</li>
            <li>RAG Engine</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className={styles.column}>
          <h4>Solutions</h4>
          <ul>
            <li>For SaaS Startups</li>
            <li>For SMBs</li>
            <li>For Agencies</li>
            <li>For Education</li>
            <li>For Enterprises</li>
          </ul>
        </div>

        {/* Developers */}
        <div className={styles.column}>
          <h4>Developers</h4>
          <ul>
            <li>Docs</li>
            <li>API</li>
            <li>Auth</li>
            <li>CMS Plugins</li>
            <li>Changelog</li>
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li>What We Solve</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Roadmap</li>
            <li>Demo</li>
          </ul>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} MagicChat — All rights reserved.</p>
      </div>
    </footer>
  );
}
