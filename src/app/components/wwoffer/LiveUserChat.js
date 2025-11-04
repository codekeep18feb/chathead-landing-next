import React from "react";
import styles from "./LiveUserChat.module.css";
import {
  FaUsersCog,
  FaExchangeAlt,
  FaInbox,
  FaUserShield,
  FaHistory,
  FaFileUpload,
  FaPencilRuler,
  FaToggleOn,
  FaLayerGroup,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const LiveUserChat = () => {
  const features = [
    {
      icon: <FaUsersCog />,
      title: "Multi-Agent Collaboration",
      description:
        "Invite and collaborate with multiple support agents in real time for shared customer handling.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Smart Routing",
      description:
        "Automatically routes incoming messages to available or most suitable agents.",
    },
    {
      icon: <FaInbox />,
      title: "Unified Team Inbox",
      description:
        "All user chats appear in a centralized inbox, accessible by authorized agents.",
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Access (RBAC)",
      description:
        "Control permissions and access with role-based security layers for your team.",
    },
    {
      icon: <FaHistory />,
      title: "Searchable Chat History",
      description:
        "Smart searchable conversation logs for instant context recovery.",
    },
    {
      icon: <FaFileUpload />,
      title: "Modern Chat Features",
      description:
        "Supports file/image uploads, reactions, delivery/read receipts, and typing indicators.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Customizable UI",
      description:
        "Easily tailor chat appearance and layout without changing code.",
    },
    {
      icon: <FaToggleOn />,
      title: "Instant Presence Control",
      description:
        "Toggle live status or availability with a single click — reflect changes instantly.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Multi-Tenant Support",
      description:
        "Run multiple app chat environments and manage each independently.",
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Offline Fallback System",
      description:
        "Automatically sends email notifications when admins or agents go offline.",
    },
  ];

  return (
    <section className={styles.liveChatSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>Live User Chat — Real-Time Collaboration Hub</h2>
        <p className={styles.subtitle}>
          Power your customer support with seamless, real-time teamwork — built
          for multi-agent communication and modern engagement.
        </p>
      </header>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveUserChat;
