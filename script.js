console.log("hello script js");

var seats = 10;
var seatPrice = 50;



var inputHappened = function(currentInput){
  console.log( currentInput );
  var yourSeatPrice = seatPrice;
  seats--;
  seatPrice = seatPrice * 1.05;
  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+seats+" seats left."
};
