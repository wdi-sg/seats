console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};

// A plane has 10 seats.

// When the plane is empty a seat is $50.

// For each seat sold the ticket price goes up 5% over the original price of $50.

// When a user types anything into the input, consider that seat sold and show the user the price of their seat.

//------------------------------------------------------------------------

// - calculate the price of a seat when it never changes. ( it is always $50 )

var originalSeatPrice = 50;

var planeSeats = 10;

var newSeatPrice;

var message;

var inputHappened = function(currentInput){

  console.log( currentInput );

// - add on keeping track of how many seats are left on the plane

// - add on the price increase functionality

if ( planeSeats === 10 ) {

    planeSeats = planeSeats - 1

    newSeatPrice = originalSeatPrice

    console.log ( planeSeats, newSeatPrice );

} else if ( planeSeats < 10 ) {

    planeSeats = planeSeats - 1

    newSeatPrice = originalSeatPrice * 1.05

    console.log ( planeSeats, newSeatPrice );

}

message = ( "Seat sold for $" + newSeatPrice + " there are " + planeSeats + " remaining")

return message ;

}