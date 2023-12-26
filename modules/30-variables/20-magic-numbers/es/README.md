
Recordemos una de las lecciones anteriores:

```javascript
let dollarsCount = 50 * 1.25; // 62.5
let rublesCount = dollarsCount * 60; // 3750

console.log(rublesCount);
```

Desde el punto de vista del desarrollo profesional, este código "huele mal". Así es como se describe el código que es difícil de entender. Y la razón es la siguiente: en este momento, al ver los números `60` y `1.25`, es probable que te preguntes: "¿qué significan estos números?". ¡Imagínate cómo será dentro de un mes! Y cómo lo entenderá un nuevo programador que no haya visto el código antes. En nuestro ejemplo, el contexto se recupera gracias a una buena nomenclatura, pero en la vida real, el código es mucho más complicado, y a menudo, es imposible adivinar el significado de los números.

Estos números que no se pueden entender sin un profundo conocimiento de lo que está sucediendo dentro de una parte específica del código se llaman Números mágicos.

La solución es simple: solamente necesitas crear variables con nombres adecuados y todo encajará en su lugar.

```javascript
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = 50 * dollarsPerEuro; // 62.5
let rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log(rublesCount);
```

Presta atención a los siguientes detalles:

* Nomenclatura en lowerCamelCase.
* Las dos nuevas variables están separadas de los cálculos posteriores por una línea en blanco. Estas variables tienen sentido incluso sin los cálculos, por lo que esta separación es apropiada y mejora la legibilidad.
* El código resultante es más largo que la versión anterior, pero eso es normal. El código debe ser legible.
