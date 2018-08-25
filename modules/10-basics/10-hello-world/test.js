const assert = require('assert');
const childProcess = require('child_process');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
console.log(content);
assert.strictEqual(content, 'Hello, World!');
