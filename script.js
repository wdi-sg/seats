console.log("hello script js");

//basic logic is done

var totalPlaneSeats = 10; //total number of seats in the plane
var startingPrice = 50; //price of a seat when plane is empty
var priceIncrement = 2.5; //Price increase per bought seat
var filledSeats = 0; //Number of seats filled
var currentSeatPrice; //Seat price at time of input



var calculateSeatPrice = function() {
    console.log(filledSeats);
    currentSeatPrice = startingPrice + (filledSeats * priceIncrement)
    return currentSeatPrice;
};

var inputHappened = function(currentInput){
  console.log( currentInput );
  calculateSeatPrice();
  filledSeats = filledSeats + 1;
/*  if (filledSeats = 10) {
    return "Sorry, the plane is full. No more seats available."
  } else {*/
  return currentSeatPrice;
};