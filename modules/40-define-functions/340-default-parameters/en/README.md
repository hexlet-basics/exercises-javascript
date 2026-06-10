
In programming, many functions and methods have parameters that rarely change. In such cases, these parameters are given default values that can be changed as needed. This reduces the number of duplicates in your code. An example:

```javascript
// Exponentiation function.
// The second parameter is 2 by default
const pow = (x, base = 2) => {
  return x ** base;
};
// 3 to the second power (two is set by default)
pow(3); // 9
// three to the third power
pow(3, 3); // 27
```

The default value looks like a normal assignment within the definition. It only works if the parameter is not passed. This is something you should get used to. There can even be a default value when there is only one parameter:

```javascript
const print = (text = 'nothing') => console.log(text);

print(); // "nothing"
print("Hexlet"); // "Hexlet"
```

There can be any number of default parameters:

```javascript
const f = (a = 5, b = 10, c = 100) => { ... }
```

The default values have one limitation. They should be at the very end of the parameter list. From the point of view of syntax, it's impossible to create a function that will have a mandatory parameter after an optional one:

```javascript
// Such code will terminate with an error
const f = (a = 5, b = 10, c = 100, x) => { ... }
// As well as this one
const f = (a = 5, x, b = 10, c = 100) => { ... }

// But this one will work
const f = (x, a = 5, b = 10, c = 100) => { ... }

// This one will work too
const f = (x, y, a = 5, b = 10, c = 100) => { ... }
```
