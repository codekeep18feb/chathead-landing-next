import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

const featureDescriptions = {
  // ===== CORE FEATURES =====
  "Monthly Active Users": "Total unique users who interact with your chat and authentication services per month.",
  "Agents": "Number of AI chatbot agents you can create and train with custom knowledge.",
  "Unlimited Websites": "Use Sageion on unlimited websites with a single plan.",
  "Multi-Admin": "Number of admin and support users included in the plan.",
  "Auth Layer Websites": "Number of websites where you can use Sageion's built-in authentication system.",
  
  // ===== AI CHAT FEATURES =====
  "AI Messages / month": "Monthly limit for AI chatbot interactions (no LLM token costs).",
  "Knowledge Base per Agent": "Maximum amount of training data per AI agent.",
  "AI Bot Type": "Level of AI sophistication available for your chatbots.",
  "Multi-language Support": "AI support for multiple languages.",
  "Intents/Skills": "Number of conversational skills or intents your AI agent can recognize and handle.",
  
  // ===== WORKFLOWS & INTEGRATIONS =====
  "API Configurations": "Number of API endpoints you can configure for your chatbot to call.",
  "Chains (Workflows)": "Number of multi-step API workflows you can create.",
  "Custom Workflows": "Build automated workflows and business rules.",
  "Webhook Support": "Receive real-time notifications for chat events.",
  "API Access": "Programmatic access to Sageion features for custom integrations.",
  "Custom Integrations": "Integration support for CRM, helpdesk, and other business tools.",
  
  // ===== VISUAL DESIGNER =====
  "Screens": "Response display options - Single screen or Multiple screens for list data.",
  "Case 3 Support (Nested Arrays)": "Support for complex data structures with nested arrays. Each nested item gets its own screen.",
  "Visual Designer": "No-code visual interface for designing AI responses.",
  
  // ===== LIVE CHAT FEATURES =====
  "Live Chat": "Two-way live chat between visitors and your support team.",
  "File Upload Size": "Maximum file size users can upload in live chat conversations.",
  "Data Retention": "Duration chat history is stored before deletion.",
  
  // ===== LEAD GENERATION =====
  "Lead Capture Forms": "Capture leads via forms, FAQ flows, and conversational interfaces.",
  "Advanced Lead Capture": "Forms with analytics, conditional logic, and custom fields.",
  "Customizable Q&A Trees": "Create branching conversation paths for lead qualification.",
  "Auto Email to Leads": "Automatically sends follow-up emails to captured leads.",
  "Advanced Analytics": "Detailed reports and insights on chat performance and lead conversion.",
  
  // ===== EMAIL & NOTIFICATIONS =====
  "Email Notifications": "Alerts for new messages and support requests.",
  "Custom Email Templates": "Create branded email templates for notifications.",
  
  // ===== BRANDING & CUSTOMIZATION =====
  "Remove Branding": "Option to remove 'Powered by Sageion' from your chat interface.",
  "Custom Domains": "Use your own domain for chat services (e.g., chat.yourcompany.com).",
  "White-label SDK": "Embed fully branded chat into mobile apps and websites.",
  
  // ===== SUPPORT & SLAs =====
  "Priority Support": "Get faster help from our support team.",
  "Dedicated Account Manager": "Single point of contact for support and strategy.",
  "Phone Support": "Direct phone access to support team.",
  "24/7 Priority Support": "Round-the-clock premium support availability.",
  "SLA": "Service Level Agreement for uptime and reliability.",
  
  // ===== ENTERPRISE FEATURES =====
  "Custom API Rate Limits": "Tailored API rate limits for your needs.",
  "Multi-region Hosting": "Data hosting across multiple geographic regions.",
  "Custom AI Training": "Train AI models specifically for your use case.",
  "Audit Logs": "Comprehensive logs for security and compliance.",
  "Quarterly Business Reviews": "Regular strategy sessions to optimize usage.",
};

const plans = [
  { name: "Launch 🚀" },
  { name: "Starter 🌟" },
  { name: "Growth 🌱", popular: true },
  { name: "Scale ⚡" },
  { name: "Enterprise 🏢" },
];

