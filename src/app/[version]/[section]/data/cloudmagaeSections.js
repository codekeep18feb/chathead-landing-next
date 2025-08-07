const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// object for to whom
export const cloudManagedToWhomContent = {
  label: "To Whom",
  heading: "Instant Auth + Chat",
  description:
    "robust auth auth paired with chat. Best for quickly scaling platforms.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Products need both": {
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Products that need both authentication and chat out of the box.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
          ],
        },
      ],
    },
    "App authentication": {
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Apps that haven't implemented authentication yet",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
          ],
        },
      ],
    },
    "Active Users": {
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Websites aiming to convert visitors into active, authenticated users.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
          ],
        },
      ],
    },
    "Live or AI-powered": {
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for live or AI-powered chat paired with Magicchat’s authentication services.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
          ],
        },
      ],
    },
  },
};

export const localmagaeContent = {
  label: "To Whom",
  heading: "BYO Auth Chat",
  description: "Great for platforms with existing local auth infrastructure.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Unique user ID": {
      // subheading: "Whatsapp-style interface with all features out of the box",
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,

      content: [
        {
          type: "p",
          // text: "Build a relatable and modern messaging experience. More familiar the UX feels, the higher the user engagement.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Pass a unique user ID to Magicchat’s onboarding API — this maps users between your system and ours.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "Rest works automatically": {
      // subheading: "Streamline product enquiries for sellers",
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,

      content: [
        {
          type: "p",
          // text: "Allow sellers to manage multiple conversations with a personalized inbox view.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Ensure you're already storing this ID on your end; the rest works automatically behind the scenes.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "Respond in real-time": {
      // subheading: "Utilize messaging as a robust operations hub.",
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "p",
          // text: "Go beyond basic user-to-user messaging. Interactive messages empowers marketplace admins to utilize chat as an operations hub.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Admins can respond in real-time, offer support, and resolve user queries.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "Exchange messages": {
      // subheading: "Utilize messaging as a robust operations hub.",
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "p",
          // text: "Go beyond basic user-to-user messaging. Interactive messages empowers marketplace admins to utilize chat as an operations hub.",
        },
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Users and admins can exchange messages even when one is offline.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
    "Existing users": {
      // subheading: "Prevent platform leakage",
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "p",
          // text: "Retain users and keep all transactions within your platform.",
        },
        {
          type: "group", // Group multiple similar elements
          className: "normal-text",
          texts: [
            "Need to onboard existing users? Use the bulk onboarding API to migrate them easily.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            " Lorem Ipsum has been the in dustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          ],
        },
      ],
    },
  },
};

export const pluginmagaeContent = {
  label: "To Whom",
  heading: "CMS-Ready Chat",
  description: "Extend existing platforms with our cms-ready-chat auth + chat.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Built-in Auth Platforms": {
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "CMS platforms like WordPress that already include authentication.",
            "No need to rework user login flows — just plug in chat.",
            "Ideal for quick chat integration into content-heavy platforms.",
          ],
        },
      ],
    },
    "Tightly Coupled Auth Plugins": {
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Systems using plugins where user signup events can't be intercepted.",
            "Chat works independently without needing signup notifications.",
            "Preserves plugin compatibility without extra dev work.",
          ],
        },
      ],
    },
    "Native Auth Compatibility": {
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Designed to work with native login systems like WordPress's default auth.",
            "No third-party auth libraries needed.",
            "Reliable chat that respects your platform's auth structure.",
          ],
        },
      ],
    },
    "Chat Add-on Use Case": {
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Perfect for platforms that just want to add chat — live or AI-powered.",
            "Integrate without touching the underlying login flows.",
            "Chat becomes an enhancement, not an overhaul.",
          ],
        },
      ],
    },
  },
};

