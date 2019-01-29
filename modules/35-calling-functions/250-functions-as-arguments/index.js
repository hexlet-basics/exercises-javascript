const { getParentFor } = require('hexlet/got');

// BEGIN
const joffreyMom = getParentFor('Joffrey Baratheon');
console.log(getParentFor(joffreyMom, 'father'));
// END
