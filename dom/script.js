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

// header.append(message);
document.body.prepend(message);
const msgClone = message.cloneNode(true);
document.body.append(msgClone);

const cookieBtns = document.querySelectorAll(".btn--close-cookie");
cookieBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();

    /* Individual elements removal 
    document.body.removeChild(message);
    message.parentElement.removeChild(message); // gets parent element and removes selected child node
    message.remove(); // removes selected node

    msgClone.parentElement.removeChild(msgClone);
    msgClone.remove();
    */
  })
);

const text = document.createElement("p");
text.classList.add("text-inserted");

const btnAddBefore = document.querySelector(".btn--add-before");
const btnAddAfter = document.querySelector(".btn--add-after");

btnAddBefore.addEventListener("click", () => {
  text.textContent = "DOM Text Inserted (Before)";
  header.before(text);
});
btnAddAfter.addEventListener("click", () => {
  text.textContent = "DOM Text Inserted (After)";
  header.after(text);
});

/* Styles */
message.style.backgroundColor = "#37383d";
message.style.color = "#fff";
message.children[0].style.color = "#fff";

console.log(getComputedStyle(message).height); // 63.4px

inputElements[0].style.width = `${
  Number.parseFloat(getComputedStyle(inputElements[0]).width) - 50
}px`;

const rootElement = document.documentElement;
rootElement.style.setProperty("--primary-color", "blue");

btnAddAfter.style.backgroundColor =
  getComputedStyle(rootElement).getPropertyValue("--primary-color");

inputElements[0].style.setProperty("background-color", "lightgreen");

const labelInput = document.querySelector(".label__input");

labelInput.setAttribute("made-for", "user-first-name");
console.log(labelInput.getAttribute("made-for")); // user-first-name

// data atributes (in html property has to start with data-), for example in html: data-version-number
labelInput.dataset.versionNumer = "3.0";
console.log(labelInput.dataset.versionNumer); // 3.0
