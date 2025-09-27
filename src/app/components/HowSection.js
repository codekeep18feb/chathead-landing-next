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
      image: "/Asset/p2a_firstImg.png",
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
      image: "/Asset/p2a_secondImg.png",
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
      image: "/Asset/p2p_firstImg.png",
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
      image: "/Asset/defultpage_p2p.png",
      sections: [
        {
          heading: "End-to-End Encryption",
          paragraph: "Security features in P2P chat.",
        },
      ],
    },
    {
      image: "/Asset/p2p_secondImg.png",
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

const demoImages = {
  "Instant Auth + Chat": [
    "/Asset/beforeChatAdd.png",
    "/Asset/afterChatAdd.png",
    "/Asset/afterModalOpen.png",
  ],
  "BYO Auth Chat": [
    "/Asset/beforeChatAdd.png",
    "/Asset/afterChatAdd.png",
    "/Asset/afterModalOpen.png",
  ],
  "No Auth Only Chat": [
    "/Asset/beforeChatAdd.png",
    "/Asset/afterChatAdd.png",
    "/Asset/afterModalOpen.png",
  ],
  "CMS-Ready Chat": [
    "/Asset/beforeChatAdd.png",
    "/Asset/afterChatAdd.png",
    "/Asset/afterModalOpen.png",
  ],
};

const HowSection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [demoVersion, setDemoVersion] = useState(null);
  const [showTabs, setShowTabs] = useState(false);

  console.log("Selected option:", selectedOption);
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
              "Instant Auth + Chat",
              "BYO Auth Chat",
              "CMS-Ready Chat",
              "No Auth Only Chat",
            ].map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                style={{
                  backgroundColor: selectedOption === option ? "#4d6bdf" : "",
                  color: selectedOption === option ? "white" : "",
                }}
              >
                {option}
              </li>
            ))}
          </ul>

          <ul className={styles["peer-list"]} style={{ marginTop: "10px" }}>
            <li
              onClick={() => {
                setShowTabs(true);
                setSelectedOption(null);
              }}
              style={{
                backgroundColor: showTabs ? "#4d6bdf" : "",
                color: showTabs ? "white" : "",
              }}
            >
              P2A vs P2P
            </li>
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
              <button className={styles["close-btn"]} onClick={closePopup}>
                &times;
              </button>
              <div className={styles["image-wrappe"]}>
                <ImageSlider
                  images={demoImages[demoVersion] || []}
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
          {version == "Instant Auth + Chat" ? (
            <h4>{`[${version}]  - “Turn Visitors into Logged-In, Engaged Users.” `}</h4>
          ) : version == "BYO Auth Chat" ? (
            <h4>{`[${version}]  - “Already Have Login? Just Add Chat.”`}</h4>
          ) : version == "CMS-Ready Chat" ? (
            <h4>{`[${version}]  - “Drop-In Chat for Your CMS.”`}</h4>
          ) : (
            <h4>{`[${version}]  - “No Auth.” `}</h4>
          )}
          <ContentRows version={version} onWatchDemo={onWatchDemo} />
        </section>
        {/* CMS-Ready Chat */}
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

  // const routePrefix = {
  //   "Instant Auth + Chat": "instant-auth-chat",
  //   "BYO Auth Chat": "byo",
  //   "CMS-Ready Chat": "cms-ready-chat",
  // };

  // const slugMap = {
  //   "for Whom": "to-whom",
  //   Provides: "provides",
  //   "How Does it work": "how-it-works",
  //   "Example Usage": "example-usage",
  // };

  const handleIconClick = () => {
    // const sectionSlug = slugMap[title];
    // const baseRoute = routePrefix[version];
    // router.push(`/${baseRoute}/${sectionSlug}`);

    const sectionSlug = slugMap[title];
    const baseRoute = routePrefix[version];
    router.push(`/${baseRoute}/${sectionSlug}`);
  };

  const routePrefix = {
    "Instant Auth + Chat": "instant-auth-chat",
    "BYO Auth Chat": "byo",
    "CMS-Ready Chat": "cms-ready-chat",
    "No Auth Only Chat": "no-auth-only-chat",
  };

  const slugMap = {
    "for Whom": "to-whom",
    Provides: "provides",
    "How Does it work": "how-it-works",
    "Example Usage": "example-usage",
  };

  const contentData = {
    "Instant Auth + Chat": {
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
    "BYO Auth Chat": {
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
    "No Auth Only Chat": {
      "for Whom": [
        "Products or websites that don’t require user login or signup.",
        "Apps that prioritize instant engagement over user identification.",
        "Landing pages, blogs, or tools that want chat without managing user accounts.",
        "Ideal for anonymous, frictionless conversations with AI or human agents.",
      ],
      Provides: [
        "Embeds a customizable chatbox into any interface—web or mobile.",
        "Enables users to start chatting instantly—no login, no signup required.",
        "Supports AI-driven chat or connects to live admins without collecting user info.",
        "Includes an admin panel to monitor and manage conversations in real-time.",
      ],
      "How Does it work": [
        "Simply embed the Magicchat script into your app or website.",
        "Visitors can immediately interact with the AI bot or leave messages.",
        "Admins can reply in real-time or catch up later via the admin dashboard.",
        "No authentication flow is involved—users remain anonymous by default.",
      ],
      "Example Usage": [
        "Perfect for marketing or campaign pages that need instant visitor interaction.",
        "Great for personal portfolios, CV websites, or info kiosks wanting AI chat support.",
        "Useful for idea validation pages and MVPs where user login isn’t necessary.",
        "Ideal for creators, indie hackers, or solopreneurs needing plug-and-play chat.",
        "Fits educational or advisory blogs offering guided AI help without friction.",
      ],
    },
    "CMS-Ready Chat": {
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
        "Ideal for CMS-based products with tightly coupled, cms-ready-chat authentication systems.",
        "Great for service providers, support-focused businesses, and mid to large-scale chat call centers.",
        "Perfect for modern architectures — works seamlessly with any authentication system (auth-agnostic).",
      ],
    },
  };

  const content = contentData[version][title];

  // const handleIconClick = () => {
  //   if (version === "Instant Auth + Chat") {
  //     router.push("/cloudManaged");
  //   }
  // };

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
