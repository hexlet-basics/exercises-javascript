// BEGIN
const waitPromise = (ms, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject('Failed!');
      } else {
        resolve('Done!');
      }
    }, ms);
  });
}
// END

export default waitPromise;
