
La función `getTypeOfSentence()` de la lección anterior distingue solo entre preguntas y oraciones normales. Intentemos agregar soporte para oraciones exclamativas:

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

Agregamos una comprobación más. Técnicamente la función funciona, pero desde el punto de vista de la semántica hay problemas.

- La comprobación del signo de interrogación se ejecuta en cualquier caso, incluso si ya se detectó un signo de exclamación.
- La rama `else` está descrita solo para la primera condición, pero no para la segunda.

Será más correcto usar una posibilidad más de la construcción condicional:

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

Ahora todas las condiciones están organizadas en una única construcción. `else if` significa "si no se cumplió la condición anterior, pero se cumple la actual".

```text
  ┌─────────────────┐
  │ ¿condición 1?   │
  └────┬────────┬───┘
  true │        │ false
       ↓        ↓
┌──────────┐  ┌─────────────────┐
│ cuerpo if│  │ ¿condición 2?   │
└──────────┘  └────┬────────┬───┘
              true │        │ false
                   ↓        ↓
       ┌────────────────┐ ┌──────────────┐
       │ cuerpo else if │ │ cuerpo else  │
       └────────────────┘ └──────────────┘
```

La lógica de la función resulta en el siguiente esquema:

- si el último carácter es `?`, entonces `'question'`
- de lo contrario, si el último carácter es `!`, entonces `'exclamation'`
- de lo contrario `'normal'`

Se ejecutará solo uno de los bloques de código que pertenecen a toda la construcción `if`.
