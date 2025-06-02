import React from "react";
import ContentRenderer from "./rendering_tools";
import ScrollButtonExample from "../components/ScrollButtonExample";

function doc() {
  const content_some_mix_data_examples = [
    { tag_type: "h2", text: "Cloud Managed Auth + Chat (Simple Site)" },

    {
      tag_type: "feature_options",
      options: [
        {
          text: "BASIC",
          description: [
            {
              tag_type: "p",
              text: "Simple implementation with minimal configuration",
            },
            {
              tag_type: "ol",
              items: [
                {
                  tag_type: "li",
                  text: "Add base script tag",
                  code: '<script src="basic.js"></script>',
                },
                {
                  tag_type: "li",
                  text: "Initialize with default settings",
                  code: "window.chat.init()",
                },
              ],
            },
          ],
        },
        {
          text: "ADVANCED",
          description: [
            {
              tag_type: "p",
              text: "Customizable implementation with multiple options",
            },
            {
              tag_type: "ul",
              items: [
                {
                  tag_type: "li",
                  text: "Add core library",
                  code: '<script src="advanced-core.js"></script>',
                },
                {
                  tag_type: "li",
                  text: "Add plugins",
                  code: '<script src="advanced-plugins.js"></script>',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag_type: "p",
      text: "This type of chat application is tailored for simple websites built with HTML, JavaScript, and CSS, typically used as informational sites. It is ideal for scenarios where the existing product lacks built-in authentication but requires the seamless integration of both authentication and chat functionality.",
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
                { text: "Signup/Login", link: "https://www.google.com/" },
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
          tag_type: "feature_options",
          options: [
            {
              text: "HEADFUL",
              description: [
                {
                  tag_type: "p",
                  text: "In this mode [HEADFUL], the header will include authentication options (Signup, Login, etc.) along with a chat box for user interaction.",
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
                          code: '<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>',
                        },
                        {
                          tag_type: "li",
                          text: "Run Setup & Initialization together",
                          extra_text:
                            "Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",
                          code: '<script>\n  document.addEventListener("DOMContentLoaded", async function () {\n    const token = localStorage.getItem("tezkit_token");\n    if (token) {\n      window.chathead.initialize(token);\n    } else {\n      window.chathead.setUp(\n        "<Your App Name>", \n        "<Your Api Key>", \n        JSON.stringify({\n          "header_theme": {\n            "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color\n          },\n          "chat_opener_theme": {\n            "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color\n          }\n        }),\n        false, // for HEADLESS MODE\n        "/index.html"\n      );\n    }\n  });\n</script>\n            ',
                        },
                      ],
                    },
                    {
                      tag_type: "li",
                      text: "Verify the Results!",
                      more_text:
                        "Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                      img: "Asset/headerful_example.png",
                    },
                    {
                      text: "Refer to the example code here.",
                      link_parts: [
                        {
                          text: "example code",
                          link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
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
            {
              text: "HEADLESS",
              description: [
                {
                  tag_type: "p",
                  text: "In this mode, instead of displaying a standard header, all the authentication components (Signup, Login, etc.) are grouped together. These components are designed to be flexible, allowing you to place them in a fixed position anywhere within your custom header or elsewhere in your layout. Additionally, this mode includes a chat box for user interaction",
                },
                {
                  tag_type: "p",
                  text: "To integrate Chat this into your app, Do the following.",
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
                          code: '<script src="https://cdn.jsdelivr.net/gh/codekeep18feb/addchat-client-cdn-files@v1.0.2/bundle.js"></script>',
                        },
                        {
                          tag_type: "li",
                          text: "Run Setup & Initialization together",
                          extra_text:
                            "Since this a simple site having one root file (index.html) we can run both (Setup & Initialization) together; Above is an example of it using LocalStorage But the same is applicable for cookies and SessionStorage",
                          code: '<script>\n  document.addEventListener("DOMContentLoaded", async function () {\n    const token = localStorage.getItem("tezkit_token");\n    if (token) {\n      window.chathead.initialize(token);\n    } else {\n      window.chathead.setUp(\n        "<Your App Name>", \n        "<Your Api Key>", \n        JSON.stringify({\n          "header_theme": {\n            "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color\n          },\n          "chat_opener_theme": {\n            "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color\n          }\n        }),\n        true, // for HEADLESS MODE\n        "/index.html"\n      );\n    }\n  });\n</script>\n            ',
                        },
                      ],
                    },
                    {
                      tag_type: "li",
                      text: "Point the Location to show the to place the Authentication Components.",
                      extra_text:
                        "Insert the following div into any desired location within your HTML page where you want the Authentication Component to appear.",
                      code: '<div id="tezkit-auth-area" style="min-width: 200px;"> </div>',
                    },
                    {
                      tag_type: "li",
                      text: "Verify the Results!",
                      more_text:
                        "Kindly verify if you see the header on the top of your page and chat icon on the bottom of your page. like in below image ",
                      img: "Asset/headerful_example.png",
                    },
                    {
                      text: "Refer to the example code here.",
                      link_parts: [
                        {
                          text: "example code",
                          link: "https://github.com/codekeep18feb/examples/tree/main/vanila_js_sites/p2a_v1_clients",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "video",
                  src: "https://www.youtube.com/watch?v=MKatoeFYeb8",
                  desc: "Demo for P2A V1 [HeadLess]",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const content_non_collapsable_list = [
    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Nested List Example",
        },
        {
          tag_type: "ol",
          items: [
            {
              tag_type: "li",
              text: "Main Step 1",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Substep 1.1",
                  sub_items: [
                    {
                      tag_type: "li",
                      text: "Detail 1.1.1",
                      code: "npm install package-1",
                    },
                    {
                      tag_type: "li",
                      text: "Detail 1.1.2",
                      link_parts: [
                        {
                          text: "documentation",
                          link: "https://example.com/docs",
                        },
                      ],
                    },
                  ],
                },
                {
                  tag_type: "li",
                  text: "Substep 1.2",
                  code: "console.log('Hello World')",
                },
              ],
            },
            {
              tag_type: "li",
              text: "Main Step 2",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Substep 2.1",
                  sub_items: [
                    {
                      tag_type: "li",
                      text: "Nested substep 2.1.1",
                      extra_text: "This is additional information",
                    },
                    {
                      tag_type: "li",
                      text: "Nested substep 2.1.2",
                      img: "path/to/image.png",
                    },
                  ],
                },
              ],
            },
            {
              tag_type: "li",
              text: "Main Step 3",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Simple substep without nesting",
                },
              ],
            },
          ],
        },
        {
          tag_type: "ul",
          items: [
            {
              tag_type: "li",
              text: "Bullet Point 1",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Sub-bullet 1",
                  sub_items: [
                    {
                      tag_type: "li",
                      text: "Sub-sub-bullet",
                      code: "const deep = true;",
                    },
                  ],
                },
              ],
            },
            {
              tag_type: "li",
              text: "Bullet Point 2",
            },
          ],
        },
      ],
    },
  ];

  const content_collapsable_list_ikd = [
    {
      tag_type: "ol",
      items: [
        {
          tag_type: "li",
          text: "Main Step 1",
          sub_items: [
            {
              tag_type: "li",
              text: "Substep 1.1",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Nested Detail",
                  code: "npm install package",
                  sub_items: [
                    {
                      tag_type: "li",
                      text: "Level 4 Detail",
                      sub_items: [
                        {
                          tag_type: "li",
                          text: "Level 5 Deepest Detail",
                          code: "node script.js",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      property: {
        collapse: {
          collapsable: true,
          fc_non_collapsable: true,
        },
      },
    },
  ];

  const content_collapsable_list = [
    {
      tag_type: "ol",
      items: [
        {
          tag_type: "li",
          text: "Main Step 1",
          sub_items: [
            {
              tag_type: "li",
              text: "Substep 1.1",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Nested Detail",
                  code: "npm install package",
                },
              ],
            },
          ],
        },
      ],
      property: { collapse: { collapsable: true } },
    },
  ];

  const new_contents = [
    {
      tag_type: "breadcrumbs",
      items: [
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/docs" },
        { label: "New Features" },
      ],
    },
    {
      tag_type: "h2",
      text: "Component Demo Section",
    },
    {
      tag_type: "accordion",
      title: "API Reference",
      children: [
        {
          tag_type: "table",
          headers: ["Parameter", "Type", "Description"],
          rows: [
            ["title", "string", "Component title"],
            ["content", "array", "Content items"],
            ["collapsable", "boolean", "Toggle collapse feature"],
          ],
        },
      ],
    },
    {
      tag_type: "h3",
      text: "Example Usage",
    },
    {
      tag_type: "code_with_copy",
      code: "npm install @awesome/docs-components",
      language: "bash",
    },
    {
      tag_type: "accordion",
      title: "Configuration Guide",
      children: [
        {
          tag_type: "p",
          text: "Here's how to configure the components:",
        },
        {
          tag_type: "code",
          text: `
  <script>
    document.addEventListener("DOMContentLoaded", async function () {
      const token = localStorage.getItem("tezkit_token");
      if (token) {
        window.chathead.initialize(token);
      } else {
        window.chathead.setUp(
          "<Your App Name>", 
          "<Your Api Key>", 
          JSON.stringify({
            "header_theme": {
              "backgroundColor": "rgb(30, 136, 125)" //to override the header background Color
            },
            "chat_opener_theme": {
              "backgroundColor": "rgb(41, 48, 78)" //to override the chatBox background Color
            }
          }),
          false, // for HEADLESS MODE
          "/index.html"
        );
      }
    });
  </script>
          `,
          show_copy: true,
        },
      ],
    },
  ];

  const sampleContent = [
    {
      tag_type: "callout",
      type: "warning",
      title: "Important Note",
      children: [
        {
          tag_type: "p",
          text: "This feature is currently in beta. Use with caution.",
        },
      ],
    },
    {
      tag_type: "steps",
      items: [
        {
          title: "Installation",
          content: [
            {
              tag_type: "code",
              text: "npm install your-package",
            },
          ],
        },
        {
          title: "Configuration",
          content: [
            {
              tag_type: "p",
              text: "Create a config file in your root directory",
            },
          ],
        },
      ],
    },
    {
      tag_type: "tabs",
      items: [
        {
          label: "JavaScript",
          content: [
            {
              tag_type: "code",
              text: "console.log('Hello World');",
            },
          ],
        },
        {
          label: "Python",
          content: [
            {
              tag_type: "code",
              text: "print('Hello World')",
            },
          ],
        },
      ],
    },
    {
      tag_type: "p",
      text: "Press ",
      children: [
        {
          tag_type: "kbd",
          keys: ["Ctrl", "S"],
        },
        " to save your changes",
      ],
    },
  ];

  const demoContent = [
    {
      tag_type: "breadcrumbs",
      items: [
        { label: "Home", href: "/" },
        { label: "Documentation", href: "/docs" },
        { label: "Component Demo" },
      ],
    },
    {
      tag_type: "h1",
      text: "Comprehensive Component Demo",
    },
    {
      tag_type: "callout",
      type: "info",
      title: "Demo Guide",
      children: [
        {
          tag_type: "p",
          text: "This document showcases all available components in various nested configurations.",
        },
      ],
    },
    {
      tag_type: "steps",
      items: [
        {
          title: "Setup",
          content: [
            {
              tag_type: "code_with_copy",
              code: "npm install demo-package",
              language: "bash",
            },
            {
              tag_type: "p",
              text: "Requires Node.js 18+",
            },
          ],
        },
        {
          title: "Configuration",
          content: [
            {
              tag_type: "ol",
              items: [
                {
                  tag_type: "li",
                  text: "Create config file",
                  code: "touch config.json",
                },
                {
                  tag_type: "li",
                  text: "Add basic setup",
                  sub_items: [
                    {
                      tag_type: "code",
                      text: JSON.stringify({ debug: true }, null, 2),
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
      tag_type: "tabs",
      items: [
        {
          label: "JavaScript",
          content: [
            {
              tag_type: "code_with_copy",
              code: "console.log('Hello World');",
              language: "javascript",
            },
          ],
        },
        {
          label: "Python",
          content: [
            {
              tag_type: "code_with_copy",
              code: "print('Hello World')",
              language: "python",
            },
          ],
        },
      ],
    },
    {
      tag_type: "table",
      headers: ["Component", "Type", "Description"],
      rows: [
        ["Button", "Atom", "Basic interactive element"],
        ["Card", "Molecule", "Container with header and content"],
        ["Grid", "Organism", "Responsive layout system"],
      ],
    },
    {
      tag_type: "accordion",
      title: "Advanced Features",
      children: [
        {
          tag_type: "h3",
          text: "Collapsible Lists",
        },
        {
          tag_type: "ol",
          property: {
            collapse: {
              collapsable: true,
              fc_non_collapsable: true,
            },
          },
          items: [
            {
              tag_type: "li",
              text: "Main Feature",
              sub_items: [
                {
                  tag_type: "li",
                  text: "Sub Feature",
                  code: "enableFeature(true)",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag_type: "blockquote",
      text: "This component system provides exceptional flexibility for technical documentation.",
    },
    {
      tag_type: "p",
      children: [
        {
          tag_type: "text",
          text: "Use ",
        },
        {
          tag_type: "kbd",
          keys: ["Ctrl", "S"],
        },
        {
          tag_type: "text",
          text: " to save. Hover ",
        },
        {
          tag_type: "tooltip",
          content: [
            {
              tag_type: "code",
              text: "saveDocument()",
            },
          ],
          children: [
            {
              tag_type: "text",
              text: "here",
            },
          ],
        },
        {
          tag_type: "text",
          text: " for help.",
        },
      ],
    },
    {
      tag_type: "pagination",
      currentPage: 1,
      totalPages: 5,
      // onPageChange: (page) => console.log("Page changed to:", page)
    },
  ];

  const new_tags_content = [
    {
      tag_type: "side_nav",
      items: [
        { id: "getting-started", label: "Getting Started" },
        { id: "api-reference", label: "API Reference" },
      ],
    },
    {
      tag_type: "search",
    },
    {
      tag_type: "mermaid_diagram",
      code: `
        graph TD
          A[Client] --> B[Load Balancer]
          B --> C[Server 1]
          B --> D[Server 2]
      `,
    },
  ];

  const apiReferenceContent = [
    {
      tag_type: "api_table",
      properties: [
        {
          name: "user.id",
          type: "string",
          format: "UUIDv4",
          required: true,
          description: "Unique user identifier",
          version: "1.2.0",
        },
        {
          name: "user.email",
          type: "string",
          format: "email",
          required: true,
          description: "User's primary email address",
          validation: "RFC 5322 standard",
          example: "user@example.com",
        },
        {
          name: "user.preferences",
          type: "object",
          default: "{}",
          description: "User settings and preferences",
          properties: [
            {
              name: "theme",
              type: "string",
              enum: ["light", "dark", "system"],
              default: "light",
            },
            {
              name: "notifications",
              type: "object",
              properties: [
                { name: "email", type: "boolean", default: "true" },
                { name: "push", type: "boolean", default: "false" },
              ],
            },
          ],
        },
        {
          name: "pagination.limit",
          type: "integer",
          default: "25",
          min: 1,
          max: 100,
          description: "Number of items per page",
        },
        {
          name: "pagination.cursor",
          type: "string",
          description: "Base64 encoded pagination cursor",
          notes: "Use for deep pagination in large datasets",
        },
        {
          name: "metadata.tags",
          type: "array<string>",
          description: "Associated classification tags",
          example: '["admin", "beta-user"]',
        },
        {
          name: "deprecated_field",
          type: "string",
          status: "deprecated",
          description: "Legacy field scheduled for removal in v3.0",
          alternative: "Use new_field instead",
        },
      ],
    },
  ];

  const comprehensiveDemoContent = [
    {
      tag_type: "breadcrumbs",
      items: [
        { label: "Home", href: "/" },
        { label: "API Docs", href: "/api" },
        { label: "v2.3 Reference" },
      ],
    },
    {
      tag_type: "h1",
      text: "API Documentation v2.3",
    },
    {
      tag_type: "search",
    },
    {
      tag_type: "callout",
      type: "warning",
      title: "Migration Notice",
      children: [
        {
          tag_type: "p",
          text: "Version 2.3 contains breaking changes. Review the ",
          children: [
            {
              tag_type: "a",
              href: "/migration-guide",
              text: "migration guide",
            },
            {
              tag_type: "text",
              text: " before updating.",
            },
          ],
        },
      ],
    },
    {
      tag_type: "tabs",
      items: [
        {
          label: "REST API",
          content: [
            {
              tag_type: "code_with_copy",
              code: "curl -X GET https://api.example.com/v2/users",
              language: "bash",
            },
            {
              tag_type: "h3",
              text: "Response Format",
            },
            {
              tag_type: "code",
              text: JSON.stringify({ id: "uuid", name: "John Doe" }, null, 2),
              show_copy: true,
            },
          ],
        },
        {
          label: "GraphQL",
          content: [
            {
              tag_type: "code_with_copy",
              code: 'query { user(id: "123") { name email }}',
              language: "graphql",
            },
          ],
        },
      ],
    },
    {
      tag_type: "api_table",
      properties: [
        {
          name: "user.id",
          type: "string",
          format: "UUIDv4",
          required: true,
          description: "Globally unique identifier",
          example: '"550e8400-e29b-41d4-a716-446655440000"',
        },
        {
          name: "user.metadata.tags",
          type: "array<string>",
          description: "Classification tags",
          example: '["admin", "beta-tester"]',
        },
        {
          name: "pagination.limit",
          type: "integer",
          default: "50",
          min: 1,
          max: 1000,
          description: "Results per page",
        },
        {
          name: "legacy_token",
          type: "string",
          status: "deprecated",
          description: "Use OAuth2 tokens instead",
          version: "Removed in v3.0",
        },
      ],
    },
    {
      tag_type: "accordion",
      title: "Advanced Rate Limiting",
      children: [
        {
          tag_type: "h3",
          text: "Rate Limit Headers",
        },
        {
          tag_type: "ul",
          items: [
            {
              tag_type: "li",
              text: "X-RateLimit-Limit: Total requests allowed",
            },
            {
              tag_type: "li",
              text: "X-RateLimit-Remaining: Remaining requests",
            },
          ],
        },
      ],
    },
    {
      tag_type: "mermaid_diagram",
      code: `sequenceDiagram
        Client->>API: GET /users
        API->>Database: Query users
        Database-->>API: Return data
        API-->>Client: JSON response`,
    },
    {
      tag_type: "steps",
      items: [
        {
          title: "Authentication",
          content: [
            {
              tag_type: "code_with_copy",
              code: "Authorization: Bearer <token>",
              language: "text",
            },
          ],
        },
        {
          title: "Making Requests",
          content: [
            {
              tag_type: "ol",
              items: [
                {
                  tag_type: "li",
                  text: "Set Content-Type header",
                },
                {
                  tag_type: "li",
                  text: "Include API version in URL",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tag_type: "blockquote",
      text: "Always validate responses and handle errors gracefully.",
    },
    {
      tag_type: "p",
      children: [
        {
          tag_type: "text",
          text: "Need help? Use ",
        },
        {
          tag_type: "kbd",
          keys: ["Ctrl", "K"],
        },
        {
          tag_type: "text",
          text: " to open search or ",
        },
        {
          tag_type: "tooltip",
          content: [
            {
              tag_type: "a",
              href: "/support",
              text: "Contact Support",
            },
          ],
          children: [
            {
              tag_type: "text",
              text: "get assistance",
            },
          ],
        },
      ],
    },
    {
      tag_type: "pagination",
      currentPage: 1,
      totalPages: 5,
    },
    {
      tag_type: "side_nav",
      items: [
        { id: "getting-started", label: "Getting Started" },
        { id: "authentication", label: "Authentication" },
        { id: "endpoints", label: "Endpoints" },
      ],
    },
    {
      tag_type: "status_badge",
      type: "beta",
      text: "Experimental Feature",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("target-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <ContentRenderer key={1} content={content_collapsable_list_ikd} /> */}
      <ScrollButtonExample />
      pagination
      <ContentRenderer key={2} content={comprehensiveDemoContent} />
    </div>
  );
}

export default doc;
