La palabra misma "variable" sugiere que su valor puede cambiar. Esta es una de las principales razones por las que existen las variables.

Aquí tienes un ejemplo sencillo:

```javascript
// greeting significa un saludo
let greeting = 'Father!';
console.log(greeting); // => Father!

greeting = 'Mother!';
console.log(greeting); // => Mother!
```

Aquí primero guardamos una cadena (_Father!_) en la variable, y luego otra (_Mother!_). El nombre de la variable no cambió, pero el valor dentro de ella se volvió diferente.

```text
Antes:   greeting ──→ 'Father!'
                       ╳
Después: greeting ──→ 'Mother!'
```

Ten en cuenta: la palabra clave `let` se escribe solo en la **primera** declaración de una variable. Al reasignarla, `let` ya no es necesaria — la variable ya existe, y solo estamos cambiando su valor.

## ¿Por qué cambiar un valor?

En los programas reales, las variables cambian todo el tiempo. Aquí tienes algunas razones:

- El programa reacciona a las acciones del usuario. Por ejemplo, mientras introduces datos en un formulario de un sitio web, las variables que contienen estos datos se actualizan constantemente en ese momento.
- Resultados intermedios. A menudo los datos pasan por una serie de transformaciones, y en cada etapa una variable se actualiza con un nuevo valor. Existe incluso un mecanismo similar en las calculadoras, cuando los valores intermedios se guardan con las teclas `m+` o `m-`.
- Almacenamiento del estado. Si estás escribiendo un juego, entonces la posición del personaje, su salud, la puntuación y el nivel actual son variables que cambian constantemente.

## const no cambia

No toda variable se puede reasignar. Si una variable se declara con `const`, su valor no se puede cambiar:

```javascript
const greeting = 'Father!';
greeting = 'Mother!'; // TypeError: Assignment to constant variable.
```

Por eso, para los valores que van a cambiar se usa `let`, y para los constantes, `const`. Así funciona la mayoría de los lenguajes de programación modernos: un valor que no debe cambiar se marca por separado.

## Por qué esto es importante

Las variables son una forma flexible de almacenar datos que pueden cambiar durante la ejecución del programa. Gracias a esto, puedes escribir programas que se comportan de manera diferente según las condiciones, las acciones del usuario o los resultados de los cálculos.

Pero la flexibilidad tiene su lado negativo. A veces es difícil saber de inmediato qué se almacena exactamente en una variable en un momento u otro. El desarrollador tiene que rastrear dónde y cómo cambió, especialmente si el código es largo.

Esto es exactamente lo que se hace durante la depuración: intentar averiguar por qué el programa funciona de manera diferente a la prevista. Se comprueban los valores de las variables, se rastrea el orden de ejecución del código y se busca dónde algo salió mal.
