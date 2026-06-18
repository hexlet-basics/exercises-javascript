
Aggregation applies not only to numbers but also to strings. These are tasks in which a string is built dynamically, that is, it is not known in advance how big it will be or what it will contain.

Imagine a function that can "multiply" a string, that is, it repeats it a specified number of times:

```javascript
repeat('hexlet', 3); // hexlethexlethexlet
```

The way this function works is quite simple: in a loop, the string is "grown" the specified number of times:

```javascript
const repeat = (text, times) => {
  // The neutral element for strings is the empty string
  let result = '';
  let i = 1;

  while (i <= times) {
    // Each time we add the string to the result
    result = `${result}${text}`;
    i = i + 1;
  }

  return result;
};
```

Let's break down the execution of this code step by step:

```javascript
// For the call repeat('hexlet', 3);
let result = '';
result = `${result}hexlet`; // hexlet
result = `${result}hexlet`; // hexlethexlet
result = `${result}hexlet`; // hexlethexlethexlet
```

Visually, the process of growing the string looks like this:

```text
repeat('hexlet', 3):

i=1: result = ''             + 'hexlet' = 'hexlet'
i=2: result = 'hexlet'       + 'hexlet' = 'hexlethexlet'
i=3: result = 'hexlethexlet' + 'hexlet' = 'hexlethexlethexlet'
                                            └── result
```

## Neutral element

For growing to work, a starting value is needed. For strings, this value is the **empty string** `''`.

It is called the neutral element because it changes nothing during concatenation:

```javascript
console.log('' + 'abc'); // => abc
console.log('abc' + ''); // => abc
```

That is why the empty string is always used as the initial value when aggregating strings.
