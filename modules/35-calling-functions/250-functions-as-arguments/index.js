const { getParentFor } = require('got');

// BEGIN
const joffreyMom = getParentFor('Joffrey Baratheon');
console.log(getParentFor(joffreyMom, 'father'));
// END
