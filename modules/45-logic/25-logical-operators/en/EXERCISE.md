
Write a function, `isLeapYear()`, to determine whether a year is a leap year or not. A leap year is a multiple of 400 (i.e. divisible without a remainder), or it is both a multiple of 4 and not a multiple of 100. As you can see, the definition already contains all the required logic, all we need to do is to put it into code:

```javascript
isLeapYear(2018); // false
isLeapYear(2017); // false
isLeapYear(2016); // true
```

You can test multiplicity as follows:

```javascript
// % - returns the remainder after dividing the left operand by the right one
// Check if number is a multiple of 10
number % 10 === 0

// Check if number is not a multiple of 10
number % 10 !== 0
```
