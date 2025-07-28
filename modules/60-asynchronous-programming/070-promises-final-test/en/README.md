Asynchronous instructions, nested .then(), error handling are often used together.

An example of a typical flow in real applications: get data, check, save.

Promise.then
Allows you to perform an operation after the promise is completed. The return value is passed further down the chain.

Promise.catch
Catches errors in any of the previous .then.

Combining multiple steps
.then().then().then() chains allow you to build complex scenarios: validation, checking rights, saving, logging, etc.

The ability to combine promises, correctly throw and catch errors is an important aspect in development.