import React, { useState } from "react";
import styles from "./filterSty.module.css";

const FilterComp = ({ setSelectedFilter }) => {
  const [selectedAppType, setSelectedAppType] = useState(null);
  const [selectedVersionType, setSelectedVersionType] = useState("V1"); // default

  const filterOptions = {
    app_types: ["P2A", "P2P"],
    version_types: ["V1", "V2", "V3"],
  };

  const handleSelectVersionType = (option) => {
    setSelectedVersionType(option);
    setSelectedFilter({
      app_type: selectedAppType,
      version_type: option,
    });
  };

  const renderOptions = (options, selectedValue, handler) => {
    return options.map((option) => (
      <button
        key={option}
        className={`${styles["option-button"]} ${
          selectedValue === option ? styles["active"] : ""
        }`}
        onClick={() => handler(option)}
        type="button"
      >
        {option}
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
