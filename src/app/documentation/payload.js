// Example payload with additional tags and Lorem Ipsum content
const payload = {
  V1: [
    {
      tag_type: "h2",
      text: `Cloud Managed Auth [V1]`,
    },

    {
      tag_type: "p",
      text: `This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality.
`,
    },
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
              text: "Create an app as per your use case. (Be Sure to choose the right Mode [Headless | HEADFUL])",
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
        { tag_type: "h2", text: "Project setup" },

        {
          tag_type: "p",
          text: "To integrate Chat into your app, do the following:",
        },

        {
          tag_type: "ol",
          items: [
            {
              tag_type: "li",
              text: "Load The Scripts",
              sub_items: [
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
                      text: `<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>`,
                    },
                  ],
                },
              ],
            },
            {
              tag_type: "li",
              text: "Running Magicchat Setup Requires two steps",
              sub_items: [
                {
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "h4",
                      text: "Step 1 – setup on first Logged-Out Screens",
                    },
                    {
                      tag_type: "p",
                      text: "Run the setUp function when the user is first detected as logged out. This typically applies to your app's landing page or root URL (/), where no authentication token is present.",
                    },
                    {
                      tag_type: "code",
                      show_copy: true,
                      text: `<script>
              document.addEventListener("DOMContentLoaded", async function () {
                const token = localStorage.getItem("tezkit_token");
                if (!token) {
                  await window.chathead.setUp(
                    "v1app1", // app_name
                    "bGVnYWxob3VzZV9fU0VQUkFUT1JfX3YxYXBwMQ==", // api_key
                    JSON.stringify({
                      header_theme: {
                        backgroundColor: "rgb(163, 112, 206)",
                        textColor: "white",
                      },
                      chat_opener_theme: {
                        backgroundColor: "rgb(163, 112, 206)",
                        textColor: "white",
                      },
                      chat_box_theme: {
                        backgroundColor: "red",
                        textColor: "black",
                      },
                    }), // theme
                    true,  // header_req (HEADER FULL :: header will be added)
                    "/", // redirect_url after login
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
                              "Unique identifier for your application (provided during registration)"
                            ],
                            [
                              "api_key", 
                              "string", 
                              "Base64 encoded API key for authentication"
                            ],
                            [
                              "theme", 
                              "string (JSON)", 
                              "Theme configuration object as a JSON string"
                            ],
                            [
                              "header_req", 
                              "boolean", 
                              "Set to true to display header with user controls"
                            ],
                            [
                              "redirect_url", 
                              "string", 
                              "URL to redirect to after successful login"
                            ]
                          ]
                        },
                        {
                          tag_type: "callout",
                          type: "warning",
                          title: "Theme Configuration",
                          children: [
                            {
                              tag_type: "p",
                              text: "The theme parameter requires a JSON string with these nested objects:"
                            },
                            {
                              tag_type: "ul",
                              items: [
                                {
                                  text: "header_theme - Styles for the chat header",
                                  sub_items: [
                                    { text: "backgroundColor: CSS color value" },
                                    { text: "textColor: CSS color value" }
                                  ]
                                },
                                {
                                  text: "chat_opener_theme - Styles for the chat opener button",
                                  sub_items: [
                                    { text: "backgroundColor: CSS color value" },
                                    { text: "textColor: CSS color value" }
                                  ]
                                },
                                {
                                  text: "chat_box_theme - Styles for the main chat container",
                                  sub_items: [
                                    { text: "backgroundColor: CSS color value" },
                                    { text: "textColor: CSS color value" }
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
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "h4",
                      text: "Step 2 – Initialize on first Logged-In Screens",
                    },
                    {
                      tag_type: "p",
                      text: "Run the initialize function on any screen that is accessible after login, where you want the chatbot to appear (e.g., bottom right corner).",
                    },
                    {
                      tag_type: "code",
                      show_copy: true,
                      text: `<script>
              document.addEventListener("DOMContentLoaded", async function () {
                const token = localStorage.getItem("tezkit_token");
                if (token) {
                  await window.chathead.initialize(token);
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
                              "token", 
                              "string", 
                              "User authentication token obtained after login"
                            ]
                          ]
                        },
                        {
                          tag_type: "mesgTip",
                          title: "Token Handling",
                          children: [
                            {
                              tag_type: "p",
                              text: "The token should be stored in localStorage after successful authentication and retrieved as shown in the example."
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
        },
        {
          tag_type: "tabs",
          items: [
            {
              label: "Full Header Mode",
              content: [
                {
                  tag_type: "h3",
                  text: "Complete Authentication Header Solution"
                },
                {
                  tag_type: "p",
                  text: "When you set `header_req` to `true`, MagicChat will automatically add a fully functional header to your application that includes:"
                },
                {
                  tag_type: "ul",
                  items: [
                    { text: "User authentication controls (login/logout)" },
                    { text: "User profile management" },
                    { text: "Notification indicators" },
                    { text: "Branding area" },
                    { text: "Responsive navigation menu" }
                  ]
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "Best For",
                  children: [
                    {
                      tag_type: "p",
                      text: "Applications without an existing header or those looking for a complete out-of-the-box authentication solution."
                    }
                  ]
                },
                {
                  tag_type: "img",
                  src: "Asset/header_ful.png",
                  alt: "MagicChat Full Header Implementation"
                },
                {
                  tag_type: "h4",
                  text: "Implementation Code"
                },
                {
                  tag_type: "code_with_copy",
                  code: `window.chathead.setUp(
          "<Your App Name>", 
          "<Your Api Key>", 
          JSON.stringify({
            "header_theme": {
              "backgroundColor": "rgb(30, 136, 125)", // Header background
              "textColor": "#ffffff",                  // Header text color
              "logoUrl": "/path/to/your/logo.png"      // Optional custom logo
            },
            "chat_opener_theme": {
              "backgroundColor": "rgb(41, 48, 78)",    // Chat button color
              "iconColor": "#ffffff"                   // Chat icon color
            }
          }),
          true, // ENABLE FULL HEADER
          "/dashboard" // Redirect after login
        );`,
                  language: "javascript"
                },
                {
                  tag_type: "callout",
                  type: "success",
                  title: "Customization Options",
                  children: [
                    {
                      tag_type: "table",
                      headers: ["Property", "Description", "Default"],
                      rows: [
                        ["backgroundColor", "Header background color", "Brand primary"],
                        ["textColor", "Text and icon colors", "#ffffff"],
                        ["logoUrl", "Custom logo image URL", "MagicChat logo"],
                        ["height", "Header height in pixels", "60px"]
                      ]
                    }
                  ]
                }
              ]
            },
            {
              label: "Header-Less Mode",
              content: [
                {
                  tag_type: "h3",
                  text: "Custom Authentication Placement"
                },
                {
                  tag_type: "p",
                  text: "Set `header_req` to `false` when you already have a header or want to place authentication components in specific locations."
                },
                {
                  tag_type: "steps",
                  items: [
                    {
                      title: "Step 1: Initialize MagicChat",
                      content: [
                        {
                          tag_type: "code_with_copy",
                          code: `window.chathead.setUp(
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
                          language: "javascript"
                        }
                      ]
                    },
                    {
                      title: "Step 2: Place Authentication Components",
                      content: [
                        {
                          tag_type: "p",
                          text: "Add this container where you want authentication controls to appear:"
                        },
                        {
                          tag_type: "code_with_copy",
                          code: `<div id="tezkit-auth-area" class="custom-auth-styles"></div>`
                        }
                      ]
                    },
                    {
                      title: "Step 3: Customize Styling (Optional)",
                      content: [
                        {
                          tag_type: "p",
                          text: "Add CSS to match your existing design:"
                        },
                        {
                          tag_type: "code_with_copy",
                          code: `#tezkit-auth-area {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        /* Style login/logout buttons */
        .tezkit-auth-button {
          padding: 8px 16px;
          border-radius: 4px;
          background-color: #4a6cf7;
          color: white;
          cursor: pointer;
        }`
                        }
                      ]
                    }
                  ]
                },
                {
                  tag_type: "img",
                  src: "Asset/header_less.png",
                  alt: "Custom Authentication Placement"
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
                          text: "Place the container in your header or wherever authentication should appear"
                        },
                        {
                          text: "Multiple containers are supported for complex layouts"
                        },
                        {
                          text: "Components automatically adapt to authentication state"
                        },
                        {
                          text: "Elements will render as:",
                          sub_items: [
                            { text: "Login/Signup buttons when logged out" },
                            { text: "User avatar + dropdown when logged in" }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  tag_type: "callout",
                  type: "info",
                  title: "Available Authentication Components",
                  children: [
                    {
                      tag_type: "table",
                      headers: ["Component", "Selector", "Description"],
                      rows: [
                        ["User Avatar", ".tezkit-user-avatar", "Profile picture with dropdown menu"],
                        ["Login Button", ".tezkit-login-btn", "Triggers login flow"],
                        ["Signup Button", ".tezkit-signup-btn", "Triggers registration flow"],
                        ["User Menu", ".tezkit-user-menu", "Dropdown with profile options"]
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },

        {
          tag_type: "callout",
          type: "info",
          title: "Additional Notes",
          children: [
            {
              tag_type: "p",
              text: "If your app uses a common root layout or entry point (e.g., a main index.js or layout component that renders on every route), you can combine both setUp and initialize logic into a single location. This ensures the chat behaves appropriately based on the user's login state without duplicating code across screens.",
            },

            {
              tag_type: "p",
              text: "you can probably find the root file which loads each time despite being on any screen, and you probably can run both (setup, initialize) at once",
              children: [
                {
                  tag_type: "a",
                  href: "https://github.com/magicchat-core/example__v1/blob/a98e8902079c3c40062751d675a90a8ad0cae302/index.html#L16",
                  text: "for example here ",
                },
              ],
            },
          ],
        },

        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for P2A V1 [Headful]",
        },
      ],
    },
  ],

  V2: [
    {
      tag_type: "h2",
      text: `Locally Managed Auth + Chat (Complex Sites) -  [V2]`,
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
          tag_type: "ol",
          items: [
            {
              tag_type: "li",
              text: "Load The Scripts",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Locate the main entry file, typically index.html, and insert the following code snippet into the <head> section of the HTML document.",
                  extra_text:
                    "It should ideally be placed head of the root file.",
                  code: '<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>',
                },
                {
                  tag_type: "li",
                  // text: "after script is loaded we can initialize it like below.",
                  // extra_text: "kindly add it below the first script",
                  code: `
<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js">
</script>`,
                },
              ],
            },

            {
              tag_type: "li",
              text: "Running Magicchat Setup Requires two steps",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Step 1 – Initialize on first Logged-Out Screens",
                  extra_text:
                    "Run the setUp function when the user is first detected as logged out. This typically applies to your app's landing page or root URL (/), where no authentication token is present.",
                  code: `<script>
        document.addEventListener("DOMContentLoaded", async function () {
          const token = localStorage.getItem("tezkit_token");
          if (!token) {
            await window.chathead.setUp(
              "v1app1", // app_name
              "bGVnYWxob3VzZV9fU0VQUkFUT1JfX3YxYXBwMQ==", // api_key
              JSON.stringify({
                header_theme: {
                  backgroundColor: "rgb(163, 112, 206)",
                  textColor: "white",
                },
                chat_opener_theme: {
                  backgroundColor: "rgb(163, 112, 206)",
                  textColor: "white",
                },
                chat_box_theme: {
                  backgroundColor: "red",
                  textColor: "black",
                },
              }), // theme
              true,  // header_req (HEADER FULL :: header will be added)
              "/", // redirect_url after login
            );

          } 
        });
      </script>


`,
                },

                {
                  tag_type: "li",
                  text: "Step 2 – Initialize on first Logged-In Screens",
                  extra_text:
                    "Run the initialize function on any screen that is accessible after login, where you want the chatbot to appear (e.g., bottom right corner).",
                  code: `    
    <script>
      document.addEventListener("DOMContentLoaded", async function () {
        const token = localStorage.getItem("tezkit_token");
        if (token) {
          await window.chathead.initialize(token);
        } 
      });
    </script>

`,
                },
              ],
            },
          ],
        },

        {
          tag_type: "callout",
          type: "info",
          title: "Additional Notes",
          children: [
            {
              tag_type: "p",
              text: "If your app uses a common root layout or entry point (e.g., a main index.js or layout component that renders on every route), you can combine both setUp and initialize logic into a single location. This ensures the chat behaves appropriately based on the user's login state without duplicating code across screens.",
            },

            {
              tag_type: "p",
              text: "you can probably find the root file which loads each time despite being on any screen, and you probably can run both (setup, initialize) at once",
              children: [
                {
                  tag_type: "a",
                  href: "https://github.com/magicchat-core/example__v2",
                  text: "for example here ",
                },
              ],
            },
          ],
        },
        //Backend side integration

        {
          tag_type: "h3",
          text: "Backend Integration",
        },
        {
          tag_type: "h3",
          text: "Onboarding api",
        },

        {
          tag_type: "p",
          text: `To ensure users can access chat features and are visible in the MagicChat Admin Panel, you must onboard them upon registration.`,
        },

        {
          tag_type: "img",
          src: "Asset/no_users_admin.png",
        },

        {
          tag_type: "h3",
          text: `Ways to Onboard Users`,
        },

        {
          tag_type: "feature_options",
          options: [
            {
              text: "Via Backend",
              description: [
                {
                  tag_type: "h3",
                  text: "Using Rest /signup Api Endpoint",
                },

                {
                  tag_type: "h3",
                  text: "Now this has changed to https://auth.magicchat.io/prod/onboarding",
                },

                {
                  tag_type: "div",
                  children: [
                    {
                      tag_type: "img",
                      src: "Asset/onboarding_via_rest_endpoint_payload.png",
                    },

                    {
                      tag_type: "img",
                      src: "Asset/onboarding_via_rest_endpoint_headers.png",
                    },
                  ],
                  extra_text: "Please find the curl below.",
                  code: `curl --location 'https://gfxb0jf19k.execute-api.ap-south-1.amazonaws.com/prod/onboarding' \
--header 'X-API-Key: bGVnYWwxMjNfX1NFUFJBVE9SX192MmFwcDE=' \
--header 'tenant_id: legal123' \
--header 'app_name: v2app1' \
--header 'Content-Type: application/json' \
--data '{
"tenant":"legal123",
"uid":"new_site_user1",
"app_name":"v2app1"
}'`,
                },
              ],
            },
            {
              text: "Via Frontend",
              description: [
                {
                  tag_type: "div",
                  children: [],
                  extra_text:
                    "Using chathead.onboarding() method on the client side.",
                  code: `await window.chathead.onboarding({"uid":data.username,},{
        "auth_key": "bGVnYWwxMjNfX1NFUFJBVE9SX192MmFwcDE=",
        "tenant_id": "legal123",
        "app_name": "v2app1",
    })`,
                },
              ],
            },

            {
              text: "Via Admin",
              description: [
                {
                  tag_type: "h3",
                  text: "Users can be onboarded and their respective password can be shared with them.",
                },

                {
                  tag_type: "img",
                  src: "Asset/onboarding_via_admin.png",
                },
              ],
            },
          ],
        },

        {
          tag_type: "mesgTip",
          title: "Tip:",
          children: [
            {
              tag_type: "p",
              text: "Ensure you call the onboarding API immediately after user signup. Legacy or missed users can be added via batch API methods—contact support for more details.",
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
      text: `Locally Managed Auth + Chat (Wordpress)`,
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
        { tag_type: "h2", text: "Project setup" },

        {
          tag_type: "h4",
          text: "Client Side Integration",
        },
        {
          tag_type: "p",
          text: "Install the MagicChat plugin",
        },
        {
          tag_type: "p",
          text: "Add the MagicChat Credentials like below",
        },
        {
          tag_type: "img",
          src: "Asset/add_credentials_wp.png",
        },

        {
          tag_type: "p",
          text: "Verify if you can see the chat utility on your product like below",
        },

        {
          tag_type: "img",
          src: "Asset/fashoni_chat_opener_visible.png",
        },

        {
          tag_type: "video",
          src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
          desc: "Demo for P2A_V2.2",
        },
      ],
    },
  ],
};
export default payload;
