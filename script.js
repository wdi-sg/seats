var originalPrice = 50;
var numEconSeats = 15;
var numBusSeats = 6;
var numFirstSeats = 4;

var clearInput = function() {
    return document.getElementById("input").value = '';
}

document.querySelector('#output').innerText = `Please enter the appropriate input to purchase a ticket for the respective flight class: \n 'Buy Economy class' \n 'Buy Business class' \n 'Buy First class'`;

var inputHappened = function(currentInput){
    var newPrice, calcPrice;

    clearInput();

//Economy class
    if (currentInput.toLowerCase() === 'buy economy class') {

        if (numEconSeats === 15) {
            numEconSeats = numEconSeats - 1;
            return output = `Price of your ticket is $${originalPrice}. There are ${numEconSeats} Economy class tickets left.`;
        }

        if (numEconSeats === 0) {
            return 'Sold out!'
        } else if (numEconSeats <= 14 && numEconSeats > 8) {
            numEconSeats = numEconSeats - 1;
            calcPrice = originalPrice * Math.pow(1.03, (14 - numEconSeats));
            newPrice = calcPrice.toFixed(2);
            return output = `Price of your ticket is $${newPrice}. There are ${numEconSeats} Economy class tickets left.`;
        } else if (numEconSeats <= 8 && numEconSeats > 1) {
            numEconSeats = numEconSeats - 1;
            calcPrice = originalPrice * Math.pow(1.03, 6) * Math.pow(1.05, 8 - numEconSeats);
            newPrice = calcPrice.toFixed(2);
            return output = `Price of your ticket is $${newPrice}. There are ${numEconSeats} Economy class tickets left.`;
        } else if (numEconSeats === 1) {
            numEconSeats = numEconSeats - 1;
            newPrice = 91000;
            return output = `Price of your ticket is $${newPrice}. There are ${numEconSeats} Economy class tickets left.`;
        }
    };

//Business class
    if (currentInput.toLowerCase() === 'buy business class') {

        if (numBusSeats === 6) {
            numBusSeats = numBusSeats - 1;
            return output = `Price of your ticket is $${originalPrice}. There are ${numBusSeats} Business class tickets left.`;
        }

        if (numBusSeats === 0) {
            return 'Sold out!'
        } else if (numBusSeats <= 5 && numBusSeats > 4) {
            numBusSeats = numBusSeats - 1;
            calcPrice = originalPrice * Math.pow(1.06, (5 - numBusSeats));
            newPrice = calcPrice.toFixed(2);
            return output = `Price of your ticket is $${newPrice}. There are ${numBusSeats} Business class tickets left.`;
        } else if (numBusSeats <= 4 && numBusSeats > 1) {
            numBusSeats = numBusSeats - 1;
            calcPrice = originalPrice * Math.pow(1.03, 2) * Math.pow(1.1, 4 - numBusSeats);
            newPrice = calcPrice.toFixed(2);
            return output = `Price of your ticket is $${newPrice}. There are ${numBusSeats} Business class tickets left.`;
        } else if (numBusSeats === 1) {
            numBusSeats = numBusSeats - 1;
            newPrice = 91000;
            return output = `Price of your ticket is $${newPrice}. There are ${numBusSeats} Business class tickets left.`;
        }
    };

//First class
    if (currentInput.toLowerCase() === 'buy first class') {

        if (numFirstSeats === 0) {
            return 'Sold out!'
        } else if (numFirstSeats <= 4 && numFirstSeats > 1) {
            numFirstSeats = numFirstSeats - 1;
            calcPrice = originalPrice * Math.pow(1.15, (4 - numFirstSeats))
            newPrice = calcPrice.toFixed(2);
            return output = `Price of your ticket is $${newPrice}. There are ${numFirstSeats} First class tickets left.`;
        } else if (numFirstSeats === 1) {
            numFirstSeats = numFirstSeats - 1;
            newPrice = 191000;
            return output = `Price of your ticket is $${newPrice}. There are ${numFirstSeats} First class tickets left.`;
        }

    } else {
        return output = "Invalid input. Please enter the appropriate input to purchase a ticket for the respective flight class: \n 'Buy Economy class' \n 'Buy Business class' \n 'Buy First class'.";
    }
};