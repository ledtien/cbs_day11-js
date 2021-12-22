var number, unit, ten, result;

var randomNumberInput = document.getElementById("randomNumber");
var textRandomNumber = document.getElementById("textRandomNumber");

function totalNumber() {
  var randomNumber = randomNumberInput.value * 1;

  var ten = Math.floor(randomNumber / 10);

  var unit = randomNumber % 10;

  var result = ten + unit;

  textRandomNumber.innerText = "Tổng là: " + result;
}
