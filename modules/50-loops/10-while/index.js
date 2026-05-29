// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (initialNumber) => {
  // BEGIN
  let i = initialNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  // END
};

export default printNumbers;
