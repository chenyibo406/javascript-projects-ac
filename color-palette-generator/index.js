var char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function ranHex() {
  var charLength = char.length;
  let i = 0;
  var ranHex = "#";
  while (i < 6) {
    var ranIndex = Math.floor(Math.random() * charLength);
    ranHex = ranHex + char[ranIndex];
    i++;
  }
  return ranHex;
}

function hexColorGen() {
  let i = 1;
  while (i <= 10) {
    var ranHexColor = ranHex();
    const colorEl = document.getElementById(`color-${i}`);
    colorEl.innerText = ranHexColor;
    colorEl.style.backgroundColor = ranHexColor;
    i++;
  }
}

var btnEl = document.getElementById("btn");
btnEl.addEventListener("click", function () {
  hexColorGen();
});
