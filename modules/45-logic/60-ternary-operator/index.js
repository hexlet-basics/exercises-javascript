import { reverse } from 'hexlet-basics/string';

// BEGIN
const convertText = (text) => (text[0] === text[0].toUpperCase() ? text : reverse(text));
// END

export default convertText;
