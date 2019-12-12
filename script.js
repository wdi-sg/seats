


// .Total seats on plane = 10
// First plane ticket when empty = 50
// Price after first ticket = (1 + (1 * 0.05))
// Price after second ticket = (1 + (1 * 0.10))

console.log("hello script js");



//   console.log( currentInput );
//   return "WOW SOMETHING HAPPENED";
// }

//Total number of seats at the start when nothing is bought.
var initialSeats = 10;
console.log("initialSeats = " + initialSeats);

var numberOfSeatsSold = 0;

//initial price of the first plane ticket.
var originalPrice = 50;
//subsequent increments
var increment = 0.05;
var inputHappened = function(currentInput){
//After 1st ticket is sold
  if (numberOfSeatsSold === 0) {
    numberOfSeatsSold++;
    console.log("Tickets sold = " + numberOfSeatsSold);
    var message = "Congratulations! You just bought a ticket at \$" + originalPrice + ".";
    input.value = "";
    input.placeholder = "";
    return message;
//selling subsequent tickets
  } else if ( numberOfSeatsSold < initialSeats ) {
    var priceOfSeat = originalPrice * ( 1 + (increment * numberOfSeatsSold ));
    numberOfSeatsSold++;
    console.log("Tickets sold = " + numberOfSeatsSold);
    var message = "Congratulations! You just bought a ticket at \$" + priceOfSeat + ".";
    input.value = "";
    input.placeholder = "";
    return message;
//When tickets are sold out
  } else {
    input.value = "";
    input.placeholder = "Nada left";
    return "WE have no more tickets!";
  }
}