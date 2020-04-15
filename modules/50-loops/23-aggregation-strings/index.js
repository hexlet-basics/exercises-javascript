/* eslint operator-assignment: 0 */

// BEGIN
const joinNumbersFromRange = (start, end) => {
  let i = start;
  let result = '';

  while (i <= end) {
    result = `${result}${i}`;
    i = i + 1;
  }

  return result;
};
// END

export default joinNumbersFromRange;
