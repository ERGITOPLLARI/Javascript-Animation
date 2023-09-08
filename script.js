const appDiv = document.getElementById("app");
const h1 = document.getElementById("clickedTitle");
const h2 = document.getElementById("hoveredTitle");

let count1 = 0;
appDiv.onclick = function click() {
  count1 = count1 + 1;
  h1.innerText = "Clicked times:" + count1;
};
let count2 = 0;
appDiv.onmouseover = function hover() {
  count2 = count2 + 1;
  h2.innerText = "Hovered times:" + count2;
};
