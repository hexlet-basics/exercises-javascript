Implement the `formatPrice()` function. It takes a number and returns its string representation rounded to two decimal places.

Use the `round()` function from the `hexlet-basics/math` module — this is another module of the same `hexlet-basics` package you worked with in the previous lesson. You need to write the import yourself.

```javascript
formatPrice(12.3456); // => '12.35'
formatPrice(2.5);     // => '2.50'
formatPrice(10);      // => '10.00'
```

## Hint

* At the beginning of the file, import the function: `import { round } from 'hexlet-basics/math';`
* The second argument of `round()` is the number of decimal places
