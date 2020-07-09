console.log("hello script js");

var planeSeats = 10;
var priceOfSeat = 50;
var lowerPriceIncrement = 0.03;
var higherPriceIncrement = 0.05;

var inputHappened = function(currentInput) {
	if(!currentInput) {
		return "Your input is invalid"
	}
	if(planeSeats === 0) {
		return "Sorry, all tickets have been sold out."
	}
	planeSeats = planeSeats - 1
	priceOfSeat = calculateTicketPrice(planeSeats, priceOfSeat);
	var remainingTicketsTillIncrementMessage = calculateTicketsLeftBeforeIncrement(planeSeats)
	return `Current price of ticket is ${priceOfSeat.toFixed(2)} and 
	the number of tickets left is ${planeSeats}. ${remainingTicketsTillIncrementMessage}`
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

var calculateTicketsLeftBeforeIncrement = function(currentTicketCount) {
	var threePercentIncrementMark = 4;
	var fullIncrementMark = 0;
	var result;

	// to execute this if statement if currentTicketCount is more than 4
	if(currentTicketCount > threePercentIncrementMark) {
		result = currentTicketCount - 5
		if (result === 0) {
			return "Price bracket has now increased to 5%"
		}
		else {
			return `${result} tickets left before price goes up.`
		}
	}

	// to execute this if statement if currentTicketCount is more than or equal to 0
	if (currentTicketCount >= fullIncrementMark) {
		result = currentTicketCount - 1
		if (result === 0) {
			return "the price has gone up and the next ticket will cost $91000.00"
		} else if(result === -1) {
			return ""
		} else {
			return `${result} tickets left before price goes up.`
		}
	}

	// return the initial count passed in if no conditions are satisfied
	return currentTicketCount
}