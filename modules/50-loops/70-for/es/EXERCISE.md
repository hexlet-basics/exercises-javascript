
Samwell descubrió que sus mensajes estaban siendo interceptados y leídos en la fortaleza "Gemelos", por lo que sus ataques dejaron de ser sorpresivos. Después de pensar un poco, desarrolló un programa que cifra los mensajes transmitidos utilizando el siguiente algoritmo. El programa recibe una cadena como entrada y cambia de lugar cada par de caracteres consecutivos. Si la longitud de la cadena es impar, el último carácter permanece en su lugar.

```javascript
encrypt('move'); // omev
encrypt('attack'); // taatkc
// Si la longitud de la cadena es impar,
// el último carácter permanece en su lugar
encrypt('go!'); // og!
```

Implementa la función `encrypt()`, que recibe el mensaje original como entrada y devuelve el mensaje cifrado.

Piensa. ¿Puede esta función descifrar un mensaje cifrado?
