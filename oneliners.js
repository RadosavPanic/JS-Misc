const capitalizeSentence = (sentence) =>
  sentence.replace(sentence[0], sentence[0].toUpperCase());

const calculatePercentage = (value, total) => Math.round((value / total) * 100);

const randomChoice = (itemsArr) =>
  itemsArr[Math.floor(Math.random() * itemsArr.length)];

const removeDuplicates = (itemsArr) => [...new Set(itemsArr)];

const sortByCriteria = (itemsArr, objKey) =>
  itemsArr.sort((a, b) =>
    a[objKey] > b[objKey] ? 1 : a[objKey] < b[objKey] ? -1 : 0
  );

// Checking equality types for objects and arrays using a JSON string
const checkEqualityTypes = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Counting occurences using reduce with accumulator
const countOccurrences = (itemsArr, value) =>
  itemsArr.reduce((acc, val) => (val === value ? acc + 1 : acc), 0);

const waitTimer = async (miliseconds) =>
  new Promise((resolve) => setTimeout(resolve, miliseconds));

export {
  capitalizeSentence,
  calculatePercentage,
  randomChoice,
  removeDuplicates,
  sortByCriteria,
  checkEqualityTypes,
  countOccurrences,
  waitTimer,
};
