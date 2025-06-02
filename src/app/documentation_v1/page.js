"use client";

import React, { useState, useEffect, Suspense } from "react";
// import video from "../../../Asset/demo_imgs/before.jpeg"
import "./test.css"; // Import the CSS file
import { useSearchParams } from "next/navigation";
import payload from "./payload";
import YouTubeEmbed from "../components/YouTubeVideo";

import TopFilterComp from "../components/documents/TopFilterComp";
import Sidebar from "../components/documents/side_bar_content/Sidebar";
import ContentRenderer from "../testing_documents/rendering_tools";


const Document = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  console.log("do we have a fitler???selectedFilter", selectedFilter);

  const searchParams = useSearchParams();
  // const current_version = searchParams.get("current_version") || "P2A__V1"; // Default value if not provided

  // console.log("what is the current version now? after click", current_version);
  const [current_mode, setModeOfVersion] = useState(null);
  const [selectedKey, setSelectedKey] = useState(Object.keys(payload)["V1"]);


  console.log(selectedKey,"why selected key is not 'P2A'")
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
    console.log("WRWERWEQRWE",key)
    setSelectedKey(key);
    // setSelectedTab("P2A__V1"); // reset tab selection to default
  };



  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState); // Toggle the state on click
  };

  const renderContent = () => {
    console.log("selesdtsdfilter",selectedFilter)
    if (!selectedFilter || !selectedFilter.version_type) return <div>Select a key from the left</div>;

    // const steps = Object.keys(payload[selectedKey]);
    const content = payload[selectedFilter.version_type]
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
        {selectedFilter ? <div className="rightWrap">
          <div className="main-content">
            {/* <div className="mainHeading">
              <h2>
                Instant messaging boosts user engagement, fostering community,
                satisfaction, and loyalty. It also provides real-time support,
                allowing users to get quick help. The Chat SDK enables seamless
                real-time messaging on any app or device.
              </h2>
            </div> */}
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
        </div>:<div>Kinldy select the right filters for you from top.</div>}
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
