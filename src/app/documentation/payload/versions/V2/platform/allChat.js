export const allChat = [
  {
    tag_type: "h3",
    text: "All Chat",
    selector_uid: "v2_all_chat",
  },
  {
    tag_type: "p",
    text: "The All Chat feature provides a comprehensive real-time messaging interface for agents to communicate with site visitors, manage conversations, and provide support across all applications.",
  },

  // ============================================================
  // ALL CHAT FEATURES (All Settings in Tabs)
  // ============================================================
  {
    tag_type: "h4",
    text: "All Chat Features",
    selector_uid: "v2_all_chat_features",
  },
  {
    tag_type: "p",
    text: "The All Chat interface provides a complete messaging solution for support agents, including user management, real-time messaging, file sharing, and conversation history.",
  },

  // Use tabs for ALL All Chat settings
  {
    tag_type: "tabs",
    items: [
      // ========== TAB 1: Chat Interface Overview ==========
      {
        label: "💬 Chat Interface Overview",
        content: [
          {
            tag_type: "p",
            text: "The All Chat interface is divided into two main sections: the left sidebar showing all users and the right panel displaying the active conversation.",
          },
          {
            tag_type: "h5",
            text: "📱 Interface Layout",
          },
          {
            tag_type: "table",
            headers: ["Section", "Description", "Key Features"],
            rows: [
              [
                "Left Sidebar",
                "Displays all users across all applications",
                "User list, online status, unread counts, app grouping",
              ],
              [
                "Right Panel",
                "Shows the active conversation",
                "Message history, typing indicator, message input, file upload",
              ],
            ],
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Users are grouped by application for easy navigation",
              },
              {
                text: "Each user shows their name, online status, and unread message count",
              },
              {
                text: "Click on a user to open the conversation",
              },
              {
                text: "The chat header displays the user's name and online status",
              },
            ],
          },
          {
            tag_type: "img",
            src: "/Asset/all_chat_interface.png",
            alt: "All Chat Interface Overview",
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Quick Navigation",
            children: [
              {
                tag_type: "p",
                text: "Use the 'Back to Users' button in the chat header to return to the user list. The 'Refresh' button at the top reloads the entire user list.",
              },
            ],
          },
        ],
      },

      // ========== TAB 2: User List & Management ==========
      {
        label: "👥 User List & Management",
        content: [
          {
            tag_type: "p",
            text: "The left sidebar displays all users who have signed up or started conversations across your applications.",
          },
          {
            tag_type: "h5",
            text: "📋 User List Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Users are grouped by application name",
              },
              {
                text: "Each user shows their full name or UID",
              },
              {
                text: "Online status indicator (green = online, yellow = away, white = offline)",
              },
              {
                text: "Unread message count badge",
              },
              {
                text: "'New' tag for recently joined users",
              },
              {
                text: "Typing indicator when user is typing",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "🔘 User Actions",
          },
          {
            tag_type: "table",
            headers: ["Action", "Description", "When Available"],
            rows: [
              ["View", "Open conversation with the user", "Always"],
              ["Join", "Accept a pending join request", "When user has requested connection"],
              ["Disconnect", "End the current connection", "When user is connected to you"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📌 Multi-Admin Support",
            children: [
              {
                tag_type: "p",
                text: "When Multi-Admin is enabled, you'll see Join/Disconnect buttons for managing user connections. This allows multiple agents to handle support requests.",
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
                text: "Users who are online will automatically move to the top of the list, making it easier to prioritize active conversations.",
              },
            ],
          },
        ],
      },

      // ========== TAB 3: Sending Messages ==========
      {
        label: "✉️ Sending Messages",
        content: [
          {
            tag_type: "p",
            text: "The message input area at the bottom of the chat panel allows you to send text messages to users.",
          },
          {
            tag_type: "h5",
            text: "📝 Message Input Features",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Type your message in the input box",
              },
              {
                text: "Press 'Enter' to send (like WhatsApp)",
              },
              {
                text: "Press 'Shift + Enter' for new line",
              },
              {
                text: "Message status: Sent → Delivered → Read",
              },
              {
                text: "Typing indicator shows when the user is typing",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "🔔 Message Status Indicators",
          },
          {
            tag_type: "table",
            headers: ["Status", "Icon", "Description"],
            rows: [
              ["Sent", "✓", "Message sent to server"],
              ["Delivered", "✓✓", "Message delivered to user's device"],
              ["Read", "✓✓ (Green)", "Message has been read by the user"],
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Connection Check",
            children: [
              {
                tag_type: "p",
                text: "If Multi-Admin is enabled, the system checks if the user is connected with another agent. If so, you'll see a warning that the user is already connected with someone else.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Keyboard Shortcut",
            children: [
              {
                tag_type: "p",
                text: "Press 'Enter' to send messages quickly. This works like WhatsApp and other popular messaging apps for a familiar experience.",
              },
            ],
          },
        ],
      },

      // ========== TAB 4: File & Media Sharing ==========
      {
        label: "📎 File & Media Sharing",
        content: [
          {
            tag_type: "p",
            text: "The All Chat interface supports file and media sharing, allowing you to send images, documents, and other files to users.",
          },
          {
            tag_type: "h5",
            text: "📤 Supported File Types",
          },
          {
            tag_type: "table",
            headers: ["File Type", "Display", "Features"],
            rows: [
              ["Images", "Thumbnail preview", "Click to view in new tab"],
              ["PDFs", "Document icon with filename", "Click to download/view"],
              ["Other Files", "File name display", "Download available"],
            ],
          },
          {
            tag_type: "h5",
            text: "📤 How to Share Files",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Click the attachment button (📎) in the message input area",
              },
              {
                text: "Select one or more files to upload",
              },
              {
                text: "The input area changes to show file previews",
              },
              {
                text: "Click 'Proceed Upload' to send the files",
              },
              {
                text: "Files appear in the chat with previews",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📸 Image Preview",
            children: [
              {
                tag_type: "p",
                text: "Images are displayed as thumbnails in the chat. Click on an image to open it in a new tab for full-size viewing.",
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
                text: "You can share multiple files at once. The system will upload them and display them in the conversation.",
              },
            ],
          },
        ],
      },

      // ========== TAB 5: Message Reactions ==========
      {
        label: "👍 Message Reactions",
        content: [
          {
            tag_type: "p",
            text: "Message reactions allow you to respond to messages with emojis, similar to Slack or WhatsApp.",
          },
          {
            tag_type: "h5",
            text: "😊 Available Reactions",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "👍 Thumbs Up",
              },
              {
                text: "❤️ Heart",
              },
              {
                text: "😂 Laughing",
              },
              {
                text: "😮 Surprised",
              },
              {
                text: "😢 Sad",
              },
              {
                text: "👏 Clapping",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "📋 How to Use Reactions",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Hover over a message to reveal the reaction button (☺)",
              },
              {
                text: "Click the reaction button to open the emoji picker",
              },
              {
                text: "Select an emoji to react to the message",
              },
              {
                text: "The reaction appears below the message",
              },
              {
                text: "Clicking the reaction button again allows you to change or remove the reaction",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Reaction Visibility",
            children: [
              {
                tag_type: "p",
                text: "Reactions are visible to both the agent and the user. They provide quick feedback without sending a separate message.",
              },
            ],
          },
        ],
      },

      // ========== TAB 6: Reply & Edit Messages ==========
      {
        label: "✏️ Reply & Edit Messages",
        content: [
          {
            tag_type: "p",
            text: "The All Chat interface supports replying to specific messages and editing sent messages.",
          },
          {
            tag_type: "h5",
            text: "↩️ Reply to a Message",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Hover over a message to reveal the dropdown menu (▼)",
              },
              {
                text: "Click 'Reply' from the dropdown",
              },
              {
                text: "The message input area shows the message you're replying to",
              },
              {
                text: "Type your reply and press Enter or click Send",
              },
              {
                text: "The reply appears with a reference to the original message",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "✏️ Edit a Sent Message",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Hover over your sent message to reveal the dropdown menu (▼)",
              },
              {
                text: "Click 'Edit' from the dropdown",
              },
              {
                text: "A popup appears with the current message text",
              },
              {
                text: "Edit the text and click 'Send'",
              },
              {
                text: "The message is updated for both parties",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Edit Limitations",
            children: [
              {
                tag_type: "p",
                text: "You can only edit messages that you have sent. The edit function is not available for messages from other users.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Use the Reply feature to keep conversations organized. It's especially useful in busy chats where multiple topics are being discussed.",
              },
            ],
          },
        ],
      },

      // ========== TAB 7: Session Management ==========
      // {
      //   label: "🔐 Session Management",
      //   content: [
      //     {
      //       tag_type: "p",
      //       text: "Session Management allows you to maintain conversation context across page refreshes and multiple support agents.",
      //     },
      //     {
      //       tag_type: "h5",
      //       text: "🔄 What Sessions Enable",
      //     },
      //     {
      //       tag_type: "ul",
      //       items: [
      //         {
      //           text: "Chat history persists across page refreshes",
      //         },
      //         {
      //           text: "Multiple agents can access the same conversation",
      //         },
      //         {
      //           text: "Users can reconnect to their active session",
      //         },
      //         {
      //           text: "Conversation context is maintained",
      //         },
      //       ],
      //     },
      //     {
      //       tag_type: "h5",
      //       text: "📋 Session Indicators",
      //     },
      //     {
      //       tag_type: "ul",
      //       items: [
      //         {
      //           text: "Session ID displayed in the chat interface",
      //         },
      //         {
      //           text: "Read-only mode when viewing historical sessions",
      //         },
      //         {
      //           text: "Active session indicator for the current conversation",
      //         },
      //       ],
      //     },
      //     {
      //       tag_type: "callout",
      //       type: "info",
      //       title: "📌 When Sessions Are Used",
      //       children: [
      //         {
      //           tag_type: "p",
      //           text: "Sessions are automatically created when a user starts a conversation. They allow the user to return to the same conversation even after leaving the page.",
      //         },
      //       ],
      //     },
      //     {
      //       tag_type: "callout",
      //       type: "success",
      //       title: "💡 Pro Tip",
      //       children: [
      //         {
      //           tag_type: "p",
      //           text: "Session-based chats are ideal for support scenarios where users might need to continue a conversation after navigating away from the page.",
      //         },
      //       ],
      //     },
      //   ],
      // },

      // ========== TAB 8: Multi-Region Support ==========
      {
        label: "🌐 Multi-Region Support",
        content: [
          {
            tag_type: "p",
            text: "The All Chat system supports multiple regions, allowing you to manage users from different geographical locations.",
          },
          {
            tag_type: "h5",
            text: "📍 Supported Regions",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "US (us-east-1) - Displayed as 'us' in the sidebar",
              },
              {
                text: "IN (ap-south-1) - Displayed as 'in' in the sidebar",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "🔄 How Multi-Region Works",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Users are grouped by their region",
              },
              {
                text: "Region headers show 'us' or 'in' above the user list",
              },
              {
                text: "Messages are routed through the appropriate regional servers",
              },
              {
                text: "Real-time communication works across regions",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📌 Why Multi-Region",
            children: [
              {
                tag_type: "p",
                text: "Multi-region support ensures low latency for users in different parts of the world. Users connect to the nearest server for optimal performance.",
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
        tag_type: "ul",
        items: [
          {
            text: "Chat Interface → Understand the layout and navigation",
          },
          {
            text: "User List → Manage and view all users",
          },
          {
            text: "Sending Messages → Send and track message status",
          },
          {
            text: "File Sharing → Share images and documents",
          },
          {
            text: "Message Reactions → React to messages with emojis",
          },
          {
            text: "Reply & Edit → Reply to or edit existing messages",
          },
           {
            text: "Multi-Region → Support for different regions",
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
    title: "✅ All Chat Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The All Chat feature provides a complete real-time messaging solution for support agents. It includes user management, file sharing, message reactions.",
      },
      {
        tag_type: "p",
        text: "Use the All Chat interface to manage all your support conversations in one place, across all applications and regions.",
      },
    ],
  },
];
