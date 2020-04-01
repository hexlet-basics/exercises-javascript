import { reverse } from 'hexlet-basics/string';

// BEGIN
const convertText = (text) => {
  const reversable = text.length > 0 && text[0] !== text[0].toUpperCase();
  return reversable ? reverse(text) : text;
};
// END

export default convertText;
