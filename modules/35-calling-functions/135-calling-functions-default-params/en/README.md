
Consider the `round()` function, which rounds an integer:

```javascript
const result = round(10.25, 0); // 10
```

We pass two parameters to it: the number to round and the precision of rounding. `0` means that it will round to an integer, and the decimal part will simply be discarded.

In most cases, we need to round exactly to an integer (and not to tenths, for example), so designers of the `round()` function have made the second parameter **optional** and set it to a **default value of `0`**. So, you can choose to not specify the second parameter and the result will be the same:

```javascript
const result = round(10.25); // 10
```

We can specify precision by passing another parameter:

```javascript
// rounding to one decimal place
const result = round(10.25, 1); // 10.3
```

If a JavaScript function accepts optional arguments, they always come after the required ones. Their number varies depending on the function itself, but they always go next to each other and at the end of the list of arguments.
