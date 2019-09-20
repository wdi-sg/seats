console.log("hello script js");

var ticketPrice = 50;
var noOfSeats = 10;

var inputHappened = function(currentInput){
    console.log( currentInput );
    if( noOfSeats > 0){
    noOfSeats = noOfSeats - 1;
    //noOfSeats --;
    calculatePrice();
    display("Price of ticket is "+ ticketPrice + "\nNo of seats Left: " + noOfSeats)

    }else{
        display("No more")s
    }
};

var calculatePrice = function(){
    ticketPrice = ticketPrice * 1.05
};


/*console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};*/




/* no of seats vs price of seats
only 10 seats, starting price = $50
if seat -1, price + 5%
if whatever type = seat sold n show the user the price of the seat.
Define your variables?
    calculatePrice
    seatsleft
*/


/*var calculatePrice = function() {
    console.log("inside the sayHello function now...");
    // 5
    return "50 dollars";
}*/