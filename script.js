var ticketsLeft;
var ticketPrice = 50;
var fixedPrice;
var ticketPrice;
var planeClass;
var ticketsBought = 0;

function multiplyTicketPrice(multiplier) {
    ticketPrice = multiplier * ticketPrice;
    return ticketPrice;
};

var planeSeats = {
    economy: {
        seats: 15,
        firstHalf: 1.03,
        secondHalf: 1.05
    },
    business: {
        seats: 6,
        firstHalf: 1.06,
        secondHalf: 1.1
    },
    first: {
        seats: 4,
        firstHalf: 1.15,
        secondHalf: 1.15
    }
};

function calcHalfOfPlaneSeats(planeClass) {
    var myKey = planeClass;
    halfOfPlaneSeats = 0.5 * planeSeats[myKey].seats;
    return halfOfPlaneSeats;
};

function seatBought() {
    ticketsBought += 1;
    ticketsLeft--;
    console.log(`Number of tickets left: ${ticketsLeft}`);
    console.log(`Price of ticket: ${ticketPrice}`);
    return `Your price is $${ticketPrice.toFixed(2)}`;
};

var inputHappened = function(currentInput){
  if (ticketsBought === 0) {
    planeClass = currentInput
    ticketsLeft = planeSeats[planeClass].seats;
    var result = seatBought();
    return result;
} else if (ticketsLeft > calcHalfOfPlaneSeats(currentInput)) {
    multiplyTicketPrice(planeSeats[currentInput].firstHalf);
    var result = seatBought();
    return result;
} else if (ticketsLeft <= calcHalfOfPlaneSeats(currentInput) && ticketsLeft > 1) {
    multiplyTicketPrice(planeSeats[currentInput].secondHalf);
    var result = seatBought();
    return result;
} else if (ticketsLeft === 1) {
    if (currentInput === 'economy' || currentInput === 'business') {
    return "The last ticket is $91,000 or your firstborn.";
    } else if (currentInput === 'first') {
        var result = seatBought();
        return "Your life for this ticket. Or the low low price of $191,000."
    }
} else if (ticketsLeft === 0) {
    return "Go away. No plane tickets left. Try 🚆 or ⛵ instead! Unless you'd like to sit on the wings of the plane."
}};