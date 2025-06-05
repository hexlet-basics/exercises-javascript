// BEGIN
const chainProcess = (num) => 
  new Promise((resolve) => {
    resolve(num);
  })
    .then((value) => value + 2)
    .then((value) => value * 3)
    .then((value) => {
      if (value > 50) {
        throw new Error('Too big!');
      }
      return value;
    });
// END

export default chainProcess;
