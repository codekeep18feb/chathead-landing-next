// Example payload with additional tags and Lorem Ipsum content
export const versionSlugMap = {
  V1: "instant-auth",
  V2: "byo",
  V3: "cms-chat",
  V4: "no-auth",
};

const payload = {
  V1: [
    {
      tag_type: "h2",
      text: "Instant Auth + Chat [V1]",
    },
    {
      tag_type: "p",
      text: "Perfect for MVPs or new apps without built-in authentication. It provides lightweight MagicChat auth to quickly onboard users and enable chat. Later, you can migrate to other authentication systems and upgrade your chat version without losing onboarded users.",
    },
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Prerequisites",
          selector_uid: "v1_prerequisites",
        },
        {
          tag_type: "p",
          text: "To add chat to your application, follow these steps:",
        },
        {
          tag_type: "ol",
          items: [
            {
              text: "Sign up or log in to your MagicChat account.",
              link_parts: [
                {
                  text: "Sign up or log in",
                  link: "https://www.google.com/",
                },
              ],
            },
            {
              tag_type: "li",
              text: "Create a new app and be sure to select Version `Instant Auth + Chat` (V1) during setup",
            },
            {
              tag_type: "li",
              text: "Navigate to your created app's detail page and locate the credentials.",
            },
          ],
        },
      ],
    },

    {
      tag_type: "callout",
      type: "info",
      title: "Starter Code",
      children: [
        {
          tag_type: "p",
          text: "Clone the starter repo to use it on.",
        }, {
          tag_type: "h4",
          text: "git clone -b starter https://github.com/magicchat-core/example__v1.git",
        },

        {
          tag_type: "a",
          href: "https://github.com/magicchat-core/example__v1/tree/starter",
          text: "Starter Code",
        },
      ],
    },

    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Project Setup",
          selector_uid: "v1_client_integration",
        },
        {
          tag_type: "p",
          text: "To integrate chat into your application, follow these steps:",
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
                  text: "1. Load Required Scripts",
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
                          text: "Locate your main entry file (typically index.html) and insert this code snippet into the <head> section. Place it before other dependencies for optimal loading.",
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
                          text: '<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>',
                        },
                      ],
                    },
                  ],
                },
              ],
            }

            ,

            {
              tag_type: "h3",
              text: "2. Authentication UI Placment",
            },

            {
              tag_type: "p",
              text: "Since you are opting for the Auth Service, you have two options for Authentication UI placement. You can choose based on your convenience.",
            },

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
                      text: "When you set Third parameter (header_req) to true. MagicChat will automatically add a fully functional header to your application that includes:",
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
                      src: "/Asset/magicChatImg/full_header_mode.png",
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
                      text: "Set Third parameter (header_req) to false if you already have a header or want to place authentication components in specific locations..",
                    },
                    {
                      tag_type: "img",
                      src: "/Asset/magicChatImg/header_less_mode.png",
                      alt: "Custom Authentication Placement",
                    },
                    {
                      tag_type: "steps",
                      items: [
                        {
                          title: "Step 1: Place Authentication Components",
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
                          title: "Step 2: Initialize MagicChat",
                          content: [
                            {
                              tag_type: "code_with_copy",
                              code: `await window.magicchat_io.setUp(
          "<Your App Name>", 
          "<Your Api Key>", 
          false, // DISABLE MAGICCHAT HEADER
        );`,
                              language: "javascript",
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
            }

            ,


          ],
        },

        {
          tag_type: "div",
          className: "custom-list-item",
          children: [
            {
              tag_type: "h3",
              className: "list-item-header",
              text: "3. Decide the placement of the Magicchat chat box in your app.",
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
                  text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route), combine both setUp and initialize logic in a single location. ",
                },


                {
                  tag_type: "p",

                  text: "This ensures the chatbox renders consistently across all routes ",
                },
                {
                  text: "and avoids code duplication across screens.",

                  tag_type: "p",


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
  document.addEventListener("DOMContentLoaded", async function () {
    // Step 1: Initial setup
    await window.magicchat_io.setUp(
      "<MAGICCHAT_APP_NAME>",
      "<MAGICCHAT_API_KEY>", 
      false // Flip it to switch between 'Full Header Mode' and 'Header-Less Mode'.
    );
    
    // Step 2: Initialize chat
    await window.magicchat_io.initialize({"app_version":"V1"});
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
                                [
                                  "header_req",
                                  "boolean",
                                  "Display header with user controls",
                                ],
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
                  selector_uid: "v1_code_example",
                },
                {
                  tag_type: "p",
                  text: "View complete implementation examples in our GitHub repository:",
                },
                {
                  tag_type: "a",
                  href: "https://github.com/magicchat-core/example__v1",
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

                      text: "Provides more control over chat visibility"
                    },
                  ]
                }
                ,

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
  document.addEventListener("DOMContentLoaded", async function () {
    await window.magicchat_io.setUp(
      "<MAGICCHAT_APP_NAME>", 
      "<MAGICCHAT_API_KEY>", 
      true, // for 'Full Header Mode' pass true(true by default)
    );
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
                                [
                                  "header_req",
                                  "boolean",
                                  "Display header with user controls",
                                ],
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
  document.addEventListener("DOMContentLoaded", async function () {
    await window.magicchat_io.initialize({"app_version":"V1"});
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
                                  "MagicChat application version",
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

                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `setUp` at initial load.",
                //                 },
                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 1: Initial setup
                //     await window.magicchat_io.setUp(
                //       "<MAGICCHAT_APP_NAME>",
                //       "<MAGICCHAT_API_KEY>", 
                //       false // Flip it to switch between 'Full Header Mode' and 'Header-Less Mode'.
                //     );
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },


                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `initialize` at the screen we would like to see chat box to appear.",
                //                 },

                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 2: Initialize chat
                //     await window.magicchat_io.initialize({"app_version":"V1"});
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },
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
                  href: "https://github.com/magicchat-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
                  text: "View Implementation Example",
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
                  src: "/Asset/onboarded_user.png",
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
                  src: "/Asset/no_users_admin.png",
                  alt: "MagicChat Admin Panel showing no onboarded users",
                },
              ],
            },
          ],
        },

        // {
        //   tag_type: "video",
        //   src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
        //   desc: "Headful Mode Implementation Demo",
        // },
      ],
    },
  ],

  V2: [
    {
      tag_type: "h2",
      text: `BYO (Bring Your Own) Auth  +  Chat  [V2]`,
    },
    {
      tag_type: "p",
      text: `Designed for apps with their own backend and authentication, letting you fully control user onboarding, sync, and logout while integrating robust MagicChat features.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite", selector_uid: "v2_prerequisites", },

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
        { tag_type: "h2", text: "Project setup", selector_uid: "v2_client_integration", },

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
                          text: '<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js">\n</script>',
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
              text: "2. Decide the placement of the Magicchat chat box in your app.",
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
                  text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route), combine both setUp and initialize logic in a single location. ",
                },


                {
                  tag_type: "p",

                  text: "This ensures the chatbox renders consistently across all routes ",
                },
                {
                  text: "and avoids code duplication across screens.",

                  tag_type: "p",


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
                  href: "https://github.com/magicchat-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
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

                      text: "Provides more control over chat visibility"
                    },
                  ]
                }
                ,

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
                                  "MagicChat application version",
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

                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `setUp` at initial load.",
                //                 },
                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 1: Initial setup
                //     await window.magicchat_io.setUp(
                //       "<MAGICCHAT_APP_NAME>",
                //       "<MAGICCHAT_API_KEY>", 
                //       false // Flip it to switch between 'Full Header Mode' and 'Header-Less Mode'.
                //     );
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },


                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `initialize` at the screen we would like to see chat box to appear.",
                //                 },

                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 2: Initialize chat
                //     await window.magicchat_io.initialize({"app_version":"V1"});
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },
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
                  href: "https://github.com/magicchat-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
                  text: "View Implementation Example",
                },
              ],
            },
          ],
        },



        {
          tag_type: "h1",
          text: "Connecting Magicchat to Your Product’s Authentication",
        },
        //Backend side integration
        {
          tag_type: "h2",
          text: "Backend Integration",
          selector_uid: "v2_backend_integration",
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
                  src: "/Asset/onboarded_user.png",
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
                  src: "/Asset/no_users_admin.png",
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
                  src: "/Asset/onboarding_via_admin.png",
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
        // {
        //   tag_type: "video",
        //   src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
        //   desc: "Demo for V2",
        // },
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
        { tag_type: "h2", text: "Prerequisite", selector_uid: "v3_prerequisites", },

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
          selector_uid: "v3_client_integration",
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
                  src: "/Asset/add_credentials_wp.png",
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
                  src: "/Asset/fashoni_chat_opener_visible.png",
                  alt: "MagicChat opener visible on website",
                },
              ],
            },
          ],
        }
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
      text: `Perfect for demos, landing pages, early MVPs, and static sites where users can be created instantly and chat works out-of-the-box — and as your product grows with real authentication, user identity, roles, permissions, moderation, billing, and real customers, you can seamlessly switch and migrate to the full backend-powered version.`,
    },

    //prerequisite?
    {
      tag_type: "div",
      children: [
        { tag_type: "h2", text: "Prerequisite", selector_uid: "v4_prerequisites", },

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
              text: "Create a New App and be sure to select Version V4 during setup.",
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
        { tag_type: "h2", text: "Project setup", selector_uid: "v4_client_integration", },

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
                          text: '<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js">\n</script>',
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
              text: "2. Decide the placement of the Magicchat chat box in your app.",
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
                  text: "For applications with a common root layout (e.g., main index.js or layout component that renders on every route), combine both setUp and initialize logic in a single location. ",
                },


                {
                  tag_type: "p",

                  text: "This ensures the chatbox renders consistently across all routes ",
                },
                {
                  text: "and avoids code duplication across screens.",

                  tag_type: "p",


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
  document.addEventListener("DOMContentLoaded", async function () {
    // Step 1: Initial setup
    await window.magicchat_io.setUp(
      "<MAGICCHAT_APP_NAME>",
      "<MAGICCHAT_API_KEY>", 
    );
    
    // Step 2: Initialize chat
    await window.magicchat_io.initialize({"app_version":"V4"});
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
                  selector_uid: "v4_code_example",
                },
                {
                  tag_type: "p",
                  text: "View complete implementation examples in our GitHub repository:",
                },
                {
                  tag_type: "a",
                  href: "https://github.com/magicchat-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
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

                      text: "Provides more control over chat visibility"
                    },
                  ]
                }
                ,

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
  document.addEventListener("DOMContentLoaded", async function () {
    // Step 1: Initial setup
    await window.magicchat_io.setUp(
      "<MAGICCHAT_APP_NAME>",
      "<MAGICCHAT_API_KEY>", 
    );
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
                                [
                                  "header_req",
                                  "boolean",
                                  "Display header with user controls",
                                ],
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
  document.addEventListener("DOMContentLoaded", async function () {
    // Step 2: Initialize chat
    await window.magicchat_io.initialize({"app_version":"V4"});
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
                                  "MagicChat application version",
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

                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `setUp` at initial load.",
                //                 },
                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 1: Initial setup
                //     await window.magicchat_io.setUp(
                //       "<MAGICCHAT_APP_NAME>",
                //       "<MAGICCHAT_API_KEY>", 
                //       false // Flip it to switch between 'Full Header Mode' and 'Header-Less Mode'.
                //     );
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },


                //                 {
                //                   tag_type: "h3",
                //                   text: "Running `initialize` at the screen we would like to see chat box to appear.",
                //                 },

                //                 {
                //                   tag_type: "code_with_copy",
                //                   code: `
                // <script>
                //   document.addEventListener("DOMContentLoaded", async function () {
                //     // Step 2: Initialize chat
                //     await window.magicchat_io.initialize({"app_version":"V1"});
                //   });
                // </script>`,
                //                   language: "javascript",
                //                 },
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
                  href: "https://github.com/magicchat-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
                  text: "View Implementation Example",
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
                  src: "/Asset/onboarded_user.png",
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
                  src: "/Asset/no_users_admin.png",
                  alt: "MagicChat Admin Panel showing no onboarded users",
                },
              ],
            },
          ],
        },

        // {
        //   tag_type: "callout",
        //   type: "info",
        //   title: "User persists only till session",
        //   children: [
        //     {
        //       tag_type: "ul",
        //       items: [
        //         {
        //           text: "Means if browser is closed and reopen it will be considered as new user.",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // {
        //   tag_type: "video",
        //   src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
        //   desc: "Demo for V2",
        // },
      ],
    },
  ],
};
export default payload;
