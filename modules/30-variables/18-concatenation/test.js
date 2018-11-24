const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
console.log(content);
const expected = "Hello, Joffrey!\nHere is important information about your account security.\nWe couldn't verify you mother's maiden name.";
assert.strictEqual(content, expected);
