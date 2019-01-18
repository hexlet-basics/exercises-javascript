const printNumbers = (firstNumber) => {
  // BEGIN
  let i = firstNumber;
  while (i >= 1) {
    console.log(`${i}\n`);
    i = i - 1;
  }
  console.log('finished!');
  // END
};

module.exports = printNumbers;
