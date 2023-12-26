
Si un programa escrito en JavaScript tiene errores de sintaxis, el intérprete mostrará un mensaje correspondiente, así como una indicación del archivo y la línea en la que, según su opinión, se produjo el error. Un *error de sintaxis* ocurre cuando el código se ha escrito con violación de las reglas gramaticales. En los lenguajes humanos, la gramática es importante, pero generalmente se puede entender y leer el texto con errores. En la programación, todo es estricto. Cualquier error gramatical, por más mínimo que sea, y el programa ni siquiera se ejecutará. Un ejemplo puede ser un punto y coma olvidado, así como paréntesis mal colocados y otros detalles.

Aquí hay un ejemplo de código con un error de sintaxis:

```javascript
console.log('Hodor'
```

Si ejecutamos el código anterior, veremos el siguiente mensaje: `SyntaxError: missing ) after argument list`, así como una indicación de la línea y el archivo donde se produjo este error. Estos errores de sintaxis en JavaScript se clasifican como SyntaxError.

*Por razones técnicas, este código ejecutado en https://code-basics.com no mostrará la línea y el archivo. Puede verificar esta salida en https://repl.it*

https://replit.com/@hexlet/js-basics-syntax-errors

Por un lado, los errores de SyntaxError son los más simples porque están relacionados exclusivamente con las reglas gramaticales de escritura de código, no con el significado del código en sí. Son fáciles de corregir: solamente necesitas encontrar la violación de las reglas gramaticales.

Por otro lado, el intérprete no siempre puede señalar claramente estas infracciones. Por lo tanto, a veces sucede que hay que colocar el paréntesis olvidado no donde indica precisamente el mensaje de error.
