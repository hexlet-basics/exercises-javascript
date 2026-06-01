Implement the `compress(str)` function that compresses a string using RLE (Run-Length Encoding).

Algorithm: if a character repeats consecutively, replace it with the character and the count. Single characters are written without a number.

```javascript
compress('aaabcccc'); // => 'a3bc4'
compress('abcd');      // => 'abcd'
compress('aabbaa');    // => 'a2b2a2'
compress('');          // => ''
```

This algorithm is used in real compression formats — for example, in old fax protocols and BMP files.

### Algorithm

1. Walk through the string, counting consecutive identical characters.
2. When the character changes — write the previous character and counter (if greater than 1).
3. Don't forget to handle the last group after the loop ends.
