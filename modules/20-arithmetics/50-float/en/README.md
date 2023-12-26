
JavaScript doesn't distinguish between rational numbers (0.5) and natural numbers (10), both are numbers in JS (though other languages treat them differently). This means they can be used together in any operation:

```javascript
3 * 0.5; // 1.5
```

However, due to their features, rational numbers are very different. As applied programmers, it wouldn't matter so much if it were not for one detail. Look at this example: 

```javascript
// Check this code in the [browser console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html)
0.2 * 0.2 // 0.04000000000000001
```

Multiplying two rational numbers has suddenly led to an imprecise result. Other programming languages deliver the same result. This happens due to the limits of computing power. The amount of memory, unlike the amount of numbers, is finite (an infinite amount of numbers requires an infinite amount of memory to store). In the case of natural numbers, this issue is solved by a simple upper bound (you can set the maximum number allowed). However, this is not impossible with rational numbers.

```javascript
// Maximum possible integer
console.log(Number.MAX_SAFE_INTEGER);
9007199254740991
```

Rational numbers are not lined up in a continuous chain like integers, there's an infinite amount of numbers between _0.1_ and _0.2_. So now we have a big problem: how can we store rational numbers? Excellent question. There is a myriad of articles in the internet about memory organization in these cases. Moreover, there is even a standard describing how to do it correctly, and an overwhelming number of languages are based on this set of recommendations.

As developers, it's important to understand that operations with floating numbers are not precise (though precision can be adjusted using special tricks).
