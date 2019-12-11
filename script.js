console.log("hello script js");

//finished compound increment

var totalPlaneSeats = 10; //total number of seats in the plane
var startingPrice = 50; //price of a seat when plane is empty
var filledSeats = 0; //Number of seats filled
var currentSeatPrice; //Seat price at time of input
var finalSeatPrice = 91000; //Seat of final seat
var seatsLeft = 10; // Number of tickets before ticket being sold
var seatsTillBracket; // Number of tickets before next bracket
var bracketsMessage; // Output for brackets

var calculateSeatsLeft = function() {
    console.log(seatsLeft);
    seatsLeft = 10 - filledSeats;
    if (filledSeats < 5) {
        seatsTillBracket = seatsLeft - 6;
    } else if (filledSeats < 10) {
        seatsTillBracket = seatsLeft;
    } return seatsLeft;
}

var calculateSeatPrice = function() {
    console.log("ello");
    if (filledSeats === 0) {
        currentSeatPrice = startingPrice;
        console.log("ello there");
        return currentSeatPrice;
}   else if (filledSeats < 5) {
        currentSeatPrice = currentSeatPrice * 1.03;
        console.log(currentSeatPrice);
        return currentSeatPrice;
}   else if (filledSeats < 9) {
        currentSeatPrice = currentSeatPrice * 1.05;
        console.log(currentSeatPrice);
        return currentSeatPrice;
}   else {
        currentSeatPrice = finalSeatPrice;
        console.log(currentSeatPrice);
        return currentSeatPrice;
}
};


var inputHappened = function(currentInput){
  console.log( filledSeats );
  calculateSeatPrice();
  calculateSeatsLeft();
  if (filledSeats > totalPlaneSeats) {
      filledSeats = filledSeats + 1;
    return "Sorry but all seats are sold out."
  } else {
    filledSeats = filledSeats + 1;
    return "There are " + seatsLeft + " seats left" + "\n" + "$" + currentSeatPrice + "\n" + "There are " + seatsTillBracket + " seats till next bracket"};
};