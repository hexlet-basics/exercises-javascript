import { expectOutput } from 'hexlet-basics/tests';

const expected = '6\n5\n4\n3\n2\n1\nfinished!';
expectOutput(expected, (f) => f(6));
