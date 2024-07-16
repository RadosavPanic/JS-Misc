"use strict";

const displayLocation = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const responseGeo = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_31bc8d10857f477c82da02cf91324901`
    );
    if (!responseGeo.ok)
      throw new Error(`Problem getting location data (${responseGeo.status})`);

    const dataGeo = await responseGeo.json();

    const country = dataGeo.countryName; // serbia

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok)
      throw new Error(`Problem getting country data (${response.status})`);

    const [data] = await response.json();
    return `You are located in ${data.capital}, ${data.name.common}.`;
  } catch (error) {
    throw error;
  }
};

// Using IIFE to consume returned value from async function
(async function () {
  try {
    console.log(`[1] Getting location..`);
    const city = await displayLocation();
    console.log(`[2] ${city}`); // // You are located in Belgrade, Serbia.
  } catch (error) {
    console.error(`[2] Error occured: ${error.message}`);
  } finally {
    console.log(`[3] Finished getting location`);
  }
})();
