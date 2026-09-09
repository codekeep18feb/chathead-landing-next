export const integrationsApisWorkflows = [
  {
    tag_type: "h3",
    text: "Integrations & APIs & Workflows",
    selector_uid: "v2_integrations_apis_workflows",
  },
  {
    tag_type: "p",
    text: "The Integrations & APIs & Workflows section provides comprehensive tools for configuring API connections, building multi-step workflows, and managing response templates for your chatbot applications.",
  },

  // ============================================================
  // API CONFIG
  // ============================================================
  {
    tag_type: "h4",
    text: "API Config",
    selector_uid: "v2_api_config",
  },
  {
    tag_type: "p",
    text: "The API Config section allows you to define and manage API endpoints that your chatbot can call. Each API configuration includes authentication, request structure, and response handling.",
  },

  // Use tabs for API Config features
  {
    tag_type: "tabs",
    items: [
      {
        label: "🔐 Authentication Setup",
        content: [
          {
            tag_type: "p",
            text: "Configure authentication for your APIs to securely connect to backend services.",
          },
          {
            tag_type: "h5",
            text: "Primary Authentication (Login Server)",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Configure the login server that provides access tokens",
              },
              {
                text: "Must NOT contain an Authorization header (system adds it automatically)",
              },
              {
                text: "Payload must include: client_secret, user_id, client_id",
              },
              {
                text: "Only one Primary Authentication setup per application",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Step 1: Send Verification Code (OTP)",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Send a one-time password (OTP) to the user's email or phone",
              },
              {
                text: "Must NOT contain an Authorization header",
              },
              {
                text: "Used for multi-factor authentication flows",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Step 2: Verify Code & Get User ID",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Verify the OTP and return the authenticated user_id",
              },
              {
                text: "Must NOT contain an Authorization header",
              },
              {
                text: "The user_id returned is used for all subsequent API calls",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Authentication Flow",
            children: [
              {
                tag_type: "p",
                text: "The authentication flow typically follows: Login Server → (Token) → API Calls. For multi-factor auth, add Step 1 (Send Code) and Step 2 (Verify Code) before the main API calls.",
              },
            ],
          },
        ],
      },
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
        label: "📝 Response Templates",
        content: [
          {
            tag_type: "p",
            text: "Define how API responses are converted into user-friendly messages using Jinja-style templates.",
          },
          {
            tag_type: "h5",
            text: "Template Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Create templates for each HTTP status code (200, 404, 500, etc.)",
              },
              {
                text: "Use Jinja syntax with {{ field }} variables",
              },
              {
                text: "Access entire response as response_data",
              },
              {
                text: "Iterate over arrays with {% for item in response_data %}",
              },
              {
                text: "Load saved templates from other configurations",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "📋 Template Scopes",
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
            tag_type: "code_with_copy",
            code: "✅ Available rooms:\n{% for room in response_data %}\n• {{ room.room_type }} – {{ room.price_per_night }}\n{% endfor %}",
            language: "text",
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Template Validation",
            children: [
              {
                tag_type: "p",
                text: "Templates must be customized before saving. The default template '{{ response_data | dump | safe }}' shows raw JSON and should be replaced with user-friendly content.",
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
    text: "ChainApis enables you to create multi-step API workflows where the response from one API determines the next API to call. This is useful for complex business logic that requires multiple steps.",
  },

  // Use tabs for ChainApis features
  {
    tag_type: "tabs",
    items: [
      {
        label: "🔗 What is a Chain?",
        content: [
          {
            tag_type: "p",
            text: "A Chain is a sequence of API calls where each step can branch based on the response status of the previous step.",
          },
          {
            tag_type: "h5",
            text: "Chain Structure",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Root API: The first API call in the chain",
              },
              {
                text: "Branches: Follow-up APIs triggered by specific response statuses",
              },
              {
                text: "Each branch can have its own field mappings",
              },
              {
                text: "Chains can be enabled/disabled",
              },
            ],
          },
          {
            tag_type: "code_with_copy",
            code: "Root API: /api/check_availability (Status: 200)\n  → Branch (Success): /api/book_room\n  → Branch (404): /api/notify_unavailable",
            language: "text",
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 When to Use Chains",
            children: [
              {
                tag_type: "p",
                text: "Use Chains when you need to handle complex, multi-step workflows. For example: Check Availability → (Success) Book Room → (Failure) Suggest Alternatives.",
              },
            ],
          },
        ],
      },
      {
        label: "📋 Chain Configuration",
        content: [
          {
            tag_type: "p",
            text: "Configure chains by defining the root API and branches for different response statuses.",
          },
          {
            tag_type: "h5",
            text: "Configuration Steps",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Name your chain (e.g., 'Booking Flow')",
              },
              {
                text: "Select the Root API",
              },
              {
                text: "Add branches for each response status you want to handle",
              },
              {
                text: "Select follow-up APIs for each branch",
              },
              {
                text: "Map fields from the root response to the branch API",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "Branch Status Codes",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "200, 201: Success branches",
              },
              {
                text: "400, 404, 422: Error branches",
              },
              {
                text: "500, 503: Server error branches",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Branch Requirements",
            children: [
              {
                tag_type: "p",
                text: "Each branch must have a valid API configuration. The root API must have sample responses configured to define available branches.",
              },
            ],
          },
        ],
      },
      {
        label: "🎨 Canvas View",
        content: [
          {
            tag_type: "p",
            text: "The Canvas View provides a visual representation of your chains, making it easy to understand and modify the workflow.",
          },
          {
            tag_type: "h5",
            text: "Canvas Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Visual node representation of each API step",
              },
              {
                text: "Arrows show the flow between steps",
              },
              {
                text: "Branch indicators show different paths",
              },
              {
                text: "Inline editing of API configurations",
              },
              {
                text: "Status indicators for active/disabled chains",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🎯 Quick Overview",
            children: [
              {
                tag_type: "p",
                text: "The Canvas View gives you a bird's-eye view of your workflow. Use it to understand complex chains quickly and identify missing branches.",
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
            text: "Field mapping connects data from the previous API response to the next API's request parameters.",
          },
          {
            tag_type: "h5",
            text: "Mapping Options",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Map fields from initial form data",
              },
              {
                text: "Map fields from previous API response",
              },
              {
                text: "Use Jinja-style {{ field }} syntax",
              },
              {
                text: "Convert data types (string, number, date, etc.)",
              },
            ],
          },
          {
            tag_type: "code_with_copy",
            code: '// Example mapping: Room ID from check_availability response\n// maps to booking API as room_id\n{\n  "room_id": "{{ response_data.room_id }}",\n  "guest_name": "{{ guest_name }}"\n}',
            language: "json",
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Use the field mapping editor to see available fields from both the initial form data and the previous API response. This prevents errors from mismatched field names.",
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

  // Use tabs for Response Settings
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
            text: "API Config → Configure API endpoints and authentication",
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
    title: "✅ Integrations & APIs & Workflows Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The Integrations & APIs & Workflows section provides a complete toolkit for connecting your chatbot to backend services, building complex workflows, and managing user-facing responses.",
      },
      {
        tag_type: "p",
        text: "Start by configuring your APIs, then build chains for complex workflows, and finally design user-friendly response templates to create a seamless user experience.",
      },
    ],
  },
];
