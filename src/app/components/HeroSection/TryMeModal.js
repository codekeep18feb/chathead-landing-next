"use client";

import React, { useState } from "react";
import styles from "./TryMeModal.module.css";

const TryMeModal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const content = {
    Hotels: [
      {
        title: "Veloura",
        url: "https://veloura-on-react.vercel.app/",
      },
      //   {
      //     title: "Taj Hotels",
      //     url: "https://www.tajhotels.com/",
      //   },
      //   {
      //     title: "Oberoi Hotels",
      //     url: "https://www.oberoihotels.com/",
      //   },
    ],

    "Real Estate": [
      {
        title: "DLF",
        url: "https://www.dlf.in/",
      },
      {
        title: "Godrej Properties",
        url: "https://www.godrejproperties.com/",
      },
    ],

    SAAS: [
      {
        title: "Salesforce",
        url: "https://www.salesforce.com/",
      },
      {
        title: "HubSpot",
        url: "https://www.hubspot.com/",
      },
    ],
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Heading */}
        <h2 className={styles.heading}>Try Our Platform</h2>

        {/* Sub Heading */}
        <p className={styles.subheading}>
          Select an industry below to explore our platform.
        </p>

        {/* Dropdown */}
        <div className={styles.dropdownWrapper}>
          <label htmlFor="tryMeOption">Choose an industry</label>

          <select
            id="tryMeOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className={styles.dropdown}
          >
            <option value="">Select an option</option>

            <option value="Hotels">Hotels</option>

            <option value="Real Estate" disabled>
              Real Estate
            </option>

            <option value="SAAS" disabled>
              SAAS
            </option>
          </select>
        </div>

        {/* Dynamic Content */}
        {selectedOption && content[selectedOption] && (
          <div className={styles.content}>
            <h3>{selectedOption}</h3>

            <ul>
              {content[selectedOption].map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TryMeModal;
