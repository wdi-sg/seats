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
var priceIncreased6Percent = 0.06;
var priceIncreased10Percent = 0.1;
var priceIncreased15Percent = 0.15;


// FOR PART 4
//newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage * seatsSold);

// Updated ticket price when user types buy

var inputHappened = function (userInput) {

    if (userInput === "buy economy class") { // INPUT ECONOMY CLASS - 15 SEATS
        // ECONOMY CLASS SECTION ///////////////////////////////
        console.log("User enters buy economy class");

        /* START ECONOMY CLASS PRICE CALCULATION */
        var econHalf = Math.floor(totalEconClassSeats/2);
        econClassSeatsSold = econClassSeatsSold + 1;

        if (econClassSeatsSold <= econHalf) { // BTW 1 TO 7 SEATS
            console.log("You tickets costs 3% more");
            console.log( (econHalf - econClassSeatsSold) + " econ seats left b4 5% increase" );
            var newPrice = ticketPrice + (ticketPrice * priceIncreased3Percent * econClassSeatsSold);
            display( (econHalf - econClassSeatsSold) + " econ seats left b4 5% increase" + "\n\n" + "Your ticket costs $" + newPrice );
        } else if ( (econClassSeatsSold > econHalf) && (econClassSeatsSold <= (totalEconClassSeats - 1)) ) { // BTW 8 TO 14 SEATS
            console.log("You tickets costs 5% more");
            console.log( ( (totalEconClassSeats - 1) - econClassSeatsSold ) + " econ seats left b4 $91,000 seat" );
            newPrice = ticketPrice + (ticketPrice * priceIncreased5Percent * econClassSeatsSold );
            display( ((totalEconClassSeats-1) - econClassSeatsSold ) + " econ seats left b4 $91,000" + "\n\n" + "You ticket costs $" + newPrice );
        } else {
            console.log("You pay $91,000");
            display("You ticket costs $91,000" );
            console.log( (econClassSeatsSold) + " econ seats" );
        }
        /* END OF ECONOMY CLASS PRICE CALCULATION */

    } else if (userInput === "buy business class") { // INPUT BUSINESS CLASS = 6 SEATS
        // BUSINESS CLASS SECTION ///////////////////////////////
        console.log("User enters buy business class")

        /* START BUSINESS CLASS PRICE CALCULATION */
        var bizHalf = Math.floor(totalBizClassSeats/2);
        bizClassSeatsSold = bizClassSeatsSold + 1;

        if (bizClassSeatsSold <= bizHalf) { // BTW 1 TO 3 SEATS
            console.log("You tickets costs 6% more");
            console.log( (bizHalf - bizClassSeatsSold) + " econ seats left b4 10% increase" );
            var newPrice = ticketPrice + (ticketPrice * priceIncreased6Percent * bizClassSeatsSold);
            display( (bizHalf - bizClassSeatsSold) + " econ seats left b4 10% increase" + "\n\n" + "Your ticket costs $" + newPrice );
        } else if ( (bizClassSeatsSold > bizHalf) && (bizClassSeatsSold <= (totalBizClassSeats - 1)) ) { // BTW 4 TO 5 SEATS
            console.log("You tickets costs 5% more");
            console.log( ( (totalBizClassSeats - 1) - bizClassSeatsSold ) + " econ seats left b4 $91,000 seat" );
            newPrice = ticketPrice + (ticketPrice * priceIncreased10Percent * bizClassSeatsSold );
            display( ((totalBizClassSeats-1) - bizClassSeatsSold ) + " econ seats left b4 $91,000" + "\n\n" + "You ticket costs $" + newPrice );
        } else {
            console.log("You pay $91,000");
            display("You ticket costs $91,000" );
            console.log( (bizClassSeatsSold) + " econ seats" );
        }
        /* END OF BUSINESS CLASS PRICE CALCULATION */

    } else if (userInput === "buy first class") { // INPUT FIRST CLASS = 4 SEATS
        // FIRST CLASS SECTION ///////////////////////////////
        console.log("User enters buy first class")

    } else { // IF USER INPUT IS NOT ECON, BIZ OR FIRST CLASS PROMPT FOR CORRECT INPUT
        console.log("Please enter 'buy' to purchase ticket.");
        display("Please enter 'buy' to purchase ticket.");
    }
    // CLEAR INPUT BOX
    document.querySelector('#input').value="";
};