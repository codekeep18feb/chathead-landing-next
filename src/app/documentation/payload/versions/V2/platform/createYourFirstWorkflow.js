// documentation/payload/versions/V2/platform/createYourFirstWorkflow.js

export const createYourFirstWorkflow = [
  {
    tag_type: "h2",
    text: "Build Your First API Chain: The Refund Workflow",
    selector_uid: "v2_first_workflow"
  },
  {
    tag_type: "p",
    text: "You don't need to write code to build complex AI agents. In this guide, we will walk through building a real-world workflow by chaining three separate APIs together. We'll use a simple scenario between a Restaurant Manager (Alice) and a customer (Bob)."
  },
  {
    tag_type: "callout",
    type: "info",
    title: "Before You Begin",
    children: [
      {
        tag_type: "p",
        text: "To follow along, you will need three mock API endpoints ready: one to fetch order details, one to process the refund, and one to send a notification."
      }
    ]
  },

  // ============================================================
  // STEP 1: THE INTENT
  // ============================================================
  {
    tag_type: "h3",
    text: "Step 1: Define the Intent",
    selector_uid: "v2_workflow_step_1"
  },
  {
    tag_type: "p",
    text: "First, we tell the AI what triggers this workflow. We want the AI to detect when a user is asking for a refund."
  },
  {
    tag_type: "p",
    text: "Example: Bob messages the restaurant, 'I received the wrong order, can I get my money back for order #1042?'"
  },
  {
    tag_type: "p",
    text: "The AI classifies this as the **ProcessRefund** intent. Now, we need it to fetch Bob's order details before doing anything else."
  },

  // ============================================================
  // STEP 2: CHAINING THE APIS
  // ============================================================
  {
    tag_type: "h3",
    text: "Step 2: Chain the APIs",
    selector_uid: "v2_workflow_step_2"
  },
  {
    tag_type: "p",
    text: "In the visual builder, you drag three API nodes onto the canvas and connect them in sequence. Here is what the parent-child mapping looks like:"
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Node A: Fetch Order Details",
        content: [
          {
            tag_type: "p",
            text: "We call `GET /api/orders/{{order_id}}`. We map the `order_id` extracted by the LLM (1042) into this API request."
          }
        ]
      },
      {
        title: "Node B: Process Refund",
        content: [
          {
            tag_type: "p",
            text: "If Node A returns a `200 OK` and the order is eligible, we trigger `POST /api/refunds`. We map the `customer_id` and `amount` from Node A's response into Node B's request body."
          }
        ]
      },
      {
        title: "Node C: Notify Staff",
        content: [
          {
            tag_type: "p",
            text: "Once the refund is successful, we trigger `POST /api/slack-notify` to alert Alice (the manager) that a refund was just processed."
          }
        ]
      }
    ]
  },

  // ============================================================
  // STEP 3: RESPONSE SCREENS & STATUS CODES
  // ============================================================
  {
    tag_type: "h3",
    text: "Step 3: Map Status Codes to Dynamic UI",
    selector_uid: "v2_workflow_step_3"
  },
  {
    tag_type: "p",
    text: "This is where Sageion shines. You don't just get a text response. You decide exactly how the UI reacts based on the API status codes."
  },
  {
    tag_type: "table",
    headers: ["API Response", "Agent Action", "UI Output"],
    rows: [
      ["Node A returns 200 (Success)", "Proceed to Node B", "Render an 'Approval' UI screen for Alice to review the refund."],
      ["Node A returns 404 (Order Not Found)", "Stop Workflow", "Render a text message: 'I couldn't find order #1042. Can you double-check the number?'"],
      ["Node B returns 402 (Payment Required)", "Stop Workflow", "Render a 'Contact Support' button with a custom message about merchant account limits."]
    ]
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "Human-in-the-Loop",
    children: [
      {
        tag_type: "p",
        text: "In this workflow, before Node B fires, you can configure a 'Manual Pause'. The AI will generate a UI card for Alice that says 'Bob requested a refund of $45.00. Approve or Reject?' The workflow waits for Alice's click before calling the refund API."
      }
    ]
  },

  // ============================================================
  // STEP 4: CUSTOM RESPONSE TEMPLATES
  // ============================================================
  {
    tag_type: "h3",
    text: "Step 4: Curated Text Templates",
    selector_uid: "v2_workflow_step_4"
  },
  {
    tag_type: "p",
    text: "What if you don't want a UI screen, but you want a perfectly formatted text response? You can use a Jinja template mapping to the API response."
  },
  {
    tag_type: "code_with_copy",
    language: "jinja",
    code: "Hi {{ customer_name }},\n\nYour refund of ${{ refund_amount }} for order {{ order_id }} has been successfully processed.\n\nYou should see the funds in your account within 3-5 business days.\n\nThanks,\n{{ restaurant_name }} Team"
  },
  {
    tag_type: "p",
    text: "When Node B returns a `200 OK`, the runtime injects the API data directly into this template and renders it to Bob instantly. Zero LLM hallucination on the numbers."
  },

  // ============================================================
  // SUMMARY
  // ============================================================
  {
    tag_type: "h3",
    text: "Summary",
    selector_uid: "v2_workflow_summary"
  },
  {
    tag_type: "p",
    text: "By combining Intent Detection + API Chaining + UI Generation, you have built a robust, enterprise-grade refund workflow. You can now test this exact flow using our demo, or map it to your own Petpooja/Posist APIs."
  }
];