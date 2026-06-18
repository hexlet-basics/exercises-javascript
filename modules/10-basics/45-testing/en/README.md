Our website automatically checks your solutions. How does it work?

In the simplest case, the check runs your code and compares the screen output with the expected result. For example, if the task says: "Print the number 10 to the screen," then your JavaScript code might look like this:

```javascript
console.log(10);
```

The check will run this code and make sure that `10` actually appears on the screen. If the output matches the expected one, the solution is accepted. Otherwise, you will see an error:

```text
  ● test

  expect(received).toBe(expected) // Object.is equality

  Expected value to be:
    "10"
  Received:
    "9"
```

`Expected` is the expected result, and `Received` is the one your code returned.

In the following, more complex lessons, you will write functions. They take data and return a result. In such tasks, the check works a little differently: it calls your function with different arguments and knows in advance which answer should be obtained in each case.

For example, if you need to write a function that adds two numbers, the check will pass it different pairs of numbers and compare the result with the correct sum. If the answers match in all cases, the solution is considered correct.

This approach is called testing, and it is used in real-world development. Tests help verify whether a program works correctly and quickly catch an error after changes.

That is exactly why our website says "Tests passed" when you have solved the task correctly.

## My mistake or not?

Sometimes during the solution process it will seem that you did everything correctly, but the check does not accept the solution. This happens extremely rarely. Tests run automatically after every change, so a broken check usually does not make it to the website.

In the vast majority of such cases, the error is contained in the solution code. It can be very subtle: instead of an English letter you accidentally typed a Russian one, instead of uppercase you used lowercase, or you forgot to print a comma. There are also more complex situations. For example, the solution works for one set of input data, but does not work for another.

So always carefully read the task statement and the test output. There is almost certainly an indication of the error there.

If you are sure that the problem is in the task or you have found an inaccuracy, write to our [community](https://t.me/hexletcommunity), in the _'Feedback'_ channel.

In addition to the exercises on the website, it will be extremely useful to experiment with code in the [browser console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console). In any situation when you do not fully understand something or want to try different options, feel free to open the console and type code there.
