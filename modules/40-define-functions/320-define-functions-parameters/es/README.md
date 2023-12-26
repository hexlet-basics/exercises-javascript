
Las funciones no sólo pueden devolver valores, sino también recibirlos como parámetros (también conocidos como argumentos). Ya nos hemos encontrado con parámetros de funciones muchas veces:

```javascript
// Recibe un parámetro de cualquier tipo
console.log('soy un parámetro');
// Recibe dos parámetros de tipo string
// el primero es lo que buscamos, el segundo es por qué lo reemplazamos
'google'.replace('go', 'mo'); // moogle
// Recibe dos parámetros numéricos
// el primero es el índice inicial (incluido), el segundo es el índice final (no incluido)
'hexlet'.slice(1, 3); // ex
```

En esta lección aprenderemos a crear funciones que reciben parámetros. Supongamos que tenemos la tarea de implementar la función `getLastChar()`, que devuelve el último carácter de una cadena que se le pasa como parámetro. Así es como se usaría esta función:

```javascript
// Pasando parámetros directamente sin variables
getLastChar('Hexlet'); // t
// Pasando parámetros a través de variables
const name1 = 'Hexlet';
getLastChar(name1); // t
const name2 = 'Goo';
getLastChar(name2); // o
```

De la descripción y los ejemplos de código, podemos hacer las siguientes conclusiones:

* Necesitamos definir la función `getLastChar()`
* La función debe recibir un parámetro de tipo string
* La función debe devolver un valor de tipo string

Definición de la función:

```javascript
const getLastChar = (text) => {
  // Calculamos el índice del último carácter como la longitud de la cadena - 1
  return text[text.length - 1];
};
```

Analicémoslo. Entre paréntesis se especifica el nombre de la variable `text`, que es nuestro parámetro. El nombre del parámetro puede ser cualquier cosa. Lo importante es que refleje el significado del valor que contiene. Podríamos haber definido la función de esta manera:

```javascript
const getLastChar = (str) => {
  return str[str.length - 1];
};
```

El valor específico del parámetro dependerá de cómo se llame a esta función.

```javascript
// Dentro de la función, str será igual a 'hexlet'
getLastChar('hexlet'); // t

// Dentro de la función, str será igual a 'code'
getLastChar('code'); // e

// Dentro de la función, str será igual a 'Winter is coming'
// El nombre de la variable externa no está relacionado con el nombre de la variable en la definición de la función
const text = 'Winter is coming';
getLastChar(text); // g
```

De la misma manera, se pueden especificar dos, tres o más parámetros. Cada parámetro se separa de los demás por comas:

```javascript
// función para encontrar el número medio
const average = (a, b) => {
  return (a + b) / 2;
};

average(1, 5); // 3
average(1, 2); // 1.5
```

https://replit.com/@hexlet/js-basics-define-functions-parameters

Lo mismo se aplica a los métodos. Pueden requerir cualquier cantidad de parámetros que necesiten para funcionar:

```javascript
// el primer parámetro es lo que buscamos
// el segundo parámetro es por qué lo reemplazamos
'google'.replace('go', 'mo'); // moogle
```

Para crear tales funciones y métodos, debemos especificar la cantidad necesaria de parámetros en la definición, separándolos por comas y dándoles nombres descriptivos. A continuación se muestra un ejemplo de la definición de la función `replace()`, que reemplaza una parte de una cadena por otra:

```javascript
const replace = (text, from, to) => {
  // aquí va el cuerpo de la función, pero lo omitimos para no distraernos
};

replace('google', 'go', 'mo'); // moogle
```

Cuando hay dos o más parámetros, el orden en que se pasan a la función se vuelve importante para casi todas las funciones. Si se cambia el orden, la función se ejecutará de manera diferente:

```javascript
// no se reemplaza nada,
// ya que no hay 'mo' dentro de google
replace('google', 'mo', 'go'); // google
```
