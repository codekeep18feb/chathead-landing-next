"use client";

import React, { useRef, useState } from "react";
import styles from "../pricing/pricing.module.css";
import ComparisonTable from "../pricing/ComparisonTable";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [growthMessageLimit, setGrowthMessageLimit] = useState(10000);
  const [scaleMessageLimit, setScaleMessageLimit] = useState(20000);
  const [showIndianPromo, setShowIndianPromo] = useState(true);
  const comparisonRef = useRef(null);

  const scrollToComparison = () => {
    comparisonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Calculate price based on AI message limit for Growth plan
  const calculateGrowthPrice = (basePrice, messages) => {
    const baseMessages = 10000;
    if (messages <= baseMessages) return basePrice;
    const increment = 300; // ₹300 per 1000 messages
    const extraMessages = messages - baseMessages;
    return basePrice + Math.ceil(extraMessages / 1000) * increment;
  };

  // Calculate price based on AI message limit for Scale plan
  const calculateScalePrice = (basePrice, messages) => {
    const baseMessages = 20000;
    if (messages <= baseMessages) return basePrice;
    const increment = 250; // ₹250 per 1000 messages (volume discount)
    const extraMessages = messages - baseMessages;
    return basePrice + Math.ceil(extraMessages / 1000) * increment;
  };

  // Updated pricing with better positioning
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

  const plans = {
    monthly: [
      {
        type: "Launch 🚀",
        planCode: "LAUNCH",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat",
        features: [
          "✅ Exclusive: Built-in Auth Layer (1 website included)",
          "Lead capture with Q&A forms",
          "Up to 1 agent",
          "Unlimited Websites",
          "100 Monthly Active Users (Live Chat & Auth combined)",
          "100 AI Messages / month",
          "1 Admin + 1 Support User",
          "Knowledge Base: 5 MB per agent",
          "File uploads up to 25 MB (Live Chat)",
          "15-day Chat History",
          "Basic Email Notifications",
          "MagicChat branding required",
          "Export user data anytime (free)",
          "Basic analytics dashboard",
        ],
        buttonLabel: "Get Started Free",
        cta: "Start Free",
        isFree: true,
      },
      {
        type: "Starter 🌟",
        planCode: "STARTER",
        description: "Complete customer communication suite for growing businesses.",
        subheading: "Best Value - 4-in-1 Platform",
        features: [
          "✅ Exclusive: Built-in Auth Layer (3 websites included)",
          "Everything in Launch, plus:",
          "Enhanced AI Bot with smart replies",
          "Advanced lead capture forms with analytics",
          "1,000 Monthly Active Users (Live Chat & Auth combined)",
          "5,000 AI Messages / month",
          "Up to 5 agents",
          "Knowledge Base: 100 MB per agent",
          "1 Admin + 5 Support Users",
          "File uploads up to 100 MB (Live Chat)",
          "180-day Chat History",
          "Custom email templates & automations",
          "Advanced analytics dashboard",
          "Remove MagicChat branding",
          "Priority email support",
          "30-day money-back guarantee",
        ],
        buttonLabel: "Get 30% Off - Limited Time",
        cta: "Choose Starter",
        showPromoBadge: true,
      },
      {
        type: "Growth 🌱",
        planCode: "GROWTH",
        description: "For growing SaaS & SMBs with serious customer engagement needs.",
        subheading: "Most Popular - Best Value",
        features: [
          "✅ Exclusive: Built-in Auth Layer (10 websites included)",
          "Everything in Starter, plus:",
          "Advanced AI with custom training & fine-tuning",
          "Customizable Q&A trees + auto-email leads",
          "5,000 Monthly Active Users (Live Chat & Auth combined)",
          `${growthMessageLimit.toLocaleString('en-IN')} AI Messages / month`,
          "Up to 15 agents",
          "Knowledge Base: 500 MB per agent",
          "1 Admin + 10 Support Users",
          "File uploads up to 250 MB (Live Chat)",
          "2-year Chat History",
          "Advanced analytics & reporting with exports",
          "Priority Email & Chat Support",
          "No MagicChat branding",
          "Full API Access with webhooks",
          "Custom workflows & automations",
          "Multi-language AI support",
        ],
        buttonLabel: "Scale Now",
        cta: "Choose Growth",
        hasMessageSlider: true,
        sliderConfig: {
          min: 10000,
          max: 100000,
          step: 1000,
          base: 10000,
        },
      },
      {
        type: "Scale ⚡",
        planCode: "SCALE",
        description: "For established companies, agencies, & high-traffic platforms.",
        subheading: "High-Volume Enterprise Solution",
        features: [
          "✅ Exclusive: Built-in Auth Layer (25 websites included)",
          "Everything in Growth, plus:",
          "Enterprise-grade AI with multi-model routing",
          "Custom workflows & automations with visual builder",
          "25,000 Monthly Active Users (Live Chat & Auth combined)",
          `${scaleMessageLimit.toLocaleString('en-IN')} AI Messages / month`,
          "Up to 50 agents",
          "Knowledge Base: 2 GB per agent",
          "1 Admin + Unlimited Support Users",
          "File uploads up to 500 MB (Live Chat)",
          "5-year Chat History",
          "SLA (99.9% uptime)",
          "Phone & Dedicated Manager Support",
          "Custom integration development support",
        ],
        buttonLabel: "Contact Sales",
        cta: "Get Quote",
        hasMessageSlider: true,
        isScalePlan: true,
        sliderConfig: {
          min: 20000,
          max: 250000,
          step: 1000,
          base: 20000,
        },
      },
      {
        type: "Enterprise 🏢",
        planCode: "ENTERPRISE",
        description: "For large enterprises with custom requirements & highest security.",
        subheading: "Fully Customizable Enterprise Solution",
        features: [
          "✅ Exclusive: Unlimited Auth Layer websites",
          "Everything in Scale, plus:",
          "Unlimited AI Messages & Agents",
          "Custom Knowledge Base Architecture",
          "Custom Integrations (CRM, Helpdesk, ERP)",
          "Personalized CSM & Engineering Support",
          "Dedicated Onboarding & Training",
          "Custom Workflow Development",
          "24/7 Priority Phone Support",
          "Custom API Rate Limits & SLAs",
          "Advanced Analytics Dashboard with BI integration",
          "Multi-region Data Hosting",
          "Custom AI model training",
          "Audit logs & advanced security features",
          "Quarterly business reviews",
        ],
        buttonLabel: "Contact Us",
        cta: "Schedule Demo",
        isEnterprise: true,
      },
    ],
    yearly: [
      {
        type: "Launch 🚀",
        planCode: "LAUNCH",
        description: "Perfect for testing, MVPs & early-stage projects.",
        subheading: "Best for individuals exploring MagicChat",
        features: [
          "✅ Exclusive: Built-in Auth Layer (1 website included)",
          "Lead capture with Q&A forms",
          "Up to 1 agent",
          "Unlimited Websites",
          "100 Monthly Active Users (Live Chat & Auth combined)",
          "100 AI Messages / month",
          "1 Admin + 1 Support User",
          "Knowledge Base: 5 MB per agent",
          "File uploads up to 25 MB (Live Chat)",
          "15-day Chat History",
          "Basic Email Notifications",
          "MagicChat branding required",
          "Export user data anytime (free)",
          "Basic analytics dashboard",
        ],
        buttonLabel: "Get Started Free",
        cta: "Start Free",
        isFree: true,
      },
      {
        type: "Starter 🌟",
        planCode: "STARTER",
        description: "Complete customer communication suite for growing businesses.",
        subheading: "Best Value - 4-in-1 Platform",
        features: [
          "✅ Exclusive: Built-in Auth Layer (3 websites included)",
          "Everything in Launch, plus:",
          "Enhanced AI Bot with smart replies",
          "Advanced lead capture forms with analytics",
          "1,000 Monthly Active Users (Live Chat & Auth combined)",
          "5,000 AI Messages / month",
          "Up to 5 agents",
          "Knowledge Base: 100 MB per agent",
          "1 Admin + 5 Support Users",
          "File uploads up to 100 MB (Live Chat)",
          "180-day Chat History",
          "Custom email templates & automations",
          "Advanced analytics dashboard",
          "Remove MagicChat branding",
          "Priority email support",
          "30-day money-back guarantee",
        ],
        buttonLabel: "Save 44% Total",
        cta: "Choose Starter",
        showPromoBadge: true,
      },
      {
        type: "Growth 🌱",
        planCode: "GROWTH",
        description: "For growing SaaS & SMBs with serious customer engagement needs.",
        subheading: "Most Popular - Best Value",
        features: [
          "✅ Exclusive: Built-in Auth Layer (10 websites included)",
          "Everything in Starter, plus:",
          "Advanced AI with custom training & fine-tuning",
          "Customizable Q&A trees + auto-email leads",
          "5,000 Monthly Active Users (Live Chat & Auth combined)",
          `${growthMessageLimit.toLocaleString('en-IN')} AI Messages / month`,
          "Up to 15 agents",
          "Knowledge Base: 500 MB per agent",
          "1 Admin + 10 Support Users",
          "File uploads up to 250 MB (Live Chat)",
          "2-year Chat History",
          "Advanced analytics & reporting with exports",
          "Priority Email & Chat Support",
          "No MagicChat branding",
          "Full API Access with webhooks",
          "Custom workflows & automations",
          "Multi-language AI support",
        ],
        buttonLabel: "Scale Now",
        cta: "Choose Growth",
        hasMessageSlider: true,
        sliderConfig: {
          min: 10000,
          max: 100000,
          step: 1000,
          base: 10000,
        },
      },
      {
        type: "Scale ⚡",
        planCode: "SCALE",
        description: "For established companies, agencies, & high-traffic platforms.",
        subheading: "High-Volume Enterprise Solution",
        features: [
          "✅ Exclusive: Built-in Auth Layer (25 websites included)",
          "Everything in Growth, plus:",
          "Enterprise-grade AI with multi-model routing",
          "Custom workflows & automations with visual builder",
          "25,000 Monthly Active Users (Live Chat & Auth combined)",
          `${scaleMessageLimit.toLocaleString('en-IN')} AI Messages / month`,
          "Up to 50 agents",
          "Knowledge Base: 2 GB per agent",
          "1 Admin + Unlimited Support Users",
          "File uploads up to 500 MB (Live Chat)",
          "5-year Chat History",
          "SLA (99.9% uptime)",
          "Phone & Dedicated Manager Support",
          "Custom integration development support",
        ],
        buttonLabel: "Contact Sales",
        cta: "Get Quote",
        hasMessageSlider: true,
        isScalePlan: true,
        sliderConfig: {
          min: 20000,
          max: 250000,
          step: 1000,
          base: 20000,
        },
      },
      {
        type: "Enterprise 🏢",
        planCode: "ENTERPRISE",
        description: "For large enterprises with custom requirements & highest security.",
        subheading: "Fully Customizable Enterprise Solution",
        features: [
          "✅ Exclusive: Unlimited Auth Layer websites",
          "Everything in Scale, plus:",
          "Unlimited AI Messages & Agents",
          "Custom Knowledge Base Architecture",
          "Custom Integrations (CRM, Helpdesk, ERP)",
          "Personalized CSM & Engineering Support",
          "Dedicated Onboarding & Training",
          "Custom Workflow Development",
          "24/7 Priority Phone Support",
          "Custom API Rate Limits & SLAs",
          "Advanced Analytics Dashboard with BI integration",
          "Multi-region Data Hosting",
          "Custom AI model training",
          "Audit logs & advanced security features",
          "Quarterly business reviews",
        ],
        buttonLabel: "Contact Us",
        cta: "Schedule Demo",
        isEnterprise: true,
      },
    ],
  };

  const handleGrowthMessageLimitChange = (event) => {
    setGrowthMessageLimit(Number(event.target.value));
  };

  const handleScaleMessageLimitChange = (event) => {
    setScaleMessageLimit(Number(event.target.value));
  };

  const formatMessageLimit = (limit) => {
    if (limit >= 1000000) return `${(limit / 1000000).toFixed(1)}M`;
    if (limit >= 1000) return `${(limit / 1000).toFixed(0)}k`;
    return limit.toString();
  };

  // Get price display for a plan
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

  // Get value per user text
  const getValuePerUserText = (plan) => {
    if (plan.planCode === "STARTER") {
      const price = showIndianPromo ? pricingData[billingCycle].starter.promo : pricingData[billingCycle].starter.regular;
      const perUser = billingCycle === "monthly"
        ? (price / 1000).toFixed(2)
        : (price / 12 / 1000).toFixed(2);
      return `Premium features at ~₹${perUser} per user`;
    }
    if (plan.planCode === "GROWTH" && plan.hasMessageSlider) {
      const messages = growthMessageLimit;
      const price = showIndianPromo 
        ? pricingData[billingCycle].growth.promo.getPrice(messages)
        : pricingData[billingCycle].growth.regular.getPrice(messages);
      const per1000Messages = (price / (messages / 1000)).toFixed(2);
      return `Enterprise-grade at ~₹${per1000Messages} per 1k messages`;
    }
    return null;
  };

  // Calculate slider progress for gradient
  const getSliderProgress = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  return (
    <div className={styles.pricing3Page}>
      <div>magicchat.io is a saas based chat tool. you can use in your websites.</div>

      <div ref={comparisonRef}>
        <ComparisonTable />
      </div>
    </div>
  );
}

export default Pricing;