const groupedFeatures = {
  "Core Features": [
    {
      label: "Monthly Active Users",
      values: ["100 (Live Chat & Auth)", "1,000 (Live Chat & Auth)", "5,000 (Live Chat & Auth)", "25,000 (Live Chat & Auth)", "Custom"]
    },
    {
      label: "Agents",
      values: ["Up to 1", "Up to 5", "Up to 15", "Up to 50", "Unlimited"]
    },
    {
      label: "Unlimited Websites",
      values: [true, true, true, true, true]
    },
    {
      label: "Auth Layer Websites",
      values: ["1", "3", "10", "25", "Unlimited"]
    },
  ],
  
  "AI Chat Features": [
    {
      label: "AI Messages / month",
      values: ["100", "5,000", "10,000+ (scalable)", "20,000+ (scalable)", "Unlimited"]
    },
    {
      label: "Knowledge Base per Agent",
      values: ["5 MB", "100 MB", "500 MB", "2 GB", "Custom"]
    },
    {
      label: "AI Bot Type",
      values: ["Basic AI Bot", "Enhanced AI Bot", "Advanced AI", "Enterprise-grade AI", "Custom AI"]
    },
    {
      label: "Intents/Skills",
      values: ["3", "10", "30", "100", "Unlimited"]
    },
    {
      label: "Multi-language Support",
      values: [false, false, true, true, true]
    },
  ],
  
  "Workflows & Integrations": [
    {
      label: "API Configurations",
      values: ["1", "5", "20", "50", "Unlimited"]
    },
    {
      label: "Chains (Workflows)",
      values: ["0", "3", "15", "40", "Unlimited"]
    },
    {
      label: "Custom Workflows",
      values: [false, false, true, true, true]
    },
    {
      label: "Webhook Support",
      values: [false, false, true, true, true]
    },
    {
      label: "API Access",
      values: [false, false, true, true, true]
    },
    {
      label: "Custom Integrations",
      values: [false, false, false, true, true]
    },
  ],
  
  "Visual Designer": [
    {
      label: "Screens",
      values: ["Single only", "Single + Multiple", "Single + Multiple", "Single + Multiple", "Single + Multiple"]
    },
    {
      label: "Case 3 Support (Nested Arrays)",
      values: ["❌ Not available", "✅ Limited (10 items)", "✅ Unlimited", "✅ Unlimited", "✅ Unlimited"]
    },
    {
      label: "Visual Designer",
      values: ["Basic", "Full", "Full + Advanced", "Full + Advanced", "Full + Enterprise"]
    },
  ],
  
  "Live Chat Features": [
    {
      label: "Live Chat",
      values: [true, true, true, true, true]
    },
    {
      label: "File Upload Size",
      values: ["25 MB", "100 MB", "250 MB", "500 MB", "Custom"]
    },
    {
      label: "Data Retention",
      values: ["15 days", "180 days", "2 years", "5 years", "Custom"]
    },
  ],
  
  "Lead Generation": [
    {
      label: "Lead Capture Forms",
      values: [true, true, true, true, true]
    },
    {
      label: "Advanced Lead Capture",
      values: [false, true, true, true, true]
    },
    {
      label: "Customizable Q&A Trees",
      values: [false, false, true, true, true]
    },
    {
      label: "Auto Email to Leads",
      values: [false, true, true, true, true]
    },
    {
      label: "Advanced Analytics",
      values: [false, false, true, true, true]
    },
  ],
  
  "Email & Notifications": [
    {
      label: "Email Notifications",
      values: [true, true, true, true, true]
    },
    {
      label: "Custom Email Templates",
      values: [false, true, true, true, true]
    },
  ],
  
  "Branding & Customization": [
    {
      label: "Remove Branding",
      values: [false, true, true, true, true]
    },
    {
      label: "Custom Domains",
      values: [false, false, false, "2 included", "Unlimited"]
    },
    {
      label: "White-label SDK",
      values: [false, false, false, true, true]
    },
  ],
  
  "Support & SLAs": [
    {
      label: "Priority Support",
      values: [false, true, true, true, true]
    },
    {
      label: "Dedicated Account Manager",
      values: [false, false, false, true, true]
    },
    {
      label: "Phone Support",
      values: [false, false, false, true, true]
    },
    {
      label: "24/7 Priority Support",
      values: [false, false, false, false, true]
    },
    {
      label: "SLA",
      values: [false, false, false, "99.9% uptime", "Custom"]
    },
  ],
  
  "Enterprise Features": [
    {
      label: "Custom API Rate Limits",
      values: [false, false, false, false, true]
    },
    {
      label: "Multi-region Hosting",
      values: [false, false, false, false, true]
    },
    {
      label: "Custom AI Training",
      values: [false, false, false, false, true]
    },
    {
      label: "Audit Logs",
      values: [false, false, false, false, true]
    },
    {
      label: "Quarterly Business Reviews",
      values: [false, false, false, false, true]
    },
  ],
};

