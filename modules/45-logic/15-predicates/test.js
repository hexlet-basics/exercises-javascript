const assert = require('power-assert');
const isMister = require(__dirname);

assert(isMister('8234782') === false);
assert(isMister('Joker') === false);
assert(isMister('Mister') === true);
