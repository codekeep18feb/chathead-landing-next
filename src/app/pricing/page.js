"use client";

import React, { useRef, useState } from "react";
import styles from "./pricing.module.css";
// import RazorpayCheckout from "./RazorpayCheckout";
import ComparisonTable from "./ComparisonTable";

function Pricing() {
  console.log("is it rerendering a the click?");
  const [billingCycle, setBillingCycle] = useState("monthly");
  const comparisonRef = useRef(null);

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const pricingData = {
    monthly: { label: "Monthly Plan", price: 30, display: "$30/month" },
    yearly: { label: "Yearly Plan", price: 300, display: "$300/year (2 months free)" },
  };

  const plans = {
    monthly: [
      {
        type: "Launch 🚀",
        price: "₹0/month",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat.",
        features: [
          "AI Bot: Intent detection & auto-routing",
          "Lead Gen with Q&A Context: Quick Q&A + lead capture",
          "Live Chat with support",
          "100 Monthly Active Users",
          "1 Admin + 3 Support Users",
          "File uploads up to 50 MB",
          "30-day Chat History",
          "Basic Email Notifications",
          "Powered by MagicChat branding",
        ],
        buttonLabel: "Get Started Free",
      },
      {
        type: "Growth 🌱",
        description: "Ideal for startups & small teams ready to scale.",
        subheading: "Most Popular",
        features: [
          "Everything in Launch, plus:",
          "AI Bot: Enhanced capabilities with smart replies",
          "Lead Gen with Q&A Context: Customizable Q&A trees + auto-email leads",
          "1000 Monthly Active Users",
          "1 Admin + 30 Support Users",
          "File uploads up to 100 MB",
          "120-day Chat History",
          "Advanced Email Notifications",
          "Priority Support",
          "Remove MagicChat Branding",
        ],
        buttonLabel: "Upgrade Now",
      },
    ],
    yearly: [
      {
        type: "Launch 🚀",
        price: "₹0/year",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat.",
        features: [
          "AI Bot: Intent detection & auto-routing",
          "Lead Gen with Q&A Context: Quick Q&A + lead capture",
          "Live Chat with support",
          "100 Monthly Active Users",
          "1 Admin + 3 Support Users",
          "File uploads up to 50 MB",
          "30-day Chat History",
          "Basic Email Notifications",
          "Powered by MagicChat branding",
        ],
        buttonLabel: "Get Started Free",
      },
      {
        type: "Growth 🌱",
        description: "Ideal for startups & small teams ready to scale.",
        subheading: "Most Popular",
        features: [
          "Everything in Launch, plus:",
          "AI Bot: Enhanced capabilities with smart replies",
          "Lead Gen with Q&A Context: Customizable Q&A trees + auto-email leads",
          "1000 Monthly Active Users",
          "1 Admin + 30 Support Users",
          "File uploads up to 100 MB",
          "120-day Chat History",
          "Advanced Email Notifications",
          "Priority Support",
          "Remove MagicChat Branding",
        ],
        buttonLabel: "Upgrade Now",
      },
    ],
  };

  return (
  <div className={styles.pricing3Page}>
      <div className={styles.headingWrapper}>
        <h1>Flexible Plans & Pricing</h1>
        <p>
          Full-featured chat platform at industry-leading prices. Start free and
          grow as your business scales — no hidden fees, no surprises.
        </p>
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
          Yearly (2 months free)
        </button>
      </div>

      <div className={styles.plansContainer}>
        {plans[billingCycle].map((plan, index) => {
          const isGrowth = plan.type.includes("Growth");
          return (
            <div key={index} className={`${styles.planCard} ${isGrowth ? styles.highlight : ""}`}>
              <div className={styles.planHeader}>
                <h2 className={styles.planTitle}>{plan.type}</h2>
                {isGrowth && <span className={styles.popularBadge}>Most Popular</span>}
              </div>

              <p className={styles.planSubheading}>{plan.subheading}</p>
              <p className={styles.planPrice}>{isGrowth ? pricingData[billingCycle].display : plan.price}</p>
              <p className={styles.planDescription}>{plan.description}</p>

              <ul className={styles.planFeatures}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* {isGrowth ? (
                <RazorpayCheckout
                  cost={pricingData[billingCycle].price}
                  planName={pricingData[billingCycle].label}
                />
              ) : (
                <button className={styles.planButton}>{plan.buttonLabel}</button>
              )} */}
            </div>
          );
        })}
      </div>

      <div className={styles.seeAllButtonWrapper}>
        <button onClick={scrollToComparison}>See Full Comparison</button>
      </div>

      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;
