Implementa una función getValidatedOrder(id) que:

1. Carga un pedido por id usando fetchOrder.
2. Valida el pedido usando validateOrder:
  - Si el pedido no se ha pagado, se debe generar el error "Order is not paid".
  - Si la cantidad no está en el rango 1-100, se debe generar el error "Quantity must be between 1 and 100".
3. Guarda el pedido usando saveOrder.
4. Devuelve el resultado de guardar.
5. Si no se encuentra el pedido, se genera el error "Order not found".

Usa una cadena de .then(), throw y .catch().