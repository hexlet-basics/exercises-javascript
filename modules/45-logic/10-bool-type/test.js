const assert = require('assert');
const isPensioner = require(`${__dirname}/index.js`);

assert.strictEqual(isPensioner(23), false);
assert.strictEqual(isPensioner(70), true);
assert.strictEqual(isPensioner(60), true);
assert.strictEqual(isPensioner(59), false);
