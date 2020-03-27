// @ts-check
/* eslint operator-assignment: 0 */

const printNumbers = (firstNumber) => {
  // BEGIN
  let i = firstNumber;
  while (i >= 1) {
    console.log(i);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

export default printNumbers;
