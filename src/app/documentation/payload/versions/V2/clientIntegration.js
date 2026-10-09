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

      // ============================================================
      // THE PUBLIC API
      // ============================================================
      {
        tag_type: "p",
        text: "Sageion exposes two methods on [[window.sageion_os]]: [[setUp()]] and [[initialize()]]. Everything else — sockets, DOM, auth lifecycle, teardown — is handled internally. This page documents the two methods and how to call them correctly.",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "The API in one sentence",
        children: [
          {
            tag_type: "p",
            text: "Call [[setUp()]] once per page load. Call [[initialize({ uid })]] whenever the current user changes — logged in, logged out, or switched. That's the entire contract.",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "success",
        title: "The four rules of a correct integration",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                tag_type: "li",
                text: "[[setUp()]] runs once, awaited, before any [[initialize()]].",
              },
              {
                tag_type: "li",
                text: "[[initialize()]] is called from exactly one place in your app.",
              },
              {
                tag_type: "li",
                text: "[[initialize()]] is gated on your auth state having settled — not on the user being non-null.",
              },
              {
                tag_type: "li",
                text: "[[initialize()]] receives the current user, once per change.",
              },
            ],
          },
          {
            tag_type: "p",
            text: "Follow these four rules and Sageion handles every transition — login, logout, user-switch, token refresh — without a page reload. The SDK is idempotent: calling [[initialize()]] twice with the same payload is a safe no-op, so you never need to add re-render guards.",
          },
        ],
      },

      // ============================================================
      // LIFECYCLE AT A GLANCE
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
                text: "Load the Socket.IO and Sageion bundle [[<script>]] tags once, in your app's HTML shell. Order matters: Socket.IO first, Sageion bundle second.",
              },
              {
                tag_type: "li",
                text: "Call [[setUp()]] once — after the scripts load, before anything else. Await it.",
              },
              {
                tag_type: "li",
                text: "Call [[initialize({ uid })]] for a logged-in user, or [[initialize({})]] for anonymous. Do this once your auth layer has settled.",
              },
              {
                tag_type: "li",
                text: "When the user logs in, logs out, or switches, call [[initialize()]] again with the new payload. No page reload, no second [[setUp()]].",
              },
            ],
          },
        ],
      },

      // ============================================================
      // METHOD 1 — setUp()
      // ============================================================
      {
        tag_type: "h4",
        text: "setUp()",
      },
      {
        tag_type: "p",
        text: "[[setUp()]] is configuration. It loads app data from the server, verifies your API key, and prepares the SDK. It runs once per page load.",
      },
      {
        tag_type: "code_with_copy",
        code: `await window.sageion_os.setUp(
  "your_app_id",       // the app_id shown in your Sageion dashboard
  "YOUR_API_KEY",      // the auth_key shown in your Sageion dashboard
  "US",                // region: "US" or "IN"
  "sageion-chat-root"  // optional: id of a DOM element to mount into
);`,
        language: "javascript",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Call setUp() exactly once per page load",
        children: [
          {
            tag_type: "ul",
            items: [
              {
                tag_type: "li",
                text: "It is not a per-route or per-navigation call. Client-side route changes do not need it to re-run.",
              },
              {
                tag_type: "li",
                text: "After login or logout, do NOT call [[setUp()]] again. Use [[initialize()]] instead.",
              },
              {
                tag_type: "li",
                text: "The only case where [[setUp()]] runs again is a full browser reload.",
              },
            ],
          },
        ],
      },
      {
        tag_type: "callout",
        type: "success",
        title: "The fourth argument is optional",
        children: [
          {
            tag_type: "p",
            text: "When [[chat_root_id]] is omitted, the widget floats in the bottom-right corner of the page. When provided, it mounts inside the element with that id.",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "If your app is still in draft mode",
        children: [
          {
            tag_type: "p",
            text: "If the app has not been published yet in your Sageion dashboard, [[setUp()]] completes without error but deliberately does not mount the widget. Any subsequent [[initialize()]] call becomes a no-op. This is intentional — a half-configured app should not ship a half-working widget. Publish the app from the dashboard, then reload.",
          },
        ],
      },

      // ============================================================
      // METHOD 2 — initialize()
      // ============================================================
      {
        tag_type: "h4",
        text: "initialize()",
      },
      {
        tag_type: "p",
        text: "[[initialize()]] tells the SDK who the current user is, and the SDK reflects that in the widget. It handles every auth transition — login, logout, and user-switch — without a page reload. Calling it with the same payload twice is a safe no-op, so it does not matter how often your framework re-runs the effect that calls it.",
      },
      {
        tag_type: "code_with_copy",
        code: `// User is logged in
await window.sageion_os.initialize({ uid: "42" });

// User is anonymous, or just logged out
await window.sageion_os.initialize({});`,
        language: "javascript",
      },
      {
        tag_type: "callout",
        type: "success",
        title: "One method handles every auth transition",
        children: [
          {
            tag_type: "table",
            headers: ["Current state", "Call", "What happens"],
            rows: [
              ["Anonymous visitor", "initialize({ uid: \"Alice's id\" })", "Chat opens as Alice."],
              ["Logged in as Alice", "initialize({})", "Alice is logged out; chat stays mounted as anonymous."],
              ["Logged in as Alice", "initialize({ uid: \"Alice's id\" })", "Safe no-op — nothing changes."],
              ["Logged in as Alice", "initialize({ uid: \"Bob's id\" })", "Chat switches to Bob."],
              ["Anonymous visitor", "initialize({})", "Safe no-op."],
            ],
          },
          {
            tag_type: "p",
            text: "There is no separate logout call. To log a user out, call [[initialize({})]]. The SDK handles the transition.",
          },
          {
            tag_type: "p",
            text: "You do not need to skip [[initialize()]] when no one is logged in. Calling it with [[{}]] is correct and safe — the widget stays mounted in anonymous mode.",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Call initialize() from exactly one place",
        children: [
          {
            tag_type: "ul",
            items: [
              {
                tag_type: "li",
                text: "Don't call it speculatively — for example with [[{}]] \"to start\" and then with [[{ uid }]] a moment later. That produces an unnecessary anonymous→authenticated transition on every page load.",
              },
              {
                tag_type: "li",
                text: "Wait until your auth layer has finished resolving before calling. If your auth state has a [[loading]] flag, gate on [[loading === false]].",
              },
              {
                tag_type: "li",
                text: "If two different effects in your app both call [[initialize()]], they will race with different payloads. Consolidate into a single effect that watches the current user.",
              },
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
<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>`,
                        language: "html",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "The SDK is a global, not an npm package",
                        children: [
                          {
                            tag_type: "p",
                            text: "Loading the bundle exposes [[window.sageion_os]]. Every example below uses that global. There is no [[npm install]], no import statement, and no build-time integration.",
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
                            text: "By default, the chat bubble floats in the bottom-right corner of the page. To anchor it inside a specific container, add an empty element to your markup and pass its id as the fourth argument to [[setUp()]]:",
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
      {
        tag_type: "callout",
        type: "info",
        title: "What changes between frameworks",
        children: [
          {
            tag_type: "p",
            text: "The four rules are the same everywhere. The only thing that changes between frameworks is how you express \"an effect that watches auth state\" — [[useEffect]] in React, [[watch]] in Vue, [[$:]] in Svelte, and so on.",
          },
        ],
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
        "your_app_id",
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
                        title: "Reflecting login & logout at runtime",
                        children: [
                          {
                            tag_type: "p",
                            text: "The block above bootstraps the SDK once on page load. To handle a user logging in, logging out, or switching accounts without a page reload, call [[initialize()]] again from wherever your app already reacts to auth changes — a click handler, a store subscriber, a router hook. The rule is the same: one call site, gated on auth having settled.",
                          },
                          {
                            tag_type: "code_with_copy",
                            code: `// wherever your app knows the user changed:
function onAuthChanged(user, loading) {
  if (loading) return;                     // wait for auth to settle
  window.sageion_os
    .initialize(user ? { uid: String(user.id) } : {})
    .catch(err => console.error("[Sageion] sync failed:", err));
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
      "your_app_id",
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
      "your_app_id",
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
          "your_app_id",
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
                    ],
                  },
                  {
                    label: "With runtime auth sync",
                    content: [
                      {
                        tag_type: "h4",
                        text: "With runtime auth sync — React",
                      },
                      {
                        tag_type: "p",
                        text: "Same bootstrap as Single-Block, plus a second effect that watches your auth state and calls [[initialize()]] whenever the user changes. This is the only SDK code you need for login, logout, and user-switch — no page reload.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// src/App.jsx
import { useEffect, useRef } from "react";
import { useAuth } from "./context/AuthContext";

function App() {
  const ran = useRef(false);

  // 1. Bootstrap: setUp() once, then initialize() with the current user.
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      try {
        await window.sageion_os.setUp(
          "your_app_id",
          "YOUR_API_KEY",
          "US"
        );
      } catch (err) {
        console.error("[Sageion] setUp failed:", err);
      }
    })();
  }, []);

  // 2. Runtime sync: one call site, gated on auth having settled.
  useSageionUserSync();

  return <YourApp />;
}

function useSageionUserSync() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;                       // wait until auth settles

    window.sageion_os
      .initialize(user ? { uid: String(user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }, [user, loading]);
}

export default App;`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Why one effect handles the whole bootstrap",
                        children: [
                          {
                            tag_type: "p",
                            text: "The sync effect fires on the first settled render too, so you don't need to call [[initialize()]] inside the bootstrap effect. One call site — the sync effect — covers both the initial load and every subsequent auth change. That satisfies rule 2.",
                          },
                        ],
                      },
                      {
                        tag_type: "callout",
                        type: "warning",
                        title: "Why the loading gate, not a user check",
                        children: [
                          {
                            tag_type: "p",
                            text: "Gate on [[loading === false]], not on [[user !== null]]. Without the gate, the effect fires while [[user]] is still [[null]] during the initial auth check, producing an anonymous→authenticated flicker on every page load.",
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
        "your_app_id",
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
          src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"
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
          "your_app_id",
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
        "your_app_id",
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
      "your_app_id",
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
                    ],
                  },
                  {
                    label: "With runtime auth sync",
                    content: [
                      {
                        tag_type: "h4",
                        text: "With runtime auth sync — Vue 3",
                      },
                      {
                        tag_type: "p",
                        text: "Same bootstrap as Single-Block, plus a [[watch]] on your auth store that calls [[initialize()]] whenever the user changes.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/App.vue -->
<script setup>
import { onMounted, watch } from "vue";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();

onMounted(async () => {
  try {
    await window.sageion_os.setUp(
      "your_app_id",
      "YOUR_API_KEY",
      "US"
    );
  } catch (err) {
    console.error("[Sageion] setUp failed:", err);
  }
});

// One call site, gated on auth having settled.
watch(
  () => [auth.user, auth.loading],
  ([user, loading]) => {
    if (loading) return;

    window.sageion_os
      .initialize(user ? { uid: String(user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }
);
</script>

<template>
  <router-view />
</template>`,
                        language: "javascript",
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
      "your_app_id",
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
        { src: "https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js" }]]]
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
        "your_app_id",
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
      "your_app_id",
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
        "your_app_id",
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
        "your_app_id",
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
    <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]
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
        "your_app_id",
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
                    label: "With runtime auth sync",
                    content: [
                      {
                        tag_type: "h4",
                        text: "With runtime auth sync — SvelteKit",
                      },
                      {
                        tag_type: "p",
                        text: "Same bootstrap as Single-Block, plus a reactive statement that calls [[initialize()]] whenever your auth store changes.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<!-- src/routes/+layout.svelte -->
<script>
  import { onMount } from "svelte";
  import { auth } from "$lib/stores/auth";

  onMount(async () => {
    try {
      await window.sageion_os.setUp(
        "your_app_id",
        "YOUR_API_KEY",
        "US"
      );
    } catch (err) {
      console.error("[Sageion] setUp failed:", err);
    }
  });

  // One call site, gated on auth having settled.
  $: if (!$auth.loading) {
    window.sageion_os
      .initialize($auth.user ? { uid: String($auth.user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }
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
        "your_app_id",
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
          "your_app_id",
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
        <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

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
    <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_id",
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
      "your_app_id",
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
        "your_app_id",
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
        <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]
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
  <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_id",
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
      "your_app_id",
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
    <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_id",
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
      "your_app_id",
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
    <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_id",
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
      "your_app_id",
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
    <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

    <script>
      (async () => {
        try {
          [[[await window.sageion_os.setUp(
            "your_app_id",
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
      "your_app_id",
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
  <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_id",
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
      "your_app_id",
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
  <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_id",
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
  <script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>]]]

  <script>
    (async () => {
      try {
        [[[await window.sageion_os.setUp(
          "your_app_id",
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
      "your_app_id",
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
            ],
          },
        ],
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
        text: "If something looks wrong, first open your browser console — the SDK logs a step-by-step trace you can follow. These are the most frequent issues users hit during integration:",
      },
      {
        tag_type: "table",
        headers: ["What you see", "Likely cause", "Fix"],
        rows: [
          [
            "An error popup appears immediately when the page loads, mentioning [[api_key]] or [[app_id]].",
            "The [[api_key]] or [[app_id]] you passed to [[setUp()]] does not match this app.",
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
          [
            "The widget briefly shows the anonymous view, then flickers to the authenticated view on page load.",
            "[[initialize()]] was called twice — once with [[{}]] before auth resolved, once with [[{ uid }]] after.",
            "Gate [[initialize()]] on your auth layer's [[loading === false]] state. Only call it once the current user is known.",
          ],
          [
            "[[initialize]] runs with different payloads from two places in your app.",
            "Two or more effects or scripts are calling [[initialize()]].",
            "Consolidate into a single effect that watches the current user. Rule 2 of the four rules.",
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