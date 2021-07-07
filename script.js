console.log("hello script js");


// Part 1
// define which variables are needed
var seatsLeft = 10;
var actualPrice = 50;
var latestPrice;

//has a small error, decrement not working

var inputHappened = function(currentInput){
    console.log( currentInput );

    if (seatsLeft === 10) {
        seatsLeft = seatsLeft - 1;
        return ("Price is $" + actualPrice);
    }

    else if (seatsLeft < 10 && seatsLeft > 0) {
        seatsLeft = seatsLeft - 1;
        latestPrice = actualPrice * 1.05;

        return ("Price is $" + latestPrice);
     }

    else {
        return ("Sorry, tickets are sold out!");}
}


/*
// Part 2
// define which variables are needed
var seatsLeft = 10;
var actualPrice = 50;
var lastSeatPrice = 91000;
var latestPrice;


// if statement has issue but added "$" in console.log
var inputHappened = function(currentInput){
    console.log( currentInput );
    if (seatsLeft === 10 ) {
        seatsLeft = seatsLeft - 1;
        latestPrice = actualPrice * 1.05;
        console.log("$" + latestPrice);
    }
    else if (seatsLeft < 10 && seatsLeft > 5) {
        seatsLeft = seatsLeft - 1;
        latestPrice = actualPrice * 1.05;
        console.log("$" + latestPrice);
     }

     else if (seatsLeft < 6 && seatsLeft > 2) {
        seatsLeft = seatsLeft - 1;
        latestPrice = actualPrice * 1.03;
        console.log("$" + latestPrice);
     }

    else if (seatsLeft > 0 && seatsLeft < 2) {
        seatsLeft = seatsLeft - 1;
        console.log("$" + lastSeatPrice);}

    else {
        console.log("Sorry, tickets are sold out!");}
    }

 inputHappened();
 */