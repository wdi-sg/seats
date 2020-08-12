console.log("script loaded");

// 10 seat plane --

// if empty seat is 50
// for first half price increase of 3% of last price sold
// for second half price increase of 5% of last price sold

// final seat is 91,000

// 3 cabin plane --

// 15 economy seats
// first half : 3% of last
// sehalf : 5% of last
// last seat : $91 000


// 6 business seats
// first half : 6%
// second half : 10%
// last seat : $91 000


// 4 first seats
// all seats : 15% of 50
// last seat : $191 000

// input flow
// 1) choose destination KL (10 seat) / BALI (3 cabin)
// 2) buy first class / buy economy class / buy business
// 3) show price of the ticket
// 4) opto buy or cancel

// output message

// show destinations
// show amount of seats till next bracket for the planes per cabin

// create global variables for user selections and plane profiles

var currentUser = {
    'destination' : '',
    'plane': '',
    'seatType' : '',
    'price' : 0,
}

var plane = {
    tenSeat: {
        'standard' : {
            'seatAmt' : 10,
            'seatsLeft' : 10,
            'firstHalfPerc' : 3,
            'secondHalfPerc' : 5,
            'basePrice' : 50,
            'lastSeatPrice' : 91000,
            'lastPriceSold' : 0,
            'firstMulti' : 1.03,
            'secondMulti': 1.05,
        }
    },
    threeCabin: {
        'economy' : {
                'seatAmt' : 15,
                'seatsLeft' : 15,
                'firstHalfPerc' : 3,
                'secondHalfPerc' : 5,
                'basePrice' : 50,
                'lastSeatPrice' : 91000,
                'lastPriceSold' : 0,
                'firstMulti' : 1.03,
                'secondMulti': 1.05,
        },
        'business' : {
                'seatAmt' : 6,
                'seatsLeft' : 6,
                'firstHalfPerc' : 6,
                'secondHalfPerc' : 10,
                'basePrice' : 50,
                'lastSeatPrice' : 91000,
                'lastPriceSold' : 0,
                'firstMulti' : 1.06,
                'secondMulti': 1.1,
        },
        'first' : {
                'seatAmt' : 4,
                'seatsLeft' : 4,
                'firstHalfPerc' : 15, //15 of 50
                'basePrice' : 50,
                'lastSeatPrice' : 191000,
                'lastPriceSold' : 0,
                'firstMulti' : 1.15,
                'secondMulti': 1.15,
        }
    },
}


// input flow --

// error check before all inputs // var validInput = errorCheck(userInput, [list,of,allowed,words]) // returns true or error message

// 1) choose destination KL (10 seat) / BALI (3 cabin)
// 2) buy first class / buy economy class / buy business
// 3) show price of the ticket
// 4) option to buy or cancel

// output message

// show destinations
// show amount of seats till next bracket for the planes per cabin
var dashboard = function(plane){
        var bE = checkBracket('threeCabin','economy');
        var bB = checkBracket('threeCabin','business');
        var bF = checkBracket('threeCabin','first');
        var tS = checkBracket('tenSeat','standard');
        var output = `Please select your destination:

        Bali
        Economy: ${plane.threeCabin.economy.seatsLeft} seats left.
        ${bE} seats to next price bracket;

        Business: ${plane.threeCabin.business.seatsLeft} seats left.
        ${bB} seats to next price bracket;

        First Class: ${plane.threeCabin.first.seatsLeft} seats left.

        KL
        Standard: ${plane.tenSeat.standard.seatsLeft} seats left.
        ${tS} seats to next price bracket;`;
        return output;
     }

// helper to check till next bracket
var checkBracket = function(planeType, seatType){
    var currentPlane = plane[planeType][seatType];
    if (currentPlane.seatAmt === currentPlane.seatsLeft) {
        return 1;
    } else if (currentPlane.seatsLeft >= Math.floor(currentPlane.seatAmt / 2)) {
        return currentPlane.seatsLeft - Math.floor(currentPlane.seatAmt / 2);
    } else if (currentPlane.seatsLeft !== 1) {
        return currentPlane.seatsLeft - 1;
    } else {
        return 0;
    }
}

// global variable to track state
var state = 0;
// display default
document.querySelector('#output').innerText = dashboard(plane);

