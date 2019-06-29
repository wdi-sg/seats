console.log("hello script js");

//Part One
// Implement a program for a kiosk that sells airline tickets.
// A plane has 10 seats.
// When the plane is empty a seat is $50.
// For each seat sold the ticket price goes up 5% over the original price of $50.
// When a user types buy into the input, consider that seat sold and show the user the price of their seat.


// When the plane is empty a seat is $50.
var ticketPrice = 50;

// Number of seats sold
seatsSold = 0;
priceIncreasedPercentage = 0.05;

// Updated ticket price when user types buy

var inputHappened = function (userInput) {
    if (userInput === "buy") {
        console.log("User enters buy");
        //newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage * seatsSold);
        newPrice = ticketPrice + (ticketPrice * priceIncreasedPercentage);
        seatsSold = seatsSold + 1;
        console.log(seatsSold + " seats sold");
        console.log("You ticket costs $" + newPrice );
        display("You ticket costs $" + newPrice );
    } else {
        console.log("Please enter 'buy' to purchase ticket.");
    }
    document.querySelector('#input').value="";
};