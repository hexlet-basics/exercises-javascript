const assert = require('assert');
const isFalsy = require('.');

assert(isFalsy('') === true);
assert(isFalsy(' ') === true);
assert(isFalsy(null) === false);
assert(isFalsy(undefined) === false);
assert(isFalsy(false) === true);
assert(isFalsy(true) === false);
assert(isFalsy(3) === false);
