//set starting variables
var numberOfTakenSeatsEconomy = 0;
var numberOfTakenSeatsBusiness = 0;
var numberOfTakenSeatsFirst = 0;
var ticketPrice = 50;

//define function that happens if user selects economy class
var buyEconomy = function() {
    if (numberOfTakenSeatsEconomy >= 15) {
        display(`Sorry, Economy Class seats are sold out! But we have ${(6-numberOfTakenSeatsBusiness)} seats left in Business and ${4-numberOfTakenSeatsFirst} seats left in First.`)
    } else if (numberOfTakenSeatsEconomy >= 0 && numberOfTakenSeatsEconomy < 7) {
        ticketPrice = 51.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy > 6 && numberOfTakenSeatsEconomy < 14) {
        ticketPrice = 52.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy === 14) {
        ticketPrice = 91000;
        var data = `Your ticket costs $${ticketPrice}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsEconomy += 1;
    console.log(numberOfTakenSeatsEconomy)
};


//define function that happens if user selects business class
var buyBusiness = function() {
    if (numberOfTakenSeatsBusiness >= 6) {
        display(`Sorry, Business Class seats are sold out! But we have ${(15-numberOfTakenSeatsEconomy)} seats left in Economy and ${4-numberOfTakenSeatsFirst} seats left in First.`)
    } else if (numberOfTakenSeatsBusiness >= 0 && numberOfTakenSeatsBusiness < 3) {
        ticketPrice = 51.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness > 2 && numberOfTakenSeatsBusiness < 6) {
        ticketPrice = 52.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness === 5) {
        ticketPrice = 91000;
        var data = `Your ticket costs $${ticketPrice}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsBusiness += 1;
    console.log(numberOfTakenSeatsBusiness)
};

//define function that happens if user selects first class
var buyFirst = function() {
    if (numberOfTakenSeatsFirst >= 4) {
        display(`Sorry, First Class seats are sold out! But we have ${(15-numberOfTakenSeatsEconomy)} seats left in Economy and ${6-numberOfTakenSeatsBusiness} seats left in Business.`)
    } else if (numberOfTakenSeatsFirst >= 0 && numberOfTakenSeatsFirst < 3) {
        ticketPrice = 57.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsFirst === 3) {
        ticketPrice = 91000;
        var data = `Your ticket costs $${ticketPrice}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsFirst += 1;
    console.log(numberOfTakenSeatsFirst)
};


var checkClass = function(currentInput) {
    var str = currentInput.toLowerCase();
    if (str.includes("economy")) {
        buyEconomy();
    } else if (str.includes("business")) {
        buyBusiness();
    } else if (str.includes("first")) {
        buyFirst();
    } else {
        display("Sorry, we didn't quite get that!");
    }
};