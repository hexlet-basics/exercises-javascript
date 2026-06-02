Mientras un programa es pequeño, todo el código puede vivir en un solo archivo. Este enfoque es cómodo para ejemplos sencillos y tareas pequeñas. Pero con el tiempo el programa empieza a crecer. Cuando hay mucho código, resulta difícil orientarse en un único archivo. Las aplicaciones reales constan de decenas de miles de líneas (como mínimo) y cientos de archivos.

Para dividir un programa en partes lógicas separadas, en JavaScript se usan los módulos. Un archivo de código independiente es un módulo. El lenguaje proporciona mecanismos con los que un archivo puede usar funciones y constantes de otro.

## export e import

El módulo decide qué entregar al exterior. Para ello se usa la palabra clave `export`. Otro archivo conecta lo exportado mediante `import`.

Probablemente ya hayas visto líneas como esta al comienzo de algunos ejercicios — ahora veamos qué significan:

```javascript
import { length } from 'hexlet-basics/string';

console.log(length('Hello!')); // => 6
```

Esta línea conecta la función `length` del módulo `hexlet-basics/string` y la hace disponible en el archivo actual.

## Importación con nombre

De un mismo módulo se pueden importar varios nombres a la vez, enumerándolos entre llaves:

```javascript
import { reverse, toUpperCase } from 'hexlet-basics/string';

console.log(reverse('hexlet'));     // => telxeh
console.log(toUpperCase('hexlet')); // => HEXLET
```

Tras esta importación, las funciones se llaman directamente, por sus nombres. Esto es cómodo: no hace falta indicar cada vez de qué módulo proviene una función.

## Exportación por defecto

Para exportar algo, el módulo lo marca con la palabra `export`. Hay dos tipos de exportación. La nombrada: puede haber tantos nombres exportados como se quiera:

```javascript
// string.js
const reverse = (s) => s.split('').reverse().join('');
const length = (s) => s.length;

export { reverse, length };
```

Y la exportación por defecto: un módulo solo puede tener una. Ya te has topado con ella al definir funciones:

```javascript
// sum.js
const sum = (a, b) => a + b;

export default sum;
```

La importación por defecto se escribe sin llaves, y se le puede dar cualquier nombre:

```javascript
import sum from './sum.js';

console.log(sum(2, 3)); // => 5
```

## Renombrar al importar

A veces un nombre de un módulo ya está ocupado en el archivo actual. Para evitar el conflicto, la importación se puede renombrar con `as`:

```javascript
import { reverse as reverseString } from 'hexlet-basics/string';

console.log(reverseString('hexlet')); // => telxeh
```

Ahora la función está disponible bajo el nombre `reverseString`, mientras que el nombre original `reverse` queda libre.

## Módulos estándar

Cada lenguaje viene con un conjunto de funciones listas para usar. En JavaScript, la mayoría de ellas están disponibles de forma global y no requieren importación — por ejemplo, el objeto `Math` para las matemáticas o `console` para la salida.

Pero JavaScript se ejecuta en distintos entornos. El entorno de servidor Node.js tiene módulos integrados que hay que importar. Se importan con el prefijo `node:` — por ejemplo, el módulo `node:fs` para trabajar con archivos:

```javascript
import { readFile } from 'node:fs/promises';
```

Las funciones listas se pueden tomar no solo de los módulos estándar, sino también de módulos de terceros. Hablaremos de cómo se distribuyen estos en la siguiente lección.
