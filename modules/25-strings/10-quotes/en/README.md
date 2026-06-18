Strings in JavaScript programming are used very often and in a wide variety of situations. With their help, we work with text, display messages on the screen, process user input, and interact with external systems.

From JavaScript's point of view, a string is simply a set of characters enclosed in quotes. Let's look at some examples.

```javascript
'Hello'
'Goodbye'
'G'
' '
''
```

All of these options are strings.

- `'Hello'`, `'Goodbye'`, and `'G'` are strings of several or a single character.
- `' '` is a string consisting of a single space.
- `''` is an empty string; it contains no characters at all. It plays the same role as 0 in mathematics.

In other words, everything inside the quotes is considered a string, even if there is only a space or nothing at all.

If you display strings on the screen, `'Hello'` and `'Goodbye'` will be clearly visible. But `' '` and `''` can be confusing, because the output of an empty string looks like complete absence, while a string with a space shows "empty space", which is visually hard to distinguish. At the same time, JavaScript clearly distinguishes between them. An empty string means the absence of characters, whereas a string with a space contains a specific space character.

A check question. Are these the same strings or not?

```javascript
'hexlet'
' hexlet'
```

## Terminology. String or line?

There is a terminological trap in programming.

- A string is a data type (the one discussed above), for example `'hello'`.
- A line is a line of text in a file or in code.

For example, in the code below there is a line, but not a string.

```javascript
console.log(5);
```

To avoid confusion, in this course we will use the following wording.

- String, when we talk about the data type.
- Line, when we are talking about lines of code.

## Single and double quotes

In JavaScript, strings can be written in both single and double quotes.

```javascript
console.log('Hello');
console.log("Hello");
```

By default, it is customary to use single quotes `'` if double quotes are not required inside the string. This style is followed by the popular code style standard from [AirBnb](https://github.com/airbnb/javascript).

## The problem with quotes inside a string

Imagine you want to print the string *Dragon's mother*. It contains an apostrophe (*'s*), which matches the single quote character. Let's try this.

```javascript
console.log('Dragon's mother');
// Uncaught SyntaxError: missing ) after argument list
```

JavaScript will decide that the string ends after the word `Dragon`, and it will not recognize the rest as valid code, which will cause a syntax error. To avoid this, let's wrap the string in double quotes.

```javascript
console.log("Dragon's mother");
```

Now JavaScript understands that the single quote inside the string is an ordinary character, and the string itself begins and ends with double quotes.

If you need double quotes inside the string and single quotes outside, there will be no problem either.

```javascript
console.log('He said "No"');
```

Sometimes both types of quotes appear in a string.

```
Dragon's mother said "No"
```

In this case, to keep JavaScript from confusing the quotes inside the string with the outer ones, an escape character is used — the backslash `\`. It tells the interpreter that the character following it is part of the string, not a control character.

```javascript
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"
```

Here we escape the double quotes inside a string enclosed in double quotes.

Note that JavaScript treats `\"` as a single quote character, not two characters. The same applies to `\'`, `\\`, `\n`, and other escape sequences. They look like two characters in the code, but in the string they count as one.

The same works in the opposite case.

```javascript
console.log('Dragon\'s mother said "No"');
// => Dragon's mother said "No"
```

## How to print a backslash

To print the backslash itself, it also needs to be escaped.

```javascript
console.log("\\");
// => \
```
