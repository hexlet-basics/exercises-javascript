const { getParentFor } = require('hexlet/got');

// BEGIN
const getCustomParentFor = (child, parent = 'father') => {
  return getParentFor(child, parent);
};
// END

module.exports = getCustomParentFor;
