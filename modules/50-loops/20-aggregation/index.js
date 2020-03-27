/* eslint operator-assignment: 0 */

// BEGIN
const mysubstr = (str, length) => {
  let index = 0;
  let result = '';
  while (index < length) {
    const currentChar = str[index];
    result = `${result}${currentChar}`;
    index = index + 1;
  }

  return result;
};
// END

export default mysubstr;
