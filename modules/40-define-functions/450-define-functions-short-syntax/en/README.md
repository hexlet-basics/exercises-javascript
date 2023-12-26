
Compared to some (primarily functional) languages, function definition in JavaScript looks rather cumbersome:

```javascript
const square = (x) => {
  return x ** 2;
};
```

It uses a lot of extra characters and the word `return`. Since version ES6, an alternative, shorter syntax has appeared in the language, making it much easier to understand and shorten code in some cases.

```javascript
// It takes a little time to get used to it,
// but after a while it'll save your life
const double = (x) => x ** 2;
```

There are two differences from the full definition, it omits the curly brackets and the `return` statement. The shortened version carries out the return automatically. It means that there is exactly one computable expression inside such a function, and its result will be immediately returned.

Note that the differences are purely syntactic, there are no differences in terms of usage. An example with two arguments:

The full version

```javascript
const sum = (a, b) => {
  return a + b;
};
```

The shortened version

```javascript
const sum = (a, b) => a + b;
```

Note the absence of curly brackets. Developers unaccustomed to this syntax sometimes write `const sum = (a, b) => { a + b };` and then have a hard time understanding why it doesn't work. The answer is simple: if there are curly brackets, then this isn't the shortened form, which means if you want the function to return a value, you will have to use `return`.
