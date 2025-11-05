import React from "react";
import styles from "./TargetAudience.module.css";

export default function TargetAudience() {
  const sections = [
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
      ideal:
        "Early-stage SaaS platforms, productivity tools, dev tools, or marketplaces.",
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
      ideal:
        "E-commerce stores, real estate, education, and healthcare startups.",
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
      ideal:
        "Digital agencies, marketing consultants, or managed service providers.",
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
  ];

  return (
    <section className={styles.section}>
      <div className={styles.innerWarp}>
        <div className={styles.row}>
          <div className={`${styles.box} ${styles.wide}`}>
            <h2 className={styles.heading}>Who Is MagicChat Best For?</h2>
            <p className={styles.intro}>
              MagicChat is built for teams who want powerful, fast, and low-cost
              customer engagement — without needing developers or API setups.
            </p>
          </div>

          {/* Box 2 */}
          <div className={styles.box}>
            <div className={styles.card}>
              <div className={styles.emoji}>{sections[0].emoji}</div>
              <h3>{sections[0].title}</h3>
                <p className={styles.ideal}>
                  <strong>Their pain: </strong> {sections[0].ideal}
                </p>
              <p className={styles.pain}>{sections[0].pain}</p>
              <ul>
                {sections[0].fits.map((fit, i) => (
                  <li key={i}>{fit}</li>
                ))}
              </ul>
              <p className={styles.ideal}>
                <strong>Ideal for:</strong> {sections[0].ideal}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          {[sections[1], sections[2]].map((sec, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.card}>
                <div className={styles.emoji}>{sec.emoji}</div>
                <h3>{sec.title}</h3>
                 <p className={styles.ideal}>
                  <strong>Their pain: </strong> {sec.ideal}
                </p>
                <p className={styles.pain}>{sec.pain}</p>
                <ul>
                  {sec.fits.map((fit, i) => (
                    <li key={i}>{fit}</li>
                  ))}
                </ul>
                <p className={styles.ideal}>
                  <strong>Ideal for:</strong> {sec.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          {[sections[3], sections[4]].map((sec, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.card}>
                <div className={styles.emoji}>{sec.emoji}</div>
                <h3>{sec.title}</h3>
                  <p className={styles.ideal}>
                  <strong>Their pain:</strong> {sec.ideal}
                </p>
                <p className={styles.pain}>{sec.pain}</p>
                <ul>
                  {sec.fits.map((fit, i) => (
                    <li key={i}>{fit}</li>
                  ))}
                </ul>
                <p className={styles.ideal}>
                  <strong>Ideal for:</strong> {sec.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
