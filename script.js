
// Implement a program for a kiosk that sells airline tickets.
// A plane has 10 seats.
// When the plane is empty a seat is $50.
// For each seat sold the ticket price goes up 5% over the original price of $50.
// When a user types buy into the input, consider that seat sold and show the user the price of their seat.

let remainingSeats;
let seatPrice;

var inputHappened = function(currentInput){

    generateRandomNum();
    remainingSeats = randomNum;

    document.getElementById("#seatRemain").textContent = remainingSeats;

    if (remainingSeats <= 0) {
        display("Sorry but there are no seats available")
        display2("Sorry but there are no seats available")
        display3("Sorry but there are no seats available")
    } else {
        normalPricing(remainingSeats);
        display("There are " + remainingSeats + " seats left. Next seat is priced at $" + seatPrice.toFixed(2));

        refinedPricing(remainingSeats);
        display2("There are " + remainingSeats + " seats left. Next seat is priced at $" + refinedPrice.toFixed(2));

        refinedPricing2(remainingSeats);
        display3("There are " + remainingSeats + " seats left. Next seat is priced at $" + refinedPrice2.toFixed(2));
    }

};

const generateRandomNum = function() {
    randomNum = Math.floor(Math.random() * 10);
    return randomNum;
}

const normalPricing = function(remainingSeats) {
    seatPrice = 50 * (1 + (0.05 * (10 - remainingSeats)));
    return seatPrice;
}


// The airline boss requests finer-grained pricing:
// For the first half of the seats, the price goes up 3% over the original price of $50.
    // E.g. If seatsSold = 0,1,2,3,4,5
    // remainingSeats = 10,9,8,7,6,5
    // seatPrice = 50 * (1 + (0.03 * 5)) //  Answer is 57.5

// For the second half it goes up by 5% over the original price of $50.
    // If seatsSold = 6,7,8,
    // remainingSeats = 4,3,2
    // seatPrice = 50 * (1 + (0.03 * 5) + (0.05 * (6-5))) // Answer is $60.

// The last seat is $91,000.
    // If seatsSold = 9,
    // remainingSeats = 1
    // seatPrice = $91,000

const refinedPricing = function(remainingSeats) {

    if (remainingSeats === 1) {
        refinedPrice = 91000;
        return refinedPrice;

    } else if (remainingSeats > 5 && remainingSeats <= 10) {
        refinedPrice = 50 * (1 + (0.03 * (10 - remainingSeats)));
        return refinedPrice;

    } else {
        refinedPrice = 50 * (1 + (0.12 + (0.05 * (6 - remainingSeats))));
        return refinedPrice;
    }

}

// When outputing a message tell the user how many tickets are left before the price bracket goes up.
    // If remainingSeats = 0 -> Display: All seats have been sold
    // If remainingSeats = 10 -> Display: 5 tickets before next pricing tier
    // If remainingSeats = 9 -> Display: 4 tickets before next pricing tier
    // If remainingSeats = 8 -> Display: 3 tickets before next pricing tier
    // If remainingSeats = 7 -> Display: 2 tickets before next pricing tier
    // If remainingSeats = 6 -> Display: 1 tickets before next pricing tier
    // If remainingSeats = 5 -> Display: next ticket will be subjected to new price tier
    // If remainingSeats = 4 -> Display: 3 tickets before prices increase
    // If remainingSeats = 3 -> Display: 2 tickets before prices increase
    // If remainingSeats = 2 -> Display: 1 ticket before prices increase
    // If remainingSeats = 1 -> Display: price has increased to final tier!




// Change the pricing to increase by 3% and 5% over the current price of the ticket. (i.e., each ticket is some percentage more than the last)

    // remainingSeats = 10, seatsSold = 0 -> seatPrice = 50
    // remainingSeats = 9, seatsSold = 1 -> seatPrice = 50 * 1.03
    // remainingSeats = 8, seatsSold = 2 -> seatPrice = (50 * 1.03^2
    // remainingSeats = 7, seatsSold = 3 -> seatPrice = (50 * 1.03^3
    // remainingSeats = 6, seatsSold = 4 -> seatPrice = (50 * 1.03^4
    // remainingSeats = 5, seatsSold = 5 -> seatPrice = (50 * 1.03^5
    // remainingSeats = 4, seatsSold = 6 -> seatPrice = (50 * 1.03^5) * 1.05
    // remainingSeats = 3, seatsSold = 7 -> seatPrice = (50 * 1.03^5) * 1.05^2
    // remainingSeats = 2, seatsSold = 8 -> seatPrice = (50 * 1.03^5) * 1.05^3
    // remainingSeats = 1, seatsSold = 9 -> seatPrice = (50 * 1.03^5) * 1.05^4
    // remainingSeats = 0, seatsSold = 10 -> seatPrice = All sold out

const refinedPricing2 = function(remainingSeats) {
    if (remainingSeats === 1) {
        refinedPrice2 = 91000;
        return refinedPrice2;

    } else if (remainingSeats > 5 && remainingSeats <= 10) {
        refinedPrice2 = 50 * (Math.pow(1.03, (10 - remainingSeats)));
        return refinedPrice2;
    } else {
        refinedPrice2 = 50 * (Math.pow(1.03,4)) * Math.pow(1.05,(6 - remainingSeats));
        return refinedPrice2;
    }
}


// ##### For economy pricing is the same.
// For the first half of the seats, the price goes up 3%.
// For the second half it goes up by 5%.
// The last seat is $91,000.

const econPricing = function(remainingSeats) {

    if (remainingSeats === 1) {
        econPrice = 91000;
        return refinedPrice;

    } else if (remainingSeats > 5 && remainingSeats <= 15) {
        econPrice = 50 * (1 + (0.03 * (10 - remainingSeats)));
        return econPrice;

    } else {
        econPrice = 50 * (1 + (0.12 + (0.05 * (6 - remainingSeats))));
        return econPrice;
    }

}