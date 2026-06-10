/* eslint operator-assignment: 0 */
// BEGIN
const calculateElectricityBill = (kwh) => {
  let total = 0;
  let current = 1;
  while (current <= kwh) {
    if (current <= 100) {
      total = total + 5;
    } else if (current <= 200) {
      total = total + 7;
    } else {
      total = total + 10;
    }
    current = current + 1;
  }

  return total;
};
// END

export default calculateElectricityBill;
