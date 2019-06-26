console.log("hello script js");

//Part FIVE
// The airline upgraded it's fleet of aircraft. Each plane has 3 cabins, economy, business and first class.
// The user can now type in "buy first class" and the kiosk will sell them a first class seat, same for the other cabins.
// A plane now has 15 economy seats, 6 business class seats and 4 first class seats.

// The pricing models have also changed:
// For economy pricing is the same.
// For the first half of the seats, the price goes up 3%.
// For the second half it goes up by 5%.
// The last seat is $91,000.

// For business class:
// For the first half of the seats, the price goes up 6%.
// For the second half it goes up by 10%.
// The last seat is $91,000.

// For first class:
// All seats goes up by 15% over the original price of $50.
// The last seat is $191,000.


// When the plane is empty a seat is $50.
var ticketPrice = 50;

// Number of seats
var totalEconClassSeats = 15;
var totalBizClassSeats = 6;
var totalFirstClassSeats = 4;

// Number of seats sold
var econClassSeatsSold = 0;     // ECONOMY SEATS  ///////////////////////////////
var bizClassSeatsSold = 0;      // BUSINESS SEATS  ///////////////////////////////
var firstClassSeatsSold = 0;    // FIRST CLASS SEATS  ////////////////////////////

var priceIncreased3Percent = 0.03;
var priceIncreased5Percent = 0.05;

// FOR PART 4
//newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage * seatsSold);

// Updated ticket price when user types buy

var inputHappened = function (userInput) {

    if (userInput === "buy economy class") { // INPUT ECONOMY CLASS - 15 SEATS
        // ECONOMY CLASS SECTION ///////////////////////////////
        console.log("User enters buy economy class");
        //newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage);
        econClassSeatsSold = econClassSeatsSold + 1;
        //console.log(seatsSold + " seats sold");
        //console.log("You ticket costs $" + newPrice );
        //display("You ticket costs $" + newPrice );
        if (econClassSeatsSold <= 5) {
            console.log("You tickets costs 3% more");
            console.log( (5-seatsSold) + " seats left b4 5% increase" );
            var newPrice = ticketPrice + (ticketPrice * priceIncreased3Percent * seatsSold);
            display( (5-seatsSold) + " seats left b4 5% increase" + "\n\n" + "Your ticket costs $" + newPrice );
        } else if (seatsSold > 5 && seatsSold <= 9) {
            console.log("You tickets costs 5% more");
            console.log( (9-seatsSold) + " seats left b4 $91,000 seat" );
            newPrice = ticketPrice + (ticketPrice * priceIncreased5Percent * seatsSold);
            display( (9-seatsSold) + " seats left b4 $91,000" + "\n\n" + "You ticket costs $" + newPrice );
        } else {
            console.log("You pay $91,000");
            display("You ticket costs $91,000" );
            console.log( (seatsSold) + " seats" );
        }
    } else if { // INPUT BUSINESS CLASS = 6 SEATS
        // BUSINESS CLASS SECTION ///////////////////////////////
    } else if { // INPUT FIRST CLASS = 4 SEATS
        // FIRST CLASS SECTION ///////////////////////////////
    } else { // IF USER INPUT IS NOT ECON, BIZ OR FIRST CLASS PROMPT FOR CORRECT INPUT
        console.log("Please enter 'buy' to purchase ticket.");
        display("Please enter 'buy' to purchase ticket.");
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};