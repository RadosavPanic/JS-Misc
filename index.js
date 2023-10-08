import { printName } from "./callstackexceeded.js";
import {
  calculatePercentage,
  capitalizeSentence,
  checkEqualityTypes,
  countOccurrences,
  insertItemAtPosition,
  pluckData,
  randomChoice,
  removeDuplicates,
  sortByCriteria,
  waitTimer,
} from "./oneliners.js";

printName(0, 4);

const airplaneName = capitalizeSentence("lufthansa");
console.log(`Airplane name: ${airplaneName}`);

const questionsCorrectPercentage = calculatePercentage(53, 162);
console.log(`Questions score: ${questionsCorrectPercentage}%`);

const fruits = [
  "Apple",
  "Orange",
  "Multivitamin",
  "Strawberry",
  "Blueberry",
  "Kiwi",
  "Watermelon",
  "Peach",
  "Lemon",
  "Fig",
];
const randomItemChosen = randomChoice(fruits);
console.log(`Random item chosen is: ${randomItemChosen}`);

const carsShuffled = ["Renault", "Toyota", "Lanchia", "Renault", "Lanchia"];
const carsList = removeDuplicates(carsShuffled);
console.log(`Car models: ${carsList}`);

const videos = [
  { position: 1, name: "How to" },
  { position: 0, name: "Intro" },
];
sortByCriteria(videos, "position");
console.log(videos);

console.log(checkEqualityTypes([1, "2"], [1, 2]));
console.log(checkEqualityTypes([1, 2], [1, 2]));

const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";

console.log(countOccurrences(pollResponses, response));

await waitTimer(3000); // Top level await
console.log("waiting done");

const users = [
  { name: "John", age: 45 },
  { name: "Jack", age: 31 },
];
const namesOfUsers = pluckData(users, "name");
console.log(namesOfUsers);

const items = insertItemAtPosition([1, 2, 4, 5], 2, "three");
console.log(items);
