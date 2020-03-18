var originalPrice = 50;
var numSeats = 10;

var inputHappened = function(currentInput){
    console.log(numSeats)
    if (numSeats === 10) {
        numSeats = numSeats - 1;
        return output = `Price of first ticket is $${originalPrice}`;
    }

    if (numSeats === 0) {
        return 'Sold out!'
    } else if (numSeats < 10) {
        numSeats = numSeats - 1;
        console.log(numSeats)
        var newPrice = originalPrice * 1.05;
        return output = `Price of subsequent ticket is $${newPrice}`;
    }
};