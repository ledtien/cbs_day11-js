var usdVND = 23500;

var usdInput = document.getElementById("usd");
var textVND = document.getElementById("textVND");

function checkVND() {
  var usd = usdInput.value;
  var vnd = usdVND * usd;
  textVND.innerText = "Số tiền VNĐ là: " + vnd + "VND";
}

// console.log({ vnd });
