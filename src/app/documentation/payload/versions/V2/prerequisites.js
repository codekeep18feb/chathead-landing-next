export const prerequisites = [
  {
    tag_type: "div",
    children: [
      {
        tag_type: "h3",
        text: "Prerequisite",
        selector_uid: "v2_prerequisites",
      },
      {
        tag_type: "ol",
        items: [
          {
            text: "Sign up / log in to your Sageion account.",
          },
          {
            tag_type: "li",
            text: "Create a New App and select Version V2 during setup.",
          },
          {
            tag_type: "li",
            text: "Enable at least one of the three AI bots — [[FAQ/QNA Tree]], [[AI Chat]], or [[Live Agent]]. An app cannot be created without one.",
          },
          {
            tag_type: "li",
            text: "Open the App Details page and note your: App Name, API Key, and Region (US or IN).",
          },
        ],
      },
      {
        tag_type: "callout",
        type: "info",
        title: "You can change these later",
        children: [
          {
            tag_type: "p",
            text: "Bots, settings, and theme are all editable from the App Details page after creation. Pick whatever makes sense to start with.",
          },
        ],
      },
    ],
  },
];