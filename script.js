console.log("hello script js");

/*var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
*/

//calculate the price of a seat when it never changes. it is always $50
//if number of seats is still 10, price of seat stays $50.
//use the numbersSubtracted - 1. return total value + number subtracted.
// adding on price increase functionality(?)

//if ticket is 10, no changes.
//number = 10
//if ticket is 9, 50 + (2.50 * (number - 1)

/* var originalPrice = 50;
var numberOfSeats = 10;
var seatsSold = 0;

var inputHappened = function(currentInput) {
    console.log("cur");
    var boughtPrice = originalPrice * (1 + (seatsSold * 0.05));
    numberOfSeats = numberOfSeats - 1;
    console.log(numberOfSeats);
    seatsSold = seatsSold + 1;
    console.log(seatsSold);
    var results = "Congrats you have bought a ticket at " + boughtPrice.tofixed(2);
    if (numberOfSeats < 0) {
        results = "Out of Seats";

    }


return results;


}

*/




//var numberOfSeats = 10
//var originalPrice = 50
//var priceOfSeats = priceOfSeats * 1.05
// var boughtPrice = originalPrice / 1.05

//boughtPrice.tofixed(2); (will fix it to decimal places)


var ticketPrice = 50;
var numberOfSeats = 10;

var inputHappened = function(currentInput) {
if (numberOfSeats > 0) {
    numberOfSeats = numberOfSeats - 1;

    calculatePrice();
return("Congrats!Price of Ticket is " + ticketPrice + " & Number of seats left is " + numberOfSeats);
}

else {
return("Sorry No more!")

}

};
var calculatePrice = function() {

ticketPrice = ticketPrice * 1.05

};

// if (numberOfSeats > 5 && numberOfSeats <10)
numberOfSeats = numberOfSeats -1;