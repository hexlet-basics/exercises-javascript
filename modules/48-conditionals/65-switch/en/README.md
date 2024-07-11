
Many languages have a **switch** statement in addition to the conditional *if* statement. This is a specialized version of *if*, designed for certain cases. For example, you can use it where there is an *if else* chain with equality checks:

```javascript
if (status === 'processing') {
  // First
} else if (status === 'paid') {
  // Second
} else if (status === 'new') {
  // Third
} else {
  // Fourth
}
```

This compound check has one distinctive feature: each branch here is a check of the value of the `status` variable. 'Switch' allows you to write this code in a shorter and more expressive way:

```javascript
switch (status) {
  case 'processing': // status === processing
    // First
    break;
  case 'paid': // status === paid
    // Second
    break;
  case 'new': // status === new
    // Third
    break;
  default: // else
    // Fourth
}
```

Switch is a rather advanced construct considering the number of elements it consists of:

* An external definition containing the keyword `switch`. A variable whose values `switch` will use to select a behavior. And curly brackets for behavior branches
* The `case` and `default` constructs, where the behavior for different values of the variable is described. Each `case` corresponds to `if` in the example above. `default` is a special condition corresponding to the `else` branch in conditionals. Neither `else` nor `default` is necessary (but the linter will always [ask for it](https://eslint.org/docs/rules/default-case))
* `break` is needed to prevent it from "falling through". If `break` is omitted, then the program will continue to the next `case` statement after the required `case`, and carry on until the next `break` or the end of the *switch*

The curly brackets in `switch` don't specify a code block unlike elsewhere. Only the syntax shown above is acceptable. In other words, you can use `case` or `default` there. But inside each `case` (and `default`), the situations are different. You can execute any arbitrary code here:

```javascript
switch (count) {
  case 1:
    // Do something useful
    break;
  case 2:
    // Do something useful
    break;
  default:
    // Do something
}
```

Sometimes the output of the `case` is the end of a function containing *switch*. If this happens, you need to return it outside somehow. There are two ways to solve this problem.

The first way. Create a variable before *switch*, fill it in *case*, and then return the value of that variable outside at the end.

```javascript
(count) => {
  // Declare a variable
  let result;

  // Fill it
  switch (count) {
    case 1:
      result = 'one';
      break;
    case 2:
      result = 'two';
      break;
    default:
      result = null;
  }

  // Return
  return result;
};
```

The second way is easier and shorter. Instead of creating a variable, *case* allows us to make a regular function return inside it. And since no code is executed after `return`, we can get rid of `break`:

```javascript
(count) => {
  switch (count) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    default:
      return null;
  }
};
```

Though switch is present in the code, you always can find a way to avoid it. The key benefit of using it is that it better expresses the programmer's intention when checking the values of a particular variable. Although the code becomes a bit longer, it's easier to read compared to *else if* blocks.
