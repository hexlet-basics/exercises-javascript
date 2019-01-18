const { parentFor } = require('../../../got');

// BEGIN
const getParentNamesTotalLength = (child) => {
  const mother = parentFor(child, 'mother');
  const father = parentFor(child, 'father');
  return mother.length + father.lenght;
};
// END

module.exports = getParentNamesTotalLength;
