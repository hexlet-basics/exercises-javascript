
Write a `truncate()` function that cuts off the text you pass and adds an ellipsis at the end. This kind of logic is often used on websites to display long text in shortened form.

```javascript
// The first parameter is a string, the second is the number of characters to keep
truncate('hexlet', 2); // "he..."

const result = truncate("Leather bags invented the three laws of robotics, but we'll outsmart them", 48);
// "Leather bags invented the three laws of robotics..."
```

If you want to get a substring (or a character) from a string, use the [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) method:

  ```javascript
  'welcome'.slice(2, 5); // "lco"
  ```
