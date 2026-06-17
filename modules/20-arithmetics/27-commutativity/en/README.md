The phrase "changing the order of the addends does not change the sum" is familiar to everyone from school. This principle is called the commutative law and is one of the fundamental laws of arithmetic.

## What is commutativity

An operation is called commutative if the order of the operands does not affect the result: if you swap the values, you get the same answer. An example of a commutative operation is addition.

```javascript
console.log(3 + 2); // => 5
console.log(2 + 3); // => 5
```

The identical result confirms that the operation is commutative.

```text
2 + 3 = 5     3 + 2 = 5
└──────────┬─────────┘
      same result

2 - 3 = -1    3 - 2 = 1
└──────────┬─────────┘
     different result
```

## Non-commutative operations

But not all operations have this property. For example, subtraction is a non-commutative operation:

```javascript
console.log(2 - 3); // => -1
console.log(3 - 2); // => 1
```

Swapping the operands gives a different result.

## In programming, it works the same way

Commutativity in programming works exactly as it does in arithmetic. JavaScript strictly follows mathematical rules.

Other non-commutative operations:

- Division: _8 / 2 ≠ 2 / 8_
- Exponentiation: _2 \*\*3 ≠ 3\*\* 2_

Examples in code:

```javascript
// Division
console.log(8 / 2);  // 8 divided by 2 = 4

// Exponentiation
console.log(3 ** 2); // 3 squared = 9
```

Therefore:

- Always carefully check the order of the operands, especially when working with unfamiliar operations;
- check commutativity experimentally rather than assuming it in advance.
