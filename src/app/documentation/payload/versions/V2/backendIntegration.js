// backendIntegration.js
export const backendIntegration = [
  {
    tag_type: "div",
    children: [
      {
        tag_type: "h2",
        text: "Backend Integration",
        selector_uid: "v2_backend_integration",
      },
      {
        tag_type: "p",
        text: "Sageion does not own your user identities. Your product remains the source of truth — users sign up and log in against your own backend, and Sageion is told about them via a small onboarding call. Everything Sageion needs from your backend is exposed through a single SDK, [[@sageion/node]].",
      },

      // ============================================================
      // THE MENTAL MODEL (ONE-TIME VS PER-WORKFLOW)
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "🧠 The Mental Model: One-time Setup vs. Per-Workflow Logic",
        children: [
          {
            tag_type: "p",
            text: "Before you write any code, understand this: **90% of the integration is standard boilerplate you write once for your entire CRM.** You only touch specific API endpoints if that specific workflow requires background processing or human approval.",
          },
          {
            tag_type: "table",
            headers: ["Integration Piece", "Write Once?", "Per-Workflow?", "Description"],
            rows: [
              ["[[onboardUser()]]", "✅ Yes", "❌ No", "Call this in your standard `/register` route. You never touch it again."],
              ["[[/auth/client-user-token]]", "✅ Yes", "❌ No", "Standard auth endpoint so the AI can securely act as a specific user."],
              ["OTP Endpoints", "✅ Yes", "❌ No", "Optional, but if you build `/send-otp` once, every workflow can use it."],
              ["[[getCorrelationId()]]", "❌ No", "✅ Yes", "Only add this to APIs that take time or need a human. (Async/Manual nodes)."],
              ["[[dispatchWebhookAsync()]]", "❌ No", "✅ Yes", "Only call this when your background job finishes or a human clicks 'Approve'."]
            ]
          },
          {
            tag_type: "p",
            text: "If an API is instant (e.g., fetching a menu, reading stock), **you do absolutely nothing to it.** Sageion just reads the standard JSON response."
          }
        ],
      },

      {
        tag_type: "accordion",
        title: "🔑 How identity flows (The One-time Auth)",
        children: [
          {
            tag_type: "ol",
            items: [
              { text: "A user signs up in your app. Your backend creates the user record and returns its own token." },
              { text: "Your backend calls [[onboardUser()]] from the SDK with the user's [[uid]]. This maps the user into Sageion." },
              { text: "On the frontend, your app calls [[initialize({ uid })]] with the same [[uid]]. Sageion now knows which of its users this is." },
              { text: "When the user logs out, your app calls [[initialize({})]] so Sageion clears the session. No page reload needed." },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "UID is the only link",
            children: [
              {
                tag_type: "p",
                text: "The [[uid]] you pass to onboarding must match the [[uid]] you pass to [[initialize()]] exactly. Use your own users.id, users.uid, or another stable unique key — just be consistent, and always send it as a string.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // THE SDK
      // ============================================================
      {
        tag_type: "h3",
        text: "The Sageion SDK",
        selector_uid: "v2_backend_sdk",
      },
      {
        tag_type: "p",
        text: "Sageion ships an official SDK for Node.js. It is framework-agnostic and has zero external dependencies. The SDK handles the pieces you would otherwise have to write by hand: hybrid RSA/AES token encryption, the onboarding HTTP call, correlation-id extraction, and webhook dispatch.",
      },
      {
        tag_type: "code_with_copy",
        code: `npm install @sageion/node`,
        language: "bash",
      },
      {
        tag_type: "p",
        text: "The SDK reads all configuration from your [[.env]] file at import time. Set the following variables before your server starts.",
      },
      {
        tag_type: "code_with_copy",
        code: `# Your Sageion App Credentials (from Admin Panel → App Details)
SAGEION_APP_ID="APP-mw5bc7im-h5xvwm"
SAGEION_REST_API_KEY="your_rest_api_key"
SAGEION_CLIENT_SECRET="your_client_secret"
SAGEION_APP_NAME="your_app_name"   # Used as the client_id for /client-user-token
SAGEION_REGION="us"                 # Defaults to 'us'

# The public key used for token encryption (provide ONE of these)
SAGEION_PUBLIC_KEY_PATH="/etc/sageion/sageion-public.pem"
# OR
# SAGEION_PUBLIC_KEY_PEM="-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----"`,
        language: "bash",
      },
      {
        tag_type: "h4",
        text: "The three core functions",
      },
      {
        tag_type: "table",
        headers: ["Function", "Called from", "Why you need it"],
        rows: [
          ["[[onboardUser()]]", "Your signup handler (One-time)", "Tells Sageion a new user exists in your system so their chat box works."],
          ["[[encryptToken()]]", "Your [[/auth/client-user-token]] endpoint (One-time)", "Encrypts your internal JWT so the AI agent can call your backend on behalf of a specific user. Sageion rejects plaintext JWTs."],
          ["[[getCorrelationId()]] + [[dispatchWebhookAsync()]]", "Any async or manual endpoint the AI agent calls (Per-workflow)", "Reads the correlation id, then fires the webhook that resumes the AI chain when your work finishes."],
        ],
      },

      // ============================================================
      // STEP 1 — ONBOARDING
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 1 — Onboarding a user (One-time Boilerplate)",
        selector_uid: "v2_backend_onboarding_api",
      },
      {
        tag_type: "p",
        text: "The moment your signup handler commits the user to your own DB, call [[onboardUser()]]. The call is fire-and-forget: your signup succeeds even if Sageion is temporarily unreachable. You write this once, and every future AI workflow automatically knows about new users.",
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Node.js (SDK)",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js
const { onboardUser } = require('@sageion/node');

router.post('/register', [...validators], async (req, res) => {
  const { email, password, full_name } = req.body;

  const hashed = await hashPassword(password);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, role',
    [email, hashed, full_name]
  );
  const user = result.rows[0];

  try {
    await onboardUser(user.id.toString(), process.env.SAGEION_APP_ID, {
      email: user.email,
      full_name: user.full_name,
      image: "https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    });
  } catch (onboardErr) {
    console.error('[Sageion] onboarding error:', onboardErr.message);
  }

  const token = generateToken(user.id, user.email, user.role);
  res.status(201).json({ token, user });
});`,
                language: "javascript",
              },
            ],
          },
          {
            label: "Other Languages (Build Wrapper)",
            content: [
              {
                tag_type: "p",
                text: "If your language is not listed, implement a single ~40-line module that exposes the same three functions. Below is the HTTP contract for onboarding.",
              },
              {
                tag_type: "callout",
                type: "info",
                title: "HTTP Contract",
                children: [
                  {
                    tag_type: "table",
                    headers: ["Field", "Value"],
                    rows: [
                      ["URL", "[[POST https://{region}.userauth2.sageion.com/prod/onboarding]]"],
                      ["Header", "[[X-API-Key: SAGEION_REST_API_KEY]]"],
                      ["Body", "[[{ uid, app_id, metadata }]]"],
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // ⭐ STEP 2 — SECURE AGENT AUTH (MOVED UP)
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 2 — Authenticated APIs & the AI Agent (One-time Boilerplate)",
        selector_uid: "v2_agent_integration",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "Required only if your APIs are protected by JWT",
        children: [
          {
            tag_type: "p",
            text: "If the endpoints you expose to Sageion require a Bearer token (JWT), the AI Agent cannot call them as a generic client. You must implement a `/auth/client-user-token` endpoint so Sageion can securely act on behalf of a specific user. You write this endpoint once.",
          },
        ],
      },
      
      {
        tag_type: "accordion",
        title: "1. Agent Token Endpoint (/auth/client-user-token)",
        children: [
          {
            tag_type: "p",
            text: "Your backend exchanges Sageion's client credentials for a short-lived, scoped token tied to a specific user. Sageion then uses this token to call your protected endpoints.",
          },
          {
            tag_type: "h5",
            text: "How encryptToken() fits in",
          },
          {
            tag_type: "p",
            text: "Sageion refuses to accept plaintext JWTs. You must use the SDK's [[encryptToken()]] function to hybrid-encrypt the JWT before returning it.",
          },
          {
            tag_type: "code_with_copy",
            code: `const { encryptToken } = require('@sageion/node');

router.post('/client-user-token', async (req, res) => {
  const { client_id, client_secret, user_id } = req.body;

  // 1. Verify Sageion is the caller
  if (client_id !== process.env.SAGEION_APP_NAME || client_secret !== process.env.SAGEION_CLIENT_SECRET) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // 2. Issue your internal JWT
  const scopes = ['booking:read', 'booking:create'];
  const plaintextToken = generateToken(user_id, 'client@system', 'client', { scope: scopes });

  // 3. Encrypt it using the SDK (reads SAGEION_PUBLIC_KEY_PATH from .env)
  const token = encryptToken(plaintextToken);

  res.json({ token, expires_in: 3600, scope: scopes, user_id });
});`,
            language: "javascript",
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "Response contract is strict",
            children: [
              {
                tag_type: "p",
                text: "You must return `{ token, expires_in, scope, user_id }`. Do not wrap this in a `data` object. If you are building your own wrapper in another language, you must port the `encryptToken()` crypto routine (RSA-OAEP + AES-GCM) exactly.",
              },
            ],
          },
        ],
      },

      {
        tag_type: "accordion",
        title: "2. OTP Endpoints (/auth/send-otp, /auth/verify-otp)",
        children: [
          {
            tag_type: "p",
            text: "If you want users to be able to opt for secondary authentication (e.g., confirming a cancellation via email code), implement these two endpoints. Sageion will call them automatically if the AI decides an action requires a second factor. You build this once, and all workflows can use it.",
          },
          {
            tag_type: "code_with_copy",
            code: `// 1. Send OTP
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  // Generate, save to DB, and send email
  res.json({ success: true });
});

// 2. Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  // Verify against DB
  res.json({
    success: true,
    user_id: "12345", // MUST be a string
  });
});`,
            language: "javascript",
          },
          {
            tag_type: "callout",
            type: "info",
            title: "Keep user_id as a string",
            children: [
              {
                tag_type: "p",
                text: "JSON numbers lose leading zeros across languages. Always return [[user_id]] as a string in the verify-otp response.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // ⭐ STEP 3 — THE PITCH, STORY & NODE TYPES (MOVED DOWN)
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 3 — Node Execution Types (Per-Workflow Logic)",
        selector_uid: "v2_backend_async_correlation",
      },
      
      {
        tag_type: "callout",
        type: "info",
        title: "📖 The Story: The Assistant and The Ticket",
        children: [
          {
            tag_type: "p",
            text: "To make this happen, imagine the Sageion AI Agent is a new [[Executive Assistant]]. A user gives the Assistant a task (a [[Chain]]): \"Find the customer, check their order, and refund them.\"",
          },
          {
            tag_type: "p",
            text: "To finish this, the Assistant has to run errands to your backend APIs (the [[Nodes]]). Depending on how your API is built, the Assistant will experience one of three scenarios:",
          },
          {
            tag_type: "table",
            headers: ["Scenario", "Node Type", "What Happens", "Setup Required"],
            rows: [
              [
                "[[Instant]]", 
                "Sync Node", 
                "The Assistant asks for data, and your API replies immediately in the HTTP response. The Assistant checks it off and moves on.", 
                "✅ None (Leave API as-is)"
              ],
              [
                "[[Background]]", 
                "Async Node", 
                "Your API says: \"I'll put this in a queue. Here is a [[Ticket]] (Correlation ID). I'll call you when it's done.\" The Assistant moves to the next task while you work.", 
                "⭐ Add Correlation ID & Webhook"
              ],
              [
                "[[Human Pause]]", 
                "Manual Node", 
                "Your API says: \"I need a Manager to approve this. Here is a [[Ticket]]. I'll call you back when the human clicks Approve.\" The Assistant waits.", 
                "⭐ Add Correlation ID & Webhook"
              ]
            ]
          },
        ],
      },
      
      {
        tag_type: "callout",
        type: "warning",
        title: "🏆 The Golden Rule",
        children: [
          {
            tag_type: "p",
            text: "For Async and Manual Nodes, Sageion pauses the Chain and waits. It is your backend's job to hold onto that Ticket using [[getCorrelationId(req)]], and use [[dispatchWebhookAsync()]] to call the Assistant back once the work is actually finished.",
          },
        ],
      },

      {
        tag_type: "callout",
        type: "success",
        title: "🛠️ Example: How Demo 1 (Inventory & POs) uses all 3 Node Types",
        children: [
          {
            tag_type: "p",
            text: "Let's look at the 3 APIs used in the Inventory & Purchase Order Demo to see exactly how much (or how little) you have to change your existing code."
          },
          {
            tag_type: "steps",
            items: [
              { 
                title: "1. GET /inventory/:material_id (Sync Node)", 
                content: [
                  { tag_type: "p", text: "The AI asks for the stock. The API replies immediately with the JSON. **Code changes required: ZERO.** Sageion just reads your JSON response." }
                ] 
              },
              { 
                title: "2. POST /purchase-orders (Manual Node)", 
                content: [
                  { tag_type: "p", text: "The AI creates a PO. But the workflow requires a human manager to approve it via email. **Code changes required: Add `getCorrelationId(req)`, save it in your DB, and return HTTP 202.**" }
                ] 
              },
              { 
                title: "3. PATCH /purchase-orders/:po_id/approve (Async Completion)", 
                content: [
                  { tag_type: "p", text: "The manager clicks 'Approve' in the email. **Code changes required: When updating the DB, call `dispatchWebhookAsync(correlation_id, 200, data)` to tell Sageion the human finished the task.**" }
                ] 
              }
            ]
          }
        ]
      },

      {
        tag_type: "tabs",
        items: [
          // ==================== 1. SYNC NODE ====================
          {
            label: "1. Sync Node (Zero Effort)",
            content: [
              {
                tag_type: "callout",
                type: "success",
                title: "No special SDK code required",
                children: [
                  {
                    tag_type: "p",
                    text: "Use this for APIs that compute and return the final result within a few seconds (e.g., fetching a menu, checking inventory, getting order status). Sageion reads the final result directly from the HTTP response body.",
                  },
                ],
              },
              {
                tag_type: "code_with_copy",
                code: `// Your standard API - DO NOT MODIFY THIS
router.get('/inventory/:material_id', async (req, res) => {
  const material = await getStock(req.params.material_id);
  res.json(material); 
});`,
                language: "javascript",
              },
            ],
          },

          // ==================== 2. ASYNC NODE ====================
          {
            label: "2. Async Node (Background Jobs)",
            content: [
              {
                tag_type: "callout",
                type: "info",
                title: "Requires Correlation ID & Webhook",
                children: [
                  {
                    tag_type: "p",
                    text: "Use this when the API kicks off a background job or external process (e.g., a payment gateway, an SMS delivery). Sageion sends a Ticket ([[x-correlation-id]]) and waits for your backend to call it back when the job finishes.",
                  },
                ],
              },
              {
                tag_type: "steps",
                items: [
                  { title: "Receive Ticket", content: [{ tag_type: "p", text: "Sageion sends an [[x-correlation-id]] header." }] },
                  { title: "Acknowledge & start work", content: [{ tag_type: "p", text: "Call [[getCorrelationId(req)]], save it to your database alongside the job, start the background work, and return HTTP 202 immediately." }] },
                  { title: "Fire the Webhook", content: [{ tag_type: "p", text: "When the background job finishes, call [[dispatchWebhookAsync(correlationId, status, data)]] to resume the Assistant." }] },
                ],
              },
              {
                tag_type: "code_with_copy",
                code: `const { getCorrelationId, dispatchWebhookAsync } = require('@sageion/node');

router.post('/process-payment', async (req, res) => {
  const correlation_id = getCorrelationId(req);
  
  // 1. Create pending record and save the Ticket
  const job = await createPendingPayment(req.body);
  await saveCorrelationId(job.id, correlation_id);
  
  // 2. Return 202 immediately
  res.status(202).json({ status: 'processing' });

  // 3. (Later, in a separate worker/queue):
  // When the payment provider confirms success:
  dispatchWebhookAsync(correlation_id, 200, { status: 'paid', payment_id: job.id });
});`,
                language: "javascript",
              },
            ],
          },

          // ==================== 3. MANUAL NODE ====================
          {
            label: "3. Manual Node (Human-in-the-Loop)",
            content: [
              {
                tag_type: "callout",
                type: "warning",
                title: "Requires Correlation ID & Webhook",
                children: [
                  {
                    tag_type: "p",
                    text: "Use this when the workflow must pause and wait for a human action (e.g., a manager clicking an 'Approve' link in an email). It is technically an Async Node, but the trigger is a human, not a background job.",
                  },
                ],
              },
              {
                tag_type: "steps",
                items: [
                  { title: "Receive Ticket", content: [{ tag_type: "p", text: "Sageion sends an [[x-correlation-id]] header." }] },
                  { title: "Acknowledge & send email", content: [{ tag_type: "p", text: "Call [[getCorrelationId(req)]], save it, and send an email to the human with an approval link. Return HTTP 202." }] },
                  { title: "Human clicks the link", content: [{ tag_type: "p", text: "Your frontend sends a request to your backend to approve." }] },
                  { title: "Fire the Webhook", content: [{ tag_type: "p", text: "In your approval handler, call [[dispatchWebhookAsync(correlationId, 200, data)]] to resume the Assistant." }] },
                ],
              },
              {
                tag_type: "code_with_copy",
                code: `const { getCorrelationId, dispatchWebhookAsync } = require('@sageion/node');

// 1. AI calls this to start the approval flow
router.post('/request-approval', async (req, res) => {
  const correlation_id = getCorrelationId(req);
  
  const request = await createApprovalRequest(req.body);
  await saveCorrelationId(request.id, correlation_id);
  
  // Email the manager with a link containing request.id
  await sendApprovalEmail(request.manager_email, request.id);
  
  res.status(202).json({ status: 'pending_approval' });
});

// 2. The Manager clicks the link in their email
router.post('/approve-request', async (req, res) => {
  const request = await approveRequest(req.body.request_id);
  const correlation_id = await getCorrelationIdForRequest(request.id);

  if (correlation_id) {
    // Tell Sageion the human finally clicked!
    dispatchWebhookAsync(correlation_id, 200, { 
      approved: true, 
      approved_by: req.user.id 
    });
  }

  res.json({ success: true });
});`,
                language: "javascript",
              },
            ],
          },
        ],
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
        tag_type: "table",
        headers: ["Variable", "Used for"],
        rows: [
          ["[[SAGEION_REGION]]", "Regional prefix in URLs (us, in)."],
          ["[[SAGEION_APP_ID]]", "Your Sageion app id."],
          ["[[SAGEION_REST_API_KEY]]", "Used for onboarding."],
          ["[[SAGEION_CLIENT_SECRET]]", "Verifies credentials on [[/auth/client-user-token]]."],
          ["[[SAGEION_APP_NAME]]", "Sent as [[client_id]] on [[/auth/client-user-token]]."],
          ["[[SAGEION_PUBLIC_KEY_PATH]]", "Path to PEM file. Read by [[encryptToken()]]."],
          ["[[SAGEION_PUBLIC_KEY_PEM]]", "Inline PEM alternative."],
        ],
      },
    ],
  },
];