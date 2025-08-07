
You've come across some code printing the total number of rooms owned by the present king:

```javascript
let king = 'King Balon the 6th';
console.log(king + ' has ' + (6 * 17) + ' rooms.');
```

As you can see, these numbers are magical: it is not clear what 6 and 17 are. If you know the history of the royal family, you can guess: each new king inherits all his ancestors' castles and builds a new one, an exact copy of his parents'.

This strange dynasty simply breeds identical castles...

Get rid of the magic numbers by creating new variables and print them.

You'll get this:

```text
King Balon the 6th has 102 rooms.
```

The variable names should give the meaning of the numbers, but should also be short and succinct enough to be readable.

Note: The code will work with any name, and we only check the printed result, so the task is up to you.
