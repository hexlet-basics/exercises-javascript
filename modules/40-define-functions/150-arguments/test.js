import { expectOutput } from 'hexlet-basics/tests';

const expected1 = '0-0-0-0-0-';
expectOutput(expected1, (f) => f('0-', 5));
