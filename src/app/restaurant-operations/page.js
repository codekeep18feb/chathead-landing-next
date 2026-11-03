// src/app/restaurant-operations/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./RestaurantOps.module.css";

export default function RestaurantOperationsPage() {
  const timeline = [
    {
      time: "6:00 AM",
      role: "Kitchen Manager",
      prompt: "What's running low today?",
      action: "Inventory API → Auto-UI table → Reorder button",
      impact: "Reorder triggered in 3 minutes, not 3 hours of stocktaking.",
      icon: "📦",
    },
    {
      time: "10:00 AM",
      role: "Franchise Owner",
      prompt: "How did Store #4 do yesterday vs last week?",
      action: "Multi-store chain → aggregated data → chart screen",
      impact: "Cross-store comparison without a BI tool or export.",
      icon: "📊",
    },
    {
      time: "12:30 PM",
      role: "Customer (via widget)",
      prompt: "Table for 4 tonight at 8?",
      action: "Availability API → hold → payment → confirmation",
      impact: "Multi-step booking in one screen. No phone call.",
      icon: "🍽️",
    },
    {
      time: "3:00 PM",
      role: "Store Manager",
      prompt: "Approve the cold food refund for order #4421",
      action: "Human-in-the-loop pause → Manager approval → payment API",
      impact: "Refunds never auto-execute above $50. Manual approval only.",
      icon: "💸",
    },
    {
      time: "5:00 PM",
      role: "Shift Supervisor",
      prompt: "Swap Sarah's shift tomorrow with Mike",
      action: "HR API → conflict check → form screen → confirm",
      impact: "Shift swap completed without a manager phone call.",
      icon: "👨‍🍳",
    },
    {
      time: "8:00 PM",
      role: "Franchise Owner",
      prompt: "Are we hitting our Friday target?",
      action: "Analytics API → comparison screen → daily summary",
      impact: "Live performance without waiting for the next morning's report.",
      icon: "📈",
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.badge}>🍽️ Restaurant Operations</div>
        <h1 className={styles.heroTitle}>
          A Tuesday in the Life of a<br />
          <span className={styles.highlight}>Restaurant AI Agent.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Every interaction below is powered by your existing backend APIs — 
          no new database, no new infrastructure. Just the AI agent routing 
          intents to the APIs you already have.
        </p>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.timeline}>
          {timeline.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineTime}>{item.time}</div>
              <div className={styles.timelineDot}>
                <span>{item.icon}</span>
              </div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineRole}>{item.role}</div>
                <div className={styles.timelinePrompt}>"{item.prompt}"</div>
                <div className={styles.timelineFlow}>
                  <span className={styles.flowLabel}>Flow:</span>
                  <span className={styles.flowText}>{item.action}</span>
                </div>
                <div className={styles.timelineImpact}>
                  <span>💡</span>
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>See Your Restaurant's Tuesday</h2>
        <p className={styles.ctaSubtitle}>
          Book a demo and we'll show you the exact flows for your restaurant 
          CRM, using your own APIs.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact_us" className={styles.primaryBtn}>Book a Demo</Link>
          <Link href="/pricing" className={styles.secondaryBtn}>See Pricing</Link>
        </div>
      </section>
    </div>
  );
}