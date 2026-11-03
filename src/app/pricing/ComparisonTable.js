import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

const featureDescriptions = {
  "App Instances": "Number of independent tenant apps you can provision. Each app has its own users, settings, and billing attribution. Slabs: 51-200 (+$99/mo), 201-500 (+$399/mo).",
  "Monthly Executions": "Every workflow run from intent detection to final response = 1 execution. Published overage: $0.08 per 1,000 above the monthly limit. Linear, no cap, no cutoff.",
  "API Endpoints": "Number of distinct backend API routes the runtime is allowed to hit.",
  "Agentic Workflows": "Number of multi-step API chains the AI can trigger. Chain A → wait for 200 → Chain B.",
  "Bulk Intent Generation": "Automatically generate intent mappings by pointing at your API schemas and workflow definitions.",
  "Auto-UI Generation": "Dynamically render forms, tables, and approval cards from your API JSON responses.",
  "Deterministic Routing": "The LLM is restricted to intent classification only. All data retrieval and action execution is routed deterministically via your APIs.",
  "Async Execution Window": "How long the runtime holds a workflow open waiting for an external webhook. Runtime base: 30 min. Upgrades: 1hr +$50/mo, 4hr +$150/mo, 24hr +$400/mo.",
  "Human-in-the-Loop Pauses": "Ability to pause a workflow mid-execution for manual manager approval.",
  "Session History Retention": "Opt-in storage of conversation and workflow context. Runtime base: 30 days. 90d +$30/mo, 1yr +$100/mo. Enterprise: custom/BYO.",
  "Zero-Data Default": "Nothing saved unless retention is explicitly enabled.",
  "Data Residency": "Option to host execution logs and state in a specific geographic region.",
  "Connector Framework": "Attach external services (Slack, WhatsApp, Google Workspace) to nodes without blocking the main chain.",
  "RBAC & Multi-Admin": "Granular Role-Based Access Control for franchise owners, store managers, and support staff.",
  "Attachment Model": "Build 'golden' tenant-level configs and explicitly attach them to specific apps.",
  "White-label Ready": "Remove all Sageion branding; surface runtime as your own platform.",
  "Enterprise Activation": "One-time $15,000 fee includes: API mapping workshop, first 5 workflows built with your team, security review support, data residency setup, admin training, and quarterly business reviews for year 1.",
};

const plans = [
  { name: "Runtime Free" },
  { name: "Runtime", popular: true },
  { name: "Enterprise Runtime" },
];

const groupedFeatures = {
  "Runtime Limits": [
    { label: "App Instances", values: ["1 App", "50 incl. + slabs", "Unlimited"] },
    { label: "Monthly Executions", values: ["~15,000 (~500/day)", "500K + $0.08/1K", "Custom (linear)"] },
    { label: "API Endpoints", values: ["10", "500", "Unlimited"] },
    { label: "Agentic Workflows", values: ["5", "100", "Unlimited"] },
  ],
  "Agent Capabilities": [
    { label: "Bulk Intent Generation", values: ["✅", "✅", "✅"] },
    { label: "Auto-UI Generation", values: ["✅", "✅", "✅"] },
    { label: "Deterministic Routing", values: ["✅", "✅", "✅"] },
    { label: "Connector Framework", values: ["✅", "✅", "✅"] },
  ],
  "Async & Runtime Quality": [
    { label: "Async Execution Window", values: ["Sync only (30s)", "30 min base + upgrades", "Unlimited"] },
    { label: "Human-in-the-Loop Pauses", values: ["❌", "✅", "✅ Unlimited"] },
  ],
  "Data & Security": [
    { label: "Zero-Data Default", values: ["✅", "✅", "✅"] },
    { label: "Session History Retention", values: ["❌", "30d base + tiers", "Custom / BYO"] },
    { label: "RBAC & Multi-Admin", values: ["✅ Basic", "✅ Full", "✅ Full + Custom"] },
    { label: "Attachment Model", values: ["❌", "✅", "✅ Full + Custom"] },
    { label: "Data Residency", values: ["❌", "❌", "✅"] },
  ],
  "Platform & Support": [
    { label: "White-label Ready", values: ["❌", "✅", "✅"] },
    { label: "Enterprise Activation", values: ["❌", "❌", "$15,000 one-time"] },
    { label: "SLA", values: ["❌", "99.9%", "Custom"] },
    { label: "Dedicated Account Manager", values: ["❌", "❌", "✅"] },
    { label: "24/7 Priority Support", values: ["❌", "❌", "✅"] },
    { label: "Minimum Commitment", values: ["None", "None", "3 months"] },
  ],
  "Metered Overages (Published)": [
    { label: "Extra Executions", values: ["Throttled, not charged", "$0.08 / 1K", "Negotiated (linear)"] },
    { label: "App Slab 51-200", values: ["—", "+$99/mo", "Included"] },
    { label: "App Slab 201-500", values: ["—", "+$399/mo", "Included"] },
    { label: "Async Upgrade 1hr", values: ["—", "+$50/mo", "Included"] },
    { label: "Async Upgrade 4hr", values: ["—", "+$150/mo", "Included"] },
    { label: "Async Upgrade 24hr", values: ["—", "+$400/mo", "Included"] },
    { label: "Retention 90 days", values: ["—", "+$30/mo", "Included"] },
    { label: "Retention 1 year", values: ["—", "+$100/mo", "Included"] },
  ],
};

const ComparisonTable = () => {
  const [openSections, setOpenSections] = useState(() =>
    Object.keys(groupedFeatures).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );

  const [modalInfo, setModalInfo] = useState({ isOpen: false, feature: "", details: "" });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const openModal = (featureLabel) => {
    setModalInfo({
      isOpen: true,
      feature: featureLabel,
      details: featureDescriptions[featureLabel] || "No description available.",
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
      <h2 className={styles.comparisonTitle}>Runtime Limits & Capabilities</h2>
      <p className={styles.comparisonSubtitle}>
        All features are included on every tier. You only scale the limits — every overage is published and linear.
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
                    {plan.popular && <div className={styles.popularTag}>Most CRMs land here</div>}
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