export const backendIntegration = [
  {
    tag_type: "h2",
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
              ["app_name", "string", "Your registered Sageion application name"],
              ["version", "string", "for BYO Auth Chat API version is `V2`"],
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
];
