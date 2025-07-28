Async y await son una forma moderna de trabajar con código asincrónico en JavaScript, lo que lo hace parecer síncrono y facilita su lectura y mantenimiento.

- La palabra clave async se coloca antes de la declaración de la función. Esto convierte la función en asincrónica: siempre devuelve una promesa.
- Dentro de una función asíncrona, se puede usar el operador await, que pausa la lectura y la ejecución de nuevas instrucciones hasta que la promesa se cumpla donde se espera el resultado, si la lectura ya ha llegado al punto de usar el resultado de la promesa.
- Gracias a await, se puede escribir código asincrónico que se asemeja al código secuencial normal, sin devoluciones de llamadas anidadas ni cadenas .then().

```js
Anteriormente, el código asincrónico solía verse así:
loadConfig()
  .then(config => {
    return connectToDB(config)
      .then(db => {
        return runQuery(db);
      });
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error('Error:', err);
  });
Si hay muchas operaciones de este tipo, el código se anida y se vuelve difícil de leer; esto se conoce como la escalera del infierno.

Lo mismo con async/await parece más sencillo:
async function runApp() {
  try {
    const config = await loadConfig();
    const db = await connectToDB(config);
    const result = await runQuery(db);
    console.log(result);
  } catch (err) {
    console.error('Error:', err);
  }
}

Este código es más fácil de leer porque parece código síncrono normal.
La gestión de errores también es más sencilla: basta con un try/catch normal.
```