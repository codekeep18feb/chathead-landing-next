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
    title: "AI Chatbot Trained on Your Content",
    desc: "Turn your website, docs, and FAQs into a 24/7 smart assistant.",
  },
  {
    icon: <FaComments />,
    title: "Live Chat with Team Collaboration",
    desc: "Chat with customers and collaborate across agents in real time.",
  },
  {
    icon: <FaInbox />,
    title: "Unified Inbox",
    desc: "Manage conversations from all your websites in one place.",
  },
  {
    icon: <FaPalette />,
    title: "Custom Widgets & Themes",
    desc: "Fully customize your chat’s look from the Admin—no code changes needed.",
  },
  {
    icon: <FaChartLine />,
    title: "Lead Generation Tools",
    desc: "Create lead forms, capture leads instantly, and auto-email responses.",
  },
];

const advancedFeatures = [
  {
    icon: <FaCogs />,
    title: "RAG Chat Engine",
    desc: "AI powered by retrieval to deliver factual, context-aware answers.",
  },
  {
    icon: <FaGlobe />,
    title: "Team Collaboration",
    desc: "Collaborate effortlessly across customer chats with shared workflows.",
  },
  {
    icon: <FaUserFriends />,
    title: "Smart Human Handover",
    desc: "Auto-routes complex queries to live agents when AI is uncertain.",
  },
  {
    icon: <FaPlug />,
    title: "Simpler Integration",
    desc: "One-line CDN embed with instant Admin-pushed updates—no redeploys.",
  },
  {
    icon: <FaUserShield />,
    title: "Role-Based Access Control (RBAC)",
    desc: "Assign permissions and control access across your team.",
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
