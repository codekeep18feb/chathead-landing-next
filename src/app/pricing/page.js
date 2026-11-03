"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./pricing.module.css";
import ComparisonTable from "./ComparisonTable";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const comparisonRef = useRef(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // ============================================================
  // 72-HOUR GRACE PERIOD LOGIC
  // ============================================================
  const gracePeriodHours = 72;
  const [graceTimeLeft, setGraceTimeLeft] = useState(gracePeriodHours * 60 * 60 * 1000);
  const [isGraceActive, setIsGraceActive] = useState(true);

  useEffect(() => {
    const mockRegistrationTime = Date.now() - (70 * 60 * 60 * 1000);
    const graceExpirationTime = mockRegistrationTime + (gracePeriodHours * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const timeLeft = graceExpirationTime - Date.now();
      if (timeLeft <= 0) {
        setIsGraceActive(false);
        setGraceTimeLeft(0);
        clearInterval(timer);
      } else {
        setGraceTimeLeft(timeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = (ms) => {
    if (ms <= 0) return "00:00:00";
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const displayPlans = [
    {
      key: "free",
      type: "Runtime Free",
      icon: "🚀",
      color: "#10b981",
      popular: false,
      free: true,
      price: "Free",
      cta: "Start Building",
      description: "Build one real workflow. Prove it works. No credit card.",
      keyFeatures: [
        "1 App",
        "Sync only (30s max)",
        "~500 executions/day",
        "Throttles at limit — never blocks",
        "Zero-data storage",
        "Full feature access",
      ],
    },
    {
      key: "runtime",
      type: "Runtime",
      icon: "🌱",
      color: "#4d6bdf",
      popular: true,
      free: false,
      price: "$199",
      priceINR: "₹16,999",
      yearly: "$1,990",
      yearlyINR: "₹1,69,990",
      cta: "Start Shipping",
      description: "Ship AI to your customers. Async, retention, and scale in one plan.",
      badge: "Most CRMs land here",
      keyFeatures: [
        "Up to 50 Apps included",
        "500K executions/month included",
        "Then $0.08 / 1K executions (published)",
        "30-min async included",
        "Async upgrades: 1hr +$50 · 4hr +$150 · 24hr +$400",
        "App slabs: 51-200 +$99 · 201-500 +$399",
        "30-day retention · 90d +$30 · 1yr +$100",
      ],
    },
    {
      key: "enterprise",
      type: "Enterprise Runtime",
      icon: "🏢",
      color: "#7c3aed",
      popular: false,
      free: false,
      price: "From $1,500",
      priceINR: "From ₹1,25,000",
      cta: "Contact Sales",
      description: "Petpooja-scale. Multi-brand, multi-country, compliance-heavy.",
      badge: "3-month minimum",
      keyFeatures: [
        "$15,000 one-time Enterprise Activation",
        "Unlimited Apps & Executions",
        "Unlimited async windows",
        "BYO storage / Custom retention",
        "Implementation workshops included",
        "Dedicated SLA, 24/7 support",
        "Quarterly business reviews",
      ],
    },
  ];

  const getPriceDisplay = (plan) => {
    if (plan.isFree || plan.key === "free") return "Free forever";
    if (plan.key === "enterprise") return billingCycle === "monthly" ? plan.price : plan.price;
    return billingCycle === "monthly" ? plan.price : plan.yearly;
  };

  return (
    <div className={styles.pricingPage}>
      {/* ===== HEADER ===== */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1>The AI Agent <span>Runtime</span></h1>
          <p>
            Frameworks give you building blocks. We give you a runtime that's already wired,
            already async, already multi-tenant.
          </p>
        </div>

        <div className={styles.valueProps}>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>⚙️</span>
            <span>Runtime, not framework</span>
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>🧠</span>
            <span>Deterministic by design</span>
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>🔒</span>
            <span>Zero-data default</span>
          </div>
        </div>
      </div>

      {/* ============================================================
          72-HOUR GRACE PERIOD BANNER
          ============================================================ */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 30px auto",
          padding: "16px 24px",
          borderRadius: "12px",
          background: isGraceActive ? "#ecfdf5" : "#fef2f2",
          border: `1px solid ${isGraceActive ? "#10b981" : "#ef4444"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontSize: "24px" }}>{isGraceActive ? "🤝" : "⚠️"}</span>
          <div>
            <h4 style={{ margin: 0, color: isGraceActive ? "#065f46" : "#991b1b", fontSize: "16px", fontWeight: "600" }}>
              {isGraceActive ? "72-Hour Free Hand Active" : "Grace Period Expired"}
            </h4>
            <p style={{ margin: 0, color: isGraceActive ? "#047857" : "#b91c1c", fontSize: "14px", marginTop: "4px" }}>
              {isGraceActive
                ? "We won't enforce hard quotas yet. Just don't abuse the platform. Soft caps apply."
                : "Your 72-hour grace period is over. Hard limits and quotas are now strictly enforced."}
            </p>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ fontSize: "12px", color: isGraceActive ? "#047857" : "#b91c1c", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>
            Time Remaining
          </span>
          <div style={{ fontSize: "24px", fontWeight: "700", color: isGraceActive ? "#065f46" : "#991b1b", fontFamily: "monospace" }}>
            {formatTimeLeft(graceTimeLeft)}
          </div>
        </div>
      </div>

      {/* ===== BILLING TOGGLE ===== */}
      <div className={styles.billingToggle}>
        <button
          className={`${styles.toggleBtn} ${billingCycle === "monthly" ? styles.activeToggle : ""}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`${styles.toggleBtn} ${billingCycle === "yearly" ? styles.activeToggle : ""}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly <span className={styles.saveBadge}>Save 30%</span>
        </button>
      </div>

      {/* ===== PRICING CARDS ===== */}
      <div className={styles.pricingCards}>
        {displayPlans.map((plan) => {
          const isRuntime = plan.key === "runtime";
          const isEnterprise = plan.key === "enterprise";
          const isHovered = hoveredPlan === plan.key;

          return (
            <div
              key={plan.key}
              className={`${styles.pricingCard} ${isRuntime ? styles.popularCard : ""} ${isEnterprise ? styles.enterpriseCard : ""}`}
              style={{ borderColor: isHovered ? plan.color : "transparent" }}
              onMouseEnter={() => setHoveredPlan(plan.key)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.badge && (
                <div className={styles.cardBadge} style={{ background: plan.color }}>
                  {plan.badge}
                </div>
              )}

              <div className={styles.cardHeader}>
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.type}</h3>
                <div className={styles.planPrice}>
                  {plan.free || plan.key === "free" ? (
                    <span className={styles.freePrice}>Free</span>
                  ) : plan.key === "enterprise" ? (
                    <span className={styles.customPrice}>{plan.price}</span>
                  ) : (
                    <>
                      <span className={styles.priceAmount}>{getPriceDisplay(plan)}</span>
                      <span className={styles.pricePeriod}>
                        /{billingCycle === "monthly" ? "month" : "year"}
                      </span>
                    </>
                  )}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <ul className={styles.keyFeatures}>
                {plan.keyFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.featureCheck}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.ctaButton} ${isRuntime ? styles.primaryCta : ""}`}
                style={{
                  background: isRuntime ? plan.color : isEnterprise ? "#7c3aed" : "#e5e7eb",
                  color: isRuntime || isEnterprise ? "white" : "#1f2937",
                }}
                onClick={() => {
                  if (isEnterprise) window.location.href = "mailto:sales@sageion.com";
                  else window.location.href = "https://admin.sageion.com/signup";
                }}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.seeAllWrapper}>
        <button onClick={scrollToComparison} className={styles.seeAllButton}>
          Compare Runtime Limits →
        </button>
      </div>

      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;