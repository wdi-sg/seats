console.log("hello script js");

var numOfTickets = 0;
const originalTicketPrice = 50;

var inputHappened = function(currentInput){
  // calculate the new price of ticket
  var newTicketPrice = originalTicketPrice  * ((numOfTickets * 0.05) + 1);

  // display price of ticket
  display("your ticket price is $" + newTicketPrice);

  // add number of tickets increase by 1
  numOfTickets = numOfTickets + 1;
};