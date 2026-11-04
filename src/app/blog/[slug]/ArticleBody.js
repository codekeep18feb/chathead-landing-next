// src/app/blog/[slug]/ArticleBody.js
"use client";

import React from "react";
import styles from "./ArticlePage.module.css";

// ─── Article content, keyed by slug ─────────────────────────────────
// To add a new article, add a new entry with the same slug as the
// one in blogPosts.js. The page renders it automatically.
// ────────────────────────────────────────────────────────────────────
const ARTICLES = {
  "why-restaurant-ai-projects-fail": [
    {
      type: "p",
      text: "Between 2023 and 2025, the restaurant industry ran one of the largest live experiments in AI deployment the world has ever seen. Wendy's, McDonald's, Starbucks, and Pizza Hut — four of the largest brands on the planet — all shipped AI into production. Almost all of them pulled back. Almost all of them cited the same reason: 'the AI wasn't ready.' That's not the real reason.",
    },
    {
      type: "h2",
      text: "What actually went wrong",
    },
    {
      type: "p",
      text: "Wendy's AI drive-thru went viral in 2024 for a mix-up where the AI offered a customer 500 nuggets. McDonald's terminated its IBM partnership in June 2024 after three years of pilots — then announced a new partnership with Google a year later. Starbucks shelved its AI inventory system after nine months because it 'occasionally miscounted or mislabeled items.' Pizza Hut is facing a $100 million lawsuit over an AI dispatch system that allegedly caused a driver to be assaulted.",
    },
    {
      type: "p",
      text: "Every one of those outcomes has the same shape. The AI produced an action — an order, an inventory count, a dispatch — that was technically within spec, but factually wrong in the real world. And nobody paused to check it before it happened.",
    },
    {
      type: "h2",
      text: "The real failure isn't accuracy",
    },
    {
      type: "p",
      text: "Every article written about these failures obsesses over model accuracy. 'The AI was only 95% accurate.' 'The AI hallucinated.' But 95% accuracy on a 40-second drive-thru interaction, multiplied by millions of interactions, is hundreds of thousands of wrong outcomes. The problem isn't that the model was too dumb. The problem is that the system had no primitive to say: 'this one is uncertain — pause and ask a human.'",
    },
    {
      type: "p",
      text: "A human drive-thru worker hitting a 500-nugget order stops mid-sentence and asks 'wait, you want how many?' The AI didn't stop. That's the architectural gap.",
    },
    {
      type: "h2",
      text: "What a runtime actually fixes",
    },
    {
      type: "p",
      text: "At Sageion, the entire runtime is built around a single design decision: the LLM classifies intent, and the runtime executes deterministically against your APIs. This means:",
    },
    {
      type: "list",
      items: [
        "Prices, refunds, and inventory counts come from your backend — never from the model.",
        "Critical actions (refunds, dispatch, high-value orders) trigger a human-in-the-loop pause before executing.",
        "Every step is auditable. When something goes wrong, you can point at the exact node that failed.",
        "Failures have a defined branch. A slow supplier API doesn't break the workflow — it pauses and resumes via webhook.",
      ],
    },
    {
      type: "h2",
      text: "Why this matters for Restaurant CRMs specifically",
    },
    {
      type: "p",
      text: "If you're a Restaurant CRM selling AI to franchisees, your customers are not measuring AI accuracy in percentages. They're measuring it in dollars per store. A 5% error rate on a $2M annual store is $100,000 in unexplained loss — and no franchisee signs a contract with that math.",
    },
    {
      type: "p",
      text: "The AI platforms that win this market won't be the ones with the smartest model. They'll be the ones whose runtime is designed to never let a mistake reach the customer without a human in the loop. That's not a feature. It's the entire architecture.",
    },
    {
      type: "cta",
      text: "Want to see a deterministic workflow in action?",
    },
  ],

  "fewer-hallucinations-fewer-tokens": [
    {
      type: "p",
      text: "Every Restaurant CRM CTO who evaluates an AI platform eventually asks the same question: 'What happens when the AI gets the price wrong?' It's the right question. And the answer most vendors give — 'our model is highly accurate' — is the wrong answer.",
    },
    {
      type: "h2",
      text: "The hidden cost of LLM-generated answers",
    },
    {
      type: "p",
      text: "Traditional chatbot architectures put everything into the model's context window: product data, pricing, policies, past orders. The LLM reads all of it and generates a response. It usually gets the answer right. But 'usually' isn't a category that survives in restaurant operations.",
    },
    {
      type: "p",
      text: "A wrong refund amount, multiplied across 70,000 stores, is a P&L disaster. A hallucinated inventory count, applied as a purchase order, is a supplier relationship failure. A misquoted price, screenshotted and tweeted, is a brand trust failure.",
    },
    {
      type: "h2",
      text: "The architecture that fixes this",
    },
    {
      type: "p",
      text: "The fix isn't a bigger model. It's a smaller role for the model. The LLM should classify intent — 'the user wants a refund' — and nothing else. Everything that follows should be deterministic.",
    },
    {
      type: "list",
      items: [
        "Intent classification: LLM (safe — no business data generated)",
        "API URL, method, and auth: deterministic (from your config)",
        "Request payload: deterministic (built from the extracted intent + your backend fields)",
        "Response content: deterministic (returned by your API)",
        "Template rendering: deterministic (your declared template, not generated)",
      ],
    },
    {
      type: "p",
      text: "The result: zero LLM involvement in the data path. Every number the customer sees came from your backend. Every policy reference came from your backend. Every price came from your backend.",
    },
    {
      type: "h2",
      text: "What this looks like in practice",
    },
    {
      type: "p",
      text: "A customer asks 'How much is the chicken biryani?' In a context-window architecture, the LLM reads your menu, finds the price, and generates a sentence. In a deterministic architecture, the LLM detects the intent 'menu_item_price,' the runtime calls your menu API with the item ID, the API returns the exact price, and the UI renders it as a formatted card.",
    },
    {
      type: "p",
      text: "Same customer experience. Radically different risk profile. The LLM never has an opportunity to be wrong — because it was never asked to be right about anything that matters.",
    },
    {
      type: "h2",
      text: "Fewer tokens is actually a feature",
    },
    {
      type: "p",
      text: "A side effect of this architecture is that the LLM consumes far fewer tokens per interaction. You don't need to cram your catalog, your policies, and your history into the prompt — because the runtime fetches them via API. The model stays small and cheap. The answers stay grounded and correct.",
    },
    {
      type: "p",
      text: "That's what makes this architecture economically scalable. It's not just safer — it's cheaper to run at 70,000 restaurants than a context-heavy alternative. That's the pitch that actually wins in procurement.",
    },
    {
      type: "cta",
      text: "Want to see the LLM-tolerant architecture in detail?",
    },
  ],

  "30-second-timeout-killing-restaurant-ai": [
    {
      type: "p",
      text: "There's a specific kind of failure that nobody warns you about when you start building restaurant AI: the workflow that succeeds in the backend but fails on the frontend because it took 45 seconds. This is the silent killer of restaurant AI deployments, and most platforms have no answer for it.",
    },
    {
      type: "h2",
      text: "Real latencies in restaurant tech",
    },
    {
      type: "p",
      text: "Restaurant operations aren't fast. Supplier EDI syncs take 2-5 minutes. Payment gateway authorizations average 20-40 seconds. Inventory reconciliations across 20 vendor APIs can take 90 seconds. Batch report generation over 500 stores can take 10+ minutes.",
    },
    {
      type: "p",
      text: "Standard chat interfaces timeout at 30 seconds. This means: the workflow succeeded, the PO was created, the refund was processed, the report was generated — but the user saw a red error box and clicked 'retry.' Now you have a duplicate PO, a duplicate refund, or a duplicate report.",
    },
    {
      type: "h2",
      text: "The naive fix doesn't work",
    },
    {
      type: "p",
      text: "The obvious answer is 'increase the timeout.' This fails for two reasons. First, users won't wait — anything over 20 seconds feels broken. Second, the user still can't tell if the workflow succeeded until the request completes, so you've just made the failure mode slower.",
    },
    {
      type: "h2",
      text: "What durable async actually means",
    },
    {
      type: "p",
      text: "Durable async is a different primitive. Instead of keeping the HTTP request open, the workflow:",
    },
    {
      type: "list",
      items: [
        "Returns immediately to the user with an acknowledgment ('PO submitted')",
        "Stores the workflow state in a durable database with a TTL",
        "Waits for an external event — a supplier webhook, a payment gateway callback, a background job completion",
        "Resumes the workflow when the event arrives, with the full original context intact",
        "Updates the UI automatically via WebSocket — no polling, no refresh",
      ],
    },
    {
      type: "h2",
      text: "A concrete example",
    },
    {
      type: "p",
      text: "Staff asks 'Order 5 kg rice from our usual supplier.' Without durable async, the chain calls the supplier API and times out at 30 seconds. The staff sees an error. They click retry. Now the supplier has two POs. With durable async, the chain calls the supplier API, gets a '202 Accepted' back, and shows the staff a 'PO submitted' screen with the pending PO number. Four minutes later, the supplier's webhook confirms the PO, and the staff's screen automatically updates to 'PO confirmed.'",
    },
    {
      type: "p",
      text: "Same workflow. Radically different reliability. This is the primitive that lets AI actually do restaurant work instead of just chatting about it.",
    },
    {
      type: "cta",
      text: "Want to see durable pause/resume in action?",
    },
  ],
};

// Map blogPosts.slug → article body
export default function ArticleBody({ slug }) {
  const blocks = ARTICLES[slug];

  if (!blocks) {
    return (
      <div className={styles.notFoundInline}>
        <p>This article's full content is coming soon.</p>
        <p>
          Book a demo and we'll walk you through this topic live.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.body}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={idx} className={styles.h2}>
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={idx} className={styles.p}>
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={idx} className={styles.ul}>
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "cta":
            return (
              <div key={idx} className={styles.inlineCta}>
                <h3>{block.text}</h3>
                <p>
                  Book a 30-minute call and we'll show you the exact runtime
                  primitive behind this article.
                </p>
                <a href="/contact_us" className={styles.inlineCtaBtn}>
                  Book a Demo →
                </a>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}