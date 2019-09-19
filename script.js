// Global variable for seatsAvailable = 10
var seatsAvailable = 10;
console.log(seatsAvailable + " seats available");

// Global variable for originalTicketPrice = 50
var originalTicketPrice = 50;

var calSeatsAvailable = function(seatsBought) {

    // Calculate seats available
    seatsAvailable = seatsAvailable - seatsBought;

    return seatsAvailable;
};

var calTicketPrice = function(percentageIncrease) {

    // Calculate price ticket with percentage increase
    var inflatedTicketPrice = originalTicketPrice + (originalTicketPrice * percentageIncrease);

    return inflatedTicketPrice;
};

var inputHappened = function(currentInput){

    // Amount payable by user for ticket price
    var amtPayable = null;

    // If seatsAvailable = 10,
    if(seatsAvailable === 10) {

        // seatsAvailable - 1
        seatsAvailable = seatsAvailable - 1;
        console.log(seatsAvailable + " seats available");

        // set price is 50
        amtPayable = originalTicketPrice.toFixed(2);

        // show result to user
        var result = "Your seat has been reserved. Please pay $ " + amtPayable + "\n" + "Number of Seats Available: " + seatsAvailable ;

        return result;

    } else if(seatsAvailable >= 1 && seatsAvailable < 10) {

        // Else if seatsAvailable more than or equal to 1 & less than 10,

            // seatsAvailable - 1
        seatsAvailable = seatsAvailable - 1;
        console.log(seatsAvailable + " seats available");

            // show price = $50 + 5%
        amtPayable = (calTicketPrice(0.05)).toFixed(2);

        // show result to user
        result = "Your seat has been reserved. Please pay $ " + amtPayable + "\n" + "Number of Seats Available: " + seatsAvailable ;

        return result;

    } else {

        // Else (e.g. seatsAvailable = 0)
            // show no seats available
        // show result to user
        result = "Sorry, there are " + seatsAvailable + " seats available." ;

        return result;
    }
};