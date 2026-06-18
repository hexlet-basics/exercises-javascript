Programs work with different kinds of information: text, numbers, dates, boolean values. Every value in a program has a type.

For example:

- `'Hello, World!'` is a string (`string`);
- `7`, `-198`, `0`, `3.14` are numbers (`number`);
- `true` and `false` are boolean values (`boolean`).

## What is a data type?

A data type defines:

- which values belong to it;
- which operations can be performed with it.

For example, numbers can be added, divided, and multiplied. Strings are combined differently — using concatenation. Multiplying a string by a string makes no sense:

```javascript
// Nonsense: 'mom' * 'notebook'
```

## Numbers and strings belong to different types

An example of printing a number:

```javascript
console.log(5);  // => 5
console.log(-5); // => -5
```

An example of printing a string:

```javascript
console.log('5');  // => 5
console.log('-5'); // => -5
```

On the screen the result looks the same, but inside the program these are completely different things:

| Value    | Data type             |
|----------|-----------------------|
| `5`      | `number` (number)     |
| `'5'`    | `string` (string)     |

## Numbers in JavaScript

In many languages, integers and fractional numbers are different types (for example, in Python they are `int` and `float`). JavaScript has no such division: both integers and fractional numbers belong to a single type — `number`.

```javascript
console.log(10.234);     // => 10.234
console.log(-0.4);       // => -0.4

console.log(3.5 + 1.2);  // => 4.7
console.log(5 / 2);      // => 2.5
console.log(2.75 - 0.5); // => 2.25
```

## Primitive types

Types like `string`, `number`, `boolean` are called primitive — they are built directly into the language.

```text
JavaScript primitive types
├── number    : numbers (integer and fractional) (7, -3, 3.14)
├── string    : strings                          ('hello')
├── boolean   : boolean type                      (true, false)
├── null       : intentional absence of a value
└── undefined : value is not set
```

In addition to strings and numbers, JavaScript has the boolean type `boolean` with the values `true` and `false`, as well as the special values `null` and `undefined`. We will encounter them in more detail in the future.

## How to find out the type of a value

The `typeof` operator returns the type as a string:

```javascript
console.log(typeof 42);        // => 'number'
console.log(typeof 'hello');   // => 'string'
console.log(typeof true);      // => 'boolean'
console.log(typeof undefined); // => 'undefined'
console.log(typeof null);      // => 'object'  (a historical JS bug)
```

There are also composite types — arrays, objects, and others. We will get acquainted with them later. Moreover, in JavaScript you can create your own types (for example, classes), but to start with it is important to understand primitives well.
