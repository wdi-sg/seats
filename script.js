console.log("Ready to sell seats");

var planeSeats = 10;
var seatsSold = 0;
var percentageIncrementFirst = 3;
var percentageIncrementSecond = 5;
var seatPrice = 50;

console.log((planeSeats - seatsSold) + " seats left.");

var sellSeat = function(sellSeat) {
    if (seatsSold === planeSeats) {
        return "Sorry plane is sold out. :("
    }
    var percentageIncrement = percentageIncrementFirst;
    // use if-else statements to determine how expensive the seat should be.
    if (planeSeats - seatsSold === 1) {
        console.log("Sold the final seat!");
        return "Sold you the final seat for $91000";
    } else if ( (planeSeats - seatsSold) <= (planeSeats / 2)) { // less than half the seats left
        percentageIncrement = percentageIncrementSecond;
    }

    var seatAdjustedPrice = seatPrice + (seatPrice * (percentageIncrement / 100) * seatsSold);
    seatsSold++;

    console.log((planeSeats - seatsSold) + " seats left.");
    return "Sold you a seat for $" + seatAdjustedPrice;
}

var inputHappened = function(currentInput){
    return sellSeat();
};