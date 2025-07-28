Implement a function downloadAll(files) that takes an array of file names and returns a promise that resolves after all files have been downloaded.

To download a single file, use the ready-made function downloadFile(fileName) - it returns a promise.

The downloadAll function should use Promise.all to download all files in parallel.

Example:

```js
downloadAll(['1.txt', '2.txt']).then((result) => {
  console.log(result); // ['1.txt loaded', '2.txt loaded']
});
```