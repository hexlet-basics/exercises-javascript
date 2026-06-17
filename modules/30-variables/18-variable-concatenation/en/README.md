Earlier, we already joined strings directly using concatenation. Now we'll do the same thing, but with variables. The good news: the syntax stays the same. The values of the variables are simply substituted in.

## Joining two strings directly

```javascript
const what = 'Kings' + 'road';
console.log(what); // => Kingsroad
```

Everything is simple here: two strings are joined into one. This is how concatenation works: the `+` operator adds strings together, creating a new string.

## Joining a string and a variable

If the variable `first` holds the string `'Kings'`, we can safely join it with another string:

```javascript
const first = 'Kings';
const what = first + 'road';
console.log(what); // => Kingsroad
```

JavaScript substitutes the value of the variable, performs the operation, and creates the resulting string.

## Joining two variables

In the same way, you can combine the values of two variables, if both contain strings:

```javascript
const first = 'Kings';
const last = 'road';
const what = first + last;
console.log(what); // => Kingsroad
```

You can also add spaces:

```javascript
const full = first + ' ' + last;
console.log(full); // => Kings road
```

```text
first = 'Kings'
last  = 'road'

first   +  ' '  +  last
└─┬──┘            └─┬┘
'Kings' + ' '  + 'road'
└────────┬─────────┘
    'Kings road'
```

## What if the variable contains a number?

In JavaScript, the `+` operator behaves in a special way when there's a string on one side and a number on the other. In this case, the number is automatically converted to a string, and concatenation happens:

```javascript
const age = 42;
console.log('Age: ' + age); // => Age: 42
```

The same applies to variables holding the results of computations:

```javascript
const price = 50 * 1.25 * 6.91; // => 431.875
console.log('Price in yuans: ' + price); // => Price in yuans: 431.875
```

There's also an explicit way to convert a number to a string using `String()` — we'll cover it in the lesson about type coercion.
