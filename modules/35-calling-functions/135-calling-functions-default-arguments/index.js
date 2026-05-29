const distance = 450; // расстояние, км
const fuelConsumption = 8.4; // расход топлива, л/100 км
const fuelPrice = 64.2; // цена топлива, руб./литр
const passengers = 4; // количество пассажиров

// BEGIN
const fuel = (distance / 100) * fuelConsumption;
console.log(fuel.toFixed(1));

const tripCost = fuel * fuelPrice;
console.log(tripCost.toFixed(2));

const perPerson = tripCost / passengers;
console.log(perPerson.toFixed());
// END
