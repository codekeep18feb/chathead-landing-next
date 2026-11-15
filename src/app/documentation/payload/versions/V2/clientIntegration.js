// clientIntegration.js
export const clientIntegration = [
  {
    tag_type: "div",
    children: [
      {
        tag_type: "h2",
        text: "Client Integration", // ⭐ Changed from "Project setup"
        selector_uid: "v2_client_integration",
      },
      {
        tag_type: "h4",
        text: "Client Side Integration",
      },
      {
        tag_type: "p",
        text: "Sageion exposes two methods on [[window.sageion_os]]: [[setUp()]] and [[initialize()]]. Everything else — sockets, DOM, auth lifecycle, teardown — is handled internally.",
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

      // ============================================================
      // RULES & LIFECYCLE
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "The four rules of a correct integration",
        children: [
          {
            tag_type: "ol",
            items: [
              { tag_type: "li", text: "[[setUp()]] runs once, awaited, before any [[initialize()]]." },
              { tag_type: "li", text: "[[initialize()]] is called from exactly one place in your app." },
              { tag_type: "li", text: "[[initialize()]] is gated on your auth state having settled — not on the user being non-null." },
              { tag_type: "li", text: "[[initialize()]] receives the current user, once per change." },
            ],
          },
          {
            tag_type: "p",
            text: "Follow these four rules and Sageion handles every transition — login, logout, user-switch, token refresh — without a page reload. The SDK is idempotent: calling [[initialize()]] twice with the same payload is a safe no-op, so you never need to add re-render guards.",
          },
        ],
      },

      {
        tag_type: "accordion",
        title: "Lifecycle at a glance",
        children: [
          {
            tag_type: "ol",
            items: [
              { tag_type: "li", text: "Load the Socket.IO and Sageion bundle [[<script>]] tags once, in your app's HTML shell. Order matters: Socket.IO first, Sageion bundle second." },
              { tag_type: "li", text: "Call [[setUp()]] once — after the scripts load, before anything else. Await it." },
              { tag_type: "li", text: "Call [[initialize({ uid })]] for a logged-in user, or [[initialize({})]] for anonymous. Do this once your auth layer has settled." },
              { tag_type: "li", text: "When the user logs in, logs out, or switches, call [[initialize()]] again with the new payload. No page reload, no second [[setUp()]]." },
            ],
          },
        ],
      },

      // ============================================================
      // METHODS (ACCORDION)
      // ============================================================
      {
        tag_type: "accordion",
        title: "Method 1 — setUp()",
        children: [
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
                  { tag_type: "li", text: "It is not a per-route or per-navigation call. Client-side route changes do not need it to re-run." },
                  { tag_type: "li", text: "After login or logout, do NOT call [[setUp()]] again. Use [[initialize()]] instead." },
                  { tag_type: "li", text: "The only case where [[setUp()]] runs again is a full browser reload." },
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
                text: "If the app has not been published yet in your Sageion dashboard, [[setUp()]] completes without error but deliberately does not mount the widget. Any subsequent [[initialize()]] call becomes a no-op. Publish the app from the dashboard, then reload.",
              },
            ],
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "Method 2 — initialize()",
        children: [
          {
            tag_type: "p",
            text: "[[initialize()]] tells the SDK who the current user is, and the SDK reflects that in the widget. It handles every auth transition — login, logout, and user-switch — without a page reload.",
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
            tag_type: "callout",
            type: "warning",
            title: "Call initialize() from exactly one place",
            children: [
              {
                tag_type: "ul",
                items: [
                  { tag_type: "li", text: "Don't call it speculatively — for example with [[{}]] \"to start\" and then with [[{ uid }]] a moment later." },
                  { tag_type: "li", text: "Wait until your auth layer has finished resolving before calling. If your auth state has a [[loading]] flag, gate on [[loading === false]]." },
                  { tag_type: "li", text: "If two different effects in your app both call [[initialize()]], they will race. Consolidate into a single effect." },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // STEP 1 — LOAD SCRIPTS
      // ============================================================
      {
        tag_type: "h3",
        text: "1. Load the scripts",
      },
      {
        tag_type: "p",
        text: "Locate your app's root HTML shell (usually [[index.html]] or a base layout template) and insert the following scripts. Socket.IO must load before the Sageion bundle.",
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
            text: "Loading the bundle exposes [[window.sageion_os]]. There is no [[npm install]], no import statement, and no build-time integration.",
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
            text: "By default, the chat bubble floats in the bottom-right corner. To anchor it inside a specific container, add an empty element to your markup and pass its id as the fourth argument to [[setUp()]]:",
          },
          {
            tag_type: "code_with_copy",
            code: `<div id="sageion-chat-root"></div>`,
            language: "html",
          },
        ],
      },

      // ============================================================
      // STEP 2 — FRAMEWORKS
      // ============================================================
      {
        tag_type: "h3",
        text: "2. Pick your framework",
      },
      {
        tag_type: "p",
        text: "Pick your framework from the tabs below. Inside each you will find three integration styles — choose the one that matches your app's structure.",
      },
      {
        tag_type: "tabs",
        items: [
          // ==================== VANILLA JS ====================
          {
            label: "Vanilla JS",
            content: [
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "code_with_copy",
                        code: `<script>
  (async () => {
    try {
      await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");

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
      await window.sageion_os.initialize(payload);
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
                            tag_type: "code_with_copy",
                            code: `// wherever your app knows the user changed:
function onAuthChanged(user, loading) {
  if (loading) return;
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
                        tag_type: "code_with_copy",
                        code: `<script>
  window.__sageionSetup = (async function () {
    await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
    const token = localStorage.getItem("token");
    if (!token) return {};
    try {
      const res = await fetch("https://api.yourbackend.com/auth/profile", {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      return res.ok ? { uid: (await res.json()).id.toString() } : {};
    } catch { return {}; }
  })();
</script>
<script>
  window.__sageionSetup
    .then(payload => window.sageion_os.initialize(payload))
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
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "code_with_copy",
                        code: `import { useEffect, useRef } from "react";
import { useAuth } from "./context/AuthContext";

function App() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    (async () => {
      try {
        await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
      } catch (err) { console.error("[Sageion] setUp failed:", err); }
    })();
  }, []);

  useSageionUserSync();
  return <YourApp />;
}

function useSageionUserSync() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return; // wait until auth settles
    window.sageion_os
      .initialize(user ? { uid: String(user.id) } : {})
      .catch(err => console.error("[Sageion] sync failed:", err));
  }, [user, loading]);
}`,
                        language: "javascript",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Why one effect handles the whole bootstrap",
                        children: [
                          {
                            tag_type: "p",
                            text: "The sync effect fires on the first settled render too. One call site covers both the initial load and every subsequent auth change.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "With runtime auth sync",
                    content: [
                      {
                        tag_type: "p",
                        text: "Same bootstrap as Single-Block, but with the [[useSageionUserSync]] hook watching your auth store. This is the only SDK code you need for login, logout, and user-switch — no page reload.",
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
                tag_type: "tabs",
                items: [
                  {
                    label: "Single-Block (Recommended)",
                    content: [
                      {
                        tag_type: "code_with_copy",
                        code: `// app/layout.jsx
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://cdn.socket.io/4.1.2/socket.io.min.js" strategy="beforeInteractive" />
        <Script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js" strategy="beforeInteractive" />
        <SageionBootstrap />
      </body>
    </html>
  );
}

// app/components/SageionBootstrap.jsx
"use client";
import { useEffect, useRef } from "react";

export default function SageionBootstrap() {
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    (async () => {
      try {
        await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
        const token = localStorage.getItem("token");
        let payload = {};
        if (token) {
          const res = await fetch("https://api.yourbackend.com/auth/profile", {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          if (res.ok) payload = { uid: (await res.json()).id.toString() };
        }
        await window.sageion_os.initialize(payload);
      } catch (err) { console.error("[Sageion] bootstrap failed:", err); }
    })();
  }, []);
  return null;
}`,
                        language: "javascript",
                      },
                    ],
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
                tag_type: "code_with_copy",
                code: `<!-- src/App.vue -->
<script setup>
import { onMounted, watch } from "vue";
import { useAuthStore } from "./stores/auth";

const auth = useAuthStore();

onMounted(async () => {
  try { await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US"); } 
  catch (err) { console.error("[Sageion] setUp failed:", err); }
});

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
<template><router-view /></template>`,
                language: "javascript",
              },
            ],
          },

          // ==================== DJANGO ====================
          {
            label: "Django",
            content: [
              {
                tag_type: "code_with_copy",
                code: `<!-- templates/base.html -->
<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>

<script>
  (async () => {
    try {
      await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
      const token = localStorage.getItem("token");
      let payload = {};
      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) payload = { uid: (await res.json()).id.toString() };
      }
      await window.sageion_os.initialize(payload);
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
</script>`,
                language: "html",
              },
            ],
          },
          
          // ==================== RAILS ====================
          {
            label: "Rails",
            content: [
              {
                tag_type: "code_with_copy",
                code: `<!-- app/views/layouts/application.html.erb -->
<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>

<script>
  (async () => {
    try {
      await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
      const token = localStorage.getItem("token");
      let payload = {};
      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) payload = { uid: (await res.json()).id.toString() };
      }
      await window.sageion_os.initialize(payload);
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
</script>`,
                language: "html",
              },
            ],
          },

          // ==================== LARAVEL ====================
          {
            label: "Laravel",
            content: [
              {
                tag_type: "code_with_copy",
                code: `{{-- resources/views/layouts/app.blade.php --}}
<script src="https://cdn.socket.io/4.1.2/socket.io.min.js"></script>
<script src="https://magicchat-core.github.io/prod-ssc-client-cdns/bundle.js"></script>

<script>
  (async () => {
    try {
      await window.sageion_os.setUp("your_app_id", "YOUR_API_KEY", "US");
      const token = localStorage.getItem("token");
      let payload = {};
      if (token) {
        const res = await fetch("https://api.yourbackend.com/auth/profile", {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        if (res.ok) payload = { uid: (await res.json()).id.toString() };
      }
      await window.sageion_os.initialize(payload);
    } catch (err) {
      console.error("[Sageion] bootstrap failed:", err);
    }
  })();
</script>`,
                language: "html",
              },
            ],
          },
        ],
      },

      // ============================================================
      // COMMON MISTAKES (ACCORDION)
      // ============================================================
      {
        tag_type: "h3",
        text: "Troubleshooting",
      },
      {
        tag_type: "p",
        text: "If something looks wrong, first open your browser console — the SDK logs a step-by-step trace you can follow. These are the most frequent issues users hit during integration:",
      },
      {
        tag_type: "accordion",
        title: "❌ An error popup appears immediately mentioning api_key or app_id",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** The credentials you passed to [[setUp()]] do not match this app.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Double-check both values against your app's settings, then click Reset Settings in the popup and reload.",
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "❌ An error popup mentions the current domain is not authorized",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** Your hostname is not in this app's allowed domains.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Ask your Sageion admin to add the domain, then reload.",
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "❌ An error popup mentions initialize ran before setUp could finish",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** [[initialize()]] was called from a separate DOMContentLoaded listener, or from two separate scripts.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Use the Single-Block or Two-Block pattern. If you must split, bridge with a shared promise as shown.",
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "❌ The chat bubble never appears",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** [[setUp()]] or [[initialize()]] threw an error and the widget was never mounted, or the scripts never loaded.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Check the console for errors. Confirm both script tags are present in your HTML shell and appear in the correct order.",
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "❌ After login or logout, the chat still shows the previous user",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** The SDK was not notified of the auth change.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Call [[initialize({ uid } | {})]] whenever your auth state changes — a single effect watching your auth store covers every case.",
          },
        ],
      },
      {
        tag_type: "accordion",
        title: "❌ The widget briefly shows anonymous then flickers to authenticated",
        children: [
          {
            tag_type: "p",
            text: "**Cause:** [[initialize()]] was called twice — once with [[{}]] before auth resolved, once with [[{ uid }]] after.",
          },
          {
            tag_type: "p",
            text: "**Fix:** Gate [[initialize()]] on your auth layer's [[loading === false]] state. Only call it once the current user is known.",
          },
        ],
      },

      // ============================================================
      // FRAMEWORKS NOT LISTED
      // ============================================================
      {
        tag_type: "accordion",
        title: "Frameworks not listed (Solid, Phoenix, Gatsby, etc.)",
        children: [
          {
            tag_type: "p",
            text: "Sageion attaches to [[window]] and never touches your framework's rendering. If your framework is not in the tabs above, pick whichever of these is closest:",
          },
          {
            tag_type: "ul",
            items: [
              { tag_type: "li", text: "[[Solid]], [[Preact]], [[Lit]] — use the React or Vanilla JS pattern." },
              { tag_type: "li", text: "[[Phoenix]] (Elixir) — use the Django or Rails pattern." },
              { tag_type: "li", text: "[[Hugo]], [[Jekyll]], [[Eleventy]] — static site generators; use the Vanilla JS pattern and place scripts in your base layout." },
              { tag_type: "li", text: "[[Gatsby]] — use the React pattern; add the scripts to [[gatsby-ssr.js]]." },
            ],
          },
        ],
      },
    ],
  },
];