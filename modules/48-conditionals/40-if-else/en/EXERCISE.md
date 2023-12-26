
Write the `normalizeUrl()` function that carries out so-called data normalization. It takes a site address and returns it with *https://* at the beginning.

The function accepts URLs both as *URL* or *https://URL*, but will always return it as *https://URL*

You can use a method, [startsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), to check if the string starts with the prefix *https://*. And then add or don't add *https://* accordingly.

Examples:

```javascript
normalizeUrl("google.com"); // "https://google.com"
normalizeUrl("https://ai.fi"); // "https://ai.fi"
```
