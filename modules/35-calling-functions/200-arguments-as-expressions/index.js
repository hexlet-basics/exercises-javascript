const { calculateDistanceBetweenTowns } = require('hexlet/got');

const from = 'The Twins';
const to = 'The Eyrie';

// BEGIN
const distance = calculateDistanceBetweenTowns(`${from}-${to}`);
console.log(distance);
// END
