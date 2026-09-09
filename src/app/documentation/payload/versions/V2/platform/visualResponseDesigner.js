export const visualResponseDesigner = [
  {
    tag_type: "h3",
    text: "Visual Response Designer",
    selector_uid: "v2_visual_response_designer",
  },
  {
    tag_type: "p",
    text: "The Visual Response Designer is a powerful no-code tool that lets you design exactly how your AI responses appear to users. Build stunning, interactive screens without writing a single line of code.",
  },

  // ============================================================
  // WHAT IS THE VISUAL RESPONSE DESIGNER?
  // ============================================================
  {
    tag_type: "h4",
    text: "What is the Visual Response Designer?",
    selector_uid: "v2_what_is_visual_designer",
  },
  {
    tag_type: "p",
    text: "The Visual Response Designer is a drag-and-drop interface that transforms raw API responses into beautiful, user-friendly messages. It's designed for product managers, support teams, and developers who want full control over their chat experience without writing code.",
  },
  {
    tag_type: "callout",
    type: "info",
    title: "💡 Why Use the Visual Response Designer?",
    children: [
      {
        tag_type: "ul",
        items: [
          {
            text: "✅ No coding required — design visually, just like building a slide",
          },
          {
            text: "✅ See exactly what your users will see, in real-time",
          },
          {
            text: "✅ Transform data into tables, cards, lists, and styled text with one click",
          },
          {
            text: "✅ Perfect for customer support teams, product managers, and non-technical users",
          },
        ],
      },
    ],
  },

  // ============================================================
  // KEY CONCEPTS
  // ============================================================
  {
    tag_type: "h4",
    text: "Key Concepts",
    selector_uid: "v2_visual_designer_concepts",
  },
  {
    tag_type: "p",
    text: "Understanding these core concepts will help you get started quickly:",
  },
  {
    tag_type: "h5",
    text: "📄 Screen",
  },
  {
    tag_type: "p",
    text: "A Screen is what your users see in the chat. Each screen can display different information. You can create:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "Single Screen: All data appears on one screen (perfect for simple responses)",
      },
      {
        text: "Multiple Screens: Each data item appears on its own screen (great for lists, search results, or multi-item responses)",
      },
    ],
  },
  {
    tag_type: "h5",
    text: "📋 Template",
  },
  {
    tag_type: "p",
    text: "A Template is the design of your response. It defines what information appears and how it's organized. Think of it like a slide design in PowerPoint — you design once, and it works for all your data.",
  },
  {
    tag_type: "h5",
    text: "🔄 Transformations",
  },
  {
    tag_type: "p",
    text: "Transformations are visual enhancements you can apply to your design with one click:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "📊 Table View — Show data in a clean, organized table",
      },
      {
        text: "🃏 Card View — Display each item as a beautiful card",
      },
      {
        text: "📋 List View — Show items in a simple list format",
      },
      {
        text: "🎨 Style Transformations — Highlight, bold, italicize, or underline text",
      },
    ],
  },

  // ============================================================
  // GETTING STARTED
  // ============================================================
  {
    tag_type: "h4",
    text: "Getting Started",
    selector_uid: "v2_visual_designer_getting_started",
  },
  {
    tag_type: "p",
    text: "Follow these steps to create your first visual response:",
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Step 1: Paste Your Sample Response",
        content: [
          {
            tag_type: "p",
            text: "Copy a sample JSON response from your API and paste it into the 'Sample Response' area. This gives the designer an example of your data structure.",
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Tip",
            children: [
              {
                tag_type: "p",
                text: "Use a real response from your API to see exactly how your data will appear. The designer automatically generates a starting template from your sample.",
              },
            ],
          },
        ],
      },
      {
        title: "Step 2: Click 'Render Preview'",
        content: [
          {
            tag_type: "p",
            text: "This generates a visual preview of your response. You'll see how your data looks and can start designing.",
          },
        ],
      },
      {
        title: "Step 3: Open the Visual Editor",
        content: [
          {
            tag_type: "p",
            text: "Click 'Open Editor' to access the visual design interface. Here you can:",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Drag rows to reorder content",
              },
              {
                text: "Edit text directly inline",
              },
              {
                text: "Add custom messages",
              },
              {
                text: "Insert dynamic data fields",
              },
            ],
          },
        ],
      },
      {
        title: "Step 4: Apply Transformations",
        content: [
          {
            tag_type: "p",
            text: "Use the 'Start Wizard' button to transform your design:",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Structure — Convert to Table, Cards, or List view",
              },
              {
                text: "Media — Turn image URLs into actual pictures",
              },
              {
                text: "Styles — Apply colors, bold, italic, and alignment",
              },
            ],
          },
        ],
      },
      {
        title: "Step 5: Save Your Design",
        content: [
          {
            tag_type: "p",
            text: "Click 'Use Template' or 'Save Configuration' to save your visual design. It's now ready for your users!",
          },
        ],
      },
    ],
  },

  // ============================================================
  // THE VISUAL EDITOR
  // ============================================================
  {
    tag_type: "h4",
    text: "The Visual Editor",
    selector_uid: "v2_visual_editor",
  },
  {
    tag_type: "p",
    text: "The Visual Editor is where you design your responses. It's designed to be intuitive and powerful, like a slide editor:",
  },
  {
    tag_type: "h5",
    text: "🖱️ Drag & Drop Reordering",
  },
  {
    tag_type: "p",
    text: "Simply drag any row up or down to change the order of content. Your changes are reflected instantly in the preview.",
  },
  {
    tag_type: "h5",
    text: "✏️ Inline Editing",
  },
  {
    tag_type: "p",
    text: "Click the ✎ icon on any row to edit its content directly. You can:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "Change text labels",
      },
      {
        text: "Add custom messages",
      },
      {
        text: "Insert dynamic data using the @ menu",
      },
    ],
  },
  {
    tag_type: "h5",
    text: "➕ Add Buttons & Button Groups",
  },
  {
    tag_type: "p",
    text: "Add interactive elements to your responses:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "Single Buttons — Perfect for simple actions like 'Book Now' or 'Learn More'",
      },
      {
        text: "Button Groups — Multiple buttons in a row for related actions",
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
        text: "Use Button Groups to offer users choices. Each button can trigger different actions, like 'View Details', 'Book Now', or 'Contact Support'.",
      },
    ],
  },

  // ============================================================
  // THE TRANSFORMATION WIZARD
  // ============================================================
  {
    tag_type: "h4",
    text: "The Transformation Wizard",
    selector_uid: "v2_transformation_wizard",
  },
  {
    tag_type: "p",
    text: "The Transformation Wizard is your creative toolkit for enhancing responses. It walks you through three steps:",
  },

  {
    tag_type: "tabs",
    items: [
      {
        label: "📐 Structural Transformations",
        content: [
          {
            tag_type: "p",
            text: "Change how your data is organized and displayed:",
          },
          {
            tag_type: "table",
            headers: ["Transformation", "What It Does", "Best For"],
            rows: [
              ["📊 Table View", "Organizes data into a clean table with headers and rows", "Comparing multiple items, structured data"],
              ["🃏 Card View", "Shows each item as a separate card with a title and details", "Profiles, product listings, individual records"],
              ["📋 List View", "Simple list format with each item on a new line", "Quick overviews, short lists"],
              ["📝 JSON View", "Shows the raw data structure", "Debugging and technical reviews"],
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "💡 Card View Options",
            children: [
              {
                tag_type: "p",
                text: "Card View can be displayed vertically (scrolling down) or horizontally (scrolling sideways). Choose the direction that best fits your content.",
              },
            ],
          },
        ],
      },
      {
        label: "🖼️ Media Transformations",
        content: [
          {
            tag_type: "p",
            text: "Transform image URLs into actual pictures users can see:",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "Select any image URL in your design",
              },
              {
                text: "Click 'Render Images' to convert URLs to images",
              },
              {
                text: "Adjust image size (width and height)",
              },
              {
                text: "Toggle aspect ratio preservation",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "info",
            title: "📸 Image Rendering",
            children: [
              {
                tag_type: "p",
                text: "Images are rendered directly in the chat response. Users can click on images to view them full-size.",
              },
            ],
          },
        ],
      },
      {
        label: "🎨 Style Transformations",
        content: [
          {
            tag_type: "p",
            text: "Apply visual styles to make your content stand out:",
          },
          {
            tag_type: "table",
            headers: ["Style", "Effect", "Use Case"],
            rows: [
              ["✨ Highlight", "Adds a yellow highlight background", "Drawing attention to important info"],
              ["𝐁 Bold", "Makes text bold", "Emphasizing key points"],
              ["𝐼 Italic", "Makes text italic", "Quotes, subtle emphasis"],
              ["U̲ Underline", "Underlines text", "Links, important phrases"],
              ["S̶t̶r̶i̶k̶e̶", "Strikes through text", "Completed items, deleted content"],
            ],
          },
          {
            tag_type: "h5",
            text: "Text Alignment",
          },
          {
            tag_type: "ul",
            items: [
              {
                text: "⬅️ Left — Default alignment for most content",
              },
              {
                text: "⬛ Center — Perfect for titles and announcements",
              },
              {
                text: "➡️ Right — Good for numbers and dates",
              },
            ],
          },
          {
            tag_type: "callout",
            type: "success",
            title: "💡 Combine Styles",
            children: [
              {
                tag_type: "p",
                text: "You can apply multiple styles at once! For example, highlight + bold makes important information really stand out.",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // SINGLE SCREEN VS MULTIPLE SCREENS
  // ============================================================
  {
    tag_type: "h4",
    text: "Single Screen vs Multiple Screens",
    selector_uid: "v2_single_vs_multiple_screens",
  },
  {
    tag_type: "p",
    text: "The Visual Response Designer automatically detects your data structure and suggests the best layout:",
  },

  {
    tag_type: "table",
    headers: ["Layout Type", "When It's Used", "What Users See", "Example"],
    rows: [
      [
        "Single Screen",
        "Your data has a single item or metadata with arrays",
        "All information on one screen",
        "A hotel booking confirmation with guest details",
      ],
      [
        "Multiple Screens",
        "Your data has a list of items at the root or in an array",
        "Each item appears on its own screen",
        "A list of available rooms, each with its own screen",
      ],
    ],
  },

  {
    tag_type: "callout",
    type: "info",
    title: "💡 How It Works",
    children: [
      {
        tag_type: "p",
        text: "The designer analyzes your data structure automatically. If you have a list of items, you'll get multiple screens. If you have a single object, you'll get a single screen. You can always adjust the design manually.",
      },
    ],
  },

  // ============================================================
  // LIVE PREVIEW
  // ============================================================
  {
    tag_type: "h4",
    text: "Live Preview",
    selector_uid: "v2_live_preview",
  },
  {
    tag_type: "p",
    text: "The Visual Response Designer shows you exactly what your users will see, updated in real-time as you design:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "👁️ See your changes instantly — no refresh needed",
      },
      {
        text: "📱 Preview in Desktop or Mobile view",
      },
      {
        text: "🔄 See how your design looks with different data",
      },
      {
        text: "✅ Ensure everything looks perfect before saving",
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
        text: "Use the Desktop/Mobile toggle to test how your design looks on different devices. This ensures a great experience for all users.",
      },
    ],
  },

  // ============================================================
  // SAVING & DEPLOYMENT
  // ============================================================
  {
    tag_type: "h4",
    text: "Saving & Deployment",
    selector_uid: "v2_saving_deployment",
  },
  {
    tag_type: "p",
    text: "Once your design is ready, saving it is simple:",
  },
  {
    tag_type: "steps",
    items: [
      {
        title: "Review Your Design",
        content: [
          {
            tag_type: "p",
            text: "Check the preview to ensure everything looks perfect.",
          },
        ],
      },
      {
        title: "Click 'Use Template'",
        content: [
          {
            tag_type: "p",
            text: "This saves your design to the configuration. If you're in the standalone tool, click 'Save Configuration'.",
          },
        ],
      },
      {
        title: "Deploy to Users",
        content: [
          {
            tag_type: "p",
            text: "Your visual design is now live! Users will see the beautiful, professional responses you've created.",
          },
        ],
      },
    ],
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "⚠️ Important",
    children: [
      {
        tag_type: "p",
        text: "When you save a design, all active clients (users) will be updated automatically to see the new response format.",
      },
    ],
  },

  // ============================================================
  // BEST PRACTICES
  // ============================================================
  {
    tag_type: "h4",
    text: "Best Practices",
    selector_uid: "v2_visual_designer_best_practices",
  },
  {
    tag_type: "p",
    text: "Follow these tips to create the best user experience:",
  },
  {
    tag_type: "ul",
    items: [
      {
        text: "💡 Start simple — begin with a basic design and add complexity gradually",
      },
      {
        text: "📱 Test on mobile — always preview your design in mobile view",
      },
      {
        text: "🎯 Be consistent — use similar styles across all responses for brand coherence",
      },
      {
        text: "📊 Use Card View for multi-item responses to improve readability",
      },
      {
        text: "🎨 Apply styles sparingly — highlight only what's truly important",
      },
      {
        text: "🔘 Use buttons to guide users to the next action",
      },
    ],
  },

  // ============================================================
  // SUMMARY
  // ============================================================
  {
    tag_type: "callout",
    type: "success",
    title: "✅ Visual Response Designer Overview Complete",
    children: [
      {
        tag_type: "p",
        text: "The Visual Response Designer is a no-code tool that empowers you to create beautiful, professional responses without writing code. Whether you're a product manager, support lead, or developer, you can design exactly what users see in the chat.",
      },
      {
        tag_type: "p",
        text: "Start with your sample data, design visually, and deploy to users instantly. No coding required.",
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
            text: "What is the Visual Response Designer? → Understand the tool",
          },
          {
            text: "Getting Started → Create your first design in 5 steps",
          },
          {
            text: "The Visual Editor → Drag, drop, and edit visually",
          },
          {
            text: "The Transformation Wizard → Apply one-click enhancements",
          },
          {
            text: "Single vs Multiple Screens → Choose the right layout",
          },
          {
            text: "Live Preview → See your design in real-time",
          },
          {
            text: "Best Practices → Tips for professional results",
          },
        ],
      },
    ],
  },
];
