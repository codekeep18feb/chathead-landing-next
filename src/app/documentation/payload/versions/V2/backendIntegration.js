export const backendIntegration = [
  {
    tag_type: "div",
    children: [
      // ============================================================
      // TOP-LEVEL TITLE
      // ============================================================
      {
        tag_type: "h2",
        text: "Backend Integration",
        selector_uid: "v2_backend_integration",
      },
      {
        tag_type: "p",
        text: "Sageion does not own your user identities. Your product remains the source of truth — users sign up and log in against your own backend, and Sageion is told about them via a small onboarding call. This page shows the full flow end-to-end.",
      },

      // ============================================================
      // HOW IT FITS TOGETHER
      // ============================================================
      {
        tag_type: "callout",
        type: "info",
        title: "🔑 How identity flows",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                text: "A user signs up in your app. Your backend creates the user record and returns its own token.",
              },
              {
                text: "Your backend calls Sageion's onboarding endpoint with the user's uid and your app_name. This maps the user into Sageion.",
              },
              {
                text: "On the frontend, your app calls initialize({ uid }) with the same uid. Sageion now knows which of its users this is.",
              },
              {
                text: "When the user logs out, your app calls window.magicchat_io.logout() so Sageion clears the session.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "UID is the only link",
            children: [
              {
                tag_type: "p",
                text: "The uid you pass to onboarding must match the uid you pass to initialize() exactly. Sageion has no other way to know which of your users is which. Use your own users.id, users.uid, or another stable unique key — just be consistent.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // WHERE ONBOARDING GOES IN YOUR BACKEND
      // ============================================================
      {
        tag_type: "h3",
        text: "Where to call onboarding",
        selector_uid: "v2_backend_onboarding_where",
      },
      {
        tag_type: "p",
        text: "Onboarding must be called exactly once per user, ideally the moment your own signup succeeds. The pattern below shows a typical Express signup handler — Sageion's onboarding call is a fire-and-forget step after your user row is created.",
      },
      {
        tag_type: "code_with_copy",
        code: `// routes/auth.js — your signup handler
router.post('/register', [...validators], async (req, res) => {
  const { email, password, full_name } = req.body;

  // 1. Create the user in your own DB
  const hashed = await hashPassword(password);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, role',
    [email, hashed, full_name]
  );
  const user = result.rows[0];

  // 2. Onboard the user into Sageion (fire-and-forget)
  try {
    const onboardingUrl = \`https://\${process.env.SAGEION_REGION}.userauth2.tezkit.com/dev/onboarding\`;
    await axios.post(
      onboardingUrl,
      {
        uid: user.id.toString(),
        app_name: process.env.SAGEION_APP_NAME,
      },
      {
        headers: {
          'X-API-Key': process.env.SAGEION_REST_API_KEY,
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      }
    );
  } catch (onboardErr) {
    // Do NOT fail registration — the user can still log in and use your app.
    // The chat box just won't work for this user until they're onboarded.
    console.error('Sageion onboarding error:', onboardErr.message);
  }

  // 3. Return your own token — Sageion does not issue auth tokens
  const token = generateToken(user.id, user.email, user.role);
  res.status(201).json({ token, user });
});`,
        language: "javascript",
      },

      // ============================================================
      // ONBOARDING API REFERENCE
      // ============================================================
      {
        tag_type: "h3",
        text: "Onboarding API",
        selector_uid: "v2_backend_onboarding_api",
      },
      {
        tag_type: "p",
        text: "The onboarding endpoint registers a user with Sageion so they can appear in the Admin Panel and use the chat box.",
      },
      {
        tag_type: "code_with_copy",
        code: "POST https://{region}.userauth2.tezkit.com/dev/onboarding",
        language: "http",
      },
      {
        tag_type: "p",
        text: "Replace {region} with your Sageion region — either us or in. It's the same value you pass as region to setUp() on the frontend.",
      },

      {
        tag_type: "h4",
        text: "Headers",
      },
      {
        tag_type: "table",
        headers: ["Header", "Value", "Where to get it"],
        rows: [
          ["X-API-Key", "Your Sageion REST API key", "Sageion Admin Panel → App Details → REST API Key"],
          ["Content-Type", "application/json", "Always this value"],
        ],
      },

      {
        tag_type: "h4",
        text: "Body",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["uid", "string", "Yes", "Your platform's unique user identifier, as a string. Must match what you pass to initialize() on the frontend."],
          ["app_name", "string", "Yes", "Your registered Sageion application name (from App Details)."],
        ],
      },

      {
        tag_type: "h4",
        text: "Example request",
      },
      {
        tag_type: "code_with_copy",
        code: `curl --location 'https://us.userauth2.tezkit.com/dev/onboarding' \\
  --header 'X-API-Key: YOUR_REST_API_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{
    "uid": "12345",
    "app_name": "your_application_name"
  }'`,
        language: "bash",
      },

      {
        tag_type: "h4",
        text: "Response",
      },
      {
        tag_type: "p",
        text: "A successful onboarding returns HTTP 200 with a small confirmation payload. Once onboarded, the user appears under Users in the Sageion Admin Panel for that app.",
      },

      // ============================================================
      // ONBOARDING METHODS
      // ============================================================
      {
        tag_type: "h3",
        text: "Three ways to onboard users",
        selector_uid: "v2_backend_onboarding_methods",
      },
      {
        tag_type: "p",
        text: "Pick the option that matches your workflow. Most teams use the Backend option because it pairs naturally with their existing signup flow.",
      },

      {
        tag_type: "tabs",
        items: [
          // ============ BACKEND ============
          {
            label: "Backend (Recommended)",
            content: [
              {
                tag_type: "h4",
                text: "Backend onboarding",
              },
              {
                tag_type: "p",
                text: "Your server calls the onboarding endpoint right after your own user creation succeeds. This is the pattern shown in the Where to call onboarding section above — refer back there for the full Express example.",
              },
              {
                tag_type: "callout",
                type: "success",
                title: "Why we recommend this",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "API key never leaves your server",
                      },
                      {
                        tag_type: "li",
                        text: "Onboarding happens atomically with signup — a user can never exist in your DB without also existing in Sageion",
                      },
                      {
                        tag_type: "li",
                        text: "Failures can be retried server-side without exposing anything to the browser",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ============ FRONTEND ============
          {
            label: "Frontend",
            content: [
              {
                tag_type: "h4",
                text: "Frontend onboarding",
              },
              {
                tag_type: "p",
                text: "If you cannot onboard from your backend (for example, in a static-only deployment), the SDK exposes an onboarding method you can call from the browser immediately after your own signup succeeds.",
              },
              {
                tag_type: "code_with_copy",
                code: `await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);`,
                language: "javascript",
              },
              {
                tag_type: "callout",
                type: "warning",
                title: "Tradeoffs",
                children: [
                  {
                    tag_type: "ul",
                    items: [
                      {
                        tag_type: "li",
                        text: "This call must run inside a page where the SDK bundle is already loaded (see Client Side Integration).",
                      },
                      {
                        tag_type: "li",
                        text: "If your app has a signup → login redirect, call onboarding on the destination page, right before initialize().",
                      },
                      {
                        tag_type: "li",
                        text: "Onboarding is idempotent per uid — calling it twice for the same user is harmless.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ============ ADMIN PANEL ============
          {
            label: "Admin Panel",
            content: [
              {
                tag_type: "h4",
                text: "Manual onboarding via Admin Panel",
              },
              {
                tag_type: "p",
                text: "For testing, migrations, or small user counts, you can onboard users one at a time from the Sageion Admin Panel.",
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
                    title: "Open the Users section",
                    content: [
                      {
                        tag_type: "p",
                        text: "In the Sageion Admin Panel, navigate to your application and open Users.",
                      },
                    ],
                  },
                  {
                    title: "Select 'Add User'",
                    content: [
                      {
                        tag_type: "p",
                        text: "Fill in the uid (must match your platform's user id) and any optional fields.",
                      },
                    ],
                  },
                  {
                    title: "Save",
                    content: [
                      {
                        tag_type: "p",
                        text: "The user now appears in the onboarded list and can use the chat box on your site.",
                      },
                    ],
                  },
                ],
              },
              {
                tag_type: "callout",
                type: "info",
                title: "Bulk onboarding",
                children: [
                  {
                    tag_type: "p",
                    text: "For large migrations (hundreds or thousands of existing users), contact Sageion Support for a batch import option instead of calling the API one user at a time.",
                  },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // WHAT ONBOARDED USERS LOOK LIKE
      // ============================================================
      {
        tag_type: "h3",
        text: "What onboarded users look like",
        selector_uid: "v2_backend_onboarded_users",
      },
      {
        tag_type: "p",
        text: "Once a user is onboarded, they appear in the Sageion Admin Panel under your application, ready for chat. Applications without any onboarded users show an empty state.",
      },
      {
        tag_type: "steps",
        items: [
          {
            title: "Admin Panel — users present",
            content: [
              {
                tag_type: "img",
                src: "/Asset/onboarded_user.png",
                alt: "Sageion Admin Panel showing onboarded users",
              },
            ],
          },
          {
            title: "Admin Panel — no users yet",
            content: [
              {
                tag_type: "img",
                src: "/Asset/no_users_admin.png",
                alt: "Sageion Admin Panel showing no onboarded users",
              },
            ],
          },
        ],
      },

      // ============================================================
      // LOGOUT CLEANUP
      // ============================================================
      {
        tag_type: "h3",
        text: "Logout cleanup",
        selector_uid: "v2_backend_logout",
      },
      {
        tag_type: "p",
        text: "Because authentication is handled by your own product, you must tell Sageion when a user logs out. Otherwise the chat session persists and the chat box may remain visible after logout.",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Always call logout on the client",
        children: [
          {
            tag_type: "p",
            text: "This is a frontend-only call. Sageion does not expose a server-side logout endpoint — the SDK clears its own storage and disconnects its sockets when you invoke it.",
          },
        ],
      },
      {
        tag_type: "code_with_copy",
        code: `// In your client-side logout handler:
window.magicchat_io.logout?.();

// It:
//   - clears all tezkit_* keys from localStorage
//   - disconnects the active socket and AI socket
//   - resets setupStatus back to "idle"
// After logout, call initialize() again to re-open the chat as anonymous.`,
        language: "javascript",
      },

      // ============================================================
      // ENVIRONMENT VARIABLES
      // ============================================================
      {
        tag_type: "h3",
        text: "Environment variables",
        selector_uid: "v2_backend_env_vars",
      },
      {
        tag_type: "p",
        text: "Your backend needs these variables. Add them to your server's environment — never expose SAGEION_REST_API_KEY or SAGEION_CLIENT_SECRET to the browser.",
      },
      {
        tag_type: "table",
        headers: ["Variable", "Example", "Used for"],
        rows: [
          ["SAGEION_REGION", "us", "Regional prefix in the onboarding URL."],
          ["SAGEION_APP_NAME", "ai_chatbot_system", "Identifies your Sageion app in onboarding requests."],
          ["SAGEION_REST_API_KEY", "your_rest_api_key", "X-API-Key header for onboarding."],
          ["SAGEION_CLIENT_SECRET", "your_client_secret", "Only needed if you later use the AI agent binding flow (see below). Never expose to the browser."],
        ],
      },

      // ============================================================
      // IMPLEMENTATION CHECKLIST (REQUIRED FLOW ONLY)
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "✅ Implementation checklist",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                text: "Trigger onboarding immediately after your own user is created — inside the same signup handler, not in a background job.",
              },
              {
                text: "Treat onboarding failures as non-fatal to signup, but log them and add an alert so you notice missing users.",
              },
              {
                text: "Use the exact same uid in onboarding and in initialize({ uid }) — they must match for the chat box to work.",
              },
              {
                text: "Always call window.magicchat_io.logout() from your own logout handler, before clearing your own session.",
              },
              {
                text: "Never ship SAGEION_REST_API_KEY or SAGEION_CLIENT_SECRET to the frontend.",
              },
              {
                text: "For bulk onboarding of existing users, contact Sageion Support before calling the API in a loop.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // ============================================================
      // OPTIONAL — AI AGENT BINDING (separate concern, same page for now)
      // ============================================================
      // ============================================================

      {
        tag_type: "callout",
        type: "info",
        title: "🟦 Optional module — AI Agent Binding",
        children: [
          {
            tag_type: "p",
            text: "Everything below this point is optional. The initial integration only requires onboarding + logout. Add this module later, when your AI agent needs to act on behalf of a signed-in user.",
          },
        ],
      },

      {
        tag_type: "h2",
        text: "Binding the AI agent to a user (Optional)",
        selector_uid: "v2_backend_ai_agent_binding",
      },
      {
        tag_type: "p",
        text: "When your AI agent (or any server-side client) needs to act on behalf of a specific user — for example, to fetch that user's bookings, create a new one, or cancel an existing one — your backend exchanges client credentials for a short-lived, scoped user token.",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "When you need this",
        children: [
          {
            tag_type: "ul",
            items: [
              {
                tag_type: "li",
                text: "Your AI workflows call your own backend APIs on behalf of a logged-in user",
              },
              {
                tag_type: "li",
                text: "You want fine-grained scopes for what the agent can do (read, create, update, cancel)",
              },
              {
                tag_type: "li",
                text: "You want short-lived tokens (1 hour) for agent actions instead of long-lived user sessions",
              },
              {
                tag_type: "li",
                text: "You want to trace agent-originated actions back to a specific user session",
              },
            ],
          },
        ],
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "This is not your primary auth",
        children: [
          {
            tag_type: "p",
            text: "This is a secondary, server-to-server flow. Your users still log in with your own auth. The client-user-token endpoint exists only to let the AI agent make user-scoped calls after login.",
          },
        ],
      },

      // ============================================================
      // CLIENT-USER-TOKEN ENDPOINT
      // ============================================================
      {
        tag_type: "h3",
        text: "Client-user-token endpoint",
        selector_uid: "v2_backend_client_user_token",
      },
      {
        tag_type: "code_with_copy",
        code: "POST /auth/client-user-token",
        language: "http",
      },
      {
        tag_type: "h4",
        text: "Request body",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["client_id", "string", "Yes", "Your Sageion app_name (from App Details)."],
          ["client_secret", "string", "Yes", "Your Sageion client secret. Keep this server-side only."],
          ["user_id", "string", "Yes", "The user's id from your platform. Must be a numeric string."],
          ["session_id", "string", "No", "Optional session identifier to correlate token usage."],
        ],
      },
      {
        tag_type: "h4",
        text: "Response",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Description"],
        rows: [
          ["token", "string", "Short-lived JWT the agent uses for subsequent calls."],
          ["expires_in", "number", "Seconds until expiry — currently 3600."],
          ["scope", "string[]", "List of actions the token authorizes. Currently: booking:read, booking:create, booking:update, booking:cancel."],
          ["user_id", "string", "Echo of the user_id the token was issued for."],
        ],
      },
      {
        tag_type: "code_with_copy",
        code: `const axios = require('axios');

async function getAgentToken(userId) {
  const { data } = await axios.post(
    \`\${process.env.API_BASE_URL}/auth/client-user-token\`,
    {
      client_id: process.env.SAGEION_APP_NAME,
      client_secret: process.env.SAGEION_CLIENT_SECRET,
      user_id: String(userId),
    }
  );
  return data.token; // use as Bearer token for agent-initiated calls
}`,
        language: "javascript",
      },

      // ============================================================
      // OTP / SECONDARY AUTH
      // ============================================================
      {
        tag_type: "h3",
        text: "OTP (secondary authentication)",
        selector_uid: "v2_backend_otp",
      },
      {
        tag_type: "p",
        text: "Sageion's workflow builder supports an OTP step, useful when an action needs a second factor of confirmation — for example, cancelling a booking over chat. Two endpoints back this flow.",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "OTP is not your login",
        children: [
          {
            tag_type: "p",
            text: "These OTP endpoints are for verifying one-off actions. They are separate from your main login flow and do not issue a session token.",
          },
        ],
      },

      {
        tag_type: "h4",
        text: "1. Send OTP",
      },
      {
        tag_type: "code_with_copy",
        code: "POST /auth/send-otp",
        language: "http",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["email", "string", "Yes", "Email address the OTP will be associated with."],
        ],
      },
      {
        tag_type: "p",
        text: "Generates a 6-digit OTP, stores it against the email, and expires it after 5 minutes. The current reference implementation logs the OTP — plug in your own email provider to deliver it.",
      },

      {
        tag_type: "h4",
        text: "2. Verify OTP",
      },
      {
        tag_type: "code_with_copy",
        code: "POST /auth/verify-otp",
        language: "http",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["email", "string", "Yes", "The email the OTP was sent to."],
          ["otp", "string", "Yes", "The 6-digit code the user entered."],
        ],
      },
      {
        tag_type: "p",
        text: "On success, returns { success: true, user_id } so the workflow can continue with the verified identity. The OTP record is deleted after verification.",
      },

      // ============================================================
      // OPTIONAL FLOW CHECKLIST
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "✅ AI Agent Binding checklist",
        children: [
          {
            tag_type: "ol",
            items: [
              {
                text: "Store SAGEION_CLIENT_SECRET in your server environment only — never in the browser.",
              },
              {
                text: "Only fetch client-user-token after the user has authenticated with your own auth — the endpoint does not validate your session.",
              },
              {
                text: "Cache the agent token per user for up to expires_in seconds to avoid minting a new one for every agent action.",
              },
              {
                text: "Treat OTP endpoints as a second factor for specific actions, not as your login flow.",
              },
              {
                text: "Log the session_id when you use it, so agent actions can be traced back to the originating chat session.",
              },
            ],
          },
        ],
      },
    ],
  },
];