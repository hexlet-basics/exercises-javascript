const { reverse } = require('string');

// BEGIN
const convertText = text => (text[0] === text[0].toUpperCase() ? text : reverse(text));
// END

module.exports = convertText;
