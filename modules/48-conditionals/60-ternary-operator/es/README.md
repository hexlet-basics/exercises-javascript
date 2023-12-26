
Echa un vistazo a la definición de una función que devuelve el valor absoluto de un número:

```javascript
const abs = (number) => {
  if (number >= 0) {
    return number;
  }

  return -number;
};

abs(10); // 10
abs(-10); // 10
```

¿Se puede escribir de forma más concisa? Algo como `return <respuesta dependiendo de la condición>`? Para eso, a la derecha de `return` debe haber una expresión, pero `if` es una instrucción, no una expresión.

En JavaScript existe una construcción que es similar a la estructura *if-else*, pero a la vez es una expresión. Se llama **operador ternario**.

El operador ternario es único en su tipo, ya que requiere tres operandos:

```javascript
const abs = (number) => {
  return number >= 0 ? number : -number;
};
```

El patrón general se ve así: `<predicate> ? <expression on true> : <expression on false>`.

La versión abreviada de la función `abs()` se ve así:

```javascript
const abs = (number) => (number >= 0 ? number : -number);
```

Ten en cuenta los paréntesis alrededor del operador ternario. No son obligatorios, pero el linter [recomienda encarecidamente](https://eslint.org/docs/rules/no-confusing-arrow) usarlos para evitar ambigüedades.

Ahora reescribamos la función inicial `getTypeOfSentence()` de manera similar:

Antes:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  if (lastChar === '?') {
      return 'question';
  }

  return 'normal';
};
```

Después:

```javascript
const getTypeOfSentence = (sentence) => {
  const lastChar = sentence.slice(-1);

  return (lastChar === '?') ? 'question' : 'normal';
};

getTypeOfSentence('Hodor');  // normal
getTypeOfSentence('Hodor?'); // question
```

https://replit.com/@hexlet/js-basics-ternary-operator

---

Si recuerdas el poder de las expresiones, probablemente ya te hayas dado cuenta de que se puede anidar un operador ternario dentro de otro. **No hagas esto :)**. Este tipo de código es difícil de leer y depurar, y es una mala práctica.
