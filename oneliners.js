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

export {
  capitalizeSentence,
  calculatePercentage,
  randomChoice,
  removeDuplicates,
  sortByCriteria,
};
