// src/app/data/platformData.js

export const platformList = {
  features: [
    {
      icon: "fa-solid fa-robot",
      subHeading: "AI Agent",
      slug: "ai-agent",
      text: "Deterministic multi-step workflows with auto-generated UI screens. The LLM classifies intent; your APIs do the work.",
    },
    {
      icon: "fa-solid fa-layer-group",
      subHeading: "Tenant vs App Scope",
      slug: "tenant-vs-app",
      text: "The opt-in attachment model. Tenant-scoped resources stay invisible until an app explicitly attaches them — fail-hard guards prevent cross-tenant damage.",
    },
    {
      icon: "fa-solid fa-user-shield",
      subHeading: "Multi-Admin & RBAC",
      slug: "multi-admin-rbac",
      text: "Delegate safely across 70,000 restaurants. Granular roles for tenant admins, franchise managers, and support executives.",
    },
    {
      icon: "fa-solid fa-paint-brush",
      subHeading: "Visual Response Designer",
      slug: "visual-response-designer",
      text: "Design forms, tables, and approval cards from your API's response shape. No LLM, no hallucination — just deterministic rendering.",
    },
    {
      icon: "fa-solid fa-tags",
      subHeading: "Whitelabel & Billing",
      slug: "whitelabel-billing",
      text: "Custom domains per app. Every execution is metered with app_name and user_identity — invoice-shaped billing at 70k-restaurant granularity.",
    },
  ],
  integration: [
    {
      icon: "fa-solid fa-plug",
      subHeading: "API Configs",
      slug: "api-configs",
      text: "Define HTTP endpoints once. URL, method, headers, payload template, and sample responses for each status code.",
    },
    {
      icon: "fa-solid fa-link",
      subHeading: "API Chains",
      slug: "api-chains",
      text: "Run multiple APIs in sequence with branching logic. Check inventory → place order → approve — all without a single line of code.",
    },
    {
      icon: "fa-solid fa-key",
      subHeading: "Auth Servers",
      slug: "auth-servers",
      text: "Bring your own login server. Tokens are encrypted with an RSA keypair whose private half never leaves Sageion.",
    },
    {
      icon: "fa-solid fa-cloud",
      subHeading: "Connections & Actions",
      slug: "connections-actions",
      text: "OAuth grants for Google Sheets, Gmail, Calendar, and Slack. Attach connector actions to any chain node as parallel triggers.",
    },
  ],
};