console.log("hello script js");


var totalSeats = 10;
var baseSeatPrice = 50;
var seatsFilled = 0;
var currentSeatPrice;
var priceIncrease = 0.05*50;

var inputHappened = function(currentInput){

    if (seatsFilled >= 10){
        return "Tickets Sold Out - The plane is full.";
    } else {

    currentSeatPrice = baseSeatPrice + (seatsFilled * priceIncrease);
    seatsFilled = seatsFilled + 1;
    console.log( currentInput );
    return "Please pay $" + currentSeatPrice + "!";
}


};
