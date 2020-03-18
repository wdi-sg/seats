console.log("hello script js");

var seatsLeft = 10;

function clearInput(){
  document.getElementById("input").value = ""
}

var inputHappened = function(currentInput){
clearInput();
if (seatsLeft > 0) {
  seatsLeft--;
  console.log(seatsLeft);
  var basePrice = 50;
  var inflation = 1.0 + 0.05*(9-seatsLeft)
  var price = basePrice*inflation;
  return price;
} else {
  return `Seats are sold out!`;
}
};
