"use strict";

const renderError = function (message) {
  countriesErrorContainer.insertAdjacentText("beforeend", message);
};

const getRandomCountry = function () {
  return fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countries) => {
      const randomCountryName =
        countries[
          Math.trunc(Math.random() * countries.length) + 1
        ]?.name.common.toLowerCase();
      if (!randomCountryName) return;
      return randomCountryName;
    })
    .catch((error) => renderError(`Something went wrong: 💥 ${error.message}`));
};

const getNeighbourData = function (code) {
  return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then((country) => renderCountry(country[0], "neighbour"))
    .catch((error) => renderError(`Something went wrong: 💥 ${error.message}`));
};

const getCountryData = function () {
  getRandomCountry()
    .then((countryName) => {
      if (!countryName) return;
      return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    })
    .then((response) => response.json())
    .then((country) => {
      renderCountry(country[0]);
      return country[0].borders?.[0];
    })
    .then((neighbourCode) => {
      if (!neighbourCode) return;
      return getNeighbourData(neighbourCode);
    })
    .catch((error) => renderError(`Something went wrong: 💥 ${error.message}`));
};

btnGetCountry.addEventListener("click", function () {
  countriesContainer.style.visibility = "hidden";
  countriesContainer.style.opacity = 0;
  countriesContainer.innerHTML = "";
  countriesErrorContainer.innerHTML = "";
  getCountryData();
});

let adviceId;
let adviceText;

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (response.status === 404) errorMsg = `Advice not found`;
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getRandomAdvice = function () {
  const fetchAdvice = () => {
    getJSON(`https://api.adviceslip.com/advice`)
      .then((data) => {
        const [adviceData] = Object.values(data);
        if (adviceData.id === adviceId) {
          return fetchAdvice();
        }

        adviceId = adviceData.id;
        adviceText = adviceData.advice;
        adviceEl.textContent = "";
        adviceEl.insertAdjacentText("beforeend", adviceData.advice);
      })
      .catch((error) => console.log(error));
  };

  fetchAdvice();
};

btnGetAdvice.addEventListener("click", getRandomAdvice);

const getCountryBigData = function (countryName) {
  return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((country) => {
      renderCountry(country[0]);
      return country[0].borders?.[0];
    })
    .then((neighbourCode) => {
      if (!neighbourCode) return;
      return getNeighbourData(neighbourCode);
    })
    .catch((error) => renderError(`Something went wrong: 💥 ${error.message}`));
};

const whereAmI = function (lat, lng) {
  fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_31bc8d10857f477c82da02cf91324901`
  )
    .then((response) => {
      if (!response.ok) {
        const error = new Error(
          `Error occured (${response.status})${
            response.status === 403 ? ": Too many requests!" : ""
          }`
        );

        throw error;
      }

      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      getCountryBigData(data.countryName);
    })
    .catch((error) => console.log(`Error occured:`, error));
};

whereAmI(52.508, 13.381); // You are in Mumbai, India
whereAmI(19.037, 72.873); // You are in Cape Town, South Africa
whereAmI(-33.933, 18.474); // You are in Berlin, Germany
