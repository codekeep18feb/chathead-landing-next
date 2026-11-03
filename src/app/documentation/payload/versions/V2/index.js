// documentation/payload/versions/V2/index.js

import platform from './platform/index.js';

// Since we put EVERYTHING into platform/index.js (Integration + Platform), 
// we just export that array directly.
export const V2 = [
  ...platform
];