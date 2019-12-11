console.log("hello script js");

var basePrice = 50;
var planeSeats = 10;

var message;
var updatedPrice;

var toSecondTier = 4;

var inputHappened = function(currentInput){
  console.log( currentInput );

// calculating prices of plane tickets and counting down from 10
      if (planeSeats === 10) {
        updatedPrice = basePrice;
        planeSeats--;
        console.log(updatedPrice,planeSeats);
        message = "SEAT SOLD! Your total price is: $" + updatedPrice + "\n" + "Seats left: " + planeSeats;
      } else if (planeSeats >= 6) {
        updatedPrice = updatedPrice * 1.03;
        planeSeats--;
        toSecondTier--;
        console.log(planeSeats, updatedPrice);
        message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats + "\n" + "Seats before price increase: " + toSecondTier;
      } else if (planeSeats >= 2) {
        updatedPrice = updatedPrice * 1.05;
        planeSeats--;
        console.log(planeSeats, updatedPrice);
        message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats;
      } else if (planeSeats >= 1) {
        updatedPrice = 91000;
        planeSeats--;
        console.log(updatedPrice);
        message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats;
      } else {
        planeSeats = 0;
        message = "SOLD OUT! Better luck next time!";
      }
        return message;
};