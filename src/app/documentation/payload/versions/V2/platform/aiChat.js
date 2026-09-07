export const aiChat = [
  {
    tag_type: "h3",
    text: "AI Chat",
    selector_uid: "v2_ai_chat",
  },
  {
    tag_type: "p",
    text: "The AI Chat feature provides intelligent conversational AI capabilities for your website, enabling automated customer support, lead qualification, and information retrieval using advanced language models.",
  },

  // ============================================================
  // AI CHAT FEATURES (All Settings in Tabs)
  // ============================================================
  {
    tag_type: "h4",
    text: "AI Chat Features",
    selector_uid: "v2_ai_chat_features",
  },
  {
    tag_type: "p",
    text: "Configure all aspects of your AI Chat experience including enabling/disabling, message credits, ingestion storage, data sources, and training.",
  },

  // Use tabs for ALL AI Chat settings
  {
    tag_type: "tabs",
    items: [
      // ========== TAB 1: Enable AI Agent ==========
      {
        label: "🔘 Enable AI Agent",
        content: [
          {
            tag_type: "p",
            text: "The AI Agent bot provides automated conversational AI capabilities for your website visitors.",
          },
          {
            tag_type: "h5",
            text: "How to Enable",
          },
          {
            tag_type: "ol",
            items: [
              {
                text: "Navigate to AI Chat settings from the sidebar",
              },
              {
                text: "Toggle the 'Enable AI Agent Bot' switch to ON",
              },
              {
                text: "All AI agent settings will appear below",
              },
              {
                text: "Configure your data sources and training",
              },
              {
                text: "Click 'Update AI Chat' to save changes",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🤖 What the AI Agent Can Do",
            children: [
              {
                tag_type: "ul",
                items: [
                  {
                    text: "Answer customer questions 24/7",
                  },
                  {
                    text: "Qualify leads through conversation",
                  },
                  {
                    text: "Retrieve information from your knowledge base",
                  },
                  {
                    text: "Escalate complex issues to human agents",
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
        ],
      },

      // ========== TAB 2: AI Message Credits ==========
      {
        label: "🔋 AI Message Credits",
        content: [
          {
            tag_type: "p",
            text: "AI Message Credits are consumed each time the AI Agent responds to a user query. Monitor your usage and top up when needed.",
          },
          {
            tag_type: "h5",
            text: "📊 Understanding Your Credits",
          },
          {
            tag_type: "table",
            headers: ["Metric", "Description"],
            rows: [
              ["Plan Limit", "Base number of messages included in your plan"],
              ["Top-ups Added", "Additional messages purchased through top-ups"],
              ["Total Capacity", "Plan Limit + Top-ups Added"],
              ["Available Credits", "Remaining credits available for AI responses"],
            ],
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Each AI response consumes 1 credit",
              },
              {
                text: "Progress bar shows remaining capacity percentage",
              },
              {
                text: "Low credit warning appears when below 20%",
              },
              {
                text: "Critical warning appears when 0 credits remain",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "⚡ Top-Up Options",
          },
          {
            tag_type: "p",
            text: "When you're running low on AI message credits, you can purchase additional capacity:",
          },
          {
            tag_type: "table",
            headers: ["Messages Added", "Price", "Cost Per Message"],
            rows: [
              ["+750 Messages", "₹1,500", "~₹2 per message"],
              ["+1,500 Messages", "₹3,000", "~₹2 per message"],
              ["+2,250 Messages", "₹4,500", "~₹2 per message"],
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "Monitor your AI message usage regularly to avoid service interruption. Top-ups are permanent additions to your total capacity.",
              },
            ],
          },
        ],
      },

      // ========== TAB 3: Ingestion Storage ==========
      {
        label: "📦 Ingestion Storage",
        content: [
          {
            tag_type: "p",
            text: "Ingestion Storage represents the total space available for storing your AI training documents, URLs, and sitemap data.",
          },
          {
            tag_type: "h5",
            text: "📊 Understanding Your Storage",
          },
          {
            tag_type: "table",
            headers: ["Metric", "Description"],
            rows: [
              ["Plan Limit", "Base storage included in your plan"],
              ["Top-ups Added", "Additional storage purchased through top-ups"],
              ["Total Capacity", "Plan Limit + Top-ups Added"],
              ["Available Storage", "Remaining space for new documents"],
            ],
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Each KB of documents consumes storage space",
              },
              {
                text: "Progress bar shows remaining capacity percentage",
              },
              {
                text: "Low storage warning appears when below 20%",
              },
              {
                text: "Critical warning appears when 0 storage remains",
              },
            ],
          },
          {
            tag_type: "h5",
            text: "⚡ Top-Up Options",
          },
          {
            tag_type: "p",
            text: "When you're running low on storage, you can purchase additional capacity:",
          },
          {
            tag_type: "table",
            headers: ["Storage Added", "Price", "Cost Per KB"],
            rows: [
              ["+250,000 KB", "₹1,500", "~₹0.006 per KB"],
              ["+500,000 KB", "₹3,000", "~₹0.006 per KB"],
              ["+750,000 KB", "₹4,500", "~₹0.006 per KB"],
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Pro Tip",
            children: [
              {
                tag_type: "p",
                text: "For large-scale knowledge bases, consider optimizing your documents to reduce storage usage. Remove redundant or outdated content regularly.",
              },
            ],
          },
        ],
      },

      // ========== TAB 4: Product Information ==========
      {
        label: "📦 Product Information",
        content: [
          {
            tag_type: "p",
            text: "Provide information about your product to help the AI Agent understand your business better. This context improves response quality and relevance.",
          },
          {
            tag_type: "h5",
            text: "📝 Required Information",
          },
          {
            tag_type: "table",
            headers: ["Field", "Description", "Example"],
            rows: [
              ["Bot Name", "The name that will appear as your bot's display name", "SupportBot, AssistantPro"],
              ["Bot Context", "Description of your bot's purpose and capabilities", "Helps customers with product inquiries, order tracking, and troubleshooting"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🤖 Why This Matters",
            children: [
              {
                tag_type: "p",
                text: "The product information provides critical context for the AI Agent. It helps the model understand your business domain, tone, and user expectations.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Required for Training",
            children: [
              {
                tag_type: "p",
                text: "Product Information is required before training the AI Agent. You'll be prompted to fill this in when you attempt to retrain without it.",
              },
            ],
          },
          {
            tag_type: "mesgTip",
            title: "💡 Best Practice",
            children: [
              {
                tag_type: "p",
                text: "Keep your bot context concise but informative. Include key differentiators, target audience, and primary use cases. This helps the AI Agent provide more relevant responses.",
              },
            ],
          },
        ],
      },

      // ========== TAB 5: Data Sources ==========
      {
        label: "📂 Data Sources",
        content: [
          {
            tag_type: "p",
            text: "Configure the data sources that the AI Agent will use to answer user queries. You can upload files, add URLs, and configure sitemaps.",
          },

          {
            tag_type: "h5",
            text: "📁 Files",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Upload documents, PDFs, and text files",
              },
              {
                text: "Support for multiple file uploads",
              },
              {
                text: "Force Reingest option for updating existing files",
              },
              {
                text: "Force Delete option for removing ingested content",
              },
            ],
          },

          {
            tag_type: "h5",
            text: "🌐 URLs",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Add website URLs for crawling",
              },
              {
                text: "Allow Nested URLs to follow links within pages",
              },
              {
                text: "Explore Clickables to find content hidden behind interactions",
              },
              {
                text: "Force Reingest option for updating existing URLs",
              },
              {
                text: "Force Delete option for removing ingested content",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "🔍 Explore Clickables Explained",
            children: [
              {
                tag_type: "p",
                text: "Explore Clickables goes through all clickable elements on your pages (tabs, accordions, dropdowns, etc.) to find meaningful content that might not be visible at first glance.",
              },
            ],
          },

          {
            tag_type: "h5",
            text: "🗺️ Sitemap",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Upload sitemap XML for bulk URL ingestion",
              },
              {
                text: "📌 Coming Soon - This feature is under development",
              },
            ],
          },

          {
            tag_type: "callout",
            type: "warning",
            title: "⚠️ Data Source Status",
            children: [
              {
                tag_type: "p",
                text: "Ingested files and URLs will show their status (Success/Failed). Failed items can be reviewed and retried.",
              },
            ],
          },
        ],
      },

      // ========== TAB 6: Retraining Process ==========
      {
        label: "🔄 Retraining Process",
        content: [
          {
            tag_type: "p",
            text: "Retraining updates the AI Agent's knowledge base with your latest data sources. Follow this process to ensure successful training:",
          },
          {
            tag_type: "steps",
            items: [
              {
                title: "Prepare Your Data Sources",
                content: [
                  {
                    tag_type: "p",
                    text: "Add files, URLs, or sitemaps to the Data Sources section. Ensure all URLs are valid and files are properly formatted.",
                  },
                ],
              },
              {
                title: "Configure Options",
                content: [
                  {
                    tag_type: "p",
                    text: "Set Allow Nested URLs and Explore Clickables as needed. Use Force Reingest for updated content and Force Delete for content to remove.",
                  },
                ],
              },
              {
                title: "Click Retrain",
                content: [
                  {
                    tag_type: "p",
                    text: "Click the 'Retrain' button to prepare the training data. The button will show 'Ready to Train' when data is prepared.",
                  },
                ],
              },
              {
                title: "Update AI Chat",
                content: [
                  {
                    tag_type: "p",
                    text: "Click 'Update AI Chat' at the bottom of the page to save changes and start training in the background.",
                  },
                ],
              },
              {
                title: "Monitor Training Status",
                content: [
                  {
                    tag_type: "p",
                    text: "The AI Agent will show 'Training...' status while training is in progress. You'll receive a notification when training is complete.",
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
                text: "Updating AI Chat settings will reboot all active clients to sync the new configuration. Training continues in the background.",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "✅ After Training",
            children: [
              {
                tag_type: "ul",
                items: [
                  {
                    text: "The AI Agent will use the latest data sources",
                  },
                  {
                    text: "Failed URLs and files can be reviewed and retried",
                  },
                  {
                    text: "Data IDs for each ingested item are available for reference",
                  },
                ],
              },
            ],
          },
        ],
      },

      // ========== TAB 7: Update Process ==========
      {
        label: "🔄 Update Process",
        content: [
          {
            tag_type: "p",
            text: "When updating AI Chat settings, follow this process to ensure changes are applied correctly:",
          },
          {
            tag_type: "steps",
            items: [
              {
                title: "Make Your Changes",
                content: [
                  {
                    tag_type: "p",
                    text: "Configure your AI Chat settings across the tabs above. All changes are saved locally until you click Update.",
                  },
                ],
              },
              {
                title: "Click Update",
                content: [
                  {
                    tag_type: "p",
                    text: "Click the 'Update AI Chat' button at the bottom of the settings page.",
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
                text: "Updating AI Chat settings will reboot all active clients to sync the new configuration. Users may experience a brief interruption (1-2 seconds) while the new settings are applied.",
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
                    text: "Training will continue in the background if initiated",
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
        tag_type: "ul",
        items: [
          {
            text: "Enable AI Agent → Turn on/off AI chat features",
          },
          {
            text: "AI Message Credits → Monitor usage and top-up",
          },
          {
            text: "Ingestion Storage → Manage storage capacity",
          },
          {
            text: "Product Information → Provide bot context",
          },
          {
            text: "Data Sources → Add files, URLs, and sitemaps",
          },
          {
            text: "Retraining Process → Update AI knowledge base",
          },
          {
            text: "Update → Save and apply changes",
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
    title: "✅ AI Chat Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The AI Chat feature provides intelligent conversational AI for your website. Enable it to automate customer support, qualify leads, and provide 24/7 assistance.",
      },
      {
        tag_type: "p",
        text: "Monitor your AI message credits and ingestion storage regularly. Top up when needed and retrain your AI Agent with fresh data to keep responses accurate and relevant.",
      },
    ],
  },
];
