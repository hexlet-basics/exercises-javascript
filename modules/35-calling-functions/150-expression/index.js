const { calculateDistance } = require('hexlet/got');

// BEGIN
const distance = calculateDistance('Winterfell', 'The Twins') + calculateDistance('The Twins', 'The Eyrie');
console.log(distance);
// END
