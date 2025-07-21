import React, { useState } from "react";
import styles from "./filterSty.module.css";

const FilterComp = ({ setSelectedFilter }) => {
  const [selectedAppType, setSelectedAppType] = useState(null);
  const [selectedVersionType, setSelectedVersionType] = useState("V1"); // default

  const filterOptions = {
    version_types: [
      { key: "V1", label: "Cloud Managed Auth" },
      { key: "V2", label: "Locally Managed Auth" },
      { key: "V3", label: "Plugin Driven" },
    ],
  };

  const handleSelectVersionType = (key) => {
    setSelectedVersionType(key);
    setSelectedFilter({
      app_type: selectedAppType,
      version_type: key,
    });
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
          <h3>Select Version Type</h3>
          <div className={styles["button-group"]}>
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
