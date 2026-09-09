"use client";

import React, { useRef, useState } from "react";
import styles from "./pricing.module.css";
import ComparisonTable from "./ComparisonTable";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [growthMessageLimit, setGrowthMessageLimit] = useState(10000);
  const [scaleMessageLimit, setScaleMessageLimit] = useState(20000);
  const [showIndianPromo, setShowIndianPromo] = useState(true);
  const comparisonRef = useRef(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const calculateGrowthPrice = (basePrice, messages) => {
    const baseMessages = 10000;
    if (messages <= baseMessages) return basePrice;
    const increment = 300;
    const extraMessages = messages - baseMessages;
    return basePrice + Math.ceil(extraMessages / 1000) * increment;
  };

  const calculateScalePrice = (basePrice, messages) => {
    const baseMessages = 20000;
    if (messages <= baseMessages) return basePrice;
    const increment = 250;
    const extraMessages = messages - baseMessages;
    return basePrice + Math.ceil(extraMessages / 1000) * increment;
  };

  const pricingData = {
    monthly: {
      launch: { regular: 0, promo: 0 },
      starter: { regular: 5999, promo: 4199 },
      growth: {
        regular: {
          basePrice: 14999,
          getPrice: (messages) => calculateGrowthPrice(14999, messages),
          getDisplay: (messages) => `₹${calculateGrowthPrice(14999, messages).toLocaleString('en-IN')}/month`
        },
        promo: {
          basePrice: 10499,
          getPrice: (messages) => calculateGrowthPrice(10499, messages),
          getDisplay: (messages) => `₹${calculateGrowthPrice(10499, messages).toLocaleString('en-IN')}/month`
        }
      },
      scale: {
        regular: {
          basePrice: 39999,
          getPrice: (messages) => calculateScalePrice(39999, messages),
          getDisplay: (messages) => `₹${calculateScalePrice(39999, messages).toLocaleString('en-IN')}/month`
        },
        promo: {
          basePrice: 27999,
          getPrice: (messages) => calculateScalePrice(27999, messages),
          getDisplay: (messages) => `₹${calculateScalePrice(27999, messages).toLocaleString('en-IN')}/month`
        }
      },
      enterprise: {
        regular: "Custom Pricing",
        promo: "Custom Pricing"
      }
    },
    yearly: {
      launch: { regular: 0, promo: 0 },
      starter: { regular: 57590, promo: 40313 },
      growth: {
        regular: {
          basePrice: 143990,
          getPrice: (messages) => calculateGrowthPrice(143990, messages),
          getDisplay: (messages) => `₹${calculateGrowthPrice(143990, messages).toLocaleString('en-IN')}/year`
        },
        promo: {
          basePrice: 100793,
          getPrice: (messages) => calculateGrowthPrice(100793, messages),
          getDisplay: (messages) => `₹${calculateGrowthPrice(100793, messages).toLocaleString('en-IN')}/year`
        }
      },
      scale: {
        regular: {
          basePrice: 383990,
          getPrice: (messages) => calculateScalePrice(383990, messages),
          getDisplay: (messages) => `₹${calculateScalePrice(383990, messages).toLocaleString('en-IN')}/year`
        },
        promo: {
          basePrice: 268793,
          getPrice: (messages) => calculateScalePrice(268793, messages),
          getDisplay: (messages) => `₹${calculateScalePrice(268793, messages).toLocaleString('en-IN')}/year`
        }
      },
      enterprise: {
        regular: "Contact Us",
        promo: "Contact Us"
      }
    },
  };

  const getPriceDisplay = (plan) => {
    if (plan.isFree) return "Free forever";
    if (plan.isEnterprise) return showIndianPromo ? pricingData[billingCycle].enterprise.promo : pricingData[billingCycle].enterprise.regular;

    const priceData = pricingData[billingCycle][plan.planCode.toLowerCase()];

    if (plan.hasMessageSlider) {
      const messages = plan.isScalePlan ? scaleMessageLimit : growthMessageLimit;
      const displayPrice = showIndianPromo ? priceData.promo.getDisplay(messages) : priceData.regular.getDisplay(messages);
      return displayPrice;
    } else {
      const displayPrice = showIndianPromo ? `₹${priceData.promo.toLocaleString('en-IN')}/${billingCycle === 'monthly' ? 'month' : 'year'}`
        : `₹${priceData.regular.toLocaleString('en-IN')}/${billingCycle === 'monthly' ? 'month' : 'year'}`;
      return displayPrice;
    }
  };

  const getPriceValue = (plan) => {
    if (plan.isFree) return 0;
    if (plan.isEnterprise) return null;
    const priceData = pricingData[billingCycle][plan.planCode.toLowerCase()];
    return showIndianPromo ? priceData.promo : priceData.regular;
  };

  const formatMessageLimit = (limit) => {
    if (limit >= 1000000) return `${(limit / 1000000).toFixed(1)}M`;
    if (limit >= 1000) return `${(limit / 1000).toFixed(0)}k`;
    return limit.toString();
  };

  const handleGrowthMessageLimitChange = (event) => {
    setGrowthMessageLimit(Number(event.target.value));
  };

  const handleScaleMessageLimitChange = (event) => {
    setScaleMessageLimit(Number(event.target.value));
  };

  const getSliderProgress = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  // Clean plan data with only what we need to display
  const displayPlans = [
    {
      key: "launch",
      type: "Launch",
      icon: "🚀",
      color: "#10b981",
      bgColor: "#ecfdf5",
      popular: false,
      free: true,
      price: "Free",
      cta: "Start Free",
      description: "Perfect for testing, MVPs & early-stage projects.",
      badge: null,
      keyFeatures: [
        "100 Active Users",
        "3 Intents/Skills",
        "2 API Configs",
        "2 Chains",
        "1 App",
        "Basic Analytics",
        "Advanced Lead Capture",
        "Multi-Admin",
      ],
    },
    {
      key: "starter",
      type: "Starter",
      icon: "🌟",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      popular: false,
      free: false,
      price: "₹5,999",
      cta: "Choose Starter",
      description: "Complete communication suite for growing businesses.",
      badge: showIndianPromo ? "30% OFF" : "Best Value",
      keyFeatures: [
        "1,000 Active Users",
        "10 Intents/Skills",
        "5 API Configs",
        "3 Chains",
        "3 Apps",
        "Pro Analytics",
        "Remove Branding",
        "Priority Support",
      ],
    },
    {
      key: "growth",
      type: "Growth",
      icon: "🌱",
      color: "#4d6bdf",
      bgColor: "#eef2ff",
      popular: true,
      free: false,
      price: "₹14,999",
      cta: "Choose Growth",
      description: "For growing SaaS & SMBs with serious engagement needs.",
      badge: "Most Popular",
      keyFeatures: [
        "5,000 Active Users",
        "30 Intents/Skills",
        "20 API Configs",
        "15 Chains",
        "10 Apps",
        "Advanced Analytics",
        "Multi-Admin + RBAC",
        "Advanced Lead Capture",
      ],
    },
    {
      key: "scale",
      type: "Scale",
      icon: "⚡",
      color: "#059669",
      bgColor: "#ecfdf5",
      popular: false,
      free: false,
      price: "₹39,999",
      cta: "Get Quote",
      description: "High-volume enterprise solution for established companies.",
      badge: null,
      keyFeatures: [
        "25,000 Active Users",
        "100 Intents/Skills",
        "50 API Configs",
        "40 Chains",
        "25 Apps",
        "Advanced Analytics",
        "Dedicated Manager",
        "99.9% SLA",
      ],
    },
    {
      key: "enterprise",
      type: "Enterprise",
      icon: "🏢",
      color: "#7c3aed",
      bgColor: "#f5f3ff",
      popular: false,
      free: false,
      price: "Custom",
      cta: "Contact Us",
      description: "Fully customizable for large enterprises.",
      badge: null,
      keyFeatures: [
        "Unlimited Users",
        "Unlimited Intents",
        "Unlimited APIs",
        "Unlimited Chains",
        "Unlimited Apps",
        "Enterprise Analytics",
        "24/7 Priority Support",
        "Custom AI Training",
      ],
    },
  ];

  return (
    <div className={styles.pricingPage}>
      {/* ===== HEADER ===== */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1>Pricing That <span>Grows With You</span></h1>
          <p>Start free, scale as you grow. Complete platform: AI + Live Chat + Lead Capture + BYO Auth.</p>
        </div>

        {/* Value Props */}
        <div className={styles.valueProps}>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>🔐</span>
            <span>You own your user authentication</span>
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>⚡</span>
            <span>No LLM token costs</span>
          </div>
          <div className={styles.valueProp}>
            <span className={styles.valueIcon}>🏆</span>
            <span>60%+ savings vs piecemeal</span>
          </div>
        </div>

        {/* Promo Banner */}
        {showIndianPromo && (
          <div className={styles.promoBanner}>
            <span>🇮🇳</span>
            <span><strong>Indian Startups:</strong> 30% off your first year</span>
          </div>
        )}
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
          Yearly <span className={styles.saveBadge}>Save 44%</span>
        </button>
      </div>

      {/* ===== PRICING CARDS ===== */}
      <div className={styles.pricingCards}>
        {displayPlans.map((plan, index) => {
          const isGrowth = plan.key === "growth";
          const isEnterprise = plan.key === "enterprise";
          const isHovered = hoveredPlan === plan.key;

          return (
            <div
              key={plan.key}
              className={`${styles.pricingCard} ${isGrowth ? styles.popularCard : ""} ${isEnterprise ? styles.enterpriseCard : ""}`}
              style={{
                borderColor: isHovered ? plan.color : "transparent",
              }}
              onMouseEnter={() => setHoveredPlan(plan.key)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={styles.cardBadge} style={{ background: plan.color }}>
                  {plan.badge}
                </div>
              )}

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.planIcon}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.type}</h3>
                <div className={styles.planPrice}>
                  {plan.free ? (
                    <span className={styles.freePrice}>Free</span>
                  ) : plan.key === "enterprise" ? (
                    <span className={styles.customPrice}>Custom</span>
                  ) : (
                    <>
                      <span className={styles.priceAmount}>{plan.price}</span>
                      <span className={styles.pricePeriod}>/month</span>
                    </>
                  )}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              {/* Key Features */}
              <ul className={styles.keyFeatures}>
                {plan.keyFeatures.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.featureCheck}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`${styles.ctaButton} ${isGrowth ? styles.primaryCta : ""}`}
                style={{
                  background: isGrowth ? plan.color : (isEnterprise ? "#7c3aed" : "#e5e7eb"),
                  color: isGrowth || isEnterprise ? "white" : "#1f2937",
                }}
                onClick={() => {
                  if (isEnterprise || isScale) {
                    window.location.href = "https://admin.sageion.com/pricing";
                  } else {
                    window.location.href = "https://admin.sageion.com/pricing";
                  }
                }}
              >
                {plan.cta}
              </button>

              {/* Extra Info for Growth/Scale */}
              {plan.key === "growth" && (
                <div className={styles.sliderSection}>
                  <div className={styles.sliderLabel}>
                    <span>AI Messages</span>
                    <span className={styles.sliderValue}>
                      {formatMessageLimit(growthMessageLimit)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={100000}
                    step={1000}
                    value={growthMessageLimit}
                    onChange={handleGrowthMessageLimitChange}
                    className={styles.slider}
                    style={{
                      background: `linear-gradient(to right, #4d6bdf 0%, #4d6bdf ${getSliderProgress(growthMessageLimit, 10000, 100000)}%, #e5e7eb ${getSliderProgress(growthMessageLimit, 10000, 100000)}%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              )}

              {plan.key === "scale" && (
                <div className={styles.sliderSection}>
                  <div className={styles.sliderLabel}>
                    <span>AI Messages</span>
                    <span className={styles.sliderValue}>
                      {formatMessageLimit(scaleMessageLimit)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={250000}
                    step={1000}
                    value={scaleMessageLimit}
                    onChange={handleScaleMessageLimitChange}
                    className={styles.slider}
                    style={{
                      background: `linear-gradient(to right, #059669 0%, #059669 ${getSliderProgress(scaleMessageLimit, 20000, 250000)}%, #e5e7eb ${getSliderProgress(scaleMessageLimit, 20000, 250000)}%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== SEE ALL FEATURES ===== */}
      <div className={styles.seeAllWrapper}>
        <button onClick={scrollToComparison} className={styles.seeAllButton}>
          Compare All Features →
        </button>
      </div>

      {/* ===== COMPARISON TABLE ===== */}
      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;
