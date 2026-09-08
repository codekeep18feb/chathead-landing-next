// Example payload with additional tags and Lorem Ipsum content
export const versionSlugMap = {
  V2: "byo",
};

const payload = {
  V2: [
    // ============================================================
    // HEADER SECTION
    // ============================================================
    {
      tag_type: "h2",
      text: `[V2] BYO (Bring Your Own) Auth + Chat`,
    },
    {
      tag_type: "p",
      text: `Designed for products with their own backend and authentication, this version gives you full control over user onboarding, syncing, and logout while seamlessly integrating powerful Sageion capabilities.`,
    },

    // ============================================================
    // PREREQUISITE SECTION
    // ============================================================
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Prerequisite",
          selector_uid: "v2_prerequisites",
        },
        {
          tag_type: "ol",
          items: [
            {
              text: "Signup/Login to your account at Sageion.",
              link_parts: [
                {
                  text: "Signup/Login",
                  link: "https://www.google.com/",
                },
              ],
            },
            {
              tag_type: "li",
              text: "Create a New App and be sure to select Version V2 during setup.",
            },
            {
              tag_type: "li",
              text: "Navigate to the App Details page and note your: App Name, API Key, Tenant ID",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PROJECT SETUP - CLIENT SIDE INTEGRATION
    // ============================================================
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Project setup",
          selector_uid: "v2_client_integration",
        },
        {
          tag_type: "h4",
          text: "Client Side Integration",
        },
        {
          tag_type: "p",
          text: "To integrate it into your app, Do the following.",
        },
        {
          tag_type: "div",
          className: "custom-ordered-list",
          children: [
            {
              tag_type: "div",
              className: "custom-list-item",
              children: [
                {
                  tag_type: "div",
                  className: "list-item-header",
                  text: "1. Load The Scripts",
                },
                {
                  tag_type: "div",
                  className: "sub-items-container",
                  children: [
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "p",
                          text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                        },
                        {
                          tag_type: "p",
                          text: "It should ideally be placed head of the root file.",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                        },
                      ],
                    },
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: '<script src="https://sageion-core.github.io/prod-ssc-client-cdns/bundle.js">\n</script>',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag_type: "div",
          className: "custom-list-item",
          children: [
            {
              tag_type: "h3",
              className: "list-item-header",
              text: "2. Decide the placement of the Sageion chat box in your app.",
            },
          ],
        },
        {
          tag_type: "tabs",
          items: [
            {
              label: "Centralized Implementation:",
              content: [
                {
                  tag_type: "h4",
                  text: "Centralized Implementation: ",
                },
                {
                  tag_type: "p",
                  text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route), combine both setUp and initialize logic in a single location.",
                },
                {
                  tag_type: "p",
                  text: "This ensures the chatbox renders consistently across all routes and avoids code duplication across screens.",
                },
                {
                  tag_type: "h4",
                  text: "Final Implementation",
                },
                {
                  tag_type: "p",
                  text: "For single-route applications where the chat interface should appear universally, use this centralized approach:",
                },
                {
                  tag_type: "div",
                  className: "sub-items-container",
                  children: [
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "h4",
                          text: "Step 1 + Step 2 – Show the chatbox on all pages under a specific root route.",
                        },
                        {
                          tag_type: "p",
                          text: "Run the setUp function at your application's entry point (usually the landing page or root URL) to ensure it loads immediately when the application starts.",
                        },
                        {
                          tag_type: "code_with_copy",
                          code: `
<script>
  document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await window.profileDataPromise; // Change this line to match how your application retrieves profile data

    if (!profileData) {
      await window.magicchat_io.setUp(
        "v2_app1",
        "bGVnYWwxMTFfX1NFUFJBVE9SX192Ml9hcHAx"
      );
    } else {
      await window.magicchat_io.initialize({
        app_version: "V2",
        uid: profileData.username,
      });
    }
  });
</script>`,
                          language: "javascript",
                        },
                        {
                          tag_type: "callout",
                          type: "info",
                          title: "Parameter Details",
                          children: [
                            {
                              tag_type: "table",
                              headers: ["Parameter", "Type", "Description"],
                              rows: [
                                [
                                  "app_name",
                                  "string",
                                  "Unique application identifier",
                                ],
                                ["api_key", "string", "Base64 encoded API key"],
                              ],
                            },
                            {
                              tag_type: "callout",
                              type: "warning",
                              title: "Critical Requirement",
                              children: [
                                {
                                  tag_type: "p",
                                  text: "The setUp function must execute before initialize in all cases.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "h4",
                  text: "Example Implementation",
                  selector_uid: "v2_code_example",
                },
                {
                  tag_type: "p",
                  text: "View complete implementation examples in our GitHub repository:",
                },
                {
                  tag_type: "a",
                  href: "https://github.com/sageion-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
                  text: "View Implementation Example",
                },
              ],
            },
            {
              label: "Route-Specific Implementation",
              content: [
                {
                  tag_type: "h4",
                  text: "Route-Specific Implementation",
                },
                {
                  tag_type: "p",
                  text: "To limit chat functionality to specific routes:",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "Run the `setUp` function on initial screen load and run the `initialize` only on screens where chat is needed",
                    },
                    {
                      text: "Use the initialize method on specific route components",
                    },
                    {
                      text: "Provides more control over chat visibility",
                    },
                  ],
                },
                {
                  tag_type: "h4",
                  text: "Final Implementation",
                },
                {
                  tag_type: "p",
                  text: "For multi-route applications where the chat interface should appear selectively, use this route-specific approach:",
                },
                {
                  tag_type: "div",
                  className: "sub-items-container",
                  children: [
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "h4",
                          text: "Step 1 – Setup on Initial Landing Pages",
                        },
                        {
                          tag_type: "p",
                          text: "Run the setUp function at your application's entry point (usually the landing page or root URL) to ensure it loads immediately when the application starts.",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: `
<script>
  document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await window.profileDataPromise; // Change this line to match how your application retrieves profile data

    if (!profileData) {
      await window.magicchat_io.setUp(
        "v2_app1",
        "bGVnYWwxMTFfX1NFUFJBVE9SX192Ml9hcHAx"
      );
    } 
  });
</script>`,
                        },
                        {
                          tag_type: "callout",
                          type: "info",
                          title: "Parameter Details",
                          children: [
                            {
                              tag_type: "table",
                              headers: ["Parameter", "Type", "Description"],
                              rows: [
                                [
                                  "app_name",
                                  "string",
                                  "Unique application identifier",
                                ],
                                ["api_key", "string", "Base64 encoded API key"],
                              ],
                            },
                            {
                              tag_type: "callout",
                              type: "warning",
                              title: "Critical Requirement",
                              children: [
                                {
                                  tag_type: "p",
                                  text: "The setUp function must execute before initialize in all cases.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "h4",
                          text: "Step 2 – Initialize Chat on Target Pages",
                        },
                        {
                          tag_type: "p",
                          text: "Execute the initialize function on any page where the chat interface should appear (e.g., in the bottom-right corner).",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: `
<script>
  document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await window.profileDataPromise; // Change this line to match how your application retrieves profile data

    if (profileData) {
      await window.magicchat_io.initialize({
        app_version: "V2",
        uid: profileData.username,
      });
    }
  });
</script>`,
                        },
                        {
                          tag_type: "callout",
                          type: "info",
                          title: "Parameter Details",
                          children: [
                            {
                              tag_type: "table",
                              headers: ["Parameter", "Type", "Description"],
                              rows: [
                                [
                                  "app_version",
                                  "string",
                                  "Sageion application version",
                                ],
                              ],
                            },
                            {
                              tag_type: "mesgTip",
                              title: "Version Validation",
                              children: [
                                {
                                  tag_type: "p",
                                  text: "Verify the correct app_version is specified.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "h4",
                  text: "Example Implementation",
                },
                {
                  tag_type: "p",
                  text: "View complete implementation examples in our GitHub repository:",
                },
                {
                  tag_type: "a",
                  href: "https://github.com/sageion-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
                  text: "View Implementation Example",
                },
              ],
            },
          ],
        },
        // ============================================================
        // BACKEND INTEGRATION
        // ============================================================
        {
          tag_type: "h1",
          text: "Connecting Sageion to Your Product's Authentication",
        },
        {
          tag_type: "h2",
          text: "Backend Integration",
          selector_uid: "v2_backend_integration",
        },
        {
          tag_type: "p",
          text: "For platforms with existing authentication systems, Sageion requires user onboarding to establish identity mapping between your platform users and Sageion accounts.",
        },
        {
          tag_type: "callout",
          type: "info",
          title: "Key Integration Requirement",
          children: [
            {
              tag_type: "p",
              text: "Each new user must be onboarded with a unique identifier (UID) that serves as the proxy between your platform and Sageion's user management system.",
            },
          ],
        },
        {
          tag_type: "h3",
          text: "Onboarding API",
        },
        {
          tag_type: "p",
          text: "Successfully onboarded users will appear in the Sageion Admin Panel with their associated applications.",
        },
        {
          tag_type: "steps",
          items: [
            {
              title: "Admin Panel - Onboarded Users",
              content: [
                {
                  tag_type: "img",
                  src: "/Asset/onboarded_user.png",
                  alt: "Sageion Admin Panel showing onboarded users",
                },
              ],
            },
            {
              title: "Admin Panel - No Users",
              content: [
                {
                  tag_type: "p",
                  text: "Applications without onboarded users will display an empty state:",
                },
                {
                  tag_type: "img",
                  src: "/Asset/no_users_admin.png",
                  alt: "Sageion Admin Panel showing no onboarded users",
                },
              ],
            },
          ],
        },
        {
          tag_type: "h3",
          text: "User Onboarding Methods",
        },
        {
          tag_type: "tabs",
          items: [
            {
              label: "Backend Integration",
              content: [
                {
                  tag_type: "h4",
                  text: "REST API Endpoint",
                },
                {
                  tag_type: "p",
                  text: "Use our onboarding API to programmatically register users:",
                },
                {
                  tag_type: "code_with_copy",
                  code: "POST https://auth.addchat.tech/dev/onboarding",
                  language: "http",
                },
                {
                  tag_type: "h4",
                  text: "Request Example",
                },
                {
                  tag_type: "code_with_copy",
                  code: `curl --location 'https://auth.addchat.tech/dev/onboarding' \\
      --header 'X-API-Key: APP_REST_API_KEY' \\
      --header 'Content-Type: application/json' \\
      --data '{
        "uid": "unique_user_identifier_123",
        "app_name": "your_application_name",
        "version": "V2"
      }'`,
                  language: "bash",
                },
                {
                  tag_type: "table",
                  headers: ["Parameter", "Type", "Description"],
                  rows: [
                    ["uid", "string", "Your platform's unique user identifier"],
                    [
                      "app_name",
                      "string",
                      "Your registered Sageion application name",
                    ],
                    [
                      "version",
                      "string",
                      "for BYO Auth Chat API version is `V2`",
                    ],
                  ],
                },
              ],
            },
            {
              label: "Frontend Integration",
              content: [
                {
                  tag_type: "h4",
                  text: "Client-Side Onboarding",
                },
                {
                  tag_type: "p",
                  text: "Call the onboarding method directly from your frontend code:",
                },
                {
                  tag_type: "code_with_copy",
                  code: `await window.magicchat_io.onboarding(
        { 
          "uid": "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" 
        },
        {
          "version": "V2",
          "app_name": "your_application_name"
        }
      )`,
                  language: "javascript",
                },
                {
                  tag_type: "callout",
                  type: "warning",
                  title: "Implementation Note",
                  children: [
                    {
                      tag_type: "p",
                      text: "This method should be called immediately after successful user registration in your application.",
                    },
                  ],
                },
              ],
            },
            {
              label: "Admin Panel",
              content: [
                {
                  tag_type: "h4",
                  text: "Manual User Onboarding",
                },
                {
                  tag_type: "p",
                  text: "Manually onboard users through the Sageion Admin Interface:",
                },
                {
                  tag_type: "img",
                  src: "/Asset/onboarding_via_admin.png",
                  alt: "Sageion Admin Panel user onboarding interface",
                },
                {
                  tag_type: "steps",
                  items: [
                    {
                      title: "Navigate to Users Section",
                      content: [
                        {
                          tag_type: "p",
                          text: "Access the Users management area in your application's admin panel",
                        },
                      ],
                    },
                    {
                      title: "Select 'Add User'",
                      content: [
                        {
                          tag_type: "p",
                          text: "Complete the user creation form with required details",
                        },
                      ],
                    },
                    {
                      title: "Share Credentials",
                      content: [
                        {
                          tag_type: "p",
                          text: "Provide the generated credentials to the end-user through secure channels",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag_type: "h3",
          text: "Logout Cleanup",
        },
        {
          tag_type: "p",
          text: "Since authentication is managed locally within your own platform, it is essential to also clean up the Sageion session when a user logs out from your system.",
        },
        {
          tag_type: "callout",
          type: "warning",
          title: "Important Cleanup Step",
          children: [
            {
              tag_type: "p",
              text: "Failing to call this method may result in session persistence, causing the chatbox to remain visible after logout.",
            },
          ],
        },
        {
          tag_type: "h4",
          text: "Usage",
        },
        {
          tag_type: "code_with_copy",
          code: `window.magicchat_io.logout?.();`,
          language: "javascript",
        },
        {
          tag_type: "p",
          text: "You should call this method immediately when your user logs out. It ensures Sageion cleans up all user-related sessions and data.",
        },
        {
          tag_type: "h4",
          text: "Example Implementation",
        },
        {
          tag_type: "p",
          text: "See the following GitHub example where logout cleanup is properly handled:",
        },
        {
          tag_type: "a",
          href: "https://github.com/sageion-core/example__v2/blob/402cbcd3d07fc8cca952fdf6ed1c18b5a2a90b1a/templates/base.html#L95",
          text: "Logout Example on GitHub",
        },
        {
          tag_type: "callout",
          type: "info",
          title: "Implementation Best Practices",
          children: [
            {
              tag_type: "ul",
              items: [
                {
                  text: "Trigger onboarding immediately after user registration",
                },
                {
                  text: "For bulk onboarding of existing users, contact our support team for batch processing options",
                },
                {
                  text: "Don't miss to logout to perform cleanup whenever user is logging out of your platform.",
                },
              ],
            },
          ],
        },
      ],
    },

    // ============================================================
    // PLATFORM TAB - FOCUSED ON GLOBAL LEVEL SETTINGS
    // Based on the sidebar structure from the screenshot
    // ============================================================
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Platform",
          selector_uid: "v2_platform_overview",
        },
        {
          tag_type: "p",
          text: "The Sageion Admin Platform provides comprehensive tools for managing your chat applications, users, and system settings. Below is an overview of the key sections available in the Admin UI.",
        },

        // ============================================================
        // GLOBAL LEVEL SETTINGS - Main Section
        // ============================================================
        {
          tag_type: "h3",
          text: "Global Level Settings",
          selector_uid: "v2_global_level_settings",
        },
        {
          tag_type: "p",
          text: "These settings apply across all applications within your tenant, providing centralized control over system-wide configurations.",
        },
        {
          tag_type: "callout",
          type: "warning",
          title: "🔐 Admin Access Required",
          children: [
            {
              tag_type: "p",
              text: "Only users with ADMIN or MANAGER role have access to these settings. If you don't see these options, contact your system administrator.",
            },
          ],
        },

        // ============================================================
        // 1. GLOBAL TENANT SETTINGS
        // ============================================================
        {
          tag_type: "h4",
          text: "Global Tenant Settings",
          selector_uid: "v2_global_tenant_settings" ,
        },
        {
          tag_type: "p",
          text: "The Global Tenant Settings page allows administrators to configure tenant-wide features that affect all applications under the tenant.",
        },

        // Use tabs for the two main settings
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

        // ============================================================
        // 2. INVITE SUPPORT USER
        // ============================================================
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

        // Use tabs for the different aspects
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
                    [
                      "MANAGER",
                      "Full Access",
                      "Manage applications, settings, and users",
                    ],
                    [
                      "DEVELOPER",
                      "Technical Access",
                      "API configuration, workflows, and technical settings",
                    ],
                    [
                      "CUSTOMER_CARE_EXECUTIVE",
                      "Limited Access",
                      "All Chats and user management",
                    ],
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

        // ============================================================
        // 3. WHITELABEL DOMAINS
        // ============================================================
        {
          tag_type: "h4",
          text: "Whitelabel Domains",
          selector_uid: "v2_whitelabel_domains",
        },
        {
          tag_type: "p",
          text: "Configure custom domains for your applications to maintain brand consistency. This allows you to serve the Sageion chat interface from your own domain.",
        },
        {
          tag_type: "h5",
          text: "Available Features",
        },
        {
          tag_type: "ul",
          items: [
            {
              text: "Add custom domain names for your applications",
            },
            {
              text: "SSL certificate management",
            },
            {
              text: "DNS configuration guidance",
            },
          ],
        },
        {
          tag_type: "callout",
          type: "info",
          title: "DNS Configuration Guide",
          children: [
            {
              tag_type: "p",
              text: "To set up a custom domain:",
            },
            {
              tag_type: "ol",
              items: [
                {
                  text: "Add your domain in the Whitelabel Domains section",
                },
                {
                  text: "Configure DNS records as instructed",
                },
                {
                  text: "Wait for DNS propagation (24-48 hours)",
                },
                {
                  text: "Verify the domain and enable SSL",
                },
              ],
            },
          ],
        },
        {
          tag_type: "callout",
          type: "success",
          title: "✅ Setup Complete",
          children: [
            {
              tag_type: "p",
              text: "Once configured, your chat interface will be served from your custom domain, providing a seamless brand experience for your users.",
            },
          ],
        },

        // ============================================================
        // PLATFORM SUMMARY
        // ============================================================
        {
          tag_type: "h3",
          text: "Platform Navigation Summary",
          selector_uid: "v2_platform_summary",
        },
        {
          tag_type: "p",
          text: "The Global Level Settings section contains three main configuration areas:",
        },

        // Use accordion for quick navigation guide
        {
          tag_type: "accordion",
          title: "📖 Quick Navigation Guide",
          children: [
            {
              tag_type: "ul",
              items: [
                {
                  text: "Global Tenant Settings → Configure email notifications and Multi-Admin",
                },
                {
                  text: "Invite Support User → Add team members with specific roles",
                },
                {
                  text: "Whitelabel Domains → Set up custom domains for branding",
                },
              ],
            },
          ],
        },

        // Final Summary Callout
        {
          tag_type: "callout",
          type: "success",
          title: "✅ Platform Overview Complete",
          children: [
            {
              tag_type: "p",
              text: "The Sageion Platform provides a comprehensive set of tools to manage your chat applications, users, and system settings.",
            },
            {
              tag_type: "p",
              text: "For detailed configuration instructions, refer to the specific sections in this documentation or contact our support team for assistance.",
            },
          ],
        },

        // Breadcrumbs showing platform hierarchy
        {
          tag_type: "breadcrumbs",
          items: [
            { label: "Home", href: "/" },
            { label: "Documentation", href: "/documentation" },
            { label: "V2 BYO Auth Chat", href: "/documentation/V2" },
            { label: "Platform" },
          ],
        },
      ],
    },
  ],
};

export default payload;