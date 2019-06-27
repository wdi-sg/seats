//Price of empty seat (number)
var emptySeatPrice = 50;
console.log(emptySeatPrice + " " + typeof emptySeatPrice);

// Price of sold seat (number) - part 1
var soldSeatPrice = 1.05 * emptySeatPrice;

// No of seats left (number)
    var seatsLeft = 0;
    console.log(seatsLeft + " " + typeof seatsLeft);


var inputHappened = function(currentInput){
    console.log(currentInput + "hi")
  if (currentInput === "b" && seatsLeft <= 10) {
    display ("Purchase tix at $" + soldSeatPrice);
    seatsLeft = seatsLeft + 1;
    console.log(seatsLeft)
  }
  else {
    display ("purchase cancelled");
  }
};