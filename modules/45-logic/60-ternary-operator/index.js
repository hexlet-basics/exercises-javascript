const { reverse } = require('lodash');

// BEGIN
const convertString = string => (string[0] === string[0].toUpperCase() ? string : reverse(string));
// END

module.exports = convertString;
