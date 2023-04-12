"use strict";
window.addEventListener("load", start);

const numArray = [];

// hvis maxHeight ændres, skal .grid-container 2 {grid-template-rows} ændres til maxHeight-1.
// hvis maxHeight ændres, skal .grid-item {grid-row-start} ændres til maxHeight+1.
const maxHeight = 32;

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

function getNumberOfCustomers() {
  return Math.floor(Math.random() * maxHeight);
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

function insertIntoHTML(number) {
  if (number > maxHeight - 5) {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              maxHeight - number
            };background-color: red;" onmouseover="mouseOverFunction(${number})" onmouseleave="mouseLeaveFunction()">
            </div>
        `
    );
  } else if (number > maxHeight - 10) {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              maxHeight - number
            };background-color: yellow;" onmouseover="mouseOverFunction(${number})" onmouseleave="mouseLeaveFunction()">
            </div>
        `
    );
  } else {
    document.querySelector("#grid-container2").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <div class="grid-item" style="grid-row-end: ${
              maxHeight - number
            }" onmouseover="mouseOverFunction(${number})" onmouseleave="mouseLeaveFunction()">
            </div>
        `
    );
  }
}

function mouseOverFunction(number) {
  document.querySelector("#display-number").textContent = `${number}`;
}

function mouseLeaveFunction() {
  document.querySelector("#display-number").textContent = ``;
}
