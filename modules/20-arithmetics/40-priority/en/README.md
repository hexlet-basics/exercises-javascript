Consider a simple expression:

```javascript
console.log(2 + 2 * 2); // => 6
```

The result is 6, not 8. This is explained by the concept of operator precedence in mathematics and programming. It determines the order in which operations are performed:

- Multiplication and division are performed before addition and subtraction.
- Exponentiation (`**`) has an even higher precedence.

```text
Operator precedence (from high to low):

  **        exponentiation
   ↓
  * / %     multiplication, division, remainder
   ↓
  + -       addition, subtraction
```

For example:

```javascript
console.log(2 * 2 ** 3); // => 16, because first 2 ** 3 = 8, then 8 * 2 = 16
```

If operations with the same precedence are next to each other, they are performed from left to right:

```javascript
console.log(8 / 2 * 3); // => 12, because first 8 / 2 = 4, then 4 * 3 = 12
```

## Controlling the order of operations

Sometimes you need to change the order of calculations. Parentheses are used for this. They let you specify which operations should be performed first:

```javascript
console.log((2 + 2) * 2); // => 8
```

Parentheses can be placed around any part of an expression and nested within each other:

```javascript
console.log(3 ** (4 - 2));                       // => 9
console.log(7 * 3 + (4 / 2) - (8 + (2 - 1)));   // => 14
```

The main rule: always close your parentheses. Unmatched parentheses cause errors: both beginners and experienced programmers sometimes forget about the closing parenthesis.

> Write parentheses as a pair right away. For example, type `()` and then fill in the inner part. Most code editors (including ours) automatically add the closing parenthesis as soon as you write the opening one.

## Improving readability

Sometimes an expression works correctly but looks confusing. In such cases, parentheses can be added just for clarity: they won't change the result, but they will improve readability.

```javascript
// Before
console.log(8 / 2 + 5 - -3 / 2);         // => 10.5

// After
console.log(((8 / 2) + 5) - (-3 / 2));   // => 10.5
```

Programs are written by people, and they are read by people too. The computer doesn't care how understandable the code is: it just needs to be syntactically correct. For a human, clear and tidy code is the key to convenience, especially when working in a team or debugging errors.
