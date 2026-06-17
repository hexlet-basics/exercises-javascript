In mathematics, there are different types of numbers. For example:

- Natural: positive whole numbers: 1, 2, 3, and so on.
- Rational: fractional numbers that can be represented as a division, for example: 0.5, 1.75, 3.14.

From a mathematical point of view, everything is simple. But from a computer's point of view, there is a real gulf between these types of numbers. Try to work out in your head: what is `0.2` + `0.1`? Obviously, `0.3`. But here is what JavaScript will say:

```javascript
console.log(0.2 + 0.1); // => 0.30000000000000004
```

Instead of the familiar 0.3, we get 0.30000000000000004.

```text
Expectation: 0.1 + 0.2  →  0.3
Reality:     0.1 + 0.2  →  0.30000000000000004
                             └── storage error
```

## Why does this happen?

This behavior is typical for JavaScript, Python, C++, and most other programming languages.

The reason lies in how a computer is built. A computer works with limited memory, whereas rational numbers are infinitely precise. Between 0.1 and 0.2 you can fit infinitely many other numbers. But a computer cannot store infinity. It approximates the number, trying to fit it into the available number of bits.

Such approximate values are called floating point numbers. Their storage and the calculations with them follow strict rules described in a special standard, IEEE 754, which most programming languages rely on.

## When such numbers appear

Floating point numbers appear in programs more often than it might seem. Here are the main cases:

- When you explicitly write a fractional number, for example 0.1, 2.5, 3.14.
- When you perform division, even if you divide two whole numbers:

```javascript
console.log(1 / 2); // => 0.5
console.log(2 / 3); // => 0.6666666666666666
```

Even if the result seems "nice," internally it is still represented as an approximate value. Some fractions, such as 1 / 3, cannot be represented exactly in the binary system at all, so their precision is always limited.

## Where this is critical and how it is handled

Usually a small error does not get in the way. But in financial calculations, scientific and engineering tasks, as well as when comparing results precisely, it can become a problem. For example, an error of a fraction of a cent can produce an incorrect final amount, and a long chain of calculations can gradually accumulate inaccuracy.

In real programs this is handled in different ways. Money is often stored in the smallest units, for example in cents, that is, whole numbers are used instead of fractional ones. In other cases the result is rounded to the required number of digits, numbers are compared with an acceptable error, or special libraries for precise calculations are used.

## What you need to remember

Operations with floating point numbers are not always precise, and that is normal. This behavior is typical for most programming languages and is explained by the way computer memory is built. Precision can be controlled, for example by rounding or by comparing numbers with a given error. And when working with money, precise measurements, or scientific calculations, it is better to use special data types that provide control over precision.
