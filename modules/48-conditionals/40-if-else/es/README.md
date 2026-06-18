
Escribamos una función `getTypeOfSentence()` que analiza un texto y devuelve una descripción de su tono: para las oraciones ordinarias – *General sentence*, para las interrogativas – *Question sentence*.

```javascript
  getTypeOfSentence('Hodor');  // General sentence
  getTypeOfSentence('Hodor?'); // Question sentence
```

La implementación de la función:

```javascript
const getTypeOfSentence = (sentence) => {
  // Declaramos una variable en la que guardaremos el tipo de oración
  let sentenceType;
  // Un predicado que comprueba el final del texto
  // Si termina con el carácter '?', devuelve true,
  // de lo contrario false
  if (sentence.endsWith('?')) {
    // Si la condición anterior se cumplió,
    // entonces es una oración interrogativa.
    // Asignamos a sentenceType el valor correspondiente.
    sentenceType = 'Question';
  } else {
    // En todos los demás casos la oración es ordinaria
    sentenceType = 'General';
  }

  // Mediante la interpolación construimos una cadena
  return `${sentenceType} sentence`;
};
```

Agregamos la palabra clave `else` y un nuevo bloque con llaves. Este bloque se ejecuta solo si la condición en `if` es falsa.

```text
      ┌───────────┐
      │ condición?│
      └─────┬─────┘
  true │         │ false
      ↓         ↓
┌──────────┐ ┌──────────┐
│ cuerpo if│ │cuerpo else│
└──────────┘ └──────────┘
```

## Condiciones anidadas

Dentro del bloque `else` (al igual que dentro del bloque `if`) se pueden anidar otras condiciones. Gracias a las llaves, el anidamiento siempre es visible de forma explícita:

```javascript
const number = 10;

if (number > 10) {
  console.log('Number is greater than 10');
} else {
  if (number === 10) {
    console.log('Number is exactly 10');
  } else {
    console.log('Number is less than 10');
  }
}
// => Number is exactly 10
```

Aquí primero se comprueba `number > 10`. La condición es falsa, por lo que el control pasa a `else`, donde se comprueba la condición anidada `number === 10`. Es verdadera — se imprime `Number is exactly 10`.

Existen dos maneras de organizar la construcción *if-else*. Mediante la negación se puede cambiar el orden de los bloques:

```javascript
const getTypeOfSentence = (sentence) => {
  let sentenceType;
  // Se agregó una negación
  // El contenido de else se movió a if y viceversa
  if (!sentence.endsWith('?')) {
    sentenceType = 'General';
  } else {
    sentenceType = 'Question';
  }

  return `${sentenceType} sentence`;
};
```

¿Qué manera es preferible? Al cerebro humano le resulta más fácil pensar de forma directa, no a través de la negación. Procura elegir una comprobación que no contenga negaciones y ajusta el contenido de los bloques a ella.
