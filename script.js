console.log("Ready to sell seats");

var planeSeats = 10;
var seatsSold = 0;
var percentageIncrement = 5;
var seatPrice = 50;

console.log((planeSeats - seatsSold) + " seats left.");

var sellSeat = function(sellSeat) {
    if (seatsSold === planeSeats) {
        return "Sorry plane is sold out. :("
    }

    var seatAdjustedPrice = seatPrice + (seatPrice * (percentageIncrement / 100) * seatsSold);
    seatsSold++;

    console.log((planeSeats - seatsSold) + " seats left.");
    return "Sold you a seat for " + seatAdjustedPrice;
}

var inputHappened = function(currentInput){
    return sellSeat();
};