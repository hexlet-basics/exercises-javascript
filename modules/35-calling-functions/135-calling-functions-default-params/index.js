const distance = 450; // distance, km
const fuelConsumption = 8.4; // fuel consumption, l/100 km
const fuelPrice = 64.2; // fuel price, per liter
const passengers = 4; // number of passengers

// BEGIN
const fuel = (distance / 100) * fuelConsumption;
console.log(fuel.toFixed(1));

const tripCost = fuel * fuelPrice;
console.log(tripCost.toFixed(2));

const perPerson = tripCost / passengers;
console.log(perPerson.toFixed());
// END
