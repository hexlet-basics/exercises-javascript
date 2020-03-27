// BEGIN
const sumOfSeries = (start, finish) => {
  /*
   * Обратите внимание: мы создали новую переменную,
   * и не используем аргумент в качестве счётчика.
   * Счётчик будет меняться в процессе выполнения функции,
   * а изменять аргументы — плохая пратика.
   */

  let sum = 0;
  for (let i = start; i <= finish; i += 1) {
    sum += i;
  }

  return sum;
};
// END

export default sumOfSeries;
