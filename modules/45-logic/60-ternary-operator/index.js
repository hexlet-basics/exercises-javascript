const reverse = require('./reverse');

// BEGIN
const convertString = (string) => {
  return string[0] === string[0].toUpperCase() ? string : reverse(string);
}
// END

module.exports = convertString;

