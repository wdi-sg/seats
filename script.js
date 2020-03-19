console.log("Airticket Kiosk!");

var totalPlaneSeats = 10;
var firstHalfSeats = 50 * 1.03;
var secondHalfSeats = 50 * 1.05;
var firstSeatOnThePlane = 50;
var befPriceChange;
var compoundingPrice = 50;
var lastSeat = 91000;

var inputHappened = function(currentInput) {
  if (isNaN(currentInput)) {
    return "Sorry please enter Economy , Business or First Class!";
  } else if (totalPlaneSeats === 10) {
    totalPlaneSeats = totalPlaneSeats - 1;
    befPriceChange = totalPlaneSeats - 9;
    return (
      "Your ticket is $ " +
      firstSeatOnThePlane +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (totalPlaneSeats < 10 && totalPlaneSeats > 5) {
    totalPlaneSeats = totalPlaneSeats - 1;
    befPriceChange = totalPlaneSeats - 5;
    compoundingPrice = compoundingPrice * 1.03;
    return (
      "Your ticket is $ " +
      Math.round((compoundingPrice + Number.EPSILON) * 100) / 100 +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (totalPlaneSeats < 6 && totalPlaneSeats > 1) {
    totalPlaneSeats = totalPlaneSeats - 1;
    befPriceChange = totalPlaneSeats - 1;
    compoundingPrice = compoundingPrice * 1.05;
    return (
      "Your ticket is $ " +
      Math.round((compoundingPrice + Number.EPSILON) * 100) / 100 +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (totalPlaneSeats === 1) {
    totalPlaneSeats = totalPlaneSeats - 1;
    return (
      "Your ticket is $ " + lastSeat + " This is the last ticket available!"
    );
  } else {
    return "Sorry no more tickets!";
  }
};
