Understanding resolve and reject

```js
resolve and reject are functions that manage the outcome of a promise.
Inside new Promise((resolve, reject) => { ... }) one of them is called to complete the asynchronous operation.

resolve(value) indicates success:

new Promise((resolve) => {
  resolve('Done');
}).then(console.log); // 'Done'

reject(error) signals an error:

new Promise((_, reject) => {
  reject(new Error('Error'));
}).catch(err => console.log(err.message)); // 'Error'
'
```
A promise can only be resolved once, either via resolve or reject.