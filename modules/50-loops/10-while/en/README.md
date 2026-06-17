Besides conditional constructs, programming is impossible without loops. This is a special mechanism that lets you perform any action multiple times. Almost all computations are built on it — from calculating the average grade in a group to handling incoming requests on websites.

A loop stores a repeated action in one place and runs it again while a condition remains true.

## First example

Suppose a program needs to print the string `'Hello!'` five times. To stop repeating at the right moment, the program needs a variable that holds the number of the current step. Such a variable is usually called a counter.

In the example, the counter is named `counter`. Before the loop it equals `0`. After each string output, we increase it by one.

```javascript
let counter = 0;
while (counter < 5) {
  console.log('Hello!');
  counter = counter + 1;
}

// => Hello!
// => Hello!
// => Hello!
// => Hello!
// => Hello!
```

After `while`, the condition is written in parentheses, and the loop body is in curly braces. While `counter < 5`, the loop body executes. After the body runs, the engine returns to the condition and checks it again. When the condition becomes false (`false`), the program exits the loop and continues executing the rest of the code.

Without changing the counter, the condition will never become false, and the loop turns into an **infinite** one. From the outside, it looks as if the program has frozen.

## How the loop works step by step

Before the first repetition, `counter` equals `0`.

**Step 1.** The condition `counter < 5` is checked. The value `0` is less than `5`, so the loop body executes. `Hello!` is printed to the screen, and `counter` increases to `1`.

**Step 2.** The condition is checked again. The value `1` is still less than `5`, so the loop body executes once more. `Hello!` is printed to the screen again, and `counter` increases to `2`.

This continues until `counter` becomes equal to `5`. On the next check, the condition `counter < 5` will be false, so the loop will finish.

```text
counter = 0
┌──→ counter < 5?
│     true │
│          ↓
│    console.log('Hello!')
│    counter = counter + 1
└──────────┘
      false → exit the loop
```

## Loop body and continuing the program

The loop body includes everything inside the curly braces. The code after the loop runs once:

```javascript
let counter = 0;
while (counter < 2) {
  console.log('Hello!');
  counter = counter + 1;
}

console.log('End of loop');
```

Here `console.log('Hello!')` and `counter = counter + 1` are inside the loop, while `console.log('End of loop')` is outside it, so it runs once after the loop finishes.

## A loop inside a function

Now let's move the loop into a function. It will print the numbers from `1` up to the passed value:

```javascript
const printNumbers = (n) => {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i = i + 1;
  }
  console.log('Finished!');
};

printNumbers(3);
// => 1
// => 2
// => 3
// => Finished!
```

The `while` loop prints numbers until `i` becomes greater than `n`. After that, the program exits the loop and executes `console.log('Finished!')`.

The condition and the change of the counter depend on the task. The counter can be increased by `1`, by `2`, or by `10` at once. It can be decreased if the loop goes from a larger value to a smaller one. The main thing is that the condition eventually becomes false, otherwise the loop will run forever.
