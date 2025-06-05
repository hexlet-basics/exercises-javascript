Implemente la función processOrder(order), que toma un objeto con parámetros de pedido y devuelve una Promesa.

El procesamiento del pedido debe realizarse con las siguientes comprobaciones:

1. Si el pedido no se paga, se devuelve una Promesa rechazada con el error "Pedido no pagado".

2. La cantidad del producto debe ser un número entre 1 y 100, ambos inclusive.
De lo contrario, se rechaza la Promesa con el error "La cantidad debe estar entre 1 y 100".

3. Si las comprobaciones son correctas, la Promesa debe ejecutarse con el objeto de pedido pasado.

Ejemplo:

```js
processOrder({ item: 'banana', amount: 10, paid: true })
.then((order) => console.log('Order processed:', order))
.catch((err) => console.error('Error:', err.message));
```