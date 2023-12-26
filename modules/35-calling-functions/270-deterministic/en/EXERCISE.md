
The function `Math.random()` returns a random number from 0 to 1 with many decimal places. But in real tasks, you sometimes want to get random integers, for example, a random number 0 to 10. Write a program printing specifically those numbers. To solve it you'll need [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) and [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).


Try to solve this task using only 1 line.

## Algorithm

Since `Math.random()` only returns numbers between 0 and 1, we need to multiply it by 10 to get numbers between 0 and 10. Then we round the result to get what we need.
