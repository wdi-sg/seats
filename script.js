// Global variable for seatsAvailable = 10
var seatsAvailable = 10;

var inputHappened = function(currentInput){

    // If seatsAvailable = 10,
    if(seatsAvailable === 10) {

        // seatsAvailable - 1
        seatsAvailable = seatsAvailable - 1;

        // set price is 50
        var price = 50;

        // show result to user
        var result = "Your seat has been reserved. Please pay $ " + price + "\n" + "Number of Seats Available: " + seatsAvailable ;

        return result;

    } else if(seatsAvailable >= 1 && seatsAvailable < 10) {

        // Else if seatsAvailable more than or equal to 1 & less than 10,

        // seatsAvailable - 1
        seatsAvailable = seatsAvailable - 1;

            // show price = $50 + 5%
        price = 50 + (50 * 0.05);

        // show result to user
        result = "Your seat has been reserved. Please pay $ " + price + "\n" + "Number of Seats Available: " + seatsAvailable ;

        return result;

    } else {

        // Else (e.g. seatsAvailable = 0)
            // show no seats available
        // show result to user
        result = "Sorry, there are " + seatsAvailable + " seats available." ;

        return result;
    }
};
