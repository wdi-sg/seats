console.log("hello script js");

var ticket = "";
var state = 0;
var economySeatPrice = 50;
var businessSeatPrice = 50;
var firstClassSeatPrice = 50;
var economySeats = 15;
var businessSeats = 6;
var firstClassSeats = 4;
var confirmation = "Ticket purchased! Your ticket was $";
var seatsRemaining = "\n\nSeats Available before price bracket goes up: ";
var next = "\n\nInput 'Buy Economy', 'Buy Business', or 'Buy First Class' to purchase another ticket, or 'Done' to end the transaction.";

var inputHappened = function(currentInput){

    /*when plane tickets = 10, ticket = $50
    *plane tickets 1-9, ticket $50*1.05
    *ticket sold when user inputs anything
    */

    // if ( currentInput.toLowerCase() ==  "buy economy") {
    //     ticket = "economy";
    //     var output = ""
    // }

    if ( currentInput.toLowerCase() == "buy economy" && economySeats != 0 ) {

        if ( economySeats <= 15 && economySeats > 8 ) {
        economySeats --;
        economySeatPrice *= 1.03;
        var cheaperSeats = economySeats - 8;
        console.log(cheaperSeats);
        var output = confirmation + economySeatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( economySeats > 1 && economySeats < 9 ) {
        economySeats --;
        economySeatPrice *= 1.05;
        var cheaperSeats = economySeats - 1;
        console.log(cheaperSeats);
        output = confirmation + economySeatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( economySeats == 1 ) {
        economySeats --;
        var lastSeat = 91000;
        output = "You got the last seat! Your ticket was $" + lastSeat + "."
        }
    }

    else if ( currentInput.toLowerCase() == "buy business" && businessSeats != 0 ) {

        if ( businessSeats <= 6 && businessSeats > 3 ) {
        businessSeats --;
        businessSeatPrice *= 1.06;
        var cheaperSeats = businessSeats - 3;
        console.log(cheaperSeats);
        var output = confirmation + businessSeatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( businessSeats > 1 && businessSeats < 4 ) {
        businessSeats --;
        businessSeatPrice *= 1.10;
        var cheaperSeats = businessSeats - 1;
        console.log(cheaperSeats);
        output = confirmation + businessSeatPrice.toFixed(2) + "." + seatsRemaining + cheaperSeats + next;
        }

        else if ( businessSeats == 1 ) {
        businessSeats --;
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

    else if ( economySeats = 0 || businessSeats == 0 ) {
        output = "We're all out of tickets!"
    }

    else {
        output = "Input not recognised! \n\nPlease input 'Buy Economy', 'Buy Business', or 'Buy First Class' to purchase a ticket or 'Quit' to cancel the transaction."
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