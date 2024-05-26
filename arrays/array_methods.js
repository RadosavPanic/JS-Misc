const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* arr.slice(?start, ?end):number[] */
console.log(movements.slice(2)); // [-400, 3000, -650, -130, 70, 1300]
console.log(movements.slice(0, 4)); // [200, 450, -400, 3000]
console.log(movements.slice(-2)); // [70, 1300]
console.log(movements.slice(1, -1)); // [450, -400, 3000, -650, -130, 70]
console.log(movements.slice(), [...movements]); // [200, 450, -400, 3000, -650, -130, 70, 1300]

/* arr.splice(start, ?deleteCount, ?replacementElements):number[] --> mutates original array */
// movements.splice(0, 2); // [-400, 3000, -650, -130, 70, 1300]
// movements.splice(-1); // [200, 450, -400, 3000, -650, -130, 70]
console.log(movements.toSpliced(-1)); // -||-, doesn't mutate original array (new method)

/* reverse():number --> mutates original array */
// movements.reverse(); // [1300, 70, -130, -650, 3000, -400, 450, 200]
console.log(movements.toReversed()); // -||-, doesn't mutate original array (new method)

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

const deposits = movements.filter((mov) => mov > 0);
const withdrawals = movements.filter((mov) => mov < 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(deposits); // [200, 450, 3000, 70, 1300]
console.log(withdrawals); // [-400, -650, -130]
console.log(balance); // 3840

const maximumValue = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(maximumValue); // 3000

const minimumValue = movements.reduce((acc, mov) => {
  if (acc < mov) return acc;
  else return mov;
}, movements[0]);
console.log(minimumValue); // -650

function calculateAverageHumanAge(dogAges) {
  const humanAgeArray = dogAges
    .map((age) => {
      const humanAge = age <= 2 ? age * 2 : 16 + age * 4;
      return humanAge;
    })
    .filter((ageAdult) => ageAdult > 18);

  const avgHumanAge = humanAgeArray.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  console.log(avgHumanAge);
}

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

calculateAverageHumanAge(testData1);
calculateAverageHumanAge(testData2);

const calculateAverageHumanAgeArrow = (dogAges) =>
  dogAges
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((ageAdult) => ageAdult > 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calculateAverageHumanAgeArrow(testData1));
console.log(calculateAverageHumanAgeArrow(testData2));

/* arr.find(callbackfn => ) */
console.log(movements.find((mov) => mov < 0)); // -400

/* arr.some((value, index, array) => void, ?thisArg):boolean --> returns true if any condition is true (like OR logic operator) */
console.log(movements.some((mov) => mov > 0)); // true
console.log(movements.some((mov) => mov === 5000)); // false

/* arr.every((value, index, array) => void, ?thisArg):boolean --> returns true if all conditions are true (like AND logic operator)*/
console.log(movements.every((mov) => mov > 0)); // false
console.log(movements.every((mov) => typeof mov === "number")); // true

/* arr.flat(?depth: 1):number[] */
const arrForFlatting = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeepFlatting = [[15, 52, [10, 14]], [25, [46, 50]], 9, 92];

console.log(arrForFlatting.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeepFlatting.flat()); // [15, 52, [10, 14], 25, [46, 50], 9, 92] (flattens only 1 layer)
console.log(arrDeepFlatting.flat(2)); // [15, 52, 10, 14, 25, 46, 50, 9, 92]
console.log(
  arrDeepFlatting
    .flat(2)
    .map((num) => num * 2 + 10)
    .reduce((acc, num) => acc + num, 0)
); // 716

const acc1 = {
  owner: "John Doe",
  movements: [500, 300, -100, 1000, 1300, -800],
};

const acc2 = {
  owner: "Dan Peterson",
  movements: [1500, -1000, 200, -50, 400],
};

const accs = [acc1, acc2];

/* arr.flatMap(callbackfn) --> executes arr.map then arr.flat(1) (common pattern)*/
const overallBalance = accs
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance); // 3250

