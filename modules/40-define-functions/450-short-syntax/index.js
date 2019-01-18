// BEGIN
const getAgeDifference = (yearOne, yearTwo) => {
  const difference = Math.abs(yearOne - yearTwo);
  return `The age difference is ${difference}`;
};
// END

module.exports = getAgeDifference;
