Even experienced developers rarely get their code working perfectly on the first try. The more experienced the developer, the more confidently they **debug** it — that is, analyze errors and fix them.

Debugging skills don't appear on their own. They must be developed, and the sooner you start, the better. During your studies you'll complete assignments and practice, and over time analyzing errors will become a habit.

## How to find a bug in code

Debugging by trial and error takes a lot of time. It's far more productive to first understand what exactly went wrong, and only then fix the cause. Any work with errors starts with understanding.

First, study the **stack trace**. It contains a list of all function calls from the point of the error back to the start of the program. It shows which functions ran and where the problem occurred. Each entry points to a file, a line, and the function being executed.

Imagine you wrote code in a file `users.js` and called the function `main()`, which internally calls a non-existent `create()`:

```javascript
const main = () => {
  create();
};

main();
```

When you run it, you'll see output like this:

```bash
ReferenceError: create is not defined
    at main (users.js:2:3)
    at users.js:5:1
```

The first line is the **error message**. Here `ReferenceError: create is not defined` says that the name `create` is not defined. This error most often means a typo in the name.

Below it is the stack trace itself. You can see that the program reached `main()` (line 5), called `create()` inside it (line 2), and ran into the error here. Each `at ...` entry points to a file and a line.

## Types of errors

The simplest errors are **syntax errors**. They occur when the code is formatted incorrectly, for example because of an unclosed bracket or mismatched quotes. The output always contains `SyntaxError`:

```bash
console.log("Hello" + 'world);
                      ^^^^^^^^
SyntaxError: Invalid or unexpected token
```

The hardest to fix are **programming errors**. These include calling a non-existent function, using an undeclared variable, or passing arguments of the wrong type. They usually occur far from where the real cause is, which makes diagnosis harder.

The most difficult are **logic errors**. The program runs without exceptions but produces an incorrect result for certain inputs. There's no error message, only unexpected output. For example, a function that should calculate the sum but calculates the difference:

```javascript
// The function should calculate the sum of numbers, but calculates the difference:
const sum = (a, b) => a - b;

// With this call the error is not obvious, because
// both addition and subtraction give the same result
sum(4, 0); // 4
```

## Debugging methods

At the heart of every debugging method lies observing variables as the code runs. Let's look at a specific function.

Below is a function that calculates the sum of numbers from `start` to `finish`. With `start=3` and `finish=5` it should calculate `3 + 4 + 5`.

```javascript
const sumOfSeries = (start, finish) => {
  let result = 0;
  let n = start;
  while (n < finish) {
    result = result + n;
    n = n + 1;
  }

  return result;
};
```

The key variables in this function are `n` and `result`. To find the bug, we need to see what values they take on each iteration.

For this there are **visual debuggers**. They are built into popular code editors and let you run the program step by step, watching variables in real time. You can find one by searching Google for "JavaScript debuggers".

In the Hexlet environment, instead of a debugger we use **print debugging**. The principle is the same, only variable values are printed with the usual `console.log`. What is printed appears in the `OUTPUT` tab.

```javascript
const sumOfSeries = (start, finish) => {
  let result = 0;
  let n = start;
  while (n < finish) {
    console.log('new iteration !!!!');
    console.log(n);
    result = result + n;
    n = n + 1;
    console.log(result);
  }

  return result;
};

sumOfSeries(3, 5);

// new iteration !!!!
// 3
// 3
// new iteration !!!!
// 4
// 7
```

The output shows there is one fewer iteration than needed. The five (`finish`) wasn't included in the addition. The condition uses `n < finish` instead of `n <= finish`. We need to replace the `<` sign with `<=`.

Beginners often get upset about errors and think they are inattentive. Everyone makes errors — both juniors and seniors. The difference is how confidently you find them.

Beginners think that a good developer looks at code and immediately understands what's wrong. This rarely works in practice. A snippet of code without context says very little. **If you want to ask an experienced developer for advice, first show them the error message.**
