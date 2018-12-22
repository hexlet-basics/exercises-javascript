const assert = require('power-assert');
const isPensioner = require(__dirname);

assert(isPensioner(23) === false);
assert(isPensioner(70) === true);
assert(isPensioner(60) === true);
assert(isPensioner(59) === false);
