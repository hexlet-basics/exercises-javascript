const { parentFor } = require('../../../got');

// BEGIN
const joffreyMom = parentFor('Joffrey Baratheon');
console.log(parentFor(joffreyMom, 'father'));
// END
