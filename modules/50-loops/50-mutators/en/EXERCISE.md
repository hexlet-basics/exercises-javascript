
Write a function, `makeItFunny()`, which returns a copy of a string passed to it, where each nth element is uppercase. n also needs to be passed to the function.

To find each nth element, you will need to find the remainder from division `%`. Think about how you can use it.

```javascript
const text = 'I never look back';
// Every 3rd element
makeItFunny(text, 3); // 'I NevEr LooK bAck'
```
