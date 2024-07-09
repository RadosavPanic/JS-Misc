"use strict";

const displayLocation = async function () {
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;

  const responseGeo = await fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_31bc8d10857f477c82da02cf91324901`
  );
  const dataGeo = await responseGeo.json();

  const country = dataGeo.countryName; // serbia

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const [data] = await response.json();
  console.log(data.capital); // Belgrade
};

displayLocation();
