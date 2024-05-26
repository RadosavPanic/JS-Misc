console.log(23 === 23.0); // true
console.log(0.1 + 0.2, 0.1 + 0.05); // 0.30000000000000004, 0.15000000000000002 (bad calculation with 0.1)
console.log(0.1 + 0.2 === 0.3); // false
console.log(Number("23"), +"23"); // 23, 23 (explicit parse and implicit type coercion)

console.log(Number.parseInt("23px"), Number.parseFloat("2.5em")); // 23, 2.5

/* Number.parseInt(string, radix) */
console.log(Number.parseInt("01011px", 2)); // 11, base 2 binary format
console.log(Number.parseInt("2em", 10)); // 2, base 10 decimal format

/* Number.isNaN */
console.log(Number.isNaN(20), Number.isNaN("20")); // false, false
console.log(Number.isNaN(+"20x")); // true, can't be converted to number

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20"), Number.isFinite(+"20x")); // false, false
console.log(Number.isFinite(23 / 0)); // false, operation returns infinity

console.log(
  Number.isInteger(20),
  Number.isInteger(23.0),
  Number.isInteger(23 / 0)
); // true, true, false

console.log(Number.isSafeInteger(-150)); // true
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991, 2^53 - 1
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1200)); // false

console.log(Math.sqrt(4), 4 ** (1 / 2), 8 ** (1 / 3)); // 2 2 2
console.log(Math.max(...[5, 41, 40]), Math.min(...[2, 3, 17])); // 41, 2
console.log(Math.random()); // 0.020289058544228356
console.log(Math.trunc(2.6), Math.round(2.6)); // 2, 3
console.log(Math.ceil(4.1), Math.floor(2.7)); // 5, 2

console.log(+(2.34).toFixed(2), +(2.34).toPrecision(3)); // 2.34, 2.34
