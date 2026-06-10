// BEGIN
const filterString = (str, char) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const currentChar = str[i];
    if (currentChar !== char) {
      result = `${result}${currentChar}`;
    }
    i += 1;
  }

  return result;
};
// END

export default filterString;
