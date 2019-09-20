console.log("hello script js");

// var seatsLeft = 10;
// var costOfSeat = 50;

// var inputHappened = function(currentInput) {
// 	if (currentInput == 1, seatsLeft-1) {
		


var costOfSeat = 50;

var inputHappened = function(currentInput){
	if (currentInput == 1) {
		var total = costOfSeat;
	} else if (currentInput == 2) {
		var total = (costOfSeat)*1.05;
	} else if (currentInput == 3) {
		var total = ((costOfSeat)*1.05)*1.05;
	} else if (currentInput == 4) {
        var total = (((costOfSeat)*1.05)*1.05)*1.05;
	} else if (currentInput == 5) {
		var total = ((((costOfSeat)*1.05)*1.05)*1.05)*1.05;
	}  else if (currentInput == 6) {
        var total = (((((costOfSeat)*1.05)*1.05)*1.05)*1.05)*1.05;
	}  else if (currentInput == 4) {
		var total = ((((((costOfSeat)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05;
	}  else if (currentInput == 3) {
		var total = (((((((costOfSeat)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05;
	}  else if (currentInput == 2) {
		var total = ((((((((costOfSeat)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05
	}  else if (currentInput == 1) {
		var total = (((((((((costOfSeat)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05)*1.05;
	}  else {
		return "Sorry It's Sold Out!";
	}
	    return total.toFixed(2);
	};