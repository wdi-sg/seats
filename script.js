console.log("hello script js");

var firstSeat = 50;
var seats = 10;
var confirmation = "Ticket purchased! Your ticket was $"
var seatsRemaining = "\n\nSeats Available: "

var inputHappened = function(currentInput){
  console.log( currentInput );

  /*when plane tickets = 10, ticket = $50
  *plane tickets 1-9, ticket $50*1.05
  *ticket sold when user inputs anything
  */

  if ( seats == 10 ) {
    seats --;
    var output = confirmation + firstSeat + "." + seatsRemaining + seats;
  }

  else if ( seats > 0 && seats < 10 ) {
    seats --;
    output = confirmation + fivePercent() + "." + seatsRemaining + seats;

  }

  else {
    output = "We're all out of tickets!"
  }

  input.value="";
  return output;

};


var fivePercent = function () {
    return firstSeat * 1.05;

}