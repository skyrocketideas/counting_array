"use strict";
window.addEventListener("DOMContentLoaded", init);

let counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = counter;

function init() {
  if (counter.length > 1) {
    counter.pop();
  }
  console.log(counter);
  setTimeout(init, 800);
}
