"use strict";

const getRandomCountry = function () {
  return fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countries) => {
      const randomCountryName =
        countries[Math.trunc(Math.random() * countries.length) + 1]?.name
          .common;
      if (!randomCountryName) return;
      return randomCountryName;
    });
};

const getNeighbourData = function (code) {
  return fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then((response) => response.json())
    .then((country) => renderCountry(country[0], "neighbour"));
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
    });
};

btnGetCountry.addEventListener("click", getCountryData);
btnClearCountriesContainer.addEventListener(
  "click",
  () => (countriesContainer.innerHTML = "")
);
