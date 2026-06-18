`greeting` is an example of a simple and clear variable name. But often names like `name`, `email` or `price` are not enough. For example, you may need to describe a user's name, the total number of orders, or the maximum length of a message. Such names already consist of several words. What will a variable name look like in this case?

Different programming languages use different naming styles. This determines how a variable name made of several words will look. For example, here is how you can write a variable that stores the maximum length of a message:

1. `maxmessagelength`
1. `maxMessageLength`
1. `max-message-length`
1. `max_message_length`

## Main styles

Here are a few popular approaches to writing compound names:

- **kebab-case**: words are separated by a hyphen — `max-message-length`.

  It doesn't work in JavaScript, because the hyphen (`-`) is interpreted as the subtraction operator.

- **snake_case**: words are separated by an underscore — `max_message_length`. This is the standard in some other languages, for example in Python.

- **CamelCase** (or UpperCamelCase): each word starts with a capital letter, with no separators — `MaxMessageLength`. In JavaScript, this is how classes are usually named.

- **lowerCamelCase**: the same thing, but the first word starts with a lowercase letter — `maxMessageLength`.

## How to do it right in JavaScript

The standard for variables in JavaScript is **lowerCamelCase**: the first word is in lowercase letters, and each subsequent one starts with a capital letter.

```javascript
const userName = 'Daenerys';
const maxLength = 280;
const totalOrdersCount = 17;
```

## How not to do it

You shouldn't include the data type in a variable name. Such names are harder to read and quickly become outdated. For example, `userNameString` or `messagesNumber` describe not the meaning of the variable but its technical implementation.

A name should answer the question "what is stored?", not "what type is it?". That's why it's better to write `userName` instead of `userNameString`, and `messagesCount` instead of `messagesNumber`.
