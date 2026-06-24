"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./LiveChatFeatures.module.css";
import HeroSection from "../components/reuseableComponents/HeroSection";

const FEATURES = [
  {
    icon: "🟢",
    title: "Live Status & Delivery Reports",
    description:
      "Real-time status indicators, delivery reports, and email notifications. Know exactly when your message is seen, delivered, or read.",
    tag: "Real-Time",
    gradient: "gradient1",
  },
  {
    icon: "👥",
    title: "Solo / Team Toggle",
    description:
      "One-click toggle transforms your chat from solo mode to full team collaboration. No complex setup—just flip the switch.",
    tag: "Flexible",
    gradient: "gradient2",
  },
  {
    icon: "🛡️",
    title: "Advanced RBAC",
    description:
      "Robust role-based access control with automatic UI customization. Greenbar support for multiple apps and brands with dynamic role-based interfaces.",
    tag: "Security",
    gradient: "gradient3",
  },
  {
    icon: "💬",
    title: "Separate Live Chat Widget",
    description:
      "Dedicated, professional widget with clean UI and clear join details. Separate screens for clients that maintain brand consistency.",
    tag: "UX Focused",
    gradient: "gradient4",
  },
  {
    icon: "🔊",
    title: "Advanced Join Chat",
    description:
      "Broadcast live join messages to all permitted support users. First-come-first-serve matching with intelligent conflict prevention.",
    tag: "Smart Routing",
    gradient: "gradient5",
  },
  {
    icon: "📜",
    title: "Switch History",
    description:
      "Support and admin users can toggle between personal chat history with specific users or view all conversations across the organization.",
    tag: "Visibility",
    gradient: "gradient6",
  },
  {
    icon: "🔐",
    title: "Session Management",
    description:
      "Toggle session enablement per app. Transforms client widget UI and activates session widgets for admins—all with one switch.",
    tag: "Control",
    gradient: "gradient7",
  },
  {
    icon: "🏢",
    title: "Multiple Brand Support",
    description:
      "Manage multiple apps and brands under one admin panel with flawless account settings. Scale your support operations without complexity.",
    tag: "Scalable",
    gradient: "gradient8",
  },
];

const COMPETITIVE_ADVANTAGES = [
  {
    icon: "🚫",
    title: "Not Just Text Delivery",
    description:
      "While others barely provide text delivery from inbox to user, we offer rich media, reactions, replies, and file uploads.",
  },
  {
    icon: "⚡",
    title: "Real Agility",
    description:
      "Switch between solo and team modes instantly. No migration, no reconfiguration—just pure operational flexibility.",
  },
  {
    icon: "🎯",
    title: "Intelligent Routing",
    description:
      "Advanced join chat with broadcast capabilities and first-come-first-serve matching prevents duplicate responses and confusion.",
  },
  {
    icon: "📊",
    title: "Complete Visibility",
    description:
      "Switch between personal and all-history views. Every conversation is transparent, traceable, and auditable.",
  },
];

const PROBLEM_SOLUTION = [
  {
    problem: "Most chat providers just forward text messages like an inbox.",
    solution:
      "We deliver live status, rich media, reactions, and intelligent routing—real-time conversations, not delayed messaging.",
  },
  {
    problem: "Team collaboration requires complex setups and migrations.",
    solution:
      "One toggle transforms solo support to team collaboration. No complex configuration, no downtime.",
  },
  {
    problem: "Managing multiple brands means multiple logins and dashboards.",
    solution:
      "One admin panel handles unlimited apps and brands with separate settings, RBAC, and custom UIs per brand.",
  },
];

const LiveChatFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Stats defined at the top level
  const stats = [
    { value: 8, suffix: "+", label: "Advanced Features" },
    { value: 3, suffix: "x", label: "Faster Resolution" },
    { value: 100, suffix: "%", label: "Team Agility" },
    { value: "∞", suffix: "", label: "Brand Support" },
  ];

  return (
    <section ref={sectionRef} className={styles.container}>
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <HeroSection
        badge="💬 Live Agility Platform"
        title="Live Chat That Actually"
        highlightedText="Works for Teams"
        subtitle="Not just text forwarding. Real-time status, team collaboration, intelligent routing, and multi-brand support—all in one platform."
        stats={stats} // Using stats from parent
        showButtons={false} // Hide buttons
        showShapes={true} // Keep shapes
      />

      {/* ─── Problem / Solution ───────────────────────────────────────── */}
      <div className={styles.problemSection}>
        <h2 className={styles.sectionTitle}>
          The <span className={styles.highlight}>Reality</span> of Most Chat
          Solutions
        </h2>
        <div className={styles.problemGrid}>
          {PROBLEM_SOLUTION.map((item, idx) => (
            <div key={idx} className={styles.problemCard}>
              <div className={styles.problemHeader}>
                <span className={styles.problemIcon}>❌</span>
                <div className={styles.problemContent}>
                  <div className={styles.problemText}>"{item.problem}"</div>
                </div>
              </div>
              <div className={styles.solutionDivider}>
                <span className={styles.arrowDown}>↓</span>
                <span className={styles.solutionLabel}>OUR SOLUTION</span>
                <span className={styles.arrowDown}>↓</span>
              </div>
              <div className={styles.solutionContent}>
                <span className={styles.solutionIcon}>✅</span>
                <p className={styles.solutionText}>{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Competitive Advantages ───────────────────────────────────── */}
      <div className={styles.advantagesSection}>
        <div className={styles.advantagesHeader}>
          <h2 className={styles.sectionTitle}>
            What Makes Us <span className={styles.highlight}>Different</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            While others barely provide text delivery, we deliver a complete
            live chat experience
          </p>
        </div>

        <div className={styles.advantagesGrid}>
          {COMPETITIVE_ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className={`${styles.advantageCard} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className={styles.advantageIconWrapper}>
                <span className={styles.advantageIcon}>{adv.icon}</span>
              </div>
              <h3 className={styles.advantageTitle}>{adv.title}</h3>
              <p className={styles.advantageDescription}>{adv.description}</p>
              <div className={styles.advantageGlow}></div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Features Grid ────────────────────────────────────────────── */}
      <div className={styles.featuresSection}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>
            Advanced Live Chat{" "}
            <span className={styles.highlight}>Features</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Everything you need for professional, team-based live chat support
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className={`${styles.featureCard} ${styles[feature.gradient]}`}
              onMouseEnter={() => setActiveFeature(idx)}
              onMouseLeave={() => setActiveFeature(0)}
            >
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>{feature.icon}</span>
              </div>
              <div className={styles.featureTag}>{feature.tag}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.featureHoverGlow}></div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Comparison Table ─────────────────────────────────────────── */}
      <div className={styles.comparisonSection}>
        <h2 className={styles.sectionTitle}>
          Live Chat <span className={styles.highlight}>vs</span> The Rest
        </h2>

        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeader}>
              <span className={styles.comparisonIcon}>❌</span>
              <h3>Basic Chat Providers</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>📝 Text-only delivery</li>
              <li>📧 Basic inbox-style messaging</li>
              <li>👤 Single user mode only</li>
              <li>🔄 No real-time status</li>
              <li>🏢 One brand per dashboard</li>
              <li>📊 Limited history access</li>
            </ul>
          </div>

          <div className={`${styles.comparisonCard} ${styles.winnerCard}`}>
            <div className={styles.comparisonHeader}>
              <span className={styles.comparisonIcon}>⭐</span>
              <h3>Our Live Chat Platform</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>✅ Rich media, reactions, replies</li>
              <li>⚡ Real-time status & delivery reports</li>
              <li>👥 Solo/Team toggle</li>
              <li>🛡️ Advanced RBAC</li>
              <li>🏢 Multiple brand support</li>
              <li>📊 Switch between personal/all history</li>
              <li>🔐 Session management</li>
              <li>🎯 Intelligent join chat routing</li>
            </ul>
            <div className={styles.winnerBadge}>🏆 Clear Winner</div>
          </div>
        </div>
      </div>

      {/* ─── Use Cases ────────────────────────────────────────────────── */}
      <div className={styles.usecaseSection}>
        <h2 className={styles.sectionTitle}>
          Perfect for <span className={styles.highlight}>Every Team</span>
        </h2>

        <div className={styles.usecaseGrid}>
          <div className={styles.usecaseCard}>
            <span className={styles.usecaseIcon}>🛒</span>
            <h3>E-commerce Support</h3>
            <p>
              Handle multiple brands with dedicated agents, real-time order
              updates, and rich media for product queries.
            </p>
          </div>
          <div className={styles.usecaseCard}>
            <span className={styles.usecaseIcon}>💼</span>
            <h3>SaaS Teams</h3>
            <p>
              Scale support with RBAC, session management, and seamless team
              collaboration across multiple products.
            </p>
          </div>
          <div className={styles.usecaseCard}>
            <span className={styles.usecaseIcon}>🏥</span>
            <h3>Healthcare & Services</h3>
            <p>
              Secure session management, audit trails, and role-based access for
              sensitive client communications.
            </p>
          </div>
          <div className={styles.usecaseCard}>
            <span className={styles.usecaseIcon}>🌐</span>
            <h3>Global Enterprises</h3>
            <p>
              Multi-brand support with customized UIs per region, team routing,
              and comprehensive history management.
            </p>
          </div>
        </div>
      </div>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaIcon}>💬</div>
          <h2 className={styles.ctaTitle}>
            Ready to Experience <br />
            <span className={styles.gradientText}>Live Agility?</span>
          </h2>
          <p className={styles.ctaSubtitle}>
            Stop settling for basic text delivery. Get the complete live chat
            platform that actually works for teams.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className={styles.ctaSecondary}>See Live Demo</button>
          </div>
          <div className={styles.ctaTrust}>
            <span>🔒 Secure & Encrypted</span>
            <span>⚡ Instant Setup</span>
            <span>💳 No Credit Card</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveChatFeatures;