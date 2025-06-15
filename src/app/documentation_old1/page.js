"use client";

import React, { useState, useEffect, Suspense } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css"; // Import the CSS file
import { useSearchParams } from "next/navigation";
import payload from "./payload";
import YouTubeEmbed from "../components/YouTubeVideo";


const CondRadioRender = ({ r_options, current_mode }) => {
  const [selectedOption, setSelectedOption] = useState(r_options[0]?.text);
  const [isMobile, setIsMobile] = useState(false);


  // Update the selectedOption whenever current_mode or r_options change
  useEffect(() => {
    setSelectedOption(r_options[0]?.text);
  }, [current_mode, r_options]);

  // Check if the viewport is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile viewport breakpoint
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionChange = (optionText) => {
    // Update the selected option
    setSelectedOption(optionText);
  };

  if (!current_mode) {
    return null; // Handle the absence of current_mode gracefully
  }

  const selectedDescription = r_options.find(
    (option) => option.text === selectedOption
  )?.description;

  return (
    <div className="setup">
      {isMobile ? (
        // Render as dropdown on mobile
        <div className="dropdown">
          <select
            value={selectedOption || ""}
            onChange={(e) => handleOptionChange(e.target.value)}
            className="dropdown-select"
          >
            {r_options.map((option, index) => (
              <option key={index} value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ) : (
        // Render as tabs on larger screens
        <div className="tabs">
          {r_options.map((option, index) => (
            <button
              key={index}
              className={`tab-button ${
                selectedOption === option.text ? "active" : ""
              }`}
              onClick={() => handleOptionChange(option.text)}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}

      <div className="description">
        {/* Render content based on the selected option */}
        <ContentRenderer
          content={selectedDescription}
          current_mode={current_mode}
        />
      </div>
    </div>
  );
};



const supportedTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "div",
  "img",
  "a",
  "blockquote",
  "ul",
  "li",
  "code",
  "ol",
];

const renderTextWithElements = (
  text,
  linkParts,
  buttonParts,
  highlightParts
) => {
  if (!linkParts && !buttonParts && !highlightParts) {
    return text;
  }

  const parts = [];
  let lastIndex = 0;

  const elements = [
    ...(linkParts || []),
    ...(buttonParts || []),
    ...(highlightParts || []),
  ];
  let sortedParts = elements.sort(
    (a, b) => text.indexOf(a.text) - text.indexOf(b.text)
  );

  sortedParts.forEach((part, index) => {
    const startIndex = text.indexOf(part.text, lastIndex);

    if (startIndex > -1) {
      if (startIndex > lastIndex) {
        parts.push(text.substring(lastIndex, startIndex));
      }

      if (part.link) {
        parts.push(
          <a
            key={`link-${index}`}
            href={part.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        );
      } else if (part.onClick) {
        parts.push(
          <button key={`button-${index}`} onClick={part.onClick}>
            {part.text}
          </button>
        );
      } else if (
        highlightParts &&
        highlightParts.some((hp) => hp.text === part.text)
      ) {
        parts.push(
          <span
            key={`highlight-${index}`}
            style={{ backgroundColor: "green", color: "white" }}
          >
            {part.text}
          </span>
        );
      }

      lastIndex = startIndex + part.text.length;
    }
  });

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const List = ({ items, listType }) => {
  console.log("Here are the items:", items);

  return listType === "ol" ? (
    <ol className="content-list ordered">
      {items.map((item, index) => (
        <ListItem key={index} item={item} listType={listType} />
      ))}
    </ol>
  ) : (
    <ul className="content-list">
      {items.map((item, index) => (
        <ListItem key={index} item={item} listType={listType} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, listType }) => {
  const linkParts = item.link_parts || [];
  const buttonParts = item.buttonParts || [];
  const highlightParts = item.highlightParts || [];

  return (
    <li>
      {typeof item === "string" ? (
        <span dangerouslySetInnerHTML={{ __html: item }} />
      ) : (
        <React.Fragment>
          {item.text ? (
            <span>
              {renderTextWithElements(
                item.text,
                linkParts,
                buttonParts,
                highlightParts
              )}
            </span>
          ) : null}
          <div>
            {item.img && (
              <img src={item.img} alt="" className="content-list-img" />
            )}
          </div>
          {item.more_text && <p>{item.more_text}</p>}
          {item.add_more_p && <p>{item.add_more_p}</p>}
          {item.code && (
            <pre className="script_code">
              <code>{item.code}</code>
            </pre>
          )}
          {item.extra_text && <p>{item.extra_text}</p>}
          {item.sub_items && (
            <List items={item.sub_items} listType={item.listType || listType} />
          )}
        </React.Fragment>
      )}
    </li>
  );
};

const ContentRenderer = ({ content, current_mode }) => {
  console.log(content, "ismyscode indiv not even called", current_mode);
  return (
    <div className="contents">
      {content?.map((item, index) => {
        const Tag = supportedTags.includes(item.tag_type)
          ? item.tag_type
          : "div";

        if (item.tag_type === "img") {
          return (
            <div className="content-list-img" key={index}>
              <img src={item.src} alt={item.alt || ""} />
            </div>
          );
        }

        if (item.tag_type === "video") {
          return (
            <div key={index}>
              <div className="videos_wrapper">
                <YouTubeEmbed key={index} src={item.src} desc={item.desc} />
              </div>
            </div>
          );
        }

        if (item.tag_type === "h2") {
          return (
            <h2 key={index} className="content-heading">
              {item.text}
            </h2>
          );
        } else if (item.tag_type === "h4") {
          return (
            <h2 key={index} className="content-inner-heading">
              {item.text}
            </h2>
          );
        } else if (item.tag_type === "feature_options") {
          return (
            <CondRadioRender
              r_options={item.options}
              key={index}
              current_mode={current_mode}
            />
          );
        } else if (item.tag_type === "p") {
          return (
            <p key={index} className="content-subheading">
              {item.text}
            </p>
          );
        } else if (item.tag_type === "h3") {
          return (
            <h3 key={index} className="second_subheading">
              {item.text}
            </h3>
          );
        } else if (item.tag_type === "p") {
          return (
            <p key={index} className="content-paragraph">
              {item.text}
            </p>
          );
        } else if (item.tag_type === "a") {
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="content-link"
            >
              {item.text}
            </a>
          );
        } else if (item.tag_type === "ul" || item.tag_type === "ol") {
          return (
            <List key={index} items={item.items} listType={item.tag_type} />
          );
        } else if (item.tag_type === "blockquote") {
          return (
            <blockquote key={index} className="content-blockquote">
              {item.text}
            </blockquote>
          );
        } else if (item.tag_type === "code") {
          return (
            <pre key={index} className="content-code">
              <code>{item.text}</code>
            </pre>
          );
        } else if (item.tag_type === "li") {
          return (
            <li key={index} className="content-list-item">
              {item.text}
              {item.sub_items && (
                <List items={item.sub_items} listType={item.listType || "ul"} />
              )}
            </li>
          );
        } else if (item.tag_type === "div") {
          return (
            <div key={index} className="content-div">
              {item.children &&
                item.children.map((child, i) => (
                  <ContentRenderer
                    key={`${index}-${i}`} // Combine index and child index for uniqueness
                    content={[child]}
                    current_mode={current_mode}
                  />
                ))}

              {item.extra_text ? <div>{item.extra_text}</div> : null}
              {item.code && (
                <pre className="script_code">
                  <code>{item.code}</code>
                </pre>
              )}
            </div>
          );
        } else {
          return (
            <Tag
              key={index}
              className={`content-${item.tag_type}`}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          );
        }
      })}
    </div>
  );
};

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

const Document = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  console.log("do we have a fitler???selectedFilter", selectedFilter);

  const searchParams = useSearchParams();
  const current_version = searchParams.get("current_version") || "P2A__V1"; // Default value if not provided

  console.log("what is the current version now? after click", current_version);
  const [current_mode, setModeOfVersion] = useState(null);
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)[0]);
  const [selectedTab, setSelectedTab] = useState(current_version);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to generate the key
    function generateKey(obj) {
      const appTypes = obj.app_types;
      const keys = [];

      // Iterate over each app type
      for (const appType in appTypes) {
        console.log(appType, "hwo to get mode", obj);
        const versionTypes = appTypes[appType].version_types;

        // Iterate over each version type
        for (const version in versionTypes) {
          keys.push(`${appType}__${version}`);
          const mode =
            obj.app_types[appType]?.version_types[version]?.["selected_mode"];
          console.log("modesdfsdafsd", mode);
          if (mode) {
            setModeOfVersion(mode);
          }
        }
      }

      return keys;
    }

    if (selectedFilter) {
      //here we can run side effect
      const keys = generateKey(selectedFilter);

      console.log(keys, "keyscurrent sleelcteoirn", selectedFilter, keys);

      // probably just try to reset the selectedTab
      // first key of app_types &
      if (keys.length == 1) {
        setSelectedTab(keys[0]);
      }
    }
  }, [selectedFilter]);

  useEffect(() => {
    console.log("current_versionsdfsadfsdf", current_version);
    if (current_version == "P2A__V1") {
      setModeOfVersion("HEADFUL");
    }
    
  }, [current_version]);

  const handleKeyClick = (key) => {
    setSelectedKey(key);
    setSelectedTab("P2A__V1"); // reset tab selection to default
  };

  const renderTabs = () => {
    const versions = ["P2A__V1", "P2A__V2", "P2A__V3"]; // Directly define the versions
    return (
      <div className="tabs">
        {versions.map((version) => (
          <button
            key={version}
            onClick={() => setSelectedTab(version)}
            className={`tab-button ${selectedTab === version ? "active" : ""}`}
          >
            {version.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the state on click
  };

  const renderContent = () => {
    if (!selectedKey) return <div>Select a key from the left</div>;

    const steps = Object.keys(payload[selectedKey]);
    return (
      <div className="content-area">
        {steps.map((step) => (
          <div key={step} className="step">
            <h1 className="step-title">{step}</h1>
            {payload[selectedKey][step].map((item, index) => {
              const content = item[selectedTab]
                ? item[selectedTab].content
                : null;
              return content ? (
                <ContentRenderer
                  key={index}
                  content={content}
                  current_mode={current_mode}
                />
              ) : null;
            })}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("do we have nay mode?", current_mode);

  const renderSidebarContent = () =>
    Object.keys(payload).map((key) => (
      <div
        key={key}
        onClick={() => handleKeyClick(key)}
        className="sidebar-item"
      >
        <h2>{key}</h2>
      </div>
    ));

  const renderSidebar = () => {
    if (isMobile) {
      return (
        <div className="sidebar-dropdown">
          <button className={`dropdown-toggle ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>
          <span>{selectedKey || "Select a Key"}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5.5L8 9.5L12 5.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          </button>

          {isDropdownOpen && (
           <div className="dropdown-menu active">
           {renderSidebarContent()}
         </div>
          )}
        </div>
      );
    }
    return <div className="sidebar-wrapper">{renderSidebarContent()}</div>;
  };

  return (
    <div className="document-container">
      {<FilterComp setSelectedFilter={setSelectedFilter} />}
      <div className="doc_core_wrapper">
        <div className="doc_sidebar">
        {renderSidebar()}
          {/* <div className={`sidebar_wrapper ${isDropdownOpen ? "active" : ""}`}>
            {Object.keys(payload).map((key) => (
              <div
                key={key}
                onClick={() => handleKeyClick(key)}
                className="sidebar-item"
              >
                <h2>{key}</h2>
              </div>
            ))}
          </div> */}
          {/* <div className="downIcon" onClick={toggleDropdown}>
            <h3>Overview</h3>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C12.0333 0 9.13319 0.879734 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25975C0.00649932 12.0006 -0.290551 15.0166 0.288227 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3335C29.1203 20.8668 30 17.9667 30 15C29.9953 11.0232 28.4135 7.21061 25.6014 4.39858C22.7894 1.58655 18.9768 0.00469155 15 0ZM22.7823 13.2368L15.9641 20.055C15.7084 20.3106 15.3616 20.4543 15 20.4543C14.6384 20.4543 14.2916 20.3106 14.0359 20.055L7.21773 13.2368C6.96934 12.9796 6.83189 12.6352 6.835 12.2776C6.8381 11.9201 6.98151 11.5781 7.23434 11.3252C7.48717 11.0724 7.82919 10.929 8.18673 10.9259C8.54427 10.9228 8.88873 11.0602 9.14591 11.3086L15 17.1627L20.8541 11.3086C21.1113 11.0602 21.4557 10.9228 21.8133 10.9259C22.1708 10.929 22.5128 11.0724 22.7657 11.3252C23.0185 11.5781 23.1619 11.9201 23.165 12.2776C23.1681 12.6352 23.0307 12.9796 22.7823 13.2368Z"
                fill="black"
              />
            </svg>
          </div> */}
        </div>
        <div className="rightWrap">
          <div className="main-content">
            <div className="mainHeading">
              <h2>
                Instant messaging boosts user engagement, fostering community,
                satisfaction, and loyalty. It also provides real-time support,
                allowing users to get quick help. The Chat SDK enables seamless
                real-time messaging on any app or device.
              </h2>
            </div>
            {renderTabs()}
            {renderContent()}

            <div className="integration_successful">
              <p>
                Congratulations Integration Should be Successfully Done by now!
              </p>
              <p>
                Your users can now sign up and seamlessly chat with the Admin
                Team, enabling two-way communication.
              </p>
              <p>
                Please Contact Our Support Team if you faced any issues. Thank
                You!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DocumentWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Document />
  </Suspense>
);

export default DocumentWithSuspense;
