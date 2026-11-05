Some functions have **optional parameters**. This means a default value is set for them in advance, and you can omit such a parameter when calling the function.

Let's look at the `toFixed()` method, which rounds a number to a given number of decimal places. `toFixed()` is a method, that is, a function attached to a value and called with a dot. We'll cover methods in detail in the lesson about objects.

```javascript
const result = (10.25).toFixed(1); // => '10.3'
```

Note the quotes in the result. `toFixed()` returns a **string**, not a number, so you can't use it directly in further calculations.

We passed it one value, the rounding precision (1 decimal place). But this parameter is optional. If you omit it, the default value `0` is used, and the number is rounded to an integer:

```javascript
console.log((10.25).toFixed()); // => '10'
```

If you need a different precision, specify it explicitly:

```javascript
console.log((3.14159).toFixed(2)); // => '3.14'
console.log((3.14159).toFixed(4)); // => '3.1416'
```

```text
(10.25).toFixed(1)  →  argument: 1    →  '10.3'
(10.25).toFixed()   →  argument: (0)  →  '10'
                               └── default value
```

The only parameter of `toFixed()`, `digits`, is optional. Another function may have a different number of parameters and different default values.

## How to read a function's documentation

Documentation describes what data a function accepts and what result it returns. The reference for JavaScript's built-in functions lives on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference). A function's page is split into sections. The Syntax section shows the function's name, its parameters, and their order. The Parameters section explains what each parameter is for, and the Return value section describes the result. You need all three sections to write a call.

Let's look at the [reference for `toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Below are its Syntax, Parameters, and Return value sections, with part of the text omitted.

```text
Syntax
  toFixed()
  toFixed(digits)

Parameters
  digits Optional
    The number of digits to appear after the decimal point; should be
    a value between 0 and 100, inclusive. If this argument is omitted,
    it is treated as 0.

Return value
  A string representing the given number using fixed-point notation.
  ...
```

Read the description from top to bottom, step by step.

1. The Syntax section lists the valid calls, one per line. You can call the method with no arguments or with one argument, `digits`.
2. The Parameters section explains each parameter by the name used in Syntax. The Optional label means the argument can be omitted. The last sentence of the description says that a missing `digits` is treated as `0`.
3. The Return value section describes the result. The method returns a string, which is why the answer is in quotes.
4. Further down, the page covers exceptions and other details. You can skip them on a first read.

The name `digits` stands for a parameter, and in a call you put a concrete value in its place, for example `(10.25).toFixed(1)`. The table matches the parts of the reference to the arguments of this call.

| Part of the reference | What it means | In the call `(10.25).toFixed(1)` |
| --- | --- | --- |
| `toFixed` | Method name | We call `toFixed()` on the number `10.25` |
| `digits` | Number of decimal places | We pass `1` |
| The Optional label next to `digits` | The argument can be omitted | We pass `1`, though we could leave it out |

Let's check both cases in the [browser console](https://developer.chrome.com/docs/devtools/console/). The `>` sign marks the input line, and the console prints the result under each call.

```console
> (10.25).toFixed(1)
'10.3'
> (10.25).toFixed()
'10'
```

The first call passes the precision `1` and gets the string `'10.3'`. The second leaves `digits` at its default and gets the string `'10'`. This is how we match the reference, the explanation in the documentation, and the actual result.

## Notation in references

References mark optional parameters in different ways. These marks help you read the signature and are not copied into the call.

| Notation in the reference | How to read it |
| --- | --- |
| Two lines, `toFixed()` and `toFixed(digits)` | The method is called without an argument or with the `digits` argument |
| `toFixed([digits])` | Another way to mark an optional argument. The square brackets are not part of the call |

The `toFixed([digits])` notation appears in third-party references and articles. The call `(10.25).toFixed(1)` passes the number `1` without brackets. Neither the name `digits` nor the square brackets go into the call.

If your browser translates the page, check function names, parameter names, and symbols in the signature against the original. Code uses the original names from the documentation.

## Working with an unfamiliar function

Reading a reference starts with a task. For example, to show a price with one decimal place, we find the call with `digits` in the Syntax section, check what this parameter means in Parameters, see in Return value that the result is a string, and then try the call `(10.25).toFixed(1)`. If the result matches the description, the call can go into the program.

Another function will have its own parameters and rules. Its signature tells us which arguments to pass, its description tells us the result and the limits, and a small example lets us check our understanding.
