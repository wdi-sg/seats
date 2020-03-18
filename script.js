console.log("hello script js");

var seatsLeft = 10;

function clearInput(){
  document.getElementById("input").value = ""
}

var inputHappened = function(currentInput){
clearInput();
if (seatsLeft > 0) {
  seatsLeft--;
  console.log(`There are ${seatsLeft} seats left.`);
    var basePrice = 50;
    var inflation;

  //Inflation for first half of seats
    if (seatsLeft > 4) {
      inflation = 1.0 + 0.03*(9-seatsLeft)
    } else if (seatsLeft >1) {
      inflation = 1.12 + 0.05*(5-seatsLeft)
    } else {
      return `You got the last ticket and the price is $91,000.`
    }
    var price = (50*inflation).toFixed(2);

    return `There are ${seatsLeft} seats left. Surcharge is at ${inflation}. Your price is $${price}.`;
} else {
  return `Seats are sold out!`;
}
};
