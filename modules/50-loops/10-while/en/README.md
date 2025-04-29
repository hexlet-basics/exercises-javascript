
Our code is getting more and more complex and extensive. It's still quite far from real applications, which contain tens or hundreds of thousands (sometimes millions) of lines of code. However, our code is already complex enough to make inexperienced programmers feel a bit tense. Starting from this lesson, we're moving on to one of the most difficult basic topics in programming: loops.

All applications serve very pragmatic purposes. They help to manage employees, finances, and entertain, after all. Despite the differences, all these programs contain and execute similar algorithms. What's that? An algorithm is a sequence of actions (statements) which lead us to an expected result. This description fits any program in general, but with algorithms, we usually mean something more specific.

Imagine that we have a book, and we want to find a particular phrase within it. We remember the phrase itself, but we don't know what page it is on. How do we find the right page? The easiest (and longest) way is to look through the pages one by one until we find the right one. In the worst case we have to look through all the pages, but we still get the result. This very process is called an algorithm. It includes a logical verification (if the phrase is found) and an exhaustive page search. The number of pages you will have to look through is unknown, but the process repeats itself from time to time in exactly the same way. This is why we need loops to perform repetitive actions. In this case, each repetition is called an iteration.

Let's say we want to write a function that prints all numbers between 1 and a given number (via arguments):

```javascript
printNumbers(3);
// => 1
// => 2
// => 3
```

You can't implement this function with the tools you've already learned, because the number of outputs isn't known beforehand. But with loops this won't be a problem:

```javascript
const printNumbers = (lastNumber) => {
  // i means index
  // it's widely accepted in many languages
  // as a loop counter
  let i = 1;

  while (i <= lastNumber) {
    console.log(i);
    i = i + 1;
  }
  console.log('finished!');
};

printNumbers(3);
```

<pre class='hexlet-basics-output'>
1
2
3
finished!
</pre>

Here we use a `while` loop. It has three elements:

* The keyword here is `while`. It is not a function call, although it resembles it

* Predicate. A condition given in parentheses after `while`. This condition must be evaluated and tested before executing the loop body at each iteration

* Loop body. Block of code in curly braces. This block is equivalent to the block of code in functions. Anything that is defined inside this block (constants or variables) is visible only within this block

You can read it as follows: "as long as the condition (predicate) `i <= lastNumber` is true, execute the code from the body of the loop". Let's analyze how this code works for a function call `printNumbers(3)`:

```javascript
// Initializing i
let i = 1;

// Predicate is true, so execute loop body
while (1 <= 3)
// console.log(1);
// i = 1 + 1;

// The loop body is executed, so we return to the beginning
while (2 <= 3)
// console.log(2);
// i = 2 + 1;

// The loop body is executed, so we return to the beginning
while (3 <= 3)
// console.log(3);
// i = 3 + 1;

// Predicate is false, so execution goes beyond loop
while (4 <= 3)

// console.log('finished!');
// On this step i is 4, but we don't need it anymore
// function terminates
```

The main purpose of a loop is to end (exit from a loop). The process which generates the loop must eventually stop. It's up to the programmer to stop it. Usually this comes down to introducing a variable called the "loop counter". The counter should first be initialized, that is, you must assign it an initial value. In our example, it's the statement `let i = 1`, which is executed before the loop. Then the loop condition checks to see if the counter has reached its limiting value. Finally, the counter changes its value to `i = i + 1`.

This is where beginners make the most mistakes. For example, accidentally forgetting to increment the counter or having an incorrect predicate check can lead to an infinite loop. In this case the loop works endlessly and the program never stops. We then have to end it forcibly (it may sometimes be the case that when real applications freeze, there is an infinite loop running inside them).

```javascript
const printNumbers = (lastNumber) => {
  let i = 1;

  // This loop never ends
  // and it will always print the same value
  while (i <= lastNumber) {
    console.log(i);
  }
  console.log('finished!');
};
```

In some cases, infinite loops are useful. We won't deal with those cases here, but it's useful to see what it looks like:

```javascript
while (true) {
  // do something
}
```

To sum up. When do we need loops, and when can we do without them? It is physically impossible to do without loops when a problem-solving algorithm requires actions to be repeated, as in the example with the book, and the number of these actions is unpredictable.
