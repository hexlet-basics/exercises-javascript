As long as a program is small, all the code can live in a single file. This approach is convenient for simple examples and small tasks. But over time a program starts to grow. When there is a lot of code, it becomes hard to navigate a single file. Real applications consist of tens of thousands of lines (at least) and hundreds of files.

To split a program into separate logical parts, JavaScript uses modules. A separate file with code is a module. The language provides mechanisms that let one file use functions and constants from another.

## export and import

A module decides what to expose. The `export` keyword is used for this. Another file pulls in what was exported via `import`.

You have probably already seen lines like this at the beginning of some exercises — now let's figure out what they mean:

```javascript
import { length } from 'hexlet-basics/string';

console.log(length('Hello!')); // => 6
```

This line connects the `length` function from the `hexlet-basics/string` module and makes it available in the current file.

## Named imports

You can import several names from one module at once by listing them in curly braces:

```javascript
import { reverse, toUpperCase } from 'hexlet-basics/string';

console.log(reverse('hexlet'));     // => telxeh
console.log(toUpperCase('hexlet')); // => HEXLET
```

After such an import, you call the functions directly, by their names. This is convenient: you don't have to specify which module a function came from every time.

## Default export

To export something, a module marks it with the word `export`. There are two kinds of export. A named one — there can be as many exported names as you like:

```javascript
// string.js
const reverse = (s) => s.split('').reverse().join('');
const length = (s) => s.length;

export { reverse, length };
```

And a default export — a module can have only one of those. You have already come across it when defining functions:

```javascript
// sum.js
const sum = (a, b) => a + b;

export default sum;
```

A default import is written without curly braces, and you may pick any name for it:

```javascript
import sum from './sum.js';

console.log(sum(2, 3)); // => 5
```

## Renaming on import

Sometimes a name from a module is already taken in the current file. To avoid a conflict, an import can be renamed with `as`:

```javascript
import { reverse as reverseString } from 'hexlet-basics/string';

console.log(reverseString('hexlet')); // => telxeh
```

Now the function is available under the name `reverseString`, while the original name `reverse` stays free.

## Standard modules

Every language ships with a set of ready-made functions. In JavaScript, most of them are available globally and need no import — for example, the `Math` object for math or `console` for output.

But JavaScript runs in different environments. The Node.js server environment has built-in modules that need to be imported. They are imported with the `node:` prefix — for example, the `node:fs` module for working with files:

```javascript
import { readFile } from 'node:fs/promises';
```

Ready-made functions can be taken not only from standard modules but also from third-party ones. We'll talk about how those are distributed in the next lesson.
