We know about two different data types: numbers and strings. We can, for example, add numbers, because addition is an operation for the "numbers" type.

But what if we apply this operation not to two numbers, but to a number and a string?

```javascript
console.log(1 + '7'); // => 17
```

Even though `'7'` is a string and not a number, the JavaScript interpreter returned the answer `'17'`, as if we were adding two strings. When JavaScript sees a type mismatch, it tries to convert the information on its own. In this case, it converted the number `1` into the string `'1'`, and then calmly concatenated `'1'` and `'7'`.

## Weak typing

Not all languages do this. JavaScript is a language with **weak typing**. It knows about the existence of different types (numbers, strings, and others), but treats their use rather loosely and tries to convert data whenever this seems reasonable to it.

Sometimes JavaScript goes to extremes. Most expressions that don't work in other languages do work in JavaScript. Try performing any arithmetic operation other than addition, substituting strings into it — you'll see that the code runs and returns `NaN` (Not a Number):

```javascript
console.log('one' * 'two'); // => NaN
```

```text
1 + '7'   →  '17'   (the number turned into a string, concatenation)
'7' - 1   →  6      (the string turned into a number, subtraction)
'one' * 2 →  NaN    (the string cannot be turned into a number)
```

## What about strict languages?

In languages with **strict (strong) typing**, you can't add a number to a string — the program will stop with an error. For example, in Python or Ruby the expression `1 + '7'` will lead to a type error: the language requires you to explicitly specify how to convert the data.

At the same time, languages aren't divided neatly into two camps — "strict" and "weak". It's more accurate to say that different languages have a **different degree of strictness**: in some there are almost no implicit conversions, while in others there are many. JavaScript is at the "weak" end of this scale.

## Static and dynamic typing

There is another, separate concept — static and dynamic typing. It describes **when** types are checked. JavaScript belongs to the dynamically typed languages: types are checked while the program is running. In statically typed languages, the check usually happens earlier, before the code is run.

It's important not to confuse two things:

- static/dynamic typing answers the question "**when** are types checked";
- strong/weak typing answers the question "**what will happen** if you mix different types without an explicit conversion".

These are independent properties. JavaScript is a dynamic and weakly typed language.

## Why JavaScript is like this

JavaScript was created for the internet, and on the internet all information is strings. Even when you enter a phone number or a year of birth on a website, this data arrives at the server not as numbers, but as strings. That's why the authors of the language decided that automatically converting types is convenient.

There is convenience, but it comes at a high price. In practice, implicit conversions create a multitude of errors that are hard to find: the code may sometimes work and sometimes not — depending on whether you got "lucky" with the automatic conversion in a particular case. The programmer doesn't notice this right away.

In further tasks you will encounter such behavior more than once. The question will often arise: "why does my code not work the way I expect?". Weak typing runs as a common thread through all of JavaScript development.
