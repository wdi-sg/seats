console.log("hello script js");

var planeSeats = 10;
var priceOfSeat = 50;
var priceIncrement = 0.05;

var inputHappened = function(currentInput) {
	if(planeSeats === 0) {
		return "Sorry, all tickets have been sold out."
	}
	planeSeats = planeSeats - 1
	priceOfSeat = priceOfSeat + (priceOfSeat * priceIncrement);
	return priceOfSeat
};