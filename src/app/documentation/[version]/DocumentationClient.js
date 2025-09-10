"use client";

import { useState, useEffect } from "react";
import TopFilterComp from "../../components/documents/TopFilterComp";
import ContentRenderer from "@/app/testing_documents/rendering_tools";
import payload, { versionSlugMap } from "../payload";
import Sidebar from "../../components/documents/side_bar_content/Sidebar";
import styles from "../docPageSty.module.css";

export default function DocumentationClient({ version }) {
  const mappedVersion =
    Object.keys(versionSlugMap).find(
      (key) => versionSlugMap[key] === version
    ) || "V1";

  const [selectedVersionType, setSelectedVersionType] = useState(mappedVersion);
  const [selectedFilter, setSelectedFilter] = useState({
    app_type: null,
    version_type: mappedVersion,
  });
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSelectedVersionType(mappedVersion);
    setSelectedFilter({
      app_type: null,
      version_type: mappedVersion,
    });
  }, [mappedVersion]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectVersionType = (key) => {
    if (key === selectedVersionType) return;
    setSelectedVersionType(key);
    setSelectedFilter({
      app_type: null,
      version_type: key,
    });
  };

  const handleKeyClick = (key) => {
    setSelectedKey(key);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const content = payload[selectedVersionType];

  return (
    <div
      className={styles["documentation-page"]}
    >
      <div className={styles.doc_core_wrapper}>
        {!isMobile && (
          <div className={styles.doc_sidebar}>
            <Sidebar
              isMobile={isMobile}
              selectedKey={selectedKey}
              isDropdownOpen={isDropdownOpen}
              toggleDropdown={toggleDropdown}
              payload={payload}
              selectedFilter={selectedFilter}
            />
          </div>
        )}

        <div className={styles.rightWrap}>
          <div className={styles["main-content"]}>
             <TopFilterComp
              initialVersionType={selectedVersionType}
              setSelectedFilter={({ version_type }) =>
                handleSelectVersionType(version_type)
              }
            />
            {isMobile && (
              <div
                className={
                  styles.mobileSidebarWrapper
                }
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

            {/* Main content */}
            {content ? (
              <>
                <div className={styles["content-area"]}>
                  <ContentRenderer content={content} />
                </div>
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
                Kinldy select the right filters for you from top.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
