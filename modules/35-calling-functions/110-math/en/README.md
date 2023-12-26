
Explaining functions in JavaScript is somewhat complicated by the language structure. It first appeared in browsers and had very limited capabilities compared to general-purpose languages. It has changed over time as JavaScript has become a powerful language that has taken over client-side development and is heavily used on servers. However, the legacy has stayed, as backward compatibility needs to be maintained. So some parts of language are inconsistent, which can't be explained by the system. You can only dismiss them and say, "That's just how it's always been."

Among these "things" are math functions. In the previous task, we defined the function `pow()` ourselves (we added it to our practice section), but now let's look at its built-in version in the language itself.

```javascript
Math.pow(2, 3); // 8
```

What is `Math`? Technically, it's an object accessible from any part of the program, but objects are far ahead for now. So far, just remember that we call functions for mathematical operations via `Math`. This prefix doesn't affect the concept of a function which we discussed earlier and will discuss again later.

A complete list of Math functions is available in [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math). We'll discuss how to read it later on.
