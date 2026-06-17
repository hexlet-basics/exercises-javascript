Implementa una función `sanitizePhoneNumber()` que reciba un número de teléfono de un formulario y devuelva una cadena sin espacios, paréntesis ni guiones.

Los usuarios introducen los números de diferentes maneras, pero antes de guardarlos se normalizan a un formato único. Recorre la cadena original carácter por carácter y arma un nuevo número solo con los caracteres útiles.

```javascript
sanitizePhoneNumber('+7 (999) 123-45-67'); // => '+79991234567'
sanitizePhoneNumber('8 800 555 35 35');    // => '88005553535'
sanitizePhoneNumber('(123) 456-7890');     // => '1234567890'
```

Usa la cadena vacía como valor inicial.
