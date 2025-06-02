"use client";

import React, { useState } from "react";

const plans = {
  monthly: [
    {
      type: "Free",
      price: "$0/month",
      description: "A perfect plan to start with basic features. (_lorem)",
      subheading: "For individuals exploring the service (_lorem)",
      features: [
        "Access to limited features (_lorem)",
        "1 project limit  (_lorem)",
        "Community support  (_lorem)",
      ],
      buttonLabel: "Get Started",
    },
    {
      type: "Basic",
      price: "$9.99/month",
      description: "Best for small teams and individuals. (_lorem)",
      subheading: "Grow your experience with better resources (_lorem)",
      features: ["Unlimited projects (_lorem)", 
        "Email support (_lorem)", 
        "Basic analytics (_lorem)"],
      buttonLabel: "Choose Basic ",
    },
    // {
    //   type: "Advance",
    //   price: "$29.99/month",
    //   description: "For professionals and businesses. (_lorem)",
    //   subheading: "Maximize your potential with all features (_lorem)",
    //   features: [
    //     "All Basic features (_lorem)",
    //     "Priority support (_lorem)",
    //     "Advanced analytics (_lorem)",
    //     "Custom integrations (_lorem)",
    //   ],
    //   buttonLabel: "Go Pro",
    // },
  ],
  yearly: [
    {
      type: "Free",
      price: "$0/year",
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
      type: "Basic",
      price: "$99.99/year",
      description: "Best for small teams and individuals.",
      subheading: "Grow your experience with better resources",
      features: ["Unlimited projects", "Email support", "Basic analytics"],
      buttonLabel: "Choose Basic",
    },
    // {
    //   type: "Advance",
    //   price: "$299.99/year",
    //   description: "For professionals and businesses.",
    //   subheading: "Maximize your potential with all features",
    //   features: [
    //     "All Basic features",
    //     "Priority support",
    //     "Advanced analytics",
    //     "Custom integrations",
    //   ],
    //   buttonLabel: "Go Pro",
    // },
  ],
};

const SubscriptionPlans = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div>
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === "monthly" ? "active" : ""}`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
        <button
          className={`tab-button ${activeTab === "yearly" ? "active" : ""}`}
          onClick={() => setActiveTab("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="plans-container">
        {plans[activeTab].map((plan, index) => (
          <div key={index} className={`plan-card ${plan.type.toLowerCase()}`}>
            <h2 className="plan-title">{plan.type}</h2>
            <p className="plan-subheading">{plan.subheading}</p>
            <p className="plan-price">{plan.price}</p>
            <p className="plan-description">{plan.description}</p>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="plan-button">{plan.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
