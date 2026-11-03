// src/app/config/features.js

/**
 * Feature flags for Sageion surfaces.
 * Single source of truth. Nothing else should hardcode
 * "is this product enabled".
 */
const ENV = process.env.NEXT_PUBLIC_FEATURE_ENV || "production";

const FLAGS = {
  // ── AI Agent (current focus) ─────────────────────────────
  aiAgent:      { prod: true,  staging: true,  dev: true  },
  aiAgentConfig:{ prod: true,  staging: true,  dev: true  },

  // ── Legacy surfaces (kept alive, hidden) ─────────────────
  leadGen:      { prod: false, staging: false, dev: true  },
  faqQna:       { prod: false, staging: false, dev: true  },
  liveChat:     { prod: false, staging: false, dev: true  },

  // ── Documentation hub (all product docs) ─────────────────
  docsLegacy:   { prod: false, staging: true,  dev: true  },
};

export const isEnabled = (flag) => {
  const entry = FLAGS[flag];
  if (!entry) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[features] Unknown flag: ${flag}`);
    }
    return false;
  }
  return entry[ENV] ?? false;
};

export const enabledFlags = () =>
  Object.entries(FLAGS)
    .filter(([, v]) => v[ENV])
    .map(([k]) => k);