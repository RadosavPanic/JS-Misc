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

  get age() {
    return this.calcAge();
  }

  static getClassName() {
    return PersonCl.prototype.constructor.name;
  }
}

const person2 = new PersonCl("Peter", 1985);
console.log(person2); // PersonCl {firstName: 'Peter', birthYear: 1985}
console.log(person2.calcAge()); // 39

/* Getters and setters (available on object and classes) */
const account = {
  owner: "Peter",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.latest); // 50

console.log(person2.age); // 39

console.log(PersonCl.getClassName()); // static method on class

/* Object.create */
const PersonProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const person3 = Object.create(PersonProto);
person3.init("Bob", 1979);
console.log(person3.calcAge()); // 47
