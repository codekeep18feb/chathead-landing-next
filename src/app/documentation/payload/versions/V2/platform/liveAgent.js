export const liveAgent = [
  {
    tag_type: "h3",
    text: "Live Agent",
    selector_uid: "v2_live_agent",
  },
  {
    tag_type: "p",
    text: "The Live Agent feature enables real-time human-to-human chat support, allowing you to interact directly with your website visitors and provide personalized assistance.",
  },

  // ============================================================
  // LIVE AGENT FEATURES (All Settings in Tabs)
  // ============================================================
  {
    tag_type: "h4",
    text: "Live Agent Features",
    selector_uid: "v2_live_agent_features",
  },
  {
    tag_type: "p",
    text: "Configure all aspects of your Live Agent experience including enabling/disabling, user capacity, chat appearance, messaging, and updates.",
  },

  // Use tabs for ALL Live Agent settings
  {
    tag_type: "tabs",
    items: [
      // ========== TAB 1: Site Users & Limits ==========
      {
        label: "👥 Site Users & Limits",
        content: [
          {
            tag_type: "p",
            text: "Site Users represent the total number of unique visitors who can register and interact with your Live Agent. Each registered user consumes one slot from your capacity.",
          },
          {
            tag_type: "h5",
            text: "📊 Understanding Your Capacity",
          },
          {
            tag_type: "table",
            headers: ["Metric", "Description"],
            rows: [
              ["Plan Limit", "Base number of user slots included in your plan"],
              ["Top-ups Added", "Additional slots purchased through top-ups"],
              ["Total Capacity", "Plan Limit + Top-ups Added"],
              ["Available Slots", "Remaining slots available for new users"],
            ],
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Progress bar shows remaining capacity percentage",
              },
              {
                text: "Low capacity warning appears when below 20%",
              },
              {
                text: "Critical warning appears when 0 slots remain",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🔄 How Site Users Work",
            children: [
              {
                tag_type: "p",
                text: "Each unique visitor who registers or starts a chat session consumes one user slot. Slots are not released until the user is explicitly removed or the session expires.",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "👥 Top-Up Options",
          },
          {
            tag_type: "p",
            text: "When you're running low on user slots, you can purchase additional capacity:",
          },
          {
            tag_type: "table",
            headers: ["Slots Added", "Price", "Cost Per Slot"],
            rows: [
              ["+125 Slots", "₹1,500", "~₹12 per slot"],
              ["+250 Slots", "₹3,000", "~₹12 per slot"],
              ["+375 Slots", "₹4,500", "~₹12 per slot"],
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Top-ups are added permanently to your total capacity. Consider purchasing larger packages for better value if you expect high user growth.",
              },
            ],
          },
        ],
      },

      // ========== TAB 2: Chat Opener Styles ==========
      {
        label: "🎨 Chat Opener Styles",
        content: [
          {
            tag_type: "p",
            text: "Customize the appearance of your Live Agent chat opener button to match your brand identity. The style you select will be applied to the chat button on your website.",
          },
          {
            tag_type: "table",
            headers: ["Style Name", "Description", "Best For"],
            rows: [
              ["Default Style", "Clean circular button with icon", "Minimalist designs"],
              ["Gradient Pulse", "Gradient background with pulsing animation", "Modern, eye-catching designs"],
              ["Neomorphic Glass", "Glassmorphism with soft shadows", "Premium, sophisticated brands"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🎯 Visual Preview",
            children: [
              {
                tag_type: "ul",
                items: [
                  {
                    text: "Default Style: Simple, clean, and professional",
                  },
                  {
                    text: "Gradient Pulse: Animated gradient with pulsing effect",
                  },
                  {
                    text: "Neomorphic Glass: Glass-like appearance with soft shadows",
                  },
                ],
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Brand Consistency",
            children: [
              {
                tag_type: "p",
                text: "Choose a style that complements your brand colors and overall design language. The Gradient Pulse style works well for modern, dynamic brands while Neomorphic Glass suits premium, sophisticated aesthetics.",
              },
            ],
          },
        ],
      },

      // ========== TAB 3: Welcome & Offline Messages ==========
      {
        label: "💬 Welcome & Offline Messages",
        content: [
          {
            tag_type: "p",
            text: "Configure the messages that users see when they first open the chat or when agents are unavailable.",
          },
          {
            tag_type: "h5",
            text: "👋 Welcome Message",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Displayed when the chat is first opened",
              },
              {
                text: "Max 50 words recommended",
              },
              {
                text: "Sets the tone for the conversation",
              },
            ],
          },
          {
            tag_type: "code_with_copy",
            code: `Example: "Hello! 👋 How can we help you today? We're here to assist with any questions you may have."`,
            language: "text",
          },
          {
            tag_type: "h5",
            text: "📴 Offline Message",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Displayed when no agents are available",
              },
              {
                text: "Max 30 words recommended",
              },
              {
                text: "Sets expectations for response time",
              },
            ],
          },
          {
            tag_type: "code_with_copy",
            code: `Example: "We're offline right now. 📝 Please leave a message and we'll get back to you within 24 hours."`,
            language: "text",
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Best Practice",
            children: [
              {
                tag_type: "p",
                text: "Keep your welcome message friendly and inviting. Use the offline message to set clear expectations about response times. A warm, professional tone builds trust with your visitors.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Test different message variations to see which ones get the best engagement. Personalize the welcome message with the visitor's name if possible.",
              },
            ],
          },
        ],
      },

      // ========== TAB 4: Enabling Live Agent ==========
      {
        label: "🔘 Enabling Live Agent",
        content: [
          {
            tag_type: "p",
            text: "To enable and configure Live Agent features:",
          },
          {
            tag_type: "steps",
            items: [
              {
                title: "Navigate to Live Agent Settings",
                content: [
                  {
                    tag_type: "p",
                    text: "Go to the Live Agent settings page from the sidebar under Platform → Live Agent.",
                  },
                ],
              },
              {
                title: "Enable Live Agent Features",
                content: [
                  {
                    tag_type: "p",
                    text: "Toggle the 'Live Agent Features' switch to ON. All live agent settings will appear below.",
                  },
                ],
              },
              {
                title: "Configure Your Settings",
                content: [
                  {
                    tag_type: "p",
                    text: "Use the tabs above to configure Site Users & Limits, Chat Opener Styles, and Welcome & Offline Messages.",
                  },
                ],
              },
              {
                title: "Save Changes",
                content: [
                  {
                    tag_type: "p",
                    text: "Click the 'Update Live Agent' button at the bottom of the page to save all changes.",
                  },
                ],
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
                text: "You must have at least one chatbot enabled at all times. The system validates that either AI Chat, QnA (LeadGen) Bot, or Live Agent is active. You cannot disable all chatbots simultaneously.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Quick Start",
            children: [
              {
                tag_type: "p",
                text: "If you're new to Live Agent, start by enabling the feature, then configure your welcome message and choose a chat opener style. You can always come back later to fine-tune other settings.",
              },
            ],
          },
        ],
      },

      // ========== TAB 5: Update Process ==========
      {
        label: "🔄 Update Process",
        content: [
          {
            tag_type: "p",
            text: "When updating Live Agent settings, follow this process to ensure changes are applied correctly:",
          },
          {
            tag_type: "steps",
            items: [
              {
                title: "Make Your Changes",
                content: [
                  {
                    tag_type: "p",
                    text: "Configure your Live Agent settings across the tabs above. All changes are saved locally until you click Update.",
                  },
                ],
              },
              {
                title: "Click Update",
                content: [
                  {
                    tag_type: "p",
                    text: "Click the 'Update Live Agent' button at the bottom of the settings page.",
                  },
                ],
              },
              {
                title: "Review Confirmation",
                content: [
                  {
                    tag_type: "p",
                    text: "A confirmation modal will appear warning that all clients will be rebooted.",
                  },
                ],
              },
              {
                title: "Confirm Changes",
                content: [
                  {
                    tag_type: "p",
                    text: "Click 'Ok' to confirm and apply changes, or 'Cancel' to abort.",
                  },
                ],
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
                text: "Updating Live Agent settings will reboot all active clients to sync the new configuration. Users may experience a brief interruption (1-2 seconds) while the new settings are applied.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "✅ After Update",
            children: [
              {
                tag_type: "ul",
                items: [
                  {
                    text: "All connected clients will receive the new configuration",
                  },
                  {
                    text: "Changes will take effect immediately after reboot",
                  },
                  {
                    text: "New users will see the updated chat experience",
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
            text: "Site Users & Limits → Monitor user capacity and top-up",
          },
          {
            text: "Chat Opener Styles → Customize the chat button appearance",
          },
          {
            text: "Welcome/Offline Messages → Configure user messages",
          },
          {
            text: "Enabling Live Agent → Turn on/off live chat features",
          },
          {
            text: "Update Process → Save and apply changes",
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
    title: "✅ Live Agent Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The Live Agent feature provides real-time human chat support for your website visitors. Enable it to offer personalized assistance and improve customer satisfaction.",
      },
      {
        tag_type: "p",
        text: "Monitor your Site Users capacity regularly and top up when needed to ensure you never run out of slots for new users.",
      },
    ],
  },
];
