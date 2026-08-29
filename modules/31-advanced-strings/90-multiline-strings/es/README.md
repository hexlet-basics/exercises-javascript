A veces el texto de un programa tiene que estar formado por varias líneas. Por ejemplo, al generar un correo, al crear una plantilla, al formatear un mensaje de error o simplemente al trabajar con textos largos.

Por supuesto, se puede usar el carácter de salto de línea `\n`, como hacíamos antes:

```javascript
const text = "Un ejemplo de texto,\nformado por\nvarias líneas";
```

Al imprimirla, la cadena se verá así:

```text
Un ejemplo de texto,
formado por
varias líneas
```

Pero esa forma resulta incómoda, sobre todo si la cadena es larga o si hay que añadir saltos nuevos a menudo. Cada `\n` hay que insertarlo a mano, y eso empeora la legibilidad del código.

## Las cadenas multilínea como alternativa

En JavaScript existe una forma más cómoda de escribir texto en varias líneas: las plantillas de cadena (template literals). Se escriben entre comillas invertidas `` ` ``, y todos los saltos de línea que haya dentro se conservan literalmente:

```javascript
const text = `Un ejemplo de texto,
formado por
varias líneas`;
```

Ahora en el código todo se ve igual que en la salida:

```text
Un ejemplo de texto,
formado por
varias líneas
```

Cada salto en el código fuente se convierte en un carácter `\n` dentro de la cadena.

## Cuidado con la línea vacía al final

Donde pongas la comilla invertida de cierre, ahí terminará el texto. Si la pasas a una línea nueva, ese salto también entrará en el resultado:

```javascript
const text = `Un ejemplo de texto,
formado por
varias líneas
`;

console.log("====");
console.log(text);
console.log("====");
```

La salida:

```text
====
Un ejemplo de texto,
formado por
varias líneas

====
```

Fíjate: aparece una línea vacía al final. Para evitarla, no pases la comilla de cierre a una línea nueva:

```javascript
const text = `Un ejemplo de texto,
formado por
varias líneas`;
```

## Ventajas de las cadenas multilínea

- Legibilidad del código: el texto en el código se ve casi como en la pantalla.
- Comodidad al editar: es fácil añadir, borrar y cambiar líneas.
- No hace falta escapar las comillas de dentro:

```javascript
const quote = `Aquí no hay que escapar ni las comillas 'simples' ni las "dobles"`;
```

## Interpolación dentro de una cadena multilínea

Las plantillas de cadena combinan la multilínea y la interpolación, así que dentro se pueden sustituir valores de variables mediante `${}`:

```javascript
const a = "A";
const b = "B";

const text = `${a} y ${b}
en líneas distintas`;
```

La salida:

```text
A y B
en líneas distintas
```

Esto resulta especialmente cómodo para plantillas, correos, mensajes de error y descripciones multilínea.

## Cuidado con la sangría

Las sangrías del código entran en la cadena. Si haces una sangría dentro de una plantilla de cadena, aparecerá en el texto:

```javascript
const message = `Hello
  World`; // la cadena contiene 2 espacios antes de World
```

## El ordenador y la persona perciben el código de forma distinta

JavaScript procesará igual una cadena con `\n` y una cadena multilínea: para el motor son lo mismo. Pero para la persona que lee el código, las cadenas multilínea son mucho más cómodas y claras.
