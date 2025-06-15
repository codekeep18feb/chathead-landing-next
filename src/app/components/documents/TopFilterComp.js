import React, { useState } from "react";
import styles from "./filterSty.module.css"

const FilterComp = ({ setSelectedFilter }) => {
  const [selectedAppType, setSelectedAppType] = useState(null);
  const [selectedVersionType, setSelectedVersionType] = useState(null);

  const filterOptions = {
    app_types: ["P2A", "P2P"],
    version_types: ["V1", "V2", "V3"]
  };

  const handleSubmit = () => {
    setSelectedFilter({
      app_type: selectedAppType,
      version_type: selectedVersionType
    });
  };

  const renderOptions = (options, selectedValue, handler, name) => {
    return options.map((option) => (
      <div key={option} className={styles["option-container"]}>
        <label>
          <input
            type="radio"
            name={name}
            checked={selectedValue === option}
            onChange={() => handler(option)}
          />
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div className={styles["filter-container"]}>
      {/* <h3>Select Version Type</h3> */}
      <div className={styles["options-list"]}>
     
        
        <div className={styles["filter-group"]}>
          <h3>Select Version Type</h3>
          {renderOptions(
            filterOptions.version_types,
            selectedVersionType,
            setSelectedVersionType,
            "version_type"
          )}
        </div>
      </div>
      <button className={styles["submit-btn"]} onClick={handleSubmit}>
      Apply Filter
      </button>
    </div>
  );
};

export default FilterComp;