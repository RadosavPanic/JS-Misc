const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (user, userLimits) => userLimits?.[user] ?? 0;

const addExpense = function (options, value, description, user = "jonas") {
  const userSelected = user.toLowerCase();
  const { state, limits } = options;

  return value <= getLimit(userSelected, limits)
    ? [...state, { value: -value, description, user: userSelected }]
    : state;
};

const checkExpenses = function (state, limits) {
  return state.map((entry) => {
    return entry.value < -getLimit(entry.user, limits)
      ? { ...entry, flag: "limit" }
      : entry;
  });
};

const newBudget1 = addExpense(
  {
    state: budget,
    limits: spendingLimits,
  },
  10,
  "Pizza 🍕"
);

const newBudget2 = addExpense(
  {
    state: newBudget1,
    limits: spendingLimits,
  },
  100,
  "Going to movies 🍿",
  "Matilda"
);

const finalBudget = checkExpenses(newBudget2, spendingLimits);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
