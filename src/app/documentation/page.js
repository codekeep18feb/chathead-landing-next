"use client";

import React, { useState, useEffect, Suspense } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css";
import styles from "./docPageSty.module.css";
import { useSearchParams } from "next/navigation";
import payload from "./payload";
import YouTubeEmbed from "../components/YouTubeVideo";

import TopFilterComp from "../components/documents/TopFilterComp";
import Sidebar from "../components/documents/side_bar_content/Sidebar";
import ContentRenderer from "../testing_documents/rendering_tools";
import { GrFormNext } from "react-icons/gr";

const Document = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    app_type: null,
    version_type: "V1",
  });
  console.log("do we have a fitler???selectedFilter", selectedFilter);

  const searchParams = useSearchParams();
  // const current_version = searchParams.get("current_version") || "P2A__V1"; // Default value if not provided

  // console.log("what is the current version now? after click", current_version);
  const [current_mode, setModeOfVersion] = useState(null);
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)["V1"]);

  console.log(selectedKey, "why selected key is not 'P2A'");
  // const [selectedTab, setSelectedTab] = useState(current_version);
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

  const handleKeyClick = (key) => {
    console.log("WRWERWEQRWE", key);
    setSelectedKey(key);
    // setSelectedTab("P2A__V1"); // reset tab selection to default
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the state on click
  };

  const renderContent = () => {
    console.log("selesdtsdfilter", selectedFilter);
    if (!selectedFilter || !selectedFilter.version_type)
      return <div>Select a key from the left</div>;

    // const steps = Object.keys(payload[selectedKey]);
    const content = payload[selectedFilter.version_type];
    console.log(selectedFilter, "DScontentSDFASDSDFFSAD", content);

    return (
      <div className={styles["content-area"]}>
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };

    handleResize(); // initialize on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["document-container"]}>
      <div className={styles.doc_core_wrapper}>
        {!isMobile && (
          <div className={styles.doc_sidebar}>
            <Sidebar
              isMobile={isMobile}
              selectedKey={selectedKey}
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
              payload={payload}
              handleKeyClick={handleKeyClick}
              selectedFilter={selectedFilter}
            />
          </div>
        )}

        <div className={styles.rightWrap}>
          <div className={styles["main-content"]}>
            <TopFilterComp setSelectedFilter={setSelectedFilter} />

            {isMobile && (
              <div className={styles.mobileSidebarWrapper}>
                <Sidebar
                  isMobile={isMobile}
                  selectedKey={selectedKey}
                  isDropdownOpen={isDropdownOpen}
                  toggleDropdown={toggleDropdown}
                  payload={payload}
                  handleKeyClick={handleKeyClick}
                  selectedFilter={selectedFilter}
                />
              </div>
            )}

            {selectedFilter ? (
              <>
                {renderContent()}
                <div className={styles.integration_successful}>
                  <p>
                    Congratulations Integration Should be Successfully Done by
                    now!
                  </p>
                  <p>
                    Your users can now sign up and seamlessly chat with the
                    Admin Team, enabling two-way communication.
                  </p>
                  <p>
                    Please Contact Our Support Team if you faced any issues.
                    Thank You!
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.noFilterMessage}>
                Kinldy select the right filters for you from top.
              </div>
            )}
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
