export const globalTenantSettings = [
  {
    tag_type: "h4",
    text: "Global Tenant Settings",
    selector_uid: "v2_global_tenant_settings",
  },
  {
    tag_type: "p",
    text: "The Global Tenant Settings page allows administrators to configure tenant-wide features that affect all applications under the tenant.",
  },
  {
    tag_type: "tabs",
    items: [
      {
        label: "Advanced Email Notifications",
        content: [
          {
            tag_type: "p",
            text: "Enables email notifications at various useful events across all applications. This toggle controls whether email alerts are sent for key system events.",
          },
          {
            tag_type: "h5",
            text: "📧 Available Notification Triggers",
          },
          {
            tag_type: "table",
            headers: ["Trigger", "Description", "Availability"],
            rows: [
              [
                "FIRST MSG ON ANY APP",
                "Triggers when the first message arrives on any app since admin went offline",
                "All Plans",
              ],
              [
                "FIRST MSG ON EVERY APP",
                "Triggers when the first message arrives on every app since admin went offline",
                "📌 ADVANCE Plan Only",
              ],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "Configuration Options",
            children: [
              {
                tag_type: "p",
                text: "Email notifications can be customized per event type. Configure which events trigger emails and the recipient list in the settings panel.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "Plan Restriction",
            children: [
              {
                tag_type: "p",
                text: '"FIRST MSG ON EVERY APP" is only available on the ADVANCE plan. Upgrade your plan to access this feature.',
              },
            ],
          },
        ],
      },
      {
        label: "Multi Admin",
        content: [
          {
            tag_type: "p",
            text: "Enables multi-administrator support for your tenant. This allows multiple users to have ADMIN-level access to the system.",
          },
          {
            tag_type: "h5",
            text: "✅ What Multi-Admin Enables",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Multiple administrators can manage the tenant",
              },
              {
                text: "Invite Support User feature becomes available",
              },
              {
                text: "Share Integration Steps feature becomes available",
              },
              {
                text: "Granular permission assignment for team members",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "danger",
            title: "🚫 Permanent Action - Cannot Be Undone",
            children: [
              {
                tag_type: "p",
                text: "Once enabled, Multi Admin cannot be disabled. This is a permanent system change that will:",
              },
              {
                tag_type: "ol",
                items: [
                  {
                    text: "Notify all active clients to sync the new settings",
                  },
                  {
                    text: "Log you out automatically — you'll need to log in again",
                  },
                  {
                    text: "Enable the 'Invite Support User' and 'Share Integration Steps' features",
                  },
                ],
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Before enabling Multi-Admin, ensure you have all necessary team members identified and their roles defined. This will streamline the permission assignment process.",
              },
            ],
          },
        ],
      },
    ],
  },
];
