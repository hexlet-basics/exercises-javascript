/* eslint operator-assignment: 0 */

// BEGIN
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }

  return result;
};

// END

export default even;
