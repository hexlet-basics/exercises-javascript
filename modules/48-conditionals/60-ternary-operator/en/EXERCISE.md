
Write the `convertText()` function that takes a string as input, and if the first letter is not capitalized, returns a reversed version of that string. If the first letter is capitalized, it returns the string unchanged. If the input is an empty string, the function must return an empty string.

Examples:

```javascript
convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Be sure to take the empty line into account
convertText(''); // ''
```

You can reverse a string using the `reverse()` function. It takes a string we want to reverse as an argument:

```javascript
const result = reverse('Hello!');
console.log(result); // => '!olleH'
```

There are various approaches to solve this problem. You may want to use the [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) method and feature that allows you to get a character from a string (for example, `str[0]`).

Try to write two versions of the function: with the usual if-else, and with a ternary operator.

## Tips

* Consider the first condition you need to write. Is it a capitalization check or an empty line check? Which is primary?
