Una instrucción es una orden para que la computadora realice algo. El código en JavaScript es un conjunto de instrucciones que generalmente se separan entre sí con el símbolo `;`.

Aquí tienes un ejemplo de código con dos instrucciones.

```javascript
console.log('Mother of Dragons.');
console.log('Dracarys!');
```

Al ejecutar este código, se mostrarán en pantalla las dos frases de forma secuencial:

```text
Mother of Dragons.
Dracarys!
```

Teóricamente, las instrucciones se pueden escribir una tras otra sin saltar de línea:

```javascript
console.log('Mother of Dragons.'); console.log('Drakarys!');
```

El resultado en pantalla será el mismo, pero este tipo de código es incómodo de leer, por lo que las instrucciones se colocan una debajo de la otra.

¿Por qué es importante saber esto? Una instrucción es una unidad de ejecución. El intérprete, el programa que ejecuta el código en JavaScript, ejecuta estrictamente las instrucciones en orden. Como desarrolladores, debemos entender este orden y ser capaces de dividir mentalmente el programa en partes independientes que sean fáciles de analizar.
