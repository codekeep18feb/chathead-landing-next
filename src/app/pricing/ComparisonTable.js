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
  "AI Bot": "Automated assistant for answering FAQs and routing queries.",
  "Update Bot-site Summary": "Maximum size of content the AI can be trained on.",
  "Lead Gen (FAQ)": "Capture leads via FAQ flows and contact forms.",
  "Lead Gen Analytics": "Reports on lead capture performance.",
  "Auto Email to Leads": "Automatically emails leads after form submission.",
  "Basic Notification": "Simple email alerts for new messages.",
  "Advanced Notification": "Rules, templates, and triggers for email alerts.",
  "Remove Branding": "Option to remove 'Powered by MagicChat' branding.",
  "Priority Support": "Get faster help from our support team.",
};

const plans = [
  { name: "Launch 🚀" },
  { name: "Growth 🌱", popular: true },
];

const groupedFeatures = {
  "Live Chat": [
    { label: "Live Chat", values: [true, true] },
    { label: "Live Status Indicator", values: [true, true] },
    { label: "Max-file Attach Size", values: ["50MB", "100MB"] },
    { label: "Data Retention", values: ["30 days", "120 days"] },
    { label: "Multi-Admin", values: ["1 Admin + 3 Support Users", "1 Admin + 30 Support Users"] },
  ],
  "AI Chat": [
    { label: "AI Bot", values: [true, true] },
    { label: "Update Bot-site Summary", values: ["100 words", "500 words"] },
  ],
  "Knowledge Base & Lead Generation": [
    { label: "Lead Gen (FAQ)", values: [true, true] },
    { label: "Lead Gen Analytics", values: [true, true] },
    { label: "Auto Email to Leads", values: [false, true] },
  ],
  "Email Notification": [
    { label: "Basic Notification", values: [true, true] },
    { label: "Advanced Notification", values: [false, true] },
  ],
  "Branding & Support": [
    { label: "Remove Branding", values: [false, true] },
    { label: "Priority Support", values: [false, true] },
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

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Features</th>
            {plans.map((plan, idx) => (
              <th key={idx} className={plan.popular ? styles.popular : ""}>
                {plan.name}
                {plan.popular && (
                  <div className={styles.popularTag}>Most Popular</div>
                )}
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
              >
                <td colSpan={plans.length + 1} className={styles.tableData}>
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
                  <tr key={i}>
                    <td className={styles.label}>
                      <div className={styles.labelWithIcon}>
                        {feature.label}
                        <span
                          className={styles.infoIcon}
                          onClick={() => openModal(feature.label)}
                        >
                          ℹ️
                        </span>
                      </div>
                    </td>
                    {feature.values.map((value, j) => (
                      <td key={j}>
                        {value === true ? "✔️" : value === false ? "❌" : value}
                      </td>
                    ))}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {modalInfo.isOpen && (
        <Modal title={modalInfo.feature} onClose={closeModal}>
          <p>{modalInfo.details}</p>
        </Modal>
      )}
    </div>
  );
};

export default ComparisonTable;
