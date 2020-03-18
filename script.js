console.log("hello script js");

var seatsLeft = 10;
var seatPrice = 50;

var seatSold = function(){
    seatsLeft--;
    seatPrice = seatPrice * 1.05;
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output;
  output = `Your seat is $${seatPrice}`;
  seatSold();

  return output;
};