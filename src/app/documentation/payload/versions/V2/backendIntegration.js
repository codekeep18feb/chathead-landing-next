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
        text: "Sageion does not own your user identities. Your product remains the source of truth — users sign up and log in against your own backend, and Sageion is told about them via a small onboarding call. Everything Sageion needs from your backend is exposed through a single SDK, [[@sageion/node]], which wraps the cryptography, HTTP calls, and webhook plumbing into three functions.",
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
                text: "Your backend calls [[onboardUser()]] from the SDK with the user's [[uid]]. This maps the user into Sageion.",
              },
              {
                text: "On the frontend, your app calls [[initialize({ uid })]] with the same [[uid]]. Sageion now knows which of its users this is.",
              },
              {
                text: "When the user logs out, your app calls [[initialize({})]] so Sageion clears the session. No page reload needed.",
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
                text: "The [[uid]] you pass to onboarding must match the [[uid]] you pass to [[initialize()]] exactly. Sageion has no other way to know which of your users is which. Use your own users.id, users.uid, or another stable unique key — just be consistent, and always send it as a string.",
              },
            ],
          },
        ],
      },

      // ============================================================
      // THE SDK — NODE.JS FIRST
      // ============================================================
      {
        tag_type: "h3",
        text: "The Sageion SDK",
        selector_uid: "v2_backend_sdk",
      },
      {
        tag_type: "p",
        text: "Sageion ships an official SDK for Node.js. It is framework-agnostic (Express, Next.js, Fastify, NestJS, Lambda — anything) and has zero external dependencies. The SDK handles the pieces you would otherwise have to write by hand: hybrid RSA/AES token encryption, the onboarding HTTP call, correlation-id extraction, and webhook dispatch to Sageion.",
      },

      {
        tag_type: "callout",
        type: "success",
        title: "✨ What the SDK does for you",
        children: [
          {
            tag_type: "ul",
            items: [
              { text: "[[onboardUser()]] — registers a user with Sageion. Fire-and-forget friendly." },
              { text: "[[encryptToken()]] — hybrid-encrypts your internal JWT so Sageion can authenticate the agent as a specific user. One line instead of ~150 lines of crypto." },
              { text: "[[getCorrelationId(req)]] — extracts [[x-correlation-id]] from a request object safely." },
              { text: "[[dispatchWebhookAsync()]] / [[dispatchWebhook()]] — POSTs the final result to Sageion's webhook callback. Fire-and-forget or awaitable." },
            ],
          },
        ],
      },

      {
        tag_type: "h4",
        text: "Installation",
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
        tag_type: "p",
        text: "Integrating Sageion comes down to three calls. Each one solves a specific problem in the identity flow.",
      },
      {
        tag_type: "table",
        headers: ["Function", "Called from", "Why you need it"],
        rows: [
          [
            "[[onboardUser()]]",
            "Your signup handler",
            "Tells Sageion a new user exists in your system so their chat box works.",
          ],
          [
            "[[encryptToken()]]",
            "Your [[/auth/client-user-token]] endpoint",
            "Encrypts your internal JWT so the AI agent can call your backend on behalf of a specific user. Sageion rejects plaintext JWTs.",
          ],
          [
            "[[getCorrelationId()]] + [[dispatchWebhookAsync()]]",
            "Any async endpoint the AI agent calls",
            "Reads the correlation id, then fires the webhook that resumes the AI chain when your async work finishes.",
          ],
        ],
      },

      {
        tag_type: "callout",
        type: "info",
        title: "📦 No SDK for your language yet?",
        children: [
          {
            tag_type: "p",
            text: "The integration contract is small enough that any team can implement an equivalent wrapper in a few dozen lines. Every section below shows the Node.js SDK usage as the reference, and includes a \"build your own wrapper\" tab with the exact HTTP contract and a skeleton file you can drop into your project. The output is byte-identical — the algorithms and payload shapes are fixed by Sageion, not by the SDK.",
          },
        ],
      },

      // ============================================================
      // ONBOARDING — NODE.JS SDK FIRST
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 1 — Onboarding a user",
        selector_uid: "v2_backend_onboarding_api",
      },
      {
        tag_type: "p",
        text: "The moment your signup handler commits the user to your own DB, call [[onboardUser()]]. The call is fire-and-forget: your signup succeeds even if Sageion is temporarily unreachable, and you log the error for a background retry.",
      },

      {
        tag_type: "tabs",
        items: [
          // ==================== NODE.JS ====================
          {
            label: "Node.js (SDK)",
            content: [
              {
                tag_type: "h4",
                text: "Backend onboarding — Node.js",
              },
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js
const { onboardUser } = require('@sageion/node');

router.post('/register', [...validators], async (req, res) => {
  const { email, password, full_name } = req.body;

  // 1. Create the user in your own DB
  const hashed = await hashPassword(password);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, role',
    [email, hashed, full_name]
  );
  const user = result.rows[0];

  // 2. Onboard the user into Sageion — fire-and-forget
  try {
    await onboardUser(
      user.id.toString(),              // uid (always a string)
      process.env.SAGEION_APP_ID,      // your app id
      {
        email: user.email,
        full_name: user.full_name,
        image: "https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
      }
    );
  } catch (onboardErr) {
    // Do NOT fail registration — user can still log in.
    // The chat box just won't work for them until they're onboarded.
    console.error('[Sageion] onboarding error:', onboardErr.message);
  }

  // 3. Return your own token — Sageion does not issue auth tokens
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
                    tag_type: "code_with_copy",
                    code: `await onboardUser(uid, appId, metadata?, options?);`,
                    language: "javascript",
                  },
                  {
                    tag_type: "table",
                    headers: ["Argument", "Type", "Description"],
                    rows: [
                      ["[[uid]]", "string", "Your platform's unique user id. Must match what you pass to [[initialize()]] on the frontend."],
                      ["[[appId]]", "string", "Your Sageion app id ([[SAGEION_APP_ID]])."],
                      ["[[metadata]]", "object?", "Optional. Recognised keys: [[email]], [[full_name]], [[image]], plus any extra display fields. Only [[full_name]] and [[image]] show up in the Admin Panel today."],
                      ["[[options]]", "object?", "Optional overrides — [[region]], [[apiKey]]. Defaults are pulled from [[.env]]."],
                    ],
                  },
                ],
              },
              {
                tag_type: "callout",
                type: "warning",
                title: "Onboarding failure is silent by design",
                children: [
                  {
                    tag_type: "p",
                    text: "If the onboarding call fails, registration still succeeds. Your user exists in your DB but not in Sageion — the chat box won't work for them until they're onboarded. Add an alert or a background retry so you notice.",
                  },
                ],
              },
              {
                tag_type: "h5",
                text: "Frontend onboarding (SDK-in-browser alternative)",
              },
              {
                tag_type: "p",
                text: "If you cannot onboard from your backend (for example, in a static-only deployment), the SDK exposes an onboarding method you can call from the browser immediately after your own signup succeeds.",
              },
              {
                tag_type: "code_with_copy",
                code: `await window.sageion_os.onboarding(
  {
    uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM",
    metadata: {
      full_name: "Jane Doe",
      image: "https://example.com/avatars/jane.jpg"
    }
  },
  { app_id: "your_application_id" }
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
                      { text: "This call must run inside a page where the SDK bundle is already loaded (see Client Side Integration)." },
                      { text: "If your app has a signup → login redirect, call onboarding on the destination page, right before [[initialize()]]." },
                      { text: "Onboarding is idempotent per [[uid]] — calling it twice for the same user is harmless." },
                    ],
                  },
                ],
              },
              {
                tag_type: "h5",
                text: "Manual onboarding via Admin Panel",
              },
              {
                tag_type: "p",
                text: "Onboarding one user at a time from the Sageion Admin Panel is useful for quick testing during development, and for migrating users that already existed in your app before Sageion was integrated. Navigate to your application → Users → Add User, enter the [[uid]], and save.",
              },
              {
                tag_type: "img",
                src: "/Asset/onboarding_via_admin.png",
                alt: "Sageion Admin Panel user onboarding interface",
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

          // ==================== PYTHON ====================
          {
            label: "Python (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "A Python SDK is not yet published. The equivalent integration is a single ~40-line module that exposes the same three functions as the Node SDK. Drop this in [[sageion.py]] and import it wherever you would import [[@sageion/node]].",
              },
              {
                tag_type: "code_with_copy",
                code: `# sageion.py — equivalent of @sageion/node
import os
import httpx

REGION = os.environ.get("SAGEION_REGION", "us")

def onboard_user(uid: str, app_id: str, metadata: dict | None = None) -> None:
    """Fire-and-forget onboarding. Never raises."""
    try:
        httpx.post(
            f"https://{REGION}.userauth2.sageion.com/prod/onboarding",
            json={"uid": str(uid), "app_id": app_id, "metadata": metadata or {}},
            headers={
                "X-API-Key": os.environ["SAGEION_REST_API_KEY"],
                "Content-Type": "application/json",
            },
            timeout=5.0,
        )
    except Exception as exc:
        print(f"[Sageion] onboarding error: {exc}")`,
                language: "python",
              },
              {
                tag_type: "h4",
                text: "Using it in your signup handler",
              },
              {
                tag_type: "code_with_copy",
                code: `from fastapi import APIRouter
from sageion import onboard_user

router = APIRouter()

@router.post("/register")
async def register(body: RegisterBody):
    # 1. Create the user in your own DB
    user = await create_user(body)          # your own function

    # 2. Onboard the user into Sageion (fire-and-forget)
    onboard_user(str(user.id), os.environ["SAGEION_APP_ID"], {
        "email": user.email,
        "full_name": user.full_name,
        "image": user.avatar_url or "",
    })

    # 3. Return your own token — Sageion does not issue auth tokens
    token = generate_token(user.id, user.email, user.role)
    return {"token": token, "user": user}`,
                language: "python",
              },
              {
                tag_type: "callout",
                type: "info",
                title: "HTTP contract — what the wrapper talks to",
                children: [
                  {
                    tag_type: "table",
                    headers: ["Field", "Value"],
                    rows: [
                      ["Method + URL", "[[POST https://{region}.userauth2.sageion.com/prod/onboarding]]"],
                      ["[[X-API-Key]] header", "Your [[SAGEION_REST_API_KEY]]"],
                      ["[[Content-Type]]", "[[application/json]]"],
                      ["Body — [[uid]]", "The user's id as a string"],
                      ["Body — [[app_id]]", "Your [[SAGEION_APP_ID]]"],
                      ["Body — [[metadata]]", "Optional. [[full_name]] and [[image]] are read by the Admin Panel; other keys are stored but unused."],
                      ["Success", "Any [[2xx]] — onboarding is idempotent per uid"],
                      ["Failure", "Return [[4xx]]/[[5xx]] so your own retry logic can detect it"],
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== GO ====================
          {
            label: "Go (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "A Go SDK is not yet published. Drop this in [[internal/sageion/sageion.go]] and call it wherever the Node SDK would be imported.",
              },
              {
                tag_type: "code_with_copy",
                code: `package sageion

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func OnboardUser(uid, appID string, metadata map[string]any) {
    body, _ := json.Marshal(map[string]any{
        "uid": uid, "app_id": appID, "metadata": metadata,
    })
    req, _ := http.NewRequest("POST",
        fmt.Sprintf("https://%s.userauth2.sageion.com/prod/onboarding",
            os.Getenv("SAGEION_REGION")),
        bytes.NewReader(body))
    req.Header.Set("X-API-Key", os.Getenv("SAGEION_REST_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    resp, err := (&http.Client{Timeout: 5 * time.Second}).Do(req)
    if err != nil {
        fmt.Printf("[Sageion] onboarding error: %v\\n", err)
        return
    }
    defer resp.Body.Close()
}`,
                language: "go",
              },
              {
                tag_type: "h4",
                text: "Using it in your signup handler",
              },
              {
                tag_type: "code_with_copy",
                code: `func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Create the user in your own DB
    user := createUser(r)

    // 2. Onboard the user into Sageion (fire-and-forget)
    sageion.OnboardUser(
        fmt.Sprintf("%d", user.ID),
        os.Getenv("SAGEION_APP_ID"),
        map[string]any{
            "email":     user.Email,
            "full_name": user.FullName,
            "image":     user.AvatarURL,
        },
    )

    // 3. Return your own token
    token := generateToken(user.ID, user.Email, user.Role)
    json.NewEncoder(w).Encode(map[string]any{"token": token, "user": user})
}`,
                language: "go",
              },
              {
                tag_type: "p",
                text: "The HTTP contract is identical to the Python example above — same URL, same headers, same body shape.",
              },
            ],
          },

          // ==================== PHP ====================
          {
            label: "PHP (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "A PHP SDK is not yet published. Drop this in [[app/Support/Sageion.php]] and call it from your controller.",
              },
              {
                tag_type: "code_with_copy",
                code: `<?php
// app/Support/Sageion.php
namespace App\\Support;

use Illuminate\\Support\\Facades\\Http;

class Sageion
{
    public static function onboardUser(string $uid, string $appId, array $metadata = []): void
    {
        try {
            Http::timeout(5)->withHeaders([
                'X-API-Key' => env('SAGEION_REST_API_KEY'),
            ])->post(
                sprintf('https://%s.userauth2.sageion.com/prod/onboarding', env('SAGEION_REGION')),
                ['uid' => $uid, 'app_id' => $appId, 'metadata' => $metadata]
            );
        } catch (\\Throwable $e) {
            \\Log::error('[Sageion] onboarding error: ' . $e->getMessage());
        }
    }
}`,
                language: "php",
              },
              {
                tag_type: "h4",
                text: "Using it in your signup handler",
              },
              {
                tag_type: "code_with_copy",
                code: `<?php
use App\\Support\\Sageion;

public function register(Request $request)
{
    // 1. Create the user in your own DB
    $user = User::create([
        'email'     => $request->email,
        'password'  => Hash::make($request->password),
        'full_name' => $request->full_name,
    ]);

    // 2. Onboard the user into Sageion (fire-and-forget)
    Sageion::onboardUser((string) $user->id, env('SAGEION_APP_ID'), [
        'email'     => $user->email,
        'full_name' => $user->full_name,
        'image'     => $user->avatar_url ?? '',
    ]);

    // 3. Return your own token
    $token = $user->createToken('auth')->plainTextToken;
    return response()->json(['token' => $token, 'user' => $user], 201);
}`,
                language: "php",
              },
            ],
          },

          // ==================== RUBY ====================
          {
            label: "Ruby (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "A Ruby SDK is not yet published. Drop this in [[lib/sageion.rb]] and require it wherever you would import [[@sageion/node]].",
              },
              {
                tag_type: "code_with_copy",
                code: `# lib/sageion.rb
require 'faraday'
require 'json'

module Sageion
  module_function

  REGION = ENV.fetch('SAGEION_REGION', 'us')

  def onboard_user(uid, app_id, metadata = {})
    conn = Faraday.new(url: "https://#{REGION}.userauth2.sageion.com")
    conn.post('/prod/onboarding') do |req|
      req.headers['X-API-Key']    = ENV['SAGEION_REST_API_KEY']
      req.headers['Content-Type'] = 'application/json'
      req.options.timeout = 5
      req.body = { uid: uid.to_s, app_id: app_id, metadata: metadata }.to_json
    end
  rescue => e
    Rails.logger.error("[Sageion] onboarding error: #{e.message}")
  end
end`,
                language: "ruby",
              },
              {
                tag_type: "h4",
                text: "Using it in your signup handler",
              },
              {
                tag_type: "code_with_copy",
                code: `class AuthController < ApplicationController
  def register
    user = User.create!(
      email:      params[:email],
      password:   params[:password],
      full_name:  params[:full_name],
      avatar_url: params[:avatar_url]
    )

    Sageion.onboard_user(user.id, ENV['SAGEION_APP_ID'], {
      email:     user.email,
      full_name: user.full_name,
      image:     user.avatar_url
    })

    token = generate_token(user)
    render json: { token: token, user: user }, status: :created
  end
end`,
                language: "ruby",
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
            content: [{ tag_type: "img", src: "/Asset/onboarded_user.png", alt: "Sageion Admin Panel showing onboarded users" }],
          },
          {
            title: "Admin Panel — no users yet",
            content: [{ tag_type: "img", src: "/Asset/no_users_admin.png", alt: "Sageion Admin Panel showing no onboarded users" }],
          },
        ],
      },

      // ============================================================
      // ASYNC APIs — getCorrelationId + dispatchWebhookAsync
      // ============================================================
      {
        tag_type: "h3",
        text: "Step 2 — APIs the AI agent can call: sync vs. async",
        selector_uid: "v2_backend_async_correlation",
      },
      {
        tag_type: "p",
        text: "Every API you register with Sageion is either synchronous or asynchronous. Sync is the default: your handler returns the result and the AI agent reads it from the HTTP response body. Async is for endpoints that cannot produce the final result within the request lifecycle — a payment gateway, a human approval, a background job. For async APIs, Sageion sends an [[x-correlation-id]] header and waits for your backend to POST the final result to the webhook callback URL.",
      },

      {
        tag_type: "table",
        headers: ["", "Synchronous (default)", "Asynchronous ([[Async Callback]] enabled)"],
        rows: [
          ["When to use", "Endpoint returns the final result within a few seconds.", "Final result depends on an external event that happens later."],
          ["How the agent gets the result", "Reads it from the HTTP response body.", "Waits for your backend to POST to the webhook callback URL."],
          ["What Sageion sends", "Nothing extra.", "An [[x-correlation-id]] header on the initial request."],
          ["SDK you use", "None — write a normal handler.", "[[getCorrelationId()]] + [[dispatchWebhookAsync()]]."],
          ["Where the config lives", "Nothing to configure — this is the default.", "Enable [[Async Callback]] when registering the API in the Admin Panel."],
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "One endpoint, one nature",
        children: [
          {
            tag_type: "p",
            text: "An endpoint is either synchronous or asynchronous — it does not switch at runtime. The example code below uses an [[if (correlation_id)]] branch purely to illustrate both paths side-by-side; in a real integration you pick one and ship it.",
          },
        ],
      },

      // -------- Path A: synchronous --------
      {
        tag_type: "h4",
        text: "Path A — Synchronous API",
        selector_uid: "v2_backend_sync_path",
      },
      {
        tag_type: "p",
        text: "You write your handler exactly as you would for any normal API. No SDK calls needed. Sageion calls your endpoint, waits for the response, and uses the body as the final result.",
      },
      {
        tag_type: "code_with_copy",
        code: `// Example: a bookings endpoint that confirms the reservation inline.
// Nothing Sageion-specific. This is the default path.

router.post('/bookings', [...validators], async (req, res) => {
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  const booking = await createBooking(user_id, room_id, check_in, check_out);
  res.status(201).json({
    success: true,
    booking_id: booking.id,
    status: booking.status,
  });
});`,
        language: "javascript",
      },
      {
        tag_type: "callout",
        type: "success",
        title: "You're done",
        children: [
          {
            tag_type: "p",
            text: "If your API is synchronous, there is nothing else to add. Everything that follows in this section is for the async case only.",
          },
        ],
      },

      // -------- Path B: asynchronous --------
      {
        tag_type: "h4",
        text: "Path B — Asynchronous API ([[Async Callback]] enabled)",
        selector_uid: "v2_backend_async_path",
      },
      {
        tag_type: "p",
        text: "You register the API in the Sageion Admin Panel with [[Async Callback]] enabled. From then on Sageion attaches an [[x-correlation-id]] header to every request and treats your initial response as an acknowledgment. When the async work finishes, your backend POSTs the final result to Sageion's webhook callback, and the AI chain resumes.",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "🔄 When async is the right choice",
        children: [
          {
            tag_type: "ul",
            items: [
              { text: "The action depends on a payment gateway that confirms minutes later." },
              { text: "The action depends on a human approval that happens out-of-band." },
              { text: "The action kicks off a multi-step workflow whose completion is signalled by a separate event." },
              { text: "The action needs to send an email or SMS and wait for a response before it can produce a final result." },
            ],
          },
        ],
      },

      {
        tag_type: "h5",
        text: "How the async flow works",
      },
      {
        tag_type: "steps",
        items: [
          {
            title: "Sageion sends the request with [[x-correlation-id]]",
            content: [{ tag_type: "p", text: "Because the API is configured with [[Async Callback]] enabled, Sageion attaches the header on every call." }],
          },
          {
            title: "Your handler reads the id and acknowledges the request",
            content: [{ tag_type: "p", text: "Call [[getCorrelationId(req)]], persist the id alongside whatever entity your async work is about, kick off the work, and respond with HTTP [[202]] immediately." }],
          },
          {
            title: "Later — when the work finishes — your backend fires the webhook",
            content: [{ tag_type: "p", text: "Call [[dispatchWebhookAsync(correlationId, status, data)]] with the final payload. The SDK POSTs it to Sageion's webhook callback and the AI chain resumes." }],
          },
        ],
      },

      {
        tag_type: "tabs",
        items: [
          // ==================== NODE.JS ====================
          {
            label: "Node.js (SDK)",
            content: [
              {
                tag_type: "h4",
                text: "Async handler — Node.js",
              },
              {
                tag_type: "code_with_copy",
                code: `// routes/bookings.js — ASYNC booking (waits on payment)
const { getCorrelationId, dispatchWebhookAsync } = require('@sageion/node');

router.post('/', [...validators], async (req, res) => {
  const correlation_id = getCorrelationId(req); // SDK helper — no header parsing
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // 1. Create the booking in a pending state
  const booking = await createPendingBooking(user_id, room_id, check_in, check_out);

  // 2. Send the user a payment link
  const paymentLink = await createPaymentLink(booking.id, booking.total_price);

  // 3. Persist correlation_id so the payment webhook can find it later
  await attachCorrelationId(booking.id, correlation_id);

  // 4. Acknowledge the request
  res.status(202).json({
    success: true,
    booking_id: booking.id,
    status: 'pending_payment',
    payment_link: paymentLink,
  });
});

// A SEPARATE handler — the payment gateway calls this when payment succeeds.
router.post('/payments/webhook', async (req, res) => {
  const { booking_id, status } = req.body;

  if (status !== 'success') return res.json({ ok: true });

  const booking = await confirmBooking(booking_id);
  const correlation_id = await getCorrelationIdForBooking(booking_id);

  if (correlation_id) {
    // ⭐ SDK fires the webhook — no axios, no URL building, no timeout config
    dispatchWebhookAsync(correlation_id, 200, {
      success: true,
      booking_id: booking.id,
      status: 'confirmed',
    });
  }

  res.json({ ok: true });
});`,
                language: "javascript",
              },
              {
                tag_type: "callout",
                type: "info",
                title: "Where the webhook call lives",
                children: [
                  {
                    tag_type: "p",
                    text: "Notice the webhook is dispatched from the payment provider's handler — not from the original POST /bookings. That's the whole point of async: the request Sageion initiated finishes fast, and the final result arrives through a different code path entirely.",
                  },
                ],
              },
              {
                tag_type: "h5",
                text: "Signature",
              },
              {
                tag_type: "table",
                headers: ["Function", "Notes"],
                rows: [
                  ["[[getCorrelationId(req)]]", "Reads [[x-correlation-id]] from the request. Returns [[null]] if absent — safe to call on sync endpoints too."],
                  ["[[dispatchWebhookAsync(id, status, data)]]", "Fire-and-forget. Returns immediately, never throws. Use this in 99% of cases."],
                  ["[[dispatchWebhook(id, status, data)]]", "Awaitable version. Use only if you need to know whether the webhook was accepted before continuing (rare — usually the 202 handshake is enough)."],
                ],
              },
              {
                tag_type: "callout",
                type: "info",
                title: "Status codes you pass to the webhook",
                children: [
                  {
                    tag_type: "table",
                    headers: ["Code", "Meaning", "What the AI does next"],
                    rows: [
                      ["[[200]]", "Step succeeded, continue evaluating", "Chain continues to the next step"],
                      ["[[201]]", "Resource created", "Chain moves to the next node"],
                      ["[[202]]", "Work accepted / queued", "Chain waits for the next callback"],
                      ["[[400]]", "Bad request — the AI tried something invalid", "Chain stops or errors gracefully"],
                      ["[[500]]", "Your backend crashed", "Chain reports the failure"],
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== PYTHON ====================
          {
            label: "Python (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "Add these two functions to your [[sageion.py]] module. Together with [[onboard_user()]] they form the same three-call surface as [[@sageion/node]].",
              },
              {
                tag_type: "code_with_copy",
                code: `# sageion.py — add these to the module you created above

def get_correlation_id(request) -> str | None:
    return request.headers.get("x-correlation-id")

def dispatch_webhook_async(correlation_id: str, status_code: int, data: dict) -> None:
    """Fire-and-forget. Posts the final result to Sageion."""
    try:
        httpx.post(
            f"https://{REGION}.autobot2.sageion.com/prod/webhook/callback",
            json={"correlation_id": correlation_id, "status": status_code, "data": data},
            timeout=5.0,
        )
    except Exception as exc:
        print(f"[Sageion] webhook error: {exc}")`,
                language: "python",
              },
              {
                tag_type: "h4",
                text: "Using them in your async handler",
              },
              {
                tag_type: "code_with_copy",
                code: `from fastapi import APIRouter, Request, Response
from sageion import get_correlation_id, dispatch_webhook_async

router = APIRouter()

@router.post("/orders")
async def create_order(request: Request):
    correlation_id = get_correlation_id(request)

    body = await request.json()
    order = await create_pending_order(body)
    await attach_correlation_id(order.id, correlation_id)

    # Return early — do not wait for the async work to finish.
    return Response(
        content=f'{{"success":true,"order_id":"{order.id}","status":"processing"}}',
        status_code=202,
        media_type="application/json",
    )

async def deliver_webhook(correlation_id: str, order_id: int):
    """Call this from wherever the async work completes."""
    dispatch_webhook_async(correlation_id, 200, {
        "success": True,
        "order_id": order_id,
        "status": "completed",
    })`,
                language: "python",
              },
              {
                tag_type: "callout",
                type: "info",
                title: "HTTP contract — what the wrapper talks to",
                children: [
                  {
                    tag_type: "table",
                    headers: ["Field", "Value"],
                    rows: [
                      ["Method + URL", "[[POST https://{region}.autobot2.sageion.com/prod/webhook/callback]]"],
                      ["[[Content-Type]]", "[[application/json]]"],
                      ["Body — [[correlation_id]]", "The verbatim header value from the original request"],
                      ["Body — [[status]]", "HTTP status code (200/201/202/400/500) so the AI knows how to branch"],
                      ["Body — [[data]]", "The final payload the workflow engine receives as the API response"],
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== GO ====================
          {
            label: "Go (build your own wrapper)",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// internal/sageion/sageion.go — add these to the package you created above

func GetCorrelationID(r *http.Request) string {
    return r.Header.Get("x-correlation-id")
}

func DispatchWebhookAsync(correlationID string, status int, data map[string]any) {
    go func() {
        body, _ := json.Marshal(map[string]any{
            "correlation_id": correlationID, "status": status, "data": data,
        })
        req, _ := http.NewRequest("POST",
            fmt.Sprintf("https://%s.autobot2.sageion.com/prod/webhook/callback",
                os.Getenv("SAGEION_REGION")),
            bytes.NewReader(body))
        req.Header.Set("Content-Type", "application/json")

        resp, err := (&http.Client{Timeout: 5 * time.Second}).Do(req)
        if err != nil {
            fmt.Printf("[Sageion] webhook error: %v\\n", err)
            return
        }
        defer resp.Body.Close()
    }()
}`,
                language: "go",
              },
              {
                tag_type: "h4",
                text: "Using them in your async handler",
              },
              {
                tag_type: "code_with_copy",
                code: `func CreateOrderHandler(w http.ResponseWriter, r *http.Request) {
    correlationID := sageion.GetCorrelationID(r)

    order := createPendingOrder(r)
    attachCorrelationID(order.ID, correlationID)

    // Return early.
    w.WriteHeader(http.StatusAccepted)
    json.NewEncoder(w).Encode(map[string]any{
        "success":  true,
        "order_id": order.ID,
        "status":   "processing",
    })
}

// Call this from wherever the async work completes.
func DeliverWebhook(correlationID string, orderID int64) {
    sageion.DispatchWebhookAsync(correlationID, 200, map[string]any{
        "success":  true,
        "order_id": orderID,
        "status":   "completed",
    })
}`,
                language: "go",
              },
            ],
          },

          // ==================== PHP ====================
          {
            label: "PHP (build your own wrapper)",
            content: [
              {
                tag_type: "code_with_copy",
                code: `<?php
// app/Support/Sageion.php — add these methods to the class you created above

public static function getCorrelationId($request): ?string
{
    return $request->header('x-correlation-id');
}

public static function dispatchWebhookAsync(string $correlationId, int $status, array $data): void
{
    Http::timeout(5)->post(
        sprintf('https://%s.autobot2.sageion.com/prod/webhook/callback', env('SAGEION_REGION')),
        ['correlation_id' => $correlationId, 'status' => $status, 'data' => $data]
    );
}`,
                language: "php",
              },
              {
                tag_type: "h4",
                text: "Using them in your async handler",
              },
              {
                tag_type: "code_with_copy",
                code: `Route::post('/orders', function (Request $request) {
    $correlationId = Sageion::getCorrelationId($request);

    $order = create_pending_order($request->all());
    attach_correlation_id($order->id, $correlationId);

    return response()->json([
        'success'  => true,
        'order_id' => $order->id,
        'status'   => 'processing',
    ], 202);
});

// Call this from wherever the async work completes.
function deliver_webhook(string $correlationId, int $orderId): void {
    Sageion::dispatchWebhookAsync($correlationId, 200, [
        'success'  => true,
        'order_id' => $orderId,
        'status'   => 'completed',
    ]);
}`,
                language: "php",
              },
            ],
          },

          // ==================== RUBY ====================
          {
            label: "Ruby (build your own wrapper)",
            content: [
              {
                tag_type: "code_with_copy",
                code: `# lib/sageion.rb — add these to the module you created above

def correlation_id(request)
  request.headers['x-correlation-id']
end

def dispatch_webhook_async(correlation_id, status, data)
  Thread.new do
    conn = Faraday.new(url: "https://#{REGION}.autobot2.sageion.com")
    conn.post('/prod/webhook/callback') do |req|
      req.headers['Content-Type'] = 'application/json'
      req.options.timeout = 5
      req.body = { correlation_id: correlation_id, status: status, data: data }.to_json
    end
  rescue => e
    Rails.logger.error("[Sageion] webhook error: #{e.message}")
  end
end`,
                language: "ruby",
              },
              {
                tag_type: "h4",
                text: "Using them in your async handler",
              },
              {
                tag_type: "code_with_copy",
                code: `class OrdersController < ApplicationController
  def create
    correlation_id = Sageion.correlation_id(request)

    order = create_pending_order(params)
    attach_correlation_id(order.id, correlation_id)

    render json: {
      success:  true,
      order_id: order.id,
      status:   'processing'
    }, status: :accepted
  end
end

# Call this from wherever the async work completes.
def deliver_webhook(correlation_id, order_id)
  Sageion.dispatch_webhook_async(correlation_id, 200, {
    success:  true,
    order_id: order_id,
    status:   'completed'
  })
end`,
                language: "ruby",
              },
            ],
          },
        ],
      },

      {
        tag_type: "callout",
        type: "warning",
        title: "Response format is a contract — match it exactly",
        children: [
          {
            tag_type: "ul",
            items: [
              { text: "[[correlation_id]] must be the verbatim string from the request header. Do not reformat, prefix, or wrap it." },
              { text: "[[data]] must be a top-level object, not a string. Wrapping the payload in [[JSON.stringify()]] before posting will break parsing." },
              { text: "The webhook POST should return [[2xx]]. Return [[200]] immediately after your handler acknowledges the callback." },
              { text: "Extra top-level fields beyond [[correlation_id]], [[status]] and [[data]] are ignored." },
            ],
          },
        ],
      },

      // -------- Checklist --------
      {
        tag_type: "callout",
        type: "success",
        title: "✅ Checklist for async APIs",
        children: [
          {
            tag_type: "ol",
            items: [
              { text: "Enable [[Async Callback]] in the Sageion Admin Panel when you register the API. Without this, Sageion sends no [[x-correlation-id]] and your handler will not know a webhook is expected." },
              { text: "Read [[x-correlation-id]] at the very top of the handler, before any branch that could return early." },
              { text: "Persist the [[correlation_id]] alongside the entity the async work is about (order, booking, job). You will need it in a completely different request later." },
              { text: "Respond to the initial request quickly — [[2xx]] with any interim data. Do not wait for the async work inside the original handler." },
              { text: "When the async work finishes, POST to Sageion's webhook callback with the same [[correlation_id]], verbatim, and a [[data]] object containing the final result." },
              { text: "Log the [[correlation_id]] at every step of your pipeline. It is the only way to correlate Sageion's original request with your eventual callback." },
            ],
          },
        ],
      },

      // ============================================================
      // ENVIRONMENT VARIABLES (UPDATED)
      // ============================================================
      {
        tag_type: "h3",
        text: "Environment variables",
        selector_uid: "v2_backend_env_vars",
      },
      {
        tag_type: "p",
        text: "Your backend needs these variables. Never expose [[SAGEION_REST_API_KEY]], [[SAGEION_CLIENT_SECRET]], or [[SAGEION_PUBLIC_KEY_PEM]] to the browser.",
      },
      {
        tag_type: "table",
        headers: ["Variable", "Example", "Used for"],
        rows: [
          ["[[SAGEION_REGION]]", "us", "Regional prefix in the onboarding URL and webhook callback URL."],
          ["[[SAGEION_APP_ID]]", "APP-mw5bc7im-h5xvwm", "Your Sageion app id. Sent as [[app_id]] in onboarding requests. Also used as the first arg to [[onboardUser()]]."],
          ["[[SAGEION_REST_API_KEY]]", "your_rest_api_key", "[[X-API-Key]] header for onboarding. Read automatically by the SDK."],
          ["[[SAGEION_CLIENT_SECRET]]", "your_client_secret", "Verifies client credentials on [[/auth/client-user-token]]."],
          ["[[SAGEION_APP_NAME]]", "your_app_name", "Sent as [[client_id]] on [[/auth/client-user-token]]. Usually the same as your app name."],
          ["[[SAGEION_PUBLIC_KEY_PATH]]", "/etc/sageion/sageion-public.pem", "Path to the PEM public key. Read by [[encryptToken()]]. Recommended for production."],
          ["[[SAGEION_PUBLIC_KEY_PEM]]", "-----BEGIN PUBLIC KEY-----\\n...", "Inline PEM alternative. Used when file mounts aren't practical. When both are set, [[_PATH]] wins."],
        ],
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "⚠️ The public key is required for /client-user-token",
        children: [
          {
            tag_type: "p",
            text: "If your backend exposes [[/client-user-token]] (the optional AI-agent section below), it must encrypt the token it returns using the public key from Token Encryption Key. Set either [[SAGEION_PUBLIC_KEY_PATH]] or [[SAGEION_PUBLIC_KEY_PEM]] — the SDK refuses to encrypt without one, and Sageion refuses to accept a plaintext JWT.",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "💡 Which key source to use?",
        children: [
          {
            tag_type: "ul",
            items: [
              { text: "[[SAGEION_PUBLIC_KEY_PATH]] — recommended for production. Mount the PEM into your container." },
              { text: "[[SAGEION_PUBLIC_KEY_PEM]] — fallback when file mounts aren't practical. Replace literal newlines with [[\\n]]." },
            ],
          },
        ],
      },

      // ============================================================
      // BEST PRACTICES
      // ============================================================
      {
        tag_type: "callout",
        type: "success",
        title: "✅ Base integration checklist",
        children: [
          {
            tag_type: "ol",
            items: [
              { text: "Install [[@sageion/node]] (or drop in your language's wrapper file) and set every [[SAGEION_*]] variable from the table above before your server starts." },
              { text: "Call [[onboardUser()]] immediately after your own user is committed — inside the same signup handler, not in a background job." },
              { text: "Treat onboarding failures as non-fatal to signup, but log them and alert so you notice missing users." },
              { text: "Use the exact same [[uid]] in onboarding and in [[initialize({ uid })]] on the frontend. Always as a string." },
              { text: "For async APIs, call [[getCorrelationId(req)]] at the very top of the handler and persist the id before returning." },
              { text: "Fire [[dispatchWebhookAsync()]] from wherever the async work finishes — never from the original request handler." },
              { text: "Never ship [[SAGEION_CLIENT_SECRET]], [[SAGEION_REST_API_KEY]], or [[SAGEION_PUBLIC_KEY_PEM]] to the frontend." },
            ],
          },
          {
            tag_type: "p",
            text: "Once these seven items are done, your Sageion integration is complete. The next section is optional and can be added at any time.",
          },
        ],
      },

      // ============================================================
      // OPTIONAL: BINDING THE AI AGENT TO A USER
      // ============================================================
      {
        tag_type: "h3",
        text: "Binding the AI agent to a user for authenticated API access (Optional)",
        selector_uid: "v2_agent_integration",
      },
      {
        tag_type: "callout",
        type: "info",
        title: "📌 Optional — add this whenever you need it",
        children: [
          {
            tag_type: "p",
            text: "You do not need this section to get Sageion's chat box running. Your users can chat with the AI agent without it. Set it up only when you want the AI agent to access protected endpoints on your own backend — for example, to fetch or modify a specific user's bookings on their behalf.",
          },
        ],
      },

      {
        tag_type: "callout",
        type: "danger",
        title: "⚠️ Response format is a contract — match it exactly",
        children: [
          {
            tag_type: "p",
            text: "For the AI agent to successfully call your [[/auth/client-user-token]], [[/auth/send-otp]], and [[/auth/verify-otp]] endpoints, your handlers must return responses in the exact shape documented below. The workflow engine reads specific field names from each response — it does not adapt to renames, extra wrappers, or missing fields.",
          },
          {
            tag_type: "ul",
            items: [
              { text: "Do not wrap responses in [[{ data: { ... } }]] or [[{ result: { ... } }]] — return the fields at the top level." },
              { text: "Do not rename fields. [[token]] must be [[token]], [[user_id]] must be [[user_id]], [[scope]] must be [[scope]], [[expires_in]] must be [[expires_in]]." },
              { text: "Do not omit fields. [[expires_in]] and [[scope]] are read by the client to decide token freshness and permitted actions." },
              { text: "Extra fields beyond the ones documented are allowed and will be ignored." },
              { text: "Status codes matter: [[200]] for success, [[401]] for invalid client credentials, [[404]] for unknown user. The workflow engine branches on these codes." },
            ],
          },
        ],
      },

      {
        tag_type: "h4",
        text: "What problem does this solve?",
        selector_uid: "v2_agent_integration_why",
      },
      {
        tag_type: "p",
        text: "By default, the AI agent talks to your backend as a generic client. If your backend exposes user-scoped endpoints (like GET /bookings/me), the agent has no way to prove who it's acting for — so it can't reach those endpoints.",
      },
      {
        tag_type: "p",
        text: "This integration closes that gap. Your backend exchanges its client credentials for a short-lived, scoped token tied to a specific user. The agent then calls your authenticated endpoints as that user.",
      },

      {
        tag_type: "callout",
        type: "info",
        title: "🧩 When you need this",
        children: [
          {
            tag_type: "ul",
            items: [
              { text: "Your AI workflows call your own backend APIs on behalf of a logged-in user" },
              { text: "You want fine-grained scopes (read, create, update, cancel) rather than blanket access" },
              { text: "You want short-lived tokens (1 hour) rather than long-lived user sessions" },
            ],
          },
        ],
      },

      // ============================================================
      // 1. AGENT TOKEN ENDPOINT
      // ============================================================
      {
        tag_type: "h4",
        text: "1. Agent token endpoint ([[/auth/client-user-token]])",
        selector_uid: "v2_agent_token_endpoint",
      },
      {
        tag_type: "p",
        text: "Your backend exposes this endpoint. It accepts the client credentials plus a user id, verifies both, and returns a short-lived JWT the agent can use.",
      },
      {
        tag_type: "code_with_copy",
        code: "POST /auth/client-user-token",
        language: "http",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["[[client_id]]", "string", "Yes", "Your Sageion [[app_id]] (or [[SAGEION_APP_NAME]] — whichever you configured)."],
          ["[[client_secret]]", "string", "Yes", "Your Sageion client secret. Keep this server-side only."],
          ["[[user_id]]", "string", "Yes", "The user's id from your platform. Must be numeric."],
          ["[[session_id]]", "string", "No", "Optional session identifier to correlate token usage."],
        ],
      },
      {
        tag_type: "p",
        text: "Response:",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Description"],
        rows: [
          ["[[token]]", "string", "Short-lived, encrypted JWT the agent uses for subsequent calls."],
          ["[[expires_in]]", "number", "Seconds until expiry — currently [[3600]]."],
          ["[[scope]]", "string[]", "Actions authorized by the token. Currently: [[booking:read]], [[booking:create]], [[booking:update]], [[booking:cancel]]."],
          ["[[user_id]]", "string", "Echo of the [[user_id]] the token was issued for."],
        ],
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "⚠️ The token field must be encrypted",
        children: [
          {
            tag_type: "p",
            text: "The [[token]] value you return must not be a plaintext JWT. Sageion rejects plaintext JWTs — the workflow engine will treat the response as a failure. The token must be hybrid-encrypted with the public key shown under Token Encryption Key and returned as a single string with the format: [[base64(rsa_wrapped_key).base64(nonce).base64(ciphertext||tag)]].",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Response contract — required fields",
        children: [
          {
            tag_type: "table",
            headers: ["Field", "Type", "Required", "Why it matters"],
            rows: [
              ["[[token]]", "string", "Yes", "The encrypted JWT the agent attaches as a Bearer token."],
              ["[[expires_in]]", "number", "Yes", "Seconds until expiry. If omitted, the agent cannot tell when to refresh the token."],
              ["[[scope]]", "string[]", "Yes", "The list of actions this token authorizes."],
              ["[[user_id]]", "string", "Yes", "Echo of the [[user_id]] the token was issued for."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP [[200]]. On failure, return HTTP [[401]] (invalid client credentials) or HTTP [[404]] (user not found) with a plain JSON body.",
          },
        ],
      },

      {
        tag_type: "tabs",
        items: [
          // ==================== NODE.JS ====================
          {
            label: "Node.js (SDK)",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js
const { encryptToken } = require('@sageion/node');

router.post('/client-user-token', [
  body('client_id').notEmpty(),
  body('client_secret').notEmpty(),
  body('user_id').notEmpty().isInt(),
  body('session_id').optional().isString(),
], async (req, res) => {
  const { client_id, client_secret, user_id, session_id } = req.body;

  // 1. Verify client credentials
  if (client_id !== process.env.SAGEION_APP_NAME ||
      client_secret !== process.env.SAGEION_CLIENT_SECRET) {
    return res.status(401).json({ error: 'Invalid client credentials' });
  }

  // 2. Verify the user exists
  const check = await pool.query('SELECT id FROM users WHERE id = $1', [user_id]);
  if (check.rows.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  // 3. Issue a scoped, short-lived JWT with YOUR existing auth utilities
  const scopes = ['booking:read', 'booking:create', 'booking:update', 'booking:cancel'];
  const plaintextToken = generateToken(user_id, 'client@system', 'client', {
    scope: scopes,
    client_id,
    session_id,
  });

  // 4. ⭐ SDK encrypts it — one line, no RSA/AES plumbing
  //    The SDK auto-loads SAGEION_PUBLIC_KEY_PATH (or _PEM) from .env.
  let token;
  try {
    token = encryptToken(plaintextToken);
  } catch (err) {
    console.error('[Sageion] encryption failed:', err);
    return res.status(500).json({ error: 'Token encryption failed' });
  }

  res.json({ token, expires_in: 3600, scope: scopes, user_id });
});`,
                language: "javascript",
              },
              {
                tag_type: "callout",
                type: "info",
                title: "Signature",
                children: [
                  {
                    tag_type: "code_with_copy",
                    code: `encryptToken(plaintextJwt); // returns a single base64 string`,
                    language: "javascript",
                  },
                  {
                    tag_type: "p",
                    text: "One argument. No second parameter. The SDK loads the PEM from [[SAGEION_PUBLIC_KEY_PATH]] (or [[SAGEION_PUBLIC_KEY_PEM]]) automatically at import time. If neither is set, the SDK throws — your server should refuse to start, so you find out at deploy time rather than at the first request.",
                  },
                ],
              },
            ],
          },

          // ==================== PYTHON ====================
          {
            label: "Python (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "Add an [[encrypt_token()]] function to your [[sageion.py]] module. It must produce output in the exact format Sageion expects: [[base64(rsa_wrapped_key).base64(nonce).base64(ciphertext||tag)]].",
              },
              {
                tag_type: "code_with_copy",
                code: `# sageion.py — add to the module you created above
import base64, os, secrets
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

def _load_public_key():
    path = os.environ.get("SAGEION_PUBLIC_KEY_PATH")
    if path:
        with open(path, "rb") as f:
            return serialization.load_pem_public_key(f.read())
    pem = os.environ.get("SAGEION_PUBLIC_KEY_PEM", "").replace("\\\\n", "\\n")
    if not pem:
        raise RuntimeError("SAGEION_PUBLIC_KEY_PATH / _PEM not set")
    return serialization.load_pem_public_key(pem.encode())

def encrypt_token(plaintext_jwt: str) -> str:
    """Hybrid RSA+AES encryption of the JWT. Matches Sageion's format."""
    pub = _load_public_key()

    # 1. Generate a random AES key + nonce
    aes_key = secrets.token_bytes(32)
    nonce   = secrets.token_bytes(12)

    # 2. AES-GCM encrypt the JWT
    ciphertext = AESGCM(aes_key).encrypt(nonce, plaintext_jwt.encode(), None)
    #    (cryptography's AESGCM appends the 16-byte tag to the ciphertext)

    # 3. Wrap the AES key with RSA-OAEP
    wrapped = pub.encrypt(
        aes_key,
        padding.OAEP(
            mgf=padding.MGF1(algorithm=hashes.SHA256()),
            algorithm=hashes.SHA256(),
            label=None,
        ),
    )

    # 4. Return as three dot-separated base64 segments
    b64 = lambda b: base64.b64encode(b).decode()
    return f"{b64(wrapped)}.{b64(nonce)}.{b64(ciphertext)}"`,
                language: "python",
              },
              {
                tag_type: "h4",
                text: "Using it in your handler",
              },
              {
                tag_type: "code_with_copy",
                code: `from sageion import encrypt_token

@router.post("/client-user-token")
async def client_user_token(body: ClientUserTokenBody):
    if body.client_id != os.environ["SAGEION_APP_NAME"] or \\
       body.client_secret != os.environ["SAGEION_CLIENT_SECRET"]:
        raise HTTPException(401, "Invalid client credentials")

    user = await fetch_user(body.user_id)
    if user is None:
        raise HTTPException(404, "User not found")

    scopes = ["booking:read", "booking:create", "booking:update", "booking:cancel"]
    plaintext = issue_agent_token(body.user_id, scopes, body.client_id, body.session_id)
    token = encrypt_token(plaintext)

    return {"token": token, "expires_in": 3600, "scope": scopes, "user_id": str(body.user_id)}`,
                language: "python",
              },
            ],
          },

          // ==================== GO ====================
          {
            label: "Go (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "Go's standard library ships RSA-OAEP and AES-GCM in [[crypto/]]. Add an [[EncryptToken]] function to your [[sageion]] package.",
              },
              {
                tag_type: "code_with_copy",
                code: `// internal/sageion/encrypt.go
package sageion

import (
    "crypto/aes"
    "crypto/cipher"
    "crypto/rand"
    "crypto/rsa"
    "crypto/sha256"
    "crypto/x509"
    "encoding/base64"
    "encoding/pem"
    "fmt"
    "os"
    "strings"
)

func loadPublicKey() (*rsa.PublicKey, error) {
    var raw []byte
    if path := os.Getenv("SAGEION_PUBLIC_KEY_PATH"); path != "" {
        b, err := os.ReadFile(path)
        if err != nil { return nil, err }
        raw = b
    } else {
        pemStr := strings.ReplaceAll(os.Getenv("SAGEION_PUBLIC_KEY_PEM"), "\\\\n", "\\n")
        if pemStr == "" { return nil, fmt.Errorf("SAGEION_PUBLIC_KEY not set") }
        raw = []byte(pemStr)
    }
    block, _ := pem.Decode(raw)
    if block == nil { return nil, fmt.Errorf("invalid PEM") }
    return x509.ParsePKIXPublicKey(block.Bytes)
}

func EncryptToken(plaintext string) (string, error) {
    pubAny, err := loadPublicKey()
    if err != nil { return "", err }
    pub := pubAny.(*rsa.PublicKey)

    // 1. Random AES key + nonce
    aesKey := make([]byte, 32)
    nonce  := make([]byte, 12)
    rand.Read(aesKey); rand.Read(nonce)

    // 2. AES-GCM encrypt
    block, _ := aes.NewCipher(aesKey)
    gcm, _ := cipher.NewGCM(block)
    ct := gcm.Seal(nil, nonce, []byte(plaintext), nil) // appends tag

    // 3. RSA-OAEP wrap the key
    wrapped, err := rsa.EncryptOAEP(sha256.New(), rand.Reader, pub, aesKey, nil)
    if err != nil { return "", err }

    // 4. Concatenate as base64.base64.base64
    enc := base64.StdEncoding.EncodeToString
    return fmt.Sprintf("%s.%s.%s", enc(wrapped), enc(nonce), enc(ct)), nil
}`,
                language: "go",
              },
              {
                tag_type: "h4",
                text: "Using it in your handler",
              },
              {
                tag_type: "code_with_copy",
                code: `func ClientUserTokenHandler(w http.ResponseWriter, r *http.Request) {
    var body clientUserTokenBody
    json.NewDecoder(r.Body).Decode(&body)

    if body.ClientID != os.Getenv("SAGEION_APP_NAME") ||
        body.ClientSecret != os.Getenv("SAGEION_CLIENT_SECRET") {
        http.Error(w, "invalid client credentials", http.StatusUnauthorized); return
    }
    uid, _ := strconv.ParseInt(body.UserID, 10, 64)
    if !userExists(uid) {
        http.Error(w, "user not found", http.StatusNotFound); return
    }

    scopes := []string{"booking:read", "booking:create", "booking:update", "booking:cancel"}
    plaintext := issueAgentToken(uid, scopes, body.ClientID, body.SessionID)
    token, err := sageion.EncryptToken(plaintext)
    if err != nil {
        http.Error(w, "encryption failed", http.StatusInternalServerError); return
    }

    json.NewEncoder(w).Encode(map[string]any{
        "token": token, "expires_in": 3600, "scope": scopes, "user_id": body.UserID,
    })
}`,
                language: "go",
              },
            ],
          },

          // ==================== PHP ====================
          {
            label: "PHP (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "PHP's [[openssl_]] extensions ship RSA-OAEP and AES-256-GCM. Add an [[encryptToken()]] static method to your [[Sageion]] support class.",
              },
              {
                tag_type: "code_with_copy",
                code: `<?php
// app/Support/Sageion.php — add to the class you created above

public static function encryptToken(string $plaintextJwt): string
{
    $path = env('SAGEION_PUBLIC_KEY_PATH');
    $pem  = $path
        ? file_get_contents($path)
        : str_replace('\\\\n', "\\n", env('SAGEION_PUBLIC_KEY_PEM', ''));
    if (!$pem) throw new \\RuntimeException('SAGEION_PUBLIC_KEY not set');

    $pub = openssl_pkey_get_public($pem);
    if (!$pub) throw new \\RuntimeException('Invalid public key');

    // 1. Random AES-256 key + 12-byte nonce
    $aesKey = random_bytes(32);
    $nonce  = random_bytes(12);

    // 2. AES-256-GCM encrypt
    $tag = '';
    $ct  = openssl_encrypt($plaintextJwt, 'aes-256-gcm', $aesKey,
                           OPENSSL_RAW_DATA, $nonce, $tag, '', 16);
    $ct .= $tag; // append the 16-byte auth tag

    // 3. RSA-OAEP wrap the key
    openssl_public_encrypt($aesKey, $wrapped, $pub, OPENSSL_PKCS1_OAEP_PADDING);

    // 4. Return base64.base64.base64
    return base64_encode($wrapped) . '.' . base64_encode($nonce) . '.' . base64_encode($ct);
}`,
                language: "php",
              },
              {
                tag_type: "h4",
                text: "Using it in your handler",
              },
              {
                tag_type: "code_with_copy",
                code: `Route::post('/client-user-token', function (Request $request) {
    if ($request->client_id !== env('SAGEION_APP_NAME') ||
        $request->client_secret !== env('SAGEION_CLIENT_SECRET')) {
        return response()->json(['error' => 'Invalid client credentials'], 401);
    }

    $user = \\App\\Models\\User::find($request->user_id);
    if (!$user) return response()->json(['error' => 'User not found'], 404);

    $scopes = ['booking:read', 'booking:create', 'booking:update', 'booking:cancel'];
    $plaintext = issue_agent_token((int) $user->id, $scopes, $request->client_id, $request->session_id);
    $encrypted = Sageion::encryptToken($plaintext);

    return response()->json([
        'token'      => $encrypted,
        'expires_in' => 3600,
        'scope'      => $scopes,
        'user_id'    => (string) $user->id,
    ]);
});`,
                language: "php",
              },
            ],
          },

          // ==================== RUBY ====================
          {
            label: "Ruby (build your own wrapper)",
            content: [
              {
                tag_type: "p",
                text: "Ruby's OpenSSL standard library provides RSA-OAEP and AES-GCM. Add an [[encrypt_token]] method to your [[Sageion]] module.",
              },
              {
                tag_type: "code_with_copy",
                code: `# lib/sageion.rb — add to the module you created above
require 'openssl'
require 'base64'
require 'securerandom'

def encrypt_token(plaintext_jwt)
  path = ENV['SAGEION_PUBLIC_KEY_PATH']
  pem  = path ? File.read(path) : ENV['SAGEION_PUBLIC_KEY_PEM'].to_s.gsub('\\\\n', "\\n")
  raise 'SAGEION_PUBLIC_KEY not set' if pem.empty?

  rsa = OpenSSL::PKey::RSA.new(pem)

  # 1. Random AES-256 key + 12-byte nonce
  aes_key = SecureRandom.bytes(32)
  nonce   = SecureRandom.bytes(12)

  # 2. AES-256-GCM encrypt
  cipher = OpenSSL::Cipher.new('aes-256-gcm').encrypt
  cipher.key = aes_key
  cipher.iv  = nonce
  cipher.auth_data = ''
  ct  = cipher.update(plaintext_jwt) + cipher.final
  tag = cipher.auth_tag(16)

  # 3. RSA-OAEP wrap the key
  wrapped = rsa.public_encrypt(aes_key, OpenSSL::PKey::RSA::PKCS1_OAEP_PADDING)

  # 4. Return base64.base64.base64
  [wrapped, nonce, ct + tag].map { |b| Base64.strict_encode64(b) }.join('.')
end`,
                language: "ruby",
              },
              {
                tag_type: "h4",
                text: "Using it in your handler",
              },
              {
                tag_type: "code_with_copy",
                code: `def client_user_token
  unless params[:client_id] == ENV['SAGEION_APP_NAME'] &&
         params[:client_secret] == ENV['SAGEION_CLIENT_SECRET']
    return render json: { error: 'Invalid client credentials' }, status: :unauthorized
  end

  user = User.find_by(id: params[:user_id])
  return render json: { error: 'User not found' }, status: :not_found unless user

  scopes = %w[booking:read booking:create booking:update booking:cancel]
  plaintext = issue_agent_token(user.id, scopes, params[:client_id], params[:session_id])
  encrypted = Sageion.encrypt_token(plaintext)

  render json: {
    token:      encrypted,
    expires_in: 3600,
    scope:      scopes,
    user_id:    user.id.to_s
  }
end`,
                language: "ruby",
              },
            ],
          },
        ],
      },

      {
        tag_type: "callout",
        type: "warning",
        title: "Test against the live endpoint before shipping",
        children: [
          {
            tag_type: "p",
            text: "Because Sageion enforces the exact output shape, the fastest way to validate your wrapper's [[encryptToken]] is to point [[/auth/client-user-token]] at a staging user, take the encrypted string your implementation produces, and POST it back to Sageion through the workflow engine. If the agent call succeeds, your implementation is correct.",
          },
        ],
      },

      // ============================================================
      // 2. OTP ENDPOINTS
      // ============================================================
      {
        tag_type: "h4",
        text: "2. OTP endpoints ([[/auth/send-otp]], [[/auth/verify-otp]])",
        selector_uid: "v2_agent_otp",
      },
      {
        tag_type: "p",
        text: "Two endpoints back an OTP flow, useful when an action triggered from chat needs a second factor of confirmation — for example, cancelling a booking.",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "OTP is not your login",
        children: [
          {
            tag_type: "p",
            text: "These endpoints verify one-off actions. They are separate from your main login flow and do not issue a session token.",
          },
        ],
      },

      // -------- /send-otp --------
      {
        tag_type: "h5",
        text: "2a. Send OTP — POST [[/auth/send-otp]]",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["[[email]]", "string", "Yes", "Email address the OTP is associated with."],
        ],
      },
      {
        tag_type: "p",
        text: "Generates a 6-digit OTP, stores it against the email, and expires it after 5 minutes. The reference implementation logs the OTP — plug in your own email provider for delivery. The SDK does not wrap these endpoints because their shape is entirely defined by your own email and storage setup.",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Response contract — required fields",
        children: [
          {
            tag_type: "table",
            headers: ["Field", "Type", "Required", "Why it matters"],
            rows: [
              ["[[success]]", "boolean", "Yes", "The workflow engine checks this to decide whether to proceed to the verification step."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP [[200]]. If sending fails (bad email, provider outage), return HTTP [[400]] or [[500]] — do not return [[200]] with [[success: false]], because the workflow engine treats [[2xx]] as authoritative.",
          },
        ],
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Node.js",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js — send OTP
router.post('/send-otp', [
  body('email').isEmail().normalizeEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  try {
    await pool.query(
      \`INSERT INTO otps (email, otp, expires_at) VALUES ($1, $2, $3)
       ON CONFLICT (email) DO UPDATE SET otp = $2, expires_at = $3\`,
      [email, otp, expiresAt]
    );
    // TODO: send via your email provider
    console.log(\`[OTP] Sent OTP \${otp} to \${email}\`);
    res.json({ success: true, message: 'OTP sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});`,
                language: "javascript",
              },
            ],
          },
          {
            label: "Python",
            content: [
              {
                tag_type: "code_with_copy",
                code: `import random
from datetime import datetime, timedelta
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()


class SendOtpBody(BaseModel):
    email: EmailStr


@router.post("/send-otp")
async def send_otp(body: SendOtpBody):
    otp = f"{random.randint(100000, 999999)}"
    expires_at = datetime.utcnow() + timedelta(minutes=5)

    await upsert_otp(body.email, otp, expires_at)   # your own DB helper

    # TODO: send via your email provider
    print(f"[OTP] Sent OTP {otp} to {body.email}")
    return {"success": True, "message": "OTP sent"}`,
                language: "python",
              },
            ],
          },
          {
            label: "Go",
            content: [
              {
                tag_type: "code_with_copy",
                code: `package auth

import (
    "encoding/json"
    "fmt"
    "math/rand"
    "net/http"
    "time"
)

type sendOtpBody struct {
    Email string \`json:"email"\`
}

func SendOtpHandler(w http.ResponseWriter, r *http.Request) {
    var body sendOtpBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }

    otp := fmt.Sprintf("%06d", rand.Intn(900000)+100000)
    expiresAt := time.Now().Add(5 * time.Minute)

    if err := upsertOTP(body.Email, otp, expiresAt); err != nil {
        http.Error(w, "server error", http.StatusInternalServerError)
        return
    }

    // TODO: send via your email provider
    fmt.Printf("[OTP] Sent OTP %s to %s\\n", otp, body.Email)

    json.NewEncoder(w).Encode(map[string]any{"success": true, "message": "OTP sent"})
}`,
                language: "go",
              },
            ],
          },
          {
            label: "PHP",
            content: [
              {
                tag_type: "code_with_copy",
                code: `<?php
Route::post('/send-otp', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $otp = str_pad((string) random_int(100000, 999999), 6, '0', STR_PAD_LEFT);
    $expiresAt = now()->addMinutes(5);

    DB::table('otps')->updateOrInsert(
        ['email' => $request->email],
        ['otp' => $otp, 'expires_at' => $expiresAt]
    );

    // TODO: send via your email provider
    \\Log::info("[OTP] Sent OTP {$otp} to {$request->email}");

    return response()->json(['success' => true, 'message' => 'OTP sent']);
});`,
                language: "php",
              },
            ],
          },
          {
            label: "Ruby",
            content: [
              {
                tag_type: "code_with_copy",
                code: `def send_otp
  email = params[:email]
  otp = format('%06d', rand(100000..999999))
  expires_at = Time.now + 5 * 60

  Otp.upsert({ email: email, otp: otp, expires_at: expires_at }, unique_by: :email)

  # TODO: send via your email provider
  Rails.logger.info("[OTP] Sent OTP #{otp} to #{email}")

  render json: { success: true, message: 'OTP sent' }
end`,
                language: "ruby",
              },
            ],
          },
        ],
      },

      // -------- /verify-otp --------
      {
        tag_type: "h5",
        text: "2b. Verify OTP — POST [[/auth/verify-otp]]",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["[[email]]", "string", "Yes", "The email the OTP was sent to."],
          ["[[otp]]", "string", "Yes", "The 6-digit code the user entered."],
        ],
      },
      {
        tag_type: "p",
        text: "On success, returns [[{ success: true, user_id }]] so the workflow can continue with the verified identity. The OTP record is deleted after verification.",
      },
      {
        tag_type: "callout",
        type: "warning",
        title: "Response contract — required fields",
        children: [
          {
            tag_type: "table",
            headers: ["Field", "Type", "Required", "Why it matters"],
            rows: [
              ["[[success]]", "boolean", "Yes", "The workflow engine checks this to allow the OTP-gated action to proceed."],
              ["[[user_id]]", "string", "Yes", "The verified user's id. The workflow continues with this identity — omitting it breaks any downstream user-scoped call."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP [[200]]. On verification failure, return HTTP [[400]] with a plain JSON body.",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "user_id must be a string",
        children: [
          {
            tag_type: "p",
            text: "JSON numbers lose leading zeros and can be represented inconsistently across languages (JavaScript numbers, Go int64, Python int). To keep the identity check reliable, always return [[user_id]] as a JSON string — for example \"[[user_id]]\": \"[[12345]]\" — even if your database column is an integer.",
          },
        ],
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Node.js",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js — verify OTP
router.post('/verify-otp', [
  body('email').isEmail().normalizeEmail(),
  body('otp').isLength({ min: 6, max: 6 }).matches(/^\\d+$/),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, otp } = req.body;
  try {
    const result = await pool.query(
      'SELECT otp, expires_at FROM otps WHERE email = $1', [email]
    );
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'No OTP request found' });
    }
    const record = result.rows[0];
    if (record.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
    if (new Date() > new Date(record.expires_at)) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    const userResult = await pool.query(
      'SELECT id FROM users WHERE email = $1', [email]
    );
    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userId = userResult.rows[0].id;

    await pool.query('DELETE FROM otps WHERE email = $1', [email]);

    res.json({
      success: true,
      message: 'OTP verified successfully',
      user_id: userId.toString(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});`,
                language: "javascript",
              },
            ],
          },
          {
            label: "Python",
            content: [
              {
                tag_type: "code_with_copy",
                code: `from datetime import datetime
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()


class VerifyOtpBody(BaseModel):
    email: EmailStr
    otp: str


@router.post("/verify-otp")
async def verify_otp(body: VerifyOtpBody):
    if not body.otp.isdigit() or len(body.otp) != 6:
        raise HTTPException(400, "Invalid OTP format")

    record = await fetch_otp(body.email)
    if record is None:                         raise HTTPException(400, "No OTP request found")
    if record["otp"] != body.otp:              raise HTTPException(400, "Invalid OTP")
    if datetime.utcnow() > record["expires_at"]: raise HTTPException(400, "OTP expired")

    user = await fetch_user_by_email(body.email)
    if user is None:                           raise HTTPException(404, "User not found")

    await delete_otp(body.email)

    return {
        "success": True,
        "message": "OTP verified successfully",
        "user_id": str(user["id"]),
    }`,
                language: "python",
              },
            ],
          },
          {
            label: "Go",
            content: [
              {
                tag_type: "code_with_copy",
                code: `func VerifyOtpHandler(w http.ResponseWriter, r *http.Request) {
    var body verifyOtpBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest); return
    }
    if len(body.Otp) != 6 {
        http.Error(w, "invalid OTP format", http.StatusBadRequest); return
    }

    rec, err := fetchOTP(body.Email)
    if err != nil || rec == nil {
        http.Error(w, "no OTP request found", http.StatusBadRequest); return
    }
    if rec.Otp != body.Otp {
        http.Error(w, "invalid OTP", http.StatusBadRequest); return
    }
    if time.Now().After(rec.ExpiresAt) {
        http.Error(w, "OTP expired", http.StatusBadRequest); return
    }

    user, _ := fetchUserByEmail(body.Email)
    if user == nil {
        http.Error(w, "user not found", http.StatusNotFound); return
    }

    _ = deleteOTP(body.Email)

    json.NewEncoder(w).Encode(map[string]any{
        "success": true,
        "message": "OTP verified successfully",
        "user_id": strconv.FormatInt(user.ID, 10),
    })
}`,
                language: "go",
              },
            ],
          },
          {
            label: "PHP",
            content: [
              {
                tag_type: "code_with_copy",
                code: `Route::post('/verify-otp', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'otp'   => 'required|digits:6',
    ]);

    $record = DB::table('otps')->where('email', $request->email)->first();
    if (!$record)                              return response()->json(['error' => 'No OTP request found'], 400);
    if ($record->otp !== $request->otp)        return response()->json(['error' => 'Invalid OTP'], 400);
    if (now()->greaterThan($record->expires_at)) return response()->json(['error' => 'OTP expired'], 400);

    $user = \\App\\Models\\User::where('email', $request->email)->first();
    if (!$user)                                return response()->json(['error' => 'User not found'], 404);

    DB::table('otps')->where('email', $request->email)->delete();

    return response()->json([
        'success' => true,
        'message' => 'OTP verified successfully',
        'user_id' => (string) $user->id,
    ]);
});`,
                language: "php",
              },
            ],
          },
          {
            label: "Ruby",
            content: [
              {
                tag_type: "code_with_copy",
                code: `def verify_otp
  email = params[:email]
  otp   = params[:otp]

  return render json: { error: 'Invalid OTP format' }, status: :bad_request unless otp&.match?(/^\\d{6}$/)

  record = Otp.find_by(email: email)
  return render json: { error: 'No OTP request found' }, status: :bad_request unless record
  return render json: { error: 'Invalid OTP' },          status: :bad_request unless record.otp == otp
  return render json: { error: 'OTP expired' },          status: :bad_request if Time.now > record.expires_at

  user = User.find_by(email: email)
  return render json: { error: 'User not found' }, status: :not_found unless user

  record.destroy

  render json: {
    success: true,
    message: 'OTP verified successfully',
    user_id: user.id.to_s
  }
end`,
                language: "ruby",
              },
            ],
          },
        ],
      },

      {
        tag_type: "callout",
        type: "success",
        title: "✅ You're done with the base integration",
        children: [
          {
            tag_type: "p",
            text: "Everything above the \"Binding the AI agent to a user\" section is what you need to get Sageion working. Everything from that section onward is additive — nothing there is required for the chat box to work.",
          },
        ],
      },
    ],
  },
];