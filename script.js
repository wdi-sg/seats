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
        var tierOnePriceE = ticketPrice * 1.03;
        var data = `Your ticket costs $${tierOnePriceE}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy > 6 && numberOfTakenSeatsEconomy < 14) {
        var tierTwoPriceE = ticketPrice * 1.05;
        var data = `Your ticket costs $${tierTwoPriceE}.`;
        display(data);
    } else if (numberOfTakenSeatsEconomy === 14) {
        var tierThreePriceE = 91000
        var data = `Your ticket costs $${tierThreePriceE}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsEconomy += 1;
    console.log(`${numberOfTakenSeatsEconomy} seat(s) taken in Economy`)
};


//define function that happens if user selects business class
var buyBusiness = function() {
    if (numberOfTakenSeatsBusiness >= 6) {
        display(`Sorry, Business Class seats are sold out! But we have ${(15-numberOfTakenSeatsEconomy)} seats left in Economy and ${4-numberOfTakenSeatsFirst} seats left in First.`)
    } else if (numberOfTakenSeatsBusiness >= 0 && numberOfTakenSeatsBusiness < 3) {
        var tierOnePriceB = ticketPrice * 1.06;
        var data = `Your ticket costs $${tierOnePriceB}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness > 2 && numberOfTakenSeatsBusiness < 6) {
        var tierTwoPriceB = Math.floor(ticketPrice * 1.10);
        var data = `Your ticket costs $${tierTwoPriceB}.`;
        display(data);
    } else if (numberOfTakenSeatsBusiness === 5) {
        var tierThreePriceB = 91000;
        var data = `Your ticket costs $${tierThreePriceB}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsBusiness += 1;
    console.log(`${numberOfTakenSeatsBusiness} seat(s) taken in Business`)
};

//define function that happens if user selects first class
var buyFirst = function() {
    if (numberOfTakenSeatsFirst >= 4) {
        display(`Sorry, First Class seats are sold out! But we have ${(15-numberOfTakenSeatsEconomy)} seats left in Economy and ${6-numberOfTakenSeatsBusiness} seats left in Business.`)
    } else if (numberOfTakenSeatsFirst >= 0 && numberOfTakenSeatsFirst < 3) {
        var tierOnePriceF = Math.floor(ticketPrice * 1.15);
        var data = `Your ticket costs $${tierOnePriceF}.`;
        display(data);
    } else if (numberOfTakenSeatsFirst === 3) {
        var tierTwoPriceF = 191000;
        var data = `Your ticket costs $${tierTwoPriceF}, a jet might be cheaper.`;
        display(data);
    }
    numberOfTakenSeatsFirst += 1;
    console.log(`${numberOfTakenSeatsFirst} seat(s) taken in First`);
};

//save user input as a string and use that string to determine the function that gets called
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