console.log("hello script js");


var numOfSeats = 10;
var ticketPrice = 50;
var priceSurge = ticketPrice * 0.05;

// declare within function (currentInput) and it works
// var newSeatNum = function() {
//     numOfSeats = numOfSeats - 1;
// };

var inputHappened = function(currentInput){
    // console.log( currentInput );

    if (currentInput === "buy" && numOfSeats > 0){
        numOfSeats = numOfSeats - 1;
        ticketPrice = ticketPrice + priceSurge;
        console.log(numOfSeats);
        display(ticketPrice);
    }
    else if (numOfSeats <= 0) {
        display ("sold out");

    }
};

// var numOfSeats = 10;
// var ticketPrice = 50;
// var firstHalf = 0.03;
// var secondHalf = 0.05;
// var lastSeatPrice = 91000;


// var inputHappened = function(currentInput){
//     // console.log( currentInput );

//     if (currentInput === "buy" && numOfSeats > 6){
//         numOfSeats = numOfSeats - 1;
//         ticketPrice = ticketPrice + (ticketPrice * firstHalf);
//         console.log(numOfSeats);
//         display(ticketPrice);
//     }
//     else if (currentInput === "buy" && numOfSeats <= 6){
//         numOfSeats = numOfSeats - 1;
//         ticketPrice = ticketPrice + (ticketPrice * secondHalf);
//         console.log(numOfSeats);
//         display(ticketPrice);

//     }
//      else if (currentInput === "buy" && numOfSeats === 1) {

//         ticketPrice = lastSeatPrice;
//         display (ticketPrice);
//     }
//     else if (numOfSeats <= 0) {
//         display ("sold out");

//     }
// };