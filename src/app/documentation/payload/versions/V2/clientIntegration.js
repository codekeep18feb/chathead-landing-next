export const clientIntegration = [
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
                              ["app_name", "string", "Unique application identifier"],
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
                              ["app_name", "string", "Unique application identifier"],
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
                              ["app_version", "string", "Sageion application version"],
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
    ],
  },
];
