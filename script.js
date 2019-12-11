console.log("hello script js");

var seats = 10;
var seatPrice = 50;



var inputHappened = function(currentInput){
  console.log( currentInput );
  var yourSeatPrice = seatPrice;
  seats--;
  if(seats > 5){
  	seatPrice = seatPrice * 1.03;
  } else if (seats <= 5 && seats > 1){
  	seatPrice = seatPrice * 1.05;
  } else if (seats === 1){
  	seatPrice = 91000;
  }
  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+seats+" seats left."
};
