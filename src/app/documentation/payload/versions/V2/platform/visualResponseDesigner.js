// documentation/payload/versions/V2/platform/visualResponseDesigner.js

const visualResponseDesignerPayload = [
  {
    tag_type: "h2",
    text: "Visual Response Designer",
    selector_uid: "v2_visual_response_designer",
  },
  {
    tag_type: "p",
    text:
      "The Visual Response Designer is where you tell the AI Agent what to " +
      "render after an API call. Instead of returning raw JSON or a chat message, " +
      "you design a structured screen — a card, a table, an approval dialog, a " +
      "form — from the API's actual response shape.",
  },

  {
    tag_type: "h3",
    text: "What is the Visual Response Designer?",
    selector_uid: "v2_what_is_visual_designer",
  },
  {
    tag_type: "p",
    text:
      "It is a no-code editor that takes the sample response from an API Config " +
      "and lets you map each field into a UI component. The result is rendered by " +
      "the same deterministic engine used across the platform — no LLM involvement, " +
      "no risk of hallucination, no HTML injection risk.",
  },

  {
    tag_type: "h3",
    text: "Getting started",
    selector_uid: "v2_visual_designer_getting_started",
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Open the Preview Tester",
        content: [
          { tag_type: "p", text: "From any API Config, click {{ Create Template }} for a specific status code." },
        ],
      },
      {
        title: "Paste a sample response",
        content: [
          { tag_type: "p", text: "Use a real response from your API so the designer can show you every available field." },
        ],
      },
      {
        title: "Design the layout",
        content: [
          { tag_type: "p", text: "Pick a screen template (Card, Table, Timeline, Approval) and map each API field into a slot." },
        ],
      },
      {
        title: "Preview and save",
        content: [
          { tag_type: "p", text: "The live preview uses the sample data. Save when it looks right." },
        ],
      },
    ],
  },

  {
    tag_type: "h3",
    text: "The Visual Editor",
    selector_uid: "v2_visual_editor",
  },
  {
    tag_type: "p",
    text:
      "The editor is split into three panes: the field palette on the left " +
      "(every field your API returns), the canvas in the middle, and the " +
      "preview on the right. Drag fields into slots, choose UI components from " +
      "a palette, and adjust styling within the guardrails the platform provides.",
  },

  {
    tag_type: "h3",
    text: "The Transformation Wizard",
    selector_uid: "v2_transformation_wizard",
  },
  {
    tag_type: "p",
    text:
      "For APIs that return flat data (like {{ {status: \"ok\", items: [...]} }}), " +
      "the transformation wizard lets you declare how to reshape the response " +
      "before rendering. For example: {{ items → filter where active === true }}, " +
      "or {{ created_at → format as \"dd MMM yyyy\" }}. The transformations are " +
      "declarative and auditable — no scripts.",
  },

  {
    tag_type: "h3",
    text: "Single vs Multiple Screens",
    selector_uid: "v2_single_vs_multiple_screens",
  },
  {
    tag_type: "p",
    text:
      "By default, one API status → one screen. But if your API returns an array " +
      "of items, you can configure the designer to produce multiple screens — one " +
      "per item. This is how an agent that returns a menu shows 40 separate dish " +
      "cards in a smooth carousel without any code.",
  },

  {
    tag_type: "h3",
    text: "Live Preview",
    selector_uid: "v2_live_preview",
  },
  {
    tag_type: "p",
    text:
      "The live preview uses the sample response you pasted. Every change to " +
      "the layout updates in real time. You can toggle dark/light mode and " +
      "simulate mobile vs desktop viewports before saving.",
  },

    {
    tag_type: "h3",
    text: "Saving and Deployment",
    selector_uid: "v2_saving_deployment",
  },
  {
    tag_type: "p",
    text:
      "Saved templates are versioned. When you publish a template, every app " +
      "that has attached the parent API Config immediately uses the new version " +
      "on the next call. If a tenant admin updates a shared template, they see " +
      "a list of every app that's attached to it — the platform blocks the " +
      "update unless the admin confirms they intend every app to inherit the change.",
  },

  {
    tag_type: "callout",
    type: "warning",
    title: "Cross-app template changes",
    children: [
      {
        tag_type: "p",
        text:
          "This is the same fail-hard guard as API configs and chains. If a " +
          "template is attached to 4,000 restaurants and you're about to change " +
          "the copy in the booking-confirmation card, the platform stops you " +
          "and shows the list. You either accept the fan-out or build an " +
          "app-scoped override for the apps that need a different template.",
      },
    ],
  },

  {
    tag_type: "h3",
    text: "Best practices",
    selector_uid: "v2_visual_designer_best_practices",
  },
  {
    tag_type: "ul",
    items: [
      { tag_type: "li", text: "Use a real sample response — not synthetic data — so the preview matches what real users see." },
      { tag_type: "li", text: "Design the error states (400, 404, 409) before shipping the happy path. Users hit error states more than you think." },
      { tag_type: "li", text: "Keep text templates short. The agent's UI is dense; long paragraphs crowd the action buttons." },
      { tag_type: "li", text: "If two APIs return the same shape, build a shared template and attach it from both — do not duplicate the design." },
      { tag_type: "li", text: "Test the mobile viewport. 70% of restaurant staff use tablets in portrait orientation." },
      { tag_type: "li", text: "If a template has been running for 90+ days, review it against current API fields. Old templates quietly render blank slots when the API schema drifts." },
    ],
  },

  {
    tag_type: "h3",
    text: "How this connects to the billing story",
    selector_uid: "v2_visual_designer_billing",
  },
  {
    tag_type: "p",
    text:
      "Every template that renders is one metered event on the parent app. " +
      "Designing 40 templates doesn't change the billing — what matters is how " +
      "many times each template actually renders in front of a user. That's " +
      "why the metering is per-execution, not per-template. A single tenant " +
      "admin can safely build a library of 200 templates for 70,000 restaurants " +
      "without inflating anyone's bill.",
  },
];

export default visualResponseDesignerPayload;