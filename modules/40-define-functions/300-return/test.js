const assert = require('assert');
const f = require('.');

const expected = 35;
const actual = f('Daenerys Targaryen');
console.log(actual);
assert.equal(actual, expected);
