"use client";

import React, { useState, useEffect, Suspense } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css"; // Import the CSS file
import { useSearchParams } from "next/navigation";
import payload from "./payload";
import YouTubeEmbed from "../components/YouTubeVideo";

import TopFilterComp from "../components/documents/TopFilterComp";
import Sidebar from "../components/documents/side_bar_content/Sidebar";


const CondRadioRender = ({ r_options }) => {
  const [selectedOption, setSelectedOption] = useState(r_options[0]?.text);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSelectedOption(r_options[0]?.text);
  }, [r_options]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOptionChange = (optionText) => setSelectedOption(optionText);

  const selectedDescription = r_options.find(
    (option) => option.text === selectedOption
  )?.description;

  return (
    <div className="setup">
      {isMobile ? (
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
        <ContentRenderer content={selectedDescription} />
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

const ContentRenderer = ({ content }) => {
  return (
    <div className="contents">
      {content?.map((item, index) => {
        const Tag = supportedTags.includes(item.tag_type)
          ? item.tag_type
          : "div";

        switch (item.tag_type) {
          case "img":
            return (
              <div className="content-list-img" key={index}>
                <img src={item.src} alt={item.alt || ""} />
              </div>
            );
            
          case "video":
            return (
              <div key={index}>
                <div className="videos_wrapper">
                  <YouTubeEmbed src={item.src} desc={item.desc} />
                </div>
              </div>
            );

          case "feature_options":
            return <CondRadioRender key={index} r_options={item.options} />;

          case "h2":
            return (
              <h2 key={index} className="content-heading">
                {item.text}
              </h2>
            );

          case "h4":
            return (
              <h4 key={index} className="content-inner-heading">
                {item.text}
              </h4>
            );

          case "h3":
            return (
              <h3 key={index} className="second_subheading">
                {item.text}
              </h3>
            );

          case "p":
            return (
              <p key={index} className="content-paragraph">
                {item.text}
              </p>
            );

          case "a":
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

          case "ul":
          case "ol":
            return <List key={index} items={item.items} listType={item.tag_type} />;

          case "blockquote":
            return (
              <blockquote key={index} className="content-blockquote">
                {item.text}
              </blockquote>
            );

          case "code":
            return (
              <pre key={index} className="content-code">
                <code>{item.text}</code>
              </pre>
            );

          case "div":
            return (
              <div key={index} className="content-div">
                {item.children?.map((child, i) => (
                  <ContentRenderer
                    key={`${index}-${i}`}
                    content={[child]}
                  />
                ))}
                {item.extra_text && <div>{item.extra_text}</div>}
                {item.code && (
                  <pre className="script_code">
                    <code>{item.code}</code>
                  </pre>
                )}
              </div>
            );

          default:
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

const Document = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  console.log("do we have a fitler???selectedFilter", selectedFilter);

  const searchParams = useSearchParams();
  const current_version = searchParams.get("current_version") || "P2A__V1"; // Default value if not provided

  console.log("what is the current version now? after click", current_version);
  const [current_mode, setModeOfVersion] = useState(null);
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)[0]);


  console.log(selectedKey,"why selected key is not 'P2A'")
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
    console.log("WRWERWEQRWE",key)
    setSelectedKey(key);
    // setSelectedTab("P2A__V1"); // reset tab selection to default
  };



  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the state on click
  };

  const renderContent = () => {
    if (!selectedFilter || !selectedFilter.app_type) return <div>Select a key from the left</div>;

    // const steps = Object.keys(payload[selectedKey]);
    const content = payload[selectedFilter.app_type][selectedFilter.version_type]
    console.log(selectedFilter,"DScontentSDFASDSDFFSAD",content)

    return (
      <div className="content-area">
        <ContentRenderer
                  key={4444}
                  content={content}
                  // current_mode={"HEADERLESS"}
                />

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

  // console.log("do we have nay mode?", current_mode);



    
  return (
    <div className="document-container">
      {<TopFilterComp setSelectedFilter={setSelectedFilter}/>}
      <div className="doc_core_wrapper">
        <div className="doc_sidebar">
          {/* {renderSidebar()} */}

          <Sidebar
            isMobile={isMobile} // Pass state/values
            selectedKey={selectedKey}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            payload={payload}
            handleKeyClick={handleKeyClick}
            selectedFilter={selectedFilter}
          />


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
            {/* {renderTabs()} */}
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
