import { expectOutput } from 'hexlet-basics/tests';

expectOutput('JAIME: hi', (f) => f('hi'))
  .then(expectOutput('JAIME: attack!', (f) => f('attack!')));
