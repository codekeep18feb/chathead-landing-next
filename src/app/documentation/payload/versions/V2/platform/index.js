// documentation/payload/versions/V2/platform/index.js

const platformPayload = [
  // ============================================================
  // INTEGRATION (Prerequisites, Client, Code, Backend)
  // ============================================================
  {
    tag_type: "h2",
    text: "Prerequisites",
    selector_uid: "v2_prerequisites",
  },
  {
    tag_type: "p",
    text: "Before you start, make sure you have your Sageion API key and your app details ready.",
  },
  {
    tag_type: "h2",
    text: "Client Integration",
    selector_uid: "v2_client_integration",
  },
  {
    tag_type: "p",
    text: "Sageion exposes two methods on `window.sageion_os`: `setUp()` and `initialize()`. Everything else — sockets, DOM, auth, lifecycle, teardown — is handled internally.",
  },
  {
    tag_type: "h2",
    text: "Code Example",
    selector_uid: "v2_code_example",
  },
  {
    tag_type: "code_with_copy",
    language: "javascript",
    code: `await window.sageion_os.setUp(
  "your_app_id",
  "YOUR_API_KEY",
  "US",
  "sageion-chat-root"
);`
  },
  {
    tag_type: "h2",
    text: "Backend Integration",
    selector_uid: "v2_backend_integration",
  },
  {
    tag_type: "p",
    text: "Your backend must expose endpoints to authenticate users and return a token.",
  },

  // ============================================================
  // PLATFORM (AI Agent)
  // ============================================================
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
      "60,000 base users and 10,000 power users across 70,000+ restaurants.",
  },
  {
    tag_type: "h3",
    text: "What is an agent",
    selector_uid: "v2_ai_chat_what",
  },
  {
    tag_type: "p",
    text:
      "An AI Agent is a named skill your app exposes to end users — for example " +
      "\"Check order status\" or \"Book a table\". Each agent is wired to " +
      "either a single API config or a full API chain. When a user triggers the agent " +
      "in chat, the runtime classifies the intent, picks the matching API or chain, " +
      "renders the required input fields as a UI screen, executes the API deterministically, " +
      "and renders the response using the template you designed.",
  },
  {
    tag_type: "h3",
    text: "The three layers",
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

  // ============================================================
  // TENANT VS APP SCOPE
  // ============================================================
  {
    tag_type: "h2",
    text: "Tenant vs App Scope",
    selector_uid: "v2_global_tenant_settings",
  },
  {
    tag_type: "p",
    text:
      "Sageion is built around a two-tier resource model. Understanding it is " +
      "the key to understanding why the platform scales cleanly to 70,000 restaurants " +
      "and why multi-admin works without chaos.",
  },
  {
    tag_type: "h3",
    text: "The two tiers",
    selector_uid: "v2_global_tenant_tiers",
  },
  {
    tag_type: "table",
    headers: ["Tier", "Lives at", "Shared by", "Editable by"],
    rows: [
      [
        "Tenant",
        "The root account (e.g. your Restaurant CRM)",
        "Every app on the account",
        "Tenant admins only",
      ],
      [
        "App",
        "A single app (e.g. one restaurant or franchise)",
        "That app only",
        "App developers and managers on that app",
      ],
    ],
  },
  {
    tag_type: "h3",
    text: "The opt-in attachment model",
    selector_uid: "v2_attachment_model",
  },
  {
    tag_type: "p",
    text:
      "Tenant-scoped resources are NOT visible to apps by default. An app must " +
      "explicitly attach each resource it wants to use. This is the single most " +
      "important design decision in the platform, because it makes tenant-wide " +
      "infrastructure safe to share without giving every app blanket access.",
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "Fail-hard guards",
    children: [
      {
        tag_type: "p",
        text:
          "If a tenant admin tries to delete or modify a resource that is still " +
          "attached to an app, the platform refuses the action and names the " +
          "blocking apps. Nothing is silently broken.",
      },
    ],
  },
  {
    tag_type: "h3",
    text: "App overrides",
    selector_uid: "v2_app_overrides",
  },
  {
    tag_type: "p",
    text:
      "If an app needs to deviate from the tenant default — different pricing, " +
      "different auth, a custom chain — the app developer creates an app-scoped " +
      "version of that resource. The app-scoped version shadows the tenant one " +
      "for that app only.",
  },
  {
    tag_type: "h3",
    text: "Why this scales to 70,000 restaurants",
    selector_uid: "v2_scale_rationale",
  },
  {
    tag_type: "p",
    text:
      "The tenant tier is where 90% of the work happens. The tenant admin defines " +
      "the golden API configs, golden auth server, and golden workflows once. " +
      "Each of the ~70,000 restaurants is one app on that tenant — it inherits " +
      "everything by attaching, without duplicating infrastructure.",
  },

  // ============================================================
  // MULTI-ADMIN & RBAC
  // ============================================================
  {
    tag_type: "h2",
    text: "Multi-Admin & RBAC",
    selector_uid: "v2_invite_support",
  },
  {
    tag_type: "p",
    text:
      "Sageion supports multiple administrative users per tenant with role-based " +
      "access control. This is what allows a Restaurant CRM with 70,000 downstream " +
      "restaurants to delegate safely.",
  },
  {
    tag_type: "h3",
    text: "Roles",
    selector_uid: "v2_roles",
  },
  {
    tag_type: "table",
    headers: ["Role", "Scope", "Can do"],
    rows: [
      [
        "Super Admin",
        "Tenant-wide",
        "Manage tenant settings, invite admins, publish shared resources",
      ],
      [
        "App Developer",
        "App-scoped",
        "Attach shared resources, author skills, build chains",
      ],
      [
        "Support Executive",
        "App-scoped (view)",
        "View app chats and failed AI messages",
      ],
    ],
  },
  {
    tag_type: "h3",
    text: "Inviting a support user",
    selector_uid: "v2_invite_flow",
  },
  {
    tag_type: "p",
    text:
      "From Global Level Settings, the admin selects the role and scope (tenant or specific app). " +
      "An invitation is sent with a signed link that expires in 7 days.",
  },
  {
    tag_type: "h3",
    text: "App-scoped admins",
    selector_uid: "v2_app_scoped_admins",
  },
  {
    tag_type: "p",
    text:
      "App developers and app managers are scoped to a specific app_name. They " +
      "can only see resources, workflows, and metering for that app. Their blast " +
      "radius is one restaurant.",
  },

  // ============================================================
  // APIS, CHAINS, AUTH, CONNECTIONS
  // ============================================================
  {
    tag_type: "h2",
    text: "APIs & Workflows",
    selector_uid: "v2_integrations_apis_workflows",
  },
  {
    tag_type: "p",
    text:
      "The AI Agent is powered by four first-class resource types. Each is " +
      "scoped to tenant or app, and each is independently metered.",
  },
  {
    tag_type: "h3",
    text: "API Configs",
    selector_uid: "v2_api_configurations",
  },
  {
    tag_type: "p",
    text:
      "An API Config describes a single HTTP endpoint: URL, method, headers, " +
      "query params, request payload template, and sample responses for each " +
      "HTTP status code.",
  },
  {
    tag_type: "h3",
    text: "API Chains",
    selector_uid: "v2_chain_apis",
  },
  {
    tag_type: "p",
    text:
      "A Chain runs several API configs in sequence, with branching on response " +
      "status codes. This is how a single agent handles multi-step workflows " +
      "like \"Check availability → hold table → confirm payment\" without " +
      "writing a single line of code.",
  },
  {
    tag_type: "h3",
    text: "Auth Servers",
    selector_uid: "v2_authentication_configure",
  },
  {
    tag_type: "p",
    text:
      "The Auth Server configuration is how the runtime authenticates outgoing " +
      "API calls. Tokens are encrypted with an RSA keypair whose " +
      "private half never leaves Sageion.",
  },
  {
    tag_type: "h3",
    text: "Connections & Actions",
    selector_uid: "v2_connections_actions",
  },
  {
    tag_type: "p",
    text:
      "A Connection is an OAuth grant (Google Sheets, Gmail, Calendar, Slack, etc.). " +
      "A Connector Action is a reusable operation built on top of a connection.",
  },

  // ============================================================
  // VISUAL RESPONSE DESIGNER
  // ============================================================
  {
    tag_type: "h2",
    text: "Visual Response Designer",
    selector_uid: "v2_visual_response_designer",
  },
  {
    tag_type: "p",
    text:
      "The Visual Response Designer is where you tell the AI Agent what to " +
      "render after an API call. Instead of returning raw JSON or a chat message, " +
      "you design a structured screen — a card, a table, an approval dialog, a " +
      "form — from the API's actual response shape.",
  },
  {
    tag_type: "h3",
    text: "What is it?",
    selector_uid: "v2_what_is_visual_designer",
  },
  {
    tag_type: "p",
    text:
      "It is a no-code editor that takes the sample response from an API Config " +
      "and lets you map each field into a UI component. The result is rendered by " +
      "the same deterministic engine used across the platform — no LLM involvement.",
  },
  {
    tag_type: "h3",
    text: "Getting started",
    selector_uid: "v2_visual_designer_getting_started",
  },
  {
    tag_type: "p",
    text:
      "Open the Preview Tester from any API Config, paste a sample response, and " +
      "start designing the layout.",
  },
  {
    tag_type: "h3",
    text: "Best practices",
    selector_uid: "v2_visual_designer_best_practices",
  },
  {
    tag_type: "ul",
    items: [
      { tag_type: "li", text: "Use a real sample response — not synthetic data." },
      { tag_type: "li", text: "Design the error states (400, 404, 409) before shipping the happy path." },
      { tag_type: "li", text: "Keep text templates short." },
    ],
  },

  // ============================================================
  // WHITELABEL & BILLING
  // ============================================================
  {
    tag_type: "h2",
    text: "Whitelabel & Billing",
    selector_uid: "v2_whitelabel_domains",
  },
  {
    tag_type: "p",
    text:
      "The platform is designed to be invisible to the end restaurant. Every " +
      "domain, every screen, and every metered event can be attributed to a " +
      "specific app — which means the CRM vendor can bill each restaurant " +
      "individually.",
  },
  {
    tag_type: "h3",
    text: "Whitelabel domains",
    selector_uid: "v2_whitelabel_setup",
  },
  {
    tag_type: "p",
    text:
      "A tenant can register custom domains that serve the AI Agent interface " +
      "under the tenant's own brand.",
  },
  {
    tag_type: "h3",
    text: "Billing Granularity",
    selector_uid: "v2_billing_granularity",
  },
  {
    tag_type: "p",
    text:
      "Every execution the agent runs is stamped with app_name and user_identity. " +
      "These two tags are the entire billing surface. A CRM vendor takes the " +
      "metering export and produces a per-restaurant invoice directly.",
  },
];

export default platformPayload;