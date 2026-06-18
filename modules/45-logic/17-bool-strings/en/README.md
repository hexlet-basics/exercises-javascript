Comparison operations work not only with numbers but also with strings. In JavaScript, strings are compared lexicographically: character by character from left to right by the numeric codes of the characters (Unicode).

```javascript
console.log('apple' < 'banana'); // => true
console.log('cat' > 'dog');      // => false
console.log('abc' === 'abc');    // => true
console.log('hello' !== 'world'); // => true
```

Here `'apple' < 'banana'`, because the code of the character `a` (97) is less than the code of `b` (98), and it is the first differing character that decides the outcome of the comparison. You can find out the code of a character with the `charCodeAt()` method:

```javascript
console.log('a'.charCodeAt(0)); // => 97
console.log('b'.charCodeAt(0)); // => 98
```

The comparison is case-sensitive: the code of `'Z'` (90) is less than the code of `'a'` (97). Here are a few examples where the first letters are in different cases:

```javascript
console.log('Zebra' < 'apple');  // => true  — 'Z'(90) < 'a'(97)
console.log('apple' < 'Banana'); // => false — 'a'(97) > 'B'(66)
console.log('Apple' < 'apple');  // => true  — 'A'(65) < 'a'(97)
```

Let's write a function that checks whether a word starts with a given letter. To do this, we take the first character of the string and compare it with the required letter:

```javascript
const startsWithLetter = (word, letter) => word[0] === letter;

console.log(startsWithLetter('apple', 'a'));  // => true
console.log(startsWithLetter('banana', 'a')); // => false
```

Comparison operations are expressions just like arithmetic ones. You can substitute ready-made values and other expressions into them, for example `word[0]` above. You can also use the `.length` property:

```javascript
console.log('apple'.length > 3); // => true, because the length is 5
console.log('hi'.length > 3);    // => false, because the length is 2
```

First `'apple'.length` is evaluated (resulting in the number `5`), and then this number is compared with `3`. That is, the operands of the expression are computed first, and then the comparison is performed.

## Useful predicates

Strings in JavaScript have built-in predicate methods. They return `true` or `false` and help check various properties of a string:

```javascript
console.log('hello'.startsWith('he')); // => true — the string starts with 'he'
console.log('hello'.endsWith('lo'));   // => true — the string ends with 'lo'
console.log('hello'.includes('ell'));  // => true — the string contains 'ell'
```

Such methods let you check strings against the required conditions right in the code, without writing additional functions.
