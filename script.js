console.log("hello script js");

//finished 2nd part

var totalPlaneSeats = 10; //total number of seats in the plane
var startingPrice = 50; //price of a seat when plane is empty
var halfFullPrice = 56 // price of a seat when plane is half full
var priceIncrement1 = 1.5; //Price increase per seat first half
var priceIncrement2 = 2.5; //Price increase per seat second half
var filledSeats = 0; //Number of seats filled
var currentSeatPrice; //Seat price at time of input
var finalSeatPrice = 91000; //Seat of final seat



var calculateSeatPrice = function() {
    console.log(filledSeats);
    if (filledSeats < 5) {
    currentSeatPrice = startingPrice + (filledSeats * priceIncrement1);
    console.log(currentSeatPrice);
} else if (filledSeats < 9) {
    currentSeatPrice = halfFullPrice + ((filledSeats - 4) * priceIncrement2);
    console.log(currentSeatPrice);
    return currentSeatPrice;
} else {
    currentSeatPrice = finalSeatPrice;
    console.log(currentSeatPrice);
    return currentSeatPrice;
}
};

var inputHappened = function(currentInput){
  console.log( filledSeats );
  calculateSeatPrice();
  if (filledSeats > totalPlaneSeats) {
      filledSeats = filledSeats + 1;
    return "Sorry but all seats are sold out."
  } else {
    filledSeats = filledSeats + 1;
    return currentSeatPrice; };
};