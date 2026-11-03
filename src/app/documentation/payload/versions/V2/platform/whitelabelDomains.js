// documentation/payload/versions/V2/platform/whitelabelDomains.js

const whitelabelDomainsPayload = [
  {
    tag_type: "h2",
    text: "Whitelabel & Billing Granularity",
    selector_uid: "v2_whitelabel_domains",
  },
  {
    tag_type: "p",
    text:
      "The platform is designed to be invisible to the end restaurant. Every " +
      "domain, every screen, and every metered event can be attributed to a " +
      "specific app — which means the CRM vendor can bill each restaurant " +
      "individually without ever touching the underlying SaaS.",
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
      "under the tenant's own brand. When an end user hits {{ ai.yourcrm.com }} " +
      "or {{ agent.restaurant-chain.com }}, they see your product — not Sageion.",
  },

  {
    tag_type: "table",
    headers: ["Scope", "Domain example", "Who controls it"],
    rows: [
      ["Tenant", "ai.yourcrm.com", "Tenant admin"],
      ["App", "agent.restaurant-123.com", "App developer"],
    ],
  },

  {
    tag_type: "h3",
    text: "The billing primitive: per-app metering",
    selector_uid: "v2_billing_granularity",
  },
  {
    tag_type: "p",
    text:
      "Every execution the agent runs is stamped with two tags:",
  },
  {
    tag_type: "ul",
    items: [
      { tag_type: "li", text: "{{ app_name }} — which restaurant/tenant this action belongs to." },
      { tag_type: "li", text: "{{ user_identity }} — which logged-in user triggered it (from your auth server)." },
    ],
  },

  {
    tag_type: "p",
    text:
      "These two tags are the entire billing surface. A CRM vendor takes the " +
      "metering export and produces a per-restaurant invoice directly. No " +
      "mapping layer between \"agent runs\" and \"which customer owes what\" is " +
      "needed. This is why 70,000 restaurants can be billed without a separate " +
      "billing system.",
  },

  {
    tag_type: "callout",
    type: "success",
    title: "Invoice-shaped metering",
    children: [
      {
        tag_type: "p",
        text:
          "The metering dashboard exports columns the CRM vendor already uses: " +
          "app name, restaurant name, executions, async runs, retention days, " +
          "billing period. It is the same shape as their existing invoice. " +
          "The vendor does not need to staff a data pipeline to reconcile it.",
      },
    ],
  },

  {
    tag_type: "h3",
    text: "Storage of PII",
    selector_uid: "v2_pii_storage",
  },
  {
    tag_type: "p",
    text:
      "By default, the runtime stores zero API requests and zero API responses. " +
      "Retention is opt-in per app and per resource. If the restaurant needs " +
      "audit logs for compliance, they enable retention on the specific APIs " +
      "that require it — the rest stay ephemeral. Nothing is billed for storage " +
      "unless the app opts in.",
  },
];

export default whitelabelDomainsPayload;