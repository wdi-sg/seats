/* PART 1 of ASSIGNMENT
Calculate the price of a seat when it never changes. ( it is always $50 )
add on keeping track of how many seats are left on the plane add on the price increase functionality*/

console.log("hello script.js");

var users = 10; // Number of seats and plane passengers
var seatsSold = 0

var inputHappened = function(currentInput) {
// starting value
    seatsSold = seatsSold + 1;
    var originalSeatPrice = 50; // Original price of seats
    var seatsLeft = users - seatsSold;
    var newSeatPrice = (originalSeatPrice * 0.05) + originalSeatPrice;

    if (seatsSold === 1) {
        return ("Ticket price is: " + originalSeatPrice);
    } else if (seatsSold > 1 && seatsSold <= 10) {
        return ("Ticket price is: " + newSeatPrice);
    } else  {
        return ("Sold out");
    }
};