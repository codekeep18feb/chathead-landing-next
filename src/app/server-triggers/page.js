// src/app/server-triggers/page.js
"use client";

import React from "react";
import Link from "next/link";
import styles from "./ServerTriggers.module.css";

export default function ServerTriggersPage() {
  const useCases = [
    {
      icon: "⏰",
      title: "Scheduled Workflows",
      trigger: "Cron at 6am every Monday",
      workflow: "Aggregate weekend sales → WhatsApp franchise owner",
      outcome: "Daily reports without a BI tool or a dashboard.",
    },
    {
      icon: "💳",
      title: "Event-Driven Actions",
      trigger: "Stripe webhook: payment.failed",
      workflow: "Check customer history → initiate refund-approval chain",
      outcome: "Async events trigger the same workflows a human could.",
    },
    {
      icon: "📊",
      title: "Backend Batch Jobs",
      trigger: "Nightly data sync from your CRM",
      workflow: "Enrich 5,000 lead rows via the AI agent",
      outcome: "AI automation applied to bulk operations.",
    },
    {
      icon: "🔔",
      title: "External Notifications",
      trigger: "IoT sensor: kitchen fridge temp > 40°F",
      workflow: "Notify manager → open maintenance chain",
      outcome: "The same runtime responds to signals from any source.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.badge}>⚙️ Server-Side Triggers</div>
        <h1 className={styles.heroTitle}>
          Trigger AI Workflows<br />
          <span className={styles.highlight}>From Your Own Backend.</span>
        </h1>
        <p className={styles.heroSubtitle}>
          The same runtime that powers the in-product AI chat can be invoked
          directly from your backend code. Send an event, get a workflow. 
          The agent that handles a user's refund request is the same agent 
          that processes your nightly batch jobs.
        </p>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>1</div>
            <div className={styles.statLabel}>Runtime, Two Entry Points</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>0</div>
            <div className={styles.statLabel}>Duplicate Workflows</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>∞</div>
            <div className={styles.statLabel}>Trigger Sources</div>
          </div>
        </div>
      </section>

      {/* ─── THE CORE IDEA ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>One Runtime. Two Entry Points.</h2>
          <p className={styles.sectionSubtitle}>
            The AI agent doesn't care whether the trigger came from a human typing 
            in chat or from your backend code firing a webhook. The workflow is the 
            same. The API chain is the same. The approval pause is the same.
          </p>
        </div>

        <div className={styles.dualEntry}>
          {/* Entry Point 1 */}
          <div className={styles.entryCard}>
            <div className={styles.entryTag}>ENTRY POINT 1</div>
            <div className={styles.entryIcon}>💬</div>
            <h3 className={styles.entryTitle}>Frontend Chat</h3>
            <p className={styles.entryDesc}>
              A user types "I need a refund for order #4421" in your product's 
              AI chat widget. Intent classification → chain execution.
            </p>
            <div className={styles.entryFlow}>
              <code>user message → classify intent → trigger workflow</code>
            </div>
          </div>

          {/* Convergence visual */}
          <div className={styles.entryConvergence}>
            <div className={styles.convergeArrow}>↓</div>
            <div className={styles.convergeNode}>Same Runtime</div>
            <div className={styles.convergeArrow}>↓</div>
          </div>

          {/* Entry Point 2 */}
          <div className={styles.entryCard}>
            <div className={styles.entryTag}>ENTRY POINT 2</div>
            <div className={styles.entryIcon}>⚙️</div>
            <h3 className={styles.entryTitle}>Backend Code</h3>
            <p className={styles.entryDesc}>
              Your server's Stripe webhook fires, or a cron job runs at 6am. Your 
              code calls the SDK with an intent and payload. Same chain executes.
            </p>
            <div className={styles.entryFlow}>
              <code>server event → intent + payload → trigger workflow</code>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE INTERFACE ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Interface</h2>
          <p className={styles.sectionSubtitle}>
            The SDK is a thin client over the runtime that's already in production. 
            It authenticates with your tenant API key, dispatches the intent, and 
            returns the workflow's correlation ID. That's it.
          </p>
        </div>

        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.codeLang}>TypeScript</span>
            <span className={styles.codeFile}>server.ts</span>
          </div>
          <pre className={styles.codePre}>{`import { SageionClient } from "@sageion/server-sdk";

const sageion = new SageionClient({
  apiKey: process.env.SAGEION_API_KEY,
  tenantId: "your-tenant-id",
});

// Fire a workflow from your backend code
const execution = await sageion.trigger({
  intent: "refund_approval",
  appName: "store_42",
  payload: {
    orderId: "ORD-12345",
    amount: 249.99,
    reason: "cold_food_complaint",
  },
});

console.log(execution.correlationId); 
// → "8a2c9f7e-..." — track this execution anywhere

// Async workflows return immediately; poll or webhook for completion
if (execution.status === "paused_for_approval") {
  // Your manager approval flow handles the rest
}`}</pre>
        </div>

        <div className={styles.interfaceNote}>
          <strong>Same runtime, same authentication, same audit trail.</strong>{" "}
          The SDK uses the tenant API key that already exists. Every execution 
          appears in the same dashboard as a chat-triggered one. There is no 
          "server-triggered" silo — it's the same system.
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What This Unlocks</h2>
          <p className={styles.sectionSubtitle}>
            Anything your backend can detect can become an AI agent workflow.
          </p>
        </div>

        <div className={styles.useCaseGrid}>
          {useCases.map((uc, i) => (
            <div key={i} className={styles.useCaseCard}>
              <div className={styles.useCaseIcon}>{uc.icon}</div>
              <h3 className={styles.useCaseTitle}>{uc.title}</h3>
              <div className={styles.useCaseRow}>
                <span className={styles.useCaseLabel}>Trigger:</span>
                <code>{uc.trigger}</code>
              </div>
              <div className={styles.useCaseRow}>
                <span className={styles.useCaseLabel}>Workflow:</span>
                <span>{uc.workflow}</span>
              </div>
              <div className={styles.useCaseOutcome}>
                <span>✅</span> {uc.outcome}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SAME GUARANTEES ─── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Every Guarantee Holds. Regardless of Trigger Source.
          </h2>
        </div>

        <div className={styles.guaranteesGrid}>
          <div className={styles.guarantee}>
            <strong>Durable async</strong>
            <p>A server-triggered chain that pauses for approval uses the same DynamoDB state row. Resume works identically.</p>
          </div>
          <div className={styles.guarantee}>
            <strong>Zero data storage</strong>
            <p>Server-triggered requests are not saved unless the tenant explicitly opts into history for that API.</p>
          </div>
          <div className={styles.guarantee}>
            <strong>Deterministic execution</strong>
            <p>The SDK triggers a chain. The chain is deterministic. The LLM is never invoked from the backend path.</p>
          </div>
          <div className={styles.guarantee}>
            <strong>Full audit trail</strong>
            <p>Every execution carries <code>app_name</code> and <code>intent</code>, whether it originated from a user or from code.</p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Design Your Backend Triggers</h2>
        <p className={styles.ctaSubtitle}>
          Talk to our team about how to wire your backend events into the 
          Sageion runtime. We'll walk through the auth model, the execution 
          interface, and the async webhook contract.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact_us" className={styles.primaryBtn}>
            Talk to Engineering
          </Link>
          <Link href="/documentation" className={styles.secondaryBtn}>
            Read the Docs
          </Link>
        </div>
      </section>
    </div>
  );
}