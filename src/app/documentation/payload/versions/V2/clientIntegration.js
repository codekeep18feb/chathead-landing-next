// clientIntegration.js
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
        text: "Sageion loads in two ordered phases. [[setUp()]] prepares configuration and storage — it runs [[once per page load]]. [[initialize()]] mounts the chat UI and reflects the current user — it runs whenever the auth state changes.",
      },
      {
        tag_type: "p",
        text: "One call handles every auth transition. Pass [[{ uid }]] when a user is logged in. Pass [[{}]] when they are anonymous or have logged out. The SDK figures out the rest — no separate logout call, no page reload, no re-invocation of [[setUp()]].",
      },

      // ============================================================
      // LIFECYCLE
      // ============================================================
      {
        tag_type: "callout",
        type: "info",
        title: "Lifecycle at a glance",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                tag_type: "li",
                text: "Load the Socket.IO and Sageion bundle [[<script>]] tags once, in your app's HTML shell.",
              },
              {
                tag_type: "li",
                text: "Call [[setUp()]] once — after the scripts load, before anything else.",
              },
              {
                tag_type: "li",
                text: "Call [[initialize({ uid })]] when a user is logged in, or [[initialize({})]] when they are anonymous.",
              },
              {
                tag_type: "li",
                text: "When the user logs in or out, call [[initialize()]] again with the new state. The SDK handles the transition.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // AUTH STATE CONTRACT
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "🔄 One method handles every auth transition",
        children: [
          {
            tag_type: "p",
            text: "You only need one method to reflect auth changes: [[initialize()]]. The SDK handles every transition — login, logout, user-switch — without reloading the page.",
          },
          {
            tag_type: "table",
            headers: ["Current state", "Call", "What happens"],
            rows: [
              ["Anonymous visitor", "[[initialize({ uid: \"Alice's id\" })]]", "Chat opens as Alice."],
              ["Logged in as Alice", "[[initialize({})]]", "Alice is logged out; chat stays open as anonymous."],
              ["Logged in as Alice", "[[initialize({ uid: \"Alice's id\" })]]", "Safe no-op — nothing changes."],
              ["Logged in as Alice", "[[initialize({ uid: \"Bob's id\" })]]", "Chat switches to Bob."],
              ["Anonymous visitor", "[[initialize({})]]", "Safe no-op."],
            ],
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
                text: "1. Load the scripts",
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
                        text: "Locate your app's root HTML shell (usually [[index.html]], [[app.html]], or a base layout template) and insert the following scripts. Socket.IO must load before the Sageion bundle.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>`,
                        language: "html",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "SDK global",
                        children: [
                          {
                            tag_type: "p",
                            text: "Loading the bundle exposes [[window.sageion_os]]. Every example below uses that global. No npm install is required.",
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "success",
                        title: "Optional: custom mount point",
                        children: [
                          {
                            tag_type: "p",
                            text: "By default, the chat bubble floats in the bottom-right corner of the page. If you want it anchored inside a specific container, add an empty element to your markup and pass its id as [[chat_root_id]] to [[setUp()]]:",
                          },
                          {
                            tag_type: "code_with_copy",
                            code: `<div id="sageion-chat-root"></div>`,
                            language: "html",
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
      // STEP 2 — Framework
      // ============================================================
      {
        tag_type: "div",
        className: "custom-list-item",
        children: [
          {
            tag_type: "h3",
            className: "list-item-header",
            text: "2. Pick your framework",
          },
        ],
      },
      {
        tag_type: "p",
        text: "Pick your framework from the tabs below. Inside each you will find three integration styles — choose the one that matches your app's structure. All three are valid; they differ only in how the two calls are split across files.",
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
                text: "Plain HTML and JavaScript. This tab also covers jQuery, Alpine.js, HTMX, and Stimulus — the SDK treats them identically.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Vanilla JS",
                      },
                      {
                        tag_type: "p",
                        text: "Both calls awaited in order, inside a single [[<script>]] tag.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  (async () => {
    try {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      let payload = {};

      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await window.sageion_os.initialize(payload);]]]
    } catch (err) {
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
                            text: "Only the first three arguments are required. Most apps simply write:",
                          },
                          {
                            tag_type: "code_with_copy",
                            code: `[[[await window.sageion_os.setUp("your_app_name", "YOUR_API_KEY", "US");]]]`,
                            language: "javascript",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Vanilla JS",
                      },
                      {
                        tag_type: "p",
                        text: "Use this when [[setUp()]] and [[initialize()]] must live in different files or script tags.",
                      },
                      {
                        tag_type: "callout",
                        type: "warning",
                        title: "Bridge with a shared promise",
                        children: [
                          {
                            tag_type: "p",
                            text: "Do not split the two calls across two independent [[DOMContentLoaded]] listeners. Publish [[setUp()]] on a shared promise and chain [[initialize()]] off it.",
                          },
                        ],
                      },
                      {
                        tag_type: "h5",
                        text: "Script A — [[setUp()]] only",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
                        text: "Script B — [[initialize()]] chained off Script A",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Vanilla JS",
                      },
                      {
                        tag_type: "p",
                        text: "Run [[setUp()]] from your shared layout, and call [[initialize()]] only on pages where the widget should appear.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- Shared layout: setUp runs on every page -->
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

<!-- Support page: initialize only where chat is wanted -->
<script>
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "If the bundle script has not finished loading, [[window.sageion_os]] will be undefined. Place your code after the bundle script tag, or wrap it in a check.",
                      },
                      {
                        tag_type: "li",
                        text: "In a single-page app with a client-side router, remember that [[setUp()]] only runs once per page load — not on client-side route changes.",
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
                tag_type: "p",
                text: "Vite, CRA, or any React app that renders into a single HTML shell. The Sageion bundle is loaded via [[<script>]] tags in [[index.html]] — not as an npm package.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — React",
                      },
                      {
                        tag_type: "p",
                        text: "Both calls run inside a top-level [[useEffect]] in your root component.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/App.jsx
import { useEffect, useRef } from "react";

function App() {
  const ran = useRef(false);

  useEffect(() => {
    // Guard against React 18 StrictMode double-invoke in dev
    if (ran.current) return;
    ran.current = true;

    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  }, []);

  return <YourApp />;
}

export default App;`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "success",
                        title: "Reflecting login & logout at runtime",
                        children: [
                          {
                            tag_type: "p",
                            text: "Add a second effect that watches your auth state. This is the only SDK code you need for login, logout, and user-switch:",
                          },
                          {
                            tag_type: "code_with_copy",
                            code: `// Inside App.jsx, using your own auth context
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

function useSageionUserSync() {
  const { user } = useAuth();
  const booted = useRef(false);

  useEffect(() => {
    if (!booted.current) { booted.current = true; return; }

    window.sageion_os
      .initialize(user ? { uid: String(user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }, [user]);
}`,
                            language: "javascript",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — React",
                      },
                      {
                        tag_type: "p",
                        text: "Use this when [[setUp()]] belongs to a shared root layout and [[initialize()]] belongs to a route. Publish [[setUp()]]'s result on a shared promise and chain from the route.",
                      },
                      {
                        tag_type: "h5",
                        text: "Root layout — [[setUp()]] only",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/RootLayout.jsx
import { useEffect, useRef } from "react";

export default function RootLayout({ children }) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup = (async function () {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      if (!token) return {};

      try {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
  }, []);

  return children;
}`,
                        language: "javascript",
                      },
                      {
                        tag_type: "h5",
                        text: "Route component — [[initialize()]] chained off the shared promise",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/routes/ChatRoute.jsx
import { useEffect, useRef } from "react";

export default function ChatRoute() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  }, []);

  return <YourPage />;
}`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — React",
                      },
                      {
                        tag_type: "p",
                        text: "Run [[setUp()]] from your root layout, then call [[initialize()]] only inside the routes that should show the chat.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/routes/SupportRoute.jsx
import { useEffect, useRef } from "react";

export default function SupportRoute() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  }, []);

  return <Support />;
}`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "React StrictMode double-invokes effects in dev. The [[ran.current]] guard prevents double setup. In production this never happens.",
                      },
                      {
                        tag_type: "li",
                        text: "If you use React Router and have multiple layouts, only include the bootstrap in the layout that wraps all routes.",
                      },
                      {
                        tag_type: "li",
                        text: "Do not import the bundle as an npm package — the global [[window.sageion_os]] is what every example uses.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== NEXT.JS ====================
          {
            label: "Next.js",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "App Router only (Next.js 13+)",
                children: [
                  {
                    tag_type: "p",
                    text: "This tab covers the [[app/]] directory. For the older [[pages/]] router, use [[_app.jsx]] and [[_document.jsx]] — the code is identical, just placed in those files.",
                  },
                ],
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Next.js App Router",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 1 — add scripts to the root layout",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/layout.jsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        [[[<Script
          src="https://cdn.socket.io/4.1.2/socket.io.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"
          strategy="beforeInteractive"
        />]]]

        <SageionBootstrap />
      </body>
    </html>
  );
}`,
                        language: "javascript",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 2 — create the bootstrap component",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/components/SageionBootstrap.jsx
"use client";

import { useEffect, useRef } from "react";

export default function SageionBootstrap() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  }, []);

  return null;
}`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Next.js",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/components/RootSetup.jsx
"use client";
import { useEffect, useRef } from "react";

export default function RootSetup() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup = (async function () {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      if (!token) return {};

      try {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
  }, []);

  return null;
}`,
                        language: "javascript",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/chat/page.jsx
"use client";
import { useEffect, useRef } from "react";

export default function ChatPage() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  }, []);

  return <Chat />;
}`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Next.js",
                      },
                      {
                        tag_type: "p",
                        text: "Same as Two-Block, but the [[initialize()]] call appears only in routes that should show the widget.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/support/page.jsx
"use client";
import { useEffect, useRef } from "react";

export default function SupportPage() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  }, []);

  return <Support />;
}`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "The bootstrap component must be a client component ([[\"use client\"]] at the top). Server components have no [[useEffect]] and no [[window]].",
                      },
                      {
                        tag_type: "li",
                        text: "Use [[strategy=\"beforeInteractive\"]] on the [[<Script>]] tags so Socket.IO is guaranteed to load before the Sageion bundle.",
                      },
                      {
                        tag_type: "li",
                        text: "If your layout has a fixed footer, add bottom padding to avoid overlap with the chat bubble — or pass a specific [[chat_root_id]].",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== VUE 3 ====================
          {
            label: "Vue",
            content: [
              {
                tag_type: "p",
                text: "Vue 3 with the Composition API. The bundle is loaded via [[<script>]] tags in your [[index.html]].",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Vue 3",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/App.vue -->
<script setup>
import { onMounted } from "vue";

onMounted(async () => {
  try {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    let payload = {};

    if (token) {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      if (res.ok) {
        const user = await res.json();
        payload = { uid: user.id.toString() };
      } else {
        localStorage.removeItem("token");
      }
    }

    [[[await window.sageion_os.initialize(payload);]]]
  } catch (err) {
    console.error("[Sageion] bootstrap failed:", err);
  }
});
</script>

<template>
  <router-view />
</template>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "success",
                        title: "Reflecting login & logout at runtime",
                        children: [
                          {
                            tag_type: "code_with_copy",
                            code: `import { watch } from "vue";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();

watch(
  () => auth.user,
  (user) => {
    window.sageion_os
      .initialize(user ? { uid: String(user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }
);`,
                            language: "javascript",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Vue 3",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/App.vue -->
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
});
</script>`,
                        language: "javascript",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/views/ChatView.vue -->
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
});
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Vue 3",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/views/SupportView.vue -->
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
});
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "If you use Pinia or Vuex for auth state, watch the store's user getter and call [[initialize()]] from that watcher.",
                      },
                      {
                        tag_type: "li",
                        text: "Vue's [[onMounted]] runs after the component mounts, which is after the HTML shell has loaded — the SDK global is guaranteed to be present.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== NUxt ====================
          {
            label: "Nuxt",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "Nuxt 3 only",
                children: [
                  {
                    tag_type: "p",
                    text: "This tab covers Nuxt 3. Nuxt 2 is end-of-life and not covered.",
                  },
                ],
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Nuxt 3",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 1 — declare the scripts in nuxt.config.ts",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        [[[{ src: "https://cdn.socket.io/4.1.2/socket.io.min.js" },
        { src: "https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js" }]]]
      ]
    }
  }
});`,
                        language: "javascript",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 2 — create a client-only plugin",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// plugins/sageion.client.ts
export default defineNuxtPlugin(() => {
  if (!window.sageion_os) return;

  (async () => {
    try {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      let payload = {};

      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await window.sageion_os.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
});`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "warning",
                        title: "Why .client.ts?",
                        children: [
                          {
                            tag_type: "p",
                            text: "The [[.client]] suffix tells Nuxt to skip this plugin during server-side rendering. Sageion runs only in the browser — it expects [[window]] and a real DOM.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Nuxt 3",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// plugins/sageion-setup.client.ts
export default defineNuxtPlugin(() => {
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
});`,
                        language: "javascript",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- pages/chat.vue -->
<script setup>
onMounted(() => {
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
});
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Nuxt 3",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- pages/support.vue -->
<script setup>
onMounted(() => {
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
});
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Always use the [[.client]] plugin suffix. Server-side plugins run in Node, where [[window]] does not exist.",
                      },
                      {
                        tag_type: "li",
                        text: "If you use Nuxt's [[useState]] for auth, watch it in a client plugin and call [[initialize()]] when it changes.",
                      },
                    ],
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
                tag_type: "p",
                text: "Angular 15+. Scripts go in [[src/index.html]]. The bootstrap runs in a root component's [[ngOnInit]].",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Angular",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/app/app.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    try {
      [[[await (window as any).sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      let payload: any = {};

      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await (window as any).sageion_os.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  }
}`,
                        language: "typescript",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Declare the global for strict TypeScript",
                        children: [
                          {
                            tag_type: "code_with_copy",
                            code: `// src/types/global.d.ts
declare global {
  interface Window {
    sageion_os: any;
    __sageionSetup: any;
  }
}
export {};`,
                            language: "typescript",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Angular",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/app/app.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  ngOnInit() {
    (window as any).__sageionSetup = (async function () {
      [[[await (window as any).sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      if (!token) return {};

      try {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
  }
}`,
                        language: "typescript",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/app/chat/chat.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
})
export class ChatComponent implements OnInit {
  ngOnInit() {
    (window as any).__sageionSetup
      [[[.then((payload: any) => (window as any).sageion_os.initialize(payload))]]]
      .catch((err: any) => console.error("[Sageion] bootstrap failed:", err));
  }
}`,
                        language: "typescript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Angular",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/app/support/support.component.ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
})
export class SupportComponent implements OnInit {
  ngOnInit() {
    (window as any).__sageionSetup
      [[[.then((payload: any) => (window as any).sageion_os.initialize(payload))]]]
      .catch((err: any) => console.error("[Sageion] bootstrap failed:", err));
  }
}`,
                        language: "typescript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Angular's strict TypeScript will complain about [[window.sageion_os]]. Cast to [[any]] or declare the global.",
                      },
                      {
                        tag_type: "li",
                        text: "If your app has a route guard that redirects on auth change, make sure [[initialize()]] runs after the guard resolves — otherwise the widget may initialize before your app knows who the user is.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== SVELTE ====================
          {
            label: "Svelte",
            content: [
              {
                tag_type: "p",
                text: "Svelte 4/5 and SvelteKit. Scripts go in your HTML shell — [[index.html]] for Svelte, [[src/app.html]] for SvelteKit.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — SvelteKit",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 1 — add scripts to app.html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/app.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>

    [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
    <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]
  </body>
</html>`,
                        language: "html",
                      },
                      {
                        tag_type: "h5",
                        text: "Step 2 — bootstrap in the root layout",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from "svelte";

  onMount(async () => {
    try {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      let payload = {};

      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await window.sageion_os.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  });
</script>

<slot />`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — SvelteKit",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.__sageionSetup = (async function () {
      [[[await window.sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      if (!token) return {};

      try {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
  });
</script>

<slot />`,
                        language: "javascript",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/routes/chat/+page.svelte -->
<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.__sageionSetup
      [[[.then((payload) => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  });
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — SvelteKit",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/routes/support/+page.svelte -->
<script>
  import { onMount } from "svelte";

  onMount(() => {
    window.__sageionSetup
      [[[.then((payload) => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  });
</script>`,
                        language: "javascript",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "In SvelteKit, use [[onMount]] rather than top-level script code — top-level code also runs during SSR, where [[window]] does not exist.",
                      },
                      {
                        tag_type: "li",
                        text: "For plain Svelte (not SvelteKit), put the scripts in [[index.html]] and run the bootstrap in the root [[App.svelte]]'s [[onMount]].",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== REMIX ====================
          {
            label: "Remix",
            content: [
              {
                tag_type: "callout",
                type: "warning",
                title: "Verify against your Remix version",
                children: [
                  {
                    tag_type: "p",
                    text: "Remix 2 and React Router 7 (its successor) have similar but not identical conventions. The pattern below is correct in shape — adapt to your specific version.",
                  },
                ],
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Remix",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// app/root.tsx
import { useEffect, useRef } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

export default function App() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />

        [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
        <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

        <Scripts />
      </body>
    </html>
  );
}`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Remix",
                      },
                      {
                        tag_type: "p",
                        text: "Same shape as the React split pattern. Publish [[setUp()]] from [[root.tsx]] on a shared promise and chain [[initialize()]] from a route.",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Remix",
                      },
                      {
                        tag_type: "p",
                        text: "Same as Two-Block, but [[initialize()]] is called only in the routes that should show the widget.",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Scripts must go inside [[<body>]] before [[<Scripts />]] so they load in the right order after hydration.",
                      },
                      {
                        tag_type: "li",
                        text: "Remix hydration is asynchronous. Ensure [[window.sageion_os]] exists before calling [[setUp()]] — guard with a check if needed.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== ASTRO ====================
          {
            label: "Astro",
            content: [
              {
                tag_type: "p",
                text: "Astro ships zero JavaScript by default. Sageion is loaded as a client script — either globally in the base layout, or as an island where you need it.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Astro",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `---
// src/layouts/BaseLayout.astro
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>{Astro.props.title}</title>
  </head>
  <body>
    <slot />

    [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
    <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_name",
            "YOUR_API_KEY",
            "US"
          );]]]

          const token = localStorage.getItem("token");
          let payload = {};

          if (token) {
            const res = await fetch("https://api.yourbackend.com/auth/profile", {
              headers: { Authorization: \`Bearer \${token}\` }
            });
            if (res.ok) {
              const user = await res.json();
              payload = { uid: user.id.toString() };
            } else {
              localStorage.removeItem("token");
            }
          }

          [[[await window.sageion_os.initialize(payload);]]]
        } catch (err) {
          console.error("[Sageion] bootstrap failed:", err);
        }
      })();
    </script>
  </body>
</html>`,
                        language: "astro",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Astro",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/layouts/BaseLayout.astro -->
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

<slot />`,
                        language: "astro",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/pages/chat.astro -->
<script>
  window.__sageionSetup
    [[[.then((payload) => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "astro",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Astro",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/pages/support.astro -->
<script>
  window.__sageionSetup
    [[[.then((payload) => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "astro",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Plain [[<script>]] tags in Astro run on the client. That is what we want here.",
                      },
                      {
                        tag_type: "li",
                        text: "If you use Astro islands for other interactive parts of the page, they will not interfere with Sageion — the SDK manages its own DOM subtree.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== QWIK ====================
          {
            label: "Qwik",
            content: [
              {
                tag_type: "callout",
                type: "warning",
                title: "Verify against your Qwik version",
                children: [
                  {
                    tag_type: "p",
                    text: "Qwik's resumability model and its [[useVisibleTask$]] primitive are specific. The pattern below is correct in shape — adapt to your specific Qwik version's current API.",
                  },
                ],
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Qwik City",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/root.tsx
import { component$, useVisibleTask$, useSignal } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";

export default component$(() => {
  const booted = useSignal(false);

  useVisibleTask$(async () => {
    if (booted.value) return;
    booted.value = true;

    try {
      [[[await (window as any).sageion_os.setUp(
        "your_app_name",
        "YOUR_API_KEY",
        "US"
      );]]]

      const token = localStorage.getItem("token");
      let payload: any = {};

      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) {
          const user = await res.json();
          payload = { uid: user.id.toString() };
        } else {
          localStorage.removeItem("token");
        }
      }

      [[[await (window as any).sageion_os.initialize(payload);]]]
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
      </head>
      <body>
        <RouterOutlet />

        [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
        <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]
      </body>
    </QwikCityProvider>
  );
});`,
                        language: "typescript",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Why useVisibleTask$?",
                        children: [
                          {
                            tag_type: "p",
                            text: "[[useVisibleTask$]] runs only on the client, after Qwik has loaded enough JavaScript to execute it. This is the right hook for talking to [[window]].",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Qwik City",
                      },
                      {
                        tag_type: "p",
                        text: "Same shape as the React split pattern. Publish [[setUp()]] from a root component and chain [[initialize()]] from a route.",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Qwik City",
                      },
                      {
                        tag_type: "p",
                        text: "Same as Two-Block, but [[initialize()]] is called only in the routes that should show the widget.",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Qwik's default is to avoid JavaScript until absolutely necessary. [[useVisibleTask$]] is the escape hatch that tells Qwik \"run this on the client when the component is visible\".",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== DJANGO ====================
          {
            label: "Django",
            content: [
              {
                tag_type: "p",
                text: "Server-rendered HTML with Django templates. Scripts go in [[base.html]]. The bootstrap runs in a [[<script>]] block at the bottom of the page.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Django Templates",
                      },
                      {
                        tag_type: "h5",
                        text: "templates/base.html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
  {% block content %}{% endblock %}

  [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
  <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  </script>

  {% block extra_scripts %}{% endblock %}
</body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Django Templates",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/base.html #}
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

{% block extra_scripts %}{% endblock %}`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/support.html #}
{% extends "base.html" %}

{% block content %}
  <h1>Chat Support</h1>
{% endblock %}

{% block extra_scripts %}
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
{% endblock %}`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Django Templates",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/support.html #}
{% extends "base.html" %}

{% block extra_scripts %}
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
{% endblock %}`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "If you serve static files via Django's staticfiles app, the Sageion scripts are still loaded from the CDN — no [[{% static %}]] tag needed.",
                      },
                      {
                        tag_type: "li",
                        text: "Place the Sageion [[<script>]] tags at the end of [[<body>]] so they never block first paint.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== RAILS ====================
          {
            label: "Rails",
            content: [
              {
                tag_type: "p",
                text: "Rails with ERB templates. Works with classic Rails views and with Hotwire/Turbo — Sageion just sees rendered HTML and manipulates its own DOM subtree.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Rails",
                      },
                      {
                        tag_type: "h5",
                        text: "app/views/layouts/application.html.erb",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!DOCTYPE html>
<html>
  <head>
    <title><%= yield :title %></title>
    <%= csrf_meta_tags %>
  </head>
  <body>
    <%= yield %>

    [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
    <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_name",
            "YOUR_API_KEY",
            "US"
          );]]]

          const token = localStorage.getItem("token");
          let payload = {};

          if (token) {
            const res = await fetch("https://api.yourbackend.com/auth/profile", {
              headers: { Authorization: \`Bearer \${token}\` }
            });
            if (res.ok) {
              const user = await res.json();
              payload = { uid: user.id.toString() };
            } else {
              localStorage.removeItem("token");
            }
          }

          [[[await window.sageion_os.initialize(payload);]]]
        } catch (err) {
          console.error("[Sageion] bootstrap failed:", err);
        }
      })();
    </script>

    <%= yield :extra_scripts %>
  </body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Rails",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<%# app/views/layouts/application.html.erb %>
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

<%= yield :extra_scripts %>`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<%# app/views/support/index.html.erb %>
<% content_for :extra_scripts do %>
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
<% end %>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Rails",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<%# app/views/support/index.html.erb %>
<% content_for :extra_scripts do %>
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
<% end %>`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "With Turbo Drive enabled, page navigations do not trigger a full reload. [[setUp()]] runs once, on the initial load, and [[initialize()]] does not re-run on Turbo navigations — the widget persists, which is usually what you want.",
                      },
                      {
                        tag_type: "li",
                        text: "If you want the widget to only appear on some pages after a Turbo navigation, add those paths to [[exclude_paths]] in your Sageion app settings.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== LARAVEL ====================
          {
            label: "Laravel",
            content: [
              {
                tag_type: "p",
                text: "Laravel with Blade templates. Scripts go in your main layout.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Laravel Blade",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
  <head>
    <title>@yield('title')</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
    @yield('content')

    [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
    <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_name",
            "YOUR_API_KEY",
            "US"
          );]]]

          const token = localStorage.getItem("token");
          let payload = {};

          if (token) {
            const res = await fetch("https://api.yourbackend.com/auth/profile", {
              headers: { Authorization: \`Bearer \${token}\` }
            });
            if (res.ok) {
              const user = await res.json();
              payload = { uid: user.id.toString() };
            } else {
              localStorage.removeItem("token");
            }
          }

          [[[await window.sageion_os.initialize(payload);]]]
        } catch (err) {
          console.error("[Sageion] bootstrap failed:", err);
        }
      })();
    </script>

    @stack('scripts')
  </body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Laravel Blade",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{{-- resources/views/layouts/app.blade.php --}}
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

@stack('scripts')`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{{-- resources/views/support.blade.php --}}
@extends('layouts.app')

@section('content')
  <h1>Chat Support</h1>
@endsection

@push('scripts')
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
@endpush`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Laravel Blade",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{{-- resources/views/support.blade.php --}}
@extends('layouts.app')

@push('scripts')
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
@endpush`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "If you compile assets with Vite or Mix, the Sageion bundle is still loaded from the CDN — do not add it to your asset pipeline.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== FLASK / FASTAPI ====================
          {
            label: "Flask / FastAPI",
            content: [
              {
                tag_type: "p",
                text: "Python backends that render HTML via Jinja2. Flask and FastAPI both use Jinja2 by default or by convention — the client-side pattern is identical.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Flask / FastAPI",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- templates/base.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>{% block title %}My Site{% endblock %}</title>
  </head>
  <body>
    {% block content %}{% endblock %}

    [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
    <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_name",
            "YOUR_API_KEY",
            "US"
          );]]]

          const token = localStorage.getItem("token");
          let payload = {};

          if (token) {
            const res = await fetch("https://api.yourbackend.com/auth/profile", {
              headers: { Authorization: \`Bearer \${token}\` }
            });
            if (res.ok) {
              const user = await res.json();
              payload = { uid: user.id.toString() };
            } else {
              localStorage.removeItem("token");
            }
          }

          [[[await window.sageion_os.initialize(payload);]]]
        } catch (err) {
          console.error("[Sageion] bootstrap failed:", err);
        }
      })();
    </script>

    {% block extra_scripts %}{% endblock %}
  </body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Flask / FastAPI",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/base.html #}
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

{% block extra_scripts %}{% endblock %}`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/support.html #}
{% extends "base.html" %}

{% block extra_scripts %}
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
{% endblock %}`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Flask / FastAPI",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `{# templates/support.html #}
{% extends "base.html" %}

{% block extra_scripts %}
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
{% endblock %}`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "If you use FastAPI's [[Jinja2Templates]], make sure to enable async rendering — the Sageion script tag is synchronous and loads independently.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== NODE SSR ====================
          {
            label: "Express / Node SSR",
            content: [
              {
                tag_type: "p",
                text: "Node.js servers that render HTML via a template engine. Express with EJS, Pug, or Handlebars; Koa; Fastify — the client-side pattern is identical.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Express + EJS",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- views/layout.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%= title %></title>
</head>
<body>
  <%- body %>

  [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
  <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  </script>
</body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Express + EJS",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- views/layout.ejs -->
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

<%- extraScripts || '' %>`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- views/support.ejs -->
<script>
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Express + EJS",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- views/support.ejs -->
<script>
  window.__sageionSetup
    [[[.then(payload => window.sageion_os.initialize(payload))]]]
    .catch(err => console.error("[Sageion] bootstrap failed:", err));
</script>`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Pug and Handlebars use the same pattern with their own template syntax. The JavaScript is byte-identical.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== SPRING BOOT ====================
          {
            label: "Spring Boot",
            content: [
              {
                tag_type: "callout",
                type: "warning",
                title: "Verify against your Thymeleaf version",
                children: [
                  {
                    tag_type: "p",
                    text: "Thymeleaf's [[th:]] attributes and fragment layout have version-specific behavior. The pattern below is correct in shape — adapt to your Spring Boot and Thymeleaf versions.",
                  },
                ],
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — Spring Boot + Thymeleaf",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/main/resources/templates/layout.html -->
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8">
  <title th:text="\${title}">My Site</title>
</head>
<body>
  <div th:replace="~{fragments :: content}"></div>

  [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
  <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  </script>
</body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — Spring Boot + Thymeleaf",
                      },
                      {
                        tag_type: "p",
                        text: "Use Thymeleaf fragments: one fragment for [[setUp()]] in the base layout, another for [[initialize()]] on specific pages.",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — Spring Boot + Thymeleaf",
                      },
                      {
                        tag_type: "p",
                        text: "Same as Two-Block, but the [[initialize()]] fragment is included only in the pages that should show the widget.",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Thymeleaf escapes HTML by default. Use [[th:inline=\"javascript\"]] if you need to inject server-side values into the bootstrap script.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== ASP.NET ====================
          {
            label: "ASP.NET",
            content: [
              {
                tag_type: "p",
                text: "ASP.NET Core MVC with Razor views. Scripts go in [[_Layout.cshtml]]; page-specific scripts go in the [[@section Scripts]] block.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Single-Block — ASP.NET Core Razor",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- Views/Shared/_Layout.cshtml -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>@ViewData["Title"]</title>
</head>
<body>
  @RenderBody()

  [[[<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
  <script src="https://magicchat-core.github.io/dev-sscc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_name",
          "YOUR_API_KEY",
          "US"
        );]]]

        const token = localStorage.getItem("token");
        let payload = {};

        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) {
            const user = await res.json();
            payload = { uid: user.id.toString() };
          } else {
            localStorage.removeItem("token");
          }
        }

        [[[await window.sageion_os.initialize(payload);]]]
      } catch (err) {
        console.error("[Sageion] bootstrap failed:", err);
      }
    })();
  </script>

  @await RenderSectionAsync("Scripts", required: false)
</body>
</html>`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Two-Block (Split)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Two-Block — ASP.NET Core Razor",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `@* Views/Shared/_Layout.cshtml *@
<script>
  window.__sageionSetup = (async function () {
    [[[await window.sageion_os.setUp(
      "your_app_name",
      "YOUR_API_KEY",
      "US"
    );]]]

    const token = localStorage.getItem("token");
    if (!token) return {};

    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
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
</script>

@await RenderSectionAsync("Scripts", required: false)`,
                        language: "html",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `@* Views/Support/Index.cshtml *@
@section Scripts {
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
}`,
                        language: "html",
                      },
                    ],
                  },
                  {
                    label: "Route-Specific",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Route-Specific — ASP.NET Core Razor",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `@* Views/Support/Index.cshtml *@
@section Scripts {
  <script>
    window.__sageionSetup
      [[[.then(payload => window.sageion_os.initialize(payload))]]]
      .catch(err => console.error("[Sageion] bootstrap failed:", err));
  </script>
}`,
                        language: "html",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "Gotchas",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "Razor's [[@]] symbol is the escape character for C# code. If your bootstrap script contains an [[@]], escape it as [[@@]].",
                      },
                      {
                        tag_type: "li",
                        text: "Sections defined with [[@section]] are only rendered if the layout has a matching [[@await RenderSectionAsync]] call.",
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
      // LOGIN / LOGOUT AT RUNTIME
      // ============================================================
      {
        tag_type: "h4",
        text: "Handling login & logout at runtime",
        selector_uid: "v2_login_logout_runtime",
      },
      {
        tag_type: "p",
        text: "[[setUp()]] runs once per page load. It does not re-run when the user logs in or out. To reflect auth changes without a full page reload, call [[initialize()]] again — the SDK handles every transition internally.",
      },
      {
        tag_type: "callout",
        type: "success",
        title: "✅ One method handles every auth transition",
        children: [
          {
            tag_type: "p",
            text: "You only need one method. Pass [[{ uid }]] for a logged-in user, or [[{}]] for anonymous.",
          },
          {
            tag_type: "code_with_copy",
            code: `// After a successful login:
async function onLogin(user) {
  await window.sageion_os.initialize({ uid: user.id.toString() });
}

// After logout:
async function onLogout() {
  await window.sageion_os.initialize({});
  // Widget stays mounted, now anonymous. No page reload.
}`,
            language: "javascript",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "When does [[setUp()]] run again?",
        children: [
          {
            tag_type: "p",
            text: "Only on a full browser reload of a page where [[setUp()]] is loaded — the first visit to the app, a hard refresh, or any navigation that triggers a full page reload. Client-side route changes that do not reload the document do not re-run [[setUp()]].",
          },
        ],
      },
      {
        tag_type: "p",
        text: "If your framework has reactive auth (React state, Vue watchers, Svelte stores, etc.), put [[initialize()]] in a single effect that watches the current user. That one effect is your entire SDK integration for auth.",
      },

      // ============================================================
      // FRAMEWORKS NOT LISTED
      // ============================================================
      {
        tag_type: "h4",
        text: "Frameworks not listed",
      },
      {
        tag_type: "p",
        text: "Sageion attaches to [[window]] and never touches your framework's rendering. If your framework is not in the tabs above, pick whichever of these is closest — the client-side code is framework-agnostic.",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "Common unlisted frameworks",
        children: [
          {
            tag_type: "ul",
            items: [
              {
                tag_type: "li",
                text: "[[Solid]], [[Preact]], [[Lit]] — use the React or Vanilla JS pattern.",
              },
              {
                tag_type: "li",
                text: "[[Phoenix]] (Elixir) — use the Django or Rails pattern.",
              },
              {
                tag_type: "li",
                text: "[[Hugo]], [[Jekyll]], [[Eleventy]] — static site generators; use the Vanilla JS pattern and place scripts in your base layout.",
              },
              {
                tag_type: "li",
                text: "[[Gatsby]] — use the React pattern; add the scripts to [[gatsby-ssr.js]].",
              },
              {
                tag_type: "li",
                text: "[[Ember]] — use the Vanilla JS pattern; add the scripts to [[app/index.html]].",
              },
            ],
          },
        ],
      },

      // ============================================================
      // COMMON MISTAKES
      // ============================================================
      {
        tag_type: "h4",
        text: "Common mistakes",
      },
      {
        tag_type: "p",
        text: "If something looks wrong, first open your browser console — every step of the SDK logs a message you can follow. These are the most frequent issues users hit during integration:",
      },
      {
        tag_type: "table",
        headers: ["What you see", "Likely cause", "Fix"],
        rows: [
          [
            "An error popup appears immediately when the page loads, mentioning [[api_key]] or [[app_name]].",
            "The [[api_key]] or [[app_name]] you passed to [[setUp()]] does not match this app.",
            "Double-check both values against your app's settings, then click Reset Settings in the popup and reload.",
          ],
          [
            "An error popup mentions that the current domain is not authorized.",
            "Your hostname is not in this app's allowed domains.",
            "Ask your Sageion admin to add the domain, then reload.",
          ],
          [
            "An error popup mentions that [[initialize]] ran before [[setUp]] could finish.",
            "[[initialize()]] was called from a separate DOMContentLoaded listener, or from two separate scripts that both awaited the page load.",
            "Use the Single-Block or Two-Block pattern. If you must split, bridge with a shared promise as shown.",
          ],
          [
            "The chat bubble never appears.",
            "[[setUp()]] or [[initialize()]] threw an error and the widget was never mounted, or the scripts never loaded.",
            "Check the console for errors. Confirm both script tags are present in your HTML shell and appear in the correct order.",
          ],
          [
            "The chat bubble appears, but clicking it does nothing.",
            "A script error occurred while mounting the widget, or the SDK global is not defined on [[window]].",
            "Confirm the Sageion bundle loaded after Socket.IO, and that no other script on the page overwrote [[window.sageion_os]].",
          ],
          [
            "After login or logout, the chat still shows the previous user.",
            "The SDK was not notified of the auth change.",
            "Call [[initialize({ uid } | {})]] whenever your auth state changes — a single effect watching your auth store covers every case.",
          ],
          [
            "After login or logout, the whole page reloads.",
            "You are using a framework-native redirect instead of calling [[initialize()]].",
            "Replace the redirect with an [[initialize()]] call. The SDK handles the transition without a reload.",
          ],
        ],
      },

      // ============================================================
      // EXAMPLE IMPLEMENTATIONS
      // ============================================================
      {
        tag_type: "h4",
        text: "Example implementations",
        selector_uid: "v2_code_example",
      },
      {
        tag_type: "p",
        text: "Complete working examples on GitHub:",
      },
      {
        tag_type: "a",
        href: "https://github.com/sageion-core/example__v1",
        text: "Vanilla JS — Single-Block",
      },
      {
        tag_type: "a",
        href: "https://github.com/sageion-core/example__v2",
        text: "Django — Two-Block with logout handling",
      },
    ],
  },
];