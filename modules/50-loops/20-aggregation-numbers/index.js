/* eslint operator-assignment: 0 */

// BEGIN
const multiplyNumberFromRange = (start, end) => {
  let i = start;
  let result = 1;

  while (i <= end) {
    result = result * i;
    i = i + 1;
  }

  return result;
};
// END

export default multiplyNumberFromRange;
