"use client";

// src/app/components/HowSection.js
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const HowSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [demoVersion, setDemoVersion] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleWatchDemoClick = (version) => {
    setDemoVersion(version);
    setShowDemoPopup(true);
  };

  const closePopup = () => {
    setShowDemoPopup(false);
    setDemoVersion(null);
  };

  return (
    <section className="how-section">
      <div className="how-content">
        {/* Left Side */}
        <div className="left-side">
          <h2>Peer to Admin</h2>
          <ul className="peer-list">
            {["v1", "v2", "v3"].map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="right-side">
          {selectedOption ? (
            <VersionContent
              version={selectedOption}
              onWatchDemo={handleWatchDemoClick}
              onBack={() => setSelectedOption(null)}
            />
          ) : (
            <DefaultContent />
          )}
        </div>

        {/* Popup Overlay */}
        {showDemoPopup && (
          <div className="overlay">
            <div className="popup">
              {/* <div
                className="close-btn"
                onClick={closePopup}
                style={{ cursor: "pointer", textAlign: "right" }}
              >
                <i className="bi bi-x" style={{ fontSize: "24px" }}></i>
              </div> */}

              {/* <img src="Asset/logo.jpg" alt="addChat" /> */}

              <div className="image-wrappe">
                <ImageSlider
                  images={[
                    "/Asset/demo_imgs/v1/p2a/after.jpeg",
                    "/Asset/demo_imgs/v1/p2a/before.jpeg",
                  ]}
                  onClose={closePopup}
                />
              </div>

              {/* <h3>{`Watch Demo for ${demoVersion}`}</h3>
              <p>{`This is the demo content for ${demoVersion}.`}</p> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const VersionContent = ({ version, onWatchDemo, onBack }) => (
  <div className="chat-type-wrapper" style={{ display: "block" }}>
    <div className="back-btn">
      <button onClick={onBack}>
        <i className="bi bi-x"></i>
      </button>
    </div>
    <div className="world-chat">
      <section className="v1_wrapper">
        <h4>{`[${version}]  - Authentication + Chat`}</h4>
        <ContentRows version={version} onWatchDemo={onWatchDemo} />
      </section>
    </div>
  </div>
);

const ContentRows = ({ version, onWatchDemo }) => (
  <>
    <div className="row">
      {["Benefits", "Provides"].map((title, index) => (
        <ContentCard key={index} title={title} version={version} />
      ))}
    </div>
    <WatchDemoButton onWatchDemo={onWatchDemo} version={version} />{" "}
    {/* Move the button here */}
    <div className="row">
      {["Steps", "Examples"].map((title, index) => (
        <ContentCard key={index} title={title} version={version} />
      ))}
    </div>
  </>
);

const ContentCard = ({ title, version }) => {
  const contentData = {
    v1: {
      Benefits: [
        "v1 Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
      ],
      Provides: [
        "v1 Provides high performance and reliability",
        "Integrates seamlessly with existing systems",
        "User-friendly interface for easy navigation",
      ],
      Steps: [
        "v1 Step 1: Integrate the API",
        "Step 2: Configure settings",
        "Step 3: Launch and monitor",
      ],
      Examples: [
        "v1 Example 1: Real-time messaging",
        "Example 2: Group chats with multiple users",
        "Example 3: Custom emoji support",
      ],
    },
    v2: {
      Benefits: [
        "v2 Lorem Ipsum is advanced text of the printing",
        "Enhanced features for better engagement",
        "Scalable for large user bases",
      ],
      Provides: [
        "v2 Provides analytics and reporting tools",
        "Advanced security protocols in place",
        "Customizable user permissions",
      ],
      Steps: [
        "v2 Step 1: Set up your account",
        "Step 2: Customize your chat experience",
        "Step 3: Utilize the reporting features",
      ],
      Examples: [
        "v2 Example 1: Integrated video calls",
        "Example 2: Multi-channel support",
        "Example 3: AI-driven responses",
      ],
    },
    v3: {
      Benefits: [
        "v3 Lorem Ipsum is the most cutting-edge text of the printing",
        "Provides tools for extensive customization",
        "Offers proactive customer support",
      ],
      Provides: [
        "v3 Provides AI-driven insights for better engagement",
        "Integration with third-party applications",
        "Advanced user segmentation capabilities",
      ],
      Steps: [
        "v3 Step 1: Deploy the chat widget",
        "Step 2: Engage users with personalized messages",
        "Step 3: Review analytics and optimize strategies",
      ],
      Examples: [
        "v3 Example 1: Smart replies based on user behavior",
        "Example 2: Contextual help features",
        "Example 3: Integration with CRM tools",
      ],
    },
  };

  const content = contentData[version][title];

  return (
    <div className="v1_content_card">
      <h5>{title}</h5>
      <ul>
        {content.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
        {/* <img className="icon" src="Asset/arrow.png" alt="icon" /> */}
      </ul>
      <div className="icon-wrapper">
        <img className="icon" src="Asset/arrow.png" alt="icon" />
      </div>
    </div>
  );
};

// Watch Demo Button Component
const WatchDemoButton = ({ onWatchDemo, version }) => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <button className="read_more_btn" onClick={() => onWatchDemo(version)}>
      Watch Demo
    </button>
  </div>
);

const DefaultContent = () => (
  <div className="chat-type-wrapper">
    <div className="back-btn">
      <button>
        <i className="bi bi-x"></i>
      </button>
    </div>
  
    <div className="world-chat">
  <Section
    title="Why Choose Us?"
    items={[
      "Start quickly to outpace competitors.",
      "Free tier for small businesses.",
      "Flexible and affordable pricing plans.",
      "Effortless integration with various platforms.",
      "Reliable with SLA-backed service.",
      "Customizable chat types to meet diverse needs.",
    ]}
  />
  <Section
    title="Effortless Integration"
    items={[
      "Simple setup process.",
      "24/7 live support.",
      "Comprehensive documentation.",
    ]}
  />
  <Section
    title="Getting Started"
    items={[
      "Create a tenant account.",
      "Log in to your account.",
      "Set up an app.",
      "Select the ideal chat type for your app.",
      "Follow step-by-step integration guides.",
    ]}
  />
  <Section
    title="Fully Managed Solutions"
    items={[
      "High availability.",
      "Scalable infrastructure.",
      "Cloud-native, no maintenance required.",
    ]}
  />
  <img src="Asset/globe.png" alt="World Chat" className="center-image" />
</div>

  </div>
);

const Section = ({ title, items }) => (
  <div className="chat-type-content">
    <h5>{title}</h5>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default HowSection;
