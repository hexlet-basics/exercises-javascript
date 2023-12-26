
Samwell discovered that his messages were being intercepted at Castle Gemini and being read there. This made his attacks no longer a surprise. After some thought, he developed a program to encrypt the messages according to the following algorithm. It would take the text and rearrange it every two consecutive characters.

```javascript
encrypt('move'); // 'omev'
encrypt('attack'); // 'taatkc'
// If the number of characters is odd
// the last character remains unchanged
encrypt('go!'); // 'og!'
```

Write a function, `encrypt()`, which takes the original message and returns an encrypted one.

Think about it. Can this function decrypt an encrypted message?
