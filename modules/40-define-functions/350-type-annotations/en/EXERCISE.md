
The application builds text separators from repeating characters — for example, `-------` or `=====`. Implement a `wordMultiply()` function. It takes two parameters:

* A string
* A number that tells how many times the string should be repeated

It returns the string repeated n times. If zero is passed, it returns an empty string.

```javascript
const text = 'javascript';
console.log(wordMultiply(text, 2)); // => javascriptjavascript
console.log(wordMultiply(text, 0)); // =>
```

Add JSDoc type annotations to the function definition: `@param` tags for both parameters and `@returns` for the return value.

## Hints

* The string method [repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) is handy here
* Do not forget the annotation for the return value
