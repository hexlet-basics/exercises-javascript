const { expectOutput } = require('tests');

const expected = '3\n2\n1\nfinished!';
expectOutput(expected, (f) => f(3));
