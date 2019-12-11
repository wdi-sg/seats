console.log("Ready to sell seats");

var planeSeats = 10;
var seatsSold = 0;
var percentageIncrementFirst = 3;
var percentageIncrementSecond = 5;
var seatPrice = 50;
var currentPrice = seatPrice;

console.log((planeSeats - seatsSold) + " seats left.");

var sellSeat = function(sellSeat) {
    if (seatsSold === planeSeats) {
        return "Sorry plane is sold out. :("
    }
    var percentageIncrement = percentageIncrementFirst;
    var incrementMessage = ""
    // use if-else statements to determine how expensive the seat should be.
    if (planeSeats - seatsSold === 1) {
        console.log("Sold the final seat!");
        seatsSold++;
        return "Sold you the final seat for $91000";
    } else if ( (planeSeats - seatsSold) <= (planeSeats / 2)) { // less than half the seats left
        percentageIncrement = percentageIncrementSecond;
        incrementMessage = (planeSeats - seatsSold - 2) + " more seats available until price increase.";
        console.log("5% increase");
    } else {
        incrementMessage = ((Math.floor(planeSeats / 2)) - seatsSold - 1) + " more seats available until price increase.";
        percentageIncrement = percentageIncrementFirst;
        console.log("3% increase");
    }

    var seatAdjustedPrice = currentPrice;
    currentPrice *= 1 + (percentageIncrement / 100);
    seatsSold++;

    console.log((planeSeats - seatsSold) + " seats left.");
    return "Sold you a seat for $" + seatAdjustedPrice + ". " + incrementMessage;
}

var inputHappened = function(currentInput){
    return sellSeat();
};