// BEGIN
const filterString = (str, char) => {
  let index = 0;
  let result = '';
  while (index < str.length) {
    const currentChar = str[index];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    index += 1;
  }

  return result;
};
// END

module.exports = filterString;
