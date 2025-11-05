import React from "react";
import styles from "./TargetAudience.module.css";

export default function TargetAudience() {
  const sections = [
    {
      emoji: "🛍️",
      title: "SaaS Startups & Growing Tech Companies",
      pain: "Need to onboard users, handle support, and experiment fast — but can’t afford to spend weeks integrating or paying for every AI query.",
      fits: [
        "One-time drag-and-drop integration.",
        "Free tier with full features — test and deploy immediately.",
        "Built-in auth system — no need to build one early.",
        "Scales instantly to multi-tenant mode as users grow.",
        "Fully customizable — supports branding and iteration.",
      ],
      ideal: "Early-stage SaaS platforms, productivity tools, dev tools, or marketplaces.",
    },
    {
      emoji: "🏪",
      title: "Small & Medium Businesses (SMBs)",
      pain: "Want AI-powered chat or customer support but can’t manage costly LLM tokens or complex setups.",
      fits: [
        "Inbuilt low-cost RAG chatbot — no OpenAI key needed.",
        "Simple website integration — add once, works forever.",
        "Supports URLs, sitemaps, and file training.",
        "No technical expertise required.",
      ],
      ideal: "E-commerce stores, real estate, education, and healthcare startups.",
    },
    {
      emoji: "🧑‍💻",
      title: "Agencies & Product Builders",
      pain: "Manage multiple client environments, each needing their own chatbot setup — fast and reliable.",
      fits: [
        "One-click multi-tenant mode for multiple brands.",
        "Team collaboration — invite client’s staff securely.",
        "Admin dashboard for full customization control.",
        "White-label ready — fits any brand look.",
      ],
      ideal: "Digital agencies, marketing consultants, or managed service providers.",
    },
    {
      emoji: "🏢",
      title: "Enterprises & Large Teams",
      pain: "Need secure, scalable, and easily maintainable systems with minimal downtime.",
      fits: [
        "Secure multi-tenant architecture.",
        "Live chat distribution to agents.",
        "Offline email notifications.",
        "Inbuilt authentication and data portability.",
      ],
      ideal: "Internal support teams, SaaS enterprises, or CX platforms.",
    },
    {
      emoji: "💬",
      title: "Community & Education Platforms",
      pain: "Need always-on, smart, context-aware assistants for students or members.",
      fits: [
        "Chatbot trained on course materials or documents.",
        "No API key or developer setup needed.",
        "Optional authentication for user-specific data.",
      ],
      ideal: "Online courses, LMS systems, or community hubs.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Who Is MagicChat Best For?</h2>
      <p className={styles.intro}>
        MagicChat is built for teams who want powerful, fast, and low-cost
        customer engagement — without needing developers or API setups.
      </p>

      <div className={styles.chatContainer}>
        {sections.map((item, i) => (
          <div
            key={i}
            className={`${styles.messageWrapper} ${
              i % 2 === 1 ? styles.right : styles.left
            }`}
          >
            <div className={styles.avatar}>{item.emoji}</div>
            <div className={styles.message}>
              <h3>{item.title}</h3>
              <p>
                <strong>Their pain:</strong> {item.pain}
              </p>
              <div className={styles.whySections}>
                <strong>Why MagicChat fits:</strong>
              </div>
              <ul>
                {item.fits.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <p className={styles.ideal}>
                💡 <strong>Ideal for:</strong> {item.ideal}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
