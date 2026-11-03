// documentation/payload/versions/V2/platform/inviteSupportUser.js

const inviteSupportUserPayload = [
  {
    tag_type: "h2",
    text: "Multi-Admin and RBAC",
    selector_uid: "v2_invite_support",
  },
  {
    tag_type: "p",
    text:
      "Sageion supports multiple administrative users per tenant with role-based " +
      "access control. This is what allows a Restaurant CRM with 70,000 downstream " +
      "restaurants to delegate safely — a tenant admin can invite support staff " +
      "who see only what their role permits, without ever exposing the tenant's " +
      "root configuration.",
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
        "Super Admin (Tenant)",
        "Tenant-wide",
        "Manage tenant settings, invite admins, publish shared resources, rotate keypairs, access billing",
      ],
      [
        "Tenant Manager",
        "Tenant-wide (read-mostly)",
        "View tenant library, review audit logs, generate reports — cannot modify shared resources",
      ],
      [
        "App Developer",
        "App-scoped",
        "Attach shared resources, author skills, build chains, design response templates for their app",
      ],
      [
        "App Manager",
        "App-scoped",
        "Review metering, view audit logs, edit general settings for their app",
      ],
      [
        "Support Executive",
        "App-scoped (view)",
        "View app chats and failed AI messages — cannot edit workflows or APIs",
      ],
    ],
  },

  {
    tag_type: "h3",
    text: "Inviting a support user",
    selector_uid: "v2_invite_flow",
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Tenant admin opens Invite Support User",
        content: [
          { tag_type: "p", text: "From Global Level Settings, the admin selects the role and scope (tenant or specific app)." },
        ],
      },
      {
        title: "An invitation is sent",
        content: [
          { tag_type: "p", text: "The invite contains a signed link tied to the invited email. It expires in 7 days." },
        ],
      },
      {
        title: "The new user accepts",
        content: [
          { tag_type: "p", text: "They set a password, are assigned the role, and immediately see only the tabs their role permits." },
        ],
      },
      {
        title: "Revocation is one click",
        content: [
          { tag_type: "p", text: "The admin can revoke a user at any time. Their token invalidates on the next request." },
        ],
      },
    ],
  },

  {
    tag_type: "callout",
    type: "info",
    title: "Permissions are enforced server-side",
    children: [
      {
        tag_type: "p",
        text:
          "Role checks are not just hidden in the UI. Every API call validates " +
          "the caller's role and app scope. A support executive who somehow calls " +
          "the save-config endpoint directly still gets rejected by the backend.",
      },
    ],
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
      "can only see resources, workflows, and metering for that app. They cannot " +
      "modify tenant-scoped resources — they can only attach or detach them from " +
      "their app. This is what makes the 60K-base-user + 10K-power-user model " +
      "safe: the vast majority of power users are app-scoped, and their blast " +
      "radius is one restaurant.",
  },

  {
    tag_type: "h3",
    text: "Audit trail",
    selector_uid: "v2_audit_trail",
  },
  {
    tag_type: "p",
    text:
      "Every mutating action is logged with the user's identity, their role, the " +
      "app they acted on, and the before/after diff of the resource. The audit " +
      "log is available to tenant managers and is essential for billing disputes " +
      "at 70,000-restaurant scale.",
  },
];

export default inviteSupportUserPayload;