const assert = require('assert');
const f = require('.');

const logs = [];
const oldLog = console.log;
console.log = (...args) => {
  oldLog(...args);
  logs.push(args);
};
f();
const expected = 'Winter is coming';
assert.strictEqual(logs.join('').trim(), expected);
