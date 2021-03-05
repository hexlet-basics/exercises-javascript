/* eslint operator-assignment: 0 */

// BEGIN
const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }

  return result;
};
// END

export default joinNumbersFromRange;
