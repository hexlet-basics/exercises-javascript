
It's possible to declare variable without giving it a specific value. What will be printed in this case?

```javascript
let name;
console.log(name); // ?
```

`undefined` is a special value of its own type that denotes an absence of value. Undefined is used by JavaScript in many different cases, for example when calling a non-existent string character:

```javascript
const name = 'Arya';
console.log(name[8]);
```

The meaning (semantics) of `undefined` is an absence of value. However, nothing stops you from writing the following code:

```javascript
let key = undefined;
```

Although the interpreter allows this, it violates the semantics of `undefined`, because this code performs an assignment and therefore substitutes a value.

JavaScript is one of the few languages that explicitly includes `undefined`. Other languages use `null` instead of `undefined`, and JavaScript uses `null` too.

_Self-check. Why can't we declare a constant without specifying a value?_
