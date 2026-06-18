
A separate class of problems that cannot do without loops is called data aggregation. Such problems include finding the maximum, the minimum, the sum, the arithmetic mean, and so on. Their main feature is that the result depends on the entire data set. To calculate the sum, you need to add up **all** the numbers; to find the maximum, you need to compare **all** the numbers.

Everyone who works with numbers is well familiar with such problems, for example, accountants or marketers. They are usually solved in spreadsheets like Microsoft Excel or Google Tables.

Let's look at the simplest example – finding the sum of a set of numbers. We will implement a function that adds up the numbers in a given range, including the boundaries. A range in this case is a series of numbers from some beginning to a certain end. For example, the range [1, 10] includes all integers from 1 to 10.

```javascript
sumNumbersFromRange(5, 7); // 5 + 6 + 7 = 18
sumNumbersFromRange(1, 2); // 1 + 2 = 3

// [1, 1] a range with the same beginning and end is also a range
// it includes exactly one number – the boundary of the range itself
sumNumbersFromRange(1, 1); // 1
sumNumbersFromRange(100, 100); // 100
```

To implement this code, we will need a loop, since adding numbers is an iterative process (it repeats for each number), and the number of iterations depends on the size of the range. Before looking at the code, try to answer the questions below:

* What value should the counter be initialized with?
* How will it change?
* When should the loop stop?

First try to think about these questions, and then look at the code below:

```javascript
const sumNumbersFromRange = (start, finish) => {
  // Technically you can change start
  // But the input arguments should be left at their original value
  // This makes the code easier to analyze
  let i = start;
  let sum = 0; // Initializing the sum

  while (i <= finish) { // Moving to the end of the range
    sum = sum + i; // Computing the sum for each number
    i = i + 1; // Moving to the next number in the range
  }

  // Returning the resulting value
  return sum;
};
```

The general structure of the loop here is standard. There is a counter that is initialized with the starting value of the range, there is the loop itself with a stop condition when the end of the range is reached, and, finally, the change of the counter at the end of the loop body. The number of iterations in such a loop is equal to `finish - start + 1`. That is, for the range from 5 to 7 it is 7 - 5 + 1, which is 3 iterations.

The main differences from ordinary processing are related to the logic of computing the result. In aggregation problems, there is always some variable that stores the result of the loop's work inside itself. In the code above this is `sum`. On each iteration of the loop it changes, adding the next number in the range: `sum = sum + i`. The whole process looks like this:

```javascript
// For the call sumNumbersFromRange(2, 5);
let sum = 0;
sum = sum + 2; // 2
sum = sum + 3; // 5
sum = sum + 4; // 9
sum = sum + 5; // 14
// 14 – the result of adding the numbers in the range [2, 5]
```

The variable `sum` has an initial value equal to 0. Why set a value at all? Any repeating operation starts with some value. You cannot just declare a variable and start working with it inside a loop. This will lead to an incorrect result:

```javascript
// the initial value is not set
// js automatically makes it equal to undefined
let sum;

// the first iteration of the loop
sum = sum + 2; // ?
```

As a result of such a call, `sum` will contain `NaN`, that is, not a number. It arises from an attempt to add `2` and `undefined`. So some value is still needed. Why was 0 chosen in the code above? It is very easy to verify that all other options will lead to an incorrect result. If the initial value is equal to 1, then the result will be 1 more than needed.

In mathematics there is the concept of a **neutral element of an operation** (each operation has its own element). This concept has a very simple meaning. An operation with this element does not change the value on which the operation is performed. In addition, any number plus zero gives the number itself. With subtraction it is the same. Even concatenation has a neutral element – it is the empty string: `'' + 'one'` will be 'one'.

A self-check question. What is the neutral element of the multiplication operation? To answer this question, find the number that does not change any other numbers when multiplied by it.

<details>
<summary>Answer</summary>

The neutral element of multiplication is 1.

</details>
