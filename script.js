//set starting variables - prices
var ticketPrice = 50;

var tierOnePriceE = 50;
var tierTwoPriceE = null;

var tierOnePriceB = 50;
var tierTwoPriceB = null;

var tierOnePriceF = 50;

//number of taken seats - starts at 0, increases by 1
var numberOfTakenSeatsEconomy = 0;
var numberOfTakenSeatsBusiness = 0;
var numberOfTakenSeatsFirst = 0;

//number of seats LEFT in tier per class (except most expensive)
var seatsinTierOneE = 6;
var seatsinTierTwoE = 6;

var seatsinTierOneB = 2;
var seatsinTierTwoB = 1;

var seatsinTierOneF = 2;


//define function that happens if user selects economy class
var buyEconomy = function() {
    if (numberOfTakenSeatsEconomy >= 15) {
        display(`Sorry, Economy Class seats are sold out! But we have ${(6-numberOfTakenSeatsBusiness)} seat(s) left in Business and ${4-numberOfTakenSeatsFirst} seat(s) left in First.`)
    } else if (numberOfTakenSeatsEconomy >= 0 && numberOfTakenSeatsEconomy < 7) {
        tierOnePriceE = tierOnePriceE * 1.03;
        var data = `Your ticket costs $${tierOnePriceE}. There are ${seatsinTierOneE} seat(s) left in this price bracket for Economy Class.`;
        display(data);
        seatsinTierOneE -= 1;
        tierTwoPriceE = tierOnePriceE;
    } else if (numberOfTakenSeatsEconomy > 6 && numberOfTakenSeatsEconomy < 14) {
        tierTwoPriceE = tierTwoPriceE * 1.05;
        var data = `Your ticket costs $${tierTwoPriceE}. There are ${seatsinTierTwoE} seat(s) left in this price bracket for Economy Class.`;
        display(data);
        seatsinTierTwoE -= 1;
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
        display(`Sorry, Business Class seats are sold out! But we have ${(15-numberOfTakenSeatsEconomy)} seat(s) left in Economy and ${4-numberOfTakenSeatsFirst} seat(s) left in First.`)
    } else if (numberOfTakenSeatsBusiness >= 0 && numberOfTakenSeatsBusiness < 3) {
        tierOnePriceB = tierOnePriceB * 1.06;
        var data = `Your ticket costs $${tierOnePriceB}.There are ${seatsinTierOneB} seat(s) left in this price bracket for Business Class.`;
        display(data);
        seatsinTierOneB -= 1;
        console.log(seatsinTierOneB);
        tierTwoPriceB = tierOnePriceB;
    } else if (numberOfTakenSeatsBusiness > 2 && numberOfTakenSeatsBusiness < 5) {
        tierTwoPriceB = Math.floor(tierTwoPriceB * 1.10);
        var data = `Your ticket costs $${tierTwoPriceB}. There are ${seatsinTierTwoB} seat(s) left in this price bracket for Business Class.`;
        display(data);
        seatsinTierTwoB -= 1;
        console.log(seatsinTierTwoB);
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
        tierOnePriceF = Math.floor(ticketPrice * 1.15);
        var data = `Your ticket costs $${tierOnePriceF}. There are ${seatsinTierOneF} seat(s) left in this price bracket for First Class.`;
        display(data);
        seatsinTierOneF -= 1;
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