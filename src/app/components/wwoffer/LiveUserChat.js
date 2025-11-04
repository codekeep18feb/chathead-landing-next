import React from "react";
import styles from "./WhatWeOffer.module.css";

const LiveUserChat = () => {
  return (
    <section className={styles.featureBlock}>
      <h3 className={styles.featureTitle}>Live User Chat</h3>
      <div className={styles.featureContent}>
        <p>
          Manage live customer conversations in real-time — as a solo admin or a full support team.
        </p>
        <ul>
          <li>Invite and collaborate with multiple support agents</li>
          <li>Smart message routing to available agents</li>
          <li>Unified user inbox for all team members</li>
          <li>Role-based access control (RBAC) for secure collaboration</li>
          <li>Smart history and searchable conversation threads</li>
          <li>
            All modern chat capabilities — delivery reports, reactions, file/image uploads
          </li>
          <li>Customizable chat UI and layout — no code changes needed</li>
          <li>Instant live-status toggle and presence control</li>
          <li>
            Multi-tenant support for multiple apps — enable or disable on demand
          </li>
          <li>
            Advanced offline fallback — automatically triggers email notifications
            when admins or support agents go offline (configurable via Global and App-level settings)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LiveUserChat;
