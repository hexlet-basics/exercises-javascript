
Otro uso de los bucles es la generación de cadenas. Este tipo de tarea es común en la programación web. Se reduce a una simple agregación utilizando interpolación o concatenación.

Hay una tarea muy popular entre las personas que realizan entrevistas, que es invertir una cadena. Se puede resolver de muchas formas diferentes, pero el enfoque más básico es recorrer la cadena carácter por carácter. Aquí tienes un ejemplo de cómo funciona esta función:

```javascript
reverse('Hexlet'); // telxeH
```

La idea general de la inversión es tomar los caracteres uno por uno desde el principio de la cadena y unirlos en orden inverso. Suena bastante simple. Veamos:

```javascript
const reverse = (str) => {
  let i = 0;
  // El elemento neutral para las cadenas es una cadena vacía
  let result = '';
  while (i < str.length) {
    // Unir en orden inverso
    result = `${str[i]}${result}`;
    // Lo mismo, pero con concatenación
    // result = str[i] + result;
    i = i + 1;
  }

  return result;
};

const name = 'Bran';
reverse(name); // 'narB'
// Comprobación del elemento neutral
reverse(''); // ''
```

El único aspecto posiblemente complicado de este código es comprender cómo se construye la cadena. Dado que cada carácter siguiente se adjunta a la cadena resultante desde la izquierda, al final la cadena queda invertida.
