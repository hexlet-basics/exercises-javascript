
Loops also allow you to generate strings. It's a common task for web development. It's merely basic aggregation using interpolation or concatenation.

One especially popular task among interviewers is to do a string reversal. There are lots of ways to solve it, but the most basic is by iterating each character. Take a look at how this function works:

```javascript
reverse('Hexlet'); // telxeH
```

The general idea of the reversal is that you take characters one by one from the beginning of the string and then connect them in reverse order. Sounds like a piece of cake. Now let's examine it:

```javascript
const reverse = (str) => {
  let i = 0;
  // A neutral element in terms of strings is an empty string
  let result = '';
  while (i < str.length) {
    // Connect it in reverse order
    result = `${str[i]}${result}`;
    // Same through concatenation
    // result = str[i] + result;
    i = i + 1;
  }

  return result;
};

const name = 'Bran';
reverse(name); // 'narB'
// Testing neutral element
reverse(''); // ''
```

https://replit.com/@hexlet/js-basics-iteration-over-strings

Perhaps the only tricky part here is getting a feel of how the string itself is built. Since each next character is attached to the resulting string on the left, the string ends up reversed.
