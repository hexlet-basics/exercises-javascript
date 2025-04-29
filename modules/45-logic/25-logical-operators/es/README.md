
Las expresiones lógicas pueden combinarse entre sí para crear verificaciones más complejas. Un buen ejemplo es la verificación de contraseñas. Como sabes, algunos sitios web requieren contraseñas de entre 8 y 20 caracteres de longitud. Honestamente, esta es una restricción extraña, pero qué se le va a hacer. En matemáticas, escribiríamos `8 < x < 20` (donde `x` es la longitud de una contraseña específica), pero en JavaScript esto no funcionaría. Tendremos que hacer dos expresiones lógicas separadas y combinarlas con el operador especial "Y":

```
La contraseña es más larga de 8 caracteres **Y** más corta de 20 caracteres.
```

Aquí hay una función que toma una contraseña y verifica si cumple con las condiciones o no:

```javascript
const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};

isStrongPassword('qwerty'); // false
isStrongPassword('qwerty1234'); // true
isStrongPassword('zxcvbnmasdfghjkqwertyui'); // false
```

`&&` significa "Y" (en lógica matemática se llama conjunción). La expresión completa sólo se considera verdadera cuando cada operando es verdadero, es decir, cada una de las expresiones compuestas. En otras palabras, `&&` significa "y esto, y aquello".

La prioridad de este operador es menor que la de los operadores de comparación, por lo que la expresión funciona correctamente sin paréntesis.

Además de `&&`, se utiliza frecuentemente el operador `||` - "O" (disyunción). Significa "o esto, o aquello, o ambos". Los operadores se pueden combinar en cualquier cantidad y en cualquier secuencia, pero cuando se encuentran `&&` y `||` al mismo tiempo, es mejor establecer la prioridad con paréntesis. A continuación, se muestra un ejemplo de una función extendida para determinar la validez de una contraseña:

```javascript
const hasSpecialChars = (str) => /* verifica si la cadena contiene caracteres especiales */;

const hasCapitalChars = (str) => /* verifica si la cadena contiene letras mayúsculas */

const isStrongPassword = (password) => {
  const length = password.length;
  // Los paréntesis establecen la prioridad. Está claro a qué se refiere cada parte.
  return length > 8 && (hasSpecialChars(password) || hasCapitalChars(password));
};
```

Otro ejemplo. Queremos comprar un apartamento que cumpla con las siguientes condiciones: área mayor o igual a 100 metros cuadrados en cualquier calle **O** área mayor o igual a 80 metros cuadrados, pero en la calle principal `Main Street`.

Escribamos una función que verifique el apartamento. Toma dos argumentos: el área (un número) y el nombre de la calle (una cadena):

```javascript
const isGoodApartment = (area, street) => {
  // Usamos una variable para que la función no sea demasiado larga
  const result = area >= 100 || (area >= 80 && street === 'Main Street');
  return result;
};

isGoodApartment(91, 'Queens Street'); // false
isGoodApartment(78, 'Queens Street'); // false
isGoodApartment(70, 'Main Street');   // false

isGoodApartment(120, 'Queens Street'); // true
isGoodApartment(120, 'Main Street');   // true
isGoodApartment(80, 'Main Street');    // true
```

El área de las matemáticas que estudia los operadores lógicos se llama álgebra booleana. A continuación se muestran las "tablas de verdad" que permiten determinar el resultado de la aplicación de un operador:

## Y `&&`

| A     | B     | A && B   |
|-------| ------|----------|
| VERDADERO  | VERDADERO  | **VERDADERO** |
| VERDADERO  | FALSO | FALSO    |
| FALSO | VERDADERO  | FALSO    |
| FALSO | FALSO | FALSO    |

Algunos ejemplos:

```javascript
// true && true;
3 > 2 && 'wow'.startsWith('w'); // true

// true && false;
'start' === 'start' && 8 < 3; // false
```

## O `||`

| A     | B     | A &vert;&vert; B |
|-------|-------|----------|
| VERDADERO  | VERDADERO  | **VERDADERO** |
| VERDADERO  | FALSO | **VERDADERO** |
| FALSO | VERDADERO  | **VERDADERO** |
| FALSO | FALSO | FALSO    |

Algunos ejemplos:

```javascript
// true || true;
3 > 2 || 'wow'.startsWith('w'); // true

// false || false;
'start' === 'Start' || 3 < 3; // false
```
