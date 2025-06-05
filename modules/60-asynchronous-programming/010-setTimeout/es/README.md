JavaScript es de un solo subproceso, lo que significa que solo puede realizar una tarea a la vez.

Para gestionar tareas que requieren tiempo (como la espera, la obtención de datos o los temporizadores) sin congelar el programa, JavaScript utiliza funciones asíncronas.

Una herramienta asíncrona básica es setTimeout. Esta herramienta programa una función (llamada callback) para que se ejecute tras un retraso especificado (en milisegundos).

setTimeout acepta dos argumentos:
1. Una función callback: una función que se ejecuta posteriormente, que se pasa como argumento a otra función.
2. Un tiempo de retraso en milisegundos.

Ejemplo:

```js
const cb = () => {
  console.log('Hello after 1 second');
};

setTimeout(cb, 1000);
// La devolución de llamada no se llama antes de este momento (pero no necesariamente exactamente en ese momento).
// A menudo ocurre más tarde debido al bucle de eventos y a las particularidades del lenguaje.
```