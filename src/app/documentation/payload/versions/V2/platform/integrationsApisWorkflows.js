// documentation/payload/versions/V2/platform/integrationsApisWorkflows.js

const integrationsApisWorkflowsPayload = [
  {
    tag_type: "h2",
    text: "APIs, Chains, Auth, and Connections",
    selector_uid: "v2_integrations_apis_workflows",
  },
  {
    tag_type: "p",
    text:
      "The AI Agent is powered by four first-class resource types. Each is " +
      "scoped to tenant or app, and each is independently metered. This is the " +
      "layer that makes the platform feel like an operating system rather than " +
      "a chatbot.",
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
      "HTTP status code. Once configured, the runtime can call it safely and " +
      "deterministically.",
  },
  {
    tag_type: "feature_options",
    options: [
      {
        text: "Tenant-scoped",
        description: [
          {
            tag_type: "p",
            text:
              "A shared endpoint published by the tenant admin. Not visible to " +
              "any app until that app attaches it. Used when every restaurant " +
              "hits the same backend URL with the same auth.",
          },
        ],
      },
      {
        text: "App-scoped",
        description: [
          {
            tag_type: "p",
            text:
              "An endpoint specific to one app. Automatically visible to that " +
              "app only. Used when a restaurant has its own URL, its own auth " +
              "credentials, or a customized backend.",
          },
        ],
      },
    ],
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
      "status codes. If the first API returns 200, run config B. If it returns " +
      "409, run config C. This is how a single agent handles multi-step workflows " +
      "like {{ \"Check availability → hold table → confirm payment\" }} without " +
      "writing a single line of code.",
  },
  {
    tag_type: "callout",
    type: "info",
    title: "Manual nodes",
    children: [
      {
        tag_type: "p",
        text:
          "Any step in a chain can be marked Manual. The chain will pause and " +
          "wait for an external webhook callback before continuing. This is how " +
          "human-in-the-loop approvals work — a manager clicks Approve in the " +
          "UI, that hits your webhook, and the chain resumes.",
      },
    ],
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
      "API calls. Unlike a static API key, Sageion supports a full login-server " +
      "flow: the tenant defines an endpoint that returns a token, and the runtime " +
      "uses it for every call. Tokens are encrypted with an RSA keypair whose " +
      "private half never leaves Sageion.",
  },

  {
    tag_type: "table",
    headers: ["Auth type", "When to use", "Scoping"],
    rows: [
      ["Bearer token", "OAuth2 providers, JWT-based APIs", "Tenant or app"],
      ["API key", "Simple header auth (X-API-Key)", "Tenant or app"],
      ["Login server", "Custom auth flow with per-user tokens", "Tenant or app"],
      ["OAuth2 (managed)", "Google, Microsoft, Slack", "Tenant or app"],
    ],
  },

  {
    tag_type: "h3",
    text: "Connections and Connector Actions",
    selector_uid: "v2_connections_actions",
  },
  {
    tag_type: "p",
    text:
      "A Connection is an OAuth grant (Google Sheets, Gmail, Calendar, Slack, etc.). " +
      "A Connector Action is a reusable operation built on top of a connection — " +
      "{{ \"Append row to Sheet\" }}, {{ \"Send Slack message\" }}, {{ \"Create " +
      "Calendar event\" }}. Both are tenant-scoped resources that apps attach " +
      "explicitly.",
  },
  {
    tag_type: "p",
    text:
      "Connector Actions can be attached to chain nodes as parallel actions — they " +
      "fire in the background when that node's API returns, never blocking the " +
      "main flow. A single chain node can fire five parallel actions and the " +
      "agent still returns to the user in under a second.",
  },

  {
    tag_type: "h3",
    text: "How the four resource types compose",
    selector_uid: "v2_resource_composition",
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Auth Server → API Config",
        content: [
          {
            tag_type: "p",
            text:
              "Each API Config declares which Auth Server authenticates it. " +
              "One shared auth server can authenticate fifty API configs without " +
              "duplicating credentials.",
          },
        ],
      },
      {
        title: "API Config → Chain",
        content: [
          {
            tag_type: "p",
            text:
              "A chain references API Configs as steps. If an API Config is " +
              "updated, every chain that references it picks up the change.",
          },
        ],
      },
      {
        title: "Chain → Skill",
        content: [
          {
            tag_type: "p",
            text:
              "A Skill (AI Agent intent) references either a single API Config " +
              "or a full Chain. The agent is the user-facing name; the chain is " +
              "the actual execution.",
          },
        ],
      },
      {
        title: "Connection → Connector Action → Chain node",
        content: [
          {
            tag_type: "p",
            text:
              "A Connector Action wraps a Connection. The action is attached to " +
              "a chain node as a parallel trigger. When that node's API returns, " +
              "the action fires.",
          },
        ],
      },
    ],
  },

  {
    tag_type: "callout",
    type: "success",
    title: "Reuse across 70,000 restaurants",
    children: [
      {
        tag_type: "p",
        text:
          "Because every layer is a named resource that can be tenant-scoped and " +
          "attached on demand, a single tenant can serve 70,000 apps without " +
          "duplicating a single API config. The golden Auth Server and golden " +
          "chains live once. Each restaurant attaches the ones it needs. " +
          "Customization is additive, not replacing.",
      },
    ],
  },
];

export default integrationsApisWorkflowsPayload;