const ComparisonTable = () => {
  const [openSections, setOpenSections] = useState(() =>
    Object.keys(groupedFeatures).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    feature: "",
    details: "",
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const openModal = (featureLabel) => {
    setModalInfo({
      isOpen: true,
      feature: featureLabel,
      details:
        featureDescriptions[featureLabel] ||
        "No description available for this feature.",
    });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, feature: "", details: "" });
  };

  const renderFeatureValue = (value) => {
    if (value === true) return <span className={styles.true}>✔</span>;
    if (value === false) return <span className={styles.false}>✘</span>;
    if (typeof value === "string" && value.includes("❌")) return <span className={styles.notAvailable}>{value}</span>;
    if (typeof value === "string" && value.includes("✅")) return <span className={styles.available}>{value}</span>;
    return value;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.comparisonTitle}>Detailed Feature Comparison</h2>
      <p className={styles.comparisonSubtitle}>
        Compare all features across our plans to choose what's best for your business
      </p>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.featuresHeader}>Features</th>
              {plans.map((plan, idx) => (
                <th key={idx} className={plan.popular ? styles.popular : ""}>
                  <div className={styles.planHeader}>
                    {plan.name}
                    {plan.popular && (
                      <div className={styles.popularTag}>Most Popular</div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedFeatures).map(([sectionName, features], idx) => (
              <React.Fragment key={idx}>
                <tr
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(sectionName)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openSections[sectionName]}
                  onKeyDown={(e) => e.key === "Enter" && toggleSection(sectionName)}
                >
                  <td colSpan={plans.length + 1}>
                    <div className={styles.sectionHeaderContent}>
                      <strong>{sectionName}</strong>
                      <span className={styles.icon}>
                        {openSections[sectionName] ? <FiChevronDown /> : <FiChevronRight />}
                      </span>
                    </div>
                  </td>
                </tr>

                {openSections[sectionName] &&
                  features.map((feature, i) => (
                    <tr key={i} className={styles.featureRow}>
                      <td className={styles.label}>
                        <div className={styles.labelWithIcon}>
                          {feature.label}
                          <button
                            className={styles.infoIcon}
                            onClick={() => openModal(feature.label)}
                            aria-label={`More info about ${feature.label}`}
                          >
                            ℹ️
                          </button>
                        </div>
                      </td>
                      {feature.values.map((value, j) => (
                        <td key={j} className={styles.featureValue}>
                          {renderFeatureValue(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Summary Section */}
      <div className={styles.quickSummary}>
        <h3>📊 Quick Plan Summary</h3>
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>🚀</span>
            <h4>Launch</h4>
            <p>Free forever • Perfect for testing & MVPs</p>
            <ul>
              <li>3 Intents/Skills</li>
              <li>Single Screen only</li>
              <li>1 API Config</li>
              <li>100 AI Messages/mo</li>
            </ul>
          </div>
          <div className={`${styles.summaryCard} ${styles.popularCard}`}>
            <span className={styles.summaryIcon}>🌱</span>
            <h4>Growth <span className={styles.popularTag}>Most Popular</span></h4>
            <p>₹14,999/mo • Best for growing teams</p>
            <ul>
              <li>30 Intents/Skills</li>
              <li>Single + Multiple Screens</li>
              <li>20 API Configs</li>
              <li>10,000+ AI Messages/mo</li>
              <li>✅ Unlimited Case 3</li>
            </ul>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>⚡</span>
            <h4>Scale</h4>
            <p>₹39,999/mo • High-volume enterprise</p>
            <ul>
              <li>100 Intents/Skills</li>
              <li>Single + Multiple Screens</li>
              <li>50 API Configs</li>
              <li>20,000+ AI Messages/mo</li>
              <li>✅ Unlimited Case 3</li>
            </ul>
          </div>
        </div>
      </div>

      {modalInfo.isOpen && (
        <Modal title={modalInfo.feature} onClose={closeModal}>
          <p>{modalInfo.details}</p>
        </Modal>
      )}
    </div>
  );
};

export default ComparisonTable;
