// @ts-check
// TODO use vitest

import expect from 'expect';
import chalk from 'chalk';
import StackTracey from 'stacktracey';
import _ from 'lodash';

const getPathToIndex = () => `${process.cwd()}/index.js`;

const buildErrorText = (/** @type Error */ e) => {
  const stack = new StackTracey(e);
  const message = e.message;
  const traceLine = _.head(stack.items).beforeParse;
  return `${message}\n${traceLine}`;
};

const expectOutput = async (expected, run = (f) => f()) => {
  const logs = [];
  const oldLog = console.log;
  global.console.log = (/** @type {any} */ ...args) => {
    oldLog(...args);
    logs.push(args);
  };
  try {
    const { default: f } = await import(getPathToIndex());
    if (typeof f === 'function') {
      run(f);
    }
    const content = logs.map(oneCallData => oneCallData.map(String).join(' ')).join('\n').trim();
    if (typeof expected === 'function') {
      expected(content);
    } else {
      expect(content).toBe(expected.toString());
    }
    oldLog();
    oldLog(chalk.green('Tests have passed!'));
  } catch (e) {
    oldLog(buildErrorText(e));
    process.exit(1);
  }
};

const test = async (run) => {
  try {
    const { default: f } = await import(getPathToIndex());
    run(f);
    console.log();
    console.log(chalk.green('Tests have passed!'));
  } catch (e) {
    console.log(buildErrorText(e));
    process.exit(1);
  }
};

export { expectOutput, expect, test };
