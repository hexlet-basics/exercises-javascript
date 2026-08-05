Imaginemos que tenemos una cadena y queremos reemplazar en ella un carácter, por ejemplo la primera letra de un nombre:

```javascript
let greeting = 'Hello';
greeting[0] = 'J';
console.log(greeting); // => Hello (¡no cambió!)
```

A diferencia de algunos lenguajes, donde ese intento provoca un error, en JavaScript la asignación por índice simplemente **se ignora en silencio**: la cadena no cambia (y en modo estricto eso provocará un error `TypeError`). La razón es una: las cadenas en JavaScript no se pueden modificar por partes. Una vez creadas, pasan a ser inmutables.

## ¿Por qué las cadenas son inmutables?

Los tipos primitivos (cadenas, números, valores lógicos) en JavaScript no se pueden modificar. Eso da ventajas importantes:

- Seguridad: los valores no cambiarán por accidente.
- Rendimiento: con valores inmutables es más simple trabajar dentro del motor.
- Previsibilidad: menos efectos inesperados al pasar datos a funciones.

## ¿Y entonces cómo se «cambia» una cadena?

Si hace falta «cambiar» una cadena, se crea una nueva a partir de la anterior y se guarda en la misma variable. Por ejemplo, reemplacemos la primera letra:

```javascript
const word = 'hello';
const fixed = 'H' + word.slice(1);
console.log(fixed); // => Hello
```

```text
word = 'hello'

word[0] = 'H'  →  no pasa nada, las cadenas son inmutables

'H' + word.slice(1)
└────────┬────────┘
     'Hello'        ←  se creó una cadena nueva
```

Reasignar la variable por completo también se puede, pero eso crea una cadena **nueva**, no modifica la anterior:

```javascript
let greeting = 'Hello';
greeting = 'Jello';
console.log(greeting); // => Jello
```

## ¿Una variable nueva o la misma?

Vale la pena reutilizar una variable solo cuando se trata de una misma entidad. Si ya son otros datos, es mejor declarar una variable aparte:

```javascript
// La misma cadena, simplemente la actualizamos
let name = 'Alexander';
name = 'Blexander';

// Entidades distintas: mejor variables distintas
const firstName = 'Alexander';
const correctedFirstName = 'Blexander';
```

Intentar «meter» todas las cadenas en una sola variable enreda el código: la variable deja de decir qué guarda.

## Conclusión

Los tipos de datos primitivos en JavaScript (cadenas, números, valores lógicos) son inmutables. Eso significa que, una vez creados, su valor no se puede cambiar. Cambiar un solo carácter de una cadena es imposible: cualquier «cambio» ocurre creando un valor nuevo y redefiniendo la variable.
