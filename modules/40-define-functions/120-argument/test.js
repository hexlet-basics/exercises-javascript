const { expectOutput } = require('tests');

expectOutput('JAIME: hi', f => f('hi'));
expectOutput('JAIME: attack!', f => f('attack!'));
