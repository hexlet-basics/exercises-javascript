
Regardless of the programming language, functions possess certain fundamental properties. Knowing these properties makes it easier to predict the behavior of functions, as well as their testing and their usage. These properties include determinism. A function is deterministic when it returns the same result for the same input parameters. For example, a function counting the number of characters is deterministic:

```javascript
import { length } from 'hexlet-basics/string';

length('hexlet'); // 6
length('hexlet'); // 6

length('wow'); // 3
length('wow'); // 3
```

No matter how many times we call this function and pass `'hexlet'`, it will always return `6`. In turn, a function that returns a random number is not deterministic, as the same input (even if it is empty, i.e. without parameters) will always output a different result. How it differs doesn't matter, even if at least one of a million calls returns something different, this function is deemed non-deterministic.

```javascript
// A function that returns a random number
Math.random(); // 0.09856613113197676
Math.random(); // 0.8839904367241888
```

So what use is knowing that to us? Determinism seriously affects many different aspects. Deterministic functions are easy to work with, easy to optimize, and easy to test. If you can make a function deterministic, it's best to make it one.
