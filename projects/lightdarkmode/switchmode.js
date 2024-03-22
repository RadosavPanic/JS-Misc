// Getting an Element by Id
const fetchElementById = (id) => document.getElementById(id);

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = fetchElementById("nav");
const toggleIcon = fetchElementById("toggle-icon");
const image1 = fetchElementById("image1");
const image2 = fetchElementById("image2");
const image3 = fetchElementById("image3");
const textBox = fetchElementById("text-box");

let isDark;

// Setting Image Source Attribute
function setImage(image, src) {
  image.src = src;
}

// Dark or Light Images
function imageMode(color) {
  setImage(image1, `img/undraw_proud_coder_${color}.svg`);
  setImage(image2, `img/undraw_feeling_proud_${color}.svg`);
  setImage(image3, `img/undraw_conceptual_idea_${color}.svg`);
}

// Switch Light/Dark styles
function toggleDarkLightMode() {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// Set dataset attribute for theme mode
function toggleDocumentThemeAttribute() {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );
}

// Setting or Modifying item in Local Storage
function toggleItemInLocalStorage() {
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    isDark = true;
    toggleDocumentThemeAttribute(isDark);
    toggleItemInLocalStorage(isDark);
    toggleDarkLightMode(isDark);
  } else {
    isDark = false;
    toggleDocumentThemeAttribute(isDark);
    toggleItemInLocalStorage(isDark);
    toggleDarkLightMode(isDark);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    isDark = true;
    toggleDarkLightMode(currentTheme);
    toggleDocumentThemeAttribute(currentTheme);
  } else {
    isDark = false;
    toggleDocumentThemeAttribute(currentTheme);
    toggleDarkLightMode(currentTheme);
  }
}
