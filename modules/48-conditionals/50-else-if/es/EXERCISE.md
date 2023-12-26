
En el mapa electrónico de Westeros que Sam implementó, los aliados de los Stark se representan con un círculo verde, los enemigos con un círculo rojo y las familias neutrales con un círculo gris.

Escribe una función para Sam llamada `whoIsThisHouseToStarks()` que reciba el apellido de una familia y devuelva uno de los tres valores: `'friend'`, `'enemy'`, `'neutral'`.

Reglas de determinación:

* Amigos (`'friend'`): 'Karstark', 'Tally'
* Enemigos (`'enemy'`): 'Lannister', 'Frey'
* Todas las demás familias se consideran neutrales

Ejemplos de llamadas:

```javascript
whoIsThisHouseToStarks('Karstark'); // amigo
whoIsThisHouseToStarks('Frey');     // enemigo
whoIsThisHouseToStarks('Joar');     // neutral
whoIsThisHouseToStarks('Ivanov');   // neutral
```
