console.log("hello script js");

var basePrice = 50;
var planeSeats = 10;

var message;
var updatedPrice;

var inputHappened = function(currentInput){
  console.log( currentInput );

// calculating prices of plane tickets and counting down from 10
      if (planeSeats === 10) {
        updatedPrice = basePrice;
        planeSeats--;
        console.log(updatedPrice,planeSeats);
      } else if (planeSeats >= 6) {
        updatedPrice = basePrice * 1.03;
        planeSeats--;
        console.log(planeSeats, updatedPrice);
      } else if (planeSeats >= 2) {
        updatedPrice = basePrice * 1.05;
        planeSeats--;
        console.log(planeSeats, updatedPrice);
      } else if (planeSeats >= 1) {
        updatedPrice = 500;
        planeSeats--;
        console.log(updatedPrice);
      } else {
        planeSeats = 0;
      }
        message = "SEAT SOLD! Your total price is: $" + updatedPrice + "\n" + "Seats left: " + planeSeats;
        return message;
};