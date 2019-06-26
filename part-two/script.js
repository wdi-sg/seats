console.log("hello script js");

//Part TWO
// The airline boss requests finer-grained pricing:
// For the first half of the seats, the price goes up 3% over the original price of $50.
// For the second half it goes up by 5% over the original price of $50.
// The last seat is $91,000.


// When the plane is empty a seat is $50.
var ticketPrice = 50;

// Number of seats sold
seatsSold = 0;
priceIncreased3Percent = 0.03;
priceIncreased5Percent = 0.05;

// FOR PART 4
//newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage * seatsSold);

// Updated ticket price when user types buy

var inputHappened = function (userInput) {
    if (userInput === "buy") {
        console.log("User enters buy");
        //newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage);
        seatsSold = seatsSold + 1;
        console.log(seatsSold + " seats sold");
        //console.log("You ticket costs $" + newPrice );
        //display("You ticket costs $" + newPrice );
        if (seatsSold <= 5) {
            console.log("You tickets costs 3% more");
            display("You ticket costs $" + (ticketPrice + (ticketPrice * priceIncreased3Percent)) );
        } else if (seatsSold > 5 && seatsSold <= 9) {
            console.log("You tickets costs 5% more");
            display("You ticket costs $" + (ticketPrice + (ticketPrice * priceIncreased5Percent)) );
        } else {
            console.log("You pay $91,000");
            display("You ticket costs $91,000" );
        }
    } else {
        console.log("Please enter 'buy' to purchase ticket.");
    }
    document.querySelector('#input').value="";
};