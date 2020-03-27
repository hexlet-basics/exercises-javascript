/* eslint arrow-body-style: ["error", "always"] */

import { getParentFor } from 'hexlet-basics/got';

// BEGIN
const getCustomParentFor = (child, parent = 'father') => {
  return getParentFor(child, parent);
};
// END

export default getCustomParentFor;
