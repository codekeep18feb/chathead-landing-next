import React, { useState } from "react";

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
      <div key={option} className="option-container">
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
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="options-list">
        <div className="filter-group">
          <h4>App Type</h4>
          {renderOptions(
            filterOptions.app_types,
            selectedAppType,
            setSelectedAppType,
            "app_type"
          )}
        </div>
        
        <div className="filter-group">
          <h4>Version Type</h4>
          {renderOptions(
            filterOptions.version_types,
            selectedVersionType,
            setSelectedVersionType,
            "version_type"
          )}
        </div>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default FilterComp;