
El cuerpo de un bucle, al igual que el cuerpo de una función, es el lugar donde se ejecutan las instrucciones. Esto significa que podemos utilizar todo lo que hemos aprendido hasta ahora dentro de él, como por ejemplo, estructuras condicionales.

Imagina una función que cuenta cuántas veces aparece una letra en una oración. Aquí tienes un ejemplo de cómo funciona:

```javascript
countChars('Fear cuts deeper than swords.', 'e'); // 4
// Si no se encuentra ninguna coincidencia, el resultado es 0
countChars('Sansa', 'y'); // 0
```

Antes de ver el contenido de la función, intenta responder las siguientes preguntas:

* ¿Es esta operación una agregación?
* ¿Cómo se comprueba si un carácter está presente?

```javascript
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char) {
      // Solamente contamos los caracteres que coinciden
      count = count + 1;
    }
    // El contador se incrementa en cualquier caso
    i = i + 1;
  }

  return count;
};
```

https://replit.com/@hexlet/js-basics-condition-inside-loops

Este problema es una operación de agregación. Aunque no cuenta todos los caracteres, aún es necesario analizar cada uno para calcular la suma total.

La diferencia clave de este bucle con los que hemos visto anteriormente es que tiene una condición dentro del cuerpo. La variable `count` solo se incrementa cuando el carácter actual coincide con el esperado.

De lo contrario, esta es una función agregada típica que devuelve la cantidad de caracteres necesarios al código que la llama.
