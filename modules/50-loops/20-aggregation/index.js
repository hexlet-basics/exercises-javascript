// BEGIN
const mysubstr = (str, length) => {
  let index = 0;
  let result = '';
  while (index < length) {
    const currentChar = str[index];
    result = `${result}${currentChar}`;
    index += 1;
  }

  return result;
};
// END

module.exports = mysubstr;
