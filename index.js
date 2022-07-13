"use strict";

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const input = [firstName, lastName, email, password];

// prevent type one input then rest of the input has invalid class
let isValidationOn = false;

const resetElement = (element) => {
  const currentElement = element;
  const errorIcon = currentElement.nextElementSibling;
  const errorMessage = currentElement.parentElement.nextElementSibling;

  element.classList.remove("invalid");
  errorIcon.classList.add("hidden");
  errorMessage.classList.add("hidden");
};

const invalidateElement = (element) => {
  const currentElement = element;
  const errorIcon = currentElement.nextElementSibling;
  const errorMessage = currentElement.parentElement.nextElementSibling;

  currentElement.classList.add("invalid");
  errorIcon.classList.remove("hidden");
  errorMessage.classList.remove("hidden");
};

const validateInputs = () => {
  if (!isValidationOn) return;
  input.forEach(resetElement);

  if (!firstName.value) {
    invalidateElement(firstName);
  }
  if (!lastName.value) {
    invalidateElement(lastName);
  }
  if (!email.value.match(regexEmail)) {
    invalidateElement(email);
  }
  if (!password.value) {
    invalidateElement(password);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
});

// by using forEach then we don't need to reiterate the function by ourself
input.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});

/*
// for example, when user types in the input it run the validateInputs and remove inavlid class
firstName.addEventListener("input", () => {
  validateInputs();
});
*/
