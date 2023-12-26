
La función `getTypeOfSentence()` del ejercicio anterior sólo distingue entre oraciones interrogativas y oraciones normales. Intentemos agregar soporte para oraciones exclamativas:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  if (lastChar === '?') {
    sentenceType = 'question';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

https://replit.com/@hexlet/js-basics-conditionals

Hemos agregado otra verificación ("exclamation" se traduce como «exclamación»). Técnicamente, la función funciona, pero hay problemas desde el punto de vista semántico.

- La verificación de la presencia del signo de interrogación ocurre de todos modos, incluso si ya se ha detectado el signo de exclamación.
- La rama `else` está descrita sólo para la primera condición, pero no para la segunda.

Sería más correcto utilizar otra posibilidad de la estructura condicional:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence[sentence.length - 1];
  let sentenceType;

  if (lastChar === '?') {
    sentenceType = 'question';
  } else if (lastChar === '!') {
    sentenceType = 'exclamation';
  } else {
    sentenceType = 'normal';
  }

  return `Sentence is ${sentenceType}`;
};

getTypeOfSentence('Who?'); // Sentence is question
getTypeOfSentence('No');   // Sentence is normal
getTypeOfSentence('No!');  // Sentence is exclamation
```

Ahora todas las condiciones están organizadas en una única estructura. `else if` significa "si la condición anterior no se cumple, pero la actual sí". La estructura es la siguiente:

- si el último carácter es `?`, entonces `'question'`
- de lo contrario, si el último carácter es `!`, entonces `'exclamation'`
- de lo contrario, `'normal'`

Sólo se ejecutará uno de los bloques de código relacionados con toda la estructura `if`.
