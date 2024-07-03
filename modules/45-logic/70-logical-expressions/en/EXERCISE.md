
Write a function, `getLetter()`, to extract a certain character (by ordinal number, not an index) from a given string and return it. If there is no such character, the function returns an empty string.

Examples:

```javascript
const name = 'Hexlet';

// Such a call returns undefined
name[10]; // undefined

// The 11th char stands for the 10th index
getLetter(name, 11); // ''

getLetter(name, 1); // 'H'
getLetter(name, 0); // ''
getLetter(name, 6); // 't'
```
