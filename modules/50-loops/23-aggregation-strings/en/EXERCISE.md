Implement a function `sanitizePhoneNumber()` that takes a phone number from a form and returns a string without spaces, parentheses, and hyphens.

Users enter numbers in different ways, but before saving them they are normalized to a single format. Go through the original string character by character and assemble a new number using only the useful characters.

```javascript
sanitizePhoneNumber('+7 (999) 123-45-67'); // => '+79991234567'
sanitizePhoneNumber('8 800 555 35 35');    // => '88005553535'
sanitizePhoneNumber('(123) 456-7890');     // => '1234567890'
```

Use the empty string as the initial value.
