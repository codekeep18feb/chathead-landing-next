// documentation/payload/versions/V2/platform/aiChat.js

const aiChatPayload = [
  {
    tag_type: "h2",
    text: "AI Agent Overview",
    selector_uid: "v2_ai_chat",
  },
  {
    tag_type: "p",
    text:
      "The Sageion AI Agent turns your existing backend APIs into deterministic, " +
      "multi-step workflows with auto-generated UI screens. It runs on top of " +
      "any Restaurant CRM — Petpooja, Posist, Rista, or a custom stack — and " +
      "is designed from the ground up for enterprise deployments supporting " +
      "{{ 60,000 base users and 10,000 power users across 70,000+ restaurants }}.",
  },

  {
    tag_type: "callout",
    type: "info",
    title: "The core principle",
    children: [
      {
        tag_type: "p",
        text:
          "The LLM decides what the user wants. Your runtime decides what happens next. " +
          "The model never generates prices, order statuses, or any business data — " +
          "every value the end user sees comes from your API. This is what makes " +
          "the agent safe to ship to restaurant owners who cannot tolerate a single " +
          "hallucinated refund.",
      },
    ],
  },

  {
    tag_type: "h3",
    text: "What an AI Agent actually is",
    selector_uid: "v2_ai_chat_what",
  },
  {
    tag_type: "p",
    text:
      "An AI Agent is a named skill your app exposes to end users — for example " +
      "{{ \"Check order status\" }} or {{ \"Book a table\" }}. Each agent is wired to " +
      "either a single API config or a full API chain. When a user triggers the agent " +
      "in chat, the runtime:",
  },
  {
    tag_type: "ol",
    items: [
      {
        tag_type: "li",
        text: "Classifies the user's intent via the LLM (the only LLM call in the flow).",
      },
      {
        tag_type: "li",
        text: "Picks the matching API config or chain you mapped to that intent.",
      },
      {
        tag_type: "li",
        text: "Renders the required input fields as a UI screen (forms, dropdowns, date pickers).",
      },
      {
        tag_type: "li",
        text: "Executes the API chain deterministically — auth, retries, branches, error handling.",
      },
      {
        tag_type: "li",
        text: "Renders the response using the template you designed, using only data returned by your API.",
      },
    ],
  },

  {
    tag_type: "h3",
    text: "The three layers of the runtime",
    selector_uid: "v2_ai_chat_layers",
  },
  {
    tag_type: "table",
    headers: ["Layer", "What it does", "Who configures it"],
    rows: [
      [
        "Presentation",
        "Renders forms, tables, approval cards, and text templates from the API's declared response shape.",
        "Developer via Visual Response Designer",
      ],
      [
        "Orchestration",
        "Maps intent → API/Chain, handles field extraction, branch logic, async pauses, and human-in-the-loop stops.",
        "Developer via Skill Workflow",
      ],
      [
        "Integration",
        "Handles auth (Bearer, API key, OAuth2, JWT), request signing, webhook callbacks, and outbound validation.",
        "Developer via API Config & Auth Integration",
      ],
    ],
  },

  {
    tag_type: "h3",
    text: "Built for enterprise scale",
    selector_uid: "v2_ai_chat_scale",
  },
  {
    tag_type: "p",
    text:
      "The architecture is designed to support two distinct tiers of users inside " +
      "a single tenant without interference:",
  },
  {
    tag_type: "table",
    headers: ["User tier", "Count", "What they do"],
    rows: [
      [
        "Base users",
        "~60,000",
        "Restaurant staff accessing pre-built agents — check order, view menu, update inventory.",
      ],
      [
        "Power users",
        "~10,000",
        "Franchise managers and developers designing workflows, customizing UI, and wiring new APIs.",
      ],
    ],
  },
  {
    tag_type: "p",
    text:
      "The two tiers share the same runtime but never share permissions. Base users " +
      "can only trigger agents that were published to them. Power users author " +
      "those agents inside the app they're assigned to. Every action is scoped to " +
      "the app the caller belongs to — see {{ Tenant vs App scope }} below.",
  },

  {
    tag_type: "callout",
    type: "success",
    title: "Billable at every layer",
    children: [
      {
        tag_type: "p",
        text:
          "Every action the agent performs is metered: API executions, async runs, " +
          "retention windows, and per-app active users. That data is exported in " +
          "invoice shape — the CRM vendor can bill their downstream restaurants " +
          "without integrating a separate billing system.",
      },
    ],
  },
];

export default aiChatPayload;