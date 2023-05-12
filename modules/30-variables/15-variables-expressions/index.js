/* eslint prefer-const: 0 */

let eurosCount = 100;

// BEGIN
let dollarsPerEuro = 1.25;
let yuansPerDollar = 6.91;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
let yuansCount = dollarsCount * yuansPerDollar;
console.log(yuansCount);
// END
