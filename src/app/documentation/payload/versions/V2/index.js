import { header } from './header.js';
import { prerequisites } from './prerequisites.js';
import { clientIntegration } from './clientIntegration.js';
import { backendIntegration } from './backendIntegration.js';
import { platform } from './platform/index.js';
import { mergeContentArrays } from '../../utils/mergeUtils.js';

export const V2 = mergeContentArrays(
  header,
  prerequisites,
  clientIntegration,
  backendIntegration,
  platform
);
