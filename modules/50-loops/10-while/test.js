const assert = require('assert');
const f = require('.');

const logs = [];
const oldLog = console.log;
console.log = (...args) => {
  oldLog(...args);
  logs.push(args);
};
f(3);
const expected = '3\n2\n1\nfinished!';
assert.strictEqual(logs.join('').trim(), expected);
