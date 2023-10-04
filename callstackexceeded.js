/**
 * @function printName
 * @description prints first and last name specified number of times using recursion
 * @param {number} counter
 * @description used as a counter for number of function calls
 * @param {number} limit
 * @description limit of calls for the function
 */

export function printName(counter = 0, limit) {
  if (counter === limit) {
    return console.log(`Stop counter: ${counter}`);
  }

  counter++;

  function printFirstName() {
    console.log("John");
  }

  function printLastName() {
    console.log("Doe");
  }

  printFirstName();
  printLastName();

  printName(counter, limit);
}
