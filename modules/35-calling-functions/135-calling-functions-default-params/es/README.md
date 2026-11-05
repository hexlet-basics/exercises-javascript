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

Veamos la [referencia de `toFixed()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). En la sección Syntax hay dos líneas.

```text
toFixed()
toFixed(digits)
```

Cada línea describe una llamada válida. El método se puede llamar sin argumentos o con un argumento `digits`. El nombre `digits` designa un parámetro, y en la llamada se sustituye por un valor concreto, por ejemplo `(10.25).toFixed(1)`.

La tabla relaciona las partes de la referencia con los argumentos de esa llamada.

| Parte de la referencia | Qué significa | En la llamada `(10.25).toFixed(1)` |
| --- | --- | --- |
| `toFixed` | Nombre del método | Llamamos a `toFixed()` sobre el número `10.25` |
| `digits` | Cantidad de decimales | Pasamos `1` |
| Etiqueta Optional junto a `digits` | El parámetro es opcional, sin él se usa `0` | Pasamos `1` en lugar del valor por defecto |

La etiqueta Optional aparece en la sección Parameters junto al nombre del parámetro. Indica que el argumento se puede omitir. Qué pasa al omitirlo lo explica el texto bajo el nombre. En `toFixed()`, si falta `digits`, se toma como `0`, es decir, el número se redondea a entero.

La sección Return value describe el resultado. La expresión inglesa return value significa «valor devuelto». La referencia de `toFixed()` dice que el método devuelve una cadena con el número en notación de punto fijo. La firma muestra una llamada válida, y la descripción del resultado explica por qué la respuesta aparece entre comillas.

Comprobemos los dos casos en la consola interactiva de Node.js (REPL), que se inicia con el comando `node`. El signo `>` es el indicador de la consola, y después de cada llamada la consola imprime el resultado.

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
| `toFixed(fractionDigits?: number): string` | Así muestra la firma la ayuda del editor. El signo `?` marca un parámetro opcional, y tras los dos puntos aparecen los tipos del parámetro y del resultado |

La notación `toFixed([digits])` aparece en referencias antiguas. La llamada `(10.25).toFixed(1)` pasa el número `1` sin corchetes. Ni el nombre `digits` ni los corchetes se copian en la llamada.

Si el navegador traduce la página, hay que comparar los nombres de funciones y parámetros y los símbolos de la firma con el original. En el código se usan los nombres originales de la documentación. Por ejemplo, traducir `digits` como «dígitos» ayuda a entender la descripción, pero en la llamada se sigue poniendo el valor `1`.

## Trabajar con una función desconocida

La lectura de la referencia empieza por la tarea. Por ejemplo, para mostrar un precio con un decimal, en la sección Syntax buscamos la llamada con `digits`, en Parameters comprobamos qué significa ese parámetro, en Return value vemos que el resultado será una cadena y después probamos la llamada `(10.25).toFixed(1)`. Si el resultado coincide con la descripción, la llamada se puede usar en el programa.

Otra función tendrá sus propios parámetros y reglas. Con su firma decidimos qué argumentos pasar, con la descripción conocemos el resultado y las limitaciones, y con un ejemplo pequeño comprobamos lo que hemos entendido.
