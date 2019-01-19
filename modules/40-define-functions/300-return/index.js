const { getParentFor } = require('../../../src/got');

// BEGIN
const getParentNamesTotalLength = (child) => {
  const mother = getParentFor(child, 'mother');
  const father = getParentFor(child, 'father');
  return mother.length + father.length;
};
// END

module.exports = getParentNamesTotalLength;
