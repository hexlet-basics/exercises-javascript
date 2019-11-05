/* eslint no-else-return: ["error", {allowElseIf: true}] */
// BEGIN
const whoIsThisHouseToStarks = (houseName) => {
  if (houseName === 'Karstark' || houseName === 'Tally') {
    return 'friend';
  } else if (houseName === 'Lannister' || houseName === 'Frey') {
    return 'enemy';
  }

  return 'neutral';
};
// END

module.exports = whoIsThisHouseToStarks;
