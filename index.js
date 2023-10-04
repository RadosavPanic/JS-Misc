import { printName } from "./callstackexceeded.js";
import {
  calculatePercentage,
  capitalizeSentence,
  randomChoice,
  removeDuplicates,
  sortByCriteria,
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
