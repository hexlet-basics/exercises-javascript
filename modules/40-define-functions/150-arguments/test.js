const { expectOutput } = require('tests');

const expected1 = '0-0-0-0-0-';
expectOutput(expected1, f => f('0-', 5));
