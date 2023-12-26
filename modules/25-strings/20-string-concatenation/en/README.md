
In web development, programs use strings constantly. Everything we see on websites is represented as text in one way or another. This text is most often dynamic, it's made up of different connected pieces. In programming, the operation of joining one string to another is called **concatenation**.

```javascript
// The operator is the same as for adding
// but it has different semantics (meaning)

console.log('Dragon' + 'stone');
// => 'Dragonstone'
```

Strings always concatenate in the same order in which the operands are written. The left operand becomes the left part of the string, and the right one becomes the right part.

Here are a few more examples:

```javascript
console.log('Kings' + 'wood');     // => Kingswood

// Reverse word order
console.log('road' + 'Kings');     // => roadKings

// Any string can be concatenated
console.log("King's" + 'Landing'); // => King'sLanding
```

As you can see, strings can concatenate even if they are written in different quotes.

In the last example, the name of the city has a misprint: *King's Landing* should be written with a space. But there were no spaces at the beginning of our strings, and the spaces left and right of the `+` don't matter because they are not part of the strings.

There are two ways to fix this:

```javascript
// Both ways are functionally the same

// Put space in the end of the left part
console.log("King's " + 'Landing'); //  => King's Landing
// Put space in the beginning of the right part
console.log("King's" + ' Landing'); //  => King's Landing
```

A space is also a symbol. The more spaces you put, the wider the indentation will be:

```javascript
console.log("King's " + ' Landing');   // => King's  Landing

console.log("King's  " + '  Landing'); // => King's    Landing
```

https://replit.com/@hexlet/js-basics-strings
