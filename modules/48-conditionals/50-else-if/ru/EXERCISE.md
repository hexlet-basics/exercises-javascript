
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию `whoIsThisHouseToStarks()`, которая принимает на вход фамилию семьи и возвращает одно из трёх значений: `'friend'`, `'enemy'`, `'neutral'`.

Правила определения:

* Друзья (`'friend'`): 'Karstark', 'Tally'
* Враги (`'enemy'`): 'Lannister', 'Frey'
* Любые другие семьи считаются нейтральными

Примеры вызова:

```javascript
whoIsThisHouseToStarks('Karstark'); // friend
whoIsThisHouseToStarks('Frey');     // enemy
whoIsThisHouseToStarks('Joar');     // neutral
whoIsThisHouseToStarks('Ivanov');   // neutral
```
