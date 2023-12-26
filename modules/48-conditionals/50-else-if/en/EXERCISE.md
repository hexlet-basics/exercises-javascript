
The digital map of Westeros that Sam has made shows Stark allies in green, enemies in red, and neutral families in gray.

Write the `whoIsThisHouseToStarks()` function that takes a family name as input and returns one of three values: `'friend'`, `'enemy'`, `'neutral'`.

Rules:

* Friends: 'Karstark', 'Tally'
* Enemies: 'Lannister', 'Frey'
* Any other families are considered neutral

Examples:

```javascript
whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'
whoIsThisHouseToStarks('Ivanov');   // 'neutral'
```
