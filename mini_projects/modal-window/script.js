"use strict";

const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeModal();
  }
});
