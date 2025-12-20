import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

const featureDescriptions = {
  "Monthly Active Users": "Total unique users who interact with your chat and authentication services per month.",
  "Agents": "Number of AI chatbot agents you can create and train with custom knowledge.",
  "Unlimited Websites": "Use MagicChat on unlimited websites with a single plan.",
  "Multi-Admin": "Number of admin and support users included in the plan.",
  "Auth Layer Websites": "Number of websites where you can use MagicChat's built-in authentication system.",
  "AI Messages / month": "Monthly limit for AI chatbot interactions (no LLM token costs).",
  "Knowledge Base per Agent": "Maximum amount of training data per AI agent.",
  "Live Chat": "Two-way live chat between visitors and your support team.",
  "File Upload Size": "Maximum file size users can upload in live chat conversations.",
  "Data Retention": "Duration chat history is stored before deletion.",
  "AI Bot": "AI assistant that answers questions, detects user intent, and routes chats to live agents when needed.",
  "Basic AI Bot": "Simple AI with intent detection and basic responses.",
  "Enhanced AI Bot": "AI with smart replies and improved contextual understanding.",
  "Advanced AI": "Custom-trained AI with fine-tuning and multi-language support.",
  "Enterprise-grade AI": "Multi-model AI routing with advanced configuration options.",
  "Lead Capture Forms": "Capture leads via forms, FAQ flows, and conversational interfaces.",
  "Advanced Lead Capture": "Forms with analytics, conditional logic, and custom fields.",
  "Customizable Q&A Trees": "Create branching conversation paths for lead qualification.",
  "Auto Email to Leads": "Automatically sends follow-up emails to captured leads.",
  "Email Notifications": "Alerts for new messages and support requests.",
  "Custom Email Templates": "Create branded email templates for notifications.",
  "Remove Branding": "Option to remove 'Powered by MagicChat' from your chat interface.",
  "Priority Support": "Get faster help from our support team.",
  "Advanced Analytics": "Detailed reports and insights on chat performance and lead conversion.",
  "API Access": "Programmatic access to MagicChat features for custom integrations.",
  "Webhook Support": "Receive real-time notifications for chat events.",
  "Custom Workflows": "Build automated workflows and business rules.",
  "Multi-language Support": "AI support for multiple languages.",
  "Security & Compliance": "GDPR-ready security features and data protection.",
  "SLA": "Service Level Agreement for uptime and reliability.",
  "Dedicated Account Manager": "Single point of contact for support and strategy.",
  "Phone Support": "Direct phone access to support team.",
  "Custom Domains": "Use your own domain for chat services (e.g., chat.yourcompany.com).",
  "White-label SDK": "Embed fully branded chat into mobile apps and websites.",
  "Custom Integrations": "Integration support for CRM, helpdesk, and other business tools.",
  "24/7 Priority Support": "Round-the-clock premium support availability.",
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
    }
  ],
  "AI Chat Features": [
    {
      label: "AI Messages / month",
      values: ["100", "5,000", "10,000+ (scalable)", "20,000+ (scalable)", "Unlimited"]
    },
    
    {
      label: "Multi-language Support",
      values: [false, false, true, true, true]
    },
  ]
  
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

      {modalInfo.isOpen && (
        <Modal title={modalInfo.feature} onClose={closeModal}>
          <p>{modalInfo.details}</p>
        </Modal>
      )}
    </div>
  );
};

export default ComparisonTable;