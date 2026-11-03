// src/app/security/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./Security.module.css";

export default function SecurityPage() {
  const principles = [
    {
      icon: "🛡️",
      title: "Zero Data Storage by Default",
      description:
        "We don't save API requests. We don't save API responses. We don't save conversation history. If a tenant doesn't explicitly opt in, there is nothing on our side to leak.",
      detail: "History is a per-API setting, disabled on create.",
    },
    {
      icon: "🔑",
      title: "You Own Your Users & Auth",
      description:
        "Your users live in your identity server. Tokens are minted by you. We never see a password. We receive an encrypted JWT and never store the plaintext.",
      detail: "RSA-2048 wrapped AES-256-GCM. Plaintext JWTs are rejected.",
    },
    {
      icon: "🔐",
      title: "Per-Tenant Secrets",
      description:
        "Every tenant's OAuth tokens live in their own Secrets Manager namespace. Rotation is scoped. Revocation is scoped. A compromise in one tenant cannot touch another.",
      detail: "{Prefix}/sageion/oauth-token/{tenant}/{app}/* — isolated per app.",
    },
    {
      icon: "🗂️",
      title: "Data Never Leaves Your System",
      description:
        "The AI agent calls your APIs with your credentials and returns the result to your product. Your customer's data stays in your backend, always.",
      detail: "We are the routing layer, not the data layer.",
    },
    {
      icon: "📋",
      title: "Nothing to Migrate If You Leave",
      description:
        "If you stop using Sageion tomorrow, your users still exist. Your data still exists. There is no migration because there was nothing to move.",
      detail: "The product returns to your APIs. Not to ours.",
    },
    {
      icon: "🔍",
      title: "Auditable by Construction",
      description:
        "Every tenant has its own secret namespace. Every execution carries app_name and user_id. A compliance auditor sees the separation without reading code.",
      detail: "Two isolated stacks: AutoBot and Connector. Separate IAM.",
    },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.badge}>🛡️ Security & Compliance</div>
        <h1 className={styles.heroTitle}>
          We Hold Nothing.<br />
          <span className={styles.highlight}>You Hold Everything.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Enterprise buyers ask "where does my data live?" The answer is:
          exactly where it already lives. Sageion routes requests and returns
          results. Nothing leaves your system.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.principlesGrid}>
          {principles.map((p, i) => (
            <div key={i} className={styles.principleCard}>
              <div className={styles.principleIcon}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className={styles.principleDetail}>
                <code>{p.detail}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What a CISO Reviewer Will Find</h2>
        <div className={styles.auditGrid}>
          <div className={styles.auditItem}>
            <strong>Two isolated stacks</strong>
            <p>AutoBot (control plane) and Connector (execution plane) deploy independently. No shared Lambda, no shared IAM role.</p>
          </div>
          <div className={styles.auditItem}>
            <strong>Per-tenant secret namespaces</strong>
            <p>Secrets Manager paths are <code>{`{Prefix}/sageion/oauth-token/{tenant}/*`}</code>. A wildcard scan shows exactly which secrets belong to which tenant.</p>
          </div>
          <div className={styles.auditItem}>
            <strong>Explicit opt-in model</strong>
            <p>Tenant resources are invisible to apps until explicitly attached. Fail-hard guards prevent accidental cross-tenant access.</p>
          </div>
          <div className={styles.auditItem}>
            <strong>Encrypted tokens, always</strong>
            <p>Plaintext JWTs are rejected outright. Only RSA-OAEP + AES-256-GCM ciphertext is ever accepted by the runtime.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Want the Full Security Review Package?
        </h2>
        <p className={styles.ctaSubtitle}>
          Our architecture documentation covers every stack, IAM role, and secret namespace. 
          Book a call and our team will walk your CISO through it.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact_us" className={styles.primaryBtn}>Book a Security Review</Link>
          <Link href="/documentation" className={styles.secondaryBtn}>Read the Docs</Link>
        </div>
      </section>
    </div>
  );
}