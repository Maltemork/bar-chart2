"use strict";
window.addEventListener("load", start);

const numArray = [
  2, 3, 16, 19, 26, 13, 3, 26, 25, 17, 18, 21, 31, 4, 12, 20, 7, 14, 27, 26, 25,
  4, 21, 8, 16, 23, 29, 29, 23, 5, 29, 17, 9, 0, 18, 27, 29, 3, 14, 14, 23,
];
let num = 0;

function start() {
  numArray.forEach((number) => {
    insertIntoHTML(number);
  });
  setInterval(countFunction, 1000);
}

function countFunction() {
  let newQueue = getNumberOfCustomers();
  numArray.unshift(newQueue);
  if (numArray.length > 42) {
    numArray.pop();
  }
  console.log(numArray);
  num++;
  document.querySelector("#grid-container").innerHTML = "";
  numArray.forEach((number) => {
    insertIntoHTML(number);
  });
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function insertIntoHTML(number) {
  document.querySelector("#grid-container").insertAdjacentHTML(
    "afterbegin",
    /*html*/ `
            <div class="grid-item" style="grid-row-end: ${32 - number}">
            </div>
        `
  );
}
