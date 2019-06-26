console.log("hello script js");

//Part FOUR
// Change the pricing to increase by 3% and 5% over the current price of the ticket.
// (i.e., each ticket is some percentage more than the last)


// When the plane is empty a seat is $50.
var ticketPrice = 50;


// Number of seats sold
var seatsSold = 0;
var priceIncreased3Percent = 0.03;
var priceIncreased5Percent = 0.05;

// FOR PART 4
//newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage * seatsSold);

// Updated ticket price when user types buy

var inputHappened = function (userInput) {
    if (userInput === "buy") {
        console.log("User enters buy");
        //newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage);
        seatsSold = seatsSold + 1;
        //console.log(seatsSold + " seats sold");
        //console.log("You ticket costs $" + newPrice );
        //display("You ticket costs $" + newPrice );
        if (seatsSold <= 5) {
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
    } else {
        console.log("Please enter 'buy' to purchase ticket.");
        display("Please enter 'buy' to purchase ticket.");
    }
    document.querySelector('#input').value="";
};