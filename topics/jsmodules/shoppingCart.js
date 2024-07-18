const totalPrice = 237;
const totalQuantity = 25;
const shippingCost = 10;

const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
};

export { addToCart, totalPrice, totalQuantity };

// export default (a, b) => console.log(`${a} + ${b} = ${a + b}`);
