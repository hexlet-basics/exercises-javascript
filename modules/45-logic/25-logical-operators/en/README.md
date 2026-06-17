
Logical expressions can be combined with one another, creating increasingly tricky checks. A good example is password validation. As you know, some websites require a password between 8 and 20 characters long during registration. Honestly, it's a strange restriction, but what can you do. In math, we would write `8 < x < 20` (where `x` is the length of a specific password), but in JavaScript this trick won't work. We will have to make two separate logical expressions and join them with a special "AND" operator:

```
The password is longer than 8 characters **AND** the password is shorter than 20 characters.
```

Here is a function that takes a password and says whether it meets the conditions or not:

```javascript
const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

isStrongPassword('qwerty'); // false
isStrongPassword('qwerty1234'); // true
isStrongPassword('zxcvbnmasdfghjkqwertyui'); // false
```

`&&` means "AND" (in mathematical logic this is called conjunction). The whole expression is considered true only when each operand is true — each of the component expressions. In other words, `&&` means "both one and the other".

The precedence of this operator is lower than that of the comparison operators, so the expression works correctly without parentheses.

Besides `&&`, the operator `||` — "OR" (disjunction) is often used. It means "either one, or the other, or both". Operators can be combined in any number and in any sequence, but when `&&` and `||` occur together, it's better to set precedence with parentheses. Below is an example of an extended function for determining password correctness:

```javascript
const hasSpecialChars = (str) => /* checks whether the string contains special characters */;

const hasCapitalChars = (str) => /* checks whether the string contains capital letters */

const isStrongPassword = (password) => {
  const length = password.length;
  // Parentheses set the precedence. It's clear what relates to what.
  return length > 8 && (hasSpecialChars(password) || hasCapitalChars(password));
};
```

Another example. We want to buy an apartment that meets the conditions: an area of 100 square meters or more on any street **OR** an area of 80 square meters or more, but on the central street `Main Street`.

Let's write a function that checks the apartment. It takes two arguments: the area (a number) and the street name (a string):

```javascript
const isGoodApartment = (area, street) => {
  // Via a variable so the function isn't too long
  const result = area >= 100 || (area >= 80 && street === 'Main Street');
  return result;
};

isGoodApartment(91, 'Queens Street'); // false
isGoodApartment(78, 'Queens Street'); // false
isGoodApartment(70, 'Main Street');   // false

isGoodApartment(120, 'Queens Street'); // true
isGoodApartment(120, 'Main Street');   // true
isGoodApartment(80, 'Main Street');    // true
```

The branch of mathematics that studies logical operators is called Boolean algebra. Below are the "truth tables" — you can use them to determine the result of applying an operator:

## AND `&&`

| A     | B     | A && B   |
|-------| ------|----------|
| TRUE  | TRUE  | **TRUE** |
| TRUE  | FALSE | FALSE    |
| FALSE | TRUE  | FALSE    |
| FALSE | FALSE | FALSE    |

A couple of examples:

```javascript
// true && true;
3 > 2 && 'wow'.startsWith('w'); // true

// true && false;
'start' === 'start' && 8 < 3; // false
```

## OR `||`

| A     | B     | A &vert;&vert; B |
|-------|-------|----------|
| TRUE  | TRUE  | **TRUE** |
| TRUE  | FALSE | **TRUE** |
| FALSE | TRUE  | **TRUE** |
| FALSE | FALSE | FALSE    |

A couple of examples:

```javascript
// true || true;
3 > 2 || 'wow'.startsWith('w'); // true

// false || false;
'start' === 'Start' || 3 < 3; // false
```
