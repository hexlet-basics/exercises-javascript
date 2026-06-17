
In addition to code, source files can contain comments. This is text that is not part of the program and is used by programmers for notes. They are used to add explanations of how the code works, what bugs need to be fixed here, or as reminders to add something later.

```javascript
// Удалить строку ниже после реализации задачи по регистрации
console.log(10);
```

There are two types of comments in JavaScript:

## Single-line comments

*Single-line comments* start with `//`. After these two characters, any text can follow; the entire line will not be analyzed or executed.

A comment can take up the whole line. If one line is not enough, several comments are created:

```javascript
// For Winterfell!
// For Lanisters!
```

A comment can be placed on a line after some code:

```javascript
console.log('I am the King'); // For Lannisters!
```

## Multi-line comments

*Multi-line comments* start with `/*` and end with `*/`.

```javascript
/*
  The night is dark and
  full of terrors.
*/
console.log('I am the King');
```

Such comments are usually used for documenting code, for example, functions.

## Service comments

While working, you will encounter such code in our editor:

```javascript
// BEGIN

// END
```

*BEGIN* and *END* here are ordinary comments that do not affect the program in any way. They show where to write the code for the task.

```javascript
// BEGIN
<your solution here>
// END
```

When you see *BEGIN* and *END*, write your code between them and leave the rest unchanged.
