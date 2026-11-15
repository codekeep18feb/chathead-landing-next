// backendIntegration.js
export const backendIntegration = [
  {
    tag_type: "div",
    children: [
      {
        tag_type: "h2",
        text: "Connecting Sageion to Your Product's Authentication",
        selector_uid: "v2_backend_integration",
      },
      {
        tag_type: "p",
        text: "Sageion does not own your user identities. Your product remains the source of truth — users sign up and log in against your own backend, and Sageion is told about them via a small onboarding call. Everything Sageion needs from your backend is exposed through a single SDK, [[@sageion/node]].",
      },
      {
        tag_type: "accordion",
        title: "🔑 How identity flows",
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
          ["[[onboardUser()]]", "Your signup handler", "Tells Sageion a new user exists in your system so their chat box works."],
          ["[[encryptToken()]]", "Your [[/auth/client-user-token]] endpoint", "Encrypts your internal JWT so the AI agent can call your backend on behalf of a specific user. Sageion rejects plaintext JWTs."],
          ["[[getCorrelationId()]] + [[dispatchWebhookAsync()]]", "Any async endpoint the AI agent calls", "Reads the correlation id, then fires the webhook that resumes the AI chain when your async work finishes."],
        ],
      },

      // ============================================================
      // STEP 1 — ONBOARDING
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 1 — Onboarding a user",
        selector_uid: "v2_backend_onboarding_api",
      },
      {
        tag_type: "p",
        text: "The moment your signup handler commits the user to your own DB, call [[onboardUser()]]. The call is fire-and-forget: your signup succeeds even if Sageion is temporarily unreachable.",
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
              {
                tag_type: "callout",
                type: "info",
                title: "Signature",
                children: [
                  {
                    tag_type: "table",
                    headers: ["Argument", "Type", "Description"],
                    rows: [
                      ["[[uid]]", "string", "Your platform's unique user id. Must match what you pass to [[initialize()]] on the frontend."],
                      ["[[appId]]", "string", "Your Sageion app id ([[SAGEION_APP_ID]])."],
                      ["[[metadata]]", "object?", "Optional. [[email]], [[full_name]], [[image]]."],
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: "Other Languages (Build Wrapper)",
            content: [
              {
                tag_type: "p",
                text: "If your language is not listed, implement a single ~40-line module that exposes the same three functions. Below are skeleton files for Python, Go, PHP, and Ruby.",
              },
              {
                tag_type: "accordion",
                title: "🐍 Python",
                children: [
                  {
                    tag_type: "code_with_copy",
                    code: `# sageion.py
import os, httpx

REGION = os.environ.get("SAGEION_REGION", "us")

def onboard_user(uid: str, app_id: str, metadata: dict | None = None) -> None:
    try:
        httpx.post(
            f"https://{REGION}.userauth2.sageion.com/prod/onboarding",
            json={"uid": str(uid), "app_id": app_id, "metadata": metadata or {}},
            headers={"X-API-Key": os.environ["SAGEION_REST_API_KEY"]},
            timeout=5.0,
        )
    except Exception as exc:
        print(f"[Sageion] onboarding error: {exc}")`,
                    language: "python",
                  },
                ],
              },
              {
                tag_type: "accordion",
                title: "🐹 Go",
                children: [
                  {
                    tag_type: "code_with_copy",
                    code: `package sageion

import ("bytes"; "encoding/json"; "net/http"; "os"; "time")

func OnboardUser(uid, appID string, metadata map[string]any) {
    body, _ := json.Marshal(map[string]any{"uid": uid, "app_id": appID, "metadata": metadata})
    req, _ := http.NewRequest("POST", fmt.Sprintf("https://%s.userauth2.sageion.com/prod/onboarding", os.Getenv("SAGEION_REGION")), bytes.NewReader(body))
    req.Header.Set("X-API-Key", os.Getenv("SAGEION_REST_API_KEY"))
    resp, err := (&http.Client{Timeout: 5 * time.Second}).Do(req)
    if err != nil { return }
    defer resp.Body.Close()
}`,
                    language: "go",
                  },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // STEP 2 — ASYNC APIs
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 2 — APIs the AI agent can call: sync vs. async",
        selector_uid: "v2_backend_async_correlation",
      },
      {
        tag_type: "p",
        text: "Every API you register with Sageion is either synchronous (returns data immediately) or asynchronous (waits for a payment, approval, or background job). If your API is synchronous, you don't need any special code. If it is asynchronous, you must use the SDK to read the correlation ID and fire a webhook.",
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Synchronous (Default)",
            content: [
              {
                tag_type: "p",
                text: "Your handler returns the result immediately. The AI agent reads it from the HTTP response body. No special headers to read, no webhook to post.",
              },
              {
                tag_type: "code_with_copy",
                code: `router.post('/bookings', async (req, res) => {
  const booking = await createBooking(req.user.userId, req.body);
  res.status(201).json({ success: true, booking_id: booking.id });
});`,
                language: "javascript",
              },
            ],
          },
          {
            label: "Asynchronous (Async Callback)",
            content: [
              {
                tag_type: "p",
                text: "Sageion sends an [[x-correlation-id]] header and waits for your backend to POST the final result when the work is done.",
              },
              {
                tag_type: "steps",
                items: [
                  { title: "Receive request", content: [{ tag_type: "p", text: "Sageion sends an [[x-correlation-id]] header on every call." }] },
                  { title: "Acknowledge & kick off work", content: [{ tag_type: "p", text: "Call [[getCorrelationId(req)]], persist it, start the work, and return HTTP 202." }] },
                  { title: "Fire the webhook", content: [{ tag_type: "p", text: "When the work finishes, call [[dispatchWebhookAsync(correlationId, status, data)]]." }] },
                ],
              },
              {
                tag_type: "accordion",
                title: "Node.js Code Example",
                children: [
                  {
                    tag_type: "code_with_copy",
                    code: `const { getCorrelationId, dispatchWebhookAsync } = require('@sageion/node');

router.post('/bookings', async (req, res) => {
  const correlation_id = getCorrelationId(req);
  const booking = await createPendingBooking(req.body);
  await attachCorrelationId(booking.id, correlation_id);
  
  res.status(202).json({ status: 'pending_payment' });
});

router.post('/payments/webhook', async (req, res) => {
  const correlation_id = await getCorrelationIdForBooking(req.body.booking_id);
  if (correlation_id) {
    dispatchWebhookAsync(correlation_id, 200, { status: 'confirmed' });
  }
  res.json({ ok: true });
});`,
                    language: "javascript",
                  },
                ],
              },
            ],
          },
        ],
      },

      // ============================================================
      // STEP 3 — SECURE AGENT AUTH (The separated section)
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 3 — Authenticated APIs & the AI Agent",
        selector_uid: "v2_agent_integration",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "Required only if your APIs are protected by JWT",
        children: [
          {
            tag_type: "p",
            text: "If the endpoints you expose to Sageion require a Bearer token (JWT), the AI Agent cannot call them as a generic client. You must implement a `/auth/client-user-token` endpoint so Sageion can securely act on behalf of a specific user.",
          },
        ],
      },
      
      {
        tag_type: "accordion",
        title: "1. Agent Token Endpoint (/auth/client-user-token)",
        children: [
          {
            tag_type: "p",
            text: "This is a one-time backend setup. Your backend exchanges Sageion's client credentials for a short-lived, scoped token tied to a specific user. Sageion then uses this token to call your protected endpoints.",
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
            text: "If you want users to be able to opt for secondary authentication (e.g., confirming a cancellation via email code), implement these two endpoints. Sageion will call them automatically if the AI decides an action requires a second factor.",
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