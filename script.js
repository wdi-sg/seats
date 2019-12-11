console.log("hello script js");

var seats = 10;
var seatPrice = 50;
var seatsBeforePriceIncrease; 
var storeStartingPrice = seatPrice;
var firstIncrease = seatPrice * 0.03;
var secondIncrease = seatPrice * 0.05;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var yourSeatPrice = seatPrice;
  seats--;

  if(seats > 5){
  	seatPrice = seatPrice + firstIncrease;
  } else if (seats <= 5 && seats > 1){
  	seatPrice = seatPrice + secondIncrease;
  } else if (seats === 1){
  	seatPrice = 91000;
  }

   
  if (seats > 5) { 
  	seatsBeforePriceIncrease = Math.max(seats - 5,0);
  } else {
  	seatsBeforePriceIncrease = Math.max(seats - 1,0);
  };

  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+seats+" seats left. Number of seats before price increase: "+seatsBeforePriceIncrease
};
