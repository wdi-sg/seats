console.log("hello script js");

/************************* Finer-grained pricing *****************************

var seats = 10;
var seatPrice = 0;
var startPrice = 50;

var inputHappened = function(currentInput){
    if (seats === 10) {
        seats--;
        return "The price of your seat is $" + startPrice.toFixed(2);
    } else if (seats < 10 && seats >= 6) {
        seats--;
        seatPrice = 1.03 * startPrice;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ". There are " + (seats - 5) + " seat(s) left before the price goes up further.";
    } else if (seats < 6 && seats >= 2) {
        seats--;
        seatPrice = 1.05 * startPrice;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ". There are " + (seats - 1) + " seat(s) left before the price goes up further.";
    } else if (seats === 1){
        seats--;
        return "The price of your seat is $91,000."
    } else {
        return "Sorry, there are no more available seats.";
    }
};

*/

/************************* Percentage Increase *****************************

var seats = 10;
var seatPrice = 50;

var inputHappened = function(currentInput){
    if (seats === 10) {
        seats--;
        return "The price of your seat is $" + seatPrice.toFixed(2);
    } else if (seats < 10 && seats >= 6) {
        seats--;
        seatPrice *= 1.03;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ".";
    } else if (seats < 6 && seats >= 2) {
        seats--;
        seatPrice *= 1.05;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ".";
    } else if (seats === 1){
        seats--;
        return "The price of your seat is $91,000."
    } else {
        return "Sorry, there are no more available seats.";
    }
};

*/

/************************* Upgraded Fleet *****************************


var seatsEconomy = 15;
var seatsBusiness = 6;
var seatsFirstClass = 4;
var seatPrice = 50;

var inputHappened = function(currentInput){
    if (currentInput.toLowerCase() === "buy first class"){
        seatsFirstClass--;
            if (seatsFirstClass <= 4 && seatsFirstClass >= 1){
            return "The price of your seat is $" + (seatPrice * 1.15).toFixed(2);
        } else if (seatsFirstClass === 0) {
            var lastSeatPrice = 191000;
            return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
        } else if (seatsFirstClass < 0) {
            return "Sorry, there are no more First Class seats available.";
        }
    } else if (currentInput.toLowerCase() === "buy business class") {
        seatsBusiness--;
            if (seatsBusiness <= 6 && seatsBusiness >=4) {
                return "The price of your seat is $" + (seatPrice * 1.06).toFixed(2) + ".";
            } else if (seatsBusiness < 4 && seatsBusiness > 1 ) {
                return "The price of your seat is $" + (seatPrice * 1.1).toFixed(2) + ".";
            } else if (seatsBusiness === 1) {
                var lastSeatPrice = 91000;
                return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
            } else if (seatsBusiness < 1) {
                return "Sorry, there are no more Business Class seats available.";
            }
    }  else if (currentInput.toLowerCase() === "buy economy class") {
        seatsEconomy--;
            if (seatsEconomy <= 15 && seatsEconomy >= 8) {
                return "The price of your seat is $" + (seatPrice * 1.03).toFixed(2);
            } else if (seatsEconomy < 8 && seatsEconomy > 1) {
                return "The price of your seat is $" + (seatPrice * 1.05).toFixed(2);
            } else if (seatsEconomy === 1) {
                var lastSeatPrice = 91000;
                return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
            } else if (seatsEconomy < 1) {
                return "Sorry, there are no more Economy Class seats available.";
            }
    }   else {
        return "Your selection is invalid. Please input one of the following: 'buy first class', 'buy business class' or 'buy economy class'.";
    }
}

*/

/********************* Fleet of Aircraft *****************************************
Buy and cancel functionality not implemented yet
*/

var state = 0;
var seatsEconomy = 15;
var seatsBusiness = 6;
var seatsFirstClass = 4;
var seatPrice = 50;
var seatsKL = 10;

var inputHappened = function(currentInput){
    if (state === 0 && currentInput.toLowerCase() === "bali") {
        state++;
        return "Please choose one of the following: 'buy first class', 'buy business class' or 'buy economy class'."
    } else if (state === 0 && currentInput.toLowerCase() === "kl") {
        state+=2;
        return flightsKL();
    } else if (state === 1 && currentInput.toLowerCase() === "buy first class"){
        return buyFirstClass();
    } else if (state === 1 && currentInput.toLowerCase() === "buy business class"){
        return buyBusiness();
    } else if (state === 1 && currentInput.toLowerCase() === "buy economy class"){
        return buyEconomy();
    } else {
        return "Sorry, we do not have any flights there at the moment.";
    }
}


var buyFirstClass = function(){
    seatsFirstClass--;
    if (seatsFirstClass <= 4 && seatsFirstClass >= 1){
        return "The price of your seat is $" + (seatPrice * 1.15).toFixed(2);
    } else if (seatsFirstClass === 0) {
        var lastSeatPrice = 191000;
        return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
    } else if (seatsFirstClass < 0) {
        return "Sorry, there are no more First Class seats available.";
    }
}



var buyBusiness = function() {
    seatsBusiness--;
    if (seatsBusiness <= 6 && seatsBusiness >=4) {
        return "The price of your seat is $" + (seatPrice * 1.06).toFixed(2) + ".";
    } else if (seatsBusiness < 4 && seatsBusiness > 1 ) {
        return "The price of your seat is $" + (seatPrice * 1.1).toFixed(2) + ".";
    } else if (seatsBusiness === 1) {
        var lastSeatPrice = 91000;
        return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
    } else if (seatsBusiness < 1) {
        return "Sorry, there are no more Business Class seats available.";
    }
}


var buyEconomy = function() {
    seatsEconomy--;
    if (seatsEconomy <= 15 && seatsEconomy >= 8) {
        return "The price of your seat is $" + (seatPrice * 1.03).toFixed(2);
    } else if (seatsEconomy < 8 && seatsEconomy > 1) {
        return "The price of your seat is $" + (seatPrice * 1.05).toFixed(2);
    } else if (seatsEconomy === 1) {
        var lastSeatPrice = 91000;
        return "The price of your seat is $" + lastSeatPrice.toFixed(2) + ".";
    } else if (seatsEconomy < 1) {
        return "Sorry, there are no more Economy Class seats available.";
    }  else {
        return "Your selection is invalid. Please input one of the following: 'buy first class', 'buy business class' or 'buy economy class'.";
    }
}


var flightsKL = function(){
    if (seatsKL === 10) {
        seatsKL--;
        return "The price of your seat is $" + seatPrice.toFixed(2);
    } else if (seatsKL < 10 && seatsKL >= 6) {
        seatsKL--;
        seatPrice *= 1.03;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ".";
    } else if (seatsKL < 6 && seatsKL >= 2) {
        seatsKL--;
        seatPrice *= 1.05;
        return "The price of your seat is $" + seatPrice.toFixed(2) + ".";
    } else if (seatsKL === 1){
        seatsKL--;
        return "The price of your seat is $91,000."
    } else {
        return "Sorry, there are no more available seats.";
    }
};