Along with the logical operators **AND** (`&&`) and **OR** (`||`), the "**negation**" operation is often used. It flips a boolean value to its opposite. In JavaScript, negation corresponds to the unary operator `!`:

```javascript
!true;  // false
!false; // true
```

For example, if you have a function that checks whether a number is even, you can use negation to check for oddness:

```javascript
const isEven = (number) => number % 2 === 0;

isEven(10);  // true
!isEven(10); // false
```

We simply added `!` to the left of the function call and got the opposite result. Negation lets you express the intended rules in code without writing new functions.

## Double negation

But what if you write `!!isEven(10)`? Surprisingly, the code works. In logic, double negation is equivalent to no negation at all:

```javascript
isEven(10);   // true
!isEven(10);  // false
!!isEven(10); // true
```

## Combining with && and ||

`!` can be combined with `&&` and `||`. Among the logical operators, negation has the highest precedence, so it is applied first:

```javascript
!true || true;   // (!true) || true   => false || true  => true
!true && false;  // (!true) && false  => false && false => false
```

Parentheses change the order of evaluation:

```javascript
!(true || true);  // !true  => false
!(true && false); // !false => true
```

A practical example: a function checks whether a driver can get behind the wheel — a license and sobriety are required:

```javascript
const canDrive = (hasLicense, isDrunk) => hasLicense && !isDrunk;

console.log(canDrive(true, false)); // => true  (has a license, sober)
console.log(canDrive(true, true));  // => false (has a license, but drunk)
console.log(canDrive(false, false)); // => false (no license)
```

## De Morgan's laws

When working with complex logical expressions, you sometimes need to invert them or rewrite them in an equivalent, more readable form. For this there are **De Morgan's laws** — two rules that describe how negation distributes over a compound expression:

```javascript
!(a && b)  ===  !a || !b
!(a || b)  ===  !a && !b
```

The first law: the negation of a conjunction equals the disjunction of the negations. Let's check:

```javascript
!(true && false);     // !false => true
!true || !false;      // false || true => true
```

The second law: the negation of a disjunction equals the conjunction of the negations:

```javascript
!(true || false);     // !true => false
!true && !false;      // false && true => false
```

In practice, De Morgan's laws help simplify conditions. For example, instead of `!(isAdmin || isModerator)` you can write `!isAdmin && !isModerator` — which reads as "not an administrator and not a moderator".
