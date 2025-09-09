// Example payload with additional tags and Lorem Ipsum content
const payload = {
  V1: [
    {
      tag_type: "h2",
      text: "Instant Auth + Chat [V1]",
    },
    {
      tag_type: "p",
      text: "This chat application solution is designed for simple websites built with HTML, JavaScript, and CSS, typically informational sites. It's ideal for products lacking built-in authentication that require seamless integration of both authentication and chat functionality.",
    },
  ],

  V2: [
    {
      tag_type: "h2",
      text: `BYO (Bring Your Own) Auth  +  Chat  [V2]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for complex sites or apps built with JavaScript on both the client and server sides. It is ideal for products that already have built-in authentication and are looking to seamlessly integrate robust chat functionality.`,
    },
  ],
  V3: [
    {
      tag_type: "h2",
      text: `CMS-Ready Chat (Wordpress) [V3]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for Wordpress using native wp authentication. It is ideal for products that already have built-in authentication probably using some plugin and are looking to seamlessly integrate robust chat functionality.`,
    },

    {
      tag_type: "div",
      children: [
        {
          tag_type: "h2",
          text: "Project Setup",
          selector_uid: "v3_client_integration",
        },

      ],
    },
  ],
  V4: [
    {
      tag_type: "h2",
      text: `No Auth  but  Chat  [V4]`,
    },
    {
      tag_type: "p",
      text: `This chat application is designed specifically for complex sites or apps have no built-in authentication and niether want one but chat functionality only.`,
    },
  ],
};
export default payload;
