Often, strings need to be assembled from several parts, for example, to combine a first and last name, add a unit of measurement, or compose text from a template. The concatenation operation, that is, gluing strings together, is used for this.

## How to combine strings

In JavaScript, strings are combined using the `+` operator. Even though this operator is also used to add numbers, in the case of strings it means combining, that is, gluing the contents together.

```javascript
console.log('Dragon' + 'stone');
// => Dragonstone
```

Order matters. First comes the left part (`'Dragon'`), then the right part (`'stone'`). The result comes out in the order in which the operands are specified.

Here is how combining several strings works:

```text
'Hello' + ', ' + 'World!'
└──┬──┘   └┬┘   └──┬───┘
   └────┬───┘       │
  'Hello, '    +  'World!'
     └──────┬───────┘
      'Hello, World!'
```

Examples.

```javascript
console.log('Kings' + 'wood');       // => Kingswood
console.log('Kings' + 'road');       // => Kingsroad
// Here we use double quotes on the outside because there is a single quote inside
console.log("King's" + 'Landing');   // => King'sLanding
```

JavaScript lets you combine strings even if they are written with different quotes. The main thing is that both parts are strings.

## A space is also a character

When combining, JavaScript does not insert spaces automatically. If there should be a space between the parts, it must be specified manually.

```javascript
// Space at the end of the first string
console.log("King's " + 'Landing');  // => King's Landing

// Space at the beginning of the second string
console.log("King's" + ' Landing');  // => King's Landing
```

The result will be the same. But if you do not add a space, the words will glue together.

## Escape sequences

In strings, you can use escape sequences, for example `\n` for a line break or `\t` for a tab. During concatenation, they work the same as any other characters.

```javascript
console.log('Hello,' + '\n' + 'World!');
// Hello,
// World!
```

In the same way, you can use the tab `\t` to align output.

```javascript
console.log('A' + '\t' + 'B'); // => A	B
```

## Conclusion

Concatenation is the combining of strings via `+`, and strings can be combined regardless of the type of quotes.

- Gluing happens strictly in order from left to right.
- Spaces are not added automatically; they must be included in the strings manually.
