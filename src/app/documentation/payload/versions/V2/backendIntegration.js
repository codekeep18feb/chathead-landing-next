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
      {
        tag_type: "callout",
        type: "warning",
        title: "Response contract — status codes only",
        children: [
          {
            tag_type: "p",
            text: "The onboarding response body is not read by Sageion. What matters is the status code: 2xx means the user is onboarded. If the user was already onboarded, your handler should still return 2xx — onboarding is idempotent. On failure, return 4xx or 5xx so your own retry logic can detect it. Because the client SDK treats any 2xx as success, do not return 200 on failure.",
          },
        ],
      },

      // ============================================================
      // FRAMEWORK-FIRST TABS
      // ============================================================
      {
        tag_type: "h3",
        text: "Where to call onboarding",
        selector_uid: "v2_backend_onboarding_where",
      },
      {
        tag_type: "p",
        text: "Onboarding must be called exactly once per user, ideally the moment your own signup succeeds. Pick your backend language below, then choose the onboarding method that matches your workflow.",
      },

      {
        tag_type: "tabs",
        items: [
          // ==================== NODE.JS ====================
          {
            label: "Node.js",
            content: [
              {
                tag_type: "p",
                text: "Express + axios. This is the reference implementation used by Sageion's own sample app.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Backend (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Backend onboarding (Node.js)",
                      },
                      {
                        tag_type: "p",
                        text: "Call onboarding inside your /register handler, right after your own user row is created. It's fire-and-forget: your signup succeeds even if onboarding fails.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `// routes/auth.js
const axios = require('axios');

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
                    ],
                  },
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
                                text: "This call must run inside a page where the SDK bundle is already loaded (see Client Side Integration).",
                              },
                              {
                                text: "If your app has a signup → login redirect, call onboarding on the destination page, right before initialize().",
                              },
                              {
                                text: "Onboarding is idempotent per uid — calling it twice for the same user is harmless.",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    label: "Admin Panel",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Manual onboarding via Admin Panel",
                      },
                      {
                        tag_type: "p",
                        text: "Onboarding one user at a time from the Sageion Admin Panel is useful in two scenarios: quick testing during development, and migrating users that already existed in your app before Sageion was integrated.",
                      },
                      {
                        tag_type: "callout",
                        type: "info",
                        title: "Best for legacy users",
                        children: [
                          {
                            tag_type: "p",
                            text: "If your app already has an active user base, you don't need to backfill all of them at once. Onboard users on demand as they log in for the first time after your integration ships. Add a small check in your login handler: if the user hasn't been onboarded yet, call the onboarding API then — the Admin Panel is only needed for users you want to seed manually.",
                          },
                        ],
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
                                text: "Enter the uid — it must exactly match the id you use for that user in your own platform.",
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
            ],
          },

          // ==================== PYTHON ====================
          {
            label: "Python",
            content: [
              {
                tag_type: "p",
                text: "FastAPI + httpx. Same flow as Node.js — call onboarding after your own user record is committed.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Backend (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Backend onboarding (Python)",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `import os
import httpx
from fastapi import APIRouter, HTTPException

router = APIRouter()

SAGEION_REGION = os.environ["SAGEION_REGION"]        # "us" or "in"
SAGEION_APP_NAME = os.environ["SAGEION_APP_NAME"]
SAGEION_REST_API_KEY = os.environ["SAGEION_REST_API_KEY"]


async def onboard_user(user_id: int) -> None:
    """Fire-and-forget onboarding. Never raises — logs and returns."""
    url = f"https://{SAGEION_REGION}.userauth2.tezkit.com/dev/onboarding"
    payload = {"uid": str(user_id), "app_name": SAGEION_APP_NAME}
    headers = {
        "X-API-Key": SAGEION_REST_API_KEY,
        "Content-Type": "application/json",
    }
    try:
        async with httpx.AsyncClient(timeout=5.0) as client:
            await client.post(url, json=payload, headers=headers)
    except Exception as exc:
        print(f"Sageion onboarding error for user {user_id}: {exc}")


@router.post("/register")
async def register(body: RegisterBody):
    # 1. Create the user in your own DB
    user = await create_user(body)          # your own function

    # 2. Onboard the user into Sageion (fire-and-forget)
    await onboard_user(user.id)

    # 3. Return your own token — Sageion does not issue auth tokens
    token = generate_token(user.id, user.email, user.role)
    return {"token": token, "user": user}`,
                        language: "python",
                      },
                    ],
                  },
                  {
                    label: "Frontend",
                    content: [
                      {
                        tag_type: "p",
                        text: "Framework-agnostic — the SDK call is the same regardless of your backend language.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Admin Panel",
                    content: [
                      {
                        tag_type: "p",
                        text: "See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough. It's identical regardless of your backend language.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== GO ====================
          {
            label: "Go",
            content: [
              {
                tag_type: "p",
                text: "net/http + encoding/json. Same flow as Node.js — call onboarding after your own user record is committed.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Backend (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Backend onboarding (Go)",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `package auth

import (
    "bytes"
    "context"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func onboardUser(ctx context.Context, userID int64) {
    url := fmt.Sprintf(
        "https://%s.userauth2.tezkit.com/dev/onboarding",
        os.Getenv("SAGEION_REGION"),
    )
    body, _ := json.Marshal(map[string]string{
        "uid":      fmt.Sprintf("%d", userID),
        "app_name": os.Getenv("SAGEION_APP_NAME"),
    })

    req, _ := http.NewRequestWithContext(ctx, "POST", url, bytes.NewReader(body))
    req.Header.Set("X-API-Key", os.Getenv("SAGEION_REST_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil {
        // Fire-and-forget: log and return. Registration still succeeds.
        fmt.Printf("Sageion onboarding error for user %d: %v\\n", userID, err)
        return
    }
    defer resp.Body.Close()
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Create the user in your own DB
    user := createUser(r)          // your own function

    // 2. Onboard the user into Sageion (fire-and-forget)
    onboardUser(r.Context(), user.ID)

    // 3. Return your own token — Sageion does not issue auth tokens
    token := generateToken(user.ID, user.Email, user.Role)
    json.NewEncoder(w).Encode(map[string]any{"token": token, "user": user})
}`,
                        language: "go",
                      },
                    ],
                  },
                  {
                    label: "Frontend",
                    content: [
                      {
                        tag_type: "p",
                        text: "Framework-agnostic — the SDK call is the same regardless of your backend language.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Admin Panel",
                    content: [
                      {
                        tag_type: "p",
                        text: "See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== PHP ====================
          {
            label: "PHP",
            content: [
              {
                tag_type: "p",
                text: "Laravel + Guzzle. Same flow as Node.js — call onboarding after your own user record is committed.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Backend (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Backend onboarding (PHP)",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `<?php
// app/Http/Controllers/AuthController.php

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

public function register(Request $request)
{
    // 1. Create the user in your own DB
    $user = User::create([
        'email'     => $request->email,
        'password'  => Hash::make($request->password),
        'full_name' => $request->full_name,
    ]);

    // 2. Onboard the user into Sageion (fire-and-forget)
    try {
        $url = sprintf(
            'https://%s.userauth2.tezkit.com/dev/onboarding',
            env('SAGEION_REGION')
        );
        Http::withHeaders([
            'X-API-Key'    => env('SAGEION_REST_API_KEY'),
            'Content-Type' => 'application/json',
        ])->timeout(5)->post($url, [
            'uid'      => (string) $user->id,
            'app_name' => env('SAGEION_APP_NAME'),
        ]);
    } catch (\\Throwable $e) {
        // Do NOT fail registration — the user can still log in.
        \\Log::error('Sageion onboarding error: ' . $e->getMessage());
    }

    // 3. Return your own token — Sageion does not issue auth tokens
    $token = $user->createToken('auth')->plainTextToken;
    return response()->json(['token' => $token, 'user' => $user], 201);
}`,
                        language: "php",
                      },
                    ],
                  },
                  {
                    label: "Frontend",
                    content: [
                      {
                        tag_type: "p",
                        text: "Framework-agnostic — the SDK call is the same regardless of your backend language.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Admin Panel",
                    content: [
                      {
                        tag_type: "p",
                        text: "See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough.",
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // ==================== RUBY ====================
          {
            label: "Ruby",
            content: [
              {
                tag_type: "p",
                text: "Rails + Faraday (or Net::HTTP). Same flow as Node.js — call onboarding after your own user record is committed.",
              },
              {
                tag_type: "tabs",
                items: [
                  {
                    label: "Backend (Recommended)",
                    content: [
                      {
                        tag_type: "h4",
                        text: "Backend onboarding (Ruby)",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `# app/controllers/auth_controller.rb
require 'faraday'
require 'json'

class AuthController < ApplicationController
  def register
    # 1. Create the user in your own DB
    user = User.create!(
      email:     params[:email],
      password:  params[:password],
      full_name: params[:full_name]
    )

    # 2. Onboard the user into Sageion (fire-and-forget)
    begin
      url = "https://#{ENV['SAGEION_REGION']}.userauth2.tezkit.com/dev/onboarding"
      conn = Faraday.new(url: url) do |f|
        f.options.timeout = 5
      end
      conn.post do |req|
        req.headers['X-API-Key']      = ENV['SAGEION_REST_API_KEY']
        req.headers['Content-Type']   = 'application/json'
        req.body = {
          uid:      user.id.to_s,
          app_name: ENV['SAGEION_APP_NAME']
        }.to_json
      end
    rescue => e
      # Do NOT fail registration — the user can still log in.
      Rails.logger.error("Sageion onboarding error: #{e.message}")
    end

    # 3. Return your own token — Sageion does not issue auth tokens
    token = generate_token(user)
    render json: { token: token, user: user }, status: :created
  end
end`,
                        language: "ruby",
                      },
                    ],
                  },
                  {
                    label: "Frontend",
                    content: [
                      {
                        tag_type: "p",
                        text: "Framework-agnostic — the SDK call is the same regardless of your backend language.",
                      },
                      {
                        tag_type: "code_with_copy",
                        code: `await window.magicchat_io.onboarding(
  { uid: "UNIQUE_USER_ID_FROM_YOUR_PLATFORM" },
  { app_name: "your_application_name" }
);`,
                        language: "javascript",
                      },
                    ],
                  },
                  {
                    label: "Admin Panel",
                    content: [
                      {
                        tag_type: "p",
                        text: "See the Node.js → Admin Panel tab for the full manual-onboarding walkthrough.",
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
      // ASYNC APIs: X-CORRELATION-ID + WEBHOOK
      // ============================================================
      {
        tag_type: "h3",
        text: "APIs the AI agent can call — sync vs. async",
        selector_uid: "v2_backend_async_correlation",
      },
      {
        tag_type: "p",
        text: "Every API you register with Sageion falls into one of two categories, depending on how quickly it can produce its final result. Pick the one that matches the nature of the endpoint — most APIs are synchronous, and you only reach for async when the final result genuinely cannot be produced within the request lifecycle.",
      },

      // -------- At-a-glance comparison --------
      {
        tag_type: "table",
        headers: ["", "Synchronous (default)", "Asynchronous (Async Callback enabled)"],
        rows: [
          [
            "When to use",
            "The endpoint can compute and return the final result within a few seconds of the request.",
            "The endpoint cannot produce the final result immediately — it depends on a payment gateway, an approval, a background job, or an external event.",
          ],
          [
            "How the agent gets the result",
            "Reads it from the HTTP response body.",
            "Waits for your backend to POST the final result to Sageion's webhook callback URL.",
          ],
          [
            "What your handler does",
            "Does the work, returns the final result.",
            "Acknowledges the request, kicks off the work, returns early — then POSTs the final result via webhook when it's ready.",
          ],
          [
            "What Sageion sends",
            "Nothing extra.",
            "An x-correlation-id header on the initial request.",
          ],
          [
            "Where the config lives",
            "Nothing to configure — this is the default.",
            "Enable Async Callback when registering the API in the Sageion Admin Panel.",
          ],
        ],
      },

      {
        tag_type: "callout",
        type: "info",
        title: "One endpoint, one nature",
        children: [
          {
            tag_type: "p",
            text: "An endpoint is either synchronous or asynchronous — it does not switch between the two at runtime. The example code below uses an if (correlation_id) branch purely to illustrate both paths on one screen; a real integration picks one and sticks with it. If your API is synchronous, you never read x-correlation-id. If it's asynchronous, Sageion always sends it (because you enabled Async Callback for that API) and your handler always uses it.",
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
        text: "You write your handler exactly as you would for any normal API. Sageion calls your endpoint, waits for the response, and uses the body as the final result. No special headers to read, no webhook to post — nothing.",
      },
      {
        tag_type: "code_with_copy",
        code: `// Example: a bookings endpoint that confirms the reservation inline.
// This is what a synchronous API looks like — no correlation_id, no webhook.

router.post('/bookings', [...validators], async (req, res) => {
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // Do the work and return the final result. That's it.
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
            text: "If your API is synchronous, that's all you need to know. Everything that follows in this section is for the async case only.",
          },
        ],
      },

      // -------- Path B: asynchronous --------
      {
        tag_type: "h4",
        text: "Path B — Asynchronous API (Async Callback enabled)",
        selector_uid: "v2_backend_async_path",
      },
      {
        tag_type: "p",
        text: "You register the API in the Sageion Admin Panel with Async Callback enabled. From then on, Sageion attaches an x-correlation-id header to every request to that endpoint and treats your initial response as an acknowledgment, not as the final answer.",
      },

      // -------- When to use async --------
      {
        tag_type: "callout",
        type: "info",
        title: "🔄 When async is the right choice",
        children: [
          {
            tag_type: "ul",
            items: [
              {
                text: "The action depends on a payment gateway — the user pays, then the gateway confirms minutes later.",
              },
              {
                text: "The action depends on a human approval that happens out-of-band (a manager clicks approve).",
              },
              {
                text: "The action kicks off a multi-step workflow in your own system whose completion is signalled by a separate event.",
              },
              {
                text: "The action needs to send the user an email or SMS and wait for a response before it can produce a final result.",
              },
            ],
          },
          {
            tag_type: "p",
            text: "If none of these apply — if your backend can compute the final result by the time the request handler returns — use the synchronous path instead. Async adds complexity, and there's no reason to reach for it prematurely.",
          },
        ],
      },

      // -------- The flow --------
      {
        tag_type: "h5",
        text: "How the async flow works",
      },
      {
        tag_type: "steps",
        items: [
          {
            title: "Sageion sends the request with x-correlation-id",
            content: [
              {
                tag_type: "p",
                text: "Because the API is configured with Async Callback enabled, Sageion attaches an x-correlation-id header to every call. This header is the only thing that distinguishes an async-configured call from a synchronous one.",
              },
            ],
          },
          {
            title: "Your handler acknowledges the request and kicks off the work",
            content: [
              {
                tag_type: "p",
                text: "Read req.headers['x-correlation-id'], start whatever needs to happen (send a payment link, queue a job, notify another service), and respond immediately — usually with HTTP 202 and any interim data the user should see. Do not wait for the async work to complete inside the handler.",
              },
            ],
          },
          {
            title: "Later — when the work completes — your backend POSTs to Sageion's webhook",
            content: [
              {
                tag_type: "p",
                text: "Once the async operation finishes (payment confirmed, job complete, external system replied), your backend — or the external service's own webhook handler in your code — POSTs a JSON body containing the same correlation_id and the final data to Sageion's webhook callback URL.",
              },
            ],
          },
          {
            title: "Sageion matches the correlation_id and resumes the workflow",
            content: [
              {
                tag_type: "p",
                text: "The workflow engine pairs the callback with the original request, resumes execution, and passes the data you sent into the next step.",
              },
            ],
          },
        ],
      },

      // -------- Header reference --------
      {
        tag_type: "h5",
        text: "Request header: x-correlation-id",
      },
      {
        tag_type: "table",
        headers: ["Header", "Type", "Description"],
        rows: [
          ["x-correlation-id", "string", "Sent by Sageion on every request to an API configured with Async Callback. Your handler reads it and echoes it back in the webhook payload so the callback can be matched to the original request."],
        ],
      },

      // -------- Webhook contract --------
      {
        tag_type: "h5",
        text: "Webhook callback contract",
      },
      {
        tag_type: "code_with_copy",
        code: "POST https://{region}.autobot2.tezkit.com/dev/webhook/callback",
        language: "http",
      },
      {
        tag_type: "p",
        text: "This is Sageion's webhook receiver. Your backend posts here when the async operation completes. The URL and environment suffix vary by region — use the one configured in your Admin Panel's webhook settings.",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["correlation_id", "string", "Yes", "The exact x-correlation-id value Sageion sent in the original request. Used to match the callback to the workflow step."],
          ["data", "object", "Yes", "The final payload the workflow engine should receive as the API response. Any JSON shape is allowed — Sageion passes it through to the next step."],
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
              {
                text: "correlation_id must be the verbatim string from the request header. Do not reformat, prefix, or wrap it.",
              },
              {
                text: "data must be a top-level object, not a string. Wrapping the payload in JSON.stringify() before posting will break parsing.",
              },
              {
                text: "The webhook POST should return 2xx. Sageion retries on non-2xx responses, so return 200 immediately after your handler acknowledges the callback — do not delay on downstream work.",
              },
              {
                text: "Extra top-level fields beyond correlation_id and data are ignored.",
              },
            ],
          },
        ],
      },

      // -------- Worked example: booking --------
      {
        tag_type: "h5",
        text: "Worked example — a booking that waits on payment",
      },
      {
        tag_type: "p",
        text: "Consider a hotel booking API. When the user asks to book a room, the API does not confirm the booking immediately — instead, it emails a payment link. The booking only becomes confirmed once the payment gateway reports success, which happens minutes later. This is the textbook case for async: the final result genuinely cannot be produced within the request lifecycle.",
      },
      {
        tag_type: "p",
        text: "Below are the same booking endpoint written both ways, so you can see exactly where the async pattern diverges. The synchronous version confirms the booking inline and returns. The async version acknowledges the request, sends the payment link, and produces the final result later via the payment provider's webhook handler.",
      },

      {
        tag_type: "tabs",
        items: [
          {
            label: "Synchronous version",
            content: [
              {
                tag_type: "p",
                text: "The endpoint does everything up front and returns the confirmed booking. Sageion reads the result from the HTTP response body. No x-correlation-id is present, no webhook is involved.",
              },
              {
                tag_type: "code_with_copy",
                code: `// routes/bookings.js — SYNC booking (confirms immediately)
router.post('/', [...validators], async (req, res) => {
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // Do all the work now and return the final result.
  const booking = await createBooking(user_id, room_id, check_in, check_out);

  res.status(201).json({
    success: true,
    booking_id: booking.id,
    status: 'confirmed',
  });
});`,
                language: "javascript",
              },
            ],
          },
          {
            label: "Asynchronous version",
            content: [
              {
                tag_type: "p",
                text: "The endpoint creates a pending booking, sends the user a payment link, and returns immediately. The final confirmation comes later — driven by the payment gateway's webhook hitting a separate handler in your backend, which then POSTs to Sageion's webhook callback.",
              },
              {
                tag_type: "code_with_copy",
                code: `// routes/bookings.js — ASYNC booking (waits on payment)
const axios = require('axios');

router.post('/', [...validators], async (req, res) => {
  const correlation_id = req.headers['x-correlation-id']; // always present (Async Callback is on)
  const { room_id, check_in, check_out } = req.body;
  const user_id = req.user.userId;

  // 1. Create the booking in a pending state.
  const booking = await createPendingBooking(user_id, room_id, check_in, check_out);

  // 2. Send the user a payment link.
  const paymentLink = await createPaymentLink(booking.id, booking.total_price);

  // 3. Remember the correlation_id so the payment webhook can use it later.
  //    (store it against the booking in your DB)
  await attachCorrelationId(booking.id, correlation_id);

  // 4. Acknowledge the request and return immediately.
  res.status(202).json({
    success: true,
    booking_id: booking.id,
    status: 'pending_payment',
    payment_link: paymentLink,
  });
});


// A SEPARATE handler — the payment gateway calls this when payment succeeds.
// It looks up the original correlation_id, then posts the final result to Sageion.
router.post('/payments/webhook', async (req, res) => {
  const { booking_id, status } = req.body; // shape depends on your payment provider

  if (status !== 'success') {
    return res.json({ ok: true }); // acknowledge and move on
  }

  const booking = await confirmBooking(booking_id); // update your DB
  const correlation_id = await getCorrelationIdForBooking(booking_id);

  if (correlation_id) {
    await axios.post(
      \`https://\${process.env.SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback\`,
      {
        correlation_id: correlation_id,
        data: {
          success: true,
          booking_id: booking.id,
          status: 'confirmed',
        },
      }
    );
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
                    text: "Notice the Sageion webhook callback is posted from the payment provider's webhook handler — not from the original POST /bookings handler. That's the whole point of the async pattern: the request Sageion initiated finishes fast, and the final result arrives through a different code path entirely.",
                  },
                ],
              },
            ],
          },
        ],
      },

      // -------- Language tabs: async handler shapes --------
      {
        tag_type: "h5",
        text: "Async handler — reference implementations",
      },
      {
        tag_type: "p",
        text: "The concept is identical across languages: read x-correlation-id, return early, then POST the final result to Sageion's webhook callback when the async work finishes. Below are minimal reference implementations.",
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Node.js",
            content: [
              {
                tag_type: "code_with_copy",
                code: `// routes/orders.js — async order submission
const axios = require('axios');

router.post('/orders', async (req, res) => {
  const correlation_id = req.headers['x-correlation-id'];

  // Kick off the long-running work (queue a job, call an external system).
  const order = await createPendingOrder(req.body);
  await attachCorrelationId(order.id, correlation_id);

  // Return early.
  res.status(202).json({ success: true, order_id: order.id, status: 'processing' });

  // ... elsewhere, when the work finishes:
  // await axios.post(
  //   \`https://\${process.env.SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback\`,
  //   {
  //     correlation_id,
  //     data: { success: true, order_id: order.id, status: 'completed' },
  //   }
  // );
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
                code: `import os
import httpx
from fastapi import APIRouter, Request, Response

router = APIRouter()

SAGEION_REGION = os.environ["SAGEION_REGION"]


@router.post("/orders")
async def create_order(request: Request):
    correlation_id = request.headers.get("x-correlation-id")

    body = await request.json()
    order = await create_pending_order(body)     # your own function
    await attach_correlation_id(order.id, correlation_id)

    # Return early — do not wait for the async work to finish.
    return Response(
        content=f'{{"success":true,"order_id":"{order.id}","status":"processing"}}',
        status_code=202,
        media_type="application/json",
    )


async def deliver_webhook(correlation_id: str, order_id: int):
    """Call this from wherever the async work completes."""
    url = f"https://{SAGEION_REGION}.autobot2.tezkit.com/dev/webhook/callback"
    async with httpx.AsyncClient(timeout=5.0) as client:
        await client.post(url, json={
            "correlation_id": correlation_id,
            "data": {
                "success": True,
                "order_id": order_id,
                "status": "completed",
            },
        })`,
                language: "python",
              },
            ],
          },
          {
            label: "Go",
            content: [
              {
                tag_type: "code_with_copy",
                code: `package orders

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func CreateOrderHandler(w http.ResponseWriter, r *http.Request) {
    correlationID := r.Header.Get("x-correlation-id")

    order := createPendingOrder(r)                 // your own function
    attachCorrelationID(order.ID, correlationID)   // your own function

    // Return early.
    w.WriteHeader(http.StatusAccepted)
    json.NewEncoder(w).Encode(map[string]any{
        "success":  true,
        "order_id": order.ID,
        "status":   "processing",
    })
}

// Call this from wherever the async work completes.
func DeliverWebhook(correlationID string, orderID int64) error {
    url := fmt.Sprintf(
        "https://%s.autobot2.tezkit.com/dev/webhook/callback",
        os.Getenv("SAGEION_REGION"),
    )
    payload, _ := json.Marshal(map[string]any{
        "correlation_id": correlationID,
        "data": map[string]any{
            "success":  true,
            "order_id": orderID,
            "status":   "completed",
        },
    })
    req, _ := http.NewRequest("POST", url, bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil { return err }
    defer resp.Body.Close()
    return nil
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
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;
use Illuminate\\Support\\Facades\\Route;

Route::post('/orders', function (Request $request) {
    $correlationId = $request->header('x-correlation-id');

    $order = create_pending_order($request->all());   // your own function
    attach_correlation_id($order->id, $correlationId);

    // Return early.
    return response()->json([
        'success'  => true,
        'order_id' => $order->id,
        'status'   => 'processing',
    ], 202);
});

// Call this from wherever the async work completes.
function deliver_webhook(string $correlationId, int $orderId): void {
    Http::timeout(5)->post(
        sprintf('https://%s.autobot2.tezkit.com/dev/webhook/callback',
                env('SAGEION_REGION')),
        [
            'correlation_id' => $correlationId,
            'data' => [
                'success'  => true,
                'order_id' => $orderId,
                'status'   => 'completed',
            ],
        ]
    );
}`,
                language: "php",
              },
            ],
          },
          {
            label: "Ruby",
            content: [
              {
                tag_type: "code_with_copy",
                code: `# config/routes.rb
post '/orders', to: 'orders#create'

# app/controllers/orders_controller.rb
class OrdersController < ApplicationController
  def create
    correlation_id = request.headers['x-correlation-id']

    order = create_pending_order(params)          # your own method
    attach_correlation_id(order.id, correlation_id)

    # Return early.
    render json: {
      success:  true,
      order_id: order.id,
      status:   'processing'
    }, status: :accepted
  end
end

# Call this from wherever the async work completes.
def deliver_webhook(correlation_id, order_id)
  conn = Faraday.new(url: "https://#{ENV['SAGEION_REGION']}.autobot2.tezkit.com")
  conn.post('/dev/webhook/callback') do |req|
    req.headers['Content-Type'] = 'application/json'
    req.body = {
      correlation_id: correlation_id,
      data: {
        success:  true,
        order_id: order_id,
        status:   'completed'
      }
    }.to_json
  end
end`,
                language: "ruby",
              },
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
              {
                text: "Enable Async Callback in the Sageion Admin Panel when you register the API. Without this, Sageion sends no x-correlation-id and your handler will not know a webhook is expected.",
              },
              {
                text: "Read x-correlation-id at the very top of the handler, before any branch that could return early.",
              },
              {
                text: "Persist the correlation_id alongside the entity the async work is about (order, booking, job). You will need it in a completely different request later.",
              },
              {
                text: "Respond to the initial request quickly — 2xx with any interim data. Do not wait for the async work inside the original handler.",
              },
              {
                text: "When the async work finishes, POST to Sageion's webhook callback with the same correlation_id, verbatim, and a data object containing the final result.",
              },
              {
                text: "Log the correlation_id at every step of your pipeline. It is the only way to correlate Sageion's original request with your eventual callback.",
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
        tag_type: "p",
        text: "Your backend needs these variables. Add them to your server's environment — never expose SAGEION_REST_API_KEY or SAGEION_CLIENT_SECRET to the browser.",
      },
      {
        tag_type: "table",
        headers: ["Variable", "Example", "Used for"],
        rows: [
          ["SAGEION_REGION", "us", "Regional prefix in the onboarding URL and webhook callback URL."],
          ["SAGEION_APP_NAME", "ai_chatbot_system", "Identifies your Sageion app in onboarding and agent-token requests."],
          ["SAGEION_REST_API_KEY", "your_rest_api_key", "X-API-Key header for onboarding."],
          ["SAGEION_CLIENT_SECRET", "your_client_secret", "Verifies client credentials on /client-user-token (only needed if you enable the optional AI agent section below). Never expose to the browser."],
          ["WEBHOOK_CALLBACK_URL", "https://us.autobot2.tezkit.com/dev/webhook/callback", "Where your backend posts async results for APIs configured with webhook enabled."],
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
                text: "Never ship SAGEION_CLIENT_SECRET or SAGEION_REST_API_KEY to the frontend. If you use the frontend onboarding method, use a different token scoped to onboarding only.",
              },
              {
                text: "For bulk onboarding of existing users, contact Sageion Support before calling the API in a loop.",
              },
            ],
          },
          {
            tag_type: "p",
            text: "Once all six items above are done, your Sageion integration is complete. The next section is optional and can be added at any time.",
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
          {
            tag_type: "p",
            text: "You can do this during your initial integration from day one, or add it later when the need arises — nothing on this page conflicts with anything above.",
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
            text: "For the AI agent to successfully call your /auth/client-user-token, /auth/send-otp, and /auth/verify-otp endpoints, your handlers must return responses in the exact shape documented below. The workflow engine reads specific field names from each response — it does not adapt to renames, extra wrappers, or missing fields.",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Do not wrap responses in { data: { ... } } or { result: { ... } } — return the fields at the top level.",
              },
              {
                text: "Do not rename fields. token must be token, user_id must be user_id, scope must be scope, expires_in must be expires_in.",
              },
              {
                text: "Do not omit fields. expires_in and scope are read by the client to decide token freshness and permitted actions.",
              },
              {
                text: "Extra fields beyond the ones documented are allowed and will be ignored.",
              },
              {
                text: "Status codes matter: 200 for success, 401 for invalid client credentials, 404 for unknown user. The workflow engine branches on these codes.",
              },
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
              {
                text: "Your AI workflows call your own backend APIs on behalf of a logged-in user",
              },
              {
                text: "You want fine-grained scopes (read, create, update, cancel) rather than blanket access",
              },
              {
                text: "You want short-lived tokens (1 hour) rather than long-lived user sessions",
              },
            ],
          },
        ],
      },

      // ============================================================
      // 1. AGENT TOKEN ENDPOINT
      // ============================================================
      {
        tag_type: "h4",
        text: "1. Agent token endpoint (/auth/client-user-token)",
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
          ["client_id", "string", "Yes", "Your Sageion app_name."],
          ["client_secret", "string", "Yes", "Your Sageion client secret. Keep this server-side only."],
          ["user_id", "string", "Yes", "The user's id from your platform. Must be numeric."],
          ["session_id", "string", "No", "Optional session identifier to correlate token usage."],
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
          ["token", "string", "Short-lived JWT the agent uses for subsequent calls."],
          ["expires_in", "number", "Seconds until expiry — currently 3600."],
          ["scope", "string[]", "Actions authorized by the token. Currently: booking:read, booking:create, booking:update, booking:cancel."],
          ["user_id", "string", "Echo of the user_id the token was issued for."],
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
              ["token", "string", "Yes", "The JWT the agent attaches as a Bearer token. Missing or null → the agent cannot make authenticated calls."],
              ["expires_in", "number", "Yes", "Seconds until expiry. If omitted, the agent cannot tell when to refresh the token."],
              ["scope", "string[]", "Yes", "The list of actions this token authorizes. The agent checks this list before attempting operations."],
              ["user_id", "string", "Yes", "Echo of the user_id the token was issued for. The agent uses it to verify the token is bound to the right user."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP 200. On failure, return HTTP 401 (invalid client credentials) or HTTP 404 (user not found) with a plain JSON body — the agent treats non-2xx responses as refusals, not as retryable errors.",
          },
        ],
      },

      {
        tag_type: "h5",
        text: "Reference implementation by language",
      },
      {
        tag_type: "tabs",
        items: [
          {
            label: "Node.js",
            content: [
              {
                tag_type: "h4",
                text: "Backend handler — Node.js",
              },
              {
                tag_type: "code_with_copy",
                code: `// routes/auth.js

const SAGEION_APP_NAME = process.env.SAGEION_APP_NAME;
const SAGEION_CLIENT_SECRET = process.env.SAGEION_CLIENT_SECRET;

router.post('/client-user-token', [
  body('client_id').notEmpty(),
  body('client_secret').notEmpty(),
  body('user_id').notEmpty().isInt(),
  body('session_id').optional().isString(),
], async (req, res) => {
  const { client_id, client_secret, user_id, session_id } = req.body;

  // 1. Verify client credentials
  if (client_id !== SAGEION_APP_NAME || client_secret !== SAGEION_CLIENT_SECRET) {
    return res.status(401).json({ error: 'Invalid client credentials' });
  }

  // 2. Verify the user exists
  const check = await pool.query('SELECT id FROM users WHERE id = $1', [user_id]);
  if (check.rows.length === 0) {
    return res.status(404).json({ error: 'User not found' });
  }

  // 3. Issue a scoped, short-lived token
  const scopes = [
    'booking:read', 'booking:create', 'booking:update', 'booking:cancel',
  ];
  const token = generateToken(user_id, 'client@system', 'client', {
    scope: scopes,
    client_id,
    session_id,
  });

  res.json({ token, expires_in: 3600, scope: scopes, user_id });
});`,
                language: "javascript",
              },
              {
                tag_type: "h5",
                text: "Calling it from your agent workflow (Node.js)",
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
            ],
          },
          {
            label: "Python",
            content: [
              {
                tag_type: "h4",
                text: "Backend handler — Python (FastAPI)",
              },
              {
                tag_type: "code_with_copy",
                code: `import os
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

SAGEION_APP_NAME = os.environ["SAGEION_APP_NAME"]
SAGEION_CLIENT_SECRET = os.environ["SAGEION_CLIENT_SECRET"]


class ClientUserTokenBody(BaseModel):
    client_id: str
    client_secret: str
    user_id: int
    session_id: str | None = None


@router.post("/client-user-token")
async def client_user_token(body: ClientUserTokenBody):
    # 1. Verify client credentials
    if body.client_id != SAGEION_APP_NAME or body.client_secret != SAGEION_CLIENT_SECRET:
        raise HTTPException(status_code=401, detail="Invalid client credentials")

    # 2. Verify the user exists
    user = await fetch_user(body.user_id)   # your own DB helper
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # 3. Issue a scoped, short-lived token
    scopes = ["booking:read", "booking:create", "booking:update", "booking:cancel"]
    token = issue_agent_token(             # your own token issuer
        user_id=body.user_id,
        scopes=scopes,
        client_id=body.client_id,
        session_id=body.session_id,
    )
    return {
        "token": token,
        "expires_in": 3600,
        "scope": scopes,
        "user_id": str(body.user_id),
    }`,
                language: "python",
              },
              {
                tag_type: "h5",
                text: "Calling it from your agent workflow (Python)",
              },
              {
                tag_type: "code_with_copy",
                code: `import os
import httpx

async def get_agent_token(user_id: int) -> str:
    async with httpx.AsyncClient(timeout=5.0) as client:
        r = await client.post(
            f"{os.environ['API_BASE_URL']}/auth/client-user-token",
            json={
                "client_id": os.environ["SAGEION_APP_NAME"],
                "client_secret": os.environ["SAGEION_CLIENT_SECRET"],
                "user_id": str(user_id),
            },
        )
        r.raise_for_status()
        return r.json()["token"]`,
                language: "python",
              },
            ],
          },
          {
            label: "Go",
            content: [
              {
                tag_type: "h4",
                text: "Backend handler — Go",
              },
              {
                tag_type: "code_with_copy",
                code: `package auth

import (
    "encoding/json"
    "net/http"
    "os"
    "strconv"
)

type clientUserTokenBody struct {
    ClientID     string \`json:"client_id"\`
    ClientSecret string \`json:"client_secret"\`
    UserID       string \`json:"user_id"\`
    SessionID    string \`json:"session_id,omitempty"\`
}

func ClientUserTokenHandler(w http.ResponseWriter, r *http.Request) {
    var body clientUserTokenBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }

    // 1. Verify client credentials
    if body.ClientID != os.Getenv("SAGEION_APP_NAME") ||
        body.ClientSecret != os.Getenv("SAGEION_CLIENT_SECRET") {
        http.Error(w, "invalid client credentials", http.StatusUnauthorized)
        return
    }

    // 2. Verify the user exists
    uid, err := strconv.ParseInt(body.UserID, 10, 64)
    if err != nil {
        http.Error(w, "user_id must be numeric", http.StatusBadRequest)
        return
    }
    if !userExists(uid) {                // your own DB helper
        http.Error(w, "user not found", http.StatusNotFound)
        return
    }

    // 3. Issue a scoped, short-lived token
    scopes := []string{"booking:read", "booking:create", "booking:update", "booking:cancel"}
    token := issueAgentToken(uid, scopes, body.ClientID, body.SessionID)

    json.NewEncoder(w).Encode(map[string]any{
        "token":      token,
        "expires_in": 3600,
        "scope":      scopes,
        "user_id":    body.UserID,
    })
}`,
                language: "go",
              },
              {
                tag_type: "h5",
                text: "Calling it from your agent workflow (Go)",
              },
              {
                tag_type: "code_with_copy",
                code: `package agent

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "os"
    "time"
)

func GetAgentToken(userID int64) (string, error) {
    payload, _ := json.Marshal(map[string]string{
        "client_id":     os.Getenv("SAGEION_APP_NAME"),
        "client_secret": os.Getenv("SAGEION_CLIENT_SECRET"),
        "user_id":       fmt.Sprintf("%d", userID),
    })
    req, _ := http.NewRequest("POST",
        os.Getenv("API_BASE_URL")+"/auth/client-user-token",
        bytes.NewReader(payload))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{Timeout: 5 * time.Second}
    resp, err := client.Do(req)
    if err != nil { return "", err }
    defer resp.Body.Close()

    var out struct{ Token string \`json:"token"\` }
    if err := json.NewDecoder(resp.Body).Decode(&out); err != nil { return "", err }
    return out.Token, nil
}`,
                language: "go",
              },
            ],
          },
          {
            label: "PHP",
            content: [
              {
                tag_type: "h4",
                text: "Backend handler — PHP (Laravel)",
              },
              {
                tag_type: "code_with_copy",
                code: `<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;

Route::post('/client-user-token', function (Request $request) {
    // 1. Verify client credentials
    if ($request->client_id !== env('SAGEION_APP_NAME') ||
        $request->client_secret !== env('SAGEION_CLIENT_SECRET')) {
        return response()->json(['error' => 'Invalid client credentials'], 401);
    }

    // 2. Verify the user exists
    $user = \\App\\Models\\User::find($request->user_id);
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

    // 3. Issue a scoped, short-lived token
    $scopes = ['booking:read', 'booking:create', 'booking:update', 'booking:cancel'];
    $token = issue_agent_token(
        userId: (int) $user->id,
        scopes: $scopes,
        clientId: $request->client_id,
        sessionId: $request->session_id,
    );

    return response()->json([
        'token'      => $token,
        'expires_in' => 3600,
        'scope'      => $scopes,
        'user_id'    => (string) $user->id,
    ]);
});`,
                language: "php",
              },
              {
                tag_type: "h5",
                text: "Calling it from your agent workflow (PHP)",
              },
              {
                tag_type: "code_with_copy",
                code: `<?php
use Illuminate\\Support\\Facades\\Http;

function get_agent_token(int $userId): string {
    $response = Http::timeout(5)->post(
        env('API_BASE_URL') . '/auth/client-user-token',
        [
            'client_id'     => env('SAGEION_APP_NAME'),
            'client_secret' => env('SAGEION_CLIENT_SECRET'),
            'user_id'       => (string) $userId,
        ]
    );
    return $response->json('token');
}`,
                language: "php",
              },
            ],
          },
          {
            label: "Ruby",
            content: [
              {
                tag_type: "h4",
                text: "Backend handler — Ruby (Rails)",
              },
              {
                tag_type: "code_with_copy",
                code: `# config/routes.rb
post '/auth/client-user-token', to: 'auth#client_user_token'

# app/controllers/auth_controller.rb
class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def client_user_token
    # 1. Verify client credentials
    unless params[:client_id] == ENV['SAGEION_APP_NAME'] &&
           params[:client_secret] == ENV['SAGEION_CLIENT_SECRET']
      return render json: { error: 'Invalid client credentials' }, status: :unauthorized
    end

    # 2. Verify the user exists
    user = User.find_by(id: params[:user_id])
    return render json: { error: 'User not found' }, status: :not_found unless user

    # 3. Issue a scoped, short-lived token
    scopes = %w[booking:read booking:create booking:update booking:cancel]
    token = issue_agent_token(
      user_id:    user.id,
      scopes:     scopes,
      client_id:  params[:client_id],
      session_id: params[:session_id]
    )

    render json: {
      token:      token,
      expires_in: 3600,
      scope:      scopes,
      user_id:    user.id.to_s
    }
  end
end`,
                language: "ruby",
              },
              {
                tag_type: "h5",
                text: "Calling it from your agent workflow (Ruby)",
              },
              {
                tag_type: "code_with_copy",
                code: `require 'faraday'
require 'json'

def get_agent_token(user_id)
  conn = Faraday.new(url: ENV['API_BASE_URL'])
  response = conn.post('/auth/client-user-token') do |req|
    req.headers['Content-Type'] = 'application/json'
    req.body = {
      client_id:     ENV['SAGEION_APP_NAME'],
      client_secret: ENV['SAGEION_CLIENT_SECRET'],
      user_id:       user_id.to_s
    }.to_json
  end
  JSON.parse(response.body)['token']
end`,
                language: "ruby",
              },
            ],
          },
        ],
      },

      // ============================================================
      // 2. OTP ENDPOINTS
      // ============================================================
      {
        tag_type: "h4",
        text: "2. OTP endpoints (/auth/send-otp, /auth/verify-otp)",
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
        text: "2a. Send OTP — POST /auth/send-otp",
      },
      {
        tag_type: "table",
        headers: ["Field", "Type", "Required", "Description"],
        rows: [
          ["email", "string", "Yes", "Email address the OTP is associated with."],
        ],
      },
      {
        tag_type: "p",
        text: "Generates a 6-digit OTP, stores it against the email, and expires it after 5 minutes. The reference implementation logs the OTP — plug in your own email provider for delivery.",
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
              ["success", "boolean", "Yes", "The workflow engine checks this to decide whether to proceed to the verification step."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP 200. If sending fails (bad email, provider outage), return HTTP 400 or 500 — do not return 200 with success: false, because the workflow engine treats 2xx as authoritative.",
          },
        ],
      },
      {
        tag_type: "h5",
        text: "Reference implementation by language — /send-otp",
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
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 min

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

    if err := upsertOTP(body.Email, otp, expiresAt); err != nil {   // your own DB helper
        http.Error(w, "server error", http.StatusInternalServerError)
        return
    }

    // TODO: send via your email provider
    fmt.Printf("[OTP] Sent OTP %s to %s\\n", otp, body.Email)

    json.NewEncoder(w).Encode(map[string]any{
        "success": true,
        "message": "OTP sent",
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
                code: `<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Route;

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
                code: `# config/routes.rb
post '/auth/send-otp', to: 'auth#send_otp'

# app/controllers/auth_controller.rb
def send_otp
  email = params[:email]

  otp = format('%06d', rand(100000..999999))
  expires_at = Time.now + 5 * 60

  Otp.upsert({ email: email, otp: otp, expires_at: expires_at },
             unique_by: :email)

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
        text: "2b. Verify OTP — POST /auth/verify-otp",
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
      {
        tag_type: "callout",
        type: "warning",
        title: "Response contract — required fields",
        children: [
          {
            tag_type: "table",
            headers: ["Field", "Type", "Required", "Why it matters"],
            rows: [
              ["success", "boolean", "Yes", "The workflow engine checks this to allow the OTP-gated action to proceed."],
              ["user_id", "string", "Yes", "The verified user's id. The workflow continues with this identity — omitting it breaks any downstream user-scoped call."],
            ],
          },
          {
            tag_type: "p",
            text: "Return this object at the top level with HTTP 200. On verification failure, return HTTP 400 with a plain JSON body.",
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
            text: "JSON numbers lose leading zeros and can be represented inconsistently across languages (JavaScript numbers, Go int64, Python int). To keep the identity check reliable, always return user_id as a JSON string — for example \"user_id\": \"12345\" — even if your database column is an integer.",
          },
        ],
      },
      {
        tag_type: "h5",
        text: "Reference implementation by language — /verify-otp",
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
      'SELECT otp, expires_at FROM otps WHERE email = $1',
      [email]
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
        raise HTTPException(status_code=400, detail="Invalid OTP format")

    record = await fetch_otp(body.email)   # your own DB helper
    if record is None:
        raise HTTPException(status_code=400, detail="No OTP request found")
    if record["otp"] != body.otp:
        raise HTTPException(status_code=400, detail="Invalid OTP")
    if datetime.utcnow() > record["expires_at"]:
        raise HTTPException(status_code=400, detail="OTP expired")

    user = await fetch_user_by_email(body.email)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

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
                code: `package auth

import (
    "encoding/json"
    "net/http"
    "strconv"
    "time"
)

type verifyOtpBody struct {
    Email string \`json:"email"\`
    Otp   string \`json:"otp"\`
}

func VerifyOtpHandler(w http.ResponseWriter, r *http.Request) {
    var body verifyOtpBody
    if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
        http.Error(w, "bad request", http.StatusBadRequest)
        return
    }
    if len(body.Otp) != 6 {
        http.Error(w, "invalid OTP format", http.StatusBadRequest)
        return
    }

    rec, err := fetchOTP(body.Email)   // your own DB helper
    if err != nil || rec == nil {
        http.Error(w, "no OTP request found", http.StatusBadRequest)
        return
    }
    if rec.Otp != body.Otp {
        http.Error(w, "invalid OTP", http.StatusBadRequest)
        return
    }
    if time.Now().After(rec.ExpiresAt) {
        http.Error(w, "OTP expired", http.StatusBadRequest)
        return
    }

    user, err := fetchUserByEmail(body.Email)
    if err != nil || user == nil {
        http.Error(w, "user not found", http.StatusNotFound)
        return
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
                code: `<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\DB;
use Illuminate\\Support\\Facades\\Route;

Route::post('/verify-otp', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'otp'   => 'required|digits:6',
    ]);

    $record = DB::table('otps')->where('email', $request->email)->first();
    if (!$record) {
        return response()->json(['error' => 'No OTP request found'], 400);
    }
    if ($record->otp !== $request->otp) {
        return response()->json(['error' => 'Invalid OTP'], 400);
    }
    if (now()->greaterThan($record->expires_at)) {
        return response()->json(['error' => 'OTP expired'], 400);
    }

    $user = \\App\\Models\\User::where('email', $request->email)->first();
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

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
                code: `# config/routes.rb
post '/auth/verify-otp', to: 'auth#verify_otp'

# app/controllers/auth_controller.rb
def verify_otp
  email = params[:email]
  otp   = params[:otp]

  return render json: { error: 'Invalid OTP format' }, status: :bad_request unless otp&.match?(/^\\d{6}$/)

  record = Otp.find_by(email: email)
  return render json: { error: 'No OTP request found' }, status: :bad_request unless record
  return render json: { error: 'Invalid OTP' }, status: :bad_request unless record.otp == otp
  return render json: { error: 'OTP expired' }, status: :bad_request if Time.now > record.expires_at

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