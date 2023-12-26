
En programación, una expresión es algo que devuelve un resultado que se puede utilizar. Ya sabemos bastante sobre expresiones y los principios de su construcción. Las operaciones matemáticas (suma, resta), así como las operaciones de cadenas (concatenación), - todas estas son expresiones:

```javascript
1 + 5 * 3;
'Hex' + 'Let';
// Las variables pueden ser parte de una expresión
rate * 5;
```

La característica de las expresiones es que devuelven un resultado que se puede asignar a una constante o mostrar en pantalla. Por ejemplo:

```javascript
// Aquí la expresión es 1 + 5
const sum = 1 + 5;
console.log(1 + 5);
```

Pero no todo en programación es una expresión. La declaración de una variable es una instrucción; no puede ser parte de una expresión. Es decir, este código dará un error:

```javascript
// Código sin sentido que no funcionará
10 + const sum = 1 + 5;
```

¿Por qué es importante saber esto? Como verás más adelante, las expresiones se pueden combinar para obtener un comportamiento más complejo en lugares inesperados y de formas inesperadas. Entenderás mejor cómo se pueden combinar las partes del código para obtener el resultado deseado.

Hablemos de las funciones. ¿Una llamada a una función es una expresión o no? Sabemos que las funciones devuelven un resultado, por lo tanto, sí, son expresiones. De esto se deduce automáticamente muchas cosas interesantes. Por ejemplo, podemos usar una llamada a una función directamente en operaciones matemáticas. Así es como se puede obtener el índice del último carácter en una palabra:

```javascript
import { length } from 'hexlet-basics/string';

const name = 'JavaScript';
// Los índices comienzan desde cero
// ¡Llamada al método y resta juntos!
const lastIndex = length(name) - 1;
console.log(lastIndex); // 9
```

En este código no hay una nueva sintaxis. Solamente hemos combinado partes conocidas basándonos en su naturaleza. Podemos ir aún más lejos:

```javascript
console.log(length(name) - 1); // 9
```

Todo esto es válido para cualquier función, por ejemplo, las funciones de cadenas:

```javascript
import { length } from 'hexlet-basics/string';

const name = 'JavaScript';
// Se utiliza interpolación
console.log(`Último carácter: ${name[length(name) - 1]}`);
// 'Último carácter: t'
```
