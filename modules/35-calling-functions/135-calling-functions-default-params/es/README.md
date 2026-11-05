Algunas funciones tienen **parámetros opcionales**. Eso significa que para ellos se ha fijado de antemano un valor por defecto, y al llamar a la función ese parámetro se puede omitir.

Veamos el método `toFixed()`, que redondea un número a una cantidad dada de decimales. `toFixed()` es un método, es decir, una función adjunta a un valor y llamada mediante el punto; los métodos los veremos en detalle en la lección sobre objetos.

```javascript
const result = (10.25).toFixed(1); // => '10.3'
```

Fíjate en las comillas del resultado: `toFixed()` devuelve una **cadena**, no un número, por eso no se puede usar directamente en cálculos posteriores.

Le pasamos un valor: la precisión del redondeo (1 decimal). Pero ese parámetro es opcional. Si no se indica, se usa el valor por defecto `0`, es decir, el redondeo a entero:

```javascript
console.log((10.25).toFixed()); // => '10'
```

Si hace falta otra precisión, se indica de forma explícita:

```javascript
console.log((3.14159).toFixed(2)); // => '3.14'
console.log((3.14159).toFixed(4)); // => '3.1416'
```

```text
(10.25).toFixed(1)  →  argumento: 1    →  '10.3'
(10.25).toFixed()   →  argumento: (0)  →  '10'
                                └── valor por defecto
```

En `toFixed()` el único parámetro, `digits`, es opcional. Otra función puede tener otra cantidad de parámetros y otros valores por defecto.

## Cómo leer la documentación de una función

La documentación describe qué datos recibe una función y qué resultado devuelve. La referencia de las funciones integradas de JavaScript está en [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference). La página de una función se divide en secciones. La sección Syntax muestra el nombre de la función, sus parámetros y su orden; la sección Parameters explica para qué sirve cada parámetro, y la sección Return value describe el resultado. Para escribir una llamada hacen falta las tres secciones.

Veamos la [referencia de `toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Abajo están sus secciones Syntax, Parameters y Return value; una parte del texto se ha omitido.

```text
Syntax
  toFixed()
  toFixed(digits)

Parameters
  digits Optional
    The number of digits to appear after the decimal point; should be
    a value between 0 and 100, inclusive. If this argument is omitted,
    it is treated as 0.

Return value
  A string representing the given number using fixed-point notation.
  ...
```

La descripción se lee de arriba abajo, paso a paso.

1. La sección Syntax enumera las llamadas válidas, una por línea. El método se puede llamar sin argumentos o con un argumento `digits`.
2. La sección Parameters explica cada parámetro por el nombre que aparece en Syntax. La etiqueta Optional indica que el argumento se puede omitir. La última frase de la descripción dice que, si falta `digits`, se toma como `0`.
3. La sección Return value describe el resultado. La expresión inglesa return value significa «valor devuelto». El método devuelve una cadena (string), por eso la respuesta aparece entre comillas.
4. Más abajo la página trata las excepciones y otros detalles. En una primera lectura se pueden saltar.

El nombre `digits` designa un parámetro, y en la llamada se sustituye por un valor concreto, por ejemplo `(10.25).toFixed(1)`. La tabla relaciona las partes de la referencia con los argumentos de esa llamada.

| Parte de la referencia | Qué significa | En la llamada `(10.25).toFixed(1)` |
| --- | --- | --- |
| `toFixed` | Nombre del método | Llamamos a `toFixed()` sobre el número `10.25` |
| `digits` | Cantidad de decimales | Pasamos `1` |
| Etiqueta Optional junto a `digits` | El argumento se puede omitir | Pasamos `1`, aunque podríamos no pasarlo |

Comprobemos los dos casos en la [consola del navegador](https://developer.chrome.com/docs/devtools/console/). El signo `>` marca la línea de entrada, y debajo de cada llamada la consola imprime el resultado.

```console
> (10.25).toFixed(1)
'10.3'
> (10.25).toFixed()
'10'
```

La primera llamada pasa la precisión `1` y obtiene la cadena `'10.3'`. La segunda deja `digits` con su valor por defecto y obtiene la cadena `'10'`. Así relacionamos la referencia, la explicación de la documentación y el resultado de la ejecución.

## Notación en la referencia

Las referencias marcan los parámetros opcionales de distintas formas. Estas marcas ayudan a leer la firma y no se copian en la llamada.

| Notación en la referencia | Cómo leerla |
| --- | --- |
| Dos líneas, `toFixed()` y `toFixed(digits)` | El método se llama sin argumento o con el argumento `digits` |
| `toFixed([digits])` | Otra forma de marcar un argumento opcional. Los corchetes no forman parte de la llamada |

La notación `toFixed([digits])` aparece en referencias y artículos de terceros. La llamada `(10.25).toFixed(1)` pasa el número `1` sin corchetes. Ni el nombre `digits` ni los corchetes se copian en la llamada.

Si el navegador traduce la página, hay que comparar los nombres de funciones y parámetros y los símbolos de la firma con el original. En el código se usan los nombres originales de la documentación. Por ejemplo, traducir `digits` como «dígitos» ayuda a entender la descripción, pero en la llamada se sigue poniendo el valor `1`.

## Trabajar con una función desconocida

La lectura de la referencia empieza por la tarea. Por ejemplo, para mostrar un precio con un decimal, en la sección Syntax buscamos la llamada con `digits`, en Parameters comprobamos qué significa ese parámetro, en Return value vemos que el resultado será una cadena y después probamos la llamada `(10.25).toFixed(1)`. Si el resultado coincide con la descripción, la llamada se puede usar en el programa.

Otra función tendrá sus propios parámetros y reglas. Con su firma decidimos qué argumentos pasar, con la descripción conocemos el resultado y las limitaciones, y con un ejemplo pequeño comprobamos lo que hemos entendido.
