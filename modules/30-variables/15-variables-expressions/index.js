/* eslint prefer-const: 0 */

const eurosCount = 100;

// BEGIN
const dollarsPerEuro = 1.25;
const yuansPerDollar = 6.91;

const dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
const yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);
// END
