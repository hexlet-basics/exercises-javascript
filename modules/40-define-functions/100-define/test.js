const assert = require('assert');
const printJaimesLine = require('.');

const logs = [];
const oldLog = console.log;
console.log = (...args) => {
  oldLog(...args);
  logs.push(args);
};
printJaimesLine('hi');
const expected = 'JAIME: hi';
assert.strictEqual(logs.join('').trim(), expected);
