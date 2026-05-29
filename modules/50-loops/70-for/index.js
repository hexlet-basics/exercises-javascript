// BEGIN
const fizzBuzz = (n) => {
  let result = '';
  for (let i = 1; i <= n; i += 1) {
    let word;
    if (i % 3 === 0 && i % 5 === 0) {
      word = 'FizzBuzz';
    } else if (i % 3 === 0) {
      word = 'Fizz';
    } else if (i % 5 === 0) {
      word = 'Buzz';
    } else {
      word = String(i);
    }

    result = result === '' ? word : `${result} ${word}`;
  }

  return result;
};
// END

export default fizzBuzz;
