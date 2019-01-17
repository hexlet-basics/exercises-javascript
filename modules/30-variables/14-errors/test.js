const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
console.log(content);
const expected = 'Targaryen\nand\nDragon';
assert.strictEqual(content, expected);
