const childProcess = require('child_process');

test('test', () => {
  const stdout = childProcess.execSync(`node ${__dirname}/index.js`);
  expect(stdout.toString().trim()).toBe('Hello, World!');
});
