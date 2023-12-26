
Let's remember one of the previous lessons:

```javascript
let dollarsCount = 50 * 1.25; // 62.5
let rublesCount = dollarsCount * 60; // 3750

console.log(rublesCount);
```

From the developer's point of view, such code "smells". It means that the code is hard to comprehend. Even now, when you look at the numbers `60` and `1.25`now, you might find yourself asking, "What are those numbers?" Imagine reading it in a month from now! How could a new programmer who hasn't seen the code before understand it? In our example, you can reconstruct the context through proper naming, but in real life, the code is much more complicated, and it is often impossible to guess the meaning of numbers.

This "smell" is known as Magic Numbers. The numbers with an inexplicable origin, which you can only understand by digging deeper into the code.

The solution is simple: create variables with the right names, and everything will fall into place.

```javascript
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = 50 * dollarsPerEuro; // 62.5
let rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log(rublesCount);
```

Note the following details:

* lowerCamelCase naming
* The two new variables are separated from the following computations by an empty line. These variables are meaningful even without a computation involved, which is why this separation is suitable here: it improves readability
* The code is well named and structured, but it is longer than the previous version. It happens every so often and that's okay. The code must be readable
