"use client";

// src/app/components/HowSection.js
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import Tabs from "./Tabs";
import Slider from "./Slider";
import styles from "./HowSectionSty.module.css";
import { FaHandPointRight } from "react-icons/fa";
import { useRouter } from "next/navigation";


const slides = {
  p2a: [
    {
      image: "/Asset/fashoni_chat_opener_visible.png",
      sections: [
        {
          heading: "What is Peer to Admin (P2A)",
          paragraph:
            "P2A chat is designed for scenarios where users need to interact directly with the application or site administrators. It combines automated support with human assistance, helping users resolve issues, ask questions, or request services.",
          list: [
            "Lets users ask questions and receive instant answers from an AI-powered bot (offline mode).",
            "Enables real-time conversations with live admins for support, sales, or onboarding.",
            "Ideal for service-based platforms, e-commerce sites, and customer support systems.",
            "Useful in internal tools where employees need direct access to admin or support staff.",
            "Seamlessly switches between bot and human support as needed — no complex setup required.",
          ],
        },
      ],
    },
    {
      image: "/Asset/no_users_admin.png",
      sections: [
        {
          heading: "Features",
          paragraph: "Detailed overview for P2A.",
        },
      ],
    },
  ],

  p2p: [
    {
      image: "/images/p2p-slide1.jpg",
      sections: [
        {
          heading: "What is Peer to Peer (P2P)",
          paragraph:
            "P2P chat is used when a product requires users to communicate directly with other users on the platform — without admin involvement. It's ideal for platforms focused on community, collaboration, or direct messaging between users.",
          list: [
            "Enables user-to-user interaction through private or group chat.",
            "Supports use cases like social media platforms, online marketplaces, or forums.",
            "Common in gaming platforms for team communication or matchmaking.",
            "Perfect for collaboration tools where users need to coordinate in real time.",
            "Provides built-in chat without having to build a full messaging backend from scratch.",
          ],
        },
      ],
    },
    {
      image: "/images/p2p-slide2.jpg",
      sections: [
        {
          heading: "End-to-End Encryption",
          paragraph: "Security features in P2P chat.",
        },
      ],
    },
  ],
};

const tabData = [
  { label: "P2A", content: <Slider slides={slides.p2a} /> },
  { label: "P2P", content: <Slider slides={slides.p2p} /> },
];

const HowSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [demoVersion, setDemoVersion] = useState(null);
  const [showTabs, setShowTabs] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowTabs(false);
  };

  const handleWatchDemoClick = (version) => {
    setDemoVersion(version);
    setShowDemoPopup(true);
  };

  const closePopup = () => {
    setShowDemoPopup(false);
    setDemoVersion(null);
  };

  useEffect(() => {
    if (showDemoPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDemoPopup]);

  return (
    <section className={styles["how-section"]}>
      <div className={styles["how-content"]}>
        {/* Left Side */}
        <div className={styles["left-side"]}>
          <h2>Services Summary</h2>
          <ul className={styles["peer-list"]}>
            {[
              "cloud managed auth",
              "locally managed auth",
              "plugin driven",
            ].map((option) => (
              <li key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>

          <ul className={styles["peer-list"]} style={{ marginTop: "10px" }}>
            <li onClick={() => setShowTabs(true)}>P2A vs P2P</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className={styles["right-side"]}>
          {showTabs ? (
            <Tabs tabs={tabData} />
          ) : selectedOption ? (
            <VersionContent
              version={selectedOption}
              onWatchDemo={handleWatchDemoClick}
              onBack={() => {
                setSelectedOption(null);
                setShowTabs(false);
              }}
            />
          ) : (
            <DefaultContent />
          )}
        </div>

        {/* Popup Overlay */}
        {showDemoPopup && (
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <div className={styles["image-wrappe"]}>
                <ImageSlider
                  images={[
                    "/Asset/demo_imgs/v1/p2a/before.png",
                    "/Asset/demo_imgs/v1/p2a/after.png",
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

const VersionContent = ({ version, onWatchDemo, onBack }) => {
  console.log("verwer", version);

  return (
    <div className={styles["chat-type-wrapper"]} style={{ display: "block" }}>
      <div className={styles["back-btn"]}>
        <button onClick={onBack}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      <div className={styles["world-chat"]}>
        <section className={styles.v1_wrapper}>
          {version == "cloud managed auth" ? (
            <h4>{`[${version}]  - Chat (Simple Apps/Sites) with Cloud Managed Authentication `}</h4>
          ) : version == "locally managed auth" ? (
            <h4>{`[${version}]  - Chat (Complex Apps/Sites) with Locally Managed Authentication`}</h4>
          ) : (
            <h4>{`[${version}]  - Chat (CMS based Sites) with Plugin Driven Authentication `}</h4>
          )}
          <ContentRows version={version} onWatchDemo={onWatchDemo} />
        </section>
      </div>
    </div>
  );
};

const ContentRows = ({ version, onWatchDemo }) => (
  <div>
    <div className={styles.row}>
      {["for Whom", "Provides"].map((title, index) => (
        <ContentCard key={index} title={title} version={version} />
      ))}
    </div>
    <WatchDemoButton onWatchDemo={onWatchDemo} version={version} />{" "}
    {/* Move the button here */}
    <div className={styles.row}>
      {["How Does it work", "Example Usage"].map((title, index) => (
        <ContentCard key={index} title={title} version={version} />
      ))}
    </div>
  </div>
);

const ContentCard = ({ title, version }) => {
  const router = useRouter();
  const contentData = {
    "cloud managed auth": {
      "for Whom": [
        "Products that need both authentication and chat out of the box.",
        "Apps that haven't implemented authentication yet.",
        "Websites aiming to convert visitors into active, authenticated users.",
        "Ideal for live or AI-powered chat paired with Magicchat’s authentication services.",
      ],
      Provides: [
        "Adds user login, signup, and authentication UI to your app or website.",
        "Embeds a customizable chatbox into any interface—web or mobile.",
        "Shows user activity and insights through intuitive dashboards.",
        "Includes an admin panel to manage chats, users, and app settings.",
      ],
      "How Does it work": [
        "Visitors will see authentication options embedded in your app or website.",
        "If logged in, users can access the chatbox with AIbot and preset Q&A in a structured format taken while creating the app.",
        "Upon signup and login, users unlock live chat to connect with a real admin.",
        "Admins can respond in real-time, offer support, and resolve user queries.",
        "Users and admins can exchange messages even when one is offline.",
      ],
      "Example Usage": [
        "Ideal for small product-based businesses—connect sellers and buyers instantly through chat.",
        "Great for service providers, support-driven businesses, and small-scale chat call centers.",
        "Boosts lead generation by engaging visitors on high-traffic web pages through smart authentication and chat.",
        "Useful for advisory blogs, educational platforms, or landing pages needing instant engagement or user onboarding.",
        "Fits well into MVPs or new apps that lack built-in auth and chat but need both to onboard and support users fast.",
      ],
    },
    "locally managed auth": {
      "for Whom": [
        "Products that already have built-in authentication and only need chat services.",
        "Apps with existing authentication systems in place.",
        "Platforms looking for a ready-made chat solution tailored to their needs.",
        "Ideal for adding real-time or AI-powered chat without rebuilding existing auth flows.",
      ],
      Provides: [
        "Embeds a customizable chatbox into any interface—web or mobile.",
        "Shows user activity and insights through intuitive dashboards.",
        "Includes an admin panel to manage chats, users, and app settings.",
      ],
      "How Does it work": [
        "Pass a unique user ID to Magicchat’s onboarding API — this maps users between your system and ours.",
        "Ensure you're already storing this ID on your end; the rest works automatically behind the scenes.",
        "Need to onboard existing users? Use the bulk onboarding API to migrate them easily.",
      ],
      "Example Usage": [
        "Ideal for client-server or monolithic architectures with built-in (or planned) authentication.",
        "Great for service providers, support-focused businesses, and mid to large-scale chat call centers.",
        "Perfect for modern architectures — works seamlessly with any authentication system (authentication-agnostic).",
      ],
    },
    "plugin driven": {
      "for Whom": [
        "CMS platforms like WordPress that already have built-in authentication and only need chat functionality.",
        "Systems using tightly coupled auth plugins that can't notify when a new user signs up.",
        "While many third-party auth plugins exist, we focus on compatibility with those using native platform authentication — for example, WordPress's default login system.",
        "Perfect for adding real-time or AI-powered chat without modifying existing authentication flows.",
      ],
      Provides: [
        "Embeds a customizable chatbox into any interface—web or mobile.",
        "Shows user activity and insights through intuitive dashboards.",
        "Includes an admin panel to manage chats, users, and app settings.",
      ],
      "How Does it work": [
        "Since some platforms (like WordPress, Magento, or Joomla) don't expose user signup events, we onboard users to Magicchat during their first login.",
        "This ensures seamless real-time registration without needing changes to your existing auth plugins.",
        "Setup is fully automatic — just install the AddChat plugin, activate it, and enter your chat app credentials.",
        "If your framework isn’t supported yet (e.g., Laravel, Drupal, Shopify, Wix), don’t worry — you can request integration directly from us.",
      ],
      "Example Usage": [
        "Ideal for CMS-based products with tightly coupled, plugin-driven authentication systems.",
        "Great for service providers, support-focused businesses, and mid to large-scale chat call centers.",
        "Perfect for modern architectures — works seamlessly with any authentication system (auth-agnostic).",
      ],
    },
  };

  const content = contentData[version][title];

  const handleIconClick = () => {
    if (version === "cloud managed auth") {
      router.push("/cloudManaged"); // Navigate to the desired page
    }
  };

  return (
    <div className={styles.v1_content_card}>
      <h5>{title}</h5>
      <ul className={styles["grid-list"]}>
        {content.map((text, index) => (
          <li key={index}>
            <FaHandPointRight className={styles["list-icon"]} />
            {text}
          </li>
        ))}
        {/* <img className="icon" src="Asset/arrow.png" alt="icon" /> */}
      </ul>
      <div className={styles["icon-wrapper"]} onClick={handleIconClick}>
        <img className={styles.icon} src="Asset/arrow.png" alt="icon" />
      </div>
    </div>
  );
};

// Watch Demo Button Component
const WatchDemoButton = ({ onWatchDemo, version }) => (
  <div style={{ textAlign: "center", margin: "20px 0" }}>
    <button
      className={styles.read_more_btn}
      onClick={() => onWatchDemo(version)}
    >
      Watch Demo
    </button>
  </div>
);

const DefaultContent = () => (
  <div className={styles["chat-type-wrapper"]}>
    <div className={styles["back-btn"]}>
      <button>
        <i className="bi bi-x"></i>
      </button>
    </div>

    <div className={styles["world-chat"]}>
      <Section
        title="Why Choose Us?"
        items={[
          "Free tier for small businesses, development, and sandbox use.",
          "Drag-and-drop customization tailored to your needs.",
          "Built-in auth with support for JWT, sessions, and more.",
          "Peer-to-peer & peer-to-admin chat—flexible for your platform.",
          "Supports AI-powered offline and live chat.",
        ]}
      />
      <Section
        title="Effortless Integration"
        items={[
          "Plug-and-play with minimal or no coding knowledge.",
          "Quick setup if your infrastructure is known.",
          "Effortless integration across platforms.",
          "Comprehensive step-by-step documentation.",
          "24/7 live support when you need help.",
        ]}
      />
      <Section
        title="Getting Started"
        items={[
          "Create your tenant account and log in.",
          "Set up your first app in minutes.",
          "Choose your authentication method.",
          "Pick the ideal chat type for your app.",
          "Use credentials to follow our integration guides.",
        ]}
      />
      <Section
        title="Value for Money"
        items={[
          "Free forever for dev, testing, or light production use.",
          "All features available under the free plan.",
          "No hidden fees or paywalls during setup.",
          "Only pay when you scale and gain traction.",
          "Transparent, affordable pricing for all.",
        ]}
      />
      <img
        src="Asset/globe.png"
        alt="World Chat"
        className={styles["center-image"]}
      />
    </div>
  </div>
);

const Section = ({ title, items }) => (
  <div className={styles["chat-type-content"]}>
    <h5>{title}</h5>
    <ul className={styles["grid-list"]}>
      {items.map((item, index) => (
        <li key={index}>
          <FaHandPointRight className={styles["list-icon"]} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default HowSection;
