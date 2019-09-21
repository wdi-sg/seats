console.log("hello script js");

var planeSeats = 10;
var priceOfSeat = 50;
var priceIncrement = 0.05;

var inputHappened = function(currentInput) {
	planeSeats = planeSeats - 1
	priceOfSeat = priceOfSeat + (priceOfSeat * priceIncrement);
	return priceOfSeat
};