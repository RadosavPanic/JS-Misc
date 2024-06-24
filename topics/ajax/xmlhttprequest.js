"use strict";

const countriesContainer = document.querySelector(".countries");
const countriesErrorContainer = document.querySelector(".error");
const adviceEl = document.querySelector(".advice-text");

const btnGetCountry = document.querySelector(".btn-country");
const btnClearCountriesContainer = document.querySelector(".btn-clear");
const btnGetAdvice = document.querySelector(".btn-advice");

// XMLHttpRequest, Callback Hell
const renderCountry = function (country, className = "") {
  if (!country) return;
  let population;

  if (+country.population / 1000000 > 1) {
    population = (+country.population / 1_000_000).toFixed(1) + " milion";
  }
  if (+country.population / 1000000 < 1) {
    population = (+country.population / 1_000).toFixed(1) + " thousand";
  }
  if (+country.population / 1000 < 1) {
    population = +country.population;
  }
  if (+country.population / 1000000 > 1000) {
    population = `${(+country.population / 1_000_000_000).toFixed(1)} bilion`;
  }

  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${country.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${country.name.common}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${population} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(country.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(country.currencies)[0].name
            }</p>
        </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  setTimeout(() => {
    countriesContainer.style.visibility = "visible";
    countriesContainer.style.opacity = 1;
  }, 2000);
};

const getCountryDataAndNeighbour = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  request.addEventListener("load", function () {
    const [country] = JSON.parse(this.responseText);
    renderCountry(country);

    const neighbour = country.borders?.[0];
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      renderCountry(JSON.parse(this.responseText)[0], "neighbour");
    });
  });
};
