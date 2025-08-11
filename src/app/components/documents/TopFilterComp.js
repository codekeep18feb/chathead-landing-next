import React, { useEffect, useState } from "react";
import styles from "./filterSty.module.css";
import { FaFilter } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const FilterComp = ({ setSelectedFilter }) => {
  const [selectedAppType, setSelectedAppType] = useState(null);
  const [selectedVersionType, setSelectedVersionType] = useState("V1"); // default
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileFilters(window.innerWidth <= 885);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterOptions = {
    version_types: [
      { key: "V1", label: "Instant Auth + Chat" },
      { key: "V2", label: "BYO Auth Chat" },
      { key: "V3", label: "CMS-Ready Chat" },
      { key: "V4", label: "No Auth Only Chat" },
    ],
  };

const handleSelectVersionType = (key) => {
  setSelectedVersionType(key);
  setSelectedFilter((prev) => ({
    ...prev,
    version_type: key,
  }));
  setShowMobileFilters(false);
};


  const renderOptions = (options, selectedValue, handler) => {
    return options.map(({ key, label }) => (
      <button
        key={key}
        className={`${styles["option-button"]} ${
          selectedValue === key ? styles["active"] : ""
        }`}
        onClick={() => handler(key)}
        type="button"
      >
        {label}
      </button>
    ));
  };

  return (
    <div className={styles["filter-container"]}>
      <div className={styles["options-list"]}>
        <div className={styles["filter-group"]}>
          {/* Title and Icon Row */}
          <div className={styles["filter-header"]}>
            <h3>Select Version Type</h3>
            <div className={styles.filterIconWrapper}>
              <IoFilter
                className={styles.filterIcon}
                onClick={() => setShowMobileFilters((prev) => !prev)}
              />
            </div>
          </div>

          {/* Dropdown List */}
          <div
            className={`${styles["button-group"]} ${
              showMobileFilters ? styles["show-on-mobile"] : ""
            }`}
          >
            {renderOptions(
              filterOptions.version_types,
              selectedVersionType,
              handleSelectVersionType
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
