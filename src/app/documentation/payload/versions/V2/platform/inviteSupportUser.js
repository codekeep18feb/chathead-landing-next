export const inviteSupportUser = [
  {
    tag_type: "h4",
    text: "Invite Support User",
    selector_uid: "v2_invite_support",
  },
  {
    tag_type: "p",
    text: "Invite team members as support users with granular permission controls. This feature allows you to add users with specific roles and permissions to manage your applications.",
  },
  {
    tag_type: "callout",
    type: "info",
    title: "📌 Multi-Admin Required",
    children: [
      {
        tag_type: "p",
        text: "The Invite Support User feature requires Multi-Admin to be enabled in Global Tenant Settings first. This ensures proper permission hierarchy and security.",
      },
    ],
  },
  {
    tag_type: "tabs",
    items: [
      {
        label: "Available Roles",
        content: [
          {
            tag_type: "h5",
            text: "👤 User Roles",
          },
          {
            tag_type: "table",
            headers: ["Role", "Access Level", "Primary Responsibilities"],
            rows: [
              ["MANAGER", "Full Access", "Manage applications, settings, and users"],
              ["DEVELOPER", "Technical Access", "API configuration, workflows, and technical settings"],
              ["CUSTOMER_CARE_EXECUTIVE", "Limited Access", "All Chats and user management"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "Role Assignment",
            children: [
              {
                tag_type: "p",
                text: "Users can be assigned multiple roles. The combination of roles determines the user's overall permissions.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Best Practice",
            children: [
              {
                tag_type: "p",
                text: "Assign the minimum required roles to each user to maintain security best practices.",
              },
            ],
          },
        ],
      },
      {
        label: "Permission Types",
        content: [
          {
            tag_type: "h5",
            text: "🔑 App-Specific Permissions",
          },
          {
            tag_type: "table",
            headers: ["Permission", "Description", "Use Case"],
            rows: [
              ["read", "View application data and settings", "Read-only access"],
              ["delete", "Remove applications and resources", "Cleanup and maintenance"],
              ["manage", "Full administrative control", "Complete app management"],
            ],
          },
          {
            tag_type: "h5",
            text: "✨ Create Permissions",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "create_apps - Allows creating new applications",
              },
              {
                text: "create_users - Allows creating new users (automatically includes write permission)",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "Permission Levels",
            children: [
              {
                tag_type: "p",
                text: "Permissions can be assigned at the app level or globally. App-specific permissions override global permissions when both are configured.",
              },
            ],
          },
        ],
      },
      {
        label: "How to Invite",
        content: [
          {
            tag_type: "h5",
            text: "📋 Step-by-Step Process",
          },
          {
            tag_type: "steps",
            items: [
              {
                title: "Navigate to Invite Support User",
                content: [
                  {
                    tag_type: "p",
                    text: "Access this page from the sidebar under 'Global Level Settings'.",
                  },
                ],
              },
              {
                title: "Select Mode",
                content: [
                  {
                    tag_type: "p",
                    text: "Switch to 'Invite User' mode if not already selected.",
                  },
                ],
              },
              {
                title: "Enter User Details",
                content: [
                  {
                    tag_type: "p",
                    text: "Enter the user's email address and optional full name.",
                  },
                ],
              },
              {
                title: "Assign Roles & Permissions",
                content: [
                  {
                    tag_type: "p",
                    text: "Select the roles to assign and configure app-specific permissions.",
                  },
                ],
              },
              {
                title: "Send Invite",
                content: [
                  {
                    tag_type: "p",
                    text: "Click 'Send Invite' to send the invitation. The user will receive an email with access instructions.",
                  },
                ],
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "✅ Invitation Flow",
            children: [
              {
                tag_type: "p",
                text: "The invited user will receive an email with a link to accept the invitation. Once accepted, they can access the system with the assigned permissions.",
              },
            ],
          },
        ],
      },
    ],
  },
];
