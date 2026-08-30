The program receives the numeric codes of characters and prints them to the screen — this is convenient when a character is hard to type on the keyboard. Find the characters with codes 126, 94, and 37 in the ASCII table below and print each on a separate line using the `String.fromCharCode()` function.

| Character | Code |
| --------- | ---- |
| !         | 33   |
| #         | 35   |
| %         | 37   |
| &         | 38   |
| *         | 42   |
| ?         | 63   |
| @         | 64   |
| ^         | 94   |
| _         | 95   |
| ~         | 126  |

```javascript
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
console.log(String.fromCharCode(...));
```

For example, the `?` character has code 63:

```javascript
console.log(String.fromCharCode(63)); // output: ?
```