/* arr.sort(?compareFn: (a,b) => void):string[]|number[] --> sort is based on strings (alphabetically ordered A-Z)*/
console.log(["John", "Zach", "Bob", "Maria"].sort()); // ['Bob', 'John', 'Maria', 'Zach']

/* return < 0, A-B (keep order ASC - ASCENDING) */
console.log(movements.toSorted((a, b) => a - b)); // [-650, -400, -130, 70, 200, 450, 1300, 3000]
console.log(
  movements.toSorted((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
  })
); // [-650, -400, -130, 70, 200, 450, 1300, 3000] -->

/* return > 0, B-A (switch order) DESC - DESCENDING */
console.log(movements.toSorted((a, b) => b - a)); // [3000, 1300, 450, 200, 70, -130, -400, -650]
console.log(
  movements.toSorted((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
  })
); // [3000, 1300, 450, 200, 70, -130, -400, -650]

/* Creating and Filling Arrays */
console.log([1, 2, 3, 4]);
console.log(new Array(1, 2, 3, 4));

/* Empty arrays, method: arr.fill(value, ?start, ?end): */
const empty1 = new Array(7);
console.log(empty1); // [empty × 7]

console.log(empty1.fill(1, 3, 5)); // [empty × 3, 1, 1, empty × 2]
console.log(empty1.fill(1)); // [1, 1, 1, 1, 1, 1, 1]
console.log(empty1.fill(23, 2, 6)); // [1, 1, 23, 23, 23, 23, 1]

/* Array.from(iterable, mapfn: (value, index) => any, ?thisArg) */
console.log(Array.from({ length: 7 }, () => 1)); // [1, 1, 1, 1, 1, 1, 1]
console.log(Array.from({ length: 7 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5, 6, 7]

console.log(
  Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6) + 1)
); // 100 random dice rolls

/* 
[6, 4, 1, 2, 4, 4, 4, 4, 5, 2, 5, 4, 3, 5, 6, 3, 
4, 5, 5, 3, 2, 2, 2, 5, 5, 5, 6, 4, 5, 1, 3, 4, 4, 
1, 2, 2, 3, 6, 1, 6, 2, 3, 3, 6, 3, 4, 6, 5, 3, 4, 
6, 3, 5, 2, 2, 2, 3, 3, 4, 1, 6, 5, 3, 2, 3, 6, 3, 
3, 6, 5, 5, 4, 5, 5, 3, 4, 1, 3, 6, 2, 4, 2, 5, 5, 
5, 6, 6, 4, 3, 2, 5, 2, 2, 4, 3, 1, 3, 2, 2, 5]
*/

const movs = document.querySelectorAll(".movements__value");
console.log(movs); // NodeList(4) [div.movements__value, div.movements__value, div.movements__value, div.movements__value]

const movsUI = Array.from(movs);
console.log(movsUI); // (4) [div.movements__value, div.movements__value, div.movements__value, div.movements__value]

console.log(
  movsUI.map((el) => Number(el.textContent.replace("€", "").trimEnd()))
); // [2000, 400, -350, 720]

/* arr.with(index, value) --> returns a new array with replace value at index */
const arrToReplace = [1, 2, 3, 4, 5, 6];
console.log(arrToReplace.with(2, 87)); // [1, 2, 87, 4, 5, 6]

/* exercises */
// movements: [200, 450, -400, 3000, -650, -130, 70, 1300]
const sums = movements.reduce(
  (acc, cur) => {
    // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
    acc[cur > 0 ? "deposits" : "withdrawals"] += cur;
    return acc;
  },
  { deposits: 0, withdrawals: 0 }
);
console.log(sums); // {deposits: 5020, withdrawals: -1180}

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach(
  (dog) => (dog.recFood = Number(dog.weight ** 0.75 * 28).toPrecision(3))
);

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

console.log(dogs.some((dog) => dog.curFood === dog.recFood)); // false

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay)); // true

console.log(dogs.filter(checkEatingOkay)); // {weight: 32, curFood: 340, owners: ['Michael'], recFood: '377'}

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
const dogsSortedNew = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogsSorted); // 133, 192, 284, 377
console.log(dogsSortedNew); // 133, 192, 284, 377
