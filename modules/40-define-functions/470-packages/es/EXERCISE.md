Implementa la función `formatPrice()`. Recibe un número y devuelve su representación como cadena, redondeada a dos decimales.

Usa la función `round()` del módulo `hexlet-basics/math` — es otro módulo del mismo paquete `hexlet-basics` con el que trabajaste en la lección anterior. Escribe la importación tú mismo.

```javascript
formatPrice(12.3456); // => '12.35'
formatPrice(2.5);     // => '2.50'
formatPrice(10);      // => '10.00'
```

## Pista

* Al comienzo del archivo, importa la función: `import { round } from 'hexlet-basics/math';`
* El segundo argumento de `round()` es la cantidad de decimales
