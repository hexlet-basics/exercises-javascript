
Imagine the code from the previous lesson looks like this:

```javascript
let x = 'Father!';
console.log(x);
console.log(x);
```

Although it works, the variable name is now `x`. A computer doesn't care about naming since it's a mindless machine, but developers do care. We are mostly read someone else's code, then write or read our own. Quality and clarity of variable names is half the battle when it comes to code analysis.

It's best take a moment and come up with a name reflecting the essence and meaning of the variable than give it a random name and rename it later. Try to name variables to make them as comprehensive as possible without context, or without examining the surrounding code.

A common joke among developers is that "the hardest part of programming is cache invalidation and naming things". Coming up with names is tough indeed. How would you name a variable that stores _the number of unpaid orders from customers in debt from the previous quarter?_

```javascript
const firstName = 'John';
console.log(firstName); // => John

const playerNumber = 24;
console.log(playerNumber); // => 24
```

Self-сheck. Think of a name for the variable that would store _"the number of siblings the king has"_. Write it down in a notebook or send it to yourself. Don't put anything in there except the name of the variable. And we'll come back to this topic in a few lessons ;-)
