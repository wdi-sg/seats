console.log("hello script js");
var seatCounter = 0;
var seat = 10;
var normalPrice = 50;

var inputHappened = function(currentInput){
  seatCounter = seatCounter + 1;
  var price = normalPrice + (normalPrice / 100 * (5 * seatCounter));
  return price;
};