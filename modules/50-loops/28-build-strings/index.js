/* eslint operator-assignment: 0 */

// BEGIN
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
    result = `${result}${str[i]}`;
    i = i - 1;
  }

  return result;
};

// END

export default reverse;
