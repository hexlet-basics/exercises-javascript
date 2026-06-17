Write a function `normalizeUrl(url)` that takes a string with a website address and returns a URL with the `https://` protocol.

If the string already starts with `https://` — return it as is. If it does not start with it — add `https://` at the beginning.

```javascript
normalizeUrl('https://hexlet.io'); // => 'https://hexlet.io'
normalizeUrl('hexlet.io');         // => 'https://hexlet.io'
```
