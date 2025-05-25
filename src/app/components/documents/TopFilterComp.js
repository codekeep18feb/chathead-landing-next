import React, { useState, useEffect, Suspense } from "react";

const FilterComp = ({ setSelectedFilter }) => {
  const [selections, setSelections] = useState({});
  const [expandedKeys, setExpandedKeys] = useState([]);

  const filter_obj = {
    app_types: {
      P2A: {
        version_types: {
          V1: { modes: ["HEADLESS", "HEADFUL"] },
          V2: { modes: null },
          V3: { modes: null },
        },
      },
      P2B: { disabled: true }, // Example disabled type
      P2P: { disabled: true }, // Example disabled type
    },
  };

  const handleSelection = (path, key, data) => {
    setSelections((prev) => {
      const updated = { ...prev };
      let current = updated;

      path.forEach((p) => {
        if (!current[p] || typeof current[p] !== "object") {
          current[p] = {};
        }
        current = current[p];
      });

      if (data?.modes) {
        current[key] = { selected_mode: null }; // Initialize as object with `selected_mode`
      } else if (Array.isArray(data)) {
        // When selecting a mode, update `selected_mode`
        const parentKey = path[path.length - 1];
        const parent = path.slice(0, -1).reduce((obj, p) => obj[p], updated);
        parent[parentKey] = { selected_mode: key }; // Assign selected mode
      } else {
        current[key] = null; // Set to null if there are no modes
      }

      return updated;
    });

    if (data) {
      setExpandedKeys((prev) => [...prev, path.concat(key).join(".")]);
    }
  };

  const renderOptions = (obj, path = []) => {
    return Object.entries(obj).map(([key, value]) => {
      const isDisabled = value?.disabled; // Check if the current app type is disabled

      return (
        <div
          key={path.concat(key).join(".")}
          className={`option-container ${isDisabled ? "disabled" : ""}`}
        >
          <label>
            <input
              type="radio"
              name={path.join(".") || "root"}
              onChange={() => !isDisabled && handleSelection(path, key, value)}
              disabled={isDisabled} // Disable the radio button if the app type is disabled
            />
            {key}
          </label>
          {expandedKeys.includes(path.concat(key).join(".")) &&
            value &&
            renderNestedOptions(value, path.concat(key))}
        </div>
      );
    });
  };

  const renderNestedOptions = (value, path) => {
    if (value?.modes === null) {
      // Skip rendering modes if 'modes' is null
      return null;
    }

    if (value?.modes) {
      return (
        <div className="nested-options">
          <h4>Mode</h4>
          {value.modes.map((mode, index) => (
            <label key={index} className="mode-label">
              <input
                type="radio"
                name={path.join(".")}
                onChange={() => handleSelection(path, mode, value.modes)}
              />
              {mode}
            </label>
          ))}
        </div>
      );
    }

    return renderOptions(value, path);
  };

  const handleSubmit = () => {
    console.log("Final Selections:", selections);

    if (selections) {
      setSelectedFilter(selections);
    }
  };

  return (
    <div className="filter-container">
      <h3>Filter</h3>
      <div className="options-list">
        {renderOptions(filter_obj.app_types, ["app_types"])}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};


export default FilterComp