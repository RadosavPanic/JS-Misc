"use strict";

console.log(document.documentElement); // selecting whole document
console.log(document.head);
console.log(document.body);

// Single Element
const header = document.querySelector(".header"); // <h2 class="header">DOM Manipulation</h2>
const paragraph = document.getElementById("description"); // <p id="description">Advanced dom topics</p>

const techsList = document.querySelectorAll(".techs .item"); // NodeList(4) [li.item, li.item, li.item, li.item]
const techsCollection = document.getElementsByTagName("li"); // HTMLCollection(4) [li.item, li.item, li.item, li.item]
const techsClass = document.getElementsByClassName("item"); // HTMLCollection(4) [li.item, li.item, li.item, li.item]
const inputElements = document.getElementsByName("fname"); // NodeList [input]

console.log(header.tagName); // H2

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics.
                    <button class="btn btn--close-cookie">Got it!</button>`;

document.body.prepend(message);
// header.append(message);

const cookieBtn = document.querySelector(".btn--close-cookie");
cookieBtn.addEventListener("click", () => {
  // document.body.removeChild(message);
  message.parentElement.removeChild(message); // gets parent element and removes selected child node
  // message.remove(); // removes selected node
});
