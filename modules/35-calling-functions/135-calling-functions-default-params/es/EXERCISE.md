En el código se han definido datos sobre un viaje en automóvil: la distancia, el consumo de combustible, el precio del combustible y la cantidad de pasajeros.

Calcula y muestra en pantalla tres valores, cada uno en una línea aparte:

1. El volumen de combustible en litros necesario para el viaje. Redondéalo a un decimal con `toFixed(1)`.
2. El costo total del viaje. Redondéalo a dos decimales con `toFixed(2)`.
3. El costo del viaje para cada pasajero. Redondéalo a entero llamando a `toFixed()` sin argumento (el valor por defecto es 0 decimales).

```text
distance ──────┐
               ├──→ fuel ──────┐
fuelConsumption ┘              ├──→ tripCost ──────┐
                               │                   ├──→ perPerson
fuelPrice ─────────────────────┘                   │
passengers ─────────────────────────────────────────┘
```
