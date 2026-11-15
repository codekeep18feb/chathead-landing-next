// documentation/payload/versions/V2/index.js

import { header } from './header.js';
import { prerequisites } from './prerequisites.js';
import { clientIntegration } from './clientIntegration.js';
import { backendIntegration } from './backendIntegration.js'; // ⭐ The new SDK docs
import platform from './platform/index.js';

// Combine all sections into a single array for the V2 documentation
export const V2 = [
  ...(header || []),
  ...(prerequisites || []),
  ...(clientIntegration || []),
  ...(backendIntegration || []), 
  ...(platform || [])
];