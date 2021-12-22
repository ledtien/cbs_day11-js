var chieuDaiInput = document.getElementById("chieuDai");
var chieuRongInput = document.getElementById("chieuRong");
var textRectangle = document.getElementById("textRectangle");

function dienTich() {
  var length = chieuDaiInput.value;
  var width = chieuRongInput.value;
  area = length * width;
  textRectangle.innerText = "Diện tích là: " + area + "m2";
}

function chuVi() {
  var length = chieuDaiInput.value * 1;
  var width = chieuRongInput.value * 1;
  perimeter = (length + width) * 2;
  textRectangle.innerText = "Chu vi là: " + perimeter + "m";
}
