At the most basic level, computers only use numbers. Even in high-level language applications, there are many numbers and operations with them. To get started with programming all you need to know is basic arithmetic – let’s start with that.

When adding two numbers in math, we write, for example, `3 + 4`. The same goes for programming. Here is a program that adds two numbers:

```javascript
// Don't forget the semicolon at the end,
// since each line of code is a statement

3 + 4;
```

The statement `3 + 4` makes the computer add up the numbers and find the result. If you run this program, nothing will happen. Well, the computer will calculate the sum, of course, but that'll be it. The result of the sum isn't used, and as such, this program has no real value. We need to ask the computer to add `3 + 4`, and then give it a command to do something with the result. For example, print it:

```javascript
// The sum is calculated first,
// it is then passed to the print function

console.log(3 + 4);
```

After launching, the result will appear on the screen:
```
7
```

The following operations are available besides addition:
`*` — multiplication
`/` — division
`-` — subtraction
`%` — [modulo](https://en.wikipedia.org/wiki/Modulo_operation) (remainder after division)
`**` — power

Now let's print the result of division, and then the result of exponentiation:

```javascript
console.log(8 / 2);  // => 4
console.log(3 ** 2); // => 9
```
Sometimes we will show the result of the executed code in the comments like this: `=> RESULT`. For example, `// => 4`.

The first statement will print `4` (since `8 / 2` is `4`), and the second statement will print 9 (since 3<sup>2</sup> is 9).
