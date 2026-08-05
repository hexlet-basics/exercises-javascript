
Recordemos cómo funciona la concatenación. Para ello unimos las cadenas necesarias (o las variables con cadenas dentro) mediante el signo `+`:

```javascript
const firstName = 'Joffrey';
const greeting = 'Hello';

console.log(greeting + ', ' + firstName + '!');
// => Hello, Joffrey!
```

Pero en expresiones complejas cuesta ver de inmediato qué texto se obtendrá al final. Sobre todo si en la cadena hay espacios, comas o comillas: empiezan a estorbar la lectura. Incluso el ejemplo actual exige un pequeño esfuerzo para entender cuál será el resultado.

Por esa razón, en muchos lenguajes existe una operación llamada interpolación. La interpolación es una forma de insertar los valores de las variables directamente dentro de una cadena. En JavaScript, para eso se usan las **plantillas de cadena** (template literals). Se escriben entre comillas invertidas `` ` ``, y las variables se insertan con `${}`:

```javascript
const firstName = 'Joffrey';
const greeting = 'Hello';

console.log(`${greeting}, ${firstName}!`);
// => Hello, Joffrey!
```

Las comillas invertidas indican que dentro de la cadena se pueden usar variables. Sus nombres se escriben en `${}`, y JavaScript sustituye automáticamente los valores necesarios.

```text
firstName = 'Joff'
greeting  = 'Hello'

`${greeting}, ${firstName}!`
   └───┬───┘    └────┬────┘
   'Hello'        'Joff'
    └──────┬────────┘
    'Hello, Joff!'
```

Compara estos dos ejemplos uno al lado del otro:

```javascript
console.log(greeting + ', ' + firstName + '!');
console.log(`${greeting}, ${firstName}!`);
```

La segunda variante es más simple y más clara.

## Cómo funciona

Todo lo que está dentro de `${}` se evalúa como una expresión de JavaScript, y el resultado se inserta en la cadena. Por eso dentro se pueden usar no solo variables, sino cualquier expresión: aritmética, llamadas a funciones y así sucesivamente.

```javascript
const price = 100;
const count = 3;

console.log(`Total: ${price * count}`);
// => Total: 300
```

## Las comillas invertidas son la clave

Una plantilla de cadena se escribe **obligatoriamente** entre comillas invertidas `` ` ``. Las comillas simples o dobles no funcionan para la interpolación:

```javascript
console.log('${firstName}'); // mostrará literalmente: ${firstName}
console.log(`${firstName}`); // mostrará el valor de la variable
```

## Ejemplo

```javascript
const school = 'Hexlet';

const whatIsIt = `${school} - online courses`;
console.log(whatIsIt); // => Hexlet - online courses
```

Esa forma de escribir se lee con facilidad: los espacios, los guiones y los símbolos se ven de inmediato. La cadena se parece exactamente a como aparecerá en la salida. Eso hace que el código sea claro y cómodo de mantener.

## Por qué esto importa

La interpolación es preferible a la concatenación en casi todos los lenguajes de programación modernos. Ella:

- simplifica la estructura de las cadenas;
- mejora la legibilidad del código;
- reduce la cantidad de errores al trabajar con espacios y signos de puntuación.
