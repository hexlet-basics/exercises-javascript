/* eslint prefer-const: 0 */

let eurosCount = 100;

// BEGIN
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
let rublesCount = dollarsCount * rublesPerDollar;
console.log(rublesCount);
// END
