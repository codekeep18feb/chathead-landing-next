// src/app/platform/connectors/page.js

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Connectors.module.css";

const ConnectorsPage = () => {
  const [activeTab, setActiveTab] = useState("library");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: "🔌",
      title: "Reusable Definition Library",
      subtitle: "Build once. Attach anywhere.",
      description:
        "Every connector is a named, pre-configured operation with its parameters saved. Build a 'Send WhatsApp Confirmation' definition once, and every restaurant on your tenant attaches it with one click.",
      details: [
        "Tenant-scoped definitions published by the admin",
        "Per-app attachment — nothing auto-inherits",
        "Survives chain deletion — the definition stays",
        "Versioned, auditable, and CRUD-managed",
        "Fail-hard guards prevent deletion while apps use it",
      ],
      proof: "Definitions outlive the chains that reference them.",
      color: "#4BCF9E",
    },
    {
      icon: "🔐",
      title: "Enterprise OAuth Flow",
      subtitle: "Tenant-owned accounts. Zero shared credentials.",
      description:
        "Each tenant brings their own Google Workspace, Slack, or HubSpot account. Sageion never sees a password — only an OAuth token, encrypted per-tenant, in its own Secrets Manager namespace.",
      details: [
        "PKCE + state + audience + issuer verification",
        "Refresh-token rotation with race-condition detection",
        "Revoke at provider AND delete locally",
        "Narrowed-scope propagation on refresh",
        "7-day grace window during token rotation",
        "Per-tenant secrets under {Prefix}/sageion/oauth-token/*",
      ],
      proof: "A CISO can audit exactly which secrets belong to which tenant.",
      color: "#667EEA",
    },
    {
      icon: "⚙️",
      title: "Schema-Driven Operation Registry",
      subtitle: "New connectors ship without any UI changes.",
      description:
        "Every operation describes its own parameter schema. The admin's post-trigger editor generates the form from that schema. When we ship Slack or Stripe tomorrow, they appear instantly — no frontend deploy required.",
      details: [
        "Each operation declares its required scopes for pre-flight",
        "The admin renders the parameter form from the schema",
        "Scope checks run before the vendor API ever gets called",
        "Adding a new provider is a code change, not a UI rebuild",
        "Zero downtime when new operations ship",
      ],
      proof: "The catalog grows without touching the admin.",
      color: "#F59E0B",
    },
    {
      icon: "🛡️",
      title: "Isolated Security Surface",
      subtitle: "Separate stack. Separate IAM. Separate secrets.",
      description:
        "The connector handler runs on its own Lambda, its own API Gateway, its own SQS queue with DLQ, and its own IAM role. OAuth credentials never mix with tenant data. Credential rotation is one CloudFormation deploy.",
      details: [
        "Own Lambda with 60s timeout (vs AutoBot's 180s)",
        "Own SQS queue with 5-receive DLQ, 14-day retention",
        "Own Secrets Manager namespace for provider credentials",
        "Read-only IAM on AutoBot's data tables",
        "Narrow write IAM on connector's own tables only",
        "No shared environment variables with AutoBot",
      ],
      proof: "The compliance auditor sees two separate stacks, not one.",
      color: "#EC4899",
    },
  ];

  const operations = [
    {
      provider: "Google Sheets",
      icon: "📊",
      operations: [
        { name: "append_row", label: "Append row to sheet" },
        { name: "list_spreadsheets", label: "List spreadsheets" },
        { name: "list_tabs", label: "List sheet tabs" },
      ],
      status: "live",
    },
    {
      provider: "Gmail",
      icon: "📧",
      operations: [
        { name: "send_as", label: "Send email from connected Gmail" },
      ],
      status: "live",
    },
    {
      provider: "Google Calendar",
      icon: "📅",
      operations: [
        { name: "create_event", label: "Create calendar event" },
      ],
      status: "live",
    },
    {
      provider: "Slack",
      icon: "💬",
      operations: [
        { name: "post_message", label: "Post message to channel" },
        { name: "send_dm", label: "Send direct message" },
      ],
      status: "pipeline",
    },
    {
      provider: "WhatsApp",
      icon: "📱",
      operations: [
        { name: "send_template", label: "Send template message" },
        { name: "send_media", label: "Send media message" },
      ],
      status: "pipeline",
    },
    {
      provider: "Stripe",
      icon: "💳",
      operations: [
        { name: "create_payment_link", label: "Create payment link" },
        { name: "refund_payment", label: "Refund a payment" },
      ],
      status: "pipeline",
    },
    {
      provider: "HubSpot",
      icon: "🧲",
      operations: [
        { name: "create_contact", label: "Create contact" },
        { name: "create_deal", label: "Create deal" },
      ],
      status: "pipeline",
    },
    {
      provider: "Custom / REST",
      icon: "🔗",
      operations: [
        { name: "any_http_endpoint", label: "Any HTTP endpoint" },
      ],
      status: "planned",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            <span>🔌 Connector Framework</span>
          </div>

          <h1 className={styles.heroTitle}>
            Connectors That{" "}
            <span className={styles.highlight}>Grow With You</span>
          </h1>

          <p className={styles.heroSubtitle}>
            A reusable library of tenant-owned OAuth connections. Fire Slack, email,
            calendar, Sheets, or any future integration — in parallel with your AI agent
            workflows, with zero shared credentials and zero UI rebuilds.
          </p>
          <div style={{
            margin: '16px auto 0',
            padding: '12px 20px',
            background: 'rgba(79, 70, 229, 0.08)',
            border: '1px solid rgba(79, 70, 229, 0.2)',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#4f46e5',
            maxWidth: '640px',
            textAlign: 'center',
          }}>
            <strong>The catalog grows without any UI change.</strong>{" "}
            Every new connector ships as a schema-driven operation — when Slack arrives,
            your admin sees it instantly.
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>3</span>
              <span className={styles.heroStatLabel}>Providers live today</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>∞</span>
              <span className={styles.heroStatLabel}>Operations extensible</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>0</span>
              <span className={styles.heroStatLabel}>UI changes for new ops</span>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <Link href="/contact_us" className={styles.primaryBtn}>
              Request a Connector →
            </Link>
            <Link href="/documentation" className={styles.secondaryBtn}>
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          THE FOUR CAPABILITIES
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>⚡ Core Capabilities</span>
          <h2 className={styles.sectionTitle}>
            Not Just Webhooks.{" "}
            <span className={styles.highlight}>A Full Connector Infrastructure.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Every capability below ships in production today. Expand each card
            to see the implementation.
          </p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((cap, idx) => (
            <div key={idx} className={styles.capabilityCard}>
              <div
                className={styles.capabilityIcon}
                style={{
                  background: `${cap.color}20`,
                  color: cap.color,
                }}
              >
                {cap.icon}
              </div>
              <h3 className={styles.capabilityTitle}>{cap.title}</h3>
              <p className={styles.capabilitySubtitle}>{cap.subtitle}</p>
              <p className={styles.capabilityDescription}>{cap.description}</p>

              <div className={styles.capabilityDetails}>
                <h4 className={styles.capabilityDetailsTitle}>What's inside</h4>
                <ul>
                  {cap.details.map((detail, i) => (
                    <li key={i}>
                      <span
                        className={styles.checkIcon}
                        style={{ color: cap.color }}
                      >
                        ✓
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={styles.capabilityProof}
                style={{
                  background: `${cap.color}10`,
                  borderLeft: `3px solid ${cap.color}`,
                }}
              >
                <strong>Proof:</strong> {cap.proof}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          LIVE OPERATIONS CATALOG
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>📦 Operations Catalog</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>Live Now</span> — and Grown Every Week
          </h2>
          <p className={styles.sectionSubtitle}>
            Every provider below is a first-class operation. The admin's post-trigger
            editor auto-generates its form from the operation's schema.
          </p>
        </div>

        <div className={styles.catalogGrid}>
          {operations.map((provider, idx) => (
            <div
              key={idx}
              className={`${styles.catalogCard} ${provider.status !== "live" ? styles.catalogCardPending : ""
                }`}
            >
              <div className={styles.catalogHeader}>
                <span className={styles.catalogIcon}>{provider.icon}</span>
                <span className={styles.catalogName}>{provider.provider}</span>
                <span
                  className={`${styles.catalogStatus} ${styles[`status-${provider.status}`]
                    }`}
                >
                  {provider.status === "live" && "● Live"}
                  {provider.status === "pipeline" && "◐ Shipping Soon"}
                  {provider.status === "planned" && "○ Planned"}
                </span>
              </div>

              <ul className={styles.catalogOps}>
                {provider.operations.map((op, i) => (
                  <li key={i}>
                    <code className={styles.opName}>{op.name}</code>
                    <span className={styles.opLabel}>{op.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.catalogNote}>
          <strong>Don't see your integration?</strong>{" "}
          <Link href="/contact_us" className={styles.inlineLink}>
            Request it
          </Link>{" "}
          — every new operation ships without any change to the admin UI.
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — THREE STEPS
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🔄 How It Works</span>
          <h2 className={styles.sectionTitle}>
            From OAuth to Execution in{" "}
            <span className={styles.highlight}>Three Steps</span>
          </h2>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Connect</h3>
            <p className={styles.stepDescription}>
              The tenant admin clicks <strong>Connect Google</strong> (or Slack,
              or any future provider). PKCE, state, audience, and issuer are all
              verified automatically.
            </p>
            <div className={styles.stepDetail}>
              Token stored in <code>{`{Prefix}/sageion/oauth-token/...`}</code> —
              encrypted, tenant-scoped, never shared.
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Define</h3>
            <p className={styles.stepDescription}>
              The admin builds a named connector definition — e.g.{" "}
              <em>"Send WhatsApp confirmation"</em> — and fills in its parameters
              from the auto-generated schema form.
            </p>
            <div className={styles.stepDetail}>
              Definitions are tenant-scoped. Apps attach the ones they need. Nothing
              auto-inherits.
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Fire</h3>
            <p className={styles.stepDescription}>
              Attach the definition to any chain node or leadgen form. It fires to
              a separate SQS queue with its own DLQ, in parallel with the main flow.
            </p>
            <div className={styles.stepDetail}>
              A slow Slack API never delays a table booking. Failures go to the DLQ,
              not to the user.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECURITY & ISOLATION
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🛡️ Security</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>Isolated by Design.</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            The connector stack runs on its own deployment — separate IAM, separate
            secrets, separate queue. OAuth credentials never mix with tenant data.
          </p>
        </div>

        <div className={styles.securityGrid}>
          <div className={styles.securityCard}>
            <h4>Separate Lambda</h4>
            <p>
              60-second timeout, narrow IAM, dedicated execution role. Cannot access
              AutoBot's data except through read-only paths.
            </p>
          </div>
          <div className={styles.securityCard}>
            <h4>Separate Secrets Namespace</h4>
            <p>
              Provider credentials live at{" "}
              <code>{`{Prefix}/sageion/oauth-provider/*`}</code>. Tenant tokens live
              at <code>{`{Prefix}/sageion/oauth-token/*`}</code>. Never shared.
            </p>
          </div>
          <div className={styles.securityCard}>
            <h4>Separate SQS Queue</h4>
            <p>
              With a dedicated DLQ. Failures retry 5 times, then archive to DLQ with
              14-day retention — visible to operations, never to the end user.
            </p>
          </div>
          <div className={styles.securityCard}>
            <h4>Read-Only Cross-Domain Access</h4>
            <p>
              The connector can read <code>-AutoBotData</code> and{" "}
              <code>-ScopeAttachments</code> to verify ownership. It can never write
              to either.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          ROADMAP
          ============================================================ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🚀 Roadmap</span>
          <h2 className={styles.sectionTitle}>
            <span className={styles.highlight}>Shipping Soon</span>
          </h2>
        </div>

        <div className={styles.roadmapList}>
          {[
            { q: "Q1", items: ["Slack post_message, send_dm", "WhatsApp template messages"] },
            { q: "Q2", items: ["Stripe payment links & refunds", "HubSpot contacts & deals"] },
            { q: "Q3", items: ["Twilio SMS", "Salesforce basic operations"] },
            { q: "Q4", items: ["Custom REST/HTTP endpoint operation", "Generic webhook operation"] },
          ].map((phase, idx) => (
            <div key={idx} className={styles.roadmapItem}>
              <div className={styles.roadmapQuarter}>{phase.q}</div>
              <ul className={styles.roadmapListItems}>
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Need a Connector We Don't Have Yet?
          </h2>
          <p className={styles.ctaSubtitle}>
            Every connector is a schema-driven operation — adding a new one never
            requires an admin UI change. Tell us which provider you need, and it
            ships in the next release.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact_us" className={styles.primaryBtn}>
              Request a Connector
            </Link>
            <Link href="/documentation" className={styles.secondaryBtn}>
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectorsPage;