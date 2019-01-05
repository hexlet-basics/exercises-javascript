const assert = require('assert');
const getSentenceTone = require(__dirname);

assert(getSentenceTone('normal') === 'normal');
assert(getSentenceTone('normal?') === 'normal');
assert(getSentenceTone('NoRmal?') === 'normal');
assert(getSentenceTone('SCREAM') === 'scream');
assert(getSentenceTone('SCREAM!') === 'scream');
