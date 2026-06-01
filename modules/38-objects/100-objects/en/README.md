JavaScript supports object-oriented programming (OOP) — very simply, an approach where we operate not with data and functions, but with objects and methods. We won't dwell on this in detail in this course, because the topic is large and requires some background. But we can't ignore it completely, because objects appear in JavaScript almost immediately. So we'll touch on it only as much as the current tasks require.

Up to this point we worked with data and applied functions to it. In OOP, instead of data we have objects on which methods are called. For example, strings in JavaScript are objects, and they have a `toUpperCase()` method that converts all letters to uppercase.

```javascript
const name = 'Robb';
console.log(name.toUpperCase()); // => ROBB
```

Unlike functions, methods are called *on an object*. First comes the object (a value, a variable, or a constant), then a dot, then the method call.

## Properties

Besides methods, data also has properties. A property is a value linked with the data, accessed with a dot right after a variable (or a constant). For example, strings have a length — the `length` property:

```javascript
const name = 'Robb';
const len = name.length;
console.log(len); // => 4
```

In many languages, string length is calculated with a special function, but in JavaScript properties are built into the language. Properties are linked with the data they are taken from. For primitive types, e.g. [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), all property descriptions are in the documentation. However, numbers have no properties at all.

JavaScript allows you to access properties that do not exist (e.g. in the case of typos). In this case their value is `undefined`:

```javascript
const name = 'Robb';
console.log(name.whatIsThat); // => undefined
```

_Self-check. What will `console.log(name[name.length])` print for the variable `name` above? Why is the result like that?_

## Methods

In addition to properties, data has methods - functions within properties. Basically, it means that methods work and are called like functions, but do it like a property using a dot notation.

```javascript
const name = 'Robb';
const upperName = name.toUpperCase();
console.log(upperName); // => 'ROBB'
```

Inline methods always apply to the data they are linked with. The `.toUpperCase()` method returns the same string but converts all characters to uppercase. Data usually has many more methods than properties, for example, strings have [several dozens](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) of them. In the documentation they may seem to be described weirdly at first glance: _String.prototype.toLowerCase()_. This description reveals some internal implementation details which are not important right now, moreover, we haven't studied all the necessary basics to talk about prototypes.

[Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) have methods as well:

```javascript
const temperature = 22.93;
// Rounding to one decimal place
const roundedTemperature = temperature.toFixed(1);
// This method returns a string containing the rounded number
console.log(roundedTemperature); // => '22.9'

// They can be called directly like this
// The brackets are necessary, or else it won't work
(22.93).toFixed(1); // '22.9'
```

_FYI. Technically, it's a bit more complicated. It's not the numbers themselves that have methods, but the data (objects) of the Number type. Numbers written in variables or constants are automatically converted to this type when called, this process is called boxing._

Why do we need methods? Why not just use functions? The situation with numbers is even more complicated. Some operations are implemented as methods of numbers, such as `.toFixed()`, and most of them are implemented as methods accessible via `Math`.

There are two reasons why it's done that way:

1. It's just always been like that. JavaScript was developed a little too quickly, so not everything was well-thought-out
2. Not all functions are linked to a specific value. For example, `Math.min()`. This function finds the minimum of all numbers passed to it. It doesn't make sense to make this function a method of a particular number, like `(1).min()`. It has no connection to any particular number

On the other hand, functions that work with a particular number should be implemented as methods for the sake of consistency. Such functions include calculating the modulus of a number. I.e., instead of `Math.abs(-10)`, it's more reasonable to have `(-10).abs()`.

As for methods in general, things are not so straightforward. Some languages have no methods and have no issues. Other languages use methods as the main tool for building functions, and even here regular functions are always used along with methods. JavaScript is a language that uses both approaches and actively uses both normal functions and methods.
