
Defining your own functions makes it much easier to write and maintain programs. Functions allow you to combine several complex operations into one. For example, sending an email on a website is a complex process that involves interaction with external systems (the Internet). Since you can define functions, you can hide all the complexity behind one simple function:

```javascript
// A hypothetical example
// A place where the function is taken from
import { send } from 'mailer';

const email = 'support@hexlet.io';
const title = 'Help';
const body = "I've written a success story, how can I get a discount?";

// One little call and loads of logic inside
send(email, title, body);
```

A call like this contains a lot of logic. It connects to the mail server, generates a valid request based on the message header and body, then sends it and closes the connection.

Let's create our first function. Its job is to print out a greeting:

```textHello, Hexlet!```

```javascript
// Defining the functions
// The definition doesn't call or execute a function
// We're just declaring this function exists now
const showGreeting = () => {
  // Use 2-space indents inside the function body for readability
  const text = 'Hello, Hexlet!';
  console.log(text);
}

// Calling a function
showGreeting(); // => "Hello, Hexlet!"
```

Unlike normal data, functions perform actions, so their names almost always have to be verbs: "build something", "draw something", "open something", etc.

Anything described inside the curly brackets `{}` is called a function body. It can contain any code. Consider it a small independent program, a set of arbitrary statements. The body is executed precisely when the function is called. And each function call executes the body independently of other calls. By the way, the body can be empty:

```javascript
// A minimal function definition
const noop = () => {
// There could be some code, but there isn't any
}

noop();
```

Defining a function looks suspiciously like creating a constant. Indeed, a function definition consists of two parts: the definition itself and its assignment to a constant:

1. Definition: `() => { }`
2. Assignment: `const nameOfFunction = ...`

It is technically possible to create a function that is defined without a name and therefore unable to be called:

```javascript
() => {
  // Valid but useless code
};
```

The notion of "creating a function" has many synonyms, such as "implement" or "define". All of them are encountered in everyday practice.
