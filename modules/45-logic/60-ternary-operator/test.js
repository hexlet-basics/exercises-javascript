const assert = require('power-assert');
const convertString = require(__dirname);

assert(convertString('hey') === 'yeh');
assert(convertString('Hey') === 'Hey');
