/**
 * Deep merge utility for combining payload sections
 */
export const deepMerge = (...objects) => {
  return objects.reduce((acc, obj) => {
    if (!obj || typeof obj !== 'object') return acc;
    
    Object.keys(obj).forEach(key => {
      if (Array.isArray(obj[key])) {
        acc[key] = acc[key] ? [...acc[key], ...obj[key]] : [...obj[key]];
      } else if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        acc[key] = deepMerge(acc[key] || {}, obj[key]);
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
};

/**
 * Merge content arrays (for V2 sections)
 */
export const mergeContentArrays = (...arrays) => {
  return arrays.flat().filter(Boolean);
};
