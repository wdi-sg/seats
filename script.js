console.log("hello script js");

var planeSeats = 10;
var priceOfSeat = 50;
var lowerPriceIncrement = 0.03;
var higherPriceIncrement = 0.05;

var inputHappened = function(currentInput) {
	if(planeSeats === 0) {
		return "Sorry, all tickets have been sold out."
	}
	planeSeats = planeSeats - 1
	priceOfSeat = calculateTicketPrice(planeSeats, priceOfSeat);
	return `Current price of ticket is ${priceOfSeat.toFixed(2)} and 
	the number of tickets left is ${planeSeats}.`
};

var calculateTicketPrice = function(numOfSeats, currentPriceOfSeat) {
	if(numOfSeats > 4) {
		return currentPriceOfSeat + (currentPriceOfSeat * lowerPriceIncrement)
	}
	if(numOfSeats > 0) {
		return currentPriceOfSeat + (currentPriceOfSeat * higherPriceIncrement)
	} else {
		return 91000
	}
}