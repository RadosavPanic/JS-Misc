const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}

// Show new quote
function newQuote() {
  showLoadingSpinner();

  // Pick a random quote from quotes array
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Check if author field is blank and replace it with 'Unknown'
  !quote.author
    ? (authorText.textContent = "Unknown")
    : (authorText.textContent = quote.author);

  // Check Quote length to determine styling
  quote.text.length > 120
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");

  // Set quote, hide loader
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// Tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listener
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

newQuote();
