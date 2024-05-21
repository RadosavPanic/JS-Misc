const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* arr.slice(?start, ?end):number[] */
console.log(movements.slice(2)); // [-400, 3000, -650, -130, 70, 1300]
console.log(movements.slice(0, 4)); // [200, 450, -400, 3000]
console.log(movements.slice(-2)); // [70, 1300]
console.log(movements.slice(1, -1)); // [450, -400, 3000, -650, -130, 70]
console.log(movements.slice(), [...movements]); // [200, 450, -400, 3000, -650, -130, 70, 1300]

/* arr.splice(start, ?deleteCount, ?replacementElements):number[] --> mutates original array */
// movements.splice(0, 2); // [-400, 3000, -650, -130, 70, 1300]
// movements.splice(-1); // [200, 450, -400, 3000, -650, -130, 70]\

/* reverse():number --> mutates original array */
// movements.reverse(); // [1300, 70, -130, -650, 3000, -400, 450, 200]
console.log(movements.toReversed()); // -||-

/* arr1.concat(arr2) */
console.log(movements.concat([1500, 250, 400])); // [200, 450, -400, 3000, -650, -130, 70, 1300, 1500, 250, 400]
console.log([...movements, ...[1500, 250, 400]]); // -||-

/* arr.join(separator): string */
console.log(movements.join("/")); // 200/450/-400/3000/-650/-130/70/1300

/* arr.at(position) -->  */
console.log(movements.at(5)); // -130
console.log(movements[5]); // -130
console.log(
  movements.at(-1),
  movements.slice(-1)[0],
  movements[movements.length - 1]
); // 1300

/* arr.push(...items):number */
movements.push(12); // [200, 450, -400, 3000, -650, -130, 70, 1300, 12]

/* arr.pop():number */
movements.pop(); // [200, 450, -400, 3000, -650, -130, 70, 1300]

/* movements.unshift(...items):number */
movements.unshift(15); // [15, 200, 450, -400, 3000, -650, -130, 70, 1300]

/* movements.shift():number */
movements.shift(); // [200, 450, -400, 3000, -650, -130, 70, 1300]

/* arr.includes(searchElement, ?fromIndex):boolean */
console.log(movements.includes(-400)); // true
console.log(movements.includes(450, 3)); // false
console.log(movements.includes(3000, 2)); // true

/* arr.lastIndexOf(searchElement, ?fromIndex):number */
console.log(movements.indexOf(3000)); // 3
console.log([250, 10, 15, 400, 700, 250].lastIndexOf(250)); // 5

/* arr.forEach((value, index, array) => void, ?thisArg):void */
console.time("For of loop");
for (const [i, movement] of movements.entries()) {
  movement > 0
    ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
    : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}
/* Movement 1: You deposited 200
   Movement 2: You deposited 450
   Movement 3: You withdrew 400
   Movement 4: You deposited 3000
   Movement 5: You withdrew 650
   Movement 6: You withdrew 130
   Movement 7: You deposited 70
   Movement 8: You deposited 1300 */
console.timeEnd("For of loop"); // For of loop: 0.304931640625 ms

function checkMovements(movement, index) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.time("forEach loop");
movements.forEach(checkMovements);
console.timeEnd("forEach loop"); // forEach loop: 0.3310546875 ms

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

/* map.forEach((value, key, map)) */
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});
/* USD: United States Dollar
   EUR: Euro
   GBP: Pound sterling */

/* set.forEach((value, value, set)) --> no indexes/keys, only values */
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach((value, _, map) => {
  console.log(`Currency: ${value}`);
});
/* Currency: USD
   Currency: GBP
   Currency: EUR */