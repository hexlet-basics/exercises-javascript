
¿Qué sucede si intentamos cambiar un carácter en una cadena de texto?

```javascript
let firstName = 'Alexander';
// El código se ejecutará sin errores
firstName[0] = 'B';
console.log(firstName); // => Alexander
```

Sorprendentemente, el valor de la variable `firstName` permanecerá igual, aunque el código se ejecute sin errores. Esto se debe a la inmutabilidad de los tipos primitivos en JavaScript: el lenguaje no proporciona ninguna forma física de cambiar una cadena de texto. La inmutabilidad de los tipos primitivos es importante por varias razones, siendo la principal la eficiencia. Pero, ¿qué hacer si realmente necesitamos cambiarla? Para eso existen las variables:

```javascript
let firstName = 'Alexander';
// El código se ejecutará sin errores
firstName = 'Blexander'
console.log(firstName); // => Blexander
```

Existe una gran diferencia entre cambiar el valor de una variable y cambiar el valor en sí. No se puede cambiar los tipos primitivos en JavaScript (pero sí se pueden cambiar los tipos compuestos; más información sobre ellos en Hexlet), aunque reemplazar el valor de una variable no presenta problemas.
