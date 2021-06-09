console.log("Running...");
let amountOfMoney = "50000";
let ipToSave = "192.168.1.1";
$.getJSON("http://www.geoplugin.net/json.gp", function (data) {
  ipToSave = data["geoplugin_request"];
});

function findMatch() {
  document.getElementById("main").style.visibility = "hidden";
  document.getElementById("findMatchBit").style.visibility = "visible";
}
function findmoney() {
  document.getElementById("main").style.visibility = "hidden";
  document.getElementById("moneyBit").style.visibility = "visible";
  document.getElementById("moneyCounter").innerHTML = "$" + amountOfMoney;
}
function backButtonmoney() {
  document.getElementById("moneyBit").style.visibility = "hidden";
  document.getElementById("main").style.visibility = "visible";
}
function backButtonMatch() {
  document.getElementById("findMatchBit").style.visibility = "hidden";
  document.getElementById("main").style.visibility = "visible";
}
function saveButton() {
  let tryToGetInt = document.getElementById("textArea1").value;
  document.getElementById("textArea1").value = "";
  let nextStep = tryToGetInt;
  if (isNaN(nextStep) == true) {
    alert("Put in a number not words");
  } else {
    amountOfMoney = tryToGetInt;
    document.getElementById("moneyCounter").innerHTML = "$" + amountOfMoney;
  }
}
