Además de las operaciones aritméticas, en matemáticas existen las operaciones de comparación, por ejemplo `5 > 4` o `3 < 1`. También existen en programación. Las comparaciones se usan con frecuencia en tareas del mundo real. Por ejemplo, cuando realizamos una compra en una tienda en línea, el sistema verifica si el usuario tiene suficiente dinero en su cuenta: si el monto en la cuenta es mayor o igual que el precio del producto, el pedido se confirma; de lo contrario, aparece un mensaje de fondos insuficientes.

## Comparación en programación

Empecemos con un ejemplo en el que se comparan dos números:

```javascript
console.log(5 > 4); // => true
console.log(4 > 4); // => false
```

El resultado de una comparación es un valor del tipo **boolean** (tipo lógico). Tiene solo dos valores posibles: `true` (verdadero) y `false` (falso). Son valores especiales del lenguaje y se pueden usar directamente:

```javascript
console.log(true);
console.log(false);
```

En la práctica, rara vez se usan de esta forma, pero sobre ellos se construye toda la lógica del comportamiento del programa. Nos encontramos con esto cada día: ingresamos códigos PIN y contraseñas, ejecutamos acciones cuyo resultado puede ser distinto. El programa razona más o menos así: *si es así — haz una cosa, si es de otro modo — haz otra*.

En JavaScript están disponibles las siguientes operaciones de comparación:

| Operador | Significado |
|----------|-------------|
| `<` | menor que |
| `<=` | menor o igual que |
| `>` | mayor que |
| `>=` | mayor o igual que |
| `===` | estrictamente igual |
| `!==` | estrictamente distinto |

Los lenguajes de programación adoptaron las operaciones matemáticas de comparación casi sin cambios, excepto la igualdad y la desigualdad. En matemáticas se usa el `=` habitual, pero en programación el símbolo `=` ya está ocupado: asigna valores a las variables. Por eso, para la comparación de igualdad JavaScript usa `===` y para la desigualdad `!==` (el triple y el del signo de exclamación son la comparación "estricta", a la que volveremos más adelante).

```javascript
console.log(5 >= 3);  // => true
console.log(7 < 0);   // => false
console.log(5 > 5);   // => false
console.log(5 >= 5);  // => true
console.log(2 === 5); // => false
console.log(2 !== 5); // => true
```

Cuando en una comparación se usan valores concretos, la operación parece carecer de sentido: el resultado ya se conoce y siempre es el mismo. Pero todo cambia cuando los valores pueden ser distintos. Escribamos una función simple que reciba la edad de un niño y determine si es un bebé. Se consideran bebés a los niños menores de dos años (dos no se incluye):

```javascript
const isInfant = (age) => age < 2;

console.log(isInfant(3)); // => false
console.log(isInfant(2)); // => false
console.log(isInfant(1)); // => true
console.log(isInfant(0)); // => true
```

## Predicados

Cuando las funciones devuelven el resultado de una comparación, suelen responder a la pregunta "sí" o "no". Tales funciones se llaman **predicados**. Son fáciles de reconocer: devuelven un valor lógico `true` o `false`, y su nombre a menudo contiene la afirmación que se comprueba (`is`, `has`, `can`). Aquí tienes una función que comprueba si un número es negativo:

```javascript
const isNegative = (number) => number < 0;

console.log(isNegative(-5)); // => true
console.log(isNegative(7));  // => false
```

Los nombres de los predicados se construyen de modo que la pregunta se lea directamente a partir del nombre: `hasChildren()` — "¿hay hijos?", `isEmpty()` — "¿la cadena está vacía?", `hasErrors()` — "¿hay errores?". Al mismo tiempo, se considera predicado solo a una función que devuelve precisamente un valor lógico, sin excepciones.
