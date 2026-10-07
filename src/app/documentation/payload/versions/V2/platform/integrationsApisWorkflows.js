export const integrationsApisWorkflows = [
  {
    tag_type: "h3",
    text: "Agent & Servers",
    selector_uid: "v2_integrations_apis_workflows",
  },
  {
    tag_type: "p",
    text: "The Agent & Servers section provides comprehensive tools for configuring API connections, building multi-step workflows, and managing response templates for your chatbot applications.",
  },

  // ============================================================
  // AUTHENTICATION CONFIGURE
  // ============================================================
  {
    tag_type: "h4",
    text: "Authentication Configure",
    selector_uid: "v2_authentication_configure",
  },
  {
    tag_type: "p",
    text: "Authentication Configure is where you connect your backend's authentication system to Sageion. Sageion uses these servers to obtain the access tokens it needs to call your APIs on behalf of an authenticated user — and, optionally, to send and verify one-time passwords (OTPs) for multi-factor login flows.",
  },
  {
    tag_type: "callout",
    type: "info",
    title: "🔐 Who calls these servers?",
    children: [
      {
        tag_type: "p",
        text: "Every authentication endpoint described here is called by the Sageion backend, never by the end user's browser. Your servers must accept requests from Sageion's infrastructure. They must not require any credentials beyond what is documented below.",
      },
    ],
  },

  {
    tag_type: "tabs",
    items: [
      // ==================== PRIMARY AUTH ====================
      {
        label: "🔐 Primary Authentication",
        content: [
          {
            tag_type: "p",
            text: "The Primary Authentication server is your login server. It is called whenever Sageion needs to obtain a fresh access token for a user. The token your server returns is then used to authenticate every subsequent API call on that user's behalf, until it expires.",
          },
          {
            tag_type: "h5",
            text: "What Sageion sends you",
          },
          {
            tag_type: "p",
            text: "When Sageion needs a token, it calls your login server with a JSON body containing four fields:",
          },
          {
            tag_type: "code_with_copy",
            code: '{\n  "client_id": "MyAppName",\n  "client_secret": "the-real-secret-your-server-validates",\n  "user_id": "36",\n  "session_id": "sess-abc-2"\n}',
            language: "json",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "client_id — an identifier for the app making the request. Sageion always sends your app name here.",
              },
              {
                text: "client_secret — the secret your server validates. This is the value you provided during setup.",
              },
              {
                text: "user_id — the ID of the user the token is being requested for.",
              },
              {
                text: "session_id — the session identifier. Sageion always sends this value. Your server may use it to scope the token to the current session, or ignore it if your tokens are not session-scoped.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "What your server must return",
          },
          {
            tag_type: "p",
            text: "On success, respond with HTTP 200 and a JSON body containing a token field:",
          },
          {
            tag_type: "code_with_copy",
            code: '{\n  "token": "<encrypted token string>"\n}',
            language: "json",
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ The token must be encrypted",
            children: [
              {
                tag_type: "p",
                text: "The token you return must be encrypted with the public key shown under Token Encryption Key. Sageion will not accept a plaintext JWT — the token must be the hybrid-encrypted ciphertext, base64-encoded, in the format documented in the Token Encryption Key section.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Requirements on your endpoint",
          },
          {
            tag_type: "table",
            headers: ["Field", "Requirement"],
            rows: [
              ["HTTP method", "POST"],
              ["Content-Type", "application/json"],
              ["Authorization header", "Must NOT be present. Sageion adds authentication for its own calls; this server is your starting point."],
              ["URL path", "Plain path only — no query strings, no placeholders anywhere in the URL."],
              ["Response body", "Must be JSON with a token field on 2xx."],
            ],
          },
          {
            tag_type: "h5",
            text: "Error responses",
          },
          {
            tag_type: "p",
            text: "If your server returns a non-2xx status, Sageion propagates your error message back to the user-facing system. Write the error messages you want end users to see — they are shown as-is.",
          },
          {
            tag_type: "table",
            headers: ["Status", "When to use it", "Example message"],
            rows: [
              ["401", "Credentials rejected, user not found, or session invalid", "Invalid credentials, please try again"],
              ["400", "The request Sageion sent was malformed or missing required fields", "Incorrect request, will be reported to Admin"],
              ["500", "Your login server errored or is temporarily unavailable", "Auth Server is down, Please try again later"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 One Primary Auth per app",
            children: [
              {
                tag_type: "p",
                text: "You can configure exactly one Primary Authentication server per application. Every API that requires a token will use it.",
              },
            ],
          },
        ],
      },

      // ==================== SECONDARY AUTH ====================
      {
        label: "🔑 Secondary Authentication",
        content: [
          {
            tag_type: "p",
            text: "Secondary Authentication is an optional layer that adds OTP-based multi-factor login to your flow. It is used when your users must prove they are who they say they are by entering a one-time code sent to their email, in addition to the credentials handled by Primary Authentication.",
          },
          {
            tag_type: "h5",
            text: "When would you use this?",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "You want an extra layer of security beyond username and password — for example, before allowing a user to make a booking, submit a form, or access personal information.",
              },
              {
                text: "You need to verify the user's identity against a known email address before issuing a token.",
              },
              {
                text: "You want to be able to contact users out-of-band (via email) as part of the login flow.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "How the flow works",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "The user reaches a point in the chatbot where authentication is required.",
              },
              {
                text: "Sageion calls your Step 1 endpoint (Send OTP) to deliver a one-time code to the user's email.",
              },
              {
                text: "The user receives the code and types it into the chatbot.",
              },
              {
                text: "Sageion calls your Step 2 endpoint (Verify OTP) to confirm the code.",
              },
              {
                text: "Your Step 2 server returns the user_id associated with the email — that is now the authenticated user.",
              },
              {
                text: "Sageion then calls your Primary Authentication server with that user_id to obtain an access token for subsequent API calls.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Secondary Auth is optional",
            children: [
              {
                tag_type: "p",
                text: "If your login flow does not require OTPs, you can configure Primary Authentication alone and skip both steps below. Secondary Authentication only needs to be set up if you want multi-factor login.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Both steps are required together",
            children: [
              {
                tag_type: "p",
                text: "If you enable Secondary Authentication, you must configure both Step 1 and Step 2. The system will not use one without the other.",
              },
            ],
          },

          // Nested tabs for the two steps
          {
            tag_type: "tabs",
            items: [
              // ---------- Step 1 ----------
              {
                label: "Step 1: Send OTP",
                content: [
                  {
                    tag_type: "p",
                    text: "This is the endpoint Sageion calls to deliver a one-time password to the user. Your server should look up the email address, generate a code, and send it (typically via email).",
                  },
                  {
                    tag_type: "h5",
                    text: "What Sageion sends you",
                  },
                  {
                    tag_type: "code_with_copy",
                    code: '{\n  "email": "user@example.com"\n}',
                    language: "json",
                  },
                  {
                    tag_type: "ul",
                    items: [
                      {
                        text: "email — the email address the user provided during the flow. Your server is responsible for verifying this address exists in your system and generating/sending the OTP.",
                      },
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "What your server should return",
                  },
                  {
                    tag_type: "p",
                    text: "On success, respond with HTTP 200 and a JSON body like:",
                  },
                  {
                    tag_type: "code_with_copy",
                    code: '{\n  "success": true,\n  "message": "OTP sent (check server logs)"\n}',
                    language: "json",
                  },
                  {
                    tag_type: "callout",
                    type: "info",
                    title: "ℹ️ The response body is not inspected by Sageion",
                    children: [
                      {
                        tag_type: "p",
                        text: "Only the HTTP status code is checked. Any 2xx is treated as success. Returning {success, message} is a friendly convention, but not required.",
                      },
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "Requirements on your endpoint",
                  },
                  {
                    tag_type: "table",
                    headers: ["Field", "Requirement"],
                    rows: [
                      ["HTTP method", "POST"],
                      ["Content-Type", "application/json"],
                      ["Authorization header", "Must NOT be present."],
                      ["URL path", "Plain path only — no query strings, no placeholders anywhere in the URL."],
                      ["Request body", "Must contain an email field."],
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "Error responses",
                  },
                  {
                    tag_type: "p",
                    text: "If the email does not exist in your system or the OTP could not be sent, respond with a non-2xx status. The error message you return will be shown to the user as-is.",
                  },
                  {
                    tag_type: "table",
                    headers: ["Status", "When to use it", "Example message"],
                    rows: [
                      ["401", "Email not found in your system", "Email does not exist in the system, so otp is not sent"],
                      ["400", "The request was malformed or missing the email field", "Incorrect request, will be reported to Admin"],
                      ["500", "Your send-OTP service errored or is unavailable", "Secondary auth send otp server is down, Please try again later"],
                    ],
                  },
                ],
              },

              // ---------- Step 2 ----------
              {
                label: "Step 2: Verify OTP",
                content: [
                  {
                    tag_type: "p",
                    text: "This is the endpoint Sageion calls after the user types the code they received. Your server verifies the code and returns the user_id associated with that email — this is the identity Sageion will use going forward.",
                  },
                  {
                    tag_type: "h5",
                    text: "What Sageion sends you",
                  },
                  {
                    tag_type: "code_with_copy",
                    code: '{\n  "email": "user@example.com",\n  "otp": "661152"\n}',
                    language: "json",
                  },
                  {
                    tag_type: "ul",
                    items: [
                      {
                        text: "email — the same address used in Step 1.",
                      },
                      {
                        text: "otp — the code the user typed.",
                      },
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "What your server must return",
                  },
                  {
                    tag_type: "p",
                    text: "On success, respond with HTTP 200 and a JSON body that includes user_id:",
                  },
                  {
                    tag_type: "code_with_copy",
                    code: '{\n  "success": true,\n  "message": "OTP verified successfully",\n  "user_id": "1"\n}',
                    language: "json",
                  },
                  {
                    tag_type: "callout",
                    type: "warning",
                    title: "⚠️ user_id is required",
                    children: [
                      {
                        tag_type: "p",
                        text: "The user_id field is not optional. Sageion uses this value to call your Primary Authentication server and mint an access token. If user_id is missing from the response, the login flow cannot complete and the user will be asked to try again.",
                      },
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "Requirements on your endpoint",
                  },
                  {
                    tag_type: "table",
                    headers: ["Field", "Requirement"],
                    rows: [
                      ["HTTP method", "POST"],
                      ["Content-Type", "application/json"],
                      ["Authorization header", "Must NOT be present."],
                      ["URL path", "Plain path only — no query strings, no placeholders anywhere in the URL."],
                      ["Request body", "Must contain email and otp fields."],
                      ["2xx response", "Must include a user_id field."],
                    ],
                  },
                  {
                    tag_type: "h5",
                    text: "Error responses",
                  },
                  {
                    tag_type: "p",
                    text: "If the OTP is wrong, expired, or cannot be verified, respond with a non-2xx status. The error message will be shown to the user as-is.",
                  },
                  {
                    tag_type: "table",
                    headers: ["Status", "When to use it", "Example message"],
                    rows: [
                      ["401", "OTP incorrect or expired", "OTP is not correct, Otp verification failed"],
                      ["400", "The request was malformed or missing email/otp", "Incorrect request, will be reported to Admin"],
                      ["500", "Your verify-OTP service errored or is unavailable", "Secondary auth verify otp server is down, Please try again later"],
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      // ==================== TOKEN ENCRYPTION KEY ====================
      {
        label: "🔐 Token Encryption Key",
        content: [
          {
            tag_type: "p",
            text: "The Token Encryption Key is a public key that your login server uses to encrypt the access tokens it returns to Sageion. Sageion decrypts them with the matching private key, which never leaves our infrastructure.",
          },
          {
            tag_type: "h5",
            text: "Why is this needed?",
          },
          {
            tag_type: "p",
            text: "Access tokens are the equivalent of a signed session — anyone who holds one can act as the user. Encrypting them ensures that a token intercepted in transit is meaningless without Sageion's private key. It also prevents Sageion from ever seeing a plaintext JWT, so a leak of our storage does not expose your tokens.",
          },
          {
            tag_type: "h5",
            text: "How to set it up",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Click 'Generate Encryption Keypair' to create the public/private pair. Sageion stores the private key securely and shows you the public key.",
              },
              {
                text: "Copy the public key (PEM format) and give it to your login server team.",
              },
              {
                text: "In your login server's response handler, encrypt the plaintext JWT using hybrid encryption (details below).",
              },
              {
                text: "Return the encrypted value in the token field of the response.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "The exact format we expect",
          },
          {
            tag_type: "p",
            text: "The token field must be a base64-encoded string containing three segments separated by dots:",
          },
          {
            tag_type: "code_with_copy",
            code: "base64(rsa_wrapped_key).base64(nonce).base64(ciphertext||tag)",
            language: "text",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "rsa_wrapped_key — the AES key, encrypted with the public key using RSA-OAEP with SHA-256.",
              },
              {
                text: "nonce — 12 random bytes, base64-encoded.",
              },
              {
                text: "ciphertext||tag — the AES-256-GCM encrypted payload with the 16-byte authentication tag appended, base64-encoded.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Plaintext JWTs are rejected",
            children: [
              {
                tag_type: "p",
                text: "Sageion detects plaintext JWTs and refuses to store them. If your server returns a token that looks like a normal JWT — three base64 segments — Sageion will reject it and the user will not be able to log in. The token must be the encrypted blob described above.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Rotating the key",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "You can rotate the keypair at any time from this screen by clicking 'Rotate Keypair'.",
              },
              {
                text: "After rotation, your login server must use the new public key for its next token exchange.",
              },
              {
                text: "The previous public key remains valid for 7 days as a grace window, so you have time to update your server without interrupting users.",
              },
              {
                text: "After 7 days, only the new key is accepted.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 One keypair per app",
            children: [
              {
                tag_type: "p",
                text: "The keypair is scoped to your app. Different apps have different keypairs, and a token encrypted for one app cannot be decrypted by another.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // API CONFIGURATIONS
  // ============================================================
  {
    tag_type: "h4",
    text: "API Configurations",
    selector_uid: "v2_api_configurations",
  },
  {
    tag_type: "p",
    text: "API Configurations define the endpoints that your chatbot can call on behalf of the user. Each configuration describes the URL, method, request shape, and how the response should be turned into a chatbot message.",
  },

  {
    tag_type: "tabs",
    items: [
      {
        label: "⚙️ API Configuration",
        content: [
          {
            tag_type: "p",
            text: "Define the API endpoint, method, headers, query parameters, and payload template.",
          },
          {
            tag_type: "h5",
            text: "Key Configuration Fields",
          },
          {
            tag_type: "table",
            headers: ["Field", "Description", "Example"],
            rows: [
              ["API URL", "Full endpoint URL with placeholders", "https://api.example.com/bookings/{{ booking_id }}"],
              ["HTTP Method", "GET, POST, PUT, etc.", "POST"],
              ["Headers", "Request headers (Authorization with {{ token }})", "Authorization: Bearer {{ token }}"],
              ["Query Parameters", "URL query parameters", "limit={{ limit }}&page={{ page }}"],
              ["Payload Template", "JSON body with placeholders", '{"room_id": "{{ room_id }}", "check_in": "{{ check_in }}" }'],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "ℹ️ GET requests have no payload",
            children: [
              {
                tag_type: "p",
                text: "If your method is GET, the Payload Template is ignored. Leave it as {} and provide all inputs via the URL path or query parameters.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "🔄 cURL Import",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Paste a cURL command to auto-generate the API configuration",
              },
              {
                text: "Parses URL, method, headers, query parameters, and payload",
              },
              {
                text: "Detects dynamic path variables (IDs, UUIDs)",
              },
              {
                text: "Requires you to either name each detected variable or mark it as 'Not a variable' before importing",
              },
              {
                text: "Supports multiple sample responses for different status codes",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Use the cURL importer to quickly set up APIs from existing curl commands. This saves time and reduces errors when configuring complex endpoints.",
              },
            ],
          },
        ],
      },
      {
        label: "🖥️ Screens for Each Status",
        content: [
          {
            tag_type: "p",
            text: "Every API returns a response, and every response needs a screen. A screen is what the user actually sees in the chat when your API responds — the message, the layout, the buttons, the styling. This section is where you define one screen for each HTTP status your API might return.",
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Screens are required",
            children: [
              {
                tag_type: "p",
                text: "You cannot save an API configuration without at least one screen. The system will block the save and tell you which status codes still need one.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "How screens work",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "One screen per HTTP status code — a 200 screen, a 404 screen, a 500 screen, and so on.",
              },
              {
                text: "When your API responds, the system picks the screen that matches the response status.",
              },
              {
                text: "If no screen matches the returned status, the user sees a generic fallback message.",
              },
              {
                text: "You can design a screen for any status code your API might realistically return.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Designing a screen",
          },
          {
            tag_type: "p",
            text: "Every screen is designed with the Visual Editor. You don't write any code — you build the response by placing the fields from your sample data where you want them.",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Add a sample response for the status code you want to design a screen for.",
              },
              {
                text: "Click 'Create Screen' next to that status.",
              },
              {
                text: "The Visual Editor opens with your sample data loaded.",
              },
              {
                text: "Drag fields into place, add text, format, apply transformations, and preview live.",
              },
              {
                text: "Click 'Use Template' to save the screen.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Building screens",
            children: [
              {
                tag_type: "p",
                text: "The Visual Editor is a no-code drag-and-drop designer. You lay out tables, cards, images, styled text, and buttons visually — the same way you would design a slide. No code, no syntax, no manual formatting.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Reusing screens across APIs",
          },
          {
            tag_type: "p",
            text: "Screens can be saved at different levels so you can reuse them across multiple APIs without redesigning from scratch:",
          },
          {
            tag_type: "table",
            headers: ["Scope", "Description", "Sharing"],
            rows: [
              ["Local App", "Tied to a specific API config", "Single API only"],
              ["Default App", "Shared across the app", "All APIs in the app"],
              ["Global", "Shared across all apps", "All apps in the tenant"],
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Don't save the placeholder",
            children: [
              {
                tag_type: "p",
                text: "If you leave a screen at its auto-generated placeholder, it will show the raw response data to the user. Always open the Visual Editor and design a proper screen before saving.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📖 Learn more",
            children: [
              {
                tag_type: "p",
                text: "For a full walkthrough of the editor — layouts, transformations, styling, media, and best practices — see the Visual Response Designer section of these docs.",
              },
            ],
          },
        ],
      },
      {
        label: "⏳ Webhook Support",
        content: [
          {
            tag_type: "p",
            text: "Enable webhook support for asynchronous API calls that require waiting for a callback.",
          },
          {
            tag_type: "h5",
            text: "Webhook Configuration",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Enable Async Callback for long-running operations",
              },
              {
                text: "Auto-generated event name for tracking",
              },
              {
                text: "Configurable timeout (default: 600 seconds / 10 minutes)",
              },
              {
                text: "Useful for operations like booking confirmations",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🔄 When to Use Webhooks",
            children: [
              {
                tag_type: "p",
                text: "Enable webhooks when your API processes requests asynchronously (e.g., payment processing, booking confirmations, or long-running operations). The chatbot will wait for the callback before continuing.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHAIN APIS
  // ============================================================
  {
    tag_type: "h4",
    text: "ChainApis",
    selector_uid: "v2_chain_apis",
  },
  {
    tag_type: "p",
    text: "A Chain links several of your APIs into one branching workflow. Each API's response status decides which API runs next. Use Chains when a single skill needs more than one call to complete — for example, check availability, then book, then confirm.",
  },

  {
    tag_type: "tabs",
    items: [
      {
        label: "🔗 Building a Chain",
        content: [
          {
            tag_type: "h5",
            text: "The three parts of a chain",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Root API — the first call. It receives the visitor's input directly and its response decides what happens next.",
              },
              {
                text: "Branches — one per response status you want to handle. Each branch names the follow-up API to call when that status comes back.",
              },
              {
                text: "Mappings — for each branch, which fields from the previous response feed into the follow-up API's URL, query string, or payload.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Adding branches",
          },
          {
            tag_type: "p",
            text: "Every API declares which statuses it returns in its own API Configuration. When you pick an API for a node, the editor automatically seeds one branch slot for each of those statuses. You just wire the ones you care about. You can't add a status the API doesn't already declare — if a status is missing, update the API Configuration first.",
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Statuses come from the API",
            children: [
              {
                tag_type: "p",
                text: "A branch exists because your API can return that status. Adding an unconfigured status here would be a guess. Update the API Configuration to declare a new status, then come back — the branch slot will appear automatically.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "How a chain runs",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "The root API is called with the visitor's input.",
              },
              {
                text: "Its response status picks the matching branch.",
              },
              {
                text: "That branch's API is called, using the mappings you configured.",
              },
              {
                text: "The process repeats down the tree until a node has no branch for the status it returned.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ A chain stops the moment a status has no branch",
            children: [
              {
                tag_type: "p",
                text: "If an API returns 200 but you only wired a 202 branch, the chain stops there. Design branches for every status your API can meaningfully return, or accept the default fallback.",
              },
            ],
          },
        ],
      },
      {
        label: "⏳ Pausing for Async Steps",
        content: [
          {
            tag_type: "p",
            text: "Any API in a chain can be marked as an Async Callback. When the chain reaches it, the chatbot pauses and waits for your backend to call back with the result. The chain then resumes from that exact point.",
          },
          {
            tag_type: "h5",
            text: "Two ways to pause",
          },
          {
            tag_type: "table",
            headers: ["Mode", "Who calls the API", "Use when"],
            rows: [
              ["Webhook", "Sageion calls your API, which then calls back later", "Your API is async but Sageion can still reach it"],
              ["Manual", "Your own frontend or backend calls the API", "Your system owns the step entirely — e.g. a payment page"],
            ],
          },
          {
            tag_type: "h5",
            text: "How the callback works",
          },
          {
            tag_type: "p",
            text: "Sageion gives your API a correlation ID when it calls it. When your step finishes — whether you called the API yourself or Sageion called it — your backend POSTs back to Sageion's callback URL with the same correlation ID and the result:",
          },
          {
            tag_type: "code_with_copy",
            code: '{\n  "correlation_id": "<the id you received>",\n  "data": {\n    "status_code": 200,\n    "success": true,\n    ...\n  }\n}',
            language: "json",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "correlation_id — pass back the exact value you received. This is how Sageion finds the paused chain.",
              },
              {
                text: "status_code — REQUIRED for Manual steps. This is what Sageion uses to pick the next branch. Without it, the chain cannot route on resume.",
              },
              {
                text: "All other fields in data become the response your next API can map from — just as if the paused API had returned them directly.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Manual steps MUST send status_code",
            children: [
              {
                tag_type: "p",
                text: "For a Manual step, Sageion has no other way to know which branch to take. If status_code is missing, the chain will not route correctly. For Webhook steps it is optional — Sageion falls back to the status of the paused call.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Timeout",
          },
          {
            tag_type: "p",
            text: "Each paused step has a timeout (default 10 minutes, configurable per API). If no callback arrives before the timeout, the pending step is discarded and the chain will not resume from it.",
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Test non-manual, ship manual",
            children: [
              {
                tag_type: "p",
                text: "You can build and test your whole chain with every step running from Sageion — no Manual, no Webhook. When you're ready to move a step to your own system, just mark it Manual. The rest of the chain, the mappings, and the response screens stay exactly as they were.",
              },
            ],
          },
        ],
      },
      {
        label: "🔀 Field Mapping",
        content: [
          {
            tag_type: "p",
            text: "Mappings decide what each follow-up API receives. A mapping can come from the visitor's original form data, from the previous API's response, or from a value you type in yourself.",
          },
          {
            tag_type: "h5",
            text: "Where mappings can point",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "URL path — values that go inside the URL, like /api/rooms/{{ room_id }}.",
              },
              {
                text: "Query string — values appended to the URL, like ?page=2.",
              },
              {
                text: "Request body — values in the JSON payload sent to POST/PUT APIs.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "What you can map from",
          },
          {
            tag_type: "table",
            headers: ["Source", "Example", "Notes"],
            rows: [
              ["Previous response", "{{ response_data.booking_id }}", "The most common case. Fields come from the API the chain just called."],
              ["Visitor's original input", "{{ room_id }}", "Anything the visitor typed into the form that triggered the chain."],
              ["A fixed value", '{{ "card" }}', "Type the value as text between quotes. Use this for constants the API always expects."],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Dotted paths reach into nested objects",
            children: [
              {
                tag_type: "p",
                text: "If the previous response was { \"booking\": { \"id\": 26 } }, use {{ response_data.booking.id }} to reach the id. The editor's field picker lists all available paths for you.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Type conversion",
          },
          {
            tag_type: "p",
            text: "Each mapping can declare the type the target API expects — String, Number, Integer, Date, and so on. If your previous response returned a number as a string (\"26\") and the next API wants an integer, set the conversion and Sageion handles it.",
          },
        ],
      },
      {
        label: "🎨 Canvas View",
        content: [
          {
            tag_type: "p",
            text: "The Canvas View shows your whole chain as a diagram. Every API is a node, every branch is an arrow, and every exit is a leaf. It's the fastest way to check that every status you care about actually goes somewhere.",
          },
          {
            tag_type: "h5",
            text: "What you can do on the canvas",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "See the full tree at a glance, including deep branches",
              },
              {
                text: "Edit any node's API or mappings inline, without leaving the canvas",
              },
              {
                text: "Add or delete sub-branches anywhere in the tree",
              },
              {
                text: "Spot missing branches (a node with a status that has no arrow)",
              },
              {
                text: "Toggle a chain on or off without opening the editor",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Same data, two views",
            children: [
              {
                tag_type: "p",
                text: "The List View and Canvas View are two views of the same chain. Anything you change in one appears in the other. Use whichever suits the task — List for precise edits, Canvas for understanding the overall shape.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // RESPONSE SETTINGS
  // ============================================================
  {
    tag_type: "h4",
    text: "Response Settings",
    selector_uid: "v2_response_settings",
  },
  {
    tag_type: "p",
    text: "Response Settings allows you to manage response templates across all API configurations in one centralized location.",
  },

  {
    tag_type: "tabs",
    items: [
      {
        label: "📋 Template Management",
        content: [
          {
            tag_type: "p",
            text: "Centrally manage all response templates for your API configurations.",
          },
          {
            tag_type: "h5",
            text: "Template Features",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "View and edit templates for each API config",
              },
              {
                text: "Create templates for multiple status codes",
              },
              {
                text: "Preview rendered messages",
              },
              {
                text: "Use Jinja syntax with field autocomplete",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📌 Centralized Management",
            children: [
              {
                tag_type: "p",
                text: "Response Settings provides a single view of all templates across your API configurations. This makes it easy to maintain consistent messaging across your chatbot.",
              },
            ],
          },
        ],
      },
      {
        label: "✏️ Template Editor",
        content: [
          {
            tag_type: "p",
            text: "The Template Editor provides a powerful interface for creating and editing response templates.",
          },
          {
            tag_type: "h5",
            text: "Editor Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Status code tabs for multi-status templates",
              },
              {
                text: "Field autocomplete with @ trigger",
              },
              {
                text: "Live preview of rendered messages",
              },
              {
                text: "JSON sample response parsing",
              },
              {
                text: "Insert field dropdown for easy field selection",
              },
            ],
          },
          {
            tag_type: "code_with_copy",
            code: "✅ Your booking has been confirmed!\n\nBooking ID: {{ response_data.booking_id }}\nRoom: {{ response_data.room_type }}\nCheck-in: {{ response_data.check_in }}\nCheck-out: {{ response_data.check_out }}\nTotal: {{ response_data.total }}\n\nWe look forward to welcoming you.",
            language: "text",
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Best Practice",
            children: [
              {
                tag_type: "p",
                text: "Test your templates with different data types. Use conditional logic to handle edge cases (e.g., pluralization, null values). A well-designed template creates a professional user experience.",
              },
            ],
          },
        ],
      },
      {
        label: "🔍 Template Types",
        content: [
          {
            tag_type: "p",
            text: "Templates can be scoped at different levels, controlling where they can be used.",
          },
          {
            tag_type: "table",
            headers: ["Type", "Scope", "Use Case"],
            rows: [
              ["Local App", "Specific API Config", "Unique formatting for a specific endpoint"],
              ["Default App", "All APIs in the app", "Consistent messaging across the app"],
              ["Global", "All apps in the tenant", "Standardized messages across all apps"],
            ],
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Templates inherit from broader scopes if not defined locally",
              },
              {
                text: "Local templates override default and global templates",
              },
              {
                text: "Default templates provide app-wide consistency",
              },
              {
                text: "Global templates ensure brand consistency across all apps",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📊 Template Inheritance",
            children: [
              {
                tag_type: "p",
                text: "Templates follow an inheritance hierarchy: Global → Default App → Local App. The most specific template (Local) takes precedence when available.",
              },
            ],
          },
        ],
      },
      {
        label: "🎨 Preview Tester",
        content: [
          {
            tag_type: "p",
            text: "The Preview Tester allows you to design and test response templates with sample data before saving.",
          },
          {
            tag_type: "h5",
            text: "Preview Tester Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Load sample responses for different status codes",
              },
              {
                text: "Edit template with live preview",
              },
              {
                text: "Insert fields from sample data",
              },
              {
                text: "Apply transformations to data",
              },
              {
                text: "Save designed templates directly to your API config",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Use the Preview Tester to quickly design and test templates. You can see the rendered message in real-time as you edit, ensuring the final output looks perfect before saving.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // QUICK NAVIGATION
  // ============================================================
  {
    tag_type: "accordion",
    title: "📖 Quick Navigation Guide",
    children: [
      {
        tag_type: "ol",
        items: [
          {
            text: "Authentication Configure → Set up your login server, optional OTP flow, and token encryption",
          },
          {
            text: "API Configurations → Configure the APIs your chatbot will call",
          },
          {
            text: "ChainApis → Build multi-step API workflows",
          },
          {
            text: "Response Settings → Manage response templates centrally",
          },
        ],
      },
    ],
  },

  // ============================================================
  // SUMMARY
  // ============================================================
  {
    tag_type: "callout",
    type: "success",
    title: "✅ Agent & Servers Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The Agent & Servers section provides a complete toolkit for connecting your chatbot to backend services, building complex workflows, and managing user-facing responses.",
      },
      {
        tag_type: "p",
        text: "Start by configuring authentication and your API endpoints, then build chains for complex workflows, and finally design user-friendly response templates to create a seamless user experience.",
      },
    ],
  },
];