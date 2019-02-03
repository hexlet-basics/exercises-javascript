// BEGIN
const countChars = (str, char) => {
  let index = str.length - 1;
  let result = 0;
  while (index >= 0) {
    if (str[index] === char) {
      result += 1;
    }
    index -= 1;
  }

  return result;
};
// END

module.exports = countChars;
