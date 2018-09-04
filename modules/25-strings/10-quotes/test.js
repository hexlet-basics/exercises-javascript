const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
console.log(content);
const expected = "\"Khal Drogo's favorite word is \"athjahakar\"\"";
assert.strictEqual(content, expected);
