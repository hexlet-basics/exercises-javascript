
Remember the `isInfant()` function from the last lesson:

```javascript
const isInfant = (age) => age < 1;
console.log(isInfant(3));
```

```textfalse```

This kind of function is called a predicate. Predicate functions answer a question and always (without exception!) return either `true` or `false`.

Predicates usually have handy names in every language for simplicity of analysis. In JavaScript, predicates generally begin with `is`, `has`, or `can`, though it's not limited to just those words. Examples:

  * `isInfant()` - "is he an infant?"
  * `hasChildren()` - "does he have children?"
  * `isEmpty()` - "is it empty?"
  * `hasErrors()` - "are there any errors?"

**Only** a function returning a boolean can be considered a predicate.

---

Let's write one more predicate function. It takes a string and checks if it's the word `'Castle'`:

```javascript
const isCastle = (type) => type === 'Castle';

console.log(isCastle('Sea'));
```

```textfalse```
