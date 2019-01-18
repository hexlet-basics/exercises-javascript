const { parentFor } = require('../../../got');

// BEGIN
const getCustomParentFor = (child, parent = 'father') => {
  return parentFor(child, parent);
};
// END

module.exports = getCustomParentFor;
