"use client";

import React, { useRef, useState } from "react";
import "./pricing.css";
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

  const plans = {
    monthly: [
      {
        type: "Basic",
        price: "₹0/month",
        description: "A perfect plan to start with basic features.",
        subheading: "Best for Testing, Prototype, MVP etc purposes.",
        features: [
          "All the Features available to experience right out of the box.",
          "100 users",
          "1 Admin + 3 Support Users",
        ],
        buttonLabel: "Get Started",
      },
      {
        type: "Advance",
        description: "Best for small teams and individuals.",
        subheading: "Grow your experience with better resources",
        features: [
          "All the Features available to experience right out of the box.",
          "1000 users",
          "1 Admin + 30 Support Users",
        ],
        buttonLabel: "Subscribe Now",
      },
    ],
    yearly: [
      {
        type: "Basic",
        price: "₹0/year",
        description: "A perfect plan to start with basic features.",
        subheading: "For individuals exploring the service",
        features: [
          "Access to limited features",
          "1 project limit",
          "Community support",
        ],
        buttonLabel: "Get Started",
      },
      {
        type: "Advance",
        description: "Best for small teams and individuals.",
        subheading: "Grow your experience with better resources",
        features: ["Unlimited projects", "Email support", "Advance analytics"],
        buttonLabel: "Subscribe Now",
      },
    ],
  };

  const pricingData = {
    monthly: {
      label: "Monthly Plan",
      price: 30,
      display: "$30/month",
    },
    yearly: {
      label: "Yearly Plan",
      price: 300,
      display: "$300/year",
    },
  };

  return (
    <div>
      <div className="heading_wrapper">
        <h1>Flexible Plans & Pricing</h1>
        <p>
          Full-featured chat platform at industry-leading prices. True
          usage-based pricing with no hidden fees or surprise overages.
        </p>
      </div>

      <div className="tabs-container">
        <button
          className={`tab-button ${billingCycle === "monthly" ? "active" : ""}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`tab-button ${billingCycle === "yearly" ? "active" : ""}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="plans-container">
        {plans[billingCycle].map((plan, index) => {
          const isBasic = plan.type === "Advance";
          return (
            <div
              key={index}
              className={`plan-card ${
                isBasic ? "basic" : plan.type.toLowerCase()
              }`}
            >
              <h2 className="plan-title">{plan.type}</h2>
              <p className="plan-subheading">{plan.subheading}</p>
              <p className="plan-price">
                {isBasic ? pricingData[billingCycle].display : plan.price}
              </p>
              <p className="plan-description">{plan.description}</p>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* {isBasic ? (
                <RazorpayCheckout
                  cost={pricingData[billingCycle].price}
                  planName={pricingData[billingCycle].label}
                />
              ) : (
                <button className="plan-button">{plan.buttonLabel}</button>
              )} */}
            </div>
          );
        })}
      </div>

      <div className="see-all-button-wrapper">
        <button onClick={scrollToComparison}>See All Features</button>
      </div>

      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;
