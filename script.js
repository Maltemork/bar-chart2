"use strict";
window.addEventListener("load", start);

const numArray = [];

function start() {
  startParameters();
  countFunction();
  setInterval(countFunction, 1000);
}

function startParameters() {
  for (let i = 0; i < 40; i++) {
    let number = getNumberOfCustomers();
    numArray.push(number);
  }
}

function countFunction() {
  let newQueue = getNumberOfCustomers();
  numArray.unshift(newQueue);
  if (numArray.length > 40) {
    numArray.pop();
  }
  document.querySelector("#grid-container2").innerHTML = "";
  numArray.forEach((number) => {
    insertIntoHTML(number);
  });
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function insertIntoHTML(number) {
  if (number > 27) {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              32 - number
            };background-color: red;" title="${number}">
            </div>
        `
    );
  } else if (number > 22) {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              32 - number
            };background-color: yellow;" title="${number}">
            </div>
        `
    );
  } else {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              32 - number
            }" title="${number}">
            </div>
        `
    );
  }
}
