// Data Description

//Price of empty seat (number)
var emptySeatPrice = 50;
console.log(emptySeatPrice + " " + typeof emptySeatPrice);

// Price of sold seat (number) - part 1
var soldSeatPrice = 1.05 * emptySeatPrice;

// No of seats left (number)
var seatsLeft = 10;
console.log(seatsLeft + " " + typeof seatsLeft);

// priceSurge(number)
var priceSurge1 = 1.03;
var priceSurge2 = 1.05;

//Last ticket price (number)
var lastTicketPrice = emptySeatPrice;
console.log(lastTicketPrice + " " + typeof lastTicketPrice);

//New ticket price (number)
var newTicketPrice = null;
console.log(newTicketPrice + " " + typeof newTicketPrice);

// Function Purpose, Show buyer the purchased seat price
var inputHappened = function(currentInput){
    console.log(currentInput + " " + typeof currentInput);

    // currentInput(Buy) && seatLeft(<5) => soldSeatPrice(Show 3% price)

    if (currentInput === "b" && seatsLeft === 10) {
        soldSeatPrice = 1.03 * emptySeatPrice;
        lastTicketPrice = soldSeatPrice;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + soldSeatPrice + " seats left " + seatsLeft + " before price surge additional 2%");
    }
    else if (currentInput === "b" && seatsLeft > 5 && seatsLeft < 10) {
        newTicketPrice = lastTicketPrice * priceSurge1;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + newTicketPrice + " seats left " + seatsLeft + " before price surge additional 2%");
    }
    else if (currentInput === "b" && seatsLeft <= 5 && seatsLeft > 1) {
        newTicketPrice = lastTicketPrice * priceSurge2;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + newTicketPrice + " seats left " + seatsLeft + " before price really surge exponentally");
    }
    else if (currentInput === "b" && seatsLeft === 1) {
        soldSeatPrice = 91000;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + soldSeatPrice + " no seats left ");
    }
    else if (currentInput === "b" && seatsLeft < 1) {
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("tickets all sold out");
    }
    else {
        display("Your purchase is cancelled");
    }

console.log("seats left: " + seatsLeft);
};
/*

if ( currentInput === "b" && seatsLeft === 10 ) {
    soldSeatPrice = 1.03 * emptySeatPrice;
    lastTicketPrice = soldSeatPrice;
    seatsLeft = seatsLeft - 1;
    console.log(seatsLeft);
    display("Your ticket is purchased at $" + soldSeatPrice + " seats left " + seatsLeft + " before price surge additional 2%");
};

    else if ( currentInput === "b" && seatsLeft > 5 && seatsLeft < 10) {
        newTicketPrice = lastTicketPrice * priceSurge1;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + newTicketPrice + " seats left " + seatsLeft + " before price surge additional 2%");
    };

    else if (currentInput === "b" && seatsLeft <= 5 && seatsLeft > 1) {
        newTicketPrice = lastTicketPrice * priceSurge2;
        seatsLeft = seatsLeft - 1;
        console.log(seatsLeft);
        display("Your ticket is purchased at $" + newTicketPrice + " seats left " + seatsLeft + " before price really surge exponentally");
    }
    else if (currentInput === "b" && seatsLeft === 1) {
        // currentInput(Buy) && seatLeft(10) => soldSeatPrice(Show 91k price)
        soldSeatPrice = 91000;

        seatsLeft = seatsLeft - 1;
        display("Your ticket is purchased at $" + soldSeatPrice + " no seats left ");
    }
    else if (currentInput === "b" && seatsLeft < 1) {
        display("tickets all sold out");
    }
    else {
        // currentInput(!Buy) => soldSeatPrice(Show cancelled)
        display("Your purchase is cancelled");
    }
    console.log("seats left: " + seatsLeft);


*/


/* Price of sold seat (number) - part 2
if (seatsLeft <= 5) {
    soldSeatPrice = 1.03 * emptySeatPrice;
}
    else if (seatsLeft > 5 && seatsLeft < 10) {
    soldSeatPrice = 1.05 * emptySeatPrice;
}
    else {

}
console.log(soldSeatPrice + " " + typeof soldSeatPrice);
*/








// Function Signature

// Function Header


/*

console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/