/* eslint operator-assignment: 0 */

// BEGIN
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
};
// END

export default countChars;
