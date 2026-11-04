// src/app/billing/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./Billing.module.css";

export default function BillingPage() {
  const primitives = [
    {
      icon: "🏷️",
      title: "Per-execution metering",
      description:
        "Every workflow run is stamped with app_name, user_id, and uid. That's the entire billing surface — a two-column join, not a data warehouse.",
    },
    {
      icon: "📋",
      title: "Invoice-shaped export",
      description:
        "The metering dashboard exports columns your CFO already uses: app name, restaurant name, executions, async runs, retention days, billing period. It's the same shape as the existing franchise invoice.",
    },
    {
      icon: "🔒",
      title: "Zero data custody by default",
      description:
        "The runtime holds a reference, not the data. The uid is an opaque identifier only the CRM knows how to resolve. No PII, no order history, no menu, no pricing.",
    },
    {
      icon: "🚪",
      title: "No billing lock-in",
      description:
        "The moment the CRM outgrows the built-in attribution, they point their own finance stack at the metering export and stop paying the attribution fee. The runtime is designed to lose that business.",
    },
  ];

  const objections = [
    {
      question: "How do I bill my franchisees for this?",
      answer:
        "Every execution carries app_name and user_id. The metering export drops directly into your existing franchise invoice. You build an invoice template, not a billing system.",
    },
    {
      question: "How much of my customers' data do you hold?",
      answer:
        "Almost none. We hold an opaque uid — a reference that only you can resolve. Your customer profiles, order history, menu, and pricing never leave your database.",
    },
    {
      question: "What if I want to build my own billing later?",
      answer:
        "Good. The runtime is designed for it. The moment you have your own billing system, point it at the metering export and stop paying the attribution fee. We're not here to own your finance stack.",
    },
    {
      question: "What happens if I leave Sageion tomorrow?",
      answer:
        "Nothing to migrate. Your users exist. Your data exists. Your billing system exists. The runtime was routing, not storing. You turn it off.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ============== HERO ============== */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>💰 Billing & Metering</div>
        <h1 className={styles.heroTitle}>
          Bill 70,000 Restaurants.
          <br />
          <span className={styles.highlight}>Hold Nothing.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Every Restaurant CRM CFO asks the same two questions in the same meeting:
          how do I bill my franchisees, and how much of my customers' data do you hold?
          Both answers come from the same primitive.
        </p>
      </section>

      {/* ============== THE PRIMITIVE ============== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🔑 The Primitive</span>
          <h2 className={styles.sectionTitle}>
            Every execution is stamped with{" "}
            <span className={styles.highlight}>three fields</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            That's the entire billing surface. Everything else — the invoice, the
            reconciliation, the per-franchisee report — is derived from it.
          </p>
        </div>

        <div className={styles.tupleCard}>
          <div className={styles.tupleRow}>
            <span className={styles.tupleKey}>app_name</span>
            <span className={styles.tupleValue}>
              which restaurant / brand the action belongs to
            </span>
          </div>
          <div className={styles.tupleRow}>
            <span className={styles.tupleKey}>user_id</span>
            <span className={styles.tupleValue}>
              which logged-in user triggered the workflow
            </span>
          </div>
          <div className={styles.tupleRow}>
            <span className={styles.tupleKey}>uid</span>
            <span className={styles.tupleValue}>
              your own reference — an opaque mapping only you can resolve
            </span>
          </div>
        </div>

        <div className={styles.primitivesGrid}>
          {primitives.map((p, i) => (
            <div key={i} className={styles.primitiveCard}>
              <div className={styles.primitiveIcon}>{p.icon}</div>
              <h3 className={styles.primitiveTitle}>{p.title}</h3>
              <p className={styles.primitiveDescription}>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== OBJECTION HANDLING ============== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🎯 The Four Questions</span>
          <h2 className={styles.sectionTitle}>
            What your CFO and CISO actually ask
          </h2>
        </div>

        <div className={styles.objectionsGrid}>
          {objections.map((obj, i) => (
            <div key={i} className={styles.objectionCard}>
              <div className={styles.objectionQuestion}>
                <span className={styles.objectionQuote}>"</span>
                {obj.question}
              </div>
              <div className={styles.objectionAnswer}>{obj.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== CUSTODY BOUNDARY ============== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🔒 Custody Boundary</span>
          <h2 className={styles.sectionTitle}>
            What the runtime holds —{" "}
            <span className={styles.highlight}>and what it doesn't</span>
          </h2>
        </div>

        <div className={styles.custodyGrid}>
          <div className={styles.custodyColumn}>
            <div className={styles.custodyHeader}>
              <span className={styles.custodyIcon}>✅</span>
              <h3>What the runtime holds</h3>
            </div>
            <ul className={styles.custodyList}>
              <li>The opaque <code>uid</code> reference (a mapping only you can resolve)</li>
              <li>The <code>app_name</code> attribution tag</li>
              <li>The execution count, timestamp, and duration</li>
              <li>Async workflow state (encrypted, with TTL)</li>
              <li>Encrypted auth tokens (never plaintext)</li>
            </ul>
          </div>

          <div className={styles.custodyColumn}>
            <div className={`${styles.custodyHeader} ${styles.custodyHeaderNever}`}>
              <span className={styles.custodyIcon}>❌</span>
              <h3>What the runtime never holds</h3>
            </div>
            <ul className={`${styles.custodyList} ${styles.custodyListNever}`}>
              <li>Customer names, emails, or phone numbers</li>
              <li>Order history or menu contents</li>
              <li>Pricing, discounts, or policy data</li>
              <li>API request or response bodies (default)</li>
              <li>Plaintext credentials or session tokens</li>
            </ul>
          </div>
        </div>

        <div className={styles.custodyNote}>
          <strong>Default retention:</strong> zero. API requests and responses are
          not stored unless the CRM explicitly opts in per-API. Session history is
          opt-in and lives in the CRM's own storage, not Sageion's.
        </div>
      </section>

      {/* ============== NO LOCK-IN ============== */}
      <section className={styles.section}>
        <div className={styles.lockinCard}>
          <div className={styles.lockinIcon}>🚪</div>
          <h2 className={styles.lockinTitle}>
            The runtime is designed to lose your billing business
          </h2>
          <p className={styles.lockinText}>
            The moment your CRM has its own billing system, you should stop paying
            Sageion for attribution. Point your finance stack at the metering export,
            and we'll get out of the way. There's no contractual bundling, no data
            portability puzzle, no migration project. The primitive is designed for
            exit — because a Restaurant CRM should never be locked into a billing
            layer they don't want.
          </p>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            See the metering export in a live demo
          </h2>
          <p className={styles.ctaSubtitle}>
            Book a 30-minute call and we'll walk your CFO through the exact invoice
            shape, the custody boundary, and the exit path. No commitment, no
            procurement cycle.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact_us" className={styles.primaryBtn}>
              Book a Demo →
            </Link>
            <Link href="/pricing" className={styles.secondaryBtn}>
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}