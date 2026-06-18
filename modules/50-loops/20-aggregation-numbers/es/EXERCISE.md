Implementa la función `calculateElectricityBill()`, que recibe la cantidad de kilovatios-hora consumidos y devuelve el importe de la factura de electricidad.

Se aplica una tarifa escalonada: los primeros `100` kWh cuestan `5` rublos cada uno, los siguientes `100` kWh cuestan `7` rublos cada uno, y todos los kWh por encima de `200` cuestan `10` rublos cada uno.

Recorre el consumo con un bucle y acumula gradualmente el importe total.

```javascript
calculateElectricityBill(80);  // => 400
calculateElectricityBill(150); // => 850
calculateElectricityBill(250); // => 1700
```
