"use client";
import React, { useState } from "react";
import styles from "./ComparisonTable.module.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Modal from "./Modal";

// Static description mapping for each feature
const featureDescriptions = {
  "Billing Status": "Tracks whether the customer has an active billing relationship or not.",
  "Live Status Indicator": "Shows whether the support agent or bot is currently online or offline.",
  "Max-file Attach Size": "Maximum file size that can be attached by users during live chat.",
  "Data Retention": "Duration for which your chat data is retained before deletion.",
  "Multi-Admin": "Allows multiple support agents and admin-level users to collaborate in one dashboard.",
  "Update Bot-site Summary": "Lets you update the bot's page summary dynamically via admin settings.",
  "Bot Chat": "Enables chatbot-based interactions to automate customer support.",
  "Fig Chat": "AI-powered feature for intelligent responses based on FigML.",
  "Basic Notifiaction": "Includes basic email notifications for new messages and alerts.",
  "Advance Notifiaction": "Offers advanced email rules, templates, and smart triggers for notifications.",
};

const plans = [
  { name: "Basic Plan" },
  { name: "Advance Plan" },
];

const groupedFeatures = {
  "Live Chat": [
    {
      label: "Billing Status",
      values: [true, true],
    },
    {
      label: "Live Status Indicator",
      values: [true, true],
    },
    {
      label: "Max-file Attach Size",
      values: ["50MB", "100MB"],
    },
    {
      label: "Data Retention",
      values: ["60 days", "120 days"],
    },
    {
      label: "Multi-Admin",
      values: ["1 Admin + 3 Support Users", "1 Admin + 30 Support Users"],
      popular: true,
    },
  ],
  "Bot Chat": [
    {
      label: "Update Bot-site Summary",
      values: [true, true],
    },
    {
      label: "Bot Chat",
      values: [true, true],
    },
    {
      label: "Fig Chat",
      values: [true, true],
    },
  ],
  "Email Notification": [
    {
      label: "Basic Notifiaction",
      values: [true, true],
    },
    {
      label: "Advance Notifiaction",
      values: [false, true],
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
                  <div className={styles.popularTag}>Most popular</div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedFeatures).map(
            ([sectionName, features], idx) => (
              <React.Fragment key={idx}>
                <tr
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(sectionName)}
                >
                  <td colSpan={plans.length + 1}>
                    <div className={styles.sectionHeaderContent}>
                      <strong>{sectionName}</strong>
                      <span className={styles.icon}>
                        {openSections[sectionName] ? (
                          <FiChevronDown />
                        ) : (
                          <FiChevronRight />
                        )}
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
                          {feature.popular && (
                            <span className={styles.featurePopularTag}>
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </td>
                      {feature.values.map((value, j) => (
                        <td key={j}>
                          {value === true
                            ? "✔️"
                            : value === false
                            ? "❌"
                            : value}
                        </td>
                      ))}
                    </tr>
                  ))}
              </React.Fragment>
            )
          )}
        </tbody>
      </table>

      {/* Modal for feature info */}
      {modalInfo.isOpen && (
        <Modal title={modalInfo.feature} onClose={closeModal}>
          <p>{modalInfo.details}</p>
        </Modal>
      )}
    </div>
  );
};

export default ComparisonTable;
