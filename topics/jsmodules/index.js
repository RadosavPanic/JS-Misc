// import { addToCart, totalPrice as price, totalQuantity as quantity } from "./shoppingCart.js";
// import addNumbers, {addToCart, totalPrice, totalQuantity} from './shoppingCart.js';
import * as ShoppingCart from "./shoppingCart.js";
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

ShoppingCart.addToCart("grapefruit", 3);

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data.at(-1)); // {userId: 10, id: 100, title: 'at nam consequatur ea labore ea harum', body: 'cupiditate quo est a modi nesciunt soluta\nipsa vol…nam et distinctio eum\naccusamus ratione error aut'}

  return { title: data.at(-1).title, text: data.at(-1).body };
};

/* Top-level Await */
const lastPost = await getLastPost();
console.log(lastPost);

/* Module Pattern (using IIFE and Closures) --> used before ES6 modules existed */
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} was added to the cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart("apple", 4);
ShoppingCart2.addToCart("pizza", 2);

/* Lodash */
const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); // shallow copy
const stateCloneDeep = cloneDeep(state); // deep copy from lodash

console.log(stateClone); // loggedIn: true
console.log(stateCloneDeep); // loggedIn: True

state.user.loggedIn = false;

console.log(stateClone); // loggedIn: false, creates shallow copy, so changing original state object also changes a clone (not recommended)
console.log(stateCloneDeep); // loggedIn: true, clone object has its own reference
