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

/* Running Promises in Parallel */
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital[0])); // Resolves Promise when all are resolved, or rejects if any of them is rejected
  } catch (error) {
    console.error(error);
  }
};

get3Countries(`portugal`, `canada`, `tanzania`); // ['Lisbon', 'Ottawa', 'Dodoma']

/* Promise.race */
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);

  console.log(res[0]); // mexico (this time it took the least ms to fetch, next time it can be different)
})();

/* Timeout for Promise taking too long */
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

(async function () {
  try {
    const res = await Promise.race([
      getJSON(`https://restcountries.com/v3.1/name/serbia`),
      timeout(1),
    ]);

    console.log(res[0]); // first settled Promise returned (no matter if it's resolved/rejected)
  } catch (err) {
    console.error(err);
  }
})();

/* Promise.allSettled */
(async function () {
  try {
    const res = await Promise.allSettled([
      Promise.resolve("[Promise.allSettled]: Resolved 1"),
      Promise.reject("[Promise.allSettled]: Rejected 1"),
      Promise.resolve("[Promise.allSettled]: Resolved 2"),
    ]);

    console.log(res); // Array of Promises returned when all are settled (no matter if they're resolved/rejected)
  } catch (error) {
    console.error(error);
  }
})();

/* Promise.any */
(async function () {
  try {
    const res = await Promise.any([
      Promise.reject("[Promise.any]: Rejected 1"),
      Promise.reject("[Promise.any]: Rejected 2"),
      Promise.resolve("[Promise.any]: Resolved 1"),
    ]);

    console.log(res); // First resolved (fulfilled) Promise returned
  } catch (error) {
    console.error(error);
  }
})();

const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    img.style.display = "none";
    await wait(1);

    img = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    img.style.display = "none";
    await wait(1);

    img = await createImage("img/img-3.jpg");
    console.log("Image 3 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.error(error);
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
