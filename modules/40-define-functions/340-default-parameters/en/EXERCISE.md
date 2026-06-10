
Write the `getHiddenCard()` function that takes a credit card number (consisting of 16 digits) as a string and returns its hidden version, which can be used on the website to display. If the original card had the number *2034399002125581*, the hidden version will look like *\*\*\*\*5581*. In other words, the function replaces the first 12 digits with asterisks. The number of asterisks is specified by a second optional parameter. Its default value is 4

```javascript
// The credit card number is passed as a string
getHiddenCard("1234567812345678", 2); // "**5678"
getHiddenCard("1234567812345678", 3); // "***5678"
getHiddenCard('1234567812345678');    // "****5678"
getHiddenCard('2034399002121100', 1); // "*1100"
```

To complete the task, you'll need the `repeat()` string method, which repeats a string a given number of times.

```javascript
"+".repeat(5); // "+++++"
"o".repeat(3); // "ooo"
```
