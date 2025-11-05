import React from "react";
import styles from "./PlatformFeatures.module.css";
import {
  FaBrain,
  FaComments,
  FaInbox,
  FaPalette,
  FaChartLine,
  FaCogs,
  FaGlobe,
  FaUserFriends,
  FaPlug,
  FaUserShield,
} from "react-icons/fa";

export default function PlatformFeatures() {
  const coreFeatures = [
    {
      icon: <FaBrain />,
      title: "AI Chatbot trained from your content",
      desc: "Turn your website, docs, and FAQs into a 24/7 smart assistant.",
    },
    {
      icon: <FaComments />,
      title: "Live Chat with Multi-Admin Access",
      desc: "Collaborate seamlessly across your team in real time.",
    },
    {
      icon: <FaInbox />,
      title: "Unified Inbox",
      desc: "Manage all customer messages from one clean dashboard.",
    },
    {
      icon: <FaPalette />,
      title: "Custom Widgets & Themes",
      desc: "Tailor your chat look and feel — no code required.",
    },
    {
      icon: <FaChartLine />,
      title: "Real-time Analytics",
      desc: "Track engagement, conversation quality, and response efficiency.",
    },
  ];

  const advancedFeatures = [
    {
      icon: <FaCogs />,
      title: "RAG Chat Engine",
      desc: "Retrieval-augmented AI trained on your own content for factual, context-aware responses.",
    },
    {
      icon: <FaGlobe />,
      title: "Omnichannel Support",
      desc: "Integrate with Web, WhatsApp, Slack, Telegram, or custom apps.",
    },
    {
      icon: <FaUserFriends />,
      title: "Smart Human Handover",
      desc: "Automatically routes complex chats to live agents when AI is uncertain.",
    },
    {
      icon: <FaPlug />,
      title: "API + SDK Access",
      desc: "Build custom integrations and workflows.",
    },
    {
      icon: <FaUserShield />,
      title: "Role-Based Access Control (RBAC)",
      desc: "Manage team permissions and maintain privacy across workspaces.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2>What features do we provide?</h2>

      <div className={styles.cardWarp}>
        <ul className={styles.bullets}>
          <h3>Core Platform</h3>
          {coreFeatures.map((item, idx) => (
            <li key={idx}>
              <span className={styles.iconCircle}>{item.icon}</span>
              <div>
                <b>{item.title}</b> — {item.desc}
              </div>
            </li>
          ))}
        </ul>

        <ul className={styles.bullets}>
          <h3>Advanced Capabilities</h3>
          {advancedFeatures.map((item, idx) => (
            <li key={idx}>
              <span className={styles.iconCircle}>{item.icon}</span>
              <div>
                <b>{item.title}</b> — {item.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
