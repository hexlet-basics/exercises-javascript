const assert = require('assert');
const convertString = require(__dirname);

assert(convertString('hey') === 'yeh');
assert(convertString('Hey') === 'Hey');
