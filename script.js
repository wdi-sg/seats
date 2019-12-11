console.log("hello script js");

// define which variables are needed
var seatsLeft = 10;
var actualPrice = 50;
var latestPrice;

//has a small error, decrement not working

var inputHappened = function(currentInput){
    console.log( currentInput );
    if (seatsLeft === 10) {
        seatsLeft = seatsLeft - 1;
        console.log(actualPrice);
    }
     else if (seatsLeft <10 && seatsLeft >0) {
        seatsLeft = seatsLeft - 1;
        latestPrice = actualPrice * 1.05;
        console.log(latestPrice);
     }

    else {console.log("Sorry, tickets are sold out!");}
}