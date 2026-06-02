A medida que un programa crece, no solo aumenta la cantidad de líneas de código, sino también la cantidad de módulos. En proyectos pequeños se pueden mantener decenas de archivos uno al lado del otro, pero las aplicaciones reales pueden tener cientos y miles de archivos. Además, el código útil se quiere reutilizar en distintos proyectos.

En Python se usan los paquetes-directorios para agrupar módulos. En el ecosistema de JavaScript, la unidad de reutilización y distribución es un **paquete** (un paquete de npm). Un paquete es un conjunto de módulos que se publica y se instala como un todo.

## Qué es un paquete

Un paquete se describe con un archivo `package.json` y se instala con el comando `npm install` en el directorio `node_modules`. Desde ahí se importan sus módulos. Uno de esos paquetes es `hexlet-basics`, del que importamos funciones en este curso.

## Importación por nombre del paquete

Cuando un paquete está instalado, su contenido se importa por el nombre del paquete y no por la ruta a un archivo:

```javascript
import { round } from 'hexlet-basics/math';

console.log(round(3.14159, 2)); // => 3.14
```

## Un paquete, varios módulos

Un paquete suele contener más de un módulo. Para elegir un módulo concreto dentro de un paquete, se añade una ruta tras su nombre con `/`:

```javascript
import { reverse } from 'hexlet-basics/string'; // el módulo string del paquete hexlet-basics
import { round } from 'hexlet-basics/math';     // el módulo math del mismo paquete
```

La parte antes de `/` es el nombre del paquete, y la parte posterior es el módulo dentro de él. Así, un mismo paquete puede agrupar muchos módulos organizados por tarea.

## package.json

Un paquete se describe a sí mismo en un archivo `package.json`. En él se indican el nombre, las dependencias y qué módulos entrega al exterior:

```json
{
  "name": "hexlet-basics",
  "dependencies": {},
  "exports": {
    "./string": "./src/hexlet/string.js",
    "./math": "./src/hexlet/math.js"
  }
}
```

El campo `exports` define qué rutas están disponibles al importar. Gracias a él, escribir `hexlet-basics/string` apunta al archivo correcto dentro del paquete.

## node_modules y el registro de npm

Los paquetes instalados acaban en el directorio `node_modules`. No se escriben a mano — la fuente principal es el registro de npm, donde hay publicados cientos de miles de paquetes listos para usar: para trabajar con fechas, redes, pruebas y casi cualquier otra tarea.

Aparte están los módulos integrados del entorno Node.js (`node:fs`, `node:path` y otros). No hace falta instalarlos — vienen junto con Node.js, como una biblioteca estándar.
