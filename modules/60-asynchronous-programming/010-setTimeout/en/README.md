JavaScript is single-threaded, which means it can do only one thing at a time.  
To handle tasks that take some time (like waiting, fetching data, or timers) without freezing the program, JavaScript uses asynchronous functions.

One basic asynchronous tool is setTimeout. It schedules a function (called a callback) to run after a specified delay (in milliseconds).

- setTimeout accepts two arguments:  
  1. A callback function — a function to run later, passed as an argument to another function.  
  2. A delay time in milliseconds.

Example:

```js
const cb = () => {
  console.log('Hello after 1 second');
};

setTimeout(cb, 1000);
// The callback is called not before this time (but not necessarily exactly at the moment).
// Often it happens later due to the event loop and language specifics.
```
