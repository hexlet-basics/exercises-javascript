
In JavaScript, you can pass any values to a function. Sometimes this makes the code harder to understand: it is not always clear what the function expects and what it returns. JavaScript syntax itself has no type annotations, but there is a de facto standard — **JSDoc**: special comments placed before a function that editors and checking tools understand.

## How to annotate parameter types

A JSDoc comment starts with `/**` and goes right before the function definition. Each parameter type is declared with the `@param` tag, and the return type with the `@returns` tag. The type itself is written in curly braces:

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // => 5
```

Now the editor knows that `add()` takes two numbers and returns a number. If you try to pass a string, the editor will highlight it as a problem.

## Which types are used

At this point, it is enough to know annotations for primitive types:

- `number` for numbers — JavaScript has a single numeric type for both integers and floats
- `string` for strings
- `boolean` for logical values (`true` or `false`)

If a function returns nothing, use `void` as the return type. For optional parameters with default values, the parameter name is wrapped in square brackets: `@param {string} [greeting='Hello']`.

## Annotations and static checking

JavaScript itself does not check JSDoc annotations at runtime, but tools can do it without running the code — this is called **static checking**. In the JavaScript world, the TypeScript compiler can read plain JS files and understand types from JSDoc comments. Annotations are optional, but using them is considered good practice. When types grow numerous, developers often switch to **TypeScript** — a superset of JavaScript with annotations built into the syntax.
