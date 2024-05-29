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

/* Numeric Separators */
const diameter = 287_460_000_000;
console.log(diameter); // 287460000000
const price = 345_99;
const transferFee1 = 15_00;
const transferFee2 = 1_500;

/* BigInt */
const num = BigInt(31_000_000); // 31000000n

console.log(30n > 12); // true
console.log(30n + " is a really huge number"); // 30 is a really huge number

console.log(30n === 30); // false
console.log(typeof 30n, typeof 30); // bigint, number
// console.log(30n + 20); // error, cannot mix bigint with other types
// console.log(Math.sqrt(4n)); // error, cannot convert bigint value to a number

console.log(10n / 3n); // 3n, decimal part gets cut off
console.log(10 / 3); // 3.333

/* Dates */
console.log(new Date()); // Mon May 27 2024 19:56:46 GMT+0200 (Central European Summer Time)
console.log(new Date("May 20 2024 10:35:30")); // Mon May 20 2024 10:35:30 GMT+0200 (Central European Summer Time)

console.log(new Date().toISOString()); // 2024-05-27T17:59:40.216Z
console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// timestamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 01:00:00 GMT+0100 (Central European Standard Time)

const date1 = new Date(2037, 10, 19, 15, 23); // Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)
console.log(date1.getFullYear(), date1.getMonth(), date1.getDate()); // 2037 10 19
console.log(date1.getDay()); // 4
console.log(date1.getHours(), date1.getMinutes(), date1.getSeconds()); // 15 23 0

console.log(date1.toISOString()); // 2037-11-19T14:23:00.000Z

console.log(`Timestamp since Jan 01 1970:`, date1.getTime()); // 2142253380000
console.log(`Getting right now timestamp without new keyword:`, Date.now()); // 1717006640874

date1.setFullYear(2024);
