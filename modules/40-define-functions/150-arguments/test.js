const assert = require('assert');
const t = require('.');

const logs = [];
const oldLog = console.log;
console.log = (...args) => {
  oldLog(...args);
  logs.push(args);
};
t('0-', 5);
const expected = '0-0-0-0-0-';
assert.strictEqual(logs.join('').trim(), expected);
