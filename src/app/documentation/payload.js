// Example payload with additional tags and Lorem Ipsum content
const payload = {
  V1: [
  {
    "tag_type": "h2",
    "text": "Instant Auth + Chat [V1]"
  },
  {
    "tag_type": "p",
    "text": "This chat application solution is designed for simple websites built with HTML, JavaScript, and CSS, typically informational sites. It's ideal for products lacking built-in authentication that require seamless integration of both authentication and chat functionality."
  },
  {
    "tag_type": "div",
    "children": [
      {
        "tag_type": "h2",
        "text": "Prerequisites"
      },
      {
        "tag_type": "p",
        "text": "To integrate chat into your application, complete the following steps:"
      },
      {
        "tag_type": "ol",
        "items": [
          {
            "text": "Sign up or log in to your MagicChat account.",
            "link_parts": [
              {
                "text": "Sign up or log in",
                "link": "https://www.google.com/"
              }
            ]
          },
          {
            "tag_type": "li",
            "text": "Create an application according to your use case. (Ensure you select the appropriate Mode: Headless or Headful)"
          },
          {
            "tag_type": "li",
            "text": "Navigate to your created app's detail page and locate the credentials."
          }
        ]
      }
    ]
  },
  {
    "tag_type": "div",
    "children": [
      {
        "tag_type": "h2",
        "text": "Project Setup"
      },
      {
        "tag_type": "p",
        "text": "To integrate chat into your application, follow these steps:"
      },
      {
        "tag_type": "div",
        "className": "custom-ordered-list",
        "children": [
          {
            "tag_type": "div",
            "className": "custom-list-item",
            "children": [
              {
                "tag_type": "div",
                "className": "list-item-header",
                "text": "1. Load Required Scripts"
              },
              {
                "tag_type": "div",
                "className": "sub-items-container",
                "children": [
              {
                "tag_type": "div",
                "children": [
                  {
                    "tag_type": "p",
                    "text": "Locate your main entry file (typically index.html) and insert this code snippet into the <head> section. Place it before other dependencies for optimal loading."
                  },
                  {
                    "tag_type": "code",
                    "show_copy": true,
                    "text": '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>'
                  }
                ]
              },
              {
                "tag_type": "div",
                "children": [
                  {
                    "tag_type": "code",
                    "show_copy": true,
                    "text": '<script src="https://cdn.jsdelivr.net/gh/magicchat-core/prod-ssc-client-cdns@v0.1.8/bundle.js"></script>'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "tag_type": "div",
        "className": "custom-list-item",
        "children": [
          {
            "tag_type": "div",
            "className": "list-item-header",
            "text": "2. MagicChat Setup Requires Two Steps"
          },
          {
            "tag_type": "div",
            "className": "sub-items-container",
            "children": [
              {
                "tag_type": "div",
                "children": [
                  {
                    "tag_type": "h4",
                    "text": "Step 1 – Setup on Initial Landing Pages"
                  },
                  {
                    "tag_type": "p",
                    "text": "Execute the setUp function on your application's entry point (typically the landing page or root URL). This applies to screen users encounter before authentication."
                  },
                  {
                    "tag_type": "code",
                    "show_copy": true,
                    "text": `
<script>
  document.addEventListener("DOMContentLoaded", async function () {
    await window.magicchat_io.setUp(
      "TEST_v4", // app_name
      "bGVnYWwxMTFfX1NFUFJBVE9SX19URVNUX3Y0", // api_key
      false, // header_req (true by default)
    );
  });
</script>`
                  },
                  {
                    "tag_type": "callout",
                    "type": "info",
                    "title": "Parameter Details",
                    "children": [
                      {
                        "tag_type": "table",
                        "headers": ["Parameter", "Type", "Description"],
                        "rows": [
                          ["app_name", "string", "Unique application identifier"],
                          ["api_key", "string", "Base64 encoded API key"],
                          ["header_req", "boolean", "Display header with user controls"]
                        ]
                      },
                      {
                        "tag_type": "callout",
                        "type": "warning",
                        "title": "Critical Requirement",
                        "children": [
                          {
                            "tag_type": "p",
                            "text": "The setUp function must execute before initialize in all cases."
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "tag_type": "div",
                "children": [
                  {
                    "tag_type": "h4",
                    "text": "Step 2 – Initialize Chat on Target Pages"
                  },
                  {
                    "tag_type": "p",
                    "text": "Execute the initialize function on any page where the chat interface should appear (e.g., in the bottom-right corner)."
                  },
                  {
                    "tag_type": "code",
                    "show_copy": true,
                    "text": `
<script>
  document.addEventListener("DOMContentLoaded", async function () {
    await window.magicchat_io.initialize({"app_version":"V4"});
  });
</script>`
                  },
                  {
                    "tag_type": "callout",
                    "type": "info",
                    "title": "Parameter Details",
                    "children": [
                      {
                        "tag_type": "table",
                        "headers": ["Parameter", "Type", "Description"],
                        "rows": [
                          ["app_version", "string", "MagicChat application version"]
                        ]
                      },
                      {
                        "tag_type": "mesgTip",
                        "title": "Version Validation",
                        "children": [
                          {
                            "tag_type": "p",
                            "text": "Verify the correct app_version is specified."
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "tag_type": "h4",
    "text": "Final Implementation"
  },
  {
    "tag_type": "p",
    "text": "For single-route applications where the chat interface should appear universally, use this centralized approach:"
  },
  {
    "tag_type": "code_with_copy",
    "code": `
<script>
  document.addEventListener("DOMContentLoaded", async function () {
    // Step 1: Initial setup
    await window.magicchat_io.setUp(
      "TEST_v4",
      "bGVnYWwxMTFfX1NFUFJBVE9SX19URVNUX3Y0", 
      false
    );
    
    // Step 2: Initialize chat
    await window.magicchat_io.initialize({"app_version":"V4"});
  });
</script>`,
    "language": "javascript"
  },
  {
    "tag_type": "h4",
    "text": "Example Implementation"
  },
  {
    "tag_type": "p",
    "text": "View complete implementation examples in our GitHub repository:"
  },
  {
    "tag_type": "a",
    "href": "https://github.com/magicchat-core/example__v1/blob/36f2c0984cea15932538cb448823df83a8aa98dd/index.html#L33",
    "text": "View Implementation Example"
  },
  
  {
  tag_type: "tabs",
  items: [
    {
      label: "Centralized Implementation",
      content: [
        {
          tag_type: "h4",
          text: "Centralized Implementation",
        },
        {
          tag_type: "p",
          text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route):",
        },
        {
          tag_type: "ul",
          items: [
            { text: "Combine both setUp and initialize logic in a single location" },
            { text: "This ensures the chatbox renders consistently across all routes" },
            { text: "Avoids code duplication across screens" },
          ],
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
            { text: "Run the `setUp` function on initial screen load and run the `initialize` only on screens where chat is needed" },
            { text: "Use the initialize method on specific route components" },
            { text: "Provides more control over chat visibility" },
          ],
        },
      ],
    }
    
    
  ],
}
,

  {
          tag_type: "tabs",
          items: [
            {
              label: "Full Header Mode",
              content: [
                {
                  tag_type: "h3",
                  text: "Complete Authentication Header Solution",
                },
                {
                  tag_type: "p",
                  text: "When you set `header_req` to `true`, MagicChat will automatically add a fully functional header to your application that includes:",
                },
                {
                  tag_type: "ul",
                  items: [
                    { text: "User authentication controls (login/logout)" },
                    { text: "User profile management" },
                    { text: "Notification indicators" },
                    { text: "Branding area" },
                    { text: "Responsive navigation menu" },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "Best For",
                  children: [
                    {
                      tag_type: "p",
                      text: "Applications without an existing header or those looking for a complete out-of-the-box authentication solution.",
                    },
                  ],
                },
                {
                  tag_type: "img",
                  src: "Asset/header_ful.png",
                  alt: "MagicChat Full Header Implementation",
                },
              ],
            },
            {
              label: "Header-Less Mode",
              content: [
                {
                  tag_type: "h3",
                  text: "Custom Authentication Placement",
                },
                {
                  tag_type: "p",
                  text: "Set `header_req` to `false` when you already have a header or want to place authentication components in specific locations.",
                },
                {
                  tag_type: "steps",
                  items: [
                    {
                      title: "Step 1: Initialize MagicChat",
                      content: [
                        {
                          tag_type: "code_with_copy",
                          code: `await window.magicchat_io.setUp(
          "<Your App Name>", 
          "<Your Api Key>", 
          JSON.stringify({
            "chat_opener_theme": {
              "backgroundColor": "rgb(41, 48, 78)" // Chat button color
            }
          }),
          false, // DISABLE MAGICCHAT HEADER
          "/dashboard" // Redirect after login
        );`,
                          language: "javascript",
                        },
                      ],
                    },
                    {
                      title: "Step 2: Place Authentication Components",
                      content: [
                        {
                          tag_type: "p",
                          text: "Add this container where you want authentication controls to appear:",
                        },
                        {
                          tag_type: "code_with_copy",
                          code: `<div id="tezkit-auth-area" ></div>`,
                        },
                      ],
                    },
                    {
                      title: "Step 3: Customize Styling (Optional)",
                      content: [
                        {
                          tag_type: "p",
                          text: "Add CSS to match your existing design:",
                        },
                        {
                          tag_type: "code_with_copy",
                          code: `#tezkit-auth-area {
  display: inline-flex;
  gap: 10px; /* space between buttons */
  align-items: center;
}

#tezkit-auth-area button {
  background-color:orange;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

#tezkit-auth-area button:hover {
  background-color: #4338ca;
  transform: translateY(-1px);
}

#tezkit-auth-area button:active {
  transform: translateY(1px);
  background-color: #3730a3;
}`,
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "img",
                  src: "Asset/header_less.png",
                  alt: "Custom Authentication Placement",
                },
                {
                  tag_type: "callout",
                  type: "warning",
                  title: "Important Implementation Notes",
                  children: [
                    {
                      tag_type: "ul",
                      items: [
                        {
                          text: "Place the container in your header or wherever authentication should appear",
                        },
                        {
                          text: "Multiple containers are supported for complex layouts",
                        },
                        {
                          text: "Components automatically adapt to authentication state",
                        },
                        {
                          text: "Elements will render as:",
                          sub_items: [
                            { text: "Login/Signup buttons when logged out" },
                            // { text: "User avatar + dropdown when logged in" },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "Available Authentication Components to be styled",
                  children: [
                    {
                      tag_type: "table",
                      headers: ["Component", "Selector", "Description"],
                      rows: [

                        [
                          "Login Button",
                          ".tezkit-login-btn",
                          "Triggers login flow",
                        ],
                        [
                          "Signup Button",
                          ".tezkit-signup-btn",
                          "Triggers registration flow",
                        ],
                        
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
  {
    "tag_type": "video",
    "src": "https://www.youtube.com/watch?v=MKatoeFYeb8",
    "desc": "Headful Mode Implementation Demo"
  }
]}],

  V2: [
    {
      tag_type: "h2",
      text: `BYO (Bring Your Own) Auth  +  Chat  [V2]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite" },

        {
          tag_type: "ol",
          items: [
            {
              text: "Signup/Login to your account at MagicChat.",
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
              text: "Navigate to the App Details page and note your: , App Name, API Key, Tenant ID",
            },
          ],
        },
      ],
    },

    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Project setup" },

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
                          text: '<script src="https://cdn.jsdelivr.net/gh/magicchat-core/prod-ssc-client-cdns@v0.1.8/bundle.js">\n</script>',
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
                  tag_type: "div",
                  className: "list-item-header ",
                  text: "2. Running Magicchat Setup Requires two steps",
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
                          text: "Step 1 – Initialize on first Logged-Out Screens",
                        },
                        {
                          tag_type: "p",
                          text: "Run the setUp function on the very first screen, where user lands first when they come to the product.This typically applies to your app's landing page or root URL (/).",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: ` await window.magicchat_io.setUp(
                "TEST_v4", // app_name
                "bGVnYWwxMTFfX1NFUFJBVE9SX19URVNUX3Y0", // api_key
              false, // header_req (true by default)
              );`,
                        },
                      ],
                    },
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "h4",
                          text: "Step 2 – Initialize on pages wherever you want to show chat icon to appear.",
                        },
                        {
                          tag_type: "p",
                          text: "Run the initialize function on any screen  where you want the chatbot to appear (e.g., bottom right corner).",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: `
   <script>
      document.addEventListener("DOMContentLoaded", async function () {

            await window.magicchat_io.initialize({"app_version":"V4"});


      });
    </script>    `,
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
          tag_type: "callout",
          type: "info",
          title: "Implementation Best Practices",
          children: [
            {
              tag_type: "h4",
              text: "Centralized Implementation",
            },
            {
              tag_type: "p",
              text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route):",
            },
            {
              tag_type: "ul",
              items: [
                {
                  text: "Combine both setUp and initialize logic in a single location",
                },
                {
                  text: "This ensures the chatbox renders consistently across all routes",
                },
                {
                  text: "Avoids code duplication across screens",
                },
              ],
            },
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
                  text: "Run the `setUp` function on initial screen load and Run the `Initialize` only on screens where chat is needed",
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
              text: "Example Implementation",
            },
            {
              tag_type: "p",
              text: "See this complete example implementation in our GitHub repository:",
            },
            {
              tag_type: "a",
              href: "https://github.com/magicchat-core/example__v2/blob/402cbcd3d07fc8cca952fdf6ed1c18b5a2a90b1a/templates/base.html#L152",
              text: "Code Implementation Example",
            },
            {
              tag_type: "callout",
              type: "info",
              title: "Future Improvements",
              children: [
                {
                  tag_type: "p",
                  text: "We're working to simplify route-specific implementations in upcoming releases.",
                },
              ],
            },
          ],
        },
        //Backend side integration
        {
          tag_type: "h2",
          text: "Backend Integration",
        },
        {
          tag_type: "p",
          text: "For platforms with existing authentication systems, MagicChat requires user onboarding to establish identity mapping between your platform users and MagicChat accounts.",
        },
        {
          tag_type: "callout",
          type: "info",
          title: "Key Integration Requirement",
          children: [
            {
              tag_type: "p",
              text: "Each new user must be onboarded with a unique identifier (UID) that serves as the proxy between your platform and MagicChat's user management system.",
            },
          ],
        },
        {
          tag_type: "h3",
          text: "Onboarding API",
        },
        {
          tag_type: "p",
          text: "Successfully onboarded users will appear in the MagicChat Admin Panel with their associated applications.",
        },
        {
          tag_type: "steps",
          items: [
            {
              title: "Admin Panel - Onboarded Users",
              content: [
                {
                  tag_type: "img",
                  src: "Asset/onboarded_user.png",
                  alt: "MagicChat Admin Panel showing onboarded users",
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
                  src: "Asset/no_users_admin.png",
                  alt: "MagicChat Admin Panel showing no onboarded users",
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
      --header 'X-API-Key: YOUR_API_KEY' \\
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
                      "Your registered MagicChat application name",
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
                  text: "Manually onboard users through the MagicChat Admin Interface:",
                },
                {
                  tag_type: "img",
                  src: "Asset/onboarding_via_admin.png",
                  alt: "MagicChat Admin Panel user onboarding interface",
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
          text: "Since authentication is managed locally within your own platform, it is essential to also clean up the MagicChat session when a user logs out from your system.",
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
          text: "You should call this method immediately when your user logs out. It ensures MagicChat cleans up all user-related sessions and data.",
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
          href: "https://github.com/magicchat-core/example__v2/blob/402cbcd3d07fc8cca952fdf6ed1c18b5a2a90b1a/templates/base.html#L95",
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
        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for V2",
        },
      ],
    },
  ],
  V3: [
    {
      tag_type: "h2",
      text: `CMS-Ready Chat (Wordpress) [V3]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for Wordpress using native wp authentication. It is ideal for products that already have built-in authentication probably using some plugin and are looking to seamlessly integrate robust chat functionality.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite" },

        {
          tag_type: "p",
          text: "To integrate Chat into your app, do the following:",
        },
        {
          tag_type: "ol",
          items: [
            {
              text: "Signup/Login to your account at MagicChat.",
              link_parts: [
                {
                  text: "Signup/Login",
                  link: "https://www.google.com/",
                },
              ],
            },

            {
              tag_type: "li",
              text: "Create an app as per your use case. (Be Sure to choose the right version V3)",
            },

            {
              tag_type: "li",
              text: "Go To created app's  detail page and locate the credentials.",
            },
          ],
        },
      ],
    },

    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Project Setup",
        },
        {
          tag_type: "h3",
          text: "Client Side Integration",
        },
        {
          tag_type: "callout",
          type: "success",
          title: "Plugin Installation",
          children: [
            {
              tag_type: "div",
              // className: styles["download-container"],
              children: [
                {
                  tag_type: "div",
                  // className: styles["download-header"],
                  children: [
                    {
                      tag_type: "h4",
                      text: "MagicChat WordPress Plugin",
                    },
                    {
                      tag_type: "p",
                      text: "Version 2.3.1 | 2.4 MB | Updated: 2023-11-15",
                    },
                  ],
                },
                {
                  tag_type: "div",
                  // className: styles["download-body"],
                  children: [
                    {
                      tag_type: "ul",
                      items: [
                        { text: "One-click installation" },
                        { text: "Compatible with WordPress 5.0+" },
                        { text: "Tested with PHP 7.4-8.2" },
                      ],
                    },
                    {
                      tag_type: "a",
                      href: "/addChatPlugin_prod.zip",
                      // className: styles["download-button"],
                      text: "Download Plugin",
                      download: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          tag_type: "steps",
          items: [
            {
              title: "Add MagicChat Credentials",
              content: [
                {
                  tag_type: "p",
                  text: "After installing the plugin, navigate to MagicChat settings in your WordPress admin panel and enter your credentials:",
                },
                {
                  tag_type: "img",
                  src: "Asset/add_credentials_wp.png",
                  alt: "MagicChat credentials configuration in WordPress",
                },
              ],
            },
            {
              title: "Verify Integration",
              content: [
                {
                  tag_type: "p",
                  text: "Confirm the chat utility appears correctly on your site:",
                },
                {
                  tag_type: "img",
                  src: "Asset/fashoni_chat_opener_visible.png",
                  alt: "MagicChat opener visible on website",
                },
              ],
            },
          ],
        },
        {
          tag_type: "div",
          // className: styles["video-container"],
          children: [
            {
              tag_type: "h4",
              text: "Integration Walkthrough",
            },
            {
              tag_type: "p",
              text: "Watch this tutorial below for complete setup instructions:",
            },
            {
              tag_type: "video",
              src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
              desc: "MagicChat WordPress Integration Tutorial",
            },
          ],
        },
      ],
    },
  ],
  V4: [
    {
      tag_type: "h2",
      text: `No Auth  but  Chat  [V4]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for complex sites or apps have no built-in authentication and niether want one but chat functionality only.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite" },

        {
          tag_type: "ol",
          items: [
            {
              text: "Signup/Login to your account at MagicChat.",
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
              text: "Navigate to the App Details page and note your: , App Name, API Key, Tenant ID",
            },
          ],
        },
      ],
    },

    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Project setup" },

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
                          text: '<script src="https://cdn.jsdelivr.net/gh/magicchat-core/prod-ssc-client-cdns@v0.1.8/bundle.js">\n</script>',
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
                  tag_type: "div",
                  className: "list-item-header ",
                  text: "2. Running Magicchat Setup Requires two steps",
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
                          text: "Step 1 – Initialize on first Logged-Out Screens",
                        },
                        {
                          tag_type: "p",
                          text: "Run the setUp function on the very first screen, where user lands first when they come to the product.This typically applies to your app's landing page or root URL (/).",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: `
    <script>
      document.addEventListener("DOMContentLoaded", async function () {
        const token = localStorage.getItem("tezkit_token");
        if (!token) {
          await window.magicchat_io.setUp(
            "<YOUR_MAGICCHAT_API_NAME>", // app_name
            "<YOUR_MAGICCHAT_API_KEY>", // api_key
          );

        } 
      });
    </script> `,
                        },
                      ],
                    },
                    {
                      tag_type: "div",
                      children: [
                        {
                          tag_type: "h4",
                          text: "Step 2 – Initialize on pages wherever you want to show chat icon to appear.",
                        },
                        {
                          tag_type: "p",
                          text: "Run the initialize function on any screen  where you want the chatbot to appear (e.g., bottom right corner).",
                        },
                        {
                          tag_type: "code",
                          show_copy: true,
                          text: `
     <script>
      document.addEventListener("DOMContentLoaded", async function () {
        const token = "NO_AUTH_REQUIRED" 
        if (token) {
          await window.magicchat_io.initialize(token);
        } 
      });
    </script>                      `,
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
          tag_type: "callout",
          type: "info",
          title: "Implementation Best Practices",
          children: [
            {
              tag_type: "h4",
              text: "Centralized Implementation",
            },
            {
              tag_type: "p",
              text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route):",
            },
            {
              tag_type: "ul",
              items: [
                {
                  text: "Combine both setUp and initialize logic in a single location",
                },
                {
                  text: "This ensures the chatbox renders consistently across all routes",
                },
                {
                  text: "Avoids code duplication across screens",
                },
              ],
            },
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
                  text: "Run the `setUp` function on initial screen load and Run the `Initialize` only on screens where chat is needed",
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
              text: "Example Implementation",
            },
            {
              tag_type: "p",
              text: "See this complete example implementation in our GitHub repository:",
            },
            {
              tag_type: "a",
              href: "https://github.com/magicchat-core/example__v1/blob/a763750701c35a8a42c7521bacc0fdd9ae7cc98f/index.html#L37",
              text: "Code Implementation Example",
            },
            {
              tag_type: "callout",
              type: "info",
              title: "Future Improvements",
              children: [
                {
                  tag_type: "p",
                  text: "We're working to simplify route-specific implementations in upcoming releases.",
                },
              ],
            },
          ],
        },

        {
          tag_type: "p",
          text: "Successfully onboarded users will appear in the MagicChat Admin Panel with their associated applications.",
        },
        {
          tag_type: "steps",
          items: [
            {
              title: "Admin Panel - Onboarded Users",
              content: [
                {
                  tag_type: "img",
                  src: "Asset/onboarded_user.png",
                  alt: "MagicChat Admin Panel showing onboarded users",
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
                  src: "Asset/no_users_admin.png",
                  alt: "MagicChat Admin Panel showing no onboarded users",
                },
              ],
            },
          ],
        },

        {
          tag_type: "callout",
          type: "info",
          title: "User persists only till session",
          children: [
            {
              tag_type: "ul",
              items: [
                {
                  text: "Means if browser is closed and reopen it will be considered as new user.",
                },
              ],
            },
          ],
        },
        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for V2",
        },
      ],
    },
  ],
};
export default payload;
