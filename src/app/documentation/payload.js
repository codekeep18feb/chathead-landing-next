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
    // PLATFORM TAB - NEW SECTION WITH TABS AT LEAF LEVEL
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

        // ----- Global Level Settings -----
        {
          tag_type: "h3",
          text: "Global Level Settings",
          selector_uid: "v2_global_level_settings",
        },
        {
          tag_type: "p",
          text: "These settings apply across all applications within your tenant, providing centralized control over system-wide configurations. Only users with ADMIN or MANAGER role have access to these settings.",
        },

        // ----- Global Tenant Settings (with Tabs) -----
        {
          tag_type: "h4",
          text: "Global Tenant Settings",
          selector_uid: "v2_global_tenant_settings",
        },
        {
          tag_type: "p",
          text: "The Global Tenant Settings page allows administrators to configure tenant-wide features that affect all applications under the tenant.",
        },

        // Use tabs for the leaf-level settings
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
                  text: "Notification Triggers",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "FIRST MSG ON ANY APP - Triggers when the first message arrives on any app since admin went offline",
                    },
                    {
                      text: "FIRST MSG ON EVERY APP - Triggers when the first message arrives on every app since admin went offline",
                    },
                    {
                      text: "📌 (Available only on ADVANCE plan)",
                    },
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
                  text: "What Multi-Admin Enables",
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
                      text: "Share Developer integration steps",
                    },
                    {
                      text: "Granular permission assignment for team members",
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "warning",
                  title: "⚠️ Permanent Action - Cannot Be Undone",
                  children: [
                    {
                      tag_type: "p",
                      text: "Once enabled, Multi Admin cannot be disabled. This is a permanent system change that will:",
                    },
                    {
                      tag_type: "ul",
                      items: [
                        {
                          text: "Notify all active clients to sync the new settings",
                        },
                        {
                          text: "Log you out automatically — you'll need to log in again",
                        },
                        {
                          text: "Enable the 'Invite Support User' and 'Share Developer' features",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ----- Invite Support User (with Tabs) -----
        {
          tag_type: "h4",
          text: "Invite Support User",
          selector_uid: "v2_invite_support",
        },
        {
          tag_type: "p",
          text: "Invite team members as support users with granular permission controls. This feature allows you to add users with specific roles and permissions to manage your applications.",
        },

        // Use tabs for roles and permissions
        {
          tag_type: "tabs",
          items: [
            {
              label: "Available Roles",
              content: [
                {
                  tag_type: "h5",
                  text: "User Roles",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "MANAGER - Full access to manage applications, settings, and users",
                    },
                    {
                      text: "DEVELOPER - Access to API configuration, workflows, and technical settings",
                    },
                    {
                      text: "CUSTOMER_CARE_EXECUTIVE - Access to All Chats and user management",
                    },
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
              ],
            },
            {
              label: "Permission Types",
              content: [
                {
                  tag_type: "h5",
                  text: "App-Specific Permissions",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "read - View application data and settings",
                    },
                    {
                      text: "delete - Remove applications and resources",
                    },
                    {
                      text: "manage - Full administrative control over applications",
                    },
                  ],
                },
                {
                  tag_type: "h5",
                  text: "Create Permissions",
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
                  tag_type: "p",
                  text: "To invite a support user:",
                },
                {
                  tag_type: "ol",
                  items: [
                    {
                      text: "Navigate to 'Invite Support User' from the sidebar",
                    },
                    {
                      text: "Switch to 'Invite User' mode if not already selected",
                    },
                    {
                      text: "Enter the user's email address and optional full name",
                    },
                    {
                      text: "Select the roles to assign",
                    },
                    {
                      text: "Configure app-specific permissions",
                    },
                    {
                      text: "Click 'Send Invite' to send the invitation",
                    },
                  ],
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
              ],
            },
          ],
        },

        // ----- Whitelabel Domains -----
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

        // ----- App-Specific Settings (with Tabs) -----
        {
          tag_type: "h3",
          text: "App-Specific Configuration",
          selector_uid: "v2_app_settings",
        },
        {
          tag_type: "p",
          text: "Each application within your tenant has its own configuration sections. Access these by selecting the application from the sidebar.",
        },

        // Use tabs for app settings
        {
          tag_type: "tabs",
          items: [
            {
              label: "General Settings",
              content: [
                {
                  tag_type: "p",
                  text: "App-level configurations including version management, environment settings, and application metadata.",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "App name and description",
                    },
                    {
                      text: "Version and environment settings",
                    },
                    {
                      text: "Default language and timezone",
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "App Settings Location",
                  children: [
                    {
                      tag_type: "p",
                      text: "These settings are available under 'General Settings' in the app's sidebar navigation.",
                    },
                  ],
                },
              ],
            },
            {
              label: "AI Chat",
              content: [
                {
                  tag_type: "p",
                  text: "Configure AI agent behavior, response styles, and conversation flows. Manage training data and model parameters.",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "AI model selection and configuration",
                    },
                    {
                      text: "Response style and tone settings",
                    },
                    {
                      text: "Training data management",
                    },
                    {
                      text: "Conversation flow builder",
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "warning",
                  title: "Training Data",
                  children: [
                    {
                      tag_type: "p",
                      text: "Training data quality directly impacts AI response accuracy. Ensure your training data is clean and representative of your use case.",
                    },
                  ],
                },
              ],
            },
            {
              label: "LeadGen & FAQ",
              content: [
                {
                  tag_type: "p",
                  text: "Manage lead generation forms, FAQ content, and automated response workflows. Configure how leads are captured and routed.",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "FAQ content management",
                    },
                    {
                      text: "Lead capture forms",
                    },
                    {
                      text: "Automated response workflows",
                    },
                    {
                      text: "Lead routing and notification settings",
                    },
                  ],
                },
              ],
            },
            {
              label: "Theme Settings",
              content: [
                {
                  tag_type: "p",
                  text: "Customize appearance, branding colors, and UI components. Match the chat interface to your brand identity.",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "Color scheme and brand colors",
                    },
                    {
                      text: "Font and typography settings",
                    },
                    {
                      text: "Button and component styles",
                    },
                    {
                      text: "Chat widget positioning",
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "Brand Consistency",
                  children: [
                    {
                      tag_type: "p",
                      text: "Use your brand colors and fonts to create a seamless experience between your application and the Sageion chat interface.",
                    },
                  ],
                },
              ],
            },
            {
              label: "Credentials",
              content: [
                {
                  tag_type: "p",
                  text: "View and manage API credentials for your applications. Generate new API keys and monitor usage.",
                },
                {
                  tag_type: "ul",
                  items: [
                    {
                      text: "API key generation and management",
                    },
                    {
                      text: "Usage monitoring and analytics",
                    },
                    {
                      text: "Key rotation and security settings",
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "warning",
                  title: "Security Note",
                  children: [
                    {
                      tag_type: "p",
                      text: "Keep your API credentials secure. Never expose them in client-side code or public repositories.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        // ----- Summary -----
        {
          tag_type: "callout",
          type: "success",
          title: "✅ Platform Overview Complete",
          children: [
            {
              tag_type: "p",
              text: "The Sageion Platform provides a comprehensive set of tools to manage your chat applications, users, and system settings. For detailed configuration instructions, refer to the specific sections in this documentation.",
            },
          ],
        },
      ],
    },
  ],
};

export default payload;