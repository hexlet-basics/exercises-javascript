
Variables are helpful not only for storing and reusing data but also for simplifying complex calculations. Consider an example: you need to convert euros into yuan through dollars. Banks often do this kind of conversion via an intermediate currency when shopping abroad.

First, convert 50 euros into dollars. Suppose that one euro is $1.25:

```javascript
let dollarsCount = 50 * 1.25;
console.log(dollarsCount); // => 62.5
```

Last lesson, we assigned a specific value to a variable. Here, when we declare our variable, `let dollarsCount = 50 * 1.25;` we have an **expression** to the right of the equals sign. The interpreter computes the result - `62.5`, and records it in a variable. An interpreter doesn't care about what is in front of it: `62.5` or `50 * 1.25`, both are expressions to compute. And they result in the same value, `62.5`.

Any string is an expression. The concatenation of strings is also an expression. The interpreter processes an encountered expression and produces, as a result, the **value of the expression**. Here are some sample expressions with comments on the right containing the resulting value.

```javascript
62.5             // 62.5
50 * 1.25        // 62.5
120 / 10 * 2     // 24

'hello'          // "hello"
'Good' + 'will'  // "Goodwill"
```

The code structure rules (language grammar) ensure that any calculation (not just math, but also things like string concatenation) can take place when an expression is expected, and the program will continue. For this reason, it's impossible to describe and show all use cases of all operations.

Programs consist of numerous combinations of expressions and understanding this concept is a major step on your journey.

Based on the above, consider whether this code will work?

```javascript
let who = "dragon's" + 'mother';
console.log(who);
```

Now, back to our currency program. We'll record the dollar value in yuan as a separate variable. Calculate the value of 50 euros in dollars by multiplying them by `1.25`. Suppose that 1 dollar is 6.91 yuan:

```javascript
let yuanPerDollar = 6.91;
let dollarsCount = 50 * 1.25; // 62.5
let yuanCount = dollarsCount * yuanPerDollar; // 431.875

console.log(yuanCount);
```

Now, let's merge our output with some text via concatenation:

```javascript
let yuanPerDollar = 6.91;
let dollarsCount = 50 * 1.25; // 62.5
let yuanCount = dollarsCount * yuanPerDollar; // 431.875

console.log('The price is ' + yuanCount + ' yuan');
```

<pre class='hexlet-basics-output'>
The price is 431.875 yuan
</pre>

Any variable can be part of any expression. During the computation, the variable's name is replaced with its value.

The interpreter calculates the value of `dollarsCount` before using it in other expressions. When it comes to using the variable, Javascript "knows" the value it has already computed.
