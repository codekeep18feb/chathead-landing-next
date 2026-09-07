import { globalTenantSettings } from './globalTenantSettings.js';
import { inviteSupportUser } from './inviteSupportUser.js';
import { whitelabelDomains } from './whitelabelDomains.js';

export const globalLevelSettings = [
  {
    tag_type: "h3",
    text: "Global Level Settings",
    selector_uid: "v2_global_level_settings",
  },
  {
    tag_type: "p",
    text: "These settings apply across all applications within your tenant, providing centralized control over system-wide configurations.",
  },
  {
    tag_type: "callout",
    type: "warning",
    title: "🔐 Admin Access Required",
    children: [
      {
        tag_type: "p",
        text: "Only users with ADMIN or MANAGER role have access to these settings. If you don't see these options, contact your system administrator.",
      },
    ],
  },
  ...globalTenantSettings,
  ...inviteSupportUser,
  ...whitelabelDomains,
];
