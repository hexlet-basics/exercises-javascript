Существуют несколько популярных стилей написания составных имён переменных.

```text
kebab-case:      max-message-length
snake_case:      max_message_length
CamelCase:       MaxMessageLength
lowerCamelCase:  maxMessageLength
```

В JavaScript стандартом является **lowerCamelCase**: первое слово строчными буквами, каждое последующее — с заглавной.

```javascript
const firstName = 'John';
const maxLoginAttempts = 3;
const totalOrdersCount = 42;
```

## Что не работает в JavaScript

- **kebab-case** (`max-message-length`) — дефис воспринимается как минус, это будет ошибкой.
- **UPPER_SNAKE_CASE** — используется только для настоящих модульных констант (редко).

## Важно

Не включайте тип данных в имя переменной. Имя должно описывать **смысл**, а не хранение:

```javascript
// Плохо
const userNameString = 'Alice';

// Хорошо
const userName = 'Alice';
```
