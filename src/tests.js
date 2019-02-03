const expect = require('expect');
const cleanStack = require('clean-stack');

const expectOutput = (expected, run = f => f()) => {
  const logs = [];
  const oldLog = console.log;
  console.log = (...args) => {
    oldLog(...args);
    logs.push(args);
  };
  try {
    const f = require(process.cwd());
    if (typeof f === 'function') {
      run(f);
    }
    const content = logs.join('\n').toString().trim();
    expect(content).toBe(expected.toString());
  } catch (e) {
    console.log(cleanStack(e.stack));
    process.exit(1);
  }
};

const test = (run) => {
  try {
    const f = require(process.cwd());
    run(f);
  } catch (e) {
    console.log(cleanStack(e.stack));
    process.exit(1);
  }
};

module.exports = { expectOutput, expect, test };
