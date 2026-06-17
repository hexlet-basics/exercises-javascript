Let's look at an example of a program that performs currency conversion:

```javascript
const eurosCount = 1000;
const dollarsCount = eurosCount * 1.25; // => 1250
const rublesCount = dollarsCount * 60;  // => 75000

console.log(rublesCount);
```

Technically, the code works. But from a professional development standpoint, such code is considered bad practice.

## What's the problem?

The expressions use unclear numbers: `1.25` and `60`. What are these values? An exchange rate? Where did they come from? In a month or a year, you most likely won't remember what these numbers mean. And if another developer opens the code, they simply won't understand where everything comes from. Such numbers are called magic.

Magic numbers are numeric values whose meaning is not clear from the code. They are usually used directly in mathematical expressions, without variables that have meaningful names. To understand their purpose, you have to dig into the context or read additional documentation. Magic numbers make code harder to read, understand, and maintain.

## How to avoid the magic

The simplest way is to extract such values into variables with clear names. Then the meaning becomes obvious:

```javascript
const dollarsPerEuro = 1.25;
const rublesPerDollar = 60;

const eurosCount = 1000;
const dollarsCount = eurosCount * dollarsPerEuro;   // => 1250
const rublesCount = dollarsCount * rublesPerDollar; // => 75000

console.log(rublesCount);
```

The numbers themselves haven't gone anywhere, but now they are stored in variables whose names unambiguously tell you what they are.

## Conclusion

Magic numbers make code unclear and hard to maintain. To avoid this problem, you should replace such numbers with variables that have meaningful names. This makes the code more readable, especially in the long run. Clear code is always more important than compactness, even if the program becomes a bit longer.
