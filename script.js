console.log("hello script js");

var firstSeat = 50;
var seats = 10;
var confirmation = "Ticket purchased! Your ticket was $"
var seatsRemaining = "\n\nSeats Available before price bracket goes up: "

var inputHappened = function(currentInput){
  console.log( currentInput );

  /*when plane tickets = 10, ticket = $50
  *plane tickets 1-9, ticket $50*1.05
  *ticket sold when user inputs anything
  */

  if ( seats <= 10 && seats > 5 ) {
    seats --;
    var cheaperSeats = seats - 5;
    console.log(seats);
    var output = confirmation + threePercent() + "." + seatsRemaining + cheaperSeats;
  }

  else if ( seats > 1 && seats < 6 ) {
    seats --;
    cheaperSeats = seats - 1;
    console.log(seats);
    output = confirmation + fivePercent() + "." + seatsRemaining + cheaperSeats;
  }

  else if ( seats == 1 ) {
    seats --;
    var lastSeat = 91000;
    console.log(seats);
    output = "You got the last seat! Your ticket was $" + lastSeat + "."
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

var threePercent = function () {
    return firstSeat * 1.03;
}