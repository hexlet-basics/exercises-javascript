Implement the function `calculateElectricityBill()`, which takes the number of kilowatt-hours consumed and returns the amount of the electricity bill.

A tiered tariff is in effect: the first `100` kWh cost `5` rubles each, the next `100` kWh cost `7` rubles each, and all kWh above `200` cost `10` rubles each.

Iterate over the consumption with a loop and gradually accumulate the total amount.

```javascript
calculateElectricityBill(80);  // => 400
calculateElectricityBill(150); // => 850
calculateElectricityBill(250); // => 1700
```
