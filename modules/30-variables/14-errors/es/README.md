
El orden de las instrucciones en el código con variables es de gran importancia. La variable debe ser definida antes de ser utilizada. A continuación, se muestra un ejemplo de error que los principiantes cometen con frecuencia:

```javascript
// Uncaught ReferenceError: greeting is not defined
console.log(greeting);
let greeting = 'Father!';
```

La ejecución del programa del ejemplo anterior termina con el error *ReferenceError: greeting is not defined*. *ReferenceError* es un error de referencia, lo cual significa que se está utilizando un nombre (también conocido como identificador) en el código que no está definido. Además, el propio error lo indica claramente: *greeting is not defined*, que se traduce como *greeting no está definido*. Además del orden incorrecto de la definición, en JavaScript también se cometen errores tipográficos tanto al utilizar una variable como al declararla.

La cantidad de este tipo de errores se reduce al utilizar un editor correctamente configurado. Dicho editor resalta los nombres que se utilizan sin ser declarados y advierte sobre posibles problemas.

Otro error común es intentar declarar una variable que ya ha sido declarada:

```javascript
let greeting = 'Father!';
let greeting = 'Father!';
```

Esto no se puede hacer. Tendrás que crear una nueva variable.
