console.log("hello script js");

var basePrice = 50;
var planeSeats = 10;

var message;
var updatedPrice;

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (planeSeats === 10) {
    planeSeats = planeSeats - 1;
    updatedPrice = basePrice;
    console.log(planeSeats, basePrice);
  } else if (planeSeats < 10) {
    planeSeats = planeSeats - 1;
    updatedPrice = basePrice * 1.05;
    console.log(planeSeats, basePrice);
  }
    message = "SEAT SOLD! Your total price is: $" + updatedPrice + "\n" + "Seats left: " + planeSeats;
    return message;
};