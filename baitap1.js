var salaryPerDay = 100000;
var workDayInput = document.querySelector("#workDay");
var textSalary = document.getElementById("textSalary");

function payCheck() {
  console.log("yes");
  var workDay = workDayInput.value;
  var salary = salaryPerDay * workDay;
  textSalary.innerText = "Tổng lương nhận được là: " + salary + "VND";
}

// console.log({ salary });
