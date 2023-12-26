
One particular class of tasks that cannot be done without loops is data aggregation. These problems include searching for the maximum and minimum values, as well as finding sums and averages. Their main feature is that their result depends on the whole data set. Calculating the sum requires you to add **all** the numbers together, and calculating the maximum requires you to compare **all** the numbers.

Anyone who deals with numbers, e.g., accountants or marketers, will be familiar with these tasks. It's usually done using spreadsheet software like Microsoft Excel or Google Tables.

Let's consider a simple example: the sum of a set of numbers. We can implement a function to add numbers in a given range, including bounds. Here we have a range of numbers from a minimum value (lower bound) to a maximum (upper bound). For example, the range [1, 10] includes all integers from 1 to 10.

```javascript
sumNumbersFromRange(5, 7); // 5 + 6 + 7 = 18
sumNumbersFromRange(1, 2); // 1 + 2 = 3

// The range [1, 1] is also a range
// it includes just one number, the bound of the range itself
sumNumbersFromRange(1, 1); // 1
sumNumbersFromRange(100, 100); // 100
```

To implement this function, we need a loop because adding numbers is an iterative process (an iteration for each number), and the number of iterations depends on the size of the range. Before looking at the code, try answering the questions below:

* Which value should you initialize the counter with?
* How will it change?
* When should the loop stop?

Try and think through these questions first and then have a look at the code below:

```javascript
const sumNumbersFromRange = (start, finish) => {
  // You can, of course, change the 'start' value
  // But the input arguments must be left unchanged
  // It makes the code easier to analyze
  let i = start;
  let sum = 0; // Sum initialization

  while (i <= finish) { // Move to the end of the range
    sum = sum + i; // Calculate sum for each number
    i = i + 1; // Go to the next number in the range
  }

  // Return loop result
  return sum;
};
```

The general structure of the loop here is standard. A counter initialized with a start value for the range, a loop with a condition to stop at the end of the range and, finally, a counter change at the end of the loop. The number of iterations in this type of loop is `finish - start + 1`. Thus, for the range from 5 to 7, it is 7 - 5 + 1, or three iterations.

The main difference from regular processing is related to the logic of computing the result. In aggregation tasks, there is always a variable that stores the result of the loop. In the code above, it is `sum`. With each loop iteration, this variable changes, adding another number from the range: `sum = sum + i`. The whole process looks like this:

```javascript
// Calling sumNumbersFromRange(2, 5);
let sum = 0;
sum = sum + 2; // 2
sum = sum + 3; // 5
sum = sum + 4; // 9
sum = sum + 5; // 14
// 14 – the result of adding the numbers in the range [2, 5]
```

The `sum` variable has an initial value of 0. Why do you need to set the value at all? Any iterative operation starts with a value. You can't just declare an empty variable and start working with it within a loop. It will lead to an incorrect result:

```javascript
// when there is no initial value
// js sets it to undefined
let sum;

// first iteration
sum = sum + 2; // ?
```

It will result in `NaN`, i.e. not a number, in `sum`. It occurs due to an attempt to add `2` and `undefined`. So you need to have an initial value. Why is 0 chosen in the code above? Well, it is easy to check that all the other options would lead to the wrong result. If the initial value is 1, the sum will be 1 more than it should be.

In mathematics, there is a concept of an **identity element/neutral element**, an element for each type of operation. Its meaning is easy to grasp. An operation with this element doesn't change the operand. For addition, any number plus zero results in the number itself. The same goes for subtraction. Even concatenation has a neutral element, which is an empty string: `'' + 'one'` will be 'one'.

Self-check. What is the neutral element of a multiplication operation?
