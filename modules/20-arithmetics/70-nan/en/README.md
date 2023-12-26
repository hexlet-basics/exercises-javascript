Some operations with infinity, for example, dividing infinity by infinity, return a weird result. In math, this operation has no numerical equivalent. In JavaScript, you'll get NaN.

```javascript
Infinity / Infinity; // NaN
```

`NaN` is a special value, "not a number", that usually indicates execution of a meaningless operation. Any operation with `NaN` returns `NaN`.

```javascript
NaN + 1; // NaN
```

`NaN` is a peculiar value. Although it means "not a number", it belongs to the number data type. What a paradox. `NaN` is never a value you want to see, it appears only as a result of errors. If you come across it, find the point where the operation that wasn't valid for numbers was performed, and correct the piece of code.
