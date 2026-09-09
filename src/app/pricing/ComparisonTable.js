import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

const featureDescriptions = {
  // ===== CORE FEATURES =====
  "Monthly Active Users": "Total unique users who interact with your chat services per month.",
  "Agents": "Number of AI chatbot agents you can create and train with custom knowledge.",
  "Unlimited Websites": "Use Sageion on unlimited websites with a single plan.",
  "Support Users": "Number of support team members who can access the admin dashboard.",
  
  // ===== AI CHAT FEATURES =====
  "AI Messages / month": "Monthly limit for AI chatbot interactions (no LLM token costs).",
  "Knowledge Base per Agent": "Maximum amount of training data per AI agent.",
  "AI Bot Type": "Level of AI sophistication available for your chatbots.",
  "Intents/Skills": "Number of conversational skills or intents your AI agent can recognize and handle.",
  "Custom Intent Configuration": "Ability to define custom intents and skills for your AI agent.",
  
  // ===== API & WORKFLOWS =====
  "API Configurations": "Number of API endpoints you can configure for your chatbot to call.",
  "API Chains (Workflows)": "Multi-step API workflows where response from one API determines the next API call.",
  "LeadGen Workflows": "Specialized workflows for lead qualification and routing.",
  
  // ===== VISUAL DESIGNER =====
  "Visual Response Designer": "No-code visual interface for designing AI responses.",
  "Simple Multiple Screens": "Root array data → each item gets its own screen. Perfect for product lists, search results, and simple item collections.",
  "Complex Multiple Screens": "Nested array data with metadata → each nested item gets its own screen while preserving context.",
  
  // ===== LEAD CAPTURE =====
  "Lead Capture Forms": "Capture leads via forms, FAQ flows, and conversational interfaces.",
  "Lead Storage Capacity": "Number of leads that can be stored in the system before requiring export or cleanup.",
  "Advanced Lead Capture": "Forms with analytics, conditional logic, and custom fields.",
  "Customizable Q&A Trees": "Create branching conversation paths for lead qualification.",
  "Auto Email to Leads": "Automatically sends follow-up emails to captured leads.",
  
  // ===== LIVE CHAT FEATURES =====
  "Live Chat": "Two-way live chat between visitors and your support team.",
  "File Upload Size": "Maximum file size users can upload in live chat conversations.",
  "Chat History Retention": "Duration chat history is stored before deletion.",
  "Multi-Region Support": "Support for users across different geographical regions (US, IN).",
  
  // ===== ADMIN & MANAGEMENT =====
  "All Chats Dashboard": "Centralized view of all conversations across all applications.",
  "Multi-Admin Support": "Multiple administrators and support users with role-based permissions.",
  "User Management": "Manage users across all applications with search and filtering.",
  
  // ===== EMAIL & NOTIFICATIONS =====
  "Email Notifications": "Alerts for new messages and support requests.",
  "Custom Email Templates": "Create branded email templates for notifications.",
  
  // ===== BRANDING =====
  "Remove Branding": "Option to remove 'Powered by Sageion' from your chat interface.",
  "Custom Domains": "Use your own domain for chat services (e.g., chat.yourcompany.com).",
  
  // ===== SUPPORT =====
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
      values: ["100", "1,000", "5,000", "25,000", "Custom"]
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
      label: "Support Users",
      values: ["1", "5", "10", "Unlimited", "Unlimited"]
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
      label: "Custom Intent Configuration",
      values: ["✅ Basic", "✅ Full", "✅ Full", "✅ Full", "✅ Full + Custom"]
    },
  ],
  
  "API & Workflows": [
    {
      label: "API Configurations",
      values: ["1", "5", "20", "50", "Unlimited"]
    },
    {
      label: "API Chains (Workflows)",
      values: ["1", "3", "15", "40", "Unlimited"]
    },
    {
      label: "LeadGen Workflows",
      values: ["1", "3", "10", "25", "Unlimited"]
    },
  ],
  
  "Visual Designer": [
    {
      label: "Visual Response Designer",
      values: ["✅ Basic", "✅ Full", "✅ Full + Advanced", "✅ Full + Advanced", "✅ Full + Enterprise"]
    },
    {
      label: "Simple Multiple Screens",
      values: ["✅ 5 items", "✅ 25 items", "✅ Unlimited", "✅ Unlimited", "✅ Unlimited"]
    },
    {
      label: "Complex Multiple Screens",
      values: ["✅ 3 items", "✅ 10 items", "✅ Unlimited", "✅ Unlimited", "✅ Unlimited"]
    },
  ],
  
  "Lead Capture": [
    {
      label: "Lead Capture Forms",
      values: ["✅ 3 forms", "✅ 10 forms", "✅ 25 forms", "✅ 50 forms", "✅ Unlimited"]
    },
    {
      label: "Lead Storage Capacity",
      values: ["100 leads", "1,000 leads", "10,000 leads", "50,000 leads", "Unlimited"]
    },
    {
      label: "Advanced Lead Capture",
      values: ["❌", "✅", "✅", "✅", "✅"]
    },
    {
      label: "Customizable Q&A Trees",
      values: ["❌", "❌", "✅", "✅", "✅"]
    },
    {
      label: "Auto Email to Leads",
      values: ["❌", "✅", "✅", "✅", "✅"]
    },
  ],
  
  "Live Chat": [
    {
      label: "Live Chat",
      values: [true, true, true, true, true]
    },
    {
      label: "File Upload Size",
      values: ["25 MB", "100 MB", "250 MB", "500 MB", "Custom"]
    },
    {
      label: "Chat History Retention",
      values: ["15 days", "180 days", "2 years", "5 years", "Custom"]
    },
    {
      label: "Multi-Region Support",
      values: [true, true, true, true, true]
    },
  ],
  
  "Admin & Management": [
    {
      label: "All Chats Dashboard",
      values: [true, true, true, true, true]
    },
    {
      label: "Multi-Admin Support",
      values: ["❌", "❌", "✅", "✅", "✅"]
    },
    {
      label: "User Management",
      values: [true, true, true, true, true]
    },
  ],
  
  "Email & Notifications": [
    {
      label: "Email Notifications",
      values: [true, true, true, true, true]
    },
    {
      label: "Custom Email Templates",
      values: ["❌", "✅", "✅", "✅", "✅"]
    },
  ],
  
  "Branding": [
    {
      label: "Remove Branding",
      values: ["❌", "✅", "✅", "✅", "✅"]
    },
    {
      label: "Custom Domains",
      values: ["❌", "❌", "❌", "✅ (2)", "✅ Unlimited"]
    },
  ],
  
  "Support": [
    {
      label: "Priority Support",
      values: ["❌", "✅", "✅", "✅", "✅"]
    },
    {
      label: "Dedicated Account Manager",
      values: ["❌", "❌", "❌", "✅", "✅"]
    },
    {
      label: "Phone Support",
      values: ["❌", "❌", "❌", "✅", "✅"]
    },
    {
      label: "24/7 Priority Support",
      values: ["❌", "❌", "❌", "❌", "✅"]
    },
    {
      label: "SLA",
      values: ["❌", "❌", "❌", "✅ (99.9%)", "✅ Custom"]
    },
  ],
  
  "Enterprise Features": [
    {
      label: "Custom API Rate Limits",
      values: ["❌", "❌", "❌", "❌", "✅"]
    },
    {
      label: "Multi-region Hosting",
      values: ["❌", "❌", "❌", "❌", "✅"]
    },
    {
      label: "Custom AI Training",
      values: ["❌", "❌", "❌", "❌", "✅"]
    },
    {
      label: "Audit Logs",
      values: ["❌", "❌", "❌", "❌", "✅"]
    },
    {
      label: "Quarterly Business Reviews",
      values: ["❌", "❌", "❌", "❌", "✅"]
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
    if (typeof value === "string" && value.includes("✅")) return <span className={styles.available}>{value}</span>;
    if (typeof value === "string" && value.includes("❌")) return <span className={styles.notAvailable}>{value}</span>;
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
              <li>1 API Config + 1 Chain</li>
              <li>100 AI Messages/mo</li>
              <li>✅ Simple Multiple Screens (5 items)</li>
              <li>✅ Complex Multiple Screens (3 items)</li>
              <li>✅ 3 Lead Capture Forms</li>
              <li>100 Leads Storage</li>
            </ul>
          </div>
          <div className={`${styles.summaryCard} ${styles.popularCard}`}>
            <span className={styles.summaryIcon}>🌱</span>
            <h4>Growth <span className={styles.popularTag}>Most Popular</span></h4>
            <p>₹14,999/mo • Best for growing teams</p>
            <ul>
              <li>30 Intents/Skills</li>
              <li>20 API Configs + 15 Chains</li>
              <li>10,000+ AI Messages/mo</li>
              <li>✅ Unlimited Screens</li>
              <li>✅ 25 Lead Capture Forms</li>
              <li>10,000 Leads Storage</li>
              <li>✅ Multi-Admin Support</li>
            </ul>
          </div>
          <div className={styles.summaryCard}>
            <span className={styles.summaryIcon}>⚡</span>
            <h4>Scale</h4>
            <p>₹39,999/mo • High-volume enterprise</p>
            <ul>
              <li>100 Intents/Skills</li>
              <li>50 API Configs + 40 Chains</li>
              <li>20,000+ AI Messages/mo</li>
              <li>✅ Unlimited Screens</li>
              <li>✅ 50 Lead Capture Forms</li>
              <li>50,000 Leads Storage</li>
              <li>✅ Multi-Admin + Dedicated Support</li>
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
