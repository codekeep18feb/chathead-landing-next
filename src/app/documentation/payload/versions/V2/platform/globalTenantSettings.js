// documentation/payload/versions/V2/platform/globalTenantSettings.js

const globalTenantSettingsPayload = [
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
    tag_type: "steps",
    items: [
      {
        title: "Tenant admin builds a base resource",
        content: [
          {
            tag_type: "p",
            text:
              "The tenant admin creates a shared API config, chain, auth server, " +
              "connector definition, or OAuth connection. It lives in the tenant library " +
              "and is not yet visible to any app.",
          },
        ],
      },
      {
        title: "Tenant admin publishes it",
        content: [
          {
            tag_type: "p",
            text:
              "The resource remains tenant-scoped. It is not attached to any app. " +
              "Any app that wants to use it must now opt in.",
          },
        ],
      },
      {
        title: "App developer attaches it",
        content: [
          {
            tag_type: "p",
            text:
              "Inside the app's API Config, ChainApis, or Connections tab, the " +
              "developer sees the shared library and clicks Attach on the specific " +
              "resources their app needs. Nothing is auto-attached.",
          },
        ],
      },
      {
        title: "The app consumes it",
        content: [
          {
            tag_type: "p",
            text:
              "Attached resources now appear in dropdowns for that app's skills " +
              "and workflows. Changes the tenant admin makes to the resource flow " +
              "into the app immediately, unless the app has overridden it with " +
              "its own app-scoped version.",
          },
        ],
      },
    ],
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
          "blocking apps. Nothing is silently broken. This is what allows 70,000 " +
          "restaurants to share infrastructure without accidental cross-tenant damage.",
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
      "for that app only. Other apps continue using the tenant version untouched.",
  },

  {
    tag_type: "table",
    headers: ["Resource type", "Tenant scope", "App scope", "Override behavior"],
    rows: [
      ["API Config", "Shared endpoint", "App-specific endpoint", "App version shadows tenant"],
      ["Chain", "Shared workflow", "App-specific workflow", "App version shadows tenant"],
      ["Auth Server", "Shared login server", "App-specific login server", "App version shadows tenant"],
      ["OAuth Connection", "Shared grant", "App-scoped grant", "App uses its own grant"],
      ["Connector Action", "Shared trigger", "App-scoped trigger", "App version shadows tenant"],
    ],
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
      "everything by attaching, without duplicating infrastructure. The power " +
      "users (franchise managers, developers) only edit what their specific app " +
      "actually needs, which is a small fraction of the total surface.",
  },

  {
    tag_type: "callout",
    type: "info",
    title: "The math",
    children: [
      {
        tag_type: "p",
        text:
          "60,000 base users × 1 attached app each = 60,000 app rows. " +
          "10,000 power users × ~7 apps each (franchise managers) = 70,000 app rows total. " +
          "One tenant admin team maintains the shared library. The platform's " +
          "metering is per-app-execution, so the CRM vendor bills the restaurant " +
          "directly at whatever granularity they choose.",
      },
    ],
  },

  {
    tag_type: "h3",
    text: "Tenant admin responsibilities",
    selector_uid: "v2_tenant_admin_duties",
  },
  {
    tag_type: "ul",
    items: [
      { tag_type: "li", text: "Publish shared API configs and chains used by every app." },
      { tag_type: "li", text: "Maintain the tenant-wide login server configuration." },
      { tag_type: "li", text: "Rotate the tenant encryption keypair on schedule." },
      { tag_type: "li", text: "Review attached apps before deleting a shared resource." },
      { tag_type: "li", text: "Audit metering dashboards for billing reconciliation." },
    ],
  },

  {
    tag_type: "h3",
    text: "App developer responsibilities",
    selector_uid: "v2_app_dev_duties",
  },
  {
    tag_type: "ul",
    items: [
      { tag_type: "li", text: "Attach only the shared resources this app uses." },
      { tag_type: "li", text: "Build skills and workflows for this app's restaurant(s)." },
      { tag_type: "li", text: "Design response templates for this app's branding." },
      { tag_type: "li", text: "Override tenant resources only when there's a real need." },
      { tag_type: "li", text: "Test async callbacks and human-in-the-loop pauses before publishing." },
    ],
  },
];

export default globalTenantSettingsPayload;