// documentation/payload/versions/V2/platform/integrationsApisWorkflows.js

const integrationsApisWorkflowsPayload = [  {
    tag_type: "h3",
    text: "API Chains",
    selector_uid: "v2_chain_apis",
  },
  {
    tag_type: "p",
    text:
      "A Chain runs several API configs in sequence, with branching on response " +
      "status codes. This is how a single agent handles multi-step workflows " +
      "without writing a single line of code.",
  },
  {
    tag_type: "p",
    text:
      "Here is a real-world example: a restaurant manager asks the AI Agent to " +
      "\"Check if we need to order rice and handle the approval.\" The runtime " +
      "executes a 3-step chain:",
  },
  
  // STEP 1
  {
    tag_type: "h4",
    text: "Step 1: Check Inventory (Parent)",
    selector_uid: "v2_chain_step1",
  },
  {
    tag_type: "p",
    text: "The chain hits the inventory endpoint to see if Basmati Rice is low.",
  },
  {
    tag_type: "code_with_copy",
    language: "bash",
    code: `curl -s -X GET http://api.yourcrm.com/inventory/rice \\
  -H "Authorization: Bearer {{ token }}"

# Response (200 OK)
{
  "material_id": "rice",
  "name": "Basmati Rice",
  "current_qty": 3,
  "unit": "kg",
  "low_threshold": 4
}`,
  },

  // STEP 2
  {
    tag_type: "h4",
    text: "Step 2: Create Purchase Order (Child)",
    selector_uid: "v2_chain_step2",
  },
  {
    tag_type: "p",
    text:
      "Because the quantity is low, the chain automatically triggers the next " +
      "API. Notice how it takes the {{ material_id }} from Step 1 and injects it " +
      "directly into the payload for Step 2.",
  },
  {
    tag_type: "code_with_copy",
    language: "bash",
    code: `curl -s -X POST http://api.yourcrm.com/purchase-orders \\
  -H "Authorization: Bearer {{ token }}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "supplier": "FreshMeat", 
    "material_id": "{{ response_data.material_id }}", 
    "qty": 5, 
    "unit": "kg"
  }'

# Response (201 Created)
{
  "po_id": "PO-BDE7BB",
  "status": "pending_supplier"
}`,
  },

  // STEP 3
  {
    tag_type: "h4",
    text: "Step 3: Approve Purchase Order (Grandchild)",
    selector_uid: "v2_chain_step3",
  },
  {
    tag_type: "p",
    text:
      "For critical actions, the chain can pause for human-in-the-loop approval. " +
      "Once approved, it takes the {{ po_id }} from Step 2, injects it into the URL, " +
      "and finalizes the order.",
  },
  {
    tag_type: "code_with_copy",
    language: "bash",
    code: `curl -s -X PATCH http://api.yourcrm.com/purchase-orders/{{ response_data.po_id }}/approve \\
  -H "Authorization: Bearer {{ token }}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "approved": true
  }'

# Response (200 OK)
{
  "success": true,
  "po_id": "PO-BDE7BB",
  "status": "approved",
  "inventory_updated": true
}`,
  },

  {
    tag_type: "callout",
    type: "success",
    title: "No Code Required",
    children: [
      {
        tag_type: "p",
        text:
          "This entire 3-step workflow — including payload transformation, branch " +
          "logic, and auth headers — is configured visually in the CanvasView " +
          "editor. The LLM only detects the initial intent (\"Order rice\"). The " +
          "runtime handles the rest deterministically.",
      },
    ],
  }]

export default integrationsApisWorkflowsPayload;