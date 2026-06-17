We can call `console.log('Hexlet')` a statement; it tells the JavaScript interpreter what to do. There can be as many such statements as you like. Each one runs after the previous one has finished, and that is how we build an arbitrarily large and complex program out of simple elements.

```text
Statement 1: console.log('Hello')   →  executed
        ↓
Statement 2: console.log('World')   →  executed
        ↓
Statement 3: console.log('!')        →  executed
```

Here is an example of code with two statements. These lines tell the computer to print phrases on the screen.

```javascript
console.log('Mother of Dragons.'); // First statement
console.log('Dracarys!'); // Second statement
```

The result:

```text
Mother of Dragons.
Dracarys!
```

## Order matters

The JavaScript interpreter runs code strictly in the order in which you wrote it. If you swap the lines:

```javascript
console.log('Dracarys!');
console.log('Mother of Dragons.');
```

they will be swapped on the screen as well:

```text
Dracarys!
Mother of Dragons.
```

## An alternative way to write it

Usually statements are written on separate lines, but they can also be written on a single line separated by `;`:

```javascript
console.log('Mother of Dragons.'); console.log('Dracarys!');
```

Both versions work the same way, but the second one is harder to read. That is why statements are almost always written one per line.

## Why this matters

Right now we are writing very simple programs, but over time they will start to grow more complex, and one of the most important skills that will help you understand them is the ability to break a program (in your head) into independent statements. That is the only way to figure out what is going on in the code. Below is an example to grab your attention; you don't need to understand it yet:

```javascript
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};
```
