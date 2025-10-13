"use client";

import React, { useRef, useState } from "react";
import styles from "./pricing.module.css";
import ComparisonTable from "./ComparisonTable";

function Pricing() {
  console.log("is it rerendering at the click?");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [userLimit, setUserLimit] = useState(1000);
  const comparisonRef = useRef(null);

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Available user limits in thousands
  const userLimits = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 10000];

  // Calculate price based on user limit for Growth plan
  const calculateGrowthPrice = (basePrice, users) => {
    const baseUsers = 1000;
    const increment = 1250;
    const multiplier = (users - baseUsers) / 1000;
    return basePrice + (increment * multiplier);
  };

  const pricingData = {
    monthly: {
      starter: 999,
      growth: {
        basePrice: 2499,
        getPrice: (users) => calculateGrowthPrice(2499, users),
        getDisplay: (users) => {
          const price = calculateGrowthPrice(2499, users);
          return `₹${Math.round(price)}/month`;
        }
      }
    },
    yearly: {
      starter: 9990,
      growth: {
        basePrice: 24990,
        getPrice: (users) => calculateGrowthPrice(24990, users),
        getDisplay: (users) => {
          const price = calculateGrowthPrice(24990, users);
          return `₹${Math.round(price)}/year`;
        }
      }
    },
  };

  const plans = {
    monthly: [
      {
        type: "Launch 🚀",
        planCode: "LAUNCH",
        price: "Free forever",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat",
        features: [
          "Basic AI Bot with intent detection",
          "Lead capture with Q&A",
          "Up to 2 agents",
          "Unlimited Websites",
          "100 Monthly Active Users",
          "1 Admin + 1 Support User",
          "File uploads up to 25 MB",
          "15-day Chat History",
          "Basic Email Notifications",
          "MagicChat branding",
        ],
        buttonLabel: "Get Started Free",
        cta: "Start Free"
      },
      {
        type: "Starter 🌟",
        planCode: "STARTER",
        price: "₹999/month",
        description: "For growing businesses needing more capacity.",
        subheading: "Perfect for small teams",
        features: [
          "Everything in Launch, plus:",
          "Enhanced AI Bot with smart replies",
          "Advanced lead capture forms",
          "500 Monthly Active Users",
          "Unlimited Websites",
          "Up to 4 agents",
          "1 Admin + 5 Support Users",
          "File uploads up to 50 MB",
          "30-day Chat History",
          "Custom email templates",
          "Basic analytics",
        ],
        buttonLabel: "Start Growing",
        cta: "Choose Starter"
      },
      {
        type: "Growth 🌱",
        planCode: "GROWTH",
        description: "Ideal for startups & small teams ready to scale.",
        subheading: "Most Popular - Best Value",
        features: [
          "Everything in Starter, plus:",
          "Advanced AI with custom training",
          "Customizable Q&A trees + auto-email leads",
          `${(userLimit / 1000).toFixed(0)}k Monthly Active Users`,
          "Unlimited Websites",
          "Up to 20 agents",
          "1 Admin + 30 Support Users",
          "File uploads up to 100 MB",
          "120-day Chat History",
          "Advanced analytics & reporting",
          "Priority Support",
          "Remove MagicChat Branding",
          "API Access",
        ],
        buttonLabel: "Scale Now",
        cta: "Choose Growth"
      }
    ],
    yearly: [
      {
        type: "Launch 🚀",
        planCode: "LAUNCH",
        price: "Free forever",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat",
        features: [
          "Basic AI Bot with intent detection",
          "Lead capture with Q&A",
          "Up to 2 agents",
          "Unlimited Websites",
          "100 Monthly Active Users",
          "1 Admin + 1 Support User",
          "File uploads up to 25 MB",
          "15-day Chat History",
          "Basic Email Notifications",
          "MagicChat branding",
        ],
        buttonLabel: "Get Started Free",
        cta: "Start Free"
      },
      {
        type: "Starter 🌟",
        planCode: "STARTER",
        price: "₹9,990/year",
        description: "For growing businesses needing more capacity.",
        subheading: "Perfect for small teams",
        features: [
          "Everything in Launch, plus:",
          "Enhanced AI Bot with smart replies",
          "Advanced lead capture forms",
          "500 Monthly Active Users",
          "Unlimited Websites",
          "Up to 4 agents",
          "1 Admin + 5 Support Users",
          "File uploads up to 50 MB",
          "30-day Chat History",
          "Custom email templates",
          "Basic analytics",
        ],
        buttonLabel: "Start Growing",
        cta: "Choose Starter"
      },
      {
        type: "Growth 🌱",
        planCode: "GROWTH",
        description: "Ideal for startups & small teams ready to scale.",
        subheading: "Most Popular - Best Value",
        features: [
          "Everything in Starter, plus:",
          "Advanced AI with custom training",
          "Customizable Q&A trees + auto-email leads",
          `${(userLimit / 1000).toFixed(0)}k Monthly Active Users`,
          "Unlimited Websites",
          "Up to 20 agents",
          "1 Admin + 30 Support Users",
          "File uploads up to 100 MB",
          "120-day Chat History",
          "Advanced analytics & reporting",
          "Priority Support",
          "Remove MagicChat Branding",
          "API Access",
        ],
        buttonLabel: "Scale Now",
        cta: "Choose Growth"
      }
    ],
  };

  const handleUserLimitChange = (event) => {
    setUserLimit(Number(event.target.value));
  };

  const formatUserLimit = (limit) => {
    return `${(limit / 1000).toFixed(0)}k`;
  };

  // Calculate progress for gradient
  const progress = ((userLimit - 1000) / 9000) * 100;

  return (
    <div className={styles.pricing3Page}>
      <div className={styles.headingWrapper}>
        <h1>Pricing That Grows With You</h1>
        <p>
          Start free, scale as you grow. MagicChat pays for itself by increasing
          conversions and reducing support costs.
        </p>

        {/* Value Proposition Banner */}
        <div className={styles.valueBanner}>
          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>🚀</span>
            <span>Average 40% increase in lead conversion</span>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>⏱️</span>
            <span>Save 10+ hours/week on customer support</span>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.valueIcon}>💸</span>
            <span>ROI in first 30 days</span>
          </div>
        </div>
      </div>

      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${billingCycle === "monthly" ? styles.activeTabButton : ""}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`${styles.tabButton} ${billingCycle === "yearly" ? styles.activeTabButton : ""}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly <span className={styles.saveBadge}>Save 16%</span>
        </button>
      </div>

      {/* Savings calculator */}
      <div className={styles.savingsCalculator}>
        <p>
          <strong>Yearly plan:</strong> Get 2 months free + priority support
        </p>
      </div>

      <div className={styles.plansContainer}>
        {plans[billingCycle].map((plan, index) => {
          const isGrowth = plan.type.includes("Growth");
          const isStarter = plan.type.includes("Starter");
          const isLaunch = plan.type.includes("Launch");

          return (
            <div key={index} className={`${styles.planCard} 
              ${isGrowth ? styles.highlight : ''} 
              ${isStarter ? styles.starter : ''}
              ${isLaunch ? styles.launch : ''}`}>

              <div className={styles.planHeader}>
                <h2 className={styles.planTitle}>{plan.type}</h2>
                {isGrowth && <span className={styles.popularBadge}>Most Popular</span>}
                {isStarter && <span className={styles.valueBadge}>Great Value</span>}
              </div>

              <p className={styles.planSubheading}>{plan.subheading}</p>

              {isGrowth ? (
                <div className={styles.userLimitSection}>
                  <label className={styles.userLimitLabel}>
                    Scale to: <strong>{formatUserLimit(userLimit)} users</strong>
                  </label>

                  <div className={styles.sliderContainer}>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="1000"
                      value={userLimit}
                      onChange={handleUserLimitChange}
                      className={styles.userLimitSlider}
                      style={{
                        background: `linear-gradient(to right, #4d6bdf 0%, #4d6bdf ${progress}%, #e5e7eb ${progress}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>

                  <div className={styles.sliderMarkers}>
                    {userLimits.map(limit => (
                      <span
                        key={limit}
                        className={`${styles.marker} ${userLimit === limit ? styles.activeMarker : ''}`}
                        onClick={() => setUserLimit(limit)}
                      >
                        {formatUserLimit(limit)}
                      </span>
                    ))}
                  </div>

                  <p className={styles.planPrice}>
                    {pricingData[billingCycle].growth.getDisplay(userLimit)}
                  </p>
                  <p className={styles.valuePerUser}>
                    Only ~₹{((pricingData[billingCycle].growth.getPrice(userLimit) / userLimit) * 1000).toFixed(2)} per 1,000 users
                  </p>
                </div>
              ) : (
                <div>
                  <p className={styles.planPrice}>{plan.price}</p>
                  {isStarter && (
                    <p className={styles.valuePerUser}>
                      ~₹{billingCycle === 'monthly' ? '2' : '1.67'} per user
                    </p>
                  )}
                </div>
              )}

              <p className={styles.planDescription}>{plan.description}</p>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className={styles.planButton}>
                {plan.buttonLabel}
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.seeAllButtonWrapper}>
        <button onClick={scrollToComparison}>See Full Feature Comparison</button>
      </div>

      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;