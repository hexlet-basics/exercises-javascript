const childProcess = require('child_process');
const assert = require('assert');

const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
const content = stdout.toString().trim();
console.log(content);
const expected = '- Did Joffrey agree?\n- He did. He also said "I love using \\n".';
assert.strictEqual(content, expected);
