import React from "react";
import styles from "./PlatformFeatures.module.css";

export default function PlatformFeatures() {
  return (
    <div className={`${styles.section} ${styles.cardsSection}`}>
      <h2>What features do we provide?</h2>

      <h3>Core Platform</h3>
      <ul className={styles.bullets}>
        <li>🧠 <b>AI Chatbot trained from your content</b> — Turn your website, docs, and FAQs into a 24/7 smart assistant.</li>
        <li>💬 <b>Live Chat with Multi-Admin Access</b> — Collaborate seamlessly across your team in real time.</li>
        <li>📥 <b>Unified Inbox</b> — Manage all customer messages from one clean dashboard.</li>
        <li>🎨 <b>Custom Widgets & Themes</b> — Tailor your chat look and feel — no code required.</li>
        <li>📈 <b>Real-time Analytics</b> — Track engagement, conversation quality, and response efficiency.</li>
      </ul>

      <h3>Advanced Capabilities</h3>
      <ul className={styles.bullets}>
        <li>⚙️ <b>RAG Chat Engine</b> — Retrieval-augmented AI trained on your own content for factual, context-aware responses.</li>
        <li>🌍 <b>Omnichannel Support</b> — Integrate with Web, WhatsApp, Slack, Telegram, or custom apps.</li>
        <li>👥 <b>Smart Human Handover</b> — Automatically routes complex chats to live agents when AI is uncertain.</li>
        <li>🔌 <b>API + SDK Access</b> — Build custom integrations and workflows.</li>
        <li>🧩 <b>Role-Based Access Control (RBAC)</b> — Manage team permissions and maintain privacy across workspaces.</li>
      </ul>
    </div>
  );
}
