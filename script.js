//set starting variables
var numberOfTakenSeatsEconomy = 0;
var numberOfTakenSeatsBusiness = 0;
var numberOfTakenSeatsFirst = 0;
var ticketPrice = 50;

//define function that happens if user selects economy class
var buyEconomy = function() {
    if (numberOfTakenSeatsEconomy > 0 && numberOfTakenSeatsEconomy < 8) {
        ticketPrice = 51.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy > 7 && numberOfTakenSeatsEconomy = < 14) {
        ticketPrice = 52.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy === 15) {
        ticketPrice = 91000;
        var data = `Your ticket costs $${ticketPrice}, hope you have credit.`;
        display(data);
    }
    numberOfTakenSeatsEconomy += 1;
    console.log(numberOfTakenSeatsEconomy)
    else {
        display(`Sorry, Economy Class seats are sold out! But we have ${numberOfTakenSeatsBusiness} seats left in Business and ${numberOfTakenSeatsFirst} seats left in First.`)
    }
};

//define function that happens if user selects business class
var buyBusiness = function() {
    if (numberOfTakenSeatsBusiness > 0 && numberOfTakenSeatsBusiness < 4) {
        ticketPrice = 53;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness >= 4 && numberOfTakenSeatsBusiness < 6) {
        ticketPrice = 52.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness === 6) {
        ticketPrice = 91000;
        var data = `Your ticket costs $${ticketPrice}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsBusiness += 1;
    console.log(numberOfTakenSeatsBusiness);
    else {
        display(`Sorry, Business Class seats are sold out! But we have ${numberOfTakenSeatsEconomy} seats left in Economy and ${numberOfTakenSeatsFirst} seats left in First.`)
    }
};

//define function that happens if user selects first class
var buyFirst = function() {
    if (numberOfTakenSeatsFirst > 0 && numberOfTakenSeatsFirst < 4) {
        ticketPrice = 57.5;
        var data = `Your ticket costs $${ticketPrice}.`;
        display(data);
    } else if (numberOfTakenSeatsFirst === 4) {
        ticketPrice = 191000;
        var data = `Your ticket costs $${ticketPrice}, a rocket might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsFirst += 1;
    console.log(numberOfTakenSeatsFirst);
    else {
        display(`Sorry, First Class seats are sold out! But we have ${numberOfTakenSeatsEconomy} seats left in Economy and ${numberOfTakenSeatsBusiness} seats left in Business.`)
    }
};

var checkClass = function(currentInput) {
    var string = currentInput.toLowerCase();
    if (str.includes("economy")) {
        buyEconomy();
    } else if (str.includes("business")) {
        buyBusiness();
    } else if (str.includes("first")) {
        buyFirst();
    } else {
        display("Sorry, we didn't quite get that!")
    }

//message if seats in all cats are sold out