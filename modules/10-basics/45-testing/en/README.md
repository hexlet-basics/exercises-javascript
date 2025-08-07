
Our website verifies your solutions automatically. You may be wondering how it works.

In the most basic case, the system just runs your code and examines the output. Then it compares the actual output against the expected one.

The following lessons deal with more complex matters. You will be writing functions. They're like mini-programs that take data from outside and perform operations on it. Verifying solutions gets a little more complicated in this case. The system runs your code and passes data to it. The system knows what result a correctly written function would give with the data the system provides it with, and this result is what the system is "expecting".

Let's assume your task is to program a function that adds two numbers. The verification system will give it several combinations of numbers and compare your function's answers with the correctly calculated ones. If all actual values match the expected ones, your solution would be considered valid.

This is testing. It's used extensively in the real, day-to-day development process. Developers usually write the tests _first_, that will proceed to write the program itself. During that process, they run tests multiple times to check how close they are to the desired solution.

That is why our website says “Tests passed” once you solve the task correctly.

One of your tasks in the following lessons will be to write a function that performs certain calculations and returns the result. As an example, let's assume you made a small mistake and the function returns the wrong value. In that case, the system will give you the following message:

```text
  ● test

  expect(received).toBe(expected) // Object.is equality

  Expected value to be:
    "Hello, World!"
  Received:
    "ello, World!"
```

In addition to our tests, it's very useful to experiment with code in the [browser console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console). When something isn't clear to you, or you want to experiment with code, feel free to do all of this in the console.

Sometimes when creating a solution, it may seem that you have done everything correctly, but the system has got into a huff and won't accept your solution. Such cases are borderline impossible. Failed tests simply won't get as far as the site, they are automatically run after each change. In the vast majority of cases (all our projects have been run millions of times in total over many years) the error is in the solution code. It can be very imperceptible, maybe you used the wrong punctuation, or you used upper case instead of lower case, or you missed a comma. Other cases are more complicated. Maybe your solution works for one set of inputs, but not for another. So always read the instructions and test your output carefully. There will almost certainly be some sign of an error.

However, if you are sure about a mistake or have found an inaccuracy, you can always point it out. At the end of each theory section, there is a link to the contents of the lesson on GitHub (this project is completely open-source!). You can write about an issue, look through the tests (you can see how your code is called there), and even send a pull request. If it's all gone over your head, then join the #hexlet-feedback channel in [Slack community](https://slack.hexlet.io/), where we'll always be ready to help you.
