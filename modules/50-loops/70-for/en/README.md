
The `while` loop is ideal for situations where the number of iterations is unknown in advance, for example, when searching for a prime number. When the number of iterations is known, it's preferable to use the `for` loop.

Let's look at the implementation of reversing a string using a `for` loop:

```javascript
const reverseString = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result = `${str[i]}${result}`;
  }

  return result;
};
```

It can be read as follows: *the loop with index `i` repeats while `i < str.length` and increases `i` by 1 after each step*.

Let's go through how the loop works step by step for the call `reverseString('go!')`:

```text
before the loop: result = ''

i=0: result = `${str[0]}${result}` = 'g' + ''   = 'g'
i=1: result = `${str[1]}${result}` = 'o' + 'g'  = 'og'
i=2: result = `${str[2]}${result}` = '!' + 'og' = '!og'
```

Each new character is prepended to the left of the accumulated result, so the string is built in reverse order.

In the definition of the `for` loop, there are three expressions inside the parentheses, separated by semicolons:

1. The initial value of the counter. This code runs exactly once before the first iteration.
2. The predicate — the condition for repeating the loops. It runs on every iteration. Just like in `while`.
3. The description of how the counter changes. This code runs at the end of each iteration.

In all other respects, the principle of operation is exactly the same as the `while` loop.

## Another example: counting characters

Let's count how many times a character occurs in a string, case-insensitively:

```javascript
const charsCount = (text, char) => {
  let result = 0;
  for (let i = 0; i < text.length; i += 1) {
    // convert to lowercase so as not to depend on the case
    if (text[i].toLowerCase() === char.toLowerCase()) {
      result += 1;
    }
  }
  return result;
};

charsCount('hexlet!', 'e'); // 2
charsCount('hExlet!', 'E'); // 2
charsCount('hexlet!', 'a'); // 0
```

Here `for` controls the iteration over characters, while the condition inside decides whether to increment the counter.

In the `for` definition, you don't have to specify all three expressions. If you don't specify the loop repetition condition, the loop will run infinitely:

```javascript
let i = 1;
// You don't even have to specify all three expressions
for (;;) {
  console.log(i);
  i += 1;
}
```
