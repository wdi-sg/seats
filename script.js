console.log("hello script js");

var state = 0;
var seatPrice = 50;
var seats = 10;
var confirmation = "Ticket purchased! Your ticket was $";
var seatsRemaining = "\n\nSeats Available before price bracket goes up: ";
var next = "\n\nInput 'Buy' to purchase another ticket, or 'Done' to end the transaction.";

var inputHappened = function(currentInput){

    /*when plane tickets = 10, ticket = $50
    *plane tickets 1-9, ticket $50*1.05
    *ticket sold when user inputs anything
    */

    if ( currentInput.toLowerCase() == "buy" && seats != 0 ) {

        if ( seats <= 10 && seats > 5 ) {
        seats --;
        seatPrice *= 1.03;
        var cheaperSeats = seats - 5;
        var output = confirmation + seatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( seats > 1 && seats < 6 ) {
        seats --;
        seatPrice *= 1.05;
        cheaperSeats = seats - 1;
        output = confirmation + seatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( seats == 1 ) {
        seats --;
        var lastSeat = 91000;
        output = "You got the last seat! Your ticket was $" + lastSeat + "."
        }
    }

    else if ( currentInput.toLowerCase() == "quit" || state == 1 ) {
        output = "Transaction Cancelled! Thank you."
        state = 1;
    }

    else if ( currentInput.toLowerCase() == "done" || state == 2 ) {
        output = "Transaction Ended! Thank you."
        state = 2;
    }

    else if ( seats == 0 ) {
        output = "We're all out of tickets!"
    }

    else {
        output = "Input not recognised! \n\nPlease input 'Buy' to purchase a ticket or 'Quit' to cancel the transaction."
    }


  input.value="";
  console.log(seats);
  return output;

};


var fivePercent = function () {
    return firstSeat * 1.05;
}

var threePercent = function () {
    return firstSeat * 1.03;
}