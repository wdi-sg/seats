//console.log("hello script js");


var seatsLeft = 10;
var ticketPrice = 50;

//price increase function
// var calculatedTicketPrice = function(userInput) {
//     if (seatsLeft > 0) {
//     ticketPrice = ticketPrice + 2.5;
//     seatsLeft --;
//     return ticketPrice;
//     }
// }

//if user input 4
//seats left -4
//ticket price + (ticket price + 2.5) + (ticket price + 2.5 + 2.5) + (ticket price + 2.5 + 2.5 + 2.5)

/*
// numberOfSeatsSelected = currentInput
// keep track how many seats left
function calculateRemainingSeats(seatsLeft, currentInput) {
    if (currentInput < seatsLeft) {
        seatsLeft = seatsLeft - currentInput;
    }
    else {
        return calculateRemainingSeats;
    }
}

//price increase function
function calculateTicketPrice(ticketPrice, seatsLeft) {
for (let seatsLeft = 1; seatsLeft < 10; seatsLeft++) {
    return ticketPrice + (ticketPrice * 0.05)
 };
*/




//calculate price for user
var inputHappened = function(currentInput){
  console.log(currentInput);

  if (isNaN(currentInput)) {
    return output = "Invalid input!";
  }

    if (seatsLeft > 0) {
    ticketPrice = ticketPrice + 2.5;
    seatsLeft --;
    return ticketPrice;
    }

  // else if (currentInput < 10) {
  //   calculateTicketPrice();
  //   return output = currentInput + "tickets purchased!";
    // calculateTicketPrice();
    // return output = calculateTicketPrice;
  // }
  // // else {
  // //   return output = "Nothing happens";
   }