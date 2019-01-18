// BEGIN
const getFormattedBirthday = (day, month, year) => {
    return sprintf('%02d-%02d-%d', day, month, year);
}
// END

module.exports = getFormattedBirthday;
