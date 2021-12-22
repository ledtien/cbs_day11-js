// var num1, num2, num3, num4, num5, total, result;

// num1 = 3;
// num2 = 50;
// num3 = 17;
// num4 = 13;
// num5 = 78;

var number1Input = document.getElementById("number1");
var number2Input = document.getElementById("number2");
var number3Input = document.getElementById("number3");
var number4Input = document.getElementById("number4");
var number5Input = document.getElementById("number5");
var textResult = document.getElementById("textResult");

function trungBinh() {
  var number1 = number1Input.value * 1;
  var number2 = number2Input.value * 1;
  var number3 = number3Input.value * 1;
  var number4 = number4Input.value * 1;
  var number5 = number5Input.value * 1;
  var total = number1 + number2 + number3 + number4 + number5;
  var result = total / 5;
  textResult.innerText = "Trung bình là: " + result;
}
