"use client";

import React from "react";
import styles from "./ContentDetail.module.css"; // create this CSS file
import { FaTimes, FaHandPointRight } from "react-icons/fa";

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

const ContentDetail = ({ title, version, onClose }) => {
  const content = contentData[version]?.[title];

  if (!content) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2>{title}</h2>
        <ul className={styles.contentList}>
          {content.map((item, index) => (
            <li key={index}>
              <FaHandPointRight className={styles.icon} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentDetail;
