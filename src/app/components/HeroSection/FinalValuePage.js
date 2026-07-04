import React from "react";
import styles from "./FinalValuePage.module.css";


export default function FinalValuePage() {
  const metrics = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" />
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor" />
        </svg>
      ),
      value: "₹0 → ₹1.2L",
      title: "Avg. ROI in 30 days",
      desc: "Average return for early adopters",
      trend: "+287%",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" />
          <path d="M12 3V9H18" />
        </svg>
      ),
      value: "+40%",
      title: "More lead conversions",
      desc: "Average increase after 3 months",
      trend: "↑ 12% MoM",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8V12L14 14" />
          <path d="M12 16H12.01" />
        </svg>
      ),
      value: "10+ hrs",
      title: "Saved weekly",
      desc: "Per team member, on average",
      trend: "60+ min daily",
    },
  ];

  return (
    <div className={styles.final}>
      {/* Background Shapes */}
      <div className={styles.shapeRing}></div>
      <div className={styles.shapeCross}></div>
      <div className={styles.shapeSparkles}>
        <span>✦</span><span>✧</span><span>✦</span><span>✧</span>
      </div>

      <div className={styles.content}>
        <div className={styles.floatingBadge}>
          <span className={styles.fireIcon}>🔥</span>
          Join 10,000+ happy customers
        </div>

        <h3 className={styles.heading}>
          Value That Scales
          {/* <span className={styles.gradientText}>Scales</span> */}
           With You
        </h3>
        <p className={styles.subtitle}>
          Join thousands of companies that have transformed their customer support
        </p>

        <div className={styles.metrics}>
          {metrics.map((metric, idx) => (
            <div key={idx} className={styles.metric} data-delay={idx * 100}>
              <div className={styles.iconCircle}>{metric.icon}</div>
              <div className={styles.metricValue}>
                {metric.value}
                <span className={styles.trendBadge}>{metric.trend}</span>
              </div>
              <p><strong>{metric.title}</strong></p>
              <span className={styles.metricDesc}>{metric.desc}</span>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>99.9%</span>
            <span className={styles.statLabel}>Uptime SLA</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Support</span>
          </div>
          <div className={styles.statDivider}></div>
          {/* <div className={styles.statItem}>
            <span className={styles.statNumber}>14 days</span>
            <span className={styles.statLabel}>Money back</span>
          </div> */}
        </div>

        <a
          href="https://magicchat.io/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.subscribeBtn}
        >
          <span>Get Started — It's Free</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* <div className={styles.noCreditCard}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
          </svg>
          No credit card required • Free forever plan available
        </div> */}
      </div>
    </div>
  );
}