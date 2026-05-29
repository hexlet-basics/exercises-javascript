Что означают числа `1.25` и `6.91` в следующем коде?

```javascript
const euros = 1000;
const dollars = euros * 1.25;
const yuans = dollars * 6.91;
```

Без контекста непонятно. Такие числа называют **магическими** — они не несут смысла сами по себе.

## Как исправить

Вынести магические числа в именованные константы.

```javascript
const dollarsPerEuro = 1.25;
const yuansPerDollar = 6.91;

const euros = 1000;
const dollars = euros * dollarsPerEuro;
const yuans = dollars * yuansPerDollar;
```

Теперь код читается как текст: «перевести евро в доллары, потом в юани».

## Правило

Если число встречается в коде и его смысл не очевиден из контекста — вынесите его в константу с понятным именем.