export const noAuthChatToWhomContent = {
  label: "To Whom",
  heading: "No Auth Only Chat",
  description:
    "Frictionless, anonymous chat for instant engagement—no login or signup needed.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Anonymous Engagement": {
      className: "messaging-experience",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Products or pages that want instant user interaction without collecting personal info.",
            "Ideal for anonymous support, feedback collection, or AI interactions.",
            "Great for use cases where speed and simplicity matter more than user accounts.",
          ],
        },
      ],
    },
    "No Login Required": {
      className: "voice-video",
      image: `${basePath}/Asset/voice_video.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Apps or tools that don’t require authentication or user identity.",
            "Visitors can instantly chat—no friction, no barriers to entry.",
            "Perfect for early-stage MVPs, landing pages, and micro-sites.",
          ],
        },
      ],
    },
    "Frictionless Setup": {
      className: "scale-millions",
      image: `${basePath}/Asset/scale_millions.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Designed for creators and indie developers who want plug-and-play chat.",
            "No backend setup, login forms, or user handling needed.",
            "Embed and go live within minutes.",
          ],
        },
      ],
    },
    "AI-Only or Offline Support": {
      className: "moderation-control",
      image: `${basePath}/Asset/moderation_control.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Let users interact with an AI assistant or drop offline messages for admins.",
            "Fits help desks, educational sites, and advisory blogs needing basic chat.",
            "Real-time human response or async reply—no identity tracking involved.",
          ],
        },
      ],
    },
  },
};

// object for Provides
export const cloudManagedProvidesContent = {
  label: "Provides",
  heading: "What It Provides",
  description:
    "End-to-end chat and authentication capabilities to simplify your app's growth.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Auth UI Kit": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Adds user login, signup, and authentication UI to your app or website.",
            "Streamline onboarding with prebuilt flows and secure integrations.",
          ],
        },
      ],
    },
    "Customizable Chatbox": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Embeds a customizable chatbox into any interface—web or mobile.",
            "Easily integrates with your brand and UX, powered by Magicchat.",
          ],
        },
      ],
    },
    "User Insights Dashboard": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Shows user activity and insights through intuitive dashboards.",
            "Understand engagement and retention with real-time data.",
          ],
        },
      ],
    },
    "Admin Control Panel": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Includes an admin panel to manage chats, users, and app settings.",
            "Gain full control over your platform's operations and access levels.",
          ],
        },
      ],
    },
  },
};

export const cmsChatOnlyProvidesContent = {
  label: "Provides",
  heading: "What It Provides",
  description:
    "Add chat features to your platform without modifying your authentication system.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Customizable Chatbox": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Embeds a customizable chatbox into any interface—web or mobile.",
            "Easily integrates with your brand and UX, powered by Magicchat.",
          ],
        },
      ],
    },
    "User Insights Dashboard": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Shows user activity and insights through intuitive dashboards.",
            "Understand engagement and retention with real-time data.",
          ],
        },
      ],
    },
    "Admin Control Panel": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Includes an admin panel to manage chats, users, and app settings.",
            "Gain full control over your platform's operations and access levels.",
          ],
        },
      ],
    },
  },
};

export const plugChatOnlyProvidesContent = {
  label: "Provides",
  heading: "What It Provides",
  description:
    "Add chat features to your platform without modifying your authentication system.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Customizable Chatbox": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Embeds a customizable chatbox into any interface—web or mobile.",
            "Easily integrates with your brand and UX, powered by Magicchat.",
          ],
        },
      ],
    },
    "User Insights Dashboard": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Shows user activity and insights through intuitive dashboards.",
            "Understand engagement and retention with real-time data.",
          ],
        },
      ],
    },
    "Admin Control Panel": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Includes an admin panel to manage chats, users, and app settings.",
            "Gain full control over your platform's operations and access levels.",
          ],
        },
      ],
    },
  },
};
export const noAuthChatProvidesContent = {
  label: "Provides",
  heading: "What It Provides",
  description:
    "Instant, anonymous chat capabilities—no login, no signup. Just drop it in and go live.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Anonymous Chatbox": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Embeds a customizable chatbox into any website or app without requiring user login.",
            "Visitors can start chatting immediately with AI or human support—no friction.",
          ],
        },
      ],
    },
    "AI-Driven Conversations": {
      className: "ai-support",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Respond instantly with smart AI trained on your app’s FAQs or custom data.",
            "Deliver answers 24/7 even when human agents are offline.",
          ],
        },
      ],
    },
    "Offline Message Support": {
      className: "offline-support",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Visitors can leave messages anytime—admins can respond later from the dashboard.",
            "Maintains conversation history even without user accounts.",
          ],
        },
      ],
    },
    "Admin Control Panel": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Manage and reply to chats through a powerful admin panel.",
            "Track conversations, set up automated replies, and moderate in real-time.",
          ],
        },
      ],
    },
  },
};


// object for how it works

export const cmsChatOnlyHowItWorksContent = {
  label: "How It Works",
  heading: "How It Works",
  description:
    "From login to live chat—here’s how users and admins engage on your platform with minimal setup.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "User Authentication": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Visitors see authentication options embedded in your app or website.",
            "Login and signup flows are streamlined with platform-native auth.",
          ],
        },
      ],
    },
    "AIbot Interaction": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Logged-in users can interact with an AIbot and preset Q&A.",
            "Questions and flows are taken from your structured app data.",
          ],
        },
      ],
    },
    "Live Chat Access": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "After signup/login, users unlock live chat with a real admin.",
            "Admins offer real-time support and resolve queries instantly.",
          ],
        },
      ],
    },
    "Offline Messaging": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Users and admins can exchange messages even when one is offline.",
            "Ensures seamless communication across time zones and schedules.",
          ],
        },
      ],
    },
  },
};

export const cloudManagedHowItWorksContent = {
  label: "How It Works",
  heading: "How It Works",
  description:
    "Easily onboard new or existing users by syncing your platform with Magicchat using a simple API call.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "User ID Mapping": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Pass a unique user ID to Magicchat’s onboarding API.",
            "This securely maps users between your system and Magicchat.",
          ],
        },
      ],
    },
    "Automatic Integration": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "You must already be storing user IDs on your end.",
            "Once passed, the rest is handled automatically behind the scenes.",
          ],
        },
      ],
    },
    "Bulk Onboarding": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Need to onboard existing users in bulk?",
            "Use our bulk onboarding API to migrate them with ease.",
          ],
        },
      ],
    },
  },
};

export const plugChatOnlyHowItWorksContent = {
  label: "How It Works",
  heading: "How It Works",
  description:
    "Add real-time chat without modifying your platform’s auth system. Just install the plugin and go.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Login-Based Onboarding": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Some platforms (like WordPress, Magento, or Joomla) don’t expose signup events.",
            "We onboard users during their first login to Magicchat automatically.",
          ],
        },
      ],
    },
    "No Plugin Changes Needed": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Real-time registration happens without touching your existing authentication plugin.",
            "It's seamless and requires no backend coding.",
          ],
        },
      ],
    },
    "Simple Plugin Setup": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Just install the AddChat plugin, activate it, and enter your chat app credentials.",
            "The chatbox appears where you want it, fully functional.",
          ],
        },
      ],
    },
    "Support for Other Platforms": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Using Laravel, Drupal, Shopify, Wix, or others?",
            "Request integration from Magicchat — we’re expanding support continuously.",
          ],
        },
      ],
    },
  },
};
export const noAuthChatHowItWorksContent = {
  label: "How It Works",
  heading: "How It Works",
  description:
    "Set up instant, anonymous chat in minutes—no authentication or backend setup required.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Embed Script": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Copy and paste the Magicchat embed script into your HTML or React component.",
            "No backend or auth configuration needed—just drop it in.",
          ],
        },
      ],
    },
    "Instant Anonymous Access": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Users can start chatting immediately with AI or human agents.",
            "Conversations are anonymous and require no signup or login.",
          ],
        },
      ],
    },
    "Admin Notification & Reply": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Admins receive new messages via the dashboard and can respond in real-time or asynchronously.",
            "Supports real-time chat, offline replies, and history tracking per visitor session.",
          ],
        },
      ],
    },
  },
};


// object for Example Usage
export const exampleUsageContent = {
  label: "Example Usage",
  heading: "Example Usage",
  description:
    "Real-world scenarios where Magicchat helps small businesses, support teams, and content-driven platforms drive instant engagement.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Product-Based Businesses": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for small product-based businesses.",
            "Connect sellers and buyers instantly through real-time chat.",
          ],
        },
      ],
    },
    "Support & Service Providers": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Great for service providers, support-driven businesses, and chat-based call centers.",
            "Improve customer satisfaction with instant responses.",
          ],
        },
      ],
    },
    "Lead Generation on Websites": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Boost lead generation by engaging visitors on high-traffic pages.",
            "Smart authentication and chat convert visitors into users.",
          ],
        },
      ],
    },
    "Advisory & Educational Platforms": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Useful for advisory blogs, educational platforms, or landing pages.",
            "Drive onboarding and engagement with instant chat experiences.",
          ],
        },
      ],
    },
    "Startups & MVPs": {
      className: "admin-tools",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Fits perfectly into MVPs or early-stage apps lacking auth and chat.",
            "Quickly onboard and support users from day one.",
          ],
        },
      ],
    },
  },
};

export const cloudManagedExampleUsageContent = {
  label: "Example Usage",
  heading: "Example Usage",
  description:
    "Best suited for systems with built-in or planned authentication, from monoliths to modern client-server setups.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Client-Server & Monolithic Apps": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for client-server or monolithic architectures.",
            "Works great with systems that already include or plan to add authentication.",
          ],
        },
      ],
    },
    "Support-Driven Businesses": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Great for service providers, support-focused businesses, and chat-based call centers.",
            "Scales well from mid-sized teams to large-scale operations.",
          ],
        },
      ],
    },
    "Authentication-Agnostic Integration": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Perfect for modern architectures with any authentication system.",
            "Seamlessly integrates without disrupting existing auth flows.",
          ],
        },
      ],
    },
  },
};

export const cmsExampleUsageContent = {
  label: "Example Usage",
  heading: "Example Usage",
  description:
    "Best suited for CMS platforms and businesses needing flexible, authentication-agnostic chat integration.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "CMS-Based Products": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for CMS-based products with tightly coupled, cms-ready-chat authentication systems.",
            "Chat works seamlessly without needing to alter your plugin setup.",
          ],
        },
      ],
    },
    "Support & Service Providers": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Great for service providers, support-focused businesses, and chat call centers.",
            "Scale your customer support while keeping your platform intact.",
          ],
        },
      ],
    },
    "Authentication-Agnostic Systems": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Perfect for modern platforms that support any authentication logic.",
            "Integrates cleanly into both legacy and next-gen tech stacks.",
          ],
        },
      ],
    },
  },
};

export const cloudManagedReactionsFeature = {
  label: "Feature",
  heading: "Reactions",
  description:
    "Let users express themselves instantly with emoji reactions to messages, making conversations more engaging and dynamic.",
  imageSrc: `${basePath}/Asset/messaging_experience.png`,
  sections: {
    "Emoji Reactions": {
      className: "emoji-reactions",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Allow users to react to messages using emojis for faster, lightweight interactions.",
            "Popular reactions like 👍 ❤️ 😂 😮 help convey emotion instantly without typing.",
            "Reactions enhance chat dynamics, especially in group discussions and community chats.",
          ],
        },
      ],
    },
    "Boosted Engagement": {
      className: "engagement-metrics",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Encourage more participation by lowering the barrier to interaction.",
            "Reactions offer a frictionless way for users to stay active in conversations.",
            "Track the most used reactions to understand what resonates with your users.",
          ],
        },
      ],
    },
    "Lightweight & Real-Time": {
      className: "real-time-updates",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "All reactions update in real-time, making chats feel lively and current.",
            "Built to be lightweight and responsive, even in high-traffic chats.",
            "Seamless integration with your existing chat infrastructure.",
          ],
        },
      ],
    },
  },
};

export const noAuthChatExampleUsageContent = {
  label: "Example Usage",
  heading: "Example Usage",
  description:
    "Best suited for websites and tools that prioritize instant communication over user login or identity tracking.",
  imageSrc: `${basePath}/Asset/matrimony_banner.png`,
  sections: {
    "Marketing & Landing Pages": {
      className: "auth-ui-kit",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Perfect for capturing leads or engaging users directly on campaign and landing pages.",
            "Encourages instant interaction without any barriers to entry.",
          ],
        },
      ],
    },
    "Creator & Personal Sites": {
      className: "chatbox-integration",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Ideal for personal portfolios, blogs, or resume sites looking to engage visitors through chat.",
            "Gives creators a way to interact without managing user accounts or logins.",
          ],
        },
      ],
    },
    "Lightweight MVPs & Tools": {
      className: "dashboard-insights",
      image: `${basePath}/Asset/messaging_experience.png`,
      content: [
        {
          type: "group",
          className: "normal-text",
          texts: [
            "Great for MVPs and experimental tools that need chat functionality without authentication complexity.",
            "Helps test ideas quickly with real user feedback, all without requiring signups.",
          ],
        },
      ],
    },
  },
};
