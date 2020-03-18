console.log("hello script js");

//A program for a kiosk that sells airline tickets.

var emptySeats = 10;
var ticketPrice = 50.00;

//PART 1

var inputHappened = function(anyInput){
//Seat 1 sold. emptySeats is 10.
  emptySeats -= 1;
  if(emptySeats === 9) {
    //emptySeats is 9 after click. Price is $50.
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else if(emptySeats >= 0 && emptySeats < 9) {
    //Seat 2 - 10 sold. Price increase by 0.05%.
    ticketPrice *= 1.05;
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else {
    return "Tickets sold out.";
  };
};