Suppose we want to calculate an expression such as `3 * 5 - 2`. That is exactly how we would write it down:

```javascript
console.log(3 * 5 - 2); // => 13
```

Note that the interpreter performs arithmetic operations in the right order: first division and multiplication, then addition and subtraction. Sometimes we want to change the order of calculations. We'll dig into this topic in the next lesson. Or another example:

```javascript
console.log(2 * 4 * 5 * 10);
```

 As you can see, we can combine operations, which allows us to compute even more complex compound expressions. To visualize how calculations are done inside the interpreter, let's look at an example: `2 * 4 * 5 * 10`.


1. First we calculate `2 * 4` and get `8 * 5 * 10`
2. Then we calculate `8 * 5`, which gives us `40 * 10`
3. Finally, do the last multiplication. The result will be `400`

We can combine operations, making it possible to compute increasingly complex compound expressions.
