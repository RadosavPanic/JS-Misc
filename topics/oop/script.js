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

/* Inheritance - Constructor functions */
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const person4 = new Student("Mike", 1999, "Computer Science");
person4.introduce(); // My name is Mike and I study Computer Science
console.log(person4.calcAge()); // 25

console.dir(Student.prototype.constructor); // ƒ Person(firstName, birthYear) (Constructor isn't changed after linking with Object.create)
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // ƒ Student(firstName, birthYear, course) (fixed)

console.log(person4 instanceof Student); // true
console.log(person4 instanceof Person); // true

/* Coding Challenge */
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make}'s battery is charged to ${this.charge}%`);
};

const car1 = new EV("Tesla", 100, 24);
car1.accelerate(); // Tesla going at 120km/h, with a charge of 23%
car1.chargeBattery(90); // Tesla's battery is charged to 90%

/* Inheritance - ES6 Classes */
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }
}

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
    );
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make}'s battery is charged to ${this.charge}%`);
  }
}

const car2 = new EVCl("Lamborghini", 140, 56);
car2.accelerate(); // Lamborghini going at 160km/h, with a charge of 55%
car2.brake(); // Lamborghini going at 155km/h
car2.accelerate(); // Lamborghini going at 175km/h, with a charge of 54%
car2.chargeBattery(75); // Lamborghini's battery is charged to 75%

/* Inheritance - Object.create */
const CarProto = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  },

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
  },
};

const EVProto = Object.create(CarProto);
EVProto.init = function (make, speed, charge) {
  CarProto.init.call(this, make, speed);
  this.charge = charge;
};

EVProto.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

EVProto.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make}'s battery is charged to ${this.charge}%`);
};

const car3 = Object.create(EVProto);

car3.init("Peugeot", 90, 20);
car3.accelerate(); // Peugeot going at 110km/h, with a charge of 19%
car3.brake(); // Peugeot going at 105km/h
car3.accelerate(); // Peugeot going at 125km/h, with a charge of 18%
car3.chargeBattery(88); // Peugeot's battery is charged to 88%
car3.accelerate(); // Peugeot going at 145km/h, with a charge of 87%

class Account {
  // can do protected properties (_owner, _currency), as a convention, but still accessible
  static className = "Account";

  #owner;
  #currency;
  #pin;
  #movements = [];
  #locale = navigator.language;

  constructor(owner, currency, pin) {
    this.#owner = owner;
    this.#currency = currency;
    this.#pin = pin;
  }

  getMovements() {
    return this.#movements;
  }

  getOwnerName() {
    return this.#owner;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  #approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account("Peter", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1.getMovements()); // [250, -140]

// Chaining methods by returning 'this' keyword in each of methods
acc1.deposit(300).withdraw(125).requestLoan(15200).withdraw(4000);
console.log(acc1.getMovements()); // [250, -140, 300, -125, 15200, -4000]

console.log(Account.className); // Account
