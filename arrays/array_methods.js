const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

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

/* arr.indexOf(searchElement, ?fromIndex):number */
console.log(movements.indexOf(3000)); // 3
console.log([250, 10, 15, 400, 700, 250].lastIndexOf(250)); // 5
