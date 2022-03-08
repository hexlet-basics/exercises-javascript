/* eslint operator-assignment: 0 */

// BEGIN
const printReversedWordBySymbol = (word) => {
  let i = word.length - 1;
  while (i >= 0) {
    console.log(word[i]);
    i = i - 1;
  }
};
// END

export default printReversedWordBySymbol;
