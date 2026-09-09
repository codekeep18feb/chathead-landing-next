export const faqChatLeadGeneration = [
  {
    tag_type: "h3",
    text: "FAQ Chat & Lead Generation",
    selector_uid: "v2_faq_chat_lead_gen",
  },
  {
    tag_type: "p",
    text: "The FAQ Chat & Lead Generation section provides powerful tools for building interactive FAQ trees, managing leads, and capturing visitor information through forms.",
  },
  {
    tag_type: "h4",
    text: "LeadGen & FAQ",
    selector_uid: "v2_leadgen_faq",
  },
  {
    tag_type: "p",
    text: "This feature combines two powerful capabilities: Interactive FAQ/Q&A Trees and Lead Generation.",
  },
  {
    tag_type: "callout",
    type: "info",
    title: "Two Modes",
    children: [
      {
        tag_type: "ol",
        items: [
          {
            text: "FAQ/Q&A Tree Mode: Build hierarchical question-answer structures",
          },
          {
            text: "Lead Generation Mode: Capture leads at any node in the tree",
          },
        ],
      },
    ],
  },
  {
    tag_type: "h5",
    text: "🌳 FAQ Tree Builder",
  },
  {
    tag_type: "p",
    text: "The Dynamic Tree Builder allows you to create structured FAQ content:",
  },
  {
    tag_type: "ol",
    items: [
      {
        text: "Create hierarchical question-answer trees",
      },
      {
        text: "Add sub-questions and answers",
      },
      {
        text: "Attach lead generation forms at any node",
      },
      {
        text: "Enable/disable the FAQ bot content",
      },
    ],
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "⚠️ At Least One Chatbot Required",
    children: [
      {
        tag_type: "p",
        text: "You must have at least one chatbot enabled at all times. The system validates that either AI Chat, Live Agent, or FAQ Bot is active. You cannot disable all chatbots simultaneously.",
      },
    ],
  },
  {
    tag_type: "h5",
    text: "🎯 Lead Generation Management",
  },
  {
    tag_type: "p",
    text: "Capture and manage leads from your FAQ forms and other sources:",
  },
  {
    tag_type: "ol",
    items: [
      {
        text: "View all captured leads with timestamps and metadata",
      },
      {
        text: "Export leads to XLSX or CSV format",
      },
      {
        text: "Leads are automatically stored in the Admin Panel",
      },
      {
        text: "Connect to external servers via AI Agent workflows",
      },
    ],
  },
  {
    tag_type: "table",
    headers: ["Lead Field", "Description"],
    rows: [
      ["Lead ID", "Unique identifier for each lead"],
      ["Timestamp", "When the lead was captured"],
      ["Lead Data", "Form fields and user responses"],
      ["Metadata", "Additional context (source, page, etc.)"],
    ],
  },
  {
    tag_type: "h5",
    text: "📝 Bot Forms & Post-Processing",
  },
  {
    tag_type: "p",
    text: "Configure how forms behave and what happens after submission:",
  },
  {
    tag_type: "table",
    headers: ["Template Type", "Description", "Use Case"],
    rows: [
      ["THANK_YOU", "Shows appreciation message", "Simple thank you response"],
      ["GET_BACK_TO_YOU_SHORTLY", "Informs about follow-up", "Lead qualification"],
    ],
  },
  {
    tag_type: "callout",
    type: "info",
    title: "Lead Storage Options",
    children: [
      {
        tag_type: "ol",
        items: [
          {
            text: "Built-in Storage: Leads stored in Sageion Admin Panel under Lead Generation section",
          },
          {
            text: "External Integration: Send to external servers via orchestrated AI Agent workflows",
          },
        ],
      },
    ],
  },
  {
    tag_type: "h5",
    text: "🔧 Form Field Configuration",
  },
  {
    tag_type: "p",
    text: "Each form can have multiple fields with the following properties:",
  },
  {
    tag_type: "table",
    headers: ["Field Property", "Description", "Example"],
    rows: [
      ["Label", "Display name", "Email Address"],
      ["Type", "Field type", "text, email, phone, etc."],
      ["Required", "Whether field is mandatory", "true/false"],
      ["Placeholder", "Hint text", "Enter your email"],
    ],
  },
  {
    tag_type: "callout",
    type: "success",
    title: "✅ Best Practice",
    children: [
      {
        tag_type: "p",
        text: "Keep lead capture forms short and focused on essential information to maximize conversion rates.",
      },
    ],
  },
  {
    tag_type: "h5",
    text: "🔄 Update Process",
  },
  {
    tag_type: "p",
    text: "When updating LeadGen & FAQ settings:",
  },
  {
    tag_type: "ol",
    items: [
      {
        text: "Make your changes to the FAQ tree or lead settings",
      },
      {
        text: "Click the 'Update' button at the bottom",
      },
      {
        text: "Review the confirmation modal (all clients will be rebooted)",
      },
      {
        text: "Confirm to apply changes",
      },
    ],
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "⚠️ Client Reboot Warning",
    children: [
      {
        tag_type: "p",
        text: "Updating LeadGen & FAQ settings will reboot all active clients to sync the new configuration.",
      },
    ],
  },
  {
    tag_type: "accordion",
    title: "📖 Quick Navigation Guide",
    children: [
      {
        tag_type: "ol",
        items: [
          {
            text: "FAQ Tree Builder → Build and organize Q&A content",
          },
          {
            text: "Lead Generation → View and export captured leads",
          },
          {
            text: "Bot Forms → Configure forms and post-processing templates",
          },
          {
            text: "Update → Save and apply changes",
          },
        ],
      },
    ],
  },
  {
    tag_type: "callout",
    type: "success",
    title: "✅ FAQ Chat & Lead Generation Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The LeadGen & FAQ feature provides a complete solution for building interactive FAQ trees and capturing leads from your website visitors.",
      },
    ],
  },
];
