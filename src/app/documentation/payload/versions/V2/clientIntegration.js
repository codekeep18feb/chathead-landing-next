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
        text: "Sageion boots in two ordered phases: setUp() prepares configuration and storage, and initialize() authenticates the user and mounts the chat UI. Pick your framework below, then pick the integration style that matches your app's structure.",
      },

      // ============================================================
      // LIFECYCLE CONTRACT — read first
      // ============================================================
      {
        tag_type: "callout",
        type: "warning",
        title: "⚠️ Lifecycle contract — read before you split anything",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                text: "setUp() must resolve before initialize() is called. initialize() reads the setup_done flag written by setUp() and refuses to run without it.",
              },
              {
                text: "Both functions throw a SageionSetupError on failure. Each also renders an error popup with a Reset Settings button.",
              },
              {
                text: "Never place setUp() and initialize() in two independent DOMContentLoaded listeners. DOM listeners do not chain await — initialize() will fire while setUp() is still in flight, and the SDK will reject it with \"initialize ran before setUp could finish.\"",
              },
              {
                text: "To split them across scripts, bridge them with a shared promise (see the Two-Block tab).",
              },
            ],
          },
          {
            tag_type: "p",
            text: "You can inspect the current phase at any time with window.magicchat_io.getSetupStatus(), which returns one of: \"idle\" | \"pending\" | \"done\" | \"failed\".",
          },
        ],
      },

      // ============================================================
      // STEP 1 — Load the scripts
      // ============================================================
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
                        text: "Locate the main entry file (typically index.html) and insert the following scripts. Socket.IO must load before the Sageion bundle.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>\n<script src="/node_modules/chathead-consumer-client/dist/bundle.js"></script>`,
                        language: "html",
                      },
                      {
                        tag_type: "p",
                        text: "Or, if you prefer the CDN build:",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>\n<script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>`,
                        language: "html",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "SDK global",
                        children: [
                          {
                            tag_type: "p",
                            text: "Loading the bundle exposes window.magicchat_io. Every example below uses that global.",
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
      },

      // ============================================================
      // STEP 2 — Pick your framework, then your integration style
      // ============================================================
      {
        tag_type: "div",
        className: "custom-list-item",
        children: [
          {
            tag_type: "h3",
            className: "list-item-header",
            text: "2. Decide how to place the Sageion chat box in your app.",
          },
        ],
      },
      {
        tag_type: "p",
        text: "Pick your framework below. Inside each framework, choose the integration style that matches your app's structure.",
      },

      // ============================================================
      // OUTER TABS — Framework
      // ============================================================
      {
        tag_type: "tabs",
        items: [
          // ==================== VANILLA JS ====================
          {
            label: "Vanilla JS",
            content: [
              {
                tag_type: "p",
                text: "Plain HTML + JavaScript. Choose one of the three integration styles below.",
              },

              // -------- INNER TABS — Integration Style --------
              {
                tag_type: "tabs",
                items: [
                  // ~~~~~ STYLE 1: SINGLE BLOCK ~~~~~
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block Implementation",
                      },
                      {
                        tag_type: "p",
                        text: "One async flow, both calls awaited in order. This is the simplest, safest setup and is what most apps should use.",
                      },
                      {
                        tag_type: "p",
                        text: "Use this when your app has a single entry HTML file and the chat box should appear across all routes.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  (async () => {
    try {
      [[[await window.magicchat_io.setUp(
        "your_app_name",                 // app_name
        "YOUR_API_KEY",                  // api_key (base64)
        "US",                            // region: "US" | "IN"
        "sageion-chat-root"              // chat_root_id (optional)
      );]]]

      // Optional: resolve uid from your own auth
      const token = localStorage.getItem("token");
      let payload = {};
      if (token) {
        const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await window.magicchat_io.initialize(payload);]]]

      [[[console.log("Sageion ready. Status:", window.magicchat_io.getSetupStatus());]]]
    } catch (err) {
      // The SDK already rendered an error popup. Log for diagnostics only.
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "success",
                        title: "Minimal form",
                        children: [
                          {
                            tag_type: "p",
                            text: "Only the first three arguments are required. chat_root_id has a sensible default — most apps can simply write:",
                          },
                          {
                            tag_type: "code_with_copy",
                            code: `await window.magicchat_io.setUp("[[your_app_name]]", "[[YOUR_API_KEY]]", "[[US]]");`,
                            language: "javascript",
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "warning",
                        title: "Don't split across two DOMContentLoaded listeners",
                        children: [
                          {
                            tag_type: "p",
                            text: "Two separate document.addEventListener(\"DOMContentLoaded\", …) blocks do not chain their awaits. initialize() will run before setUp() resolves and the SDK will reject it. If you need two blocks, use the Two-Block tab.",
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Parameter Details — setUp()",
                        children: [
                          {
                            tag_type: "table",
                            headers: ["Parameter", "Type", "Required", "Description"],
                            rows: [
                              ["app_name", "string", "Yes", "Unique application identifier."],
                              ["api_key", "string", "Yes", "Base64-encoded API key from App Details."],
                              ["region", "string", "Yes", "\"US\" or \"IN\" — used as the config lookup prefix."],
                              ["chat_root_id", "string", "No", "Optional DOM element id to mount the chat into. Falls back to document.body."],
                            ],
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Parameter Details — initialize()",
                        children: [
                          {
                            tag_type: "table",
                            headers: ["Field", "Type", "Description"],
                            rows: [
                              ["payload.uid", "string", "Required when dont_show_chat_box_at_logout is enabled for your app."],
                            ],
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Upgrading from a previous SDK version",
                        children: [
                          {
                            tag_type: "p",
                            text: "Earlier versions of the SDK accepted extra arguments (header_req, version). Both have been removed. If you were passing them, drop them and keep only the arguments shown above.",
                          },
                          {
                            tag_type: "table",
                            headers: ["Old call", "New call"],
                            rows: [
                              ["setUp(name, key, region, false, \"chat-root\")", "setUp(name, key, region, \"chat-root\")"],
                              ["setUp(name, key, region, false)", "setUp(name, key, region)"],
                              ["setUp(name, key, region)", "setUp(name, key, region) (unchanged)"],
                            ],
                          },
                        ],
                      },
                    ],
                  },

                  // ~~~~~ STYLE 2: TWO BLOCKS ~~~~~
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block Implementation",
                      },
                      {
                        tag_type: "p",
                        text: "Use this when setUp() and initialize() must live in different files, script tags, or templates — for example, a shared layout that loads setUp() and a page-specific template that loads initialize().",
                      },
                      {
                        tag_type: "callout",
                        type: "warning",
                        title: "Bridge with a shared promise",
                        children: [
                          {
                            tag_type: "p",
                            text: "Do not put the two calls into two independent DOMContentLoaded listeners. Publish the result of setUp() on a shared promise and chain initialize() off that promise in the second block.",
                          },
                        ],
                      },
                      {
                        tag_type: "h5",
                        text: "Script A — setUp() only",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup = (async function () {
    [[[await window.magicchat_io.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US",
      "sageion-chat-root"
    );]]]

    // Resolve the initialize() payload based on login state.
    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      if (res.ok) {
        const user = await res.json();
        return { uid: user.id.toString() };
      }
      localStorage.removeItem("token");
      return {};
    } catch {
      return {};
    }
  })();
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "h5",
                        text: "Script B — initialize() chained off Script A",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup
    [[[.then(payload => window.magicchat_io.initialize(payload))]]]
    .then(() => console.log("[Sageion] ready"))
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "success",
                        title: "Why this works",
                        children: [
                          {
                            tag_type: "p",
                            text: "Script B's .then only fires after Script A's setUp() resolves. If setUp() throws, .catch fires and initialize() is never called. The user sees exactly one error popup (rendered by setUp).",
                          },
                        ],
                      },
                    ],
                  },

                  // ~~~~~ STYLE 3: ROUTE-SPECIFIC ~~~~~
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific Implementation",
                      },
                      {
                        tag_type: "p",
                        text: "Use this when the chat box should only appear on certain pages. Run setUp() once from your root layout, and call initialize() only on routes where the chat is needed.",
                      },
                      {
                        tag_type: "h5",
                        text: "Root layout — setUp() runs once, on every page",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup = (async function () {
    [[[await window.magicchat_io.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US",
      "sageion-chat-root"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};
    try {
      const res = await fetch(\`\${window.__APP_CONFIG__.API_BASE_URL}/auth/profile\`, {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      if (res.ok) {
        const user = await res.json();
        return { uid: user.id.toString() };
      }
      localStorage.removeItem("token");
      return {};
    } catch { return {}; }
  })();
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "h5",
                        text: "Target route — initialize() runs only where chat is wanted",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup
    [[[.then(payload => window.magicchat_io.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Alternative: exclude_paths",
                        children: [
                          {
                            tag_type: "p",
                            text: "If you'd rather run initialize() everywhere and hide the chat on some pages, add the paths to exclude_paths in your Sageion app settings. The SDK checks this list inside initialize() and skips mounting on excluded routes.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== REACT ====================
          {
            label: "React",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "🚧 Coming soon",
                children: [
                  {
                    tag_type: "p",
                    text: "React-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside a top-level useEffect(() => { ... }, []) in your root component.",
                  },
                  {
                    tag_type: "code_with_copy",
                    code: `useEffect(() => {
  let cancelled = false;
  (async () => {
    try {
      [[[await window.magicchat_io.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US",
        "sageion-chat-root"
      );]]]

      const payload = await resolveUid(); // your own helper

      if (!cancelled) [[[await window.magicchat_io.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
  return () => { cancelled = true; };
}, []);`,
                    language: "javascript",
                  },
                ],
              },
            ],
          },

          // ==================== VUE ====================
          {
            label: "Vue",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "🚧 Coming soon",
                children: [
                  {
                    tag_type: "p",
                    text: "Vue-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside onMounted(async () => { ... }) in your root component.",
                  },
                ],
              },
            ],
          },

          // ==================== ANGULAR ====================
          {
            label: "Angular",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "🚧 Coming soon",
                children: [
                  {
                    tag_type: "p",
                    text: "Angular-specific integration guidance is being prepared. In the meantime, use the Vanilla JS examples above — they work unchanged inside ngOnInit() in your root component.",
                  },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // LOGIN / LOGOUT AT RUNTIME
      // ============================================================
      {
        tag_type: "h4",
        text: "Handling login & logout at runtime",
        selector_uid: "v2_login_logout_runtime",
      },
      {
        tag_type: "p",
        text: "setUp() runs once per page load. It does not re-run when the user logs in or out in place. To reflect auth changes without a page reload, call initialize() again with the new uid, or call logout().",
      },
      {
        tag_type: "code_with_copy",
        code: `// After a successful login (no page reload):
async function onLogin(user) {
  [[[await window.magicchat_io.initialize({ uid: user.id.toString() });]]]
}

// On logout:
function onLogout() {
  [[[window.magicchat_io.logout();]]]  // clears SDK storage, disconnects sockets, resets state
  // To re-open the chat as anonymous immediately:
  // await window.magicchat_io.initialize();
}`,
        language: "javascript",
      },

      // ============================================================
      // FAILURE REFERENCE
      // ============================================================
      {
        tag_type: "h4",
        text: "Failure reference",
      },
      {
        tag_type: "p",
        text: "Both setUp() and initialize() throw a SageionSetupError on failure. The four most common messages are:",
      },
      {
        tag_type: "table",
        headers: ["Error", "Cause", "Fix"],
        rows: [
          [
            "Wrong `api_key` found in credentials",
            "api_key in your config does not match the cached auth_key",
            "Correct the key, then click Reset Settings in the error popup (or call magicchat_io.logout())",
          ],
          [
            "The current domain (X) is not authorized",
            "Your hostname is not in the app's whitelabel_domains",
            "Ask your Sageion admin to add the domain",
          ],
          [
            "initialize ran before setUp could finish",
            "initialize() was called before setUp() resolved — usually from two independent DOMContentLoaded listeners",
            "Use Single-Block or Two-Block from the tabs above",
          ],
          [
            "initialize skipped: setUp failed earlier",
            "setUp() failed and you still called initialize()",
            "Fix the underlying setUp failure. The original error popup is still on screen.",
          ],
        ],
      },

      // ============================================================
      // EXAMPLE IMPLEMENTATIONS
      // ============================================================
      {
        tag_type: "h4",
        text: "Example Implementations",
        selector_uid: "v2_code_example",
      },
      {
        tag_type: "p",
        text: "View complete working implementations on GitHub:",
      },
      {
        tag_type: "a",
        href: "https://github.com/sageion-core/example__v1/blob/b166e027ad4e841f2698e4817324fef1c7e8d347/index.html#L33",
        text: "Single-Block Example",
      },
      {
        tag_type: "a",
        href: "https://github.com/sageion-core/example__v2/blob402cbcd3d07fc8cca952fdf6ed1c18b5a2a90b1a/templates/base.html#L95",
        text: "Two-Block Example (logout cleanup included)",
      },
    ],
  },
];