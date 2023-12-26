
La declaración de variables es posible incluso sin especificar un valor concreto. ¿Qué se mostrará en la pantalla si se imprime?

```javascript
let name;
console.log(name); // ?
```

En la pantalla aparecerá `undefined`, un valor especial de tipo particular que significa la ausencia de valor. Undefined se utiliza activamente por JavaScript en diversas situaciones, por ejemplo, al acceder a un carácter inexistente de una cadena:

```javascript
const name = 'Arya';
console.log(name[8]);
```

https://replit.com/@hexlet/js-basics-data-types-undefined

El significado (semántica) del valor `undefined` es precisamente que no hay valor. Sin embargo, nada impide escribir este código:

```javascript
let key = undefined;
```

Y aunque el intérprete permite hacer esto, esto viola la semántica del valor `undefined`, ya que en este código se realiza una asignación, lo que significa que se está proporcionando un valor.

JavaScript es uno de los pocos lenguajes en los que el concepto de `undefined` está presente de forma explícita. En otros lenguajes, su papel lo desempeña el valor `null`, que, por cierto, también existe en JavaScript.

*Pregunta de autoevaluación. ¿Por qué no se puede declarar una constante sin especificar un valor?*

<details>
<summary>Respuesta</summary>

No se puede cambiar o redefinir una constante. Su valor debe especificarse estrictamente al definirla.

</details>
