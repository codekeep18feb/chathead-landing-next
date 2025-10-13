import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

const featureDescriptions = {
  "Live Chat": "Two-way live chat between visitors and your support team.",
  "Live Status Indicator": "Shows whether agents are online or offline.",
  "Max-file Attach Size": "Maximum file size a user can upload in chat.",
  "Data Retention": "Duration chat history is stored before deletion.",
  "Multi-Admin": "Number of admins and support users included.",
  "AI Bot": "AI assistant that answers questions, detects user intent, and routes chats to live agents when needed.",
  "Trainable Chatbot Agents": "Instantly train your AI bot with content from your website — no manual setup needed.",
  "Lead Gen (FAQ)": "Capture leads via FAQ flows and contact forms.",
  "Lead Gen Analytics": "Reports on lead capture performance.",
  "Auto Email to Leads": "Automatically emails leads after form submission.",
  "Basic Notification": "Simple email alerts for new messages.",
  "Advanced Notification": "Rules, templates, and triggers for email alerts.",
  "Remove Branding": "Option to remove 'Powered by MagicChat' branding.",
  "Priority Support": "Get faster help from our support team.",
  "Monthly Active Users": "Number of unique users who interact with your chat per month.",
  "Agents": "Number of chatbot agents you can create and train.",
  "Unlimited Websites": "Use MagicChat on unlimited websites with a single plan.",
  "API Access": "Programmatic access to MagicChat features for custom integrations.",
};

const plans = [
  { name: "Launch 🚀" },
  { name: "Starter 🌟" },
  { name: "Growth 🌱", popular: true },
];

const groupedFeatures = {
  "Core Features": [
    { label: "Monthly Active Users", values: ["100", "500", "1k - 10k (scalable)"] },
    { label: "Agents", values: ["Up to 2", "Up to 4", "Up to 20"] },
    { label: "Unlimited Websites", values: [true, true, true] },
    { label: "Multi-Admin", values: ["1 Admin + 1 Support User", "1 Admin + 5 Support Users", "1 Admin + 30 Support Users"] },
  ],
  "Live Chat": [
    { label: "Live Chat", values: [true, true, true] },
    { label: "Live Status Indicator", values: [true, true, true] },
    { label: "Max-file Attach Size", values: ["25MB", "50MB", "100MB"] },
    { label: "Data Retention", values: ["15 days", "30 days", "120 days"] },
  ],
  "AI Chat": [
    { label: "AI Bot", values: [true, true, true] },
    { label: "Trainable Chatbot Agents", values: ["2 chatbot agents (trainable on up to 20 URLs each)", "4 chatbot agents (trainable on up to 50 URLs each)", "20 chatbot agents (trainable on up to 100 URLs each)"] },
  ],
  "Knowledge Base & Lead Generation": [
    { label: "Lead Gen (FAQ)", values: [true, true,true] },
    { label: "Lead Gen Analytics", values: [true, true,true] },
    { label: "Auto Email to Leads", values: [false, true,true] },
  ],
  "Email Notification": [
    { label: "Basic Notification", values: [true, true, true] },
    { label: "Advanced Notification", values: [false, true, true] },
  ],
  "Branding & Support": [
    { label: "Remove Branding", values: [false, true, true] },
    { label: "Priority Support", values: [false, true, true] },
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
    if (value === true) return <span className={styles.true}>✔️</span>;
    if (value === false) return <span className={styles.false}>❌</span>;
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
