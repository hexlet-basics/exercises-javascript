/* eslint operator-assignment: 0 */

// BEGIN
const printReversedNameBySymbol = (name) => {
  let i = name.length - 1;
  while (i >= 0) {
    console.log(name[i]);
    i = i - 1;
  }
};
// END

export default printReversedNameBySymbol;
