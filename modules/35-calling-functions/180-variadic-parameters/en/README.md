
An interesting feature of some functions is the ability to accept a variable number of parameters. This is not about default values. Take a look at this example:

```javascript
Math.max(1, 10, 3); // 10
```

The `Math.max()` function finds the maximum value among the passed parameters. How many parameters do you think it expects as input? If you open the documentation for this function, you will see a strange construct:

  ```
  Math.max([value1[, value2[, ...]]])
  ```

  This notation means that this function accepts any number of parameters as input (and can even be called without them). The optionality of the passed parameters is described by the brackets *[ ]*, exactly the same way optional parameters with default values are described. The ability to pass any number of parameters is encoded in this part *[, ...]*.

  ```javascript
  Math.max(1, -3, 2, 3, 2); // 3
  ```

  Everything specified in square brackets is optional. In this notation `Math.max([value1[, value2[, ...]]])` there are several such brackets, and they are nested within each other. Let's break down each of them:

  * The first square brackets contain `[value1[, value2[, ...]]]`, which means you can call the function without parameters, since these square brackets contain everything that is passed into the function. If you remove all the contents of these brackets and the brackets themselves, you are left with `Math.max()` — a call without parameters.
  * The second square brackets are nested inside the first and contain `[, value2[, ...]]`. They indicate that if we specified the first parameter, then we can optionally specify a second parameter. Without these brackets and their contents, the notation would look like `Math.max([value1])`.
  * The third square brackets are nested inside the second and contain `[, ...]`. The ellipsis indicates that there can be any number of parameters. If you remove these brackets and their contents, you get a notation like `Math.max([value1[, value2]])`.

  The comma is inside the square brackets because if we do not specify a parameter, the comma is not needed. Otherwise, a call with a single parameter would look like this `Math.max(value1,)`.

The `Math.min()` function works similarly, only it looks for the smallest value:

```javascript
Math.min(1, 10, 3);       // 1
Math.min(1, -3, 2, 3, 2); // -3
```
