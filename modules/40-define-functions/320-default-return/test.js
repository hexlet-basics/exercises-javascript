const assert = require('assert');
const f = require('.');

const expected = undefined;
const actual = f();
console.log(actual);
assert.equal(actual, expected);
