// src/app/why-runtime/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./WhyRuntime.module.css";

export default function WhyRuntimePage() {
  const comparisons = [
    { aspect: "Runtime provided", framework: "You build it", sageion: "Built-in", },
    { aspect: "Async + webhooks", framework: "You write retry + resume logic", sageion: "Durable pause/resume primitive", },
    { aspect: "Multi-tenancy", framework: "You own tenant isolation", sageion: "Opt-in attachment model", },
    { aspect: "Billing & metering", framework: "You own attribution", sageion: "Invoice-shaped per app_name", },
    { aspect: "Connector execution", framework: "You write Slack/Google code", sageion: "Schema-driven operation registry", },
    { aspect: "Security surface", framework: "You own the secrets layer", sageion: "Isolated stack, per-tenant secrets", },
    { aspect: "Deterministic routing", framework: "Custom — usually LLM-allowed", sageion: "LLM classifies intent only", },
    { aspect: "Time to first workflow", framework: "Weeks", sageion: "Days", },
    { aspect: "Ops burden", framework: "Yours", sageion: "Sageion's", },
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.badge}>⚔️ Runtime, Not Framework</div>
        <h1 className={styles.heroTitle}>
          Why Not Just <span className={styles.highlight}>Use LangChain?</span>
        </h1>
        <p className={styles.heroSubtitle}>
          It's the first question every CTO asks. It deserves an honest answer.
          Frameworks give you building blocks — you still build the runtime. We
          give you the runtime, ready to ship.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Framework vs. Runtime</h2>
        <p className={styles.sectionSubtitle}>
          Same goal, fundamentally different starting point.
        </p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Framework (Lyzr, LangChain, CrewAI)</th>
                <th>Sageion Runtime</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i}>
                  <td className={styles.aspectCell}>{row.aspect}</td>
                  <td className={styles.frameworkCell}>{row.framework}</td>
                  <td className={styles.sageionCell}>{row.sageion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What "Runtime" Actually Means Here</h2>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⏳</div>
            <h3>Durable Async</h3>
            <p>
              The model doesn't wait. A workflow pauses, its state lands in
              DynamoDB, and the request returns. When the webhook arrives, the
              workflow resumes exactly where it stopped.
            </p>
            <p className={styles.cardNote}>
              In a framework, you write this. Retry logic, state persistence,
              resumption, correlation IDs — all yours.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🔌</div>
            <h3>Connectors</h3>
            <p>
              Slack, Sheets, Gmail, Calendar, and every future integration ship
              as schema-driven operations. The admin form is generated. No
              frontend deploy.
            </p>
            <p className={styles.cardNote}>
              In a framework, every connector is a new library, a new auth flow,
              a new UI form. You own it forever.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>🛡️</div>
            <h3>Isolated Security</h3>
            <p>
              Per-tenant Secrets Manager namespaces. RSA + AES-GCM token
              encryption. Connector runs on its own Lambda with its own IAM. No
              cross-contamination.
            </p>
            <p className={styles.cardNote}>
              In a framework, you build the entire secrets layer. One misconfig
              and the blast radius is every tenant.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📊</div>
            <h3>Billing Attribution</h3>
            <p>
              Every execution carries <code>app_name</code> and <code>user_id</code>.
              The metering export drops directly onto the CRM's invoice. No
              reconciliation pipeline.
            </p>
            <p className={styles.cardNote}>
              In a framework, you own the attribution layer. Every dollar of
              revenue requires a data pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Ship in Days. Not Quarters.
        </h2>
        <p className={styles.ctaSubtitle}>
          You don't pay us for the framework. You pay us for the runtime that
          ships with it — and the years of infrastructure engineering baked in.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/pricing" className={styles.primaryBtn}>See Pricing →</Link>
          <Link href="/contact_us" className={styles.secondaryBtn}>Book a Demo</Link>
        </div>
      </section>
    </div>
  );
}