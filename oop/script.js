"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

const person1 = new Person("John", 1993);

console.log(person1); // Person {firstName: 'John', birthYear: 1993}
console.log(person1 instanceof Person); // true
console.log(person1.calcAge()); // 31

console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(person1)); // true

console.log(person1.hasOwnProperty("firstName")); // true
console.log(person1.hasOwnProperty("species")); // false

console.log(person1.__proto__.__proto__); // Object.prototype (top of prototype chain)
console.log(person1.__proto__.__proto__.__proto__); // null (object doesn't have prototype)

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    // methods are created on prototype
    return new Date().getFullYear() - this.birthYear;
  }
}

const person2 = new PersonCl("Peter", 1985);
console.log(person2); // PersonCl {firstName: 'Peter', birthYear: 1985}
console.log(person2.calcAge()); // 39
