"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./test.css";
import styles from "./docPageSty.module.css";
import { useSearchParams } from "next/navigation";
import payload from "./payload/index.js";
import TopFilterComp from "../components/documents/TopFilterComp";
import Sidebar from "../components/documents/side_bar_content/Sidebar";
import ContentRenderer from "../components/documents/side_bar_content/rendering_tools";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Document = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    app_type: null,
    version_type: "V2",
  });

  const searchParams = useSearchParams();
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)["V2"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleKeyClick = (key) => {
    setSelectedKey(key);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const renderContent = () => {
    if (!selectedFilter || !selectedFilter.version_type)
      return <div>Select a key from the left</div>;

    const content = payload[selectedFilter.version_type];
    return (
      <div className={styles["content-area"]}>
        <ContentRenderer key={4444} content={content} />
      </div>
    );
  };

  return (
    <div className={styles["document-container"]}>
      <div className={styles.doc_core_wrapper}>
        {!isMobile && (
          <div
            className={`${styles.doc_sidebar} ${
              isSidebarOpen ? styles.sidebar_open : styles.sidebar_closed
            }`}
          >
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

        <div
          className={`${styles.rightWrap} ${
            !isSidebarOpen ? styles.rightWrap_full : ""
          }`}
        >
          {!isMobile && (
            <button
              className={styles.sidebar_toggle_btn}
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
              title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? <IoMdArrowRoundBack size={18}/> : <IoMdArrowRoundForward size={18}/>}
            </button>
          )}

          <div
            className={`${styles["main-content"]} ${
              isSidebarOpen ? "" : styles["main-content-full"]
            }`}
          >
            {/* <TopFilterComp setSelectedFilter={setSelectedFilter} /> */}

            {isMobile && (
              <div>
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
                    Congratulations! Your integration should now be successful!
                  </p>
                  <p>
                    Your users can now sign up and seamlessly chat with the
                    Admin Team, enabling two-way communication.
                  </p>
                  <p>
                    Please contact our Support Team if you encounter any issues.
                    Thank you!
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.noFilterMessage}>
                Kindly select the right filters for you from top.
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
