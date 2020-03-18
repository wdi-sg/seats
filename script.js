var originalPrice = 50;
var numSeats = 10;

var inputHappened = function(currentInput){
    var newPrice;

    if (numSeats === 10) {
        numSeats = numSeats - 1;
        return output = `Price of your ticket is $${originalPrice}`;
    }

    if (numSeats === 0) {
        return 'Sold out!'
    } else if (numSeats <= 9 && numSeats > 5) {
        numSeats = numSeats - 1;
        var newPrice = originalPrice * 1.03;
        return output = `Price of your ticket is $${newPrice}`;
    } else if (numSeats <= 5 && numSeats > 1) {
        numSeats = numSeats - 1;
        newPrice = originalPrice * 1.05;
        return output = `Price of your ticket is $${newPrice}`;
    } else if (numSeats === 1) {
        numSeats = numSeats - 1;
        newPrice = 91000;
        return output = `Price of your ticket is $${newPrice}`;
    }
};