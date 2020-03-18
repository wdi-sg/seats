var originalPrice = 50;
var numSeats = 10;

var inputHappened = function(currentInput){
    var newPrice, calcPrice;

    if (numSeats === 10) {
        numSeats = numSeats - 1;
        return output = `Price of your ticket is $${originalPrice}. There are ${numSeats} tickets left.`;
    }

    if (numSeats === 0) {
        return 'Sold out!'
    } else if (numSeats <= 9 && numSeats > 5) {
        numSeats = numSeats - 1;
        calcPrice = originalPrice * Math.pow(1.03, (9 - numSeats));
        newPrice = calcPrice.toFixed(2);
        return output = `Price of your ticket is $${newPrice}. There are ${numSeats} tickets left.`;
    } else if (numSeats <= 5 && numSeats > 1) {
        numSeats = numSeats - 1;
        calcPrice = originalPrice * Math.pow(1.03, 4) * Math.pow(1.05, 5 - numSeats);
        newPrice = calcPrice.toFixed(2);
        return output = `Price of your ticket is $${newPrice}. There are ${numSeats} tickets left.`;
    } else if (numSeats === 1) {
        numSeats = numSeats - 1;
        newPrice = 91000;
        return output = `Price of your ticket is $${newPrice}. There are ${numSeats} tickets left.`;
    }
};