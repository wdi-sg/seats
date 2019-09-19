// Global variable for seatsAvailable = 10
var seatsAvailable = 10;

var inputHappened = function(currentInput){

    // If currentInput is not empty,
    if(currentInput !== null) {

        // minus 1 seat from seatsAvailable
        // store the new value back to seatsAvailable
        seatsAvailable = seatsAvailable - 1;

        // set price = $50 + 5%;
        var price = 50 + (50 * 0.05);

        // return price to user
        var result = "Your seat has been reserved. Please pay $ " + price + "\n" + "Number of Seats Available: " + seatsAvailable ;

        display(result);

    } else {

        // If current Input is empty,
            // set price is $50

        var price = 50;
        var result = "Current price " + price;

        display(result);
    }
};