// calls all the calculator functions
var showPrice = function(user){
    var price = calculatePrice(user.plane, user.seatType)
    return price; // this seat cost price
}

// // 10 seat plane --

// if empty seat is 50
// for first half price increase of 3% of last price sold
// for second half price increase of 5% of last price sold

// final seat is 91,000

// 3 cabin plane --

// 15 economy seats
// first half : 3% of last
// second half : 5% of last
// last seat : $91 000


// 6 business seats
// first half : 6%
// second half : 10%
// last seat : $91 000


// 4 first seats
// all seats : 15% of 50
// last seat : $191 000

var calculatePrice = function(planeType, seatType){
    var currentPlane = plane[planeType][seatType];
    var price = 0;
    if (currentPlane.seatAmt === currentPlane.seatsLeft) {
        price = currentPlane.basePrice;
    } else if (currentPlane.seatsLeft >= Math.floor(currentPlane.seatAmt / 2)) {
        price = currentPlane.lastPriceSold * currentPlane.firstMulti;
    } else if (currentPlane.seatsLeft !== 1) {
        price = currentPlane.lastPriceSold * currentPlane.secondMulti;
    } else {
        price = currentPlane.lastSeatPrice;
    }
    return price.toFixed(2);
}

var purchase = function(){
    // helper function to decrement the plane seat left
    plane[currentUser.plane][currentUser.seatType].seatsLeft--;
    plane[currentUser.plane][currentUser.seatType].lastPriceSold = currentUser.price;

    // calculate price
    // set lastPriceSold to calculated price
}

// takes in 2 inputs --> input string and array of allowed values
// return true or false
var errorCheck = function(input, allowedValues){
    return allowedValues.includes(input);
}

var inputHappened = function(currentInput){
    document.querySelector('#input').value = '';
    var output;
    currentInput = currentInput.toLowerCase();
    switch (state) {
        case 0:
            if (!errorCheck(currentInput, ['bali', 'kl'])) {
                return "Invalid input. Try again.\n" + dashboard(plane);
            }
            // get input destination
            // error check
            // if fail
            // prompt again
            // if pass
            // add input destination t  currentUser
            if (currentInput === 'bali') {
                state = 1;
                currentUser.destination = 'bali';
                currentUser.plane = 'threeCabin';
                output =
                `Please choose your seat type:
                Economy // Business // First
                `;
                return output;
            } else {
                state = 2;
                currentUser.destination = 'kl'
                currentUser.plane = 'tenSeat'
                currentUser.seatType = 'standard';
                var price = showPrice(currentUser)
                currentUser.price = price
                output = `The price is ${price}.
                Enter 'buy' or 'cancel' to proceed.`;
                return output;
            }
            // if kl
            // state = 2
            // add standard to SeatType
            // calculate price
            // output to show price
            break;
        case 1:
            if (!errorCheck(currentInput, ['economy', 'business', 'first'])) {
                var price = showPrice(currentUser)
                output = `The price is ${currentUser.price}.
                Enter 'buy' or 'cancel' to proceed.`;
                return output;
            }
            // get input seat type
            // error check
            // if fail
            // prompt again
            // if pass
            state = 2;
            currentUser.seatType = currentInput;
            var price = showPrice(currentUser)
            currentUser.price = price
            output = `The price is ${price}.
            Enter 'buy' or 'cancel' to proceed.`;
            return output;
            // state =  2
            // add seat to seatType
            // calculate price
            // output to show price
            break;
        case 2:
            if (!errorCheck(currentInput, ['buy', 'cancel'])) {
                var price = showPrice(currentUser)
                output = `The price is ${currentUser.price}.
                Enter 'buy' or 'cancel' to proceed.`;
                return output;
            }
            // get input to buy or cancel
            // error check
            // if fail
            // prompt again
            // if pass
            // if buy
            // seat left decrement
            // if cancel
            // do nothing
            if (currentInput === 'buy') {
                purchase();
            }
            // --
            state = 0;
            currentUser.destination = '';
            currentUser.seatType = '';
            currentUser.price = '';
            currentUser.plane = '';
            output = dashboard(plane);
            return output;
            // state = 0
            // rese currentUser
            // output dashboard
            break;
    }
    return output ;
};