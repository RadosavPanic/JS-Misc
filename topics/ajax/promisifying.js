"use strict";

const imgContainer = document.querySelector(".image-container");

const lotteryPromise = () => {
  return new Promise(function (resolve, reject) {
    console.log(`Lottery draw is happening 🎰`);

    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve(`You win 💰`);
      } else {
        reject(new Error(`You lost your money 💥`));
      }
    }, 2000);
  });
};

lotteryPromise()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

wait(2)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 seconds passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 seconds passed`);
    return wait(1);
  })
  .then(() => console.log(`4 seconds passed`));

Promise.resolve(`A resolved value`).then((res) => console.log(res));
Promise.reject(new Error(`A rejected value`)).catch((err) =>
  console.error(err)
);

// Promisifying geolocation
const getPosition = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

getPosition()
  .then((position) => {
    const { latitude: lat, longitude: lng } = position.coords;

    return fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_31bc8d10857f477c82da02cf91324901`
    );
  })
  .then((response) => response.json())
  .then((data) =>
    console.log(`You are located in ${data.city}, ${data.countryName}.`)
  )
  .catch((err) => console.error(err)); // You are located in Obrenovac, Serbia.

// Promisifying image loading
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log(`Image 1 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log(`Image 2 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log(`Image 3 loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
