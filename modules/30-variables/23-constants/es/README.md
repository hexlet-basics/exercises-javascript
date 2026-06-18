A veces, un programa contiene valores que nunca deben cambiar. Por ejemplo:

- la constante matemática π (pi);
- el tipo de cambio del dólar en una fecha determinada;
- una comisión fija del servicio.

Estos valores se denominan constantes, y es habitual distinguirlos de las variables normales para que no surja la tentación de cambiarlos.

## Ejemplo: el número π

```javascript
const PI = 3.14;
console.log(PI); // => 3.14
```

Aquí `PI` es una constante que almacena el valor del número π. El sentido de una constante es que su valor no debe cambiar durante la ejecución del programa.

## const en JavaScript

En muchos lenguajes, una constante es una entidad del lenguaje independiente cuyo valor no se puede cambiar. En JavaScript existe la palabra clave `const` para esto. A diferencia de una variable normal, una constante declarada con `const` no se puede reasignar:

```javascript
const maxLoginAttempts = 3;
maxLoginAttempts = 5; // TypeError: Assignment to constant variable.
```

## const vs let

```javascript
let score = 0;   // cambiará
const lives = 3; // no cambia
```

Usa `const` de forma predeterminada. Cambia a `let` solo cuando sepas con certeza que el valor se reasignará. Las constantes son más fáciles de analizar: al ver `const`, el lector sabe de inmediato que el valor no cambiará en ningún lugar del código. Con `let` no existe esa certeza, y hay que rastrear todos los lugares donde la variable podría haberse modificado.

## Convención de nomenclatura

Técnicamente, cualquier variable declarada con `const` ya es una constante. Pero para las constantes globales — aquellas que definen los parámetros fundamentales de todo el programa — es habitual usar adicionalmente el estilo `UPPER_SNAKE_CASE` (también llamado SCREAMING_SNAKE_CASE):

- todas las letras en mayúsculas;
- las palabras se separan con el carácter de subrayado `_`.

```javascript
const MAX_USERS = 100;
const DEFAULT_TIMEOUT = 30;
const DEFAULT_LANGUAGE = 'ru';
```

Esto no es un requisito del lenguaje, sino una señal para el lector: ese valor no debe cambiar bajo ninguna circunstancia.

## ¿Para qué sirven las constantes?

Las constantes hacen que el código sea más claro y seguro. Ayudan a ver de inmediato qué valores del programa se consideran fijos. Esto es especialmente importante al trabajar con datos como constantes matemáticas y físicas, configuraciones predeterminadas o límites fijos. El uso de constantes reduce el riesgo de errores: por la declaración `const` se entiende de inmediato que estamos ante un valor que no debe cambiarse. Además, si el valor sí necesita cambiarse (por ejemplo, en la configuración), basta con cambiarlo en un solo lugar, y el cambio se aplica automáticamente en todo el programa.
