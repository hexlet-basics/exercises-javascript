Imagine we have a program like this:

```javascript
const x = 'Father!';
console.log(x);
```

Technically, everything works. We've already seen similar examples, but here we use a variable named `x`. Bad names make code hard to read and understand. Here are a few examples of poor variables:

```javascript
const a = 'John';
const n = 42;
const ddr = 'New York';
```

What are these variables? What do they store? To figure this out, you have to read all the surrounding code and guess from the context.

The computer doesn't care what a variable is called. To it, `x`, `abc`, `message`, or `elephantInTheRoom` are just labels for storing data. People care about other things. Programmers read code far more often than they write it. That's why variable names are an important part of communicating through code.

## Good examples

```javascript
const userName = 'Arya Stark';
const unpaidOrdersCount = 3;
const maxAttempts = 5;
```

A good variable name helps you understand what the program does without reading every line. It's especially important to choose names whose meaning is clear without context, without having to read all the code around them.

Here are a few tips:

- Use English. It's the international standard. It's better to write `ordersCount` instead of `kolvoZakazov`. If English is still difficult for you, use a translator, that's fine. Over time it will get easier.
- Try to make the name reflect the meaning of the variable. Let it be a bit longer, but understandable.
- Don't be afraid to spend time choosing a good name. It's an investment in the readability and maintainability of the code.

Programmers even have a joke: "Some of the hardest problems in programming are caching and naming variables." Sometimes coming up with a fitting name really is hard. Here's an example: how would you name a variable that stores the number of unpaid orders from customers with outstanding debt from the previous quarter?

And now a small exercise: come up with a name for a variable that will store "the number of the king's brothers and sisters". Write it down in a notepad or send it to yourself by email. Just the name, without explanations. We'll come back to this task in a few lessons.
