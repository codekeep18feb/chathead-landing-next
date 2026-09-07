import { globalLevelSettings } from './globalLevelSettings.js';
import { faqChatLeadGeneration } from './faqChatLeadGeneration.js';
import { liveAgent } from './liveAgent.js';

export const platform = [
  {
    tag_type: "div",
    children: [
      {
        tag_type: "h2",
        text: "Platform",
        selector_uid: "v2_platform_overview",
      },
      {
        tag_type: "p",
        text: "The Sageion Admin Platform provides comprehensive tools for managing your chat applications, users, and system settings. Below is an overview of the key sections available in the Admin UI.",
      },
      ...globalLevelSettings,
      ...faqChatLeadGeneration,
      ...liveAgent,
    ],
  },
